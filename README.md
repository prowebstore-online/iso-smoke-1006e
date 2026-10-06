# iso-smoke-1006e

A ProWebStore CMS site built from the **blog** template.

## URLs

| Service | URL |
|---------|-----|
| Site | https://iso-smoke-1006e.prowebstore.online |
| Admin | https://iso-smoke-1006e.prowebstore.online/admin |

## Development

```bash
pnpm install
pnpm run dev          # http://localhost:8787
```

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.

## PWS runtime updates

`@pws/shared` and `@pws/sdk` are released together. PWS applies platform and security
updates through a pull request that updates both dependencies and `pnpm-lock.yaml`; it merges
only after this repository's CI passes. Do not remove the `pws-isolated` repository topic:
it is the allow-list for that fleet update.

## Architecture

This site is an independent Cloudflare Worker powered by `@pws/sdk`:
- **Durable Objects** — site state in its own SQLite-backed SiteDO (entities, pages, users)
- **R2** — media storage
- **Hono** — HTTP framework
- **AI Agent** — Claude-powered site builder via admin chat
