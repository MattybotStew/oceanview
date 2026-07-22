import http from 'node:http';

const BASE = 'http://127.0.0.1:3845/mcp';
const { hostname, port, pathname } = new URL(BASE);
let reqId = 1;

function sendRequest(body) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    const options = {
      hostname, port,
      path: pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream, application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = http.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        // Try parsing as plain JSON first
        try { resolve(JSON.parse(raw)); return; } catch {}
        // Try parsing as SSE
        const lines = raw.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try { resolve(JSON.parse(line.slice(6))); return; } catch {}
          }
        }
        resolve(raw);
      });
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  // Step 1: Initialize
  console.log('=== Initialize ===');
  const initRes = await sendRequest({
    jsonrpc: '2.0',
    method: 'initialize',
    params: { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'figma-fetch', version: '1.0' } },
    id: reqId++,
  });
  console.log(JSON.stringify(initRes, null, 2).slice(0, 500));
  console.log('... (truncated)\n');

  // Step 2: Wait a beat, then list tools
  await new Promise(r => setTimeout(r, 500));
  console.log('=== Tools/List ===');
  const toolsRes = await sendRequest({
    jsonrpc: '2.0',
    method: 'tools/list',
    params: {},
    id: reqId++,
  });
  console.log(JSON.stringify(toolsRes, null, 2));

  // Step 3: List resources
  await new Promise(r => setTimeout(r, 500));
  console.log('\n=== Resources/List ===');
  const resourcesRes = await sendRequest({
    jsonrpc: '2.0',
    method: 'resources/list',
    params: {},
    id: reqId++,
  });
  console.log(JSON.stringify(resourcesRes, null, 2));

  // Step 4: List prompts
  await new Promise(r => setTimeout(r, 500));
  console.log('\n=== Prompts/List ===');
  const promptsRes = await sendRequest({
    jsonrpc: '2.0',
    method: 'prompts/list',
    params: {},
    id: reqId++,
  });
  console.log(JSON.stringify(promptsRes, null, 2));
}

main().catch(console.error);