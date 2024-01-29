import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts", "styles/font-config.css"],
  format: ["esm", "cjs"],
  splitting: true,
  sourcemap: true,
  minify: false,
  clean: true,
  skipNodeModulesBundle: true,
  dts: true,
  external: ["node_modules"],
});
