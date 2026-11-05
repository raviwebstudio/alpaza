import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const ROBOTS_TXT = `# robots.txt for ALPAZA — https://www.alpaza.in
# Allow legitimate search crawlers and AI assistants

User-agent: *
Allow: /
Allow: /privacy-policy
Allow: /terms-and-conditions
Allow: /exchange-policy
Allow: /return-policy
Allow: /llms.txt

# Block private, transactional, and administrative areas
Disallow: /checkout
Disallow: /cart
Disallow: /account
Disallow: /login
Disallow: /admin
Disallow: /api/

# Explicit permissions for major search engines and discovery agents
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Reference Sitemap
Sitemap: https://www.alpaza.in/sitemap.xml
`;

const SITEMAP_XML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.alpaza.in/</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Legal & Policies -->
  <url>
    <loc>https://www.alpaza.in/privacy-policy</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://www.alpaza.in/terms-and-conditions</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://www.alpaza.in/exchange-policy</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://www.alpaza.in/return-policy</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
`;

const LLMS_TXT = `# ALPAZA
> Made for the Move. Curated premium oversized T-shirts, curated combos, and modern streetwear essentials crafted from 100% premium cotton in India.

## Brand Overview
ALPAZA (https://www.alpaza.in) is an Indian premium streetwear and essentials brand based in Meerut, Uttar Pradesh. ALPAZA curates heavyweight, oversized silhouettes engineered for everyday comfort, relaxed drape, and enduring quality. The brand operates on a minimal luxury aesthetic, avoiding loud logos in favor of subtle detailing, refined textures, and timeless colorways.

## Core Products & Specifications

### 1. Featured Oversized T-Shirts (Debut Collection)
- Signature Black Oversized Tee: 100% premium cotton, drop-shoulder silhouette, reinforced neck rib.
- Essential White Oversized Tee: 100% combed cotton, heavyweight, crisp everyday staple.
- Deep Green Oversized Tee: 100% premium cotton, rich earthy tone, soft-hand jersey knit.
- Rich Maroon Oversized Tee: 100% premium combed cotton, limited edition deep tone.
- Fabric Weight & Specs: 240 GSM combed cotton, pre-shrunk, breathable, soft-hand jersey knit, unisex sizing (S to XXL).

### 2. The Combo Edit (Curated Pairs)
- Black + White Combo: 2 × 100% premium cotton oversized tees (monochrome essentials).
- Black + Maroon Combo: 2 × 100% premium cotton oversized tees.
- Black + Green Combo: 2 × 100% premium cotton oversized tees.
- White + Green Combo: 2 × 100% premium cotton oversized tees.

### 3. Upcoming Collections (The Next Chapter)
- Oversized Hoodies: Sand Beige, Charcoal Grey, Navy Blue, and Stone Brown heavyweight fleece hoodies in active development.

## Target Audience & Ethos
- Audience: Modern individuals seeking quiet luxury, relaxed streetwear, and timeless, unbranded wardrobe essentials.
- Ethos: "Fewer pieces, engineered better — each one designed to move, layer, and last."
- Origin: Sourced and manufactured with trusted partners across India.

## Business Model & Purchasing Channels
- Direct Concierge Ordering: Orders are placed directly via WhatsApp (+91 92598 80496) and Instagram DM (@alpaza.wear). Customers receive personalized human responses within 24 hours to advise on sizing, confirm stock, share payment options (UPI, Netbanking), and arrange doorstep shipping.
- Marketplace Partner: ALPAZA products are also listed and fulfilled on Flipkart for customers preferring traditional marketplace checkout.
- Worldwide Delivery: Domestic shipping across India, with international shipping arranged upon direct request.

## Customer Policies & Guarantees
- Return Policy: Unworn pieces can be returned within 3 days of delivery with original tags attached.
- Exchange Guarantee: Free return shipping on any size exchange across India.
- Damaged Items: Immediate 100% free replacement or full refund for transit damage reported within 48 hours.
- Garment Care: Cold wash inside-out, lay flat to dry, skip tumble dryer.

## Key Canonical URLs
- Homepage: https://www.alpaza.in/
- Featured T-Shirt Collection: https://www.alpaza.in/#collection
- Combo Edit Collection: https://www.alpaza.in/#combo-collection
- About ALPAZA: https://www.alpaza.in/#about
- Fabric & Craft: https://www.alpaza.in/#fabric
- Frequently Asked Questions: https://www.alpaza.in/#faq
- Contact Studio: https://www.alpaza.in/#contact
- Privacy Policy: https://www.alpaza.in/privacy-policy
- Terms & Conditions: https://www.alpaza.in/terms-and-conditions
- Exchange Policy: https://www.alpaza.in/exchange-policy
- Return Policy: https://www.alpaza.in/return-policy
- XML Sitemap: https://www.alpaza.in/sitemap.xml
- Robots Directive: https://www.alpaza.in/robots.txt

## Verified Contact Details
- Website: https://www.alpaza.in
- Brand: ALPAZA
- Studio Location: Meerut, Uttar Pradesh, India
- Customer Phone: +91 92598 80496
- WhatsApp Concierge: https://wa.me/919259880496 (+91 92598 80496)
- Instagram: https://www.instagram.com/alpaza.wear/ (@alpaza.wear)
- Operating Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST
`;

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    if (url.pathname === "/robots.txt") {
      return new Response(ROBOTS_TXT, {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=86400",
        },
      });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(SITEMAP_XML, {
        status: 200,
        headers: {
          "content-type": "application/xml; charset=utf-8",
          "cache-control": "public, max-age=86400",
        },
      });
    }
    if (url.pathname === "/llms.txt") {
      return new Response(LLMS_TXT, {
        status: 200,
        headers: {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "public, max-age=86400",
        },
      });
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
