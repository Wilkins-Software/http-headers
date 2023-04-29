import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "@wilkins-software/http-headers",
      fileName: "http-headers",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
