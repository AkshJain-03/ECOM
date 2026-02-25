import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Manus Debug Collector - Vite Plugin
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) return;

  const lines = fs.readFileSync(logPath, "utf-8").split("\n");
  const kept: string[] = [];
  let size = 0;

  for (let i = lines.length - 1; i >= 0; i--) {
    const bytes = Buffer.byteLength(lines[i] + "\n");
    if (size + bytes > TRIM_TARGET_BYTES) break;
    kept.unshift(lines[i]);
    size += bytes;
  }

  fs.writeFileSync(logPath, kept.join("\n"), "utf-8");
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (!entries.length) return;
  ensureLogDir();

  const logPath = path.join(LOG_DIR, `${source}.log`);
  const lines = entries.map(
    (e) => `[${new Date().toISOString()}] ${JSON.stringify(e)}`
  );

  fs.appendFileSync(logPath, lines.join("\n") + "\n", "utf-8");
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: { src: "/__manus__/debug-collector.js", defer: true },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";
        req.on("data", (c) => (body += c));
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            if (payload.consoleLogs)
              writeToLogFile("browserConsole", payload.consoleLogs);
            if (payload.networkRequests)
              writeToLogFile("networkRequests", payload.networkRequests);
            if (payload.sessionEvents)
              writeToLogFile("sessionReplay", payload.sessionEvents);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400);
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
  vitePluginManusDebugCollector(),
];

export default defineConfig({
  // 🔑 IMPORTANT FOR GITHUB PAGES
  base: "/ECOM/",

  // 📁 index.html lives here
  root: path.resolve(PROJECT_ROOT, "client"),

  plugins,

  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "client/src"),
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(PROJECT_ROOT, "attached_assets"),
    },
  },

  envDir: PROJECT_ROOT,

  build: {
    // ✅ OUTPUT MUST CONTAIN index.html
    outDir: path.resolve(PROJECT_ROOT, "dist"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});