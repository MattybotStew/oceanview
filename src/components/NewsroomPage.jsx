import { useState, useMemo } from 'react'
import PageHero from './PageHero.jsx'
import CTABanner from './CTABanner.jsx'
import TabBar from './TabBar.jsx'

const CATEGORIES = ["All", "Downloads", "Press Releases", "Compliance Corner", "Rate Updates", "Product News"];

const ARTICLES = [
  {
    category: "Rate Updates",
    title: "Rate Update: New MYGA Rates Effective June 1, 2026",
    date: "May 28, 2026",
    body: "Oceanview announces updated crediting rates for Multi-Year Guaranteed Annuities, effective June 1, 2026. 3-year MYGA increases to 5.20% on the Premier band ($100k+). Full rate sheet attached.",
    hasDownload: true,
  },
  {
    category: "Press Releases",
    title: "Oceanview Named Title Sponsor of the 2026 USA Pickleball National Championships",
    date: "May 28, 2026",
    body: "Oceanview Life and Annuity Company is proud to be the Title Sponsor of the 2026 USA Pickleball National Championships. Through this partnership, Oceanview is supporting one of the country's fastest-growing sports and a championship event that brings together athletes, fans, and families from across the nation.",
    hasDownload: false,
  },
  {
    category: "Compliance Corner",
    title: "Q2 Compliance Corner: State Approval Updates & RMD Reminders",
    date: "May 28, 2026",
    body: "Welcome to the Q2 edition of Compliance Corner. This quarter we cover: 10% free withdrawal rules by state, California rate filing approvals, and upcoming RMD deadline reminders for clients age 73+.",
    hasDownload: true,
  },
  {
    category: "Press Releases",
    title: "Oceanview Named to 2026 Best Annuity Providers List",
    date: "May 28, 2026",
    body: "Oceanview Life and Annuity Company has been recognized as a top annuity provider for 2026 by AnnuityRatings Center, based on customer satisfaction and financial strength.",
    hasDownload: true,
  },
  {
    category: "Product News",
    title: "CapLock Fixed Indexed Annuity – Now Approved in California",
    date: "May 28, 2026",
    body: "CapLock FIA is now approved for sale in California, expanding our fixed indexed annuity offering to one of the nation's largest insurance markets. Agents licensed in California may begin submitting applications immediately.",
    hasDownload: true,
  },
];

const CATEGORY_FILTER_MAP = {
  "All": null,
  "Downloads": null,
  "Press Releases": "Press Releases",
  "Compliance Corner": "Compliance Corner",
  "Rate Updates": "Rate Updates",
  "Product News": "Product News",
};

const S = {
  filterBar: {
    background: "#fff",
    position: "sticky",
    top: 72,
    zIndex: 10,
  },
  searchWrap: {
    padding: "28px 0 0",
  },
  searchInput: {
    width: "100%", boxSizing: "border-box",
    fontFamily: "var(--ov-ff-sans)", fontSize: 14, color: "#212529",
    padding: "12px 16px", border: "1px solid rgba(13,31,78,0.15)",
    borderRadius: 8, outline: "none", background: "#fff",
  },
  articleList: { padding: "32px 0 100px" },
  article: {
    borderTop: "1px solid rgba(13,31,78,0.10)",
    padding: "32px 0",
  },
  catRow: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10 },
  catLine: { width: 14, height: 1, background: "#2494C1", flexShrink: 0 },
  cat: {
    fontFamily: "var(--ov-ff-sans)", fontWeight: 600, fontSize: 10,
    letterSpacing: "1.2px", textTransform: "uppercase", color: "#2494C1",
  },
  date: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, color: "#9CA3AF",
    marginBottom: 10,
  },
  articleTitle: {
    fontFamily: "var(--ov-ff-display)", fontWeight: 400,
    fontSize: "clamp(18px, 2vw, 26px)", color: "#0D1F4E",
    margin: "0 0 12px", letterSpacing: "-0.01em", lineHeight: 1.25,
    cursor: "default",
  },
  articleBody: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 15, color: "#6B7280",
    lineHeight: 1.68, margin: "0 0 20px", maxWidth: "72ch",
  },
  btnRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  readMore: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 600,
    color: "#fff", background: "#233D7C", border: "none",
    borderRadius: 99, padding: "8px 20px", cursor: "pointer",
  },
  download: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 600,
    color: "#233D7C", background: "#fff",
    border: "1px solid rgba(13,31,78,0.20)",
    borderRadius: 99, padding: "8px 20px", cursor: "pointer",
  },
  pagination: {
    display: "flex", justifyContent: "center", gap: 16,
    padding: "0 0 80px",
    borderTop: "1px solid rgba(13,31,78,0.10)",
    paddingTop: 32,
  },
  pageBtn: {
    fontFamily: "var(--ov-ff-sans)", fontSize: 13, fontWeight: 600,
    color: "#233D7C", background: "#fff",
    border: "1px solid rgba(13,31,78,0.20)",
    borderRadius: 99, padding: "8px 20px", cursor: "pointer",
  },
};

function Article({ category, title, date, body, hasDownload }) {
  return (
    <div style={S.article}>
      <div style={S.catRow}>
        <div style={S.catLine} />
        <span style={S.cat}>{category}</span>
      </div>
      <div style={S.date}>{date}</div>
      <h2 style={S.articleTitle}>{title}</h2>
      <p style={S.articleBody}>{body}</p>
      <div style={S.btnRow}>
        <button style={S.readMore} onClick={() => window.location.hash = 'newsroom'}>Read more</button>
        {hasDownload && (
          <button style={S.download} onClick={() => window.location.hash = 'downloads'}>Download Rate Sheet (PDF)</button>
        )}
      </div>
    </div>
  );
}

export default function NewsroomPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let results = ARTICLES;
    const catFilter = CATEGORY_FILTER_MAP[activeTab];
    if (catFilter) results = results.filter(a => a.category === catFilter);
    if (activeTab === "Downloads") results = results.filter(a => a.hasDownload);
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(a =>
        a.title.toLowerCase().includes(q) || a.body.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeTab, query]);

  return (
    <div style={{ background: "#fff" }}>
      <PageHero
        image="assets/hero-overlay.jpg"
        eyebrow="Newsroom"
        title="News Room"
        subtitle="The latest rate updates, press releases, compliance guidance, and product announcements from Oceanview Life and Annuity Company."
      />

      <div style={S.filterBar}>
        <div className="ov-container">
          <TabBar tabs={CATEGORIES} active={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      <div className="ov-container">
        <div style={S.searchWrap}>
          <input
            type="text"
            style={S.searchInput}
            placeholder="Search term, e.g. '1035 Exchange' or 'Cap'"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div style={S.articleList}>
          {filtered.length > 0
            ? filtered.map((a, i) => <Article key={i} {...a} />)
            : (
              <div style={{ padding: "48px 0", color: "#9CA3AF", fontFamily: "var(--ov-ff-sans)", fontSize: 15 }}>
                No results found.
              </div>
            )
          }
        </div>

        <div style={S.pagination}>
          <button style={S.pageBtn}>← Older Posts</button>
          <button style={S.pageBtn}>Newer Posts →</button>
        </div>
      </div>

      <section className="ov-section" style={{ background: '#fff' }}>
        <div className="ov-container">
          <CTABanner
            eyebrow="Stay Connected"
            title="Questions about Oceanview"
            titleAccent="news or announcements?"
            body="Reach our communications team directly for press inquiries, rate announcements, or partnership questions."
            cta="Contact Us"
            onClick={() => { window.location.hash = 'contact'; }}
          />
        </div>
      </section>
    </div>
  );
}
