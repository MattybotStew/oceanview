// ComparisonPage.jsx — Two-product comparison landing template
// Source copy: docs/*Comparison Page copy draft.docx
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import { PillMint, PillGhost, TextLink } from './Buttons.jsx'

const S = {
  eyebrowRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 },
  eyebrowLine: { width: 18, height: 1, background: '#2494C1', flexShrink: 0 },
  eyebrow: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#2494C1' },
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(24px,2.6vw,34px)', color: '#0D1F4E', letterSpacing: '-0.02em', lineHeight: 1.15, margin: 0 },
  sub: { fontFamily: 'var(--ov-ff-sans)', fontSize: 15, color: '#4A5568', lineHeight: 1.7, margin: '12px 0 0', maxWidth: 720 },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 14, color: '#4A5568', lineHeight: 1.7, margin: 0 },
  card: { background: '#fff', border: '1px solid rgba(13,31,78,.09)', borderRadius: 12 },
  cardPad: { padding: '26px 28px' },
  itemTitle: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#0D1F4E', margin: 0 },
  quote: { fontFamily: 'var(--ov-ff-display)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.35, color: '#0D1F4E', margin: 0 },
  note: { fontFamily: 'var(--ov-ff-sans)', fontSize: 12, color: '#6B7280', lineHeight: 1.6, margin: 0 },
}

function goHash(hash) {
  if (hash) window.location.hash = String(hash).replace(/^#/, '')
}

function Head({ eyebrow, heading, sub, light }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {eyebrow && (
        <div style={S.eyebrowRow}>
          <div style={{ ...S.eyebrowLine, background: light ? '#70BABF' : '#2494C1' }} />
          <span style={{ ...S.eyebrow, color: light ? '#70BABF' : '#2494C1' }}>{eyebrow}</span>
        </div>
      )}
      <h2 style={{ ...S.h2, color: light ? '#F2FCFF' : '#0D1F4E' }}>{heading}</h2>
      {sub && <p style={{ ...S.sub, color: light ? 'rgba(242,252,255,.7)' : '#4A5568' }}>{sub}</p>}
    </div>
  )
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="7" cy="7" r="6.5" stroke="#2494C1" strokeOpacity="0.35" />
      <path d="M4.5 7L6.5 9L9.5 5" stroke="#2494C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Band({ id, tint, navy, children }) {
  return (
    <section id={id} style={{ background: navy ? '#001F54' : tint ? 'var(--ov-surface-tint)' : '#fff', scrollMarginTop: 112 }} className="ov-section">
      <div className="ov-container">{children}</div>
    </section>
  )
}

// ── Section renderers ────────────────────────────────────────────────────────

