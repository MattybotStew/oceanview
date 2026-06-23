const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:5173';
const BASE = BASE_URL + '/oceanview/';
const PROJECT_ROOT = path.resolve(__dirname, '..');

const ROUTES = [
  { route: '',                              name: 'home' },
  { route: '#products',                     name: 'products' },
  { route: '#retirement-risk',              name: 'retirement-risk' },
  { route: '#life-events',                  name: 'life-events' },
  { route: '#case-studies',                 name: 'case-studies' },
  { route: '#white-papers',                 name: 'white-papers' },
  { route: '#rrs-market-risk',              name: 'rrs-market-risk' },
  { route: '#rrs-inflation-risk',           name: 'rrs-inflation-risk' },
  { route: '#rrs-longevity-risk',           name: 'rrs-longevity-risk' },
  { route: '#rrs-interest-rate-risk',       name: 'rrs-interest-rate-risk' },
  { route: '#les-approaching-retirement',   name: 'les-approaching-retirement' },
  { route: '#les-market-volatility',        name: 'les-market-volatility' },
  { route: '#les-financial-windfall',       name: 'les-financial-windfall' },
  { route: '#les-career-transitions',       name: 'les-career-transitions' },
  { route: '#fia-overview',                 name: 'fia-overview' },
  { route: '#sky-harbourview-myga',         name: 'sky-harbourview-myga' },
  { route: '#harbourview-fia',              name: 'harbourview-fia' },
  { route: '#brochures',                    name: 'brochures' },
  { route: '#blog',                         name: 'blog' },
  { route: '#downloads',                    name: 'downloads' },
  { route: '#contact',                      name: 'contact' },
  { route: '#professionals',                name: 'professionals' },
  { route: '#client-resources',             name: 'client-resources' },
  { route: '#insights',                     name: 'insights' },
];

// Map a URL string found in HTML to a local file path
function resolveToLocalPath(urlStr) {
  // Absolute server path: /oceanview/src/fonts/... or /oceanview/...
  if (urlStr.startsWith('/oceanview/')) {
    const rel = urlStr.slice('/oceanview/'.length);
    // fonts live in src/, everything else in public/
    const srcPath = path.join(PROJECT_ROOT, rel);
    if (fs.existsSync(srcPath)) return srcPath;
    const pubPath = path.join(PROJECT_ROOT, 'public', rel);
    if (fs.existsSync(pubPath)) return pubPath;
    return null;
  }
  // Relative path (with <base href="/oceanview/">) — maps to public/
  if (!urlStr.startsWith('http') && !urlStr.startsWith('//') && !urlStr.startsWith('data:')) {
    const cleaned = urlStr.replace(/^\.?\//, '');
    const pubPath = path.join(PROJECT_ROOT, 'public', cleaned);
    if (fs.existsSync(pubPath)) return pubPath;
    // Also try without public/ prefix
    const rootPath = path.join(PROJECT_ROOT, cleaned);
    if (fs.existsSync(rootPath)) return rootPath;
  }
  return null;
}

function mimeForExt(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
    '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff': 'font/woff',
    '.woff2': 'font/woff2', '.ico': 'image/x-icon',
  };
  return map[ext] || 'application/octet-stream';
}

function toDataUri(filePath) {
  const buf = fs.readFileSync(filePath);
  return `data:${mimeForExt(filePath)};base64,${buf.toString('base64')}`;
}

// Extract all unique asset URL strings from HTML that need inlining
function collectAssetUrls(html) {
  const urls = new Set();

  // url("...") and url('...') and url(...) in CSS
  const cssUrl = /url\(["']?([^"')]+)["']?\)/g;
  let m;
  while ((m = cssUrl.exec(html)) !== null) {
    const u = m[1].trim();
    if (!u.startsWith('data:') && !u.startsWith('#')) urls.add(u);
  }

  // src="..." on img/video tags (skip script/module srcs)
  const srcAttr = /\bsrc="([^"]+)"/g;
  while ((m = srcAttr.exec(html)) !== null) {
    const u = m[1].trim();
    if (u.startsWith('data:') || u.includes('@vite') || /\.(jsx?|tsx?|mjs)/.test(u)) continue;
    urls.add(u);
  }

  return urls;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  const outDir = __dirname;
  let totalInlined = 0;

  for (const { route, name } of ROUTES) {
    const page = await context.newPage();
    console.log(`\nProcessing: ${name}`);

    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    // Capture fully rendered DOM
    let html = await page.evaluate(() => {
      return '<!DOCTYPE html>\n<html>' + document.documentElement.innerHTML + '</html>';
    });

    await page.close();

    // Build replacement map (unique URLs only — process each asset once)
    const urls = collectAssetUrls(html);
    const replacements = new Map();
    let inlined = 0;
    let skipped = 0;

    for (const urlStr of urls) {
      const localPath = resolveToLocalPath(urlStr);
      if (localPath) {
        replacements.set(urlStr, toDataUri(localPath));
        inlined++;
      } else {
        skipped++;
      }
    }

    console.log(`  ${inlined} assets inlined, ${skipped} skipped (external/unknown)`);

    // Apply replacements — longest URLs first to avoid partial replacement bugs
    const sortedEntries = [...replacements.entries()].sort((a, b) => b[0].length - a[0].length);
    for (const [orig, dataUri] of sortedEntries) {
      const escaped = orig.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp(escaped, 'g'), dataUri);
    }

    // Strip Vite runtime scripts (page is already rendered static HTML)
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gis, '');

    // Remove <base href> — all URLs are now data URIs
    html = html.replace(/<base[^>]*>/gi, '');

    // Ensure 1440px viewport hint for html.to.design
    if (!html.includes('name="viewport"')) {
      html = html.replace('<head>', '<head>\n  <meta name="viewport" content="width=1440">');
    }

    const outPath = path.join(outDir, `${name}.html`);
    fs.writeFileSync(outPath, html);
    const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`  ✅ ${name}.html (${kb} KB)`);
    totalInlined += inlined;
  }

  await browser.close();
  console.log(`\n✅ Done — ${ROUTES.length} self-contained snapshots, ${totalInlined} total assets inlined.`);
})();
