# Oceanview Design — Complete Page Inventory

**Generated:** 2026-07-22  
**Total Pages:** 53 (51 live + 2 internal)  
**For:** Haley (dev subtask creation — due 7/25)

---

## Primary Navigation (8)

1. Home
2. Products
3. About
4. Client Resources
5. Insights
6. Professionals
7. Blog
8. Contact

---

## About Section (4 sub-pages)

9. Leadership
10. Board of Directors
11. Newsroom
12. Our Story

---

## Insights Section (10 sub-pages)

13. Retirement Risk (hub)
14. Life Events (hub)
15. Market Risk (Retirement Risk Series)
16. Inflation Risk (Retirement Risk Series)
17. Longevity Risk (Retirement Risk Series)
18. Interest Rate Risk (Retirement Risk Series)
19. Approaching Retirement (Life Events Series)
20. Market Volatility (Life Events Series)
21. Financial Windfall (Life Events Series)
22. Career Transitions (Life Events Series)

---

## Client Resources Section (4 sub-pages)

23. White Papers
24. Case Studies
25. Downloads
26. Product Brochures

---

## Professionals Section (4 sub-pages)

27. State Approval
28. Sales Tools
29. Agent Portal
30. Agent FAQs

---

## Products & Strategies (12)

31. Harbourview MYGA
32. Horizon MYGA
33. Sky Harbourview MYGA
34. Harbourview FIA
35. Current Rate FIA
36. CapLock FIA
37. Topsider FIA
38. FIA Overview
39. S&P 500 Strategy
40. Russell Strategy
41. Nasdaq Strategy

---

## Partner Landings (3)

42. LPL Landing
43. Cetera Landing
44. National Senior Games

---

## Additional Pages (7)

45. FAQ
46. Individuals
47. Disclaimers
48. Privacy Notice
49. Terms of Use
50. Accessibility

---

## Internal / Unlisted Pages (2)

*These are real pages with hash routes but intentionally NOT in header/footer nav:*

51. Design (`#design`) — Internal design system + WPBakery how-to
52. Nav Dropdowns (`#nav-dropdowns`) — All mega-menus stacked for review

---

## Route Mapping Reference

| Page | Route | Component | Type |
|------|-------|-----------|------|
| Home | `#` or `#home` | HomePage | Hero + Sections |
| Products | `#products` | ProductsPage | Tabbed catalog |
| About | `#about` | Stub | Sub-nav link |
| Leadership | `#leadership` | LeadershipPage | Detail |
| Board | `#board` | BoardPage | Detail |
| Newsroom | `#newsroom` | NewsroomPage | Detail |
| Our Story | `#our-story` | OurStoryPage | Detail |
| Client Resources | `#client-resources` | Stub | Sub-nav link |
| White Papers | `#white-papers` | WhitePapersPage | Detail |
| Case Studies | `#case-studies` | CaseStudiesPage | Detail |
| Downloads | `#downloads` | DownloadsPage | Detail |
| Brochures | `#brochures` | BrochuresPage | Detail |
| Insights | `#insights` | Stub | Sub-nav link |
| Retirement Risk | `#retirement-risk` | RetirementRiskPage | Hub |
| Life Events | `#life-events` | LifeEventsPage | Hub |
| Professionals | `#professionals` | Stub | Sub-nav link |
| Sales Tools | `#sales-tools` | SalesToolsPage | Detail |
| Agent Portal | `#agent-portal` | AgentPortalPage | Detail |
| Agent FAQs | `#agent-faqs` | AgentFAQsPage | Detail |
| State Approval | `#state-approval` | StateApprovalPage | Detail |
| Blog | `#blog` | BlogPage | List |
| Contact | `#contact` | ContactPage | Form |
| FAQ | `#faq` | FAQPage | List |
| Individuals | `#individuals` | IndividualsPage | Detail |
| Product Details | `#harbourview-myga`, etc. | ProductDetailPage | Dynamic |

---

## Notes for Dev

- **Stub routes:** Routes like `#about`, `#client-resources`, `#insights`, `#professionals` are navigation stubs that don't render pages; they trigger sub-nav dropdowns in Header.jsx
- **Dynamic routes:** Product detail pages share `ProductDetailPage` component with different props based on route
- **Internal pages:** `#design` and `#nav-dropdowns` are intentionally unlisted (by design)
- **All pages use:** Consistent header, footer, layout grid (`ov-container`), spacing tokens (`ov-section`)
- **Responsive:** Mobile nav collapses to hamburger; all pages have mobile breakpoints

---

**Questions?** Check `src/components/Page.jsx` for route config, `PAGE_ROUTES` set, and `ROUTE_TO_NAV` mapping.
