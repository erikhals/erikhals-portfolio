import {sanityIntegration} from "@sanity/astro"
import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: 'oxkz69uk',
      dataset: 'production',
      apiVersion: '2023-02-08',
      useCdn: false,
    })
  ]
});