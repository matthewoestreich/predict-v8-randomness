// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/z3-solver/build/*",
          dest: "", // Relative to `build.outDir`.
        },
        {
          src: "./src/umd/coi.serviceworker.js",
          dest: "", // Relative to `build.outDir`.
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/umd/index.ts"),
      name: "PredictV8Randomness",
      formats: ["umd"],
      fileName: () => "predict-v8-randomness.js",
    },
    outDir: "dist/umd",
    emptyOutDir: true,
  },
});
