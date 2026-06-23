const { chromium } = require('playwright');
const path = require('path');

const BASE = 'http://localhost:5173/oceanview/';

const ROUTES = [
  { route: '',                    name: 'home' },
  { route: '#products',           name: 'products' },
  { route: '#retirement-risk',    name: 'retirement-risk' },
  { route: '#life-events',        name: 'life-events' },
  { route: '#case-studies',       name: 'case-studies' },
  { route: '#white-papers',       name: 'white-papers' },
  { route: '#rrs-market-risk',    name: 'rrs-market-risk' },
  { route: '#rrs-inflation-risk', name: 'rrs-inflation-risk' },
  { route: '#rrs-longevity-risk', name: 'rrs-longevity-risk' },
  { route: '#rrs-interest-rate-risk', name: 'rrs-interest-rate-risk' },
  { route: '#les-approaching-retirement', name: 'les-approaching-retirement' },
  { route: '#les-market-volatility', name: 'les-market-volatility' },
  { route: '#les-financial-windfall', name: 'les-financial-windfall' },
  { route: '#les-career-transitions', name: 'les-career-transitions' },
  { route: '#fia-overview',       name: 'fia-overview' },
  { route: '#sky-harbourview-myga', name: 'sky-harbourview-myga' },
  { route: '#harbourview-fia',    name: 'harbourview-fia' },
  { route: '#brochures',          name: 'brochures' },
  { route: '#blog',               name: 'blog' },
  { route: '#downloads',          name: 'downloads' },
  { route: '#contact',            name: 'contact' },
  { route: '#professionals',      name: 'professionals' },
  { route: '#client-resources',   name: 'client-resources' },
  { route: '#insights',           name: 'insights' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1680, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const { route, name } of ROUTES) {
    const page = await context.newPage();
    console.log(`Capturing: ${name}`);
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(__dirname, `${name}.png`),
      fullPage: true,
    });
    console.log(`  ✅ saved: ${name}.png`);
    await page.close();
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
})();