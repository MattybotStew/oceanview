import { TextLink, PillMint, PillGhost } from './Buttons.jsx'
import CTABanner from './CTABanner.jsx'
import { Eyebrow } from './common.jsx'
import {
  FileText, Scale, UserPlus, LayoutDashboard, Percent,
  ShieldCheck, TrendingUp, Headphones, Building2, Compass,
} from 'lucide-react'

const go = (route) => { window.location.hash = route }

const S = {
  h2: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 46px)', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 },
  h3: { fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 22, letterSpacing: '-0.015em', lineHeight: 1.2, color: '#0D1F4E', margin: 0 },
  accent: { fontStyle: 'italic', color: '#70BABF' },
  body: { fontFamily: 'var(--ov-ff-sans)', fontSize: 16, lineHeight: 1.7, color: '#4A5568', margin: 0 },
  label: { fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, fontSize: 11, letterSpacing: '1.1px', textTransform: 'uppercase', color: '#2494C1', margin: 0 },
}

const QUICK = [
  { label: 'Current Rates', route: 'products' },
  { label: 'Product Resources', route: 'brochures' },
  { label: 'Product Comparisons', route: 'sales-tools' },
  { label: 'State Availability', route: 'state-approval' },
  { label: 'Get Appointed', route: 'contact' },
  { label: 'Agent Portal', route: 'agent-portal' },
]

const RATES = [
  { name: 'Harbourview MYGA', metric: 'Current APY', rate: 'X.XX%', term: 'Select Guarantee Period', date: 'Effective [DATE]', body: 'Multi-year rate certainty with multiple available guarantee periods.', cta: 'View Harbourview Rates', route: 'harbourview-myga' },
  { name: 'CurrentRate MYGA', metric: 'Current First-Year Declared Rate', rate: 'X.XX%', term: '5-Year Contract', date: 'Effective [DATE]', body: 'A declared first-year rate followed by annual rate determinations beginning in year two using the methodology defined in the contract.', cta: 'View CurrentRate Details', route: 'current-rate-fia' },
  { name: 'Sky Harbourview MYGA', metric: 'Current APY', rate: 'X.XX%', term: 'Select Guarantee Period', date: 'Effective [DATE]', body: 'Multi-year rate certainty available through participating banks and credit unions.', cta: 'View Sky Harbourview Rates', route: 'sky-harbourview-myga' },
  { name: 'Harbourview FIA', metric: 'Current S&P 500® Annual Point-to-Point Cap Rate', rate: 'X.XX%', term: 'Select Available Term', date: 'Effective [DATE]', body: 'The cap is the maximum indexed interest that may be credited under the applicable strategy and crediting period. It is not a guaranteed rate of return.', cta: 'View Harbourview FIA Rates', route: 'harbourview-fia' },
  { name: 'CapLock FIA', metric: 'Current Guaranteed S&P 500® Annual Point-to-Point Cap Rate', rate: 'X.XX%', term: '5-Year | 7-Year', date: 'Effective [DATE]', body: 'For selected Cap Rate Guarantee Strategies, the applicable cap is established at issue and remains unchanged for the full surrender-charge period.', cta: 'View CapLock Rates', route: 'caplock' },
]

const FIXED = [
  { name: 'Harbourview MYGA', kicker: 'Multi-year rate certainty.', body: 'A traditional MYGA approach for clients who want to know the applicable interest rate for a selected guarantee period. Harbourview offers multiple guarantee-period choices, principal protection and contract-based withdrawal access.', cta: 'Explore Harbourview MYGA', route: 'harbourview-myga' },
  { name: 'CurrentRate MYGA', kicker: 'Annual rate responsiveness after year one.', body: 'A five-year fixed annuity for clients who want a declared first-year rate with a contract-defined methodology for determining credited rates annually beginning in year two.', cta: 'Explore CurrentRate MYGA', route: 'current-rate-fia' },
  { name: 'Sky Harbourview MYGA', kicker: 'Multi-year certainty for the financial institution channel.', body: 'Available through participating banks and credit unions, Sky Harbourview provides traditional MYGA rate certainty along with Terminal Illness and Nursing Home Confinement Waivers at no additional charge.', cta: 'Explore Sky Harbourview MYGA', route: 'sky-harbourview-myga' },
]

