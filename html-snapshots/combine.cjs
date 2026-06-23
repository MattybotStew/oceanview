const fs = require('fs');
const path = require('path');
const dir = __dirname;

const order = [
  'home','products','retirement-risk','life-events','case-studies','white-papers',
  'rrs-market-risk','rrs-inflation-risk','rrs-longevity-risk','rrs-interest-rate-risk',
  'les-approaching-retirement','les-market-volatility','les-financial-windfall','les-career-transitions',
  'fia-overview','sky-harbourview-myga','harbourview-fia',
  'brochures','blog','downloads','contact','professionals',
  'client-resources','insights'
];

let output = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Oceanview Mockups</title>\n';
output += '<style>body{margin:0;padding:0;}</style>\n</head>\n<body>\n';

order.forEach((name, i) => {
  const fp = path.join(dir, name + '.html');
  if (!fs.existsSync(fp)) { console.error('Missing: ' + fp); return; }
  let html = fs.readFileSync(fp, 'utf8');
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) { console.error('No body: ' + name); return; }
  let body = bodyMatch[1];
  output += body + '\n';
});

output += '</body>\n</html>';
fs.writeFileSync(path.join(dir, 'index.html'), output);
console.log('Done! 24 pages combined into index.html');