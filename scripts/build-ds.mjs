// Builds the design-system kit: dist/ds/bundle.js (IIFE exposing
// window.SmartMailAssistant), dist/ds/bundle.css and dist/ds/fonts/*.
// React and ReactDOM are not bundled: the host page must expose
// window.React and window.ReactDOM before loading bundle.js.
import { build } from "esbuild";
import { createRequire } from "node:module";
import path from "node:path";
import { mkdir, rm, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
// geist exports neither package.json nor its fonts, so locate the package root via an exported entry.
const geistDir = path.resolve(path.dirname(require.resolve("geist/font/sans")), "..");

/** The geist package's exports map hides its font files; resolve them by path. */
const geistFontsPlugin = {
  name: "geist-fonts",
  setup(build) {
    build.onResolve({ filter: /^geist\/dist\/fonts\// }, (args) => ({
      path: path.join(geistDir, args.path.slice("geist/".length)),
    }));
  },
};

const GLOBALS = {
  react: "window.React",
  "react-dom": "window.ReactDOM",
  "react-dom/client": "window.ReactDOM",
};

/** Maps react / react-dom imports to host-provided globals. */
const reactGlobalsPlugin = {
  name: "react-globals",
  setup(build) {
    build.onResolve({ filter: /^(react|react-dom|react-dom\/client|react\/jsx-runtime|react\/jsx-dev-runtime)$/ }, (args) => ({
      path: args.path,
      namespace: "react-globals",
    }));
    build.onLoad({ filter: /.*/, namespace: "react-globals" }, (args) => {
      if (args.path.startsWith("react/jsx")) {
        return {
          contents: `
            const React = window.React;
            export const Fragment = React.Fragment;
            function create(type, props, key, spread) {
              const { children, ...rest } = props;
              if (key !== undefined) rest.key = key;
              if (children === undefined) return React.createElement(type, rest);
              return spread ? React.createElement(type, rest, ...children) : React.createElement(type, rest, children);
            }
            // jsx: a single child (an array here is dynamic and must carry keys).
            export const jsx = (type, props, key) => create(type, props, key, false);
            // jsxs: static children array, spread as positional arguments.
            export const jsxs = (type, props, key) => create(type, props, key, Array.isArray(props.children));
            export const jsxDEV = (type, props, key, isStatic) => create(type, props, key, isStatic === true && Array.isArray(props.children));
          `,
          loader: "js",
        };
      }
      return { contents: `module.exports = ${GLOBALS[args.path]};`, loader: "js" };
    });
  },
};

await rm("dist/ds", { recursive: true, force: true });

await build({
  entryPoints: [
    { in: "src/ds/index.ts", out: "bundle" },
    { in: "src/ds/kit.css", out: "bundle" },
  ],
  outdir: "dist/ds",
  bundle: true,
  format: "iife",
  globalName: "SmartMailAssistant",
  platform: "browser",
  target: "es2019",
  minify: true,
  sourcemap: true,
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
  loader: { ".woff2": "file" },
  assetNames: "fonts/[name]",
  plugins: [geistFontsPlugin, reactGlobalsPlugin],
  footer: { js: "window.SmartMailAssistant = SmartMailAssistant;" },
  logLevel: "info",
});

// Declarations are emitted by `tsc -p tsconfig.ds.json` into dist/ds/types
// (rooted at src/, since the kit re-exports components living outside src/ds).
await mkdir("dist/ds", { recursive: true });
await writeFile("dist/ds/index.d.ts", 'export * from "./types/ds/index";\n');
