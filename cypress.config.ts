import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    includeShadowDom: true,

    setupNodeEvents(on, config) {
    },
  },

  component: {
    defaultCommandTimeout: 10000,
    devServer: {
      framework: "react",
      bundler: "vite",


    },
  },
});
