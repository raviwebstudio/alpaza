import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { appConfig } from "../lib/config";
import appCss from "../styles.css?url";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: appConfig.seoTitle },
        { name: "description", content: appConfig.seoDescription },
        // Robots — index everything, follow links
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "googlebot", content: "index, follow" },
        // Theme / brand
        { name: "theme-color", content: "#111111" },
        { name: "msapplication-TileColor", content: "#111111" },
        { name: "application-name", content: appConfig.brandName },
        // Geo / local SEO
        { name: "geo.region", content: appConfig.geoRegion },
        { name: "geo.placename", content: appConfig.geoPlaceName },
        // Open Graph
        { property: "og:site_name", content: appConfig.brandName },
        { property: "og:title", content: appConfig.seoTitle },
        { property: "og:description", content: appConfig.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: appConfig.siteUrl },
        { property: "og:image", content: appConfig.ogImageAbsolute },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: `${appConfig.brandName} — Premium Oversized T-Shirts Made in India` },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:locale", content: appConfig.ogLocale },
        // Twitter / X Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: `@${appConfig.twitterHandle}` },
        { name: "twitter:creator", content: `@${appConfig.twitterHandle}` },
        { name: "twitter:title", content: appConfig.seoTitle },
        { name: "twitter:description", content: appConfig.seoDescription },
        { name: "twitter:image", content: appConfig.ogImageAbsolute },
        { name: "twitter:image:alt", content: `${appConfig.brandName} — Premium Oversized T-Shirts Made in India` },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        // Favicon family — /favicon.ico served from public/
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "icon", href: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/site.webmanifest" },
        // Canonical
        { rel: "canonical", href: appConfig.siteUrl },
        // Font preconnects
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        // DNS prefetch for external links
        { rel: "dns-prefetch", href: "https://www.instagram.com" },
        { rel: "dns-prefetch", href: "https://wa.me" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body
        itemScope
        itemType="https://schema.org/WebPage"
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
