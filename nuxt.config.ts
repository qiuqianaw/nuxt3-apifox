import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["compute-scroll-into-view"],
    // modules: ["@nuxtjs/style-resources"],
    styleResources: {
      scss: "./assets/variables.scss",
    },
  },
});
