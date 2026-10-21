# Staging patch — Phase 1 global chrome

**Safest possible ship: one append to one file that already exists.** No PHP,
no new files, no new enqueue, no database change.

| Step | File (staging theme root) | Risk | Fixes |
|------|---------------------------|------|-------|
| **1 — safest** | `oceanview-wpbakery.css` — **append** one block | **none.** Cannot fatal; rollback = delete 211 lines | G2/G3 offset + ticker collapse, G4, G5, G6, G8 |
| **2 — optional** | `header.php` — replace one function | low (a parse error white-screens; `php -l` first, one-file rollback) | Measured offset instead of hardcoded 104/73 |
| **3 — optional** | `functions.php` — append one function + 3 filters | low (same as above) | G9 signup row. **Needs the client's OK first.** |

Do step 1, purge the cache, look at it. Steps 2 and 3 are refinements on top —
nothing in step 1 depends on them.

---

## Step 1 — append the block to `oceanview-wpbakery.css` (this is the safe one)

File: [`oceanview-wpbakery.append.css`](./oceanview-wpbakery.append.css) — append verbatim:

```bash
cat oceanview-wpbakery.append.css >> oceanview-wpbakery.css
```

Then **purge the WPE cache**.

**Why this file:** it is the **last stylesheet the theme loads** (verified in the
rendered `<link>` order), so the block wins on source order without any new file,
new `wp_enqueue_style()`, or `!important` gymnastics.

**Why the block is self-sufficient.** The header is `position: fixed`, so `#content`
needs an explicit top offset, and two legacy writers fight over it (both write
**inline** styles):

1. `library/dist/js/script-min.js` — on `window.load` it writes
   `$("#content").css("margin-top", $(".header_wrapper").outerHeight())`, and
   `.header_wrapper` is a zero-height wrapper, so it writes **0px** and the fixed
   header covered the top of every page.
2. `header.php`'s `syncContentOffset()` — used to write the measured height
   inline.

An author `!important` beats an inline style, so the block settles the offset for
good — and it tracks the ticker **without any JS at all**:

```css
:root                        { --ov-header-h: 104px; }  /* ticker + nav bar */
body:has(.ov-ticker--hidden) { --ov-header-h: 73px; }   /* collapsed  */
body:not(:has(.ov-ticker))   { --ov-header-h: 72px; }   /* switched off */
```

The theme **already** toggles `.ov-ticker--hidden` past 10px of scroll and the bar
is a fixed 72px, so this needs no theme edit. Because the declarations sit on
`body`, they win over the inherited value on `#content` — which is also why step 2
can never fight them.

> **Verified with the sync JS disabled:** at rest 104px, scrolled 73px, ticker
> removed 72px — and still correct with a bogus value forced onto
> `--ov-header-h` on `<html>`.

> ⚠️ **Append, never replace.** This repo's `docs/wpbakery/oceanview-wpbakery.css`
> is a 27KB **subset** of the theme's 279KB build; copying it over would delete the
> header/ticker/footer and newsletter-row rules. (`oceanview-wpbakery-min.css` is
> not the enqueued file — the enqueue uses the non-min name.)

## Step 2 — optional: measured offset (`header.php`)

Only needed if you want the offset measured rather than hardcoded. It keeps
working if the bar or ticker ever changes height.

Replace this function (around line 293, inside the inline `<script>` after
`</header>`):

```js
	function syncContentOffset() {
		// #content is declared further down in the document than this inline
		// script, so it doesn't exist yet when this runs on first parse —
		// look it up fresh each call instead of caching a stale reference.
		var contentEl = document.getElementById('content');
		if (headerEl && contentEl) {
			contentEl.style.marginTop = headerEl.getBoundingClientRect().height + 'px';
		}
	}
```

with:

```js
	function syncContentOffset() {
		// The offset comes from the Design QA block at the end of
		// oceanview-wpbakery.css, which reads --ov-header-h. Keeping this
		// PROPERTY current (rather than writing margin-top inline on #content)
		// is what lets both survive: an inline margin loses to that block's
		// `!important`, and the property is what the block reads.
		if (headerEl) {
			document.documentElement.style.setProperty(
				'--ov-header-h',
				headerEl.getBoundingClientRect().height + 'px'
			);
		}
	}
```

Leave the rest of the inline script alone (the `syncContentOffset()` call, the
`resize` listener, and the ticker `scroll` / `transitionend` listeners).

## Step 3 — optional: the signup row (`functions.php`)

