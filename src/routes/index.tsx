import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import c1 from "@/assets/collection-1.jpg";
import c2 from "@/assets/collection-2.jpg";
import c3 from "@/assets/collection-3.jpg";
import tee1 from "@/assets/tee-1.jpg";
import tee2 from "@/assets/tee-2.jpg";
import tee3 from "@/assets/tee-3.jpg";
import tee4 from "@/assets/tee-4.jpg";
import fabricImg from "@/assets/fabric.jpg";
import { useReveal } from "@/hooks/use-reveal";

const INSTAGRAM_URL = "https://www.instagram.com/alpaza.wear/";
const WHATSAPP_URL =
  "https://wa.me/919259880496?text=Hi%20ALPAZA%2C%20I%27d%20like%20to%20place%20an%20order.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "keywords",
        content:
          "ALPAZA, luxury clothing, minimal fashion, athleisure, premium essentials, made for the move, coming soon",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ALPAZA",
          slogan: "Made for the Move.",
          url: "/",
          sameAs: [INSTAGRAM_URL],
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
        <WhyUs />
        <Fabric />
        <Testimonials />
        <Faq />
        <Gallery />
        <Contact />
        <CustomPrint />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Announcement ---------- */

function AnnouncementBar() {
  return (
    <div className="bg-ink text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.18em] sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
        <span className="uppercase">
          Online cart launching soon · Order now via Instagram or WhatsApp
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-xl tracking-[0.35em] sm:text-2xl"
        >
          ALPAZA
        </a>
        <nav className="hidden justify-center gap-9 text-sm text-muted-foreground md:flex">
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
            href={INSTAGRAM_URL}
            aria-label="ALPAZA on Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            aria-label="Order via WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-medium tracking-widest text-background transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            ORDER
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="eyebrow mb-6 inline-flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-foreground/50" />
            Coming Soon · 2026
          </span>
          <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[6.5rem]">
            Made for
            <br />
            <span className="italic text-muted-foreground">the Move.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            ALPAZA is a minimal luxury label engineered around motion — refined
            silhouettes, considered fabrics, and pieces built to move with you,
            not against you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-background uppercase transition-transform hover:scale-[1.02]"
            >
              <Instagram className="h-4 w-4" />
              Order on Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Order
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-left">
            {[
              ["24h", "Order response"],
              ["100%", "Premium fabrics"],
              ["Global", "Shipping soon"],
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

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-warm">
            <img
              src={heroImg}
              alt="ALPAZA campaign — model in flowing motion"
              width={1600}
              height={1800}
              className="h-full w-full object-cover"
              style={{ animation: "slow-zoom 1.8s ease-out both" }}
            />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="eyebrow !text-primary-foreground/70">
                  Chapter 01
                </p>
                <p className="font-display text-2xl">The First Drop</p>
              </div>
              <span className="rounded-full border border-primary-foreground/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                Preview
              </span>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 hidden font-display text-[8rem] leading-none text-foreground/5 lg:block">
            AZ
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */

function Marquee() {
  const words = [
    "Made for the Move",
    "Coming Soon",
    "Minimal Luxury",
    "Est. Alpaza",
  ];
  const line = [...words, ...words, ...words];
  return (
    <div className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
        {line.map((w, i) => (
          <span key={i} className="flex items-center gap-14">
            <span className="font-display text-2xl italic text-foreground/80 sm:text-3xl">
              {w}
            </span>
            <span className="text-foreground/40">✦</span>
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
      name: "Essential Oversized Tee",
      tag: "Essentials",
      note: "Signature weight cotton",
    },
    {
      img: tee2,
      name: "Signature Heavyweight Tee",
      tag: "Heavyweight",
      note: "240 GSM combed cotton",
    },
    {
      img: tee3,
      name: "Classic Oversized Tee",
      tag: "Classic",
      note: "Premium combed cotton",
    },
    {
      img: tee4,
      name: "Everyday Oversized Tee",
      tag: "Everyday",
      note: "Soft-hand jersey knit",
    },
  ];
  const reveal = useReveal();

  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Featured Collection · Preview</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            The first pieces,
            <br />
            <span className="italic text-muted-foreground">
              quietly considered.
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          A tightly edited debut. Fewer pieces, engineered better — each one
          designed to move, layer and last.
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
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                Coming Soon
              </span>
            </div>
            <div className="p-5">
              <p className="eyebrow">
                {it.tag} · N°{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-xl">{it.name}</h3>
              <p className="text-xs text-muted-foreground">{it.note}</p>
            </div>
          </article>
        ))}
      </div>
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
          <p className="eyebrow mb-4">About ALPAZA</p>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            A quiet study in <span className="italic">motion</span> and
            material.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            ALPAZA began with a simple obsession: pieces that felt as considered
            standing still as they do in motion. We design a small, deliberate
            wardrobe — refined silhouettes, honest fabrics, and finishes that
            reward a closer look.
          </p>
          <p>
            Every piece is prototyped on real bodies, worn through real days,
            and revised until nothing pulls, bunches, or restricts. The result
            is a uniform for the way you actually live.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <Stat k="2026" v="Est. Year" />
            <Stat k="Meerut" v="Studio" />
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
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-3">Why ALPAZA</p>
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
    <section id="fabric" className="bg-ink text-primary-foreground">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32`}
      >
        <div className="order-2 lg:order-1">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-sm lg:min-h-[560px]">
            <img
              src={fabricImg}
              alt="Close-up of premium woven fabric"
              width={1400}
              height={1000}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
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
            We work with a shortlist of European and Japanese mills to source
            long-staple cottons, tactile wools, and technical weaves with real
            recovery. Each fabric is chosen for how it feels on the second wear
            — and the two-hundredth.
          </p>
          <ul className="mt-10 grid gap-4">
            {[
              "Long-staple Supima & Egyptian cottons",
              "Four-way stretch technical weaves",
              "OEKO-TEX certified dyes & finishes",
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
  const items = [
    {
      quote:
        "Premium quality and perfect oversized fit. Exactly what I wanted.",
      name: "Ankur",
    },
    {
      quote: "The fabric feels amazing and the print quality is excellent.",
      name: "Nishant",
    },
    {
      quote: "Minimal design with premium packaging. Worth every rupee.",
      name: "Shivam",
    },
    {
      quote: "Finally an Indian oversized tee brand that feels truly premium.",
      name: "Priyanshu",
    },
  ];
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            What our customers
            <br />
            <span className="italic text-muted-foreground">say.</span>
          </h2>
        </div>
        <div
          ref={reveal.ref}
          className={`${reveal.className} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-sm border border-border bg-background p-7 transition-shadow duration-500 hover:shadow-xl"
            >
              <div>
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                  style={{ color: "#F5C542" }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground font-display text-sm text-background"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    — {t.name}
                  </p>
                  <p className="eyebrow mt-0.5">Verified customer</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const items = [
    {
      q: "When does the online store launch?",
      a: "Our online cart is launching soon. Until then, every order is placed personally through Instagram DM or WhatsApp — you get a real human response within 24 hours.",
    },
    {
      q: "How do I order right now?",
      a: "Message us on Instagram (@alpaza.wear) or WhatsApp (+91 92598 80496) with the piece and your size. We'll confirm availability, share payment options, and arrange shipping.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes. We currently arrange international shipping on request. Full worldwide checkout will be available at launch.",
    },
    {
      q: "What's your return policy?",
      a: "Unworn pieces can be returned within 03 days of delivery. We cover return shipping on any size exchange.",
    },
    {
      q: "How should I care for ALPAZA pieces?",
      a: "Cold wash inside-out, lay flat to dry, and skip the tumble dryer. Full care instructions ship with every order.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
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
          return (
            <div key={it.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-foreground"
                aria-expanded={isOpen}
              >
                <span className="font-display text-xl sm:text-2xl">{it.q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border">
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div
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

/* ---------- Gallery ---------- */

function Gallery() {
  const tiles = [c1, heroImg, c3, c2, fabricImg, c1];
  const reveal = useReveal();
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">@alpaza.wear · Instagram</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Follow the <span className="italic">movement.</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase text-foreground"
          >
            Visit Instagram
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div
          ref={reveal.ref}
          className={`${reveal.className} grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6`}
        >
          {tiles.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-sm bg-background"
              aria-label="Open Instagram"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/40 group-hover:opacity-100">
                <Camera className="h-5 w-5 text-background" />
              </div>
            </a>
          ))}
        </div>
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
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div
        ref={reveal.ref}
        className={`${reveal.className} grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20`}
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
            For orders, sizing help, press, or wholesale — reach us on the
            channels below. A real member of the studio responds within 24
            hours.
          </p>
        </div>

        <div className="grid gap-3 self-center">
          <ContactRow
            href={INSTAGRAM_URL}
            icon={Instagram}
            label="Instagram · Order & DM"
            value="@alpaza.wear"
          />
          <ContactRow
            href={WHATSAPP_URL}
            icon={MessageCircle}
            label="WhatsApp · Fastest reply"
            value="Message +91 92598 80496"
          />
          <ContactRow
            href="#"
            icon={MapPin}
            label="Studio"
            value="Meerut Studio"
          />
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

/* ---------- Footer ---------- */

/* ---------- Custom Print ---------- */

function CustomPrint() {
  const reveal = useReveal();
  const features = [
    "Your Design",
    "Premium Oversized T-Shirts",
    "High Quality Printing",
    "Bulk & Personal Orders",
    "Launching Soon",
  ];
  return (
    <section className="bg-ink text-primary-foreground">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-32`}
      >
        <div>
          <span className="eyebrow mb-6 inline-flex items-center gap-2 !text-primary-foreground/60">
            <span className="inline-block h-px w-8 bg-primary-foreground/40" />
            Coming Soon
          </span>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Print Your Own <span className="italic opacity-70">Design.</span>
          </h2>
          <p className="mt-4 font-display text-2xl italic text-primary-foreground/70 sm:text-3xl">
            Coming Soon.
          </p>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            Want your own design on a premium oversized tee? Soon you'll be able
            to upload your artwork or logo and we'll print it on ALPAZA
            premium-quality t-shirts with the same fabric, fit, and finish.
          </p>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="mt-10 inline-flex cursor-not-allowed items-center gap-3 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60"
          >
            <Sparkles className="h-4 w-4" />
            Notify Me
          </button>
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
                Soon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.35em]">ALPAZA</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Made for the Move. Minimal luxury essentials designed to move with
              you — launching online soon.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={INSTAGRAM_URL}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <FooterCol
            title="Explore"
            links={[
              ["Collection", "#collection"],
              ["About", "#about"],
              ["Fabric", "#fabric"],
            ]}
          />
          <FooterCol
            title="Support"
            links={[
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
              ["Shipping", "#faq"],
            ]}
          />
          <FooterCol
            title="Order"
            links={[
              ["Instagram", INSTAGRAM_URL],
              ["WhatsApp", WHATSAPP_URL],
            ]}
          />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ALPAZA. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">
            Designed by{" "}
            <a
              href="https://www.crowcent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:opacity-70"
            >
              CROWCENT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map(([l, h]) => (
          <li key={l}>
            <a
              href={h}
              target={h.startsWith("http") ? "_blank" : undefined}
              rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