const INDEXED = [
  { name: 'Harbourview FIA', kicker: 'Broader interest-crediting strategy choice.', body: 'Protection from losses caused by negative index performance with a broader menu of ways to pursue index-linked interest, including cap, participation-rate, multi-year, risk-control and fixed-interest approaches.', cta: 'Explore Harbourview FIA', route: 'harbourview-fia' },
  { name: 'CapLock FIA', kicker: 'Greater predictability around the cap.', body: 'Selected Cap Rate Guarantee Strategies establish the applicable cap at policy issue and keep it unchanged for the full 5- or 7-year surrender-charge period.', cta: 'Explore CapLock FIA', route: 'caplock' },
]

const NEEDS = [
  { quote: 'I want to know what this money will earn for the next several years.', cta: 'Explore Harbourview MYGA', route: 'harbourview-myga' },
  { quote: 'I want fixed-annuity protection, but I want some responsiveness to future interest rates.', cta: 'Explore CurrentRate MYGA', route: 'current-rate-fia' },
  { quote: 'I want multi-year rate certainty through my bank or credit union.', cta: 'Explore Sky Harbourview MYGA', route: 'sky-harbourview-myga' },
  { quote: 'I want protection from negative index performance with more strategy choice.', cta: 'Explore Harbourview FIA', route: 'harbourview-fia' },
  { quote: 'I want index-linked potential, but I want the cap known in advance.', cta: 'Explore CapLock FIA', route: 'caplock' },
]

const TOOLS = [
  { Icon: Compass, title: 'Client Conversations, Explained', kicker: 'Practical tools for turning annuity questions into clearer client conversations.', body: 'Explore frameworks, explanations and conversation techniques designed specifically for financial professionals.', cta: 'Explore Client Conversations, Explained', route: 'sales-tools' },
  { Icon: FileText, title: 'Sales Tools & Conversation Guides', kicker: 'Simple tools for practical conversations.', body: 'Access Oceanview sales tools, decision guides, product comparisons and client-scenario resources designed to make complex concepts easier to discuss.', cta: 'Explore Sales Tools', route: 'sales-tools' },
  { Icon: Scale, title: 'Client-Ready Education', kicker: 'Give clients somewhere clear to go next.', body: 'Share Oceanview educational resources before or after the conversation, including Annuities, Explained and Retirement Planning in Practice.', cta: 'Explore Client-Ready Resources', route: 'client-resources' },
]

const FRAMEWORK = [
  { label: 'PURPOSE', body: 'What job should this money do?' },
  { label: 'GROWTH', body: 'How can the contract value change?' },
  { label: 'GUARANTEES', body: 'What is guaranteed—and what can change?' },
  { label: 'ACCESS', body: 'When and how can the client access the money?' },
  { label: 'WHAT HAPPENS NEXT', body: 'What occurs later in the life of the contract?' },
]

const WHY = [
  { Icon: ShieldCheck, title: 'Straightforward by Design', body: 'We work to make product mechanics, guarantees and tradeoffs easier to understand—for financial professionals and the clients they serve.' },
  { Icon: TrendingUp, title: 'Competitive Value', body: 'Oceanview offers fixed annuity solutions designed to provide meaningful choices across different client needs, timelines and market environments.' },
  { Icon: Building2, title: 'Financial Strength', body: 'Oceanview Life and Annuity Company is rated A (Excellent) by AM Best with a Stable outlook.' },
  { Icon: Compass, title: 'A Long-Term View', body: 'An annuity relationship extends beyond the issue date. Our approach considers the commitments, renewal decisions and service required throughout the life of the contract.' },
  { Icon: Headphones, title: 'Professional Support', body: 'Oceanview works with financial professionals across independent insurance agencies, banks and financial institutions, supported by teams available to help throughout the client and contract journey.' },
]

