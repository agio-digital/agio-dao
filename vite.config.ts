import mdPlugin, { Mode } from "vite-plugin-markdown";
import { defineConfig, loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";
import EslintPlugin from "vite-plugin-eslint";
import Env from "vite-plugin-env-compatible";
import inject from "@rollup/plugin-inject";

function GraphQl() {
  return {
    name: "graphql-file",
    transform(src, id) {
      if (id.endsWith(".graphql")) {
        const str = JSON.stringify(src);
        return {
          code:
            "import gql from 'graphql-tag';const doc=" +
            str +
            "; export default gql`${doc}`",
          map: null,
        };
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  console.log("Vite:Mode=" + mode);
  // const env = Object.assign(process.env, loadEnv(mode, process.cwd()));

  return {
    build: {
      outDir: "dist",
      output: { entryFileNames: "[name].css" },
    },
    optimizeDeps: {
      exclude: [],
    },
    plugins: [
      Vue(),
      GraphQl(),
      Env({
        prefix: "",
      }),
      mdPlugin({ mode: [Mode.HTML] }),
      EslintPlugin({
        fix: true,
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },

    envDir: "./",
    publicDir: "./assets",
  };
});
