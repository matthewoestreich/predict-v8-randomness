// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/lib/index.ts"), // Path to your main TypeScript file
      name: "PredictV8Randomness",
      formats: ["umd"], // Output format: immediately invoked function expression (for browser)
      fileName: () => "predict-v8-randomness.js", // Output file name
    },
    outDir: "dist/umd", // Output directory for the bundle
    emptyOutDir: true, // Ensure the output directory is empty before each build
  },
});
