# Pulse web (SvelteKit)

Local-first AI side panel — web frontend. Companion to the
[`pulse-landing`](https://github.com/TimesNuRoman/Pulse) (Astro
marketing site) and the [`pulse-desktop`](https://github.com/TimesNuRoman/pulse-desktop)
Tauri v2 Windows app.

## Stack

- **SvelteKit 2** + Svelte 5 (runes)
- **TypeScript** strict
- **CSS variables** (no Tailwind) + scoped `<style>`
- **Cloudflare Pages** for deploy (Vite adapter)

## Status

**R0** — scaffold + design system. The build wires up `app.css`
tokens (Tokyo Night palette, square edges, glassmorphism) and
five primitives: `Btn`, `Field`, `Pill`, `Avatar`, `Glass`.

The `/` page is a live preview of those primitives. Auth, chat,
notes, sync, billing, etc. land in R1+ — see the spec on the
landing site or the in-source comment blocks per component.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # production bundle
pnpm preview  # serve the production build
```

## Deploy

```bash
pnpm build
wrangler pages deploy .svelte-kit/output --project-name pulse-web
```
