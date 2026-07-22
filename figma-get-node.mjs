import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import fs from 'fs';

async function main() {
  const transport = new StreamableHTTPClientTransport(new URL('http://127.0.0.1:3845/mcp'));
  const client = new Client({ name: 'figma-fetch-client', version: '1.0.0' }, { capabilities: {} });

  console.log('Connecting...');
  await client.connect(transport);
  console.log('Connected!\n');

  const nodeId = '8014:49849';  // Converted from 8014-49849

  // 1. Get metadata first (structure overview)
  console.log(`=== Metadata for node ${nodeId} ===`);
  try {
    const meta = await client.callTool({
      name: 'get_metadata',
      arguments: {
        nodeId,
        clientLanguages: 'javascript',
        clientFrameworks: 'react',
      },
    });
    const text = meta.content?.[0]?.text;
    if (text) {
      console.log(text.slice(0, 5000));
    }
  } catch (e) {
    console.log('Error:', e.message);
  }

  // 2. Get design context
  console.log(`\n=== Design Context for node ${nodeId} ===`);
  try {
    const ctx = await client.callTool({
      name: 'get_design_context',
      arguments: {
        nodeId,
        clientLanguages: 'javascript,css,html',
        clientFrameworks: 'react',
        artifactType: 'WEB_PAGE_OR_APP_SCREEN',
      },
    });
    for (const item of ctx.content || []) {
      if (item.type === 'text') {
        fs.writeFileSync('figma-design-context.txt', item.text);
        console.log('Written to figma-design-context.txt');
        console.log(item.text.slice(0, 2000));
        console.log(`\n... (${item.text.length} chars total, ${Math.round(item.text.length / 1024)}KB)`);
      }
      if (item.type === 'image' || item.type === 'resource') {
        console.log(`  ${item.type}: ${JSON.stringify(item).slice(0, 200)}`);
      }
    }
  } catch (e) {
    console.log('Error:', e.message);
  }

  // 3. Get screenshot
  console.log(`\n=== Screenshot for node ${nodeId} ===`);
  try {
    const screenshot = await client.callTool({
      name: 'get_screenshot',
      arguments: {
        nodeId,
      },
    });
    for (const item of screenshot.content || []) {
      if (item.type === 'image' && item.data) {
        // Save the base64 image
        const matches = item.data.match(/^data:(image\/\w+);base64,(.+)$/);
        if (matches) {
          const ext = matches[1].split('/')[1];
          fs.writeFileSync(`figma-screenshot.${ext}`, Buffer.from(matches[2], 'base64'));
          console.log(`Saved screenshot to figma-screenshot.${ext}`);
        } else {
          console.log(`  ${item.type}: ${JSON.stringify(item).slice(0, 200)}`);
        }
      } else if (item.type === 'text') {
        console.log(`  text: ${item.text.slice(0, 500)}`);
      }
    }
  } catch (e) {
    console.log('Error:', e.message);
  }

  // 4. Get variable definitions
  console.log(`\n=== Variable definitions for node ${nodeId} ===`);
  try {
    const vars = await client.callTool({
      name: 'get_variable_defs',
      arguments: {
        nodeId,
        clientLanguages: 'javascript,css',
        clientFrameworks: 'react',
      },
    });
    for (const item of vars.content || []) {
      console.log(`  ${item.type}: ${JSON.stringify(item).slice(0, 2000)}`);
    }
  } catch (e) {
    console.log('Error:', e.message);
  }

  await client.close();
  console.log('\nDone.');
}

main().catch(console.error);