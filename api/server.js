/**
 * Vercel Node.js Serverless Function — TanStack Start SSR handler.
 *
 * IMPORTANT: We must NOT statically import dist/server/server.js.
 * If we did, Vercel's bundler would inline server.js into this bundle.
 * server.js contains:  import("./assets/server-BCPZkRfM.js")
 * That relative path would then resolve against the BUNDLE location, not
 * dist/server/, causing a module-not-found error at runtime.
 *
 * Instead we load it at runtime using an absolute file:// URL.
 * Vercel places the includeFiles at their original paths under /var/task/,
 * so server.js lives at /var/task/dist/server/server.js and its own dynamic
 * import of ./assets/ resolves correctly.
 */
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Absolute path to dist/server/server.js (placed by includeFiles)
const serverModulePath = join(__dirname, "..", "dist", "server", "server.js");

let cachedHandler = null;

async function getHandler() {
  if (!cachedHandler) {
    const mod = await import(`file://${serverModulePath}`);
    cachedHandler = mod.default;
  }
  return cachedHandler;
}

export default async function handler(req, res) {
  const server = await getHandler();

  // Build absolute URL (Vercel passes host in headers)
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = `${proto}://${host}${req.url}`;

  // Convert Node IncomingMessage headers → Web Headers
  const webHeaders = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (val != null)
      webHeaders.set(key, Array.isArray(val) ? val.join(", ") : val);
  }

  // Read body for non-GET/HEAD requests
  const body =
    req.method !== "GET" && req.method !== "HEAD"
      ? await new Promise((resolve) => {
          const chunks = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", () => resolve(Buffer.concat(chunks)));
        })
      : undefined;

  // Call the TanStack Start Web Fetch handler
  const webResponse = await server.fetch(
    new Request(url, { method: req.method, headers: webHeaders, body }),
  );

  // Write response back to Node
  res.statusCode = webResponse.status;
  webResponse.headers.forEach((val, key) => res.setHeader(key, val));
  res.end(Buffer.from(await webResponse.arrayBuffer()));
}
