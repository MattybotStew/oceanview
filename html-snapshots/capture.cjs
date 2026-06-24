const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = 'http://localhost:5173';
const BASE = BASE_URL + '/oceanview/';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = __dirname;

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

(async () => {
  // ── 1. Render all pages ─────────────────────────────────────────
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const { route, name } of ROUTES) {
    const page = await context.newPage();
    console.log(`Capturing: ${name}`);

    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    let html = await page.evaluate(() => {
      return '<!DOCTYPE html>\n<html>' + document.documentElement.innerHTML + '</html>';
    });

    await page.close();

    // Rewrite absolute font paths → relative  e.g. /oceanview/src/fonts/PP*.otf → fonts/PP*.otf
    html = html.replace(/\/oceanview\/src\/fonts\//g, 'fonts/');

    // Rewrite any remaining /oceanview/assets/ → assets/
    html = html.replace(/\/oceanview\/assets\//g, 'assets/');

    // Strip <base href> — paths are now relative to the HTML file itself
    html = html.replace(/<base[^>]*>/gi, '');

    // Strip Vite runtime scripts (React already rendered)
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gis, '');

    // Add explicit 1440px viewport width hint
    if (!html.includes('name="viewport"')) {
      html = html.replace('<head>', '<head>\n  <meta name="viewport" content="width=1440">');
    }

    fs.writeFileSync(path.join(OUT_DIR, `${name}.html`), html);
    console.log(`  ✅ ${name}.html`);
  }

  await browser.close();

  // ── 2. Copy asset directories into html-snapshots/ ─────────────
  console.log('\nCopying assets...');

  const fontsOut = path.join(OUT_DIR, 'fonts');
  const assetsOut = path.join(OUT_DIR, 'assets');

  fs.mkdirSync(fontsOut, { recursive: true });
  fs.mkdirSync(assetsOut, { recursive: true });

  // Fonts: src/fonts/ → html-snapshots/fonts/
  const fontsIn = path.join(PROJECT_ROOT, 'src', 'fonts');
  for (const f of fs.readdirSync(fontsIn)) {
    fs.copyFileSync(path.join(fontsIn, f), path.join(fontsOut, f));
  }
  console.log(`  ✅ Copied fonts/ (${fs.readdirSync(fontsOut).length} files)`);

  // Images: public/assets/ → html-snapshots/assets/
  const imagesIn = path.join(PROJECT_ROOT, 'public', 'assets');
  for (const f of fs.readdirSync(imagesIn)) {
    fs.copyFileSync(path.join(imagesIn, f), path.join(assetsOut, f));
  }
  console.log(`  ✅ Copied assets/ (${fs.readdirSync(assetsOut).length} files)`);

  // ── 3. Build ZIP ────────────────────────────────────────────────
  const zipPath = path.join(PROJECT_ROOT, 'html-snapshots.zip');
  console.log('\nBuilding ZIP...');

  // Include only HTML files + fonts/ + assets/ (not capture scripts or screenshots)
  const htmlFiles = ROUTES.map(r => r.name + '.html').join(' ');
  execSync(`cd "${OUT_DIR}" && zip -r "${zipPath}" ${htmlFiles} fonts/ assets/`, { stdio: 'inherit' });

  const sizeMB = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(1);
  console.log(`\n✅ html-snapshots.zip — ${sizeMB} MB`);

  if (parseFloat(sizeMB) > 32) {
    console.warn(`⚠️  ZIP is ${sizeMB} MB — exceeds the 32 MB html.to.design limit.`);
    console.warn('   Consider resizing the large images in public/assets/ and re-running.');
  } else {
    console.log('   Ready to upload to html.to.design ✓');
  }
})();
