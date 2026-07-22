import http from 'node:http';
import { EventEmitter } from 'node:events';

class MCPSSEConnection extends EventEmitter {
  constructor(url) {
    super();
    this.url = new URL(url);
    this.requestId = 0;
    this.pending = new Map();
    this.buffer = '';
  }

  nextId() {
    return ++this.requestId;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: this.url.hostname,
        port: this.url.port,
        path: this.url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream, application/json',
        },
      };

      const req = http.request(options, (res) => {
        let data = '';
        res.setEncoding('utf8');
        
        res.on('data', (chunk) => {
          data += chunk;
          this.buffer += chunk;
          
          // Process SSE events
          const lines = this.buffer.split('\n');
          this.buffer = lines.pop() || '';
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const parsed = JSON.parse(line.slice(6));
                if (parsed.id && this.pending.has(parsed.id)) {
                  const { resolve } = this.pending.get(parsed.id);
                  resolve(parsed);
                  this.pending.delete(parsed.id);
                }
              } catch (e) {
                // ignore parse errors
              }
            }
          }
        });

        res.on('end', () => {
          // Process any remaining data
          if (this.buffer.trim()) {
            const lines = this.buffer.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const parsed = JSON.parse(line.slice(6));
                  if (parsed.id && this.pending.has(parsed.id)) {
                    const { resolve } = this.pending.get(parsed.id);
                    resolve(parsed);
                    this.pending.delete(parsed.id);
                  }
                } catch (e) {}
              }
            }
          }
        });

        resolve(true);
      });

      req.on('error', reject);
      req.setTimeout(30000, () => {
        req.destroy(new Error('Request timeout'));
      });
      
      // Send initialize
      const initBody = JSON.stringify({
        jsonrpc: '2.0',
        method: 'initialize',
        params: { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'cline-figma-fetch', version: '1.0.0' } },
        id: this.nextId()
      });
      
      req.write(initBody);
      req.end();
    });
  }

  async request(method, params = {}) {
    const id = this.nextId();
    
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      
      const options = {
        hostname: this.url.hostname,
        port: this.url.port,
        path: this.url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream, application/json',
        },
      };

      const req = http.request(options, (res) => {
        let data = '';
        res.setEncoding('utf8');
        
        res.on('data', (chunk) => {
          data += chunk;
          try {
            // Try to parse as JSON (non-SSE response)
            const parsed = JSON.parse(data);
            if (parsed.id && this.pending.has(parsed.id)) {
              const { resolve: resFn } = this.pending.get(parsed.id);
              resFn(parsed);
              this.pending.delete(parsed.id);
            }
          } catch (e) {
            // SSE response - parse event stream
            const lines = data.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const parsed = JSON.parse(line.slice(6));
                  if (parsed.id && this.pending.has(parsed.id)) {
                    const { resolve: resFn } = this.pending.get(parsed.id);
                    resFn(parsed);
                    this.pending.delete(parsed.id);
                  }
                } catch (e2) {}
              }
            }
          }
        });

        res.on('end', () => {
          // If still pending after stream ends, reject
          setTimeout(() => {
            if (this.pending.has(id)) {
              const { reject: rejFn } = this.pending.get(id);
              rejFn(new Error('No response received'));
              this.pending.delete(id);
            }
          }, 5000);
        });
      });

      req.on('error', reject);
      req.setTimeout(30000, () => {
        req.destroy(new Error('Request timeout'));
      });
      
      req.write(JSON.stringify({ jsonrpc: '2.0', method, params, id }));
      req.end();
    });
  }
}

async function main() {
  const conn = new MCPSSEConnection('http://127.0.0.1:3845/mcp');
  
  console.log('Connecting to Figma MCP server...');
  await conn.connect();
  console.log('Connected!');
  
  // Wait a moment for connection to settle
  await new Promise(r => setTimeout(r, 1000));
  
  // List tools
  console.log('\n--- Listing tools ---');
  const toolsResponse = await conn.request('tools/list');
  console.log(JSON.stringify(toolsResponse, null, 2));
  
  // List resources
  console.log('\n--- Listing resources ---');
  const resourcesResponse = await conn.request('resources/list');
  console.log(JSON.stringify(resourcesResponse, null, 2));
  
  // Get the node data
  console.log('\n--- Fetching node: 8014-49849 ---');
  try {
    const nodeData = await conn.request('figma_get_node', {
      file_key: 'fe7PYQtVJ2pNZ1VR6lznWz',
      node_id: '8014-49849'
    });
    console.log(JSON.stringify(nodeData, null, 2));
  } catch (e) {
    console.error('Error fetching node:', e.message);
    
    // Try alternative tool names
    for (const tool of ['get_node', 'get_figma_node', 'figma_node', 'get_file_node']) {
      console.log(`\n--- Trying ${tool} ---`);
      try {
        const result = await conn.request(tool, {
          file_key: 'fe7PYQtVJ2pNZ1VR6lznWz',
          node_id: '8014-49849'
        });
        console.log(JSON.stringify(result, null, 2));
        break;
      } catch (e2) {
        console.log(`${tool} failed: ${e2.message}`);
      }
    }
  }
  
  // Also try getting file info
  console.log('\n--- Trying file info ---');
  try {
    const fileInfo = await conn.request('get_file', {
      file_key: 'fe7PYQtVJ2pNZ1VR6lznWz'
    });
    console.log(JSON.stringify(fileInfo, null, 2).slice(0, 2000));
  } catch (e) {
    console.log('get_file failed:', e.message);
  }
  
  console.log('\nDone.');
}

main().catch(console.error);