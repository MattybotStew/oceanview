import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

async function main() {
  const transport = new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3845/mcp'));

  const client = new Client(
    { name: 'figma-fetch-client', version: '1.0.0' },
    { capabilities: {} }
  );

  console.log('Connecting...');
  await client.connect(transport);
  console.log('Connected!\n');

  // List tools
  console.log('=== Available Tools ===');
  const toolsResult = await client.listTools();
  for (const tool of toolsResult.tools) {
    console.log(`  ${tool.name}: ${tool.description || '(no description)'}`);
    if (tool.inputSchema && tool.inputSchema.properties) {
      for (const [key, val] of Object.entries(tool.inputSchema.properties)) {
        console.log(`    - ${key} (${val.type}): ${val.description || ''}`);
      }
    }
  }

  // List resources
  console.log('\n=== Available Resources ===');
  try {
    const resourcesResult = await client.listResources();
    for (const resource of resourcesResult.resources) {
      console.log(`  ${resource.uri}: ${resource.name || ''} - ${resource.description || ''}`);
    }
  } catch (e) {
    console.log('  No resources or error:', e.message);
  }

  // List prompts
  console.log('\n=== Available Prompts ===');
  try {
    const promptsResult = await client.listPrompts();
    for (const prompt of promptsResult.prompts) {
      console.log(`  ${prompt.name}: ${prompt.description || ''}`);
    }
  } catch (e) {
    console.log('  No prompts or error:', e.message);
  }

  // Now try calling a tool to get the Figma node data
  console.log('\n=== Calling tool to get node 8014-49849 ===');
  
  // Try different tool names
  const possibleTools = [
    { name: 'get_figma_node', params: { file_key: 'fe7PYQtVJ2pNZ1VR6lznWz', node_id: '8014-49849' } },
    { name: 'figma_get_node', params: { file_key: 'fe7PYQtVJ2pNZ1VR6lznWz', node_id: '8014-49849' } },
    { name: 'get_node', params: { file_key: 'fe7PYQtVJ2pNZ1VR6lznWz', node_id: '8014-49849' } },
  ];

  for (const toolCall of possibleTools) {
    console.log(`\nTrying "${toolCall.name}"...`);
    try {
      const result = await client.callTool({
        name: toolCall.name,
        arguments: toolCall.params,
      });
      console.log('Result:', JSON.stringify(result, null, 2).slice(0, 3000));
      break;
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  }

  // Also try to read the file node as a resource
  console.log('\n=== Reading resource: figma://fe7PYQtVJ2pNZ1VR6lznWz/8014-49849 ===');
  try {
    const resourceResult = await client.readResource({ uri: 'figma://fe7PYQtVJ2pNZ1VR6lznWz/8014-49849' });
    console.log(JSON.stringify(resourceResult, null, 2).slice(0, 2000));
  } catch (e) {
    console.log('Error:', e.message);
  }

  console.log('\nDone.');
  await client.close();
}

main().catch(console.error);