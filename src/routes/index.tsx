import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Instagram,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Leaf,
  Ruler,
  ShieldCheck,
  Truck,
  MapPin,
  Plus,
  Minus,
  Camera,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero.png";
import c1 from "@/assets/collection-1.png";
import c2 from "@/assets/collection-2.png";
import c3 from "@/assets/collection-3.png";
import c4 from "@/assets/collection-4.png";
import c5 from "@/assets/collection-5.png";
import c6 from "@/assets/collection-6.png";
import tee1 from "@/assets/tee-1.webp";
import tee2 from "@/assets/tee-2.webp";
import tee3 from "@/assets/tee-3.webp";
import tee4 from "@/assets/tee-4.webp";
import csBlack from "@/assets/01-black-tee.png";
import csWhite from "@/assets/02-white-tee.png";
import csGreen from "@/assets/03-green-tee.png";
import csMaroon from "@/assets/04-maroon-tee.png";
import fabricImg from "@/assets/fabric.webp";
import logo from "@/assets/logo.png";
import bannerBgImage from "@/assets/bg-image.webp";
import { useReveal } from "@/hooks/use-reveal";
import { appConfig } from "@/lib/config";

/**
 * ============================================================================
 * Visual Banner Background Image Placeholder
 * Swap or update the imported image / URL below to replace the banner anytime.
 * ============================================================================
 */
const BANNER_IMAGE_URL = bannerBgImage;

const {
  brandName,
  tagline,
  instagramUrl,
  whatsappUrl,
  phoneNumber,
  displayPhoneNumber,
  location,
  siteUrl,
  seoKeywords,
  instagramHandle,
} = appConfig;

/**
 * Module-level year constant — prevents React hydration mismatch
 * that occurs when new Date() is called inline during render.
 * Both SSR and client evaluate this once at module initialisation
 * time, producing the same value within a single deploy.
 */
const CURRENT_YEAR = new Date().getFullYear();


/** FAQ items mirrored for structured data */
const faqStructuredItems = [
  {
    q: "How do I order ALPAZA T-shirts?",
    a: "Every order is placed personally through Instagram DM or WhatsApp — you get a real human response within 24 hours.",
  },
  {
    q: "How do I order right now?",
    a: `Message us on Instagram (@alpaza.wear) or WhatsApp (+91 92598 80496) with the piece and your size. We'll confirm availability, share payment options, and arrange shipping.`,
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We arrange worldwide international shipping on request. Message us on Instagram or WhatsApp to coordinate your delivery.",
  },
  {
    q: "What is your return policy?",
    a: "Unworn pieces can be returned within 3 days of delivery. We cover return shipping on any size exchange.",
  },
  {
    q: `How should I care for ALPAZA pieces?`,
    a: "Cold wash inside-out, lay flat to dry, and skip the tumble dryer. Full care instructions ship with every order.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "keywords",
        content: seoKeywords,
      },
      // Page-specific robots override
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      // Page-specific canonical
      { property: "og:url", content: siteUrl },
      { property: "og:type", content: "website" },
    ],
    links: [
      // Preload the LCP hero image for faster rendering
      {
        rel: "preload",
        href: heroImg,
        as: "image",
        type: "image/jpeg",
        fetchPriority: "high",
      },
    ],
    scripts: [
      // 1. Organization
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: brandName,
          alternateName: "Alpaza Wear",
          description:
            "ALPAZA curates premium oversized T-shirts sourced from trusted manufacturing partners in India. Timeless essentials, selected for everyday comfort and sold through leading online platforms.",
          slogan: `${tagline}.`,
          url: siteUrl,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/og-image.jpg`,
            width: 1200,
            height: 630,
          },
          foundingDate: "2026",
          foundingLocation: {
            "@type": "Place",
            name: location,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Meerut",
              addressRegion: "U.P.",
              addressCountry: "IN",
            },
          },
          sameAs: [
            instagramUrl,
            `https://wa.me/${phoneNumber.replace("+", "")}`,
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: phoneNumber,
              contactType: "customer service",
              availableLanguage: ["English", "Hindi"],
              areaServed: "IN",
            },
            {
              "@type": "ContactPoint",
              telephone: phoneNumber,
              contactType: "sales",
              availableLanguage: ["English", "Hindi"],
              areaServed: "Worldwide",
            },
          ],
        }),
      },
      // 2. Brand
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Brand",
          name: brandName,
          alternateName: "Alpaza Wear",
          description:
            "Premium oversized T-shirts and streetwear crafted in India from 100% premium cotton.",
          url: siteUrl,
          logo: `${siteUrl}/og-image.jpg`,
          slogan: tagline,
        }),
      },
      // 3. WebSite with SearchAction
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          name: brandName,
          url: siteUrl,
          description:
            "Premium oversized T-shirt brand made in India. Shop minimal luxury streetwear crafted from 100% premium cotton.",
          publisher: {
            "@id": `${siteUrl}/#organization`,
          },
          inLanguage: "en-IN",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
      // 4. WebPage
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteUrl}/#webpage`,
          url: siteUrl,
          name: "ALPAZA — Premium Oversized T-Shirts | Made in India",
          description:
            "ALPAZA curates premium oversized T-shirts sourced from trusted manufacturing partners in India. Timeless essentials, selected for everyday comfort and sold through leading online platforms.",
          isPartOf: {
            "@id": `${siteUrl}/#website`,
          },
          about: {
            "@id": `${siteUrl}/#organization`,
          },
          inLanguage: "en-IN",
          breadcrumb: {
            "@id": `${siteUrl}/#breadcrumb`,
          },
        }),
      },
      // 5. BreadcrumbList
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${siteUrl}/#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteUrl,
            },
          ],
        }),
      },
      // 6. Products
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "ALPAZA Collection — Premium Oversized T-Shirts",
          description:
            "A curated debut collection of premium oversized T-shirts made from 100% premium cotton in India.",
          url: `${siteUrl}/#collection`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Product",
                name: "Essential Oversized Tee",
                description:
                  "Signature weight cotton oversized T-shirt by ALPAZA. Engineered fit with reinforced seams.",
                brand: { "@type": "Brand", name: brandName },
                manufacturer: {
                  "@type": "Organization",
                  name: brandName,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                },
                countryOfOrigin: "IN",
                material: "100% Premium Cotton",
                category: "Men's Oversized T-Shirts",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/PreOrder",
                  url: instagramUrl,
                  seller: { "@type": "Organization", name: brandName },
                },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Product",
                name: "Signature Heavyweight Tee",
                description:
                  "240 GSM combed cotton oversized T-shirt. Premium heavyweight streetwear by ALPAZA.",
                brand: { "@type": "Brand", name: brandName },
                manufacturer: {
                  "@type": "Organization",
                  name: brandName,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                },
                countryOfOrigin: "IN",
                material: "240 GSM 100% Combed Cotton",
                category: "Men's Oversized T-Shirts",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/PreOrder",
                  url: instagramUrl,
                  seller: { "@type": "Organization", name: brandName },
                },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Product",
                name: "Classic Oversized Tee",
                description:
                  "Premium combed cotton classic oversized T-shirt by ALPAZA. Timeless silhouette, minimal design.",
                brand: { "@type": "Brand", name: brandName },
                manufacturer: {
                  "@type": "Organization",
                  name: brandName,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                },
                countryOfOrigin: "IN",
                material: "100% Premium Combed Cotton",
                category: "Men's Oversized T-Shirts",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/PreOrder",
                  url: instagramUrl,
                  seller: { "@type": "Organization", name: brandName },
                },
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Product",
                name: "Everyday Oversized Tee",
                description:
                  "Soft-hand jersey knit everyday oversized T-shirt by ALPAZA. Designed for daily comfort.",
                brand: { "@type": "Brand", name: brandName },
                manufacturer: {
                  "@type": "Organization",
                  name: brandName,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "IN",
                  },
                },
                countryOfOrigin: "IN",
                material: "100% Soft-hand Jersey Knit Cotton",
                category: "Men's Oversized T-Shirts",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/PreOrder",
                  url: instagramUrl,
                  seller: { "@type": "Organization", name: brandName },
                },
              },
            },
          ],
        }),
      },
      // 7. FAQPage
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqStructuredItems.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: {
              "@type": "Answer",
              text: a,
            },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <About />
        <ComingSoon />
        <BannerShowcase />
        <WhyUs />
        <Fabric />
        {/* <Testimonials /> */}
        <Faq />
        {/* Hidden: Follow the Movement (Instagram Gallery) */}
        {/* <Gallery /> */}
        <Contact />
        {/* Hidden: Custom Branding / Print Your Own Design */}
        {/* <CustomPrint /> */}
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Announcement ---------- */

function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Site announcement"
      className="bg-ink text-primary-foreground"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.18em] sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="uppercase">
          ALPAZA - MADE FOR THE MOVE · PREMIUM OVERSIZED T-SHIRTS · ORDER NOW
        </span>
      </div>
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Collection", "#collection"],
    ["About", "#about"],
    ["Fabric", "#fabric"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header
      aria-label="Main site navigation"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
        ? "border-border/60 bg-background/85 backdrop-blur-md"
        : "border-transparent bg-background"
        }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          aria-label={`${brandName} — go to top`}
          className="flex items-center"
        >
          <img
            src={logo}
            alt={`${brandName} logo`}
            width={170}
            height={48}
            className="object-contain"
          />
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden justify-center gap-9 text-sm text-muted-foreground md:flex"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative transition-colors hover:text-foreground after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={instagramUrl}
            aria-label={`Follow ${brandName} on Instagram — @alpaza.wear`}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#collection"
            aria-label="Checkout ALPAZA collection"
            className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-xs font-medium tracking-widest text-background transition-transform hover:scale-[1.02]"
          >
            CHECKOUT
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero — ALPAZA Premium Oversized T-Shirts Made in India"
      className="relative overflow-hidden bg-background"
    >
      <div className="hero-section mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="eyebrow mb-6 inline-flex items-center gap-2" aria-hidden="true">
            <span className="inline-block h-px w-8 bg-foreground/50" />
            PREMIUM COLLECTION · 2026
          </span>
          <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6.5rem]">
            Made for
            <br />
            <span className="italic text-muted-foreground">the Move.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            ALPAZA curates premium oversized T-shirts sourced from trusted manufacturing partners in India. Timeless essentials, selected for everyday comfort and sold through leading online platforms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="More information about ALPAZA"
              className="inline-flex h-12 items-center justify-center rounded-full border border-foreground bg-transparent px-8 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              More Info
            </a>
          </div>

          <dl
            aria-label="Key facts about ALPAZA"
            className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left"
          >
            {[
              ["24h", "Order response"],
              ["100%", "Premium fabrics"],
              ["Global", "Worldwide shipping"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl text-foreground sm:text-3xl">
                  {k}
                </dt>
                <dd className="eyebrow mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem] px-1 sm:max-w-[25rem] sm:px-2 lg:max-w-[26.5rem] lg:px-3 lg:pr-4 xl:max-w-[28rem]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-warm">
            <img
              src={heroImg}
              alt={`${brandName} — premium oversized T-shirt campaign, model wearing minimal luxury streetwear`}
              width={1600}
              height={1800}
              fetchPriority="high"
              decoding="async"
              className="hero-img absolute inset-0 h-full w-full object-cover"
              style={{ animation: "slow-zoom 1.8s ease-out both" }}
            />
            <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between text-primary-foreground" aria-hidden="true">
              <div>
                <p className="eyebrow !text-primary-foreground/70">
                  Edition 01
                </p>
                <p className="font-display text-xl sm:text-[1.3rem]">
                  Signature Collection
                </p>
              </div>
              <span className="rounded-full border border-primary-foreground/40 px-3 py-1 text-[9px] uppercase tracking-[0.25em]">
                AVAILABLE NOW
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */

function Marquee() {
  const items = [
    { text: "quietly distinct", sep: "✦" },
    { text: "defined by detail", sep: "✦" },
    { text: "alpaza", sep: "✦" },
    { text: "made for the move", sep: "✦" },
    { text: "premium essentials", sep: "✦" },
    { text: "refined quality", sep: "✦" },
    { text: "made with intent", sep: "✦" },
  ];
  const line = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y py-5 overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
        {line.map((item, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-display text-2xl italic text-foreground/80 sm:text-3xl">
              {item.text}
            </span>
            <span className="text-secondary-foreground">{item.sep}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Collection ---------- */

function Collection() {
  const items = [
    {
      img: tee1,
      name: "Signature Black Oversized Tee",
      tag: "SIGNATURE",
      note: "100% Premium Cotton",
      badge: "SIGNATURE",
      link: "https://www.flipkart.com/alpaza-solid-men-round-neck-black-t-shirt/p/itm95c8fc1c4eda9",
    },
    {
      img: tee2,
      name: "Essential White Oversized Tee",
      tag: "ESSENTIALS",
      note: "100% Premium Cotton",
      badge: "BESTSELLER",
      link: "https://www.flipkart.com/alpaza-solid-men-round-neck-white-t-shirt/p/itm95c8fc1c4eda9",
    },
    {
      img: tee3,
      name: "Deep Green Oversized Tee",
      tag: "CORE",
      note: "100% Premium Cotton",
      badge: "NEW ARRIVAL",
      link: "https://www.flipkart.com/alpaza-solid-men-round-neck-dark-green-t-shirt/p/itm95c8fc1c4eda9",
    },
    {
      img: tee4,
      name: "Rich Maroon Oversized Tee",
      tag: "EDITION",
      note: "100% Premium Cotton",
      badge: "LIMITED EDITION",
      link: "https://www.flipkart.com/alpaza-solid-men-round-neck-maroon-t-shirt/p/itm95c8fc1c4eda9",
    },
  ];
  const reveal = useReveal();

  return (
    <section
      id="collection"
      aria-label="ALPAZA featured collection — premium oversized T-shirts"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Featured Collection · 2026</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The first pieces,
            <br />
            <span className="italic text-muted-foreground">
              quietly considered.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          A tightly edited collection of premium oversized T-shirts made in India.
          Fewer pieces, engineered better — each one designed to move, layer and last.
        </p>
      </div>

      <div
        ref={reveal.ref}
        className={`${reveal.className} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {items.map((it, i) => (
          <article
            key={it.name}
            className="group relative overflow-hidden rounded-sm bg-secondary transition-shadow duration-500 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={it.img}
                alt={it.name}
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                {it.badge}
              </span>
            </div>
            <div className="p-5">
              <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${it.name}`}
                className="mb-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] text-foreground uppercase transition-all hover:bg-foreground hover:text-background"
              >
                Order
              </a>
              <p className="eyebrow">
                {it.tag} · N°{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl">{it.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{it.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Coming Soon ---------- */

function ComingSoon() {
  const items = [
    {
      img: csBlack,
      name: "Sand Beige Oversized Tee",
      tag: "EDITION",
      note: "100% Premium Cotton · In Development",
    },
    {
      img: csWhite,
      name: "Charcoal Grey Oversized Tee",
      tag: "EDITION",
      note: "100% Premium Cotton · In Development",
    },
    {
      img: csGreen,
      name: "Navy Blue Oversized Tee",
      tag: "EDITION",
      note: "100% Premium Cotton · In Development",
    },
    {
      img: csMaroon,
      name: "Stone Brown Oversized Tee",
      tag: "EDITION",
      note: "100% Premium Cotton · In Development",
    },
  ];
  const reveal = useReveal();

  return (
    <section
      id="coming-soon"
      aria-label="ALPAZA upcoming collection — coming soon"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">COMING SOON</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The next chapter.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Four upcoming oversized essentials currently in development.
        </p>
      </div>

      <div
        ref={reveal.ref}
        className={`${reveal.className} grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {items.map((it, i) => (
          <article
            key={it.name}
            className="group relative overflow-hidden rounded-sm bg-secondary transition-shadow duration-500 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
              <img
                src={it.img}
                alt={it.name}
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale contrast-90 brightness-95 blur-[2px] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                COMING SOON
              </span>
            </div>
            <div className="p-5">
              <a
                href={`${whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
                  `Hi ${brandName}, please notify me when the ${it.name} launches.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Notify me when ${it.name} launches`}
                className="mb-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] text-foreground uppercase transition-all hover:bg-foreground hover:text-background"
              >
                Notify Me
              </a>
              <p className="eyebrow">
                {it.tag} · N°{String(i + 5).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl">{it.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{it.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Full-Width Visual Banner Section ---------- */

function BannerShowcase() {
  const reveal = useReveal<HTMLAnchorElement>();

  return (
    <section
      aria-label="ALPAZA Visual Showcase"
      className=""
    >
      <a
        ref={reveal.ref}
        href="https://www.flipkart.com/alpaza-solid-men-round-neck-white-t-shirt/p/itm2dc831f7c71f9?pid=TSHHRE86VYEYCG8H&marketplace=FLIPKART&lid=LSTTSHHRE86VYEYCG8HFAGYJC&pageUID=1790492603194"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Shop ALPAZA on Flipkart"
        className={`${reveal.className} block w-full overflow-hidden cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-opacity duration-300 hover:opacity-95`}
      >
        <img
          src={BANNER_IMAGE_URL}
          alt="ALPAZA luxury collection showcase banner"
          width={1600}
          height={700}
          loading="lazy"
          decoding="async"
          className="h-[380px] w-full object-cover md:h-[500px] lg:h-[700px]"
        />
      </a>
    </section>
  );
}

/* ---------- About ---------- */


function About() {
  const reveal = useReveal();
  return (
    <section id="about" className="bg-secondary">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10 lg:py-32`}
      >
        <div>
          <p className="eyebrow mb-4">About {brandName}</p>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            A quiet study
            <br />
            in <span className="italic">movement</span>,
            <br />
            form,
            <br />
            and material.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            We work with verified apparel manufacturers to source high-quality oversized T-shirts. Every piece is carefully selected for its fabric, fit, and finish before becoming part of the ALPAZA collection.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Stat k="2026" v="Est. Year" />
            <Stat k={location.replace(/ Studio$/, "")} v="Studio" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="font-display text-3xl text-foreground">{k}</p>
      <p className="eyebrow mt-1">{v}</p>
    </div>
  );
}

/* ---------- Why Choose Us ---------- */

function WhyUs() {
  const items = [
    {
      icon: Leaf,
      t: "Responsibly Sourced",
      d: "Small-batch mills, traceable fibres, low-impact dyes.",
    },
    {
      icon: Ruler,
      t: "Engineered Fit",
      d: "Patterns refined across dozens of wear tests.",
    },
    {
      icon: ShieldCheck,
      t: "Built to Last",
      d: "Reinforced seams and finishes designed for years.",
    },
    {
      icon: Truck,
      t: "Direct to You",
      d: "No middlemen. Fair pricing, no seasonal markdowns.",
    },
  ];
  const reveal = useReveal();

  return (
    <section
      id="why-us"
      aria-label="Why choose ALPAZA — our four core principles"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-3">Why {brandName}</p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Four principles.
          <br />
          <span className="italic text-muted-foreground">Zero compromise.</span>
        </h2>
      </div>
      <div
        ref={reveal.ref}
        className={`${reveal.className} grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4`}
      >
        {items.map(({ icon: Icon, t, d }) => (
          <div
            key={t}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-foreground hover:text-background"
          >
            <Icon className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1" />
            <h3 className="mt-8 font-display text-2xl">{t}</h3>
            <p className="mt-3 text-sm text-muted-foreground transition-colors group-hover:text-background/70">
              {d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Fabric ---------- */

function Fabric() {
  const reveal = useReveal();
  return (
    <section
      id="fabric"
      aria-label="ALPAZA fabric quality — premium cotton and technical weaves"
      className="bg-ink text-primary-foreground"
    >
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32`}
      >
        <div className="order-2 lg:order-1">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-sm lg:min-h-[560px]">
            <img
              src={fabricImg}
              alt="Close-up of premium 100% cotton woven fabric used in ALPAZA oversized T-shirts"
              width={1400}
              height={1000}
              loading="lazy"
              decoding="async"
              className="pt-4 absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="eyebrow mb-4 !text-primary-foreground/60">
            Quality & Fabric
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Fabric first.
            <br />
            <span className="italic opacity-70">Everything follows.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            Premium 180 GSM cotton tees chosen for durability, comfort, and everyday wear. Quality comes from thoughtful sourcing and consistent standards.
          </p>
          <ul className="mt-10 grid gap-4">
            {[
              "Long-staple Supima & Egyptian cottons",
              "Four-way stretch technical weaves",
              "Reinforced stitching at every stress point",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-4 border-t border-primary-foreground/15 pt-4 text-sm"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground/85">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  const reveal = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const items = [
    {
      quote:
        "Premium quality and perfect oversized T-shirts.",
      name: "Ankur",
    },
    {
      quote: "The fabric feels amazing and the print quality is excellent.",
      name: "Nishant",
    },
    {
      quote: "Minimal design with premium packaging. Worth every rupee.",
      name: "Shivam Mandal",
    },
    {
      quote: "Finally an Indian oversized tee brand that feels truly premium.",
      name: "Kshitiz Gupta",
    },
  ];
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials for ALPAZA premium oversized T-shirts"
      className="bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Testimonials</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              What our customers
              <br />
              <span className="italic text-muted-foreground">say.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonials"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next testimonials"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div ref={reveal.ref} className={reveal.className}>
          <div
            ref={scrollRef}
            role="list"
            aria-label="Customer reviews"
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((t) => (
              <figure
                key={t.name}
                role="listitem"
                aria-label={`Review by ${t.name}`}
                className="flex h-full w-[85vw] min-w-[280px] shrink-0 snap-start flex-col justify-between rounded-sm border border-border/80 bg-background p-7 transition-all duration-500 hover:border-foreground/30 hover:shadow-xl sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-4">
                    <div
                      className="flex items-center gap-1 text-[#d08f0b]"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-current"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <span className="eyebrow text-[9px] tracking-[0.2em] text-muted-foreground/70 uppercase">
                      Verified
                    </span>
                  </div>
                  <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-7 border-t border-border/60 pt-5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground font-display text-xs font-medium tracking-wider text-background"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium tracking-tight text-foreground">
                        {t.name}
                      </p>
                      <p className="eyebrow mt-0.5 text-[10px] text-muted-foreground">
                        {(t as any).title || (t as any).position || "Verified Customer"}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const items = [
    {
      q: "How do I order ALPAZA T-shirts?",
      a: "Every order is placed personally through Instagram DM or WhatsApp — you get a real human response within 24 hours.",
    },
    {
      q: "How do I order right now?",
      a: `Message us on Instagram (${instagramHandle}) or WhatsApp (${displayPhoneNumber}) with the piece and your size. We'll confirm availability, share payment options, and arrange shipping.`,
    },
    {
      q: "Do you ship internationally?",
      a: "Yes. We arrange worldwide international shipping on request. Message us on Instagram or WhatsApp to coordinate your delivery.",
    },
    {
      q: "What's your return policy?",
      a: "Unworn pieces can be returned within 03 days of delivery. We cover return shipping on any size exchange.",
    },
    {
      q: `How should I care for ${brandName} pieces?`,
      a: "Cold wash inside-out, lay flat to dry, and skip the tumble dryer. Full care instructions ship with every order.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions about ALPAZA"
      className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mb-12 text-center">
        <p className="eyebrow mb-3">FAQ</p>
        <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Everything,{" "}
          <span className="italic text-muted-foreground">answered.</span>
        </h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {items.map((it, i) => {
          const isOpen = open === i;
          const answerId = `faq-answer-${i}`;
          return (
            <div key={it.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span className="font-display text-xl sm:text-2xl">{it.q}</span>
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border"
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div
                id={answerId}
                className="grid overflow-hidden transition-all duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="pb-6 pr-14 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {it.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


/* ---------- Contact ---------- */

function Contact() {
  const reveal = useReveal();
  return (
    <section
      id="contact"
      aria-label="Contact ALPAZA — order, customer support, and press enquiries"
      className="bg-secondary"
    >
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-10 lg:py-32`}
      >
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Let's talk.
            <br />
            <span className="italic text-muted-foreground">
              We reply personally.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            For orders, sizing help, customer support, or press inquiries —
            reach us on the channels below. A real member of the studio responds
            within 24 hours.
          </p>
        </div>

        <div className="grid gap-3 self-center">
          <ContactRow
            href={instagramUrl}
            icon={Instagram}
            label="Instagram · Order & DM"
            value={instagramHandle}
          />
          <ContactRow
            href={whatsappUrl}
            icon={MessageCircle}
            label="WhatsApp · Fastest reply"
            value="Message us on WhatsApp"
          />
          <ContactRow href="#" icon={MapPin} label="Studio" value={location} />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string;
  icon: typeof Instagram;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-6 rounded-sm border border-border bg-background px-6 py-5 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
    >
      <div className="flex min-w-0 items-center gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-background/40">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="eyebrow transition-colors group-hover:!text-background/60">
            {label}
          </p>
          <p className="truncate font-display text-lg">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* ---------- Custom Print ---------- */

function CustomPrint() {
  const reveal = useReveal();
  const features = [
    "Your Design",
    "Premium T-Shirts",
    "High Quality Printing",
    "Manufacturer",
    "Bulk & Personal Orders",
  ];
  return (
    <section
      id="custom-print"
      aria-label="Custom print on ALPAZA oversized T-shirts — order now"
      className="bg-ink text-primary-foreground"
    >
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-32`}
      >
        <div>
          <span className="eyebrow mb-6 inline-flex items-center gap-2 !text-primary-foreground/60">
            <span className="inline-block h-px w-8 bg-primary-foreground/40" />
            CUSTOM BRANDING
          </span>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Print Your Own <span className="italic opacity-70">Design.</span>
          </h2>
          <p className="mt-4 font-display text-2xl italic text-primary-foreground/70 sm:text-3xl">
            Available Now.
          </p>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            Want your own design on a premium oversized tee? Share your artwork or logo
            with us via WhatsApp or Instagram and we'll print it on {brandName}{" "}
            premium-quality t-shirts with the same fabric, fit, and finish.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order custom print oversized T-shirts on WhatsApp"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-primary-foreground/60 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-ink"
          >
            <Sparkles className="h-4 w-4" />
            Order Custom Print
          </a>
        </div>
        <ul className="grid content-center gap-4">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center justify-between gap-4 border-t border-primary-foreground/15 pt-4 text-sm"
            >
              <span className="flex items-center gap-4">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground" />
                <span className="text-primary-foreground/85">{f}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/40">
                Available
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
/* ---------- Gallery ---------- */

function Gallery() {
  /** Descriptive alt texts for each gallery tile position */
  const galleryAlts = [
    `${brandName} collection editorial — oversized streetwear lookbook`,
    `${brandName} hero campaign — model in premium minimal luxury apparel`,
    `${brandName} lookbook image — premium cotton oversized T-shirt detail`,
    `${brandName} collection editorial — seasonal streetwear from India`,
    `${brandName} fabric close-up — premium woven cotton detail`,
    `${brandName} campaign — oversized fit lifestyle photography`,
  ];
  const tiles = [c1, c2, c3, c4, c5, c6];
  const reveal = useReveal();

  return (
    <section
      id="gallery"
      aria-label="ALPAZA Instagram gallery — follow the movement"
      className="bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">{instagramHandle} · Instagram</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Follow the <span className="italic">movement.</span>
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${brandName} on Instagram — @${instagramHandle}`}
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-foreground"
          >
            Visit Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
        <div
          ref={reveal.ref}
          className={`${reveal.className} grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6`}
        >
          {tiles.map((src, i) => (
            <a
              key={i}
              href="https://www.flipkart.com/alpaza-solid-men-round-neck-white-t-shirt/p/itm2dc831f7c71f9?pid=TSHHRE86VYEYCG8H&marketplace=FLIPKART&lid=LSTTSHHRE86VYEYCG8HFAGYJC&pageUID=1790492603194"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square w-full overflow-hidden rounded-sm bg-background"
              aria-label={`View ALPAZA on Flipkart — image ${i + 1}`}
            >
              <img
                src={src}
                alt={galleryAlts[i] ?? `${brandName} Instagram post ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="absolute inset-0 grid place-items-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100" aria-hidden="true">
                <Camera className="h-5 w-5 text-background" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer
      aria-label="ALPAZA site footer"
      className="w-full bg-secondary px-4 pb-8 pt-4 sm:px-6 sm:pb-12 lg:px-10 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl rounded-[32px] border border-border/80 bg-white px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-20 overflow-hidden shadow-[0_4px_30px_-6px_rgba(0,0,0,0.03)]">
        {/* Zone 1: Top Info Row */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-14 sm:pb-16 border-b border-border/60">
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-6">
            <img
              src={logo}
              alt={`${brandName} logo`}
              className="footer-logo !w-1/2 h-auto object-contain"
            />
            {/* <p className="mt-4 font-display text-xl tracking-tight text-foreground">
              Made for the Move.
            </p> */}
            <p className="mt-3 pt-4 max-w-xs text-xs text-muted-foreground leading-relaxed">
              Curated premium oversized essentials for modern everyday wear.
            </p>
          </div>

          {/* Center Column: Explore Links */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4 text-xs font-semibold tracking-[0.2em]">Explore</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#collection"
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#fabric"
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  Fabric
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Connect Links */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4 text-xs font-semibold tracking-[0.2em]">Connect</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/75 transition-colors hover:text-foreground"
                >
                  <span>Instagram</span>
                  <span className="text-muted-foreground/60">→</span>
                  <span className="font-medium text-foreground">@alpaza.wear</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.flipkart.com/alpaza-solid-men-round-neck-white-t-shirt/p/itm2dc831f7c71f9?pid=TSHHRE86VYEYCG8H&marketplace=FLIPKART&lid=LSTTSHHRE86VYEYCG8HFAGYJC&pageUID=1790492603194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/75 transition-colors hover:text-foreground"
                >
                  <span>Flipkart</span>
                  <span className="text-muted-foreground/60">→</span>
                  <span className="font-medium text-foreground">Shop now on Flipkart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Zone 2: Hero Typography — Huge ALPAZA Wordmark */}
        {/* <div className="relative overflow-hidden py-10 sm:py-14 lg:py-16 select-none">
          <div className="flex justify-center translate-y-[10%]">
            <span className="font-display text-[18vw] sm:text-[19vw] lg:text-[210px] xl:text-[230px] font-medium tracking-[-0.04em] leading-none text-foreground uppercase whitespace-nowrap text-center">
              ALPAZA
            </span>
          </div>
        </div> */}

        {/* Zone 3: Bottom Legal Row */}
        <div className="border-t border-border/60 pt-8 sm:pt-10">
          <div className="flex flex-col items-center justify-between gap-4 text-[11px] sm:text-xs text-muted-foreground sm:flex-row">
            <p className="tracking-widest uppercase">
              © 2026 {brandName}
            </p>
            <p className="eyebrow !text-muted-foreground/80 tracking-[0.25em] text-center">
              MADE FOR THE MOVE
            </p>
            <p className="tracking-wider text-muted-foreground/80 sm:text-right">
              MADE IN INDIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
