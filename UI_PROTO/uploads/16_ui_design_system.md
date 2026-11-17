# UI Design System: Glass

Every screen in Niveshmarg Edge uses one visual language: a soft ambient backdrop behind
frosted, translucent surfaces with a light top edge. Surfaces are see-through; the content on
them (numbers, tables, form fields) stays crisp and fully readable.

There are two contexts:

| Context | Pages | Look |
| --- | --- | --- |
| **Admin** | Everything under `/admin/` (Unfold), plus the login page | Glass theme: light and dark, ambient gradient backdrop, frosted sidebar, header, cards, tables, menus and modals |
| **Full-width pages** | Chart workspace (`/chart/<instrument>/`), strategy builder (`/strategy/builder/<id>/`) | Solid dark trading palette (`--tv-*`); glass **only** on floating panels over the chart or canvas |

New UI follows the rules below. The aim is that a new page looks right without any CSS of its own.

---

## 1. Where the code lives

| File | What it holds | Edit it? |
| --- | --- | --- |
| `assets/css/admin.css` | The `nm-*` components (Tailwind v4 `@utility`), Unfold's tokens, the build's sources and safelist | Yes: new shared components go here |
| `assets/css/glass.css` | Glass tokens (`--nm-glass-*`), the backdrop and the overrides that turn Unfold's own surfaces into glass | Yes: only to cover an Unfold surface that is still opaque |
| `static/css/admin.css` | Built output of the two files above | Never by hand: `npm run build:admin-css` |
| `static/css/tokens.css` | Full-width pages: the `--tv-*` palette, `tv-*` components and the `--tv-glass-*` floating panels | Yes |
| `apps/core/ui.py` | Python helpers that emit design-system HTML for `admin.py` (`badge`, `button`, `actions`, `dash`, `pnl`, `signed_money`) | Yes |
| `apps/core/templatetags/nm_ui.py` | Template filters `signed_inr`, `pnl_class`; the `skin_options` tag | Yes |
| `templates/admin/partials/badge.html` | The badge for templates | Yes |
| `apps/core/skins/*.json` | The background skins (backdrop gradient and accent per skin); `apps/core/skins/__init__.py` validates them and renders their stylesheets | Yes: to add or tune a skin (§6) |
| `templates/admin/partials/skin_picker.html` | The skin picker in the header | Rarely |
| `templates/unfold/helpers/*.html` | Small Unfold overrides (label → `nm-badge`, header cell, user links) | Rarely |

Unfold's own templates are never edited or copied to restyle them: `glass.css` restyles them from
outside (see §7).

---

## 2. Components

Write these classes instead of raw Tailwind colour utilities. Each takes its colours from the glass
tokens, so it is right in light mode, in dark mode and in the opaque fallback (§5) at once.

### Surfaces

| Class | Use for | Notes |
| --- | --- | --- |
| `nm-card` | A section of a page: a stat tile, a table, a form, a chart | Glass with blur. Padding stays on the element: `p-5` (cards), `p-4` (nested), `p-6` (forms) |
| `nm-panel` | A grouped area **inside** a card (a sub-total box, a code block, a key-value strip) | A faint tint, no blur |
| `nm-glass` | A one-off element that must be a glass surface but is not a card | Same look as `nm-card`, without its border radius |

### Type

| Class | Use for |
| --- | --- |
| `nm-page-title` | The title of a custom page (`text-xl`, semibold) |
| `nm-card-title` | The heading of a card (`text-sm`, semibold); a sub-line under it is `mt-1 text-xs text-subtle` |
| `nm-label` | A field or stat label (`text-xs`, subtle) |
| `nm-stat` | A headline number (`text-2xl`, semibold, tabular figures) |
| `text-important` / `text-default` / `text-subtle` | Unfold's three text tiers; use them for all other text |

### Market direction

`nm-up` (green) and `nm-down` (red) are the only gain/loss colours. Use them for anything signed
(P&L, change, returns), never for decoration. Amounts: `{{ value|signed_inr }}` with
`{{ value|pnl_class }}`, or `ui.pnl(value)` in Python.

### Buttons

A size class plus a tone class: `nm-btn nm-btn-primary`, `nm-btn-sm nm-btn-secondary`.

