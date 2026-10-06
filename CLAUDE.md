# iso-smoke-1006e

ProWebStore CMS site. Template: blog.

## Stack
- Cloudflare Worker (Hono)
- Site state: SiteDO (SQLite-backed Durable Object) — no D1 database
- R2 bucket: pws-media (shared, site-prefixed)
- SDK: @pws/sdk (block renderers, admin panel, agent tools)

## Key files
- src/index.ts — Worker entry point
- src/template-fixture.ts — the selected template, for an explicit setup flow
- wrangler.toml — Worker config + bindings

## Admin
- /admin — server-rendered admin panel
- /admin/chat — AI agent for content management
- /admin/theme — visual theme editor

## Customization
- Add custom blocks in src/blocks/
- Add plugins in src/plugins/
- Add API routes in src/routes/
- Extend agent tools in src/agent/
