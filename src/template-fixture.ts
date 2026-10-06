// Dev fixture generated from the shared product template registry.
// Applied once by the platform's setup call (POST /_/pws/setup); nothing
// applies it automatically, and it does not provision a live site by itself.
import { createTemplateFixture, requireTemplate } from '@pws/sdk/templates';

export const TEMPLATE_FIXTURE = createTemplateFixture(requireTemplate('blog'));