| Tone | Use for |
| --- | --- |
| `nm-btn-primary` | The one main action of a page or card (lit, raised finish) |
| `nm-btn-secondary` | Every other action (glass tint) |
| `nm-btn-danger` | Destructive actions (delete, kill switch) |
| `nm-btn-warning` | Actions that need care but are not destructive |

In `admin.py`: `ui.button(url, "Open chart", tone="primary", icon="candlestick_chart")`, grouped with
`ui.actions(...)`.

### Forms

`nm-input` for inputs, selects and textareas on custom pages. Unfold's own form widgets are already
glass, so ModelAdmin forms need nothing.

### Badges

`nm-badge nm-badge-{green|red|amber|primary|neutral}`: a translucent pill with a hairline ring.

- Templates: `{% include "admin/partials/badge.html" with text="Active" tone="green" icon="check" %}`
- Python: `ui.badge("Completed", "green")`
- `@display(label={...})` in a ModelAdmin renders the same badge (Unfold's `success` → green,
  `danger` → red, `warning` → amber, `info`/`primary` → primary).

### Callouts

An inline note, warning or error box: `nm-callout nm-callout-{green|red|amber|primary}` with an icon.

```html
<div class="nm-callout nm-callout-amber">
    <span class="material-symbols-outlined">warning</span>
    <span>The last fetch of company data failed.</span>
</div>
```

Django messages (`messages.success(...)`) are styled by Unfold and the glass layer; use them for
the result of an action, and a callout for a standing condition on the page.

### Icons

Material Symbols Outlined: `<span class="material-symbols-outlined">name</span>`; `text-base` or
`text-lg` to size it next to text.

---

## 3. Page layout

The custom admin pages share one rhythm (the header comment of `templates/admin/index.html` is the
quick reference):

```
sections   flex flex-col gap-6             card        nm-card p-5 (nested p-4, forms p-6)
card body  flex flex-col gap-4             card title  nm-card-title (+ mt-1 text-xs text-subtle)
grids      grid gap-4 lg:grid-cols-12      stat value  nm-stat, label nm-label
```

A minimal page:

```html
{% extends "admin/base_site.html" %}
{% load nm_ui %}
{% block content %}
<div class="flex flex-col gap-6">
    <div class="nm-card flex flex-col gap-4 p-5">
        <div class="flex items-center justify-between gap-4">
            <h2 class="nm-card-title">Positions</h2>
            <a href="..." class="nm-btn-sm nm-btn-secondary">All positions</a>
        </div>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div class="nm-panel p-4">
                <div class="nm-label">Day P&amp;L</div>
                <div class="nm-stat {{ day_pnl|pnl_class }}">{{ day_pnl|signed_inr }}</div>
            </div>
        </div>
    </div>
</div>
{% endblock %}
```

Tables inside a card: a plain `<table class="w-full text-sm">` with
`divide-y divide-base-200 dark:divide-base-800` rows; the glass layer turns the dividers into
hairlines. Wrap wide tables in `overflow-x-auto`.

---

## 4. Rules

1. **No solid surfaces.** Never give a surface `bg-white`, `bg-base-50` or `dark:bg-base-900`: it
   paints over the backdrop and the page goes flat white. Use `nm-card` (or `nm-panel` inside one).
2. **No glass in glass.** Never put an `nm-card` inside another `nm-card`: two translucent layers
   stack into near-solid white, and a blurred element inside a blurred element blurs nothing. Nest
   with `nm-panel` or with no background at all.
3. **Colour through tokens and tones.** Status colour comes from a badge, a callout or
   `nm-up`/`nm-down`. Do not hard-code `rgba(255,255,255,…)` or hex colours in templates: the
   tokens carry the dark mode and the opaque fallbacks.
4. **Charts are transparent.** A chart inside a card draws no background of its own, so the glass
   shows through: Lightweight Charts `layout: { background: { type: "solid", color: "transparent" } }`,
   Chart.js without a canvas fill. Tooltips may stay opaque for legibility.
5. **Readable text.** Text stays at full opacity in the `text-important`/`text-default`/`text-subtle`
   tiers; translucency belongs to surfaces, never to text.
6. **Popovers go on `<body>` or use the `::before` trick.** `backdrop-filter` makes an element the
   containing block for `position: fixed` children and the backdrop root for blurred children. A
   dropdown or modal must not live inside an `nm-card`; if a bar with a menu needs to be frosted, put
   the blur on its `::before` (as the admin header and sidebar do in `glass.css`).