const DISCLOSURES = [
  'For financial professional use. Certain materials linked from this page may be approved for general public use; review the applicable material and its distribution designation before sharing with clients.',
  'This material is intended for general educational and informational purposes and does not constitute a recommendation of any product or financial strategy. Financial professionals should evaluate each client’s objectives, financial situation, time horizon, liquidity needs, risk tolerance, tax circumstances and other relevant considerations and comply with all applicable firm, regulatory, suitability and best-interest requirements.',
  'Oceanview fixed and fixed indexed annuities are designed for long-term retirement purposes. Product features, rates, guarantees, crediting strategies, surrender provisions, Market Value Adjustments, form numbers and availability may vary by product and state.',
  'Guarantees are subject to the claims-paying ability of Oceanview Life and Annuity Company.',
  'Funds allocated to an index-linked strategy do not directly participate in or invest in the stock market or any index. Indexed interest, if any, depends on index performance and applicable crediting terms and may be zero. Caps, participation rates and other terms may limit the amount of indexed interest credited.',
  'A cap is not a guaranteed rate of return. For CapLock Cap Rate Guarantee Strategies, the applicable cap is established at issue and remains unchanged for the applicable surrender-charge period; indexed interest remains dependent on index performance and contract terms.',
  'Withdrawals may be subject to surrender charges, a Market Value Adjustment, taxes and other contract provisions. A Market Value Adjustment may increase or decrease the amount received.',
  'Taxable distributions may be subject to ordinary income tax, and certain taxable distributions before age 59½ may also be subject to an additional federal tax unless an exception applies.',
  'Annuities purchased within an IRA or another tax-qualified retirement arrangement do not provide additional tax deferral because the underlying account is already tax-deferred. Other contractual guarantees and insurance features should be evaluated independently.',
  'Oceanview Life and Annuity Company and its representatives do not provide tax or legal advice.',
  'Annuities are products of the insurance industry. They are not guaranteed by a bank or credit union, are not insured by the FDIC, NCUA/NCUSIF or any other federal government agency, are not deposits and may lose value.',
  'Annuities issued by Oceanview Life and Annuity Company, 1331 17th Street, Suite 1050, Denver, CO 80202. In California, Oceanview does business as Oceanview Life and Annuity Insurance Company. Product features, form numbers, rates, options and availability may vary by state.',
]

function RateCard(r) {
  return (
    <article style={{ background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12, height: '100%', boxSizing: 'border-box' }}>
      <h3 style={S.h3}>{r.name}</h3>
      <p style={S.label}>{r.metric}</p>
      <div style={{ fontFamily: 'var(--ov-ff-display)', fontSize: 40, color: '#0D1F4E', letterSpacing: '-0.03em', lineHeight: 1 }}>{r.rate}</div>
      <p style={{ ...S.body, fontSize: 14 }}>{r.term}<br />{r.date}</p>
      <p style={{ ...S.body, fontSize: 14, flex: 1 }}>{r.body}</p>
      <TextLink onClick={() => go(r.route)}>{r.cta}</TextLink>
    </article>
  )
}

