# WPBakery shortcode / structure recipes

Use **Backend Editor** or **Classic Mode** if you paste shortcodes. Prefer the UI + Extra class names for most work; use Raw HTML for hero/CTA patterns.

Class reference lives in `oceanview-wpbakery.css`. HTML snippets in `recipes.html`.

---

## 1. Soft-tint section with three white cards

**Structure in Frontend Editor**

1. **Row**  
   - Extra class: `ov-section ov-bg-tint`  
   - (Optional) disable stretch if theme already full-width
2. Three **Columns** (1/3 + 1/3 + 1/3)  
   - Each column Extra class: `ov-card ov-card--white ov-card--large`
3. Inside each column:  
   - Text Block (h3 + p)  
   - Button **or** Raw HTML: `<a class="ov-text-link" href="…">Learn more</a>`

**Conceptual shortcode**

```text
[vc_row el_class="ov-section ov-bg-tint"]
  [vc_column width="1/3" el_class="ov-card ov-card--white ov-card--large"]
    [vc_column_text]
      <h3 class="ov-card__title">Title one</h3>
      <p>Card body copy.</p>
      <a class="ov-text-link" href="/page-1/">Learn more</a>
    [/vc_column_text]
  [/vc_column]
  [vc_column width="1/3" el_class="ov-card ov-card--white ov-card--large"]
    [vc_column_text]…[/vc_column_text]
  [/vc_column]
  [vc_column width="1/3" el_class="ov-card ov-card--white ov-card--large"]
    [vc_column_text]…[/vc_column_text]
  [/vc_column]
[/vc_row]
```

---

## 2. White section with teal callout cards

```text
[vc_row el_class="ov-section ov-bg-white"]
  [vc_column width="1/2" el_class="ov-card ov-card--teal"]
    [vc_column_text]
      <h3 class="ov-card__title">Tip</h3>
      <p>Highlight content.</p>
    [/vc_column_text]
  [/vc_column]
  [vc_column width="1/2" el_class="ov-card ov-card--teal"]
    [vc_column_text]…[/vc_column_text]
  [/vc_column]
[/vc_row]
```

---

## 3. Navy feature band + dual CTAs

Prefer Raw HTML for button fidelity. Or:

```text
[vc_row el_class="ov-section ov-bg-navy ov-on-dark" content_placement="middle"]
  [vc_column]
    [vc_column_text]
      <p class="ov-eyebrow ov-eyebrow--light">Get Started</p>
      <h2 style="color:#F2FCFF;">Find the right solution <em class="ov-accent">for your clients.</em></h2>
      <p style="color:rgba(242,252,255,.62);">Supporting line.</p>
      <div class="ov-row">
        <a class="ov-btn ov-btn--mint ov-btn--lg" href="/products/">Explore Products</a>
        <a class="ov-btn ov-btn--ghost-light ov-btn--lg" href="/contact/">Contact Sales</a>
      </div>
    [/vc_column_text]
  [/vc_column]
[/vc_row]
```

---

## 4. Hero via Raw HTML only

```text
[vc_row full_width="stretch_row_content_no_spaces" el_class="ov-mb-0"]
  [vc_column]
    [vc_raw_html]BASE64_OR_PASTE_HERO_FROM_recipes.html[/vc_raw_html]
  [/vc_column]
[/vc_row]
```

> WPBakery often base64-encodes raw HTML in the database when saved from the UI. Paste in the Frontend/Backend **Raw HTML** element UI rather than hand-editing base64.

---

## 5. CTA banner (after product content)

```text
[vc_row el_class="ov-section ov-bg-white"]
  [vc_column]
    [vc_raw_html]<!-- paste block 9 from recipes.html -->[/vc_raw_html]
  [/vc_column]
[/vc_row]
```

---

## 6. Buttons with native Button element

If you must use **Button**:

| Field | Value |
|-------|--------|
| Style | Custom / Modern (theme-dependent) |
| Shape | Round |
| Extra class name | `ov-btn ov-btn--mint ov-btn--sm` |
| Color | leave blank if CSS `!important` wins |

If the theme overrides pill styles, switch to Raw HTML `<a class="ov-btn …">` — more reliable.

---

## 7. Extra class name map (quick)

| Paste into | Classes |
|------------|---------|
| Row (white band) | `ov-section ov-bg-white` |
| Row (tint band) | `ov-section ov-bg-tint` |
| Row (navy band) | `ov-section ov-bg-navy ov-on-dark` |
| Column (white card) | `ov-card ov-card--white` |
| Column (teal card) | `ov-card ov-card--teal` |
| Column (dark card) | `ov-card ov-card--dark` |
| Button primary | `ov-btn ov-btn--mint ov-btn--sm` |
| Button outline | `ov-btn ov-btn--ghost ov-btn--sm` |
| Button on dark outline | `ov-btn ov-btn--ghost-light ov-btn--sm` |

---

## 8. Partner / NSG landing skeleton

1. Hero (Raw HTML recipe 4 or 5)  
2. Navy intro Row (`ov-section ov-bg-navy`) + eyebrow + H2 + body  
3. White split (`ov-split` Raw HTML or 1/2 + 1/2 columns)  
4. Tint About band  
5. Form Row (white)  
6. Navy closing / CTABanner Raw HTML  
7. Compliance Text Block (small meta type)

Do **not** add these pages to the primary menu unless marketing asks — same “unlisted” pattern as the React prototype.