7. **Market colours mean direction.** Green and red are reserved for up/down, profit/loss and
   success/failure states.
8. **Keep the UI copy.** Tests assert exact headings and button labels; restyling never re-cases or
   rewords them.

---

## 5. Tokens

Defined in `assets/css/glass.css` for light (`:root`) and dark (`html.dark`). Components use them;
reach for them directly only when writing a new component.

| Token | Role |
| --- | --- |
| `--nm-backdrop-base`, `--nm-backdrop` | Page colour and the ambient gradient behind everything |
| `--nm-glass-bg` | Cards, tables, the header bar |
| `--nm-glass-bg-strong` | Sidebar; hover state of glass buttons |
| `--nm-glass-bg-menu` | Dropdowns, modals, the filter sheet, toasts (most opaque, for legibility over content) |
| `--nm-glass-tint` | Nested panels, inputs, table headers, secondary buttons |
| `--nm-glass-hover` | Row and item hover |
| `--nm-glass-border` | Surface edge |
| `--nm-glass-hairline` | Dividers inside a surface |
| `--nm-glass-edge` | The light top edge (inset highlight) |
| `--nm-glass-shadow`, `--nm-glass-shadow-lg` | Depth for surfaces and floating layers |
| `--nm-glass-blur`, `--nm-glass-blur-strong` | `backdrop-filter` values (surfaces, chrome and menus) |

**Fallbacks.** Browsers without `backdrop-filter` and users with *Reduce transparency* turned on
(`prefers-reduced-transparency`) get near-opaque surfaces from the same tokens. Anything built on the
tokens inherits this for free; hard-coded colours do not.

Primary colours (`primary-50` … `primary-950`) come from `UNFOLD["COLORS"]` in
`config/settings/base.py`, and the person's skin replaces them (§6).

**Skin inputs.** A skin sets these colour channels (`r g b`, used as `rgb(var(--x) / alpha)`) as well as the
backdrop. Write `rgb(var(--nm-ink) / 0.05)` in a new rule, never a literal indigo such as
`rgb(22 21 59 / 0.05)`: a test fails if one appears in `glass.css`.

| Token | Role |
| --- | --- |
| `--nm-ink` | Contact shadows |
| `--nm-shadow-tint` | Diffused drop shadows |
| `--nm-hairline-ink` | Base of `--nm-glass-hairline` |
| `--nm-accent-glow` | Accent washes (tinted headings, the active filter, primary pills) and the primary button's glow |
| `--nm-accent-soft` | The accent wash in dark mode |
| `--nm-glass-rgb`, `--nm-glass-rgb-strong` | Glass surface colour (white in light mode, a dark tint of the skin in dark mode) |
| `--nm-scrollbar` | Scrollbar thumb |

---

## 6. Skins

Each person picks a background skin from the palette button in the admin header. There are eight:
Indigo sky (the default), Pista, Forest, Saffron, Rose, Ocean, Amethyst and Graphite. A skin changes
the backdrop gradient (light and dark) and the accent ramp (buttons, links, active tabs). It never
changes the profit and loss colours (`nm-up` / `nm-down`), the badge tones or the full-width chart
and builder pages.

**How it works.** The choice is stored in `UserPreference` (`ui.skin`), plus an `nm_skin` cookie for the
sign-in page. A second `UNFOLD["STYLES"]` entry links `/ui/skins/<slug>.css?v=<hash>` for each
request, so the colours are there before the first paint. That stylesheet is generated from the
skin's JSON. Its `:root:root` and `html.dark:root` selectors out-rank `glass.css` and Unfold's inline
primary colours. `glass.css` keeps the Indigo values as its own defaults, so the page still draws if
the skin stylesheet fails to load. `NM_DEFAULT_SKIN` (env, default `indigo`) picks the skin for people
who have not chosen one.

**Add a skin.** Drop one JSON file into `apps/core/skins/`, or into a folder listed in `NM_SKIN_DIRS`
(env, `:`-separated) for skins kept outside the code. A file there with a built-in skin's name replaces
it. The file name is the slug (`a-z`, `0-9`, `-`). Restart `niveshmarg_web` so it is picked up.

