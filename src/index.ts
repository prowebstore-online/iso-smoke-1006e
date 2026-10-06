// iso-smoke-1006e — PWS site Worker
// Full CMS powered by @pws/sdk.

import { Hono } from 'hono';
import { mountSiteRoutes } from '@pws/sdk';
// The SDK's own bindings type — never a hand-written copy, which drifts from it
// and makes mountSiteRoutes reject this app (#45).
import type { Env } from '@pws/sdk/env.ts';
import { TEMPLATE_FIXTURE } from './template-fixture.ts';

// Re-export DOs so wrangler can find them
export { SiteDO } from '@pws/sdk/do';
export { SessionDO } from '@pws/sdk/do';

const app = new Hono<{ Bindings: Env }>();

// Mount the full CMS: admin, pages, forms, media, member auth, AI agent, PWA.
// The fixture is applied once, by the platform, through POST /_/pws/setup.
mountSiteRoutes(app, { siteId: 'iso-smoke-1006e', template: TEMPLATE_FIXTURE });

export default app;