function Intro({ data }) {
  return (
    <Band tint>
      <div style={{ maxWidth: 780 }}>
        <Head eyebrow={data.eyebrow} heading={data.heading} />
        {data.paragraphs.map((p, i) => (
          <p key={i} style={{ ...S.body, fontSize: 16, margin: '0 0 14px' }}>{p}</p>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }} className="cmp-grid">
        {data.cards.map(card => (
          <div key={card.name} style={{ ...S.card, ...S.cardPad, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ ...S.itemTitle, fontSize: 16 }}>{card.name}</div>
            <p style={{ ...S.body, flex: 1 }}>{card.body}</p>
            <TextLink onClick={() => goHash(card.hash)}>{card.cta}</TextLink>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Start({ data }) {
  return (
    <Band id="cmp-start">
      <div style={{ maxWidth: 760 }}>
        <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.options.map((opt, i) => (
          <div key={opt.product} style={{ background: 'var(--ov-surface-tint)', border: '1px solid rgba(36,148,193,.18)', borderRadius: 12, padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 22, color: '#2494C1', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ ...S.quote, fontSize: 19 }}>{opt.question}</h3>
            </div>
            <div style={{ ...S.itemTitle, color: '#2494C1', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase' }}>Consider {opt.product}</div>
            <p style={{ ...S.body, flex: 1 }}>{opt.body}</p>
            <TextLink onClick={() => goHash(opt.hash)}>{opt.cta}</TextLink>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Glance({ data }) {
  return (
    <Band tint>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(13,31,78,.09)', background: '#fff' }}>
        <div style={{ minWidth: 760 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '26% 37% 37%', background: '#001F54', padding: '0 28px', borderRadius: '12px 12px 0 0' }}>
            <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(242,252,255,.45)', padding: '16px 0' }}>Consideration</div>
            {data.columns.map(c => (
              <div key={c} style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase', color: '#70BABF', padding: '16px 16px' }}>{c}</div>
            ))}
          </div>
          {data.rows.map((row, i) => (
            <div key={row.label} style={{ display: 'grid', gridTemplateColumns: '26% 37% 37%', padding: '0 28px', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)', background: i % 2 === 0 ? '#fff' : 'rgba(13,31,78,.015)' }}>
              <div style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 13, color: '#0D1F4E', padding: '16px 16px 16px 0', lineHeight: 1.5 }}>{row.label}</div>
              <div style={{ ...S.body, fontSize: 13, padding: '16px 16px' }}>{row.a}</div>
              <div style={{ ...S.body, fontSize: 13, padding: '16px 0 16px 16px' }}>{row.b}</div>
            </div>
          ))}
        </div>
      </div>
    </Band>
  )
}

function Product({ data, index }) {
  return (
    <Band tint={index % 2 === 1}>
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 56, alignItems: 'flex-start' }} className="cmp-split">
        <div style={{ position: 'sticky', top: 100 }}>
          <Head eyebrow={data.eyebrow} heading={data.heading} />
          {data.kicker && <p style={{ ...S.quote, fontSize: 18, marginTop: 4 }}>{data.kicker}</p>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {data.paragraphs.map((p, i) => (
            <p key={i} style={{ ...S.body, fontSize: 15, margin: 0 }}>{p}</p>
          ))}
          {data.bullets && (
            <div style={{ ...S.card, ...S.cardPad, paddingTop: 18, paddingBottom: 18 }}>
              <div style={{ ...S.eyebrow, marginBottom: 10 }}>{data.bulletsTitle || 'Provides'}</div>
              {data.bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '9px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)' }}>
                  <Check />
                  <p style={{ ...S.body, margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          )}
          {data.conversation && (
            <div style={{ borderLeft: '3px solid #2494C1', padding: '4px 0 4px 20px' }}>
              <div style={{ ...S.eyebrow, marginBottom: 8 }}>{data.conversation.label}</div>
              <p style={{ ...S.quote, fontSize: 22, marginBottom: 12 }}>“{data.conversation.quote}”</p>
              {data.conversation.notes.map((n, i) => (
                <p key={i} style={{ ...S.body, marginTop: 8 }}>{n}</p>
              ))}
            </div>
          )}
          {data.links && (
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {data.links.map(l => (
                <TextLink key={l.label} onClick={() => goHash(l.hash)}>{l.label}</TextLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </Band>
  )
}

function Foundation({ data }) {
  return (
    <Band tint>
      <div style={{ maxWidth: 820 }}>
        <Head eyebrow={data.eyebrow} heading={data.heading} />
        {data.paragraphs.map((p, i) => (
          <p key={i} style={{ ...S.body, fontSize: 15, margin: '0 0 12px' }}>{p}</p>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginTop: 28 }} className="cmp-grid">
        {data.items.map(item => (
          <div key={item.title} style={{ ...S.card, padding: '22px 24px' }}>
            <div style={{ ...S.itemTitle, marginBottom: 6 }}>{item.title}</div>
            <p style={S.body}>{item.body}</p>
          </div>
        ))}
      </div>
      {data.footnote && <p style={{ ...S.body, marginTop: 24, color: '#0D1F4E', fontWeight: 600 }}>{data.footnote}</p>}
    </Band>
  )
}

function Clarify({ data }) {
  return (
    <Band navy>
      <div style={{ maxWidth: 760 }}>
        <Head eyebrow={data.eyebrow} heading={data.heading} light />
      </div>
      <p style={{ ...S.quote, color: '#F2FCFF', fontSize: 'clamp(22px,2.6vw,30px)', maxWidth: 860, margin: '0 0 32px' }}>“{data.question}”</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.branches.map(b => (
          <div key={b.product} style={{ background: 'rgba(242,252,255,.06)', border: '1px solid rgba(242,252,255,.14)', borderRadius: 12, padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ ...S.eyebrow, color: '#70BABF' }}>{b.condition}</div>
            <div style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 22, color: '#F2FCFF', lineHeight: 1.2 }}>Start with {b.product}.</div>
            <p style={{ ...S.body, color: 'rgba(242,252,255,.72)' }}>{b.body}</p>
          </div>
        ))}
      </div>
      {data.footnote && <p style={{ ...S.body, color: 'rgba(242,252,255,.5)', marginTop: 24, maxWidth: 720 }}>{data.footnote}</p>}
    </Band>
  )
}

function Language({ data }) {
  return (
    <Band>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.cards.map(card => (
          <div key={card.product} style={{ background: 'var(--ov-surface-tint)', borderRadius: 12, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ ...S.eyebrow, color: '#2494C1' }}>{card.product}</div>
            <p style={{ ...S.quote, fontSize: 24, color: '#0D1F4E' }}>“{card.quote}”</p>
            <p style={{ ...S.body, marginTop: 4 }}>{card.body}</p>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Exchange({ data }) {
  return (
    <Band tint>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.cards.map(card => (
          <div key={card.product} style={{ ...S.card, overflow: 'hidden' }}>
            <div style={{ padding: '22px 28px', borderBottom: '1px solid rgba(13,31,78,.07)' }}>
              <div style={{ ...S.eyebrow, marginBottom: 8 }}>{card.product}</div>
              <div style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 22, color: '#0D1F4E' }}>{card.title}</div>
            </div>
            <div style={{ padding: '20px 28px', background: 'rgba(36,148,193,.05)' }}>
              <div style={{ ...S.eyebrow, color: '#1A7FAA', marginBottom: 6 }}>What the client receives</div>
              <p style={{ ...S.body, color: '#0D1F4E' }}>{card.receives}</p>
            </div>
            <div style={{ padding: '20px 28px' }}>
              <div style={{ ...S.eyebrow, color: '#8B6F00', marginBottom: 6 }}>What to consider</div>
              <p style={S.body}>{card.consider}</p>
            </div>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Risk({ data }) {
  return (
    <Band>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.columns.map(col => (
          <div key={col.product} style={{ ...S.card, ...S.cardPad }}>
            <div style={{ ...S.itemTitle, fontSize: 16, marginBottom: 12 }}>{col.product}</div>
            {col.paragraphs.map((p, i) => (
              <p key={i} style={{ ...S.body, marginTop: i === 0 ? 0 : 12 }}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </Band>
  )
}

function Questions({ data }) {
  return (
    <Band tint>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ ...S.card, padding: '6px 28px' }}>
        {data.items.map((item, i) => (
          <div key={item.q} style={{ padding: '20px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(13,31,78,.07)', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32 }} className="cmp-q">
            <div style={{ ...S.itemTitle, fontSize: 15 }}>{item.q}</div>
            <p style={{ ...S.body, margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Decision({ data }) {
  return (
    <Band navy>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="cmp-split">
        <div>
          <Head eyebrow={data.eyebrow} heading={data.heading} light />
          {data.paragraphs.map((p, i) => (
            <p key={i} style={{ ...S.body, fontSize: 15, color: 'rgba(242,252,255,.7)', margin: '0 0 12px' }}>{p}</p>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.flow.map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(242,252,255,.06)', border: '1px solid rgba(242,252,255,.12)', borderRadius: 10, padding: '16px 20px' }}>
              <span style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 16, color: '#70BABF' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 14, color: '#F2FCFF' }}>{step}</span>
              {i < data.flow.length - 1 && <span style={{ marginLeft: 'auto', color: 'rgba(112,186,191,.6)' }}>↓</span>}
            </div>
          ))}
        </div>
      </div>
    </Band>
  )
}

function Sales({ data }) {
  return (
    <Band>
      <CTABanner
        eyebrow={data.eyebrow}
        title={data.heading}
        body={data.body}
        cta={data.cta}
        onClick={() => goHash(data.ctaHash || 'contact')}
        secondary={<PillGhost light hero onClick={() => goHash(data.secondaryHash || 'client-resources?tab=rates')}>{data.secondary}</PillGhost>}
      />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
        {data.links.map(l => (
          <TextLink key={l.label} onClick={() => goHash(l.hash)}>{l.label}</TextLink>
        ))}
      </div>
    </Band>
  )
}

function Continue({ data }) {
  return (
    <Band tint>
      <Head eyebrow={data.eyebrow} heading={data.heading} sub={data.sub} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="cmp-grid">
        {data.cards.map(card => (
          <div key={card.title} style={{ ...S.card, ...S.cardPad, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ ...S.itemTitle, fontSize: 16 }}>{card.title}</div>
            <p style={{ ...S.body, flex: 1 }}>{card.body}</p>
            <TextLink onClick={() => goHash(card.hash)}>{card.cta}</TextLink>
          </div>
        ))}
      </div>
    </Band>
  )
}

function Disclosures({ data }) {
  return (
    <Band>
      <div style={{ maxWidth: 1000 }}>
        <div style={{ ...S.eyebrow, marginBottom: 12 }}>Important Information</div>
        {data.paragraphs.map((p, i) => (
          <p key={i} style={{ ...S.note, margin: '0 0 10px' }}>{p}</p>
        ))}
      </div>
    </Band>
  )
}

const RENDERERS = {
  intro: Intro,
  start: Start,
  glance: Glance,
  product: Product,
  foundation: Foundation,
  clarify: Clarify,
  language: Language,
  exchange: Exchange,
  risk: Risk,
  questions: Questions,
  decision: Decision,
  sales: Sales,
  continue: Continue,
  disclosures: Disclosures,
}

export default function ComparisonPage({ page }) {
  const { hero, sections } = page
  let productIndex = 0
  return (
    <main>
      <PageHero
        image={hero.image}
        imgFocus={hero.imgFocus}
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        ctaPrimary={hero.ctaPrimary}
        onPrimary={() => goHash(hero.primaryHash)}
        ctaSecondary={hero.ctaSecondary}
        onSecondary={() => goHash(hero.secondaryHash)}
      />
      {sections.map((section, i) => {
        const Renderer = RENDERERS[section.type]
        if (!Renderer) return null
        if (section.type === 'product') {
          const el = <Renderer key={i} data={section} index={productIndex} />
          productIndex += 1
          return el
        }
        return <Renderer key={i} data={section} />
      })}
    </main>
  )
}
