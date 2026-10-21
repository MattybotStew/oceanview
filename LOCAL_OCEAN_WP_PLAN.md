# → Active plan: Local WordPress (`ocean`)

**Agent summary:** [`AGENTS.md`](AGENTS.md) — section **Master plan — WordPress vs prototype (2026-10-21)**.

**Full phases:** [`docs/LOCAL_OCEAN_WP_PLAN.md`](docs/LOCAL_OCEAN_WP_PLAN.md) · **Figma scope (Q0/Q1/S):** [`docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md`](docs/FIGMA_QA_FULL_SCOPE_AND_QUICK_WINS.md) · **Dev punchlist:** [`docs/WP_DEV_PUNCHLIST.md`](docs/WP_DEV_PUNCHLIST.md)

Local site: **`ocean`** at `~/Local Sites/ocean/app/public/`. **Phase 1 is LIVE on WPE staging and verified (2026-10-21); next = Phase 2 (WPBakery).** Ticker stays (104px stack).

**Production is a different site** — still the legacy theme (36KB sheet, no `ov-ds`, no `ov-*` markup). The parity CSS cannot be appended there; it needs the design-system migration. See `AGENTS.md` → **Production**.

**Deploying:** SFTP via `docs/wpbakery/staging-patch/remote.sh` — the Design QA block is appended to the end of the theme's `oceanview-wpbakery.css`. Never replace that file with the repo's 27KB subset.
