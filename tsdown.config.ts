import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  platform: "neutral",
  format: ["esm", "cjs"],
  target: "es2022",
  dts: true,
  treeshake: true,
  outDir: "dist",
  inputOptions: {
    experimental: {
      attachDebugInfo: "none",
    },
  },
});