Gravity Forms #21 asks for First Name / Last Name / Email, so the row renders
three narrow thirds. The prototype is `[Name][Email][Sign Up]`. Append:

```php
/**
 * G9 — newsletter signup row: two wide fields + a button on one row.
 *
 * The prototype's signup row is [Name][Email][Sign Up]: two 234px fields and a
 * 47px button on a single row, consent underneath. Gravity Forms #21 ("Join Our
 * Email List") asks for First Name / Last Name / Email, so the row rendered
 * three narrow thirds instead.
 *
 * Trimmed at render time rather than in the database, so the change travels with
 * the theme instead of needing a DB push. Gravity Forms treats a hidden field as
 * non-validatable (GFFormDisplay::is_field_validation_supported() returns false
 * for visibility === 'hidden'), so the field drops out of the front end and out
 * of validation together.
 *
 * @param array $form The Gravity Forms form object.
 * @return array
 */
function oceanview_gf_signup_fields( $form ) {
	if ( empty( $form['id'] ) || 21 !== (int) $form['id'] ) {
		return $form;
	}
	foreach ( $form['fields'] as $key => $field ) {
		$label = is_object( $field ) ? ( isset( $field->label ) ? $field->label : '' ) : ( isset( $field['label'] ) ? $field['label'] : '' );
		$type  = is_object( $field ) ? ( isset( $field->type ) ? $field->type : '' ) : ( isset( $field['type'] ) ? $field['type'] : '' );
		if ( 'text' !== $type || false === stripos( $label, 'last name' ) ) {
			continue;
		}
		if ( is_object( $field ) ) {
			$form['fields'][ $key ]->visibility = 'hidden';
		} else {
			$form['fields'][ $key ]['visibility'] = 'hidden';
		}
	}
	return $form;
}
add_filter( 'gform_pre_render', 'oceanview_gf_signup_fields' );
add_filter( 'gform_pre_validation', 'oceanview_gf_signup_fields' );
add_filter( 'gform_pre_submission_filter', 'oceanview_gf_signup_fields' );
```

> ⚠️ **Client decision first.** This stops collecting last names, and GF still
> labels the field "First Name" where the prototype says "Name". Leave it out if
> that has not been signed off — the page looks fine, just with three fields.

---

## What *not* to do: uploading whole files

Tempting because it needs no hand-editing, but it is the riskiest option:

- `functions.php` is **268KB** and `header.php` **19KB** — uploading them replaces
  whatever dev has done on staging since the Local clone was pulled.
- Local's `header.php` calls `oceanview_ticker_enabled()` (part of an optional
  ticker gate), so `header.php` and `functions.php` must go **together** or you
  get a fatal error.
- A PHP slip in `functions.php` white-screens the site.

If you do want to go that way, **diff staging's copies against the Local clone
first** (`~/Local Sites/ocean/app/public/wp-content/themes/oceanviewlife/`). If dev
has changed either file, use the hunks above instead.

## Checks (1440px, and 390px)

| # | Check | Expected |
|---|-------|----------|
| 1 | Header at rest | ticker **32px** + nav **72px** = **104px** |
| 2 | Content start | begins at **y = 104** on home **and** inner pages |
| 3 | Scroll past 10px | ticker folds away → stack **73px**, **no gap** above the content; returns on scroll up |
| 4 | Audience pills | outline, label on a **21.92px** line box (not 29px) |
| 5 | Section intros | headline + deck in a **630px** column, deck **18px**, no 40px gap before the card grid |
| 6 | Footer links | **~37.6px** rhythm, flush left (not 45px + 5px indent) |
| 7 | Signup row | `[Name][Email][Sign Up]` one row, consent below *(step 3 only)* |
| 8 | 390px | no horizontal scroll, same offset behaviour |
| 9 | Logged in (admin bar) | header clears the 32px bar, nothing hidden |

Checks 1–6 and 8–9 are step 1 alone. If any of them fail, the block did not load:
view source and confirm `oceanview-wpbakery.css` is the last theme stylesheet and
that the appended block is at its end.

## Rollback

- **Step 1:** delete everything from `/* DESIGN QA — layout parity with the React prototype */` to the end of the file.
- **Step 2:** restore the previous `syncContentOffset()`.
- **Step 3:** delete the `oceanview_gf_signup_fields()` block.
- Purge the WPE cache.

## What this does *not* fix

Page structure still needs WPBakery: Products option-5 nav, Contact four-tab shell,
Blog index grid, Home bands (stats / Why Oceanview link row / Current Rates). No CSS
or PHP push produces those.