```json
{
  "name": "Mango",
  "description": "Ripe mango and leaf",
  "order": 90,
  "accent": "#b45309",
  "light": {"base": "#fdf3e1", "glows": ["#fbbf24", "#fb923c", "#86efac", {"color": "#f472b6", "alpha": 0.2}]},
  "dark":  {"base": "#140d04", "glows": ["#b45309", "#d97706", "#15803d", "#be185d"], "glass": "#2a1e10", "glass_strong": "#22180c"}
}
```

| Key | Meaning |
| --- | --- |
| `name`, `description`, `order` | Picker label, tooltip and position (built-ins use 10–80) |
| `accent` | One `#rrggbb` (used as the 600 stop; the rest of the ramp is mixed from it) or the full `"50"` … `"950"` ramp |
| `light.base`, `dark.base` | Page colour |
| `light.glows`, `dark.glows` | 1–4 glow colours: top left, top right, bottom right, bottom left. A glow is `#rrggbb` or `{"color", "alpha"}` |
| `dark.glass`, `dark.glass_strong` | Dark glass surfaces: a dark tint of the skin's hue |
| optional `light.ink`, `shadow_tint`, `hairline_ink`, `accent_glow`, `scrollbar`, `glass`, `glass_strong`; `dark.accent_soft` | Override the values worked out from the accent ramp (950, 800, 900, 600, 400, white, white; 300) |
| `extends` | Start from another skin and set only what changes, e.g. `{"extends": "saffron", "name": "Mango", "light": {"glows": ["#ffb703"]}}` |

Only `#rrggbb` colours and numbers are accepted, because every value ends up in CSS. A file that fails
validation is logged (`apps.core.skins`) and left out of the picker. It is never served. Keep the
accent 600 stop dark enough for white button text (contrast at least 4.5:1; `tests/unit/test_skins.py`
checks every skin). Check a new skin in light and dark mode on the dashboard, a changelist, a change
form and the sign-in page.

---

## 7. Extending the glass layer to an Unfold surface

Unfold's CSS lives in cascade layers; `glass.css` is imported **unlayered**, so its rules win
without `!important`. When an Unfold screen still shows an opaque white block:

1. Find it: in the browser console on that page, list large opaque light elements in `#main`:

   ```js
   [...document.querySelectorAll('#main *')].filter(e => {
     const r = e.getBoundingClientRect(), c = getComputedStyle(e).backgroundColor;
     return r.width * r.height > 1500 && /^rgb\(2[1-5]\d, 2[1-5]\d, 2[1-5]\d\)$|^oklch\(0\.9[7-9]|^oklch\(1 /.test(c);
   }).map(e => e.tagName + ' .' + e.className)
   ```

2. Add a rule to `glass.css` in the matching section, with a **structural** selector: an id
   (`#changelist-filter`), Unfold's class combination for that surface (`.bg-white.border.shadow-xs`),
   or its position (`.formset-wrapper > div.border`). Never a bare utility such as `.bg-white`: it
   would also catch toggle knobs and avatars.
3. Use the tokens, and give dark mode its own value when the light one does not translate.
4. Rebuild and check (§9).

---

## 8. Full-width pages (chart workspace, strategy builder)

These pages keep their solid dark trading palette (`--tv-*` in `static/css/tokens.css`, Tailwind 3
build via `npm run build:css`). The chart, the canvas, the header and the footer stay solid.

Glass is used **only** for layers that float over the chart or canvas (menus, the side panel, the
command palette, the chart assistant, builder drawers, quick-add), so the market stays visible
behind them. A new floating panel gets its id added to the `:is(...)` list in the *Glass panels*
section of `tokens.css`; large see-through panels go in the second list (`#chart-side-panel`,
`#preview-drawer`). The same no-glass-in-glass rule applies: an overlay that blurs must not contain
a panel that blurs.

---

## 9. Workflow and checks

1. Edit templates, `admin.py` helpers or `assets/css/*.css`.
2. `npm run build:admin-css`. It first syncs Unfold's template sources into `.build/unfold/`; if
   `static/css/admin.css` shrinks by a lot, the sync failed and Unfold classes were dropped.
3. `docker restart niveshmarg_web` after template changes (Daphne caches templates); CSS and JS are
   picked up on reload.
4. Look at the page in:
   - light and dark mode (Unfold's theme switcher)
   - a width below 1280 px (sidebar hidden) and a phone width
   - DevTools *Rendering → Emulate prefers-reduced-transparency: reduce*
5. Commit the source (`assets/css/…`, templates) **and** the built `static/css/admin.css` together.
