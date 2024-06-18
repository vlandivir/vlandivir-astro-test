import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://vlandivir.github.io',
  base: '/vlandivir-astro-test',
  integrations: [partytown()]
});