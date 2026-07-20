// Vercel serverless function — wraps the TanStack Start SSR fetch handler
// This file is committed to git; Vercel deploys it as an Edge/Node function.
// The built SSR bundle (dist/server/server.js) exports a Web Fetch API handler.

import handler from "../dist/server/server.js";

export default async function (req, res) {
  // Convert Node IncomingMessage → Web Request
  const url = `https://${req.headers.host}${req.url}`;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) headers.set(key, Array.isArray(value) ? value.join(", ") : value);
  }

  const body =
    req.method !== "GET" && req.method !== "HEAD"
      ? await new Promise((resolve) => {
          const chunks = [];
          req.on("data", (c) => chunks.push(c));
          req.on("end", () => resolve(Buffer.concat(chunks)));
        })
      : undefined;

  const webRequest = new Request(url, {
    method: req.method,
    headers,
    body,
  });

  const webResponse = await handler.fetch(webRequest);

  // Forward status + headers
  res.statusCode = webResponse.status;
  webResponse.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  // Stream body
  const buffer = await webResponse.arrayBuffer();
  res.end(Buffer.from(buffer));
}
