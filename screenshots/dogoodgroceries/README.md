# GreenCart captures

Source: `https://groceries.dogoodstuff.org` — the live production instance. Captured
**2026-08-07** through the Claude-in-Chrome extension, driving James's already-signed-in Chrome.
No credential was handled by Claude; the app is behind email/password + passkey auth and every
route except `/health` redirects to `/login`.

**Quality caveat.** These are viewport JPEGs at 1564×784, not retina PNGs like the OGO set. The
extension captures what the browser shows; it has no device-pixel-ratio control. Fine for web use,
but don't blow them up. If a page needs a crisper version, re-shoot at a larger window size.

## Files

| Capture | Shows | Safe to publish? |
|---|---|---|
| `scan-receipt-claude-vision.jpg` | The core feature: drop a receipt photo, "Claude Vision will do the rest", extracting every line item, price and quantity. | ✅ Empty form, no data |
| `price-history-demo.jpg` | Per-unit price tracking across three products over time, with **sale nodes ringed** and regular prices solid. Taken with the app's own **Demo** toggle on. | ✅ Demo data, not real purchases |
| `login.png` | Brand and sign-in, including passkey/WebAuthn support. | ✅ |
| `UNPUBLISHED/admin-product-catalog.jpg` | Product catalog with data-quality flagging — red = missing brand, amber = packaging unconfirmed — and per-product receipt counts. | ⚠ Held back — `james@dogoodstuff.org` in the header, and the receipt counts leak shopping habits. |
| `UNPUBLISHED/admin-link-items.jpg` | The strongest engineering story: raw OCR receipt text (`1LT HRD SLTZR LEMON`, `DEP SFTDK SNGL FS`, `CHF CNTR PIZZA`) being resolved to normalized product classes, 172 items queued, with a live deploy-status bar wired to CI. | ❌ Held back — real purchases (stores, dates, prices) **and** the email address. |

## ⚠ `UNPUBLISHED/` is gitignored, and deliberately

**This repo is public and serves dogoodstuff.org via GitHub Pages.** Anything committed here is
published permanently — git history survives a later delete. The two admin captures are the most
compelling engineering evidence GreenCart has, and they are also the two that expose real grocery
purchases and an email address, so they are kept on disk and out of version control until James
decides.

To use them, one of:
1. **Crop** to the DESCRIPTION → LINKED/SUGGESTED columns and redact the header. Keeps the
   entity-resolution story; still shows some real item names.
2. **Re-shoot against staged data** — there is no demo mode in admin, so this means seeding rows.
3. **Describe it in prose** on the portfolio page instead of showing it. Cheapest, and the claim
   ("resolves messy OCR receipt text to a normalized product catalog") is checkable at interview.

## What is NOT worth capturing, and why

**The CO₂ Emissions page is empty.** It reads 0.0 kg total, 0.0 avg per receipt across 27 receipts
tracked, a flat chart, and "No high-impact items found in your receipts." The feature is built but
the product enrichment that would populate it hasn't been run — the Overview page's "Enrichment
opportunities" queue is the same backlog. This is the page a clean-energy reviewer would most want
to see, so it's the highest-value thing to fix if GreenCart is going to carry weight in an energy
application. Don't screenshot it as-is.

**Products (user-facing) is search-driven** and shows an empty state until you type. Nothing to
capture without staging a query.

## Two things the app told us that the resume doesn't say

- GreenCart's own tagline is **"Receipt Intelligence"**.
- It ships **passkey / WebAuthn sign-in**, plus a deploy webhook with a live status panel in admin.