function ProductCard(p) {
  return (
    <article style={{ background: '#fff', border: '1px solid rgba(13,31,78,.08)', borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}>
      <h3 style={S.h3}>{p.name}</h3>
      <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E' }}>{p.kicker}</p>
      <p style={{ ...S.body, flex: 1 }}>{p.body}</p>
      <TextLink onClick={() => go(p.route)}>{p.cta}</TextLink>
    </article>
  )
}

export default function ProfessionalsPage() {
  return (
    <main>
      <section style={{ background: '#fff', padding: '80px 0 48px', textAlign: 'center' }}>
        <div className="ov-container">
          <Eyebrow style={{ justifyContent: 'center', width: '100%' }}>Financial Professionals</Eyebrow>
          <h1 style={{ fontFamily: 'var(--ov-ff-display)', fontWeight: 400, fontSize: 'clamp(32px, 4.5vw, 58px)', letterSpacing: '-0.025em', lineHeight: 1.08, color: '#0D1F4E', margin: '16px auto 20px', maxWidth: '18ch' }}>
            Competitive annuity solutions. Clear support for the client conversation.
          </h1>
          <p style={{ ...S.body, margin: '0 auto 12px', maxWidth: '62ch' }}>
            Oceanview offers fixed and fixed indexed annuity solutions designed around different client priorities—from multi-year rate certainty and annual rate responsiveness to protection with index-linked interest potential.
          </p>
          <p style={{ ...S.body, margin: '0 auto 28px', maxWidth: '62ch' }}>
            Explore products, compare approaches, access current rates and find the resources you need to support a clearer client conversation.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PillMint hero onClick={() => go('products')}>View Current Rates</PillMint>
            <PillGhost hero onClick={() => go('products')}>Explore Products</PillGhost>
            <PillGhost hero onClick={() => go('agent-portal')}>Agent Portal</PillGhost>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '0 0 56px' }}>
        <div className="ov-container">
          <Eyebrow style={{ justifyContent: 'center', width: '100%' }}>Quick Access</Eyebrow>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
            {QUICK.map((q) => (
              <PillGhost key={q.label} onClick={() => go(q.route)}>{q.label}</PillGhost>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <Eyebrow>Current Rates</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 16px', maxWidth: '20ch' }}>Start with what’s available today.</h2>
          <p style={{ ...S.body, maxWidth: '62ch', marginBottom: 32 }}>
            Review current Oceanview rates and crediting terms across our fixed and fixed indexed annuity portfolio.
          </p>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {RATES.map((r) => <RateCard key={r.name} {...r} />)}
          </div>
          <div style={{ marginTop: 28 }}>
            <PillMint onClick={() => go('products')}>View All Current Rates</PillMint>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <Eyebrow>Explore Oceanview Products</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 16px', maxWidth: '22ch' }}>Different client priorities call for different approaches.</h2>
          <p style={{ ...S.body, maxWidth: '68ch', marginBottom: 36 }}>
            Start with the role the money needs to play, then evaluate the product structure, guarantees, tradeoffs and access provisions that may fit that need.
          </p>
          <h3 style={{ ...S.label, marginBottom: 16 }}>Fixed Annuities</h3>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
            {FIXED.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
          <h3 style={{ ...S.label, marginBottom: 16 }}>Fixed Indexed Annuities</h3>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 860 }}>
            {INDEXED.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
          <div style={{ marginTop: 28 }}>
            <PillMint onClick={() => go('products')}>Explore All Oceanview Products</PillMint>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <Eyebrow>Help Clients Compare Approaches</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 16px', maxWidth: '22ch' }}>Sometimes the product difference becomes clearer with one question.</h2>
          <p style={{ ...S.body, maxWidth: '68ch', marginBottom: 32 }}>
            Oceanview products are designed around different client priorities. These comparison tools help focus the conversation on the structural difference that matters most.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="ov-portal-grid">
            <article style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid rgba(13,31,78,.08)' }}>
              <h3 style={S.h3}>Harbourview MYGA or CurrentRate MYGA?</h3>
              <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E', margin: '10px 0 16px' }}>Multi-year rate certainty—or annual rate responsiveness?</p>
              <p style={S.body}><strong>Harbourview MYGA.</strong> Know the applicable interest rate for the selected guarantee period.</p>
              <p style={{ ...S.body, marginTop: 10 }}><strong>CurrentRate MYGA.</strong> Know the first-year rate and the contract-defined methodology that determines credited rates annually beginning in year two.</p>
              <p style={{ ...S.label, marginTop: 16 }}>Ask:</p>
              <p style={{ ...S.body, fontStyle: 'italic', marginTop: 8 }}>“Which matters more: knowing the rate for the full guarantee period, or allowing the rate to adjust as interest rates change?”</p>
              <div style={{ marginTop: 16 }}><TextLink onClick={() => go('sales-tools')}>Compare Harbourview MYGA & CurrentRate MYGA</TextLink></div>
            </article>
            <article style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid rgba(13,31,78,.08)' }}>
              <h3 style={S.h3}>Harbourview FIA or CapLock FIA?</h3>
              <p style={{ ...S.body, fontWeight: 600, color: '#0D1F4E', margin: '10px 0 16px' }}>Broader strategy choice—or greater predictability around the cap?</p>
              <p style={S.body}><strong>Harbourview FIA.</strong> A broader menu of crediting strategies provides more ways to structure the indexed allocation.</p>
              <p style={{ ...S.body, marginTop: 10 }}><strong>CapLock FIA.</strong> Selected Cap Rate Guarantee Strategies establish the applicable cap at issue and keep it unchanged for the full surrender-charge period.</p>
              <p style={{ ...S.label, marginTop: 16 }}>Ask:</p>
              <p style={{ ...S.body, fontStyle: 'italic', marginTop: 8 }}>“Which matters more: greater certainty around the cap, or greater choice in how the indexed allocation is structured?”</p>
              <div style={{ marginTop: 16 }}><TextLink onClick={() => go('sales-tools')}>Compare Harbourview FIA & CapLock FIA</TextLink></div>
            </article>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <Eyebrow>Start With the Client Need</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 16px', maxWidth: '22ch' }}>Product selection should follow the planning conversation.</h2>
          <p style={{ ...S.body, maxWidth: '62ch', marginBottom: 28 }}>
            A useful starting point is to understand what the client needs this portion of retirement savings to do.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NEEDS.map((n, i) => (
              <div key={n.route} style={{ display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'center', flexWrap: 'wrap', padding: '20px 0', borderTop: i ? '1px solid rgba(13,31,78,.08)' : 'none' }}>
                <p style={{ ...S.body, fontStyle: 'italic', color: '#0D1F4E', maxWidth: '62ch' }}>“{n.quote}”</p>
                <TextLink onClick={() => go(n.route)}>{n.cta}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-navy-1000)' }}>
        <div className="ov-container">
          <Eyebrow light>Tools for the Client Conversation</Eyebrow>
          <h2 style={{ ...S.h2, color: '#F2FCFF', margin: '12px 0 16px', maxWidth: '22ch' }}>Clearer conversations can lead to better-informed decisions.</h2>
          <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 16, lineHeight: 1.7, color: 'rgba(242,252,255,.7)', maxWidth: '68ch', margin: '0 0 32px' }}>
            Oceanview resources are designed to help you move from the client’s planning need to a clearer understanding of the product, its guarantees and its tradeoffs.
          </p>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {TOOLS.map((t) => (
              <article key={t.title} className="ov-portal-card" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <t.Icon size={20} color="#70BABF" strokeWidth={1.75} />
                <h3 style={{ ...S.h3, color: '#F2FCFF' }}>{t.title}</h3>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 15, fontWeight: 600, color: '#F2FCFF', margin: 0 }}>{t.kicker}</p>
                <p style={{ fontFamily: 'var(--ov-ff-sans)', fontSize: 14, lineHeight: 1.65, color: 'rgba(242,252,255,.65)', margin: 0, flex: 1 }}>{t.body}</p>
                <TextLink onClick={() => go(t.route)} color="#70BABF">{t.cta}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <Eyebrow>A Simple Framework for the Annuity Conversation</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 28px', maxWidth: '24ch' }}>Start with the need. Explain the tradeoff. Confirm understanding.</h2>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {FRAMEWORK.map((f) => (
              <div key={f.label} style={{ background: 'var(--ov-surface-tint)', borderRadius: 12, padding: 18 }}>
                <p style={S.label}>{f.label}</p>
                <p style={{ ...S.body, fontSize: 15, marginTop: 8 }}>{f.body}</p>
              </div>
            ))}
          </div>
          <p style={{ ...S.body, marginTop: 24 }}>The product should follow the planning need—not lead it.</p>
          <div style={{ marginTop: 20 }}>
            <PillMint onClick={() => go('sales-tools')}>Explore The Annuity Conversation Map</PillMint>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff', paddingTop: 0 }}>
        <div className="ov-container">
          <div className="ov-prof-why-grid" style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 36%' }}>
              <Eyebrow>Why Oceanview?</Eyebrow>
              <h2 style={{ ...S.h2, color: '#0D1F4E', marginTop: 12 }}>Clear solutions. Competitive value. Long-term support.</h2>
            </div>
            <div style={{ flex: 1 }}>
              {WHY.map((d, i) => (
                <div key={d.title} style={{ display: 'flex', gap: 16, padding: '20px 0', borderTop: i ? '1px solid rgba(13,31,78,.08)' : 'none' }}>
                  <d.Icon size={20} color="#2494C1" strokeWidth={1.75} />
                  <div>
                    <h3 style={{ ...S.h3, fontSize: 18 }}>{d.title}</h3>
                    <p style={{ ...S.body, fontSize: 14, marginTop: 6 }}>{d.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 8 }}>
                <PillGhost onClick={() => go('about')}>Discover the Oceanview Difference</PillGhost>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: 'var(--ov-surface-tint)' }}>
        <div className="ov-container">
          <Eyebrow>Ready to Work With Oceanview?</Eyebrow>
          <h2 style={{ ...S.h2, color: '#0D1F4E', margin: '12px 0 28px', maxWidth: '22ch' }}>Find what you need to move the conversation forward.</h2>
          <div className="ov-portal-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <article style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid rgba(13,31,78,.08)' }}>
              <LayoutDashboard size={20} color="#2494C1" />
              <h3 style={{ ...S.h3, marginTop: 12 }}>Already Appointed?</h3>
              <p style={{ ...S.body, margin: '8px 0 16px' }}>Access forms, product materials and account resources.</p>
              <PillMint onClick={() => go('agent-portal')}>Agent Portal</PillMint>
            </article>
            <article style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid rgba(13,31,78,.08)' }}>
              <UserPlus size={20} color="#2494C1" />
              <h3 style={{ ...S.h3, marginTop: 12 }}>Want to Work With Oceanview?</h3>
              <p style={{ ...S.body, margin: '8px 0 16px' }}>Learn more about becoming appointed to offer Oceanview products.</p>
              <PillGhost onClick={() => go('contact')}>Get Appointed</PillGhost>
            </article>
            <article style={{ background: '#fff', borderRadius: 16, padding: 28, border: '1px solid rgba(13,31,78,.08)' }}>
              <Percent size={20} color="#2494C1" />
              <h3 style={{ ...S.h3, marginTop: 12 }}>Have a Case to Discuss?</h3>
              <p style={{ ...S.body, margin: '8px 0 16px' }}>Our Sales team can help you evaluate product features, client needs and available resources.</p>
              <PillGhost onClick={() => go('contact')}>Contact Oceanview Sales</PillGhost>
              <p style={{ margin: '14px 0 0' }}>
                <a href="tel:8336567455" style={{ fontFamily: 'var(--ov-ff-sans)', fontWeight: 600, color: '#0D1F4E' }}>(833) 656-7455</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Stay Informed"
            title="Get Oceanview updates for financial professionals."
            body="Receive product news, rate updates, educational resources and other information from Oceanview."
            cta="Sign Up for Updates"
            onClick={() => go('contact')}
          />
        </div>
      </section>

      <section className="ov-section" style={{ background: '#fff', paddingTop: 0 }}>
        <div className="ov-container" style={{ maxWidth: 860 }}>
          <h2 style={{ ...S.h3, marginBottom: 16 }}>Important Information</h2>
          {DISCLOSURES.map((p) => (
            <p key={p.slice(0, 40)} style={{ ...S.body, fontSize: 13, marginBottom: 12 }}>{p}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
