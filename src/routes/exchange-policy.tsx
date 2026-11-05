import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PlaceholderBadge } from "@/components/policy-layout";
import { appConfig } from "@/lib/config";
import { RefreshCw, Truck, CheckCircle2, Ruler, Clock, Sparkles } from "lucide-react";

const { brandName, siteUrl, location, phoneNumber, displayPhoneNumber, instagramHandle, whatsappUrl } =
  appConfig;

const CANONICAL_URL = `${siteUrl}/exchange-policy`;

export const Route = createFileRoute("/exchange-policy")({
  head: () => ({
    meta: [
      {
        title: `Exchange Policy — ${brandName} | Free Return Shipping on Size Exchanges`,
      },
      {
        name: "description",
        content: `Read the official ALPAZA Exchange Policy. Enjoy hassle-free size exchanges within 3 days of delivery with free return shipping covered by ALPAZA across India.`,
      },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: `Exchange Policy — ${brandName}` },
      {
        property: "og:description",
        content: `Size exchanges made simple. We cover return shipping on any size exchange within 3 days of delivery.`,
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${CANONICAL_URL}#webpage`,
          url: CANONICAL_URL,
          name: `Exchange Policy — ${brandName}`,
          description: `Customer size exchange terms and conditions for ${brandName}.`,
          isPartOf: { "@id": `${siteUrl}/#website` },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Exchange Policy",
                item: CANONICAL_URL,
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ExchangePolicyPage,
});

function ExchangePolicyPage() {
  return (
    <PolicyLayout
      currentPolicy="exchange"
      title="Exchange Policy"
      subtitle="Sizing made effortless. We want your oversized piece to sit exactly right — with return shipping on size exchanges covered by ALPAZA."
      lastUpdated="November 2026"
    >
      {/* Signature Guarantee Banner */}
      <div className="rounded-2xl border-2 border-foreground/20 bg-secondary/60 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-background">
              <Sparkles className="h-3 w-3" />
              The ALPAZA Promise
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground pt-1">
              Free Return Shipping on Any Size Exchange
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              Finding the right oversized silhouette should be completely stress-free. If your piece
              feels too large or too fitted, we cover reverse shipping for your size swap.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-background/80 px-4 py-3 rounded-xl border border-border">
            <Clock className="h-4 w-4 text-foreground" />
            <span className="text-xs font-mono font-medium text-foreground">
              3-Day Window
            </span>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-border/80 bg-secondary/30">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Doorstep Reverse Pickup
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Our courier partners collect the piece directly from your doorstep across India.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Ruler className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Personal Fit Advice
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Discuss measurements with our team on WhatsApp to confirm the perfect next size.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Swift Turnaround
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Replacement piece dispatched quickly once quality inspection is completed.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Exchange Window & Eligibility */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          1. Eligibility Window &amp; Garment Conditions
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To qualify for a complimentary size exchange, your request must satisfy the following:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>3-Day Notice Window:</strong> You must initiate your exchange request within{" "}
            <strong>3 calendar days (72 hours)</strong> from the confirmed delivery timestamp
            provided by the courier partner.
          </li>
          <li>
            <strong>Garment Condition:</strong> The piece must be entirely <strong>unworn</strong>,{" "}
            <strong>unwashed</strong>, unaltered, and free from any body odor, perfume, deodorant,
            lint, or cosmetic marks.
          </li>
          <li>
            <strong>Tags &amp; Packaging:</strong> All original ALPAZA brand tags, size labels, and
            original protective packaging must remain attached and intact.
          </li>
          <li>
            <strong>Proof of Purchase:</strong> Must provide your order confirmation, invoice, or
            WhatsApp chat history confirming purchase from ALPAZA.
          </li>
        </ul>
      </section>

      {/* Section 2: What Can Be Exchanged */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          2. Permissible Exchanges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/80 bg-white/70 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Eligible for Exchange</span>
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
              <li>Size swap (e.g., Small to Medium, Large to XL) for the same product model.</li>
              <li>Alternative colorway exchange (subject to current stock availability).</li>
              <li>Pieces with an inadvertent manufacturing defect or size labeling discrepancy.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-white/70 p-5">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span>Not Eligible for Exchange</span>
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-xs text-muted-foreground list-disc pl-4">
              <li>Items with tags removed, cut, or damaged.</li>
              <li>Items washed, machine-dried, ironed, or dry-cleaned.</li>
              <li>Exchange requests initiated after the 3-day post-delivery window has expired.</li>
              <li>Custom branded / customized print orders (unless defective).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Guide */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          3. Step-by-Step Exchange Process
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Exchanging your ALPAZA piece is personal and straightforward:
        </p>

        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Initiate Your Request on WhatsApp",
              desc: `Message our studio on WhatsApp (+91 92598 80496) or Instagram DM (${instagramHandle}) within 3 days of receiving your package. Share your order details and specify which size you would like instead.`,
            },
            {
              step: "02",
              title: "Share Quick Verification Photos",
              desc: "Provide 1–2 photos showing the garment laid flat with its original tags attached to confirm its unworn condition.",
            },
            {
              step: "03",
              title: "Complimentary Doorstep Reverse Pickup",
              desc: "Our team books a reverse pickup through our courier partners at zero cost to you. The courier executive will collect the securely packed parcel from your address.",
            },
            {
              step: "04",
              title: "Studio Quality Check",
              desc: "Upon arrival at our Meerut studio, our quality team inspects the piece within 24 to 48 hours to confirm tags, condition, and cleanliness.",
            },
            {
              step: "05",
              title: "Immediate Replacement Dispatch",
              desc: "Your fresh replacement piece in the requested size is packed and dispatched with priority shipping. A fresh tracking link is shared with you immediately.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 rounded-xl border border-border/70 bg-white/60 p-4 transition-colors hover:bg-white"
            >
              <span className="font-mono text-sm font-semibold text-foreground/40 shrink-0 pt-0.5">
                {item.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Out-of-Stock Resolution */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          4. If Your Desired Size is Out of Stock
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          If the requested replacement size is currently sold out, we will provide you with flexible
          options:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>Exchange for any other available colorway of the same value.</li>
          <li>Wait for our next production restock with priority reservation.</li>
          <li>Receive store credit valid for 12 months with no minimum spend restriction.</li>
          <li>Receive a 100% full refund back to your original payment method.</li>
        </ul>
      </section>

      {/* Section 5: Multiple Exchanges */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          5. Subsequent Exchanges on the Same Order
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          ALPAZA covers 100% of the return courier fees for your <strong>first size exchange</strong>{" "}
          per order. In the unlikely event that a customer requests a second consecutive size
          exchange on the same piece, reverse shipping charges of{" "}
          <PlaceholderBadge
            field="SUBSEQUENT_EXCHANGE_FEE"
            suggested="₹100 – ₹150 flat shipping fee"
          />{" "}
          will apply to cover actual logistics expenses.
        </p>
      </section>

      {/* Section 6: Flipkart Orders */}
      <section className="space-y-4 rounded-xl border border-border/80 bg-secondary/20 p-6">
        <h2 className="font-display text-2xl text-foreground">
          6. Orders Placed on Flipkart
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          If you placed your order through our official storefront on <strong>Flipkart</strong>,
          please initiate your exchange directly through the Flipkart App or Website under &ldquo;My
          Orders&rdquo;. Flipkart manages logistics, reverse pickups, and replacements directly in
          accordance with Flipkart platform policies.
        </p>
      </section>

      {/* Section 7: Contact */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl text-foreground">
          7. Start Your Exchange Now
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Our team is available 6 days a week to assist you with quick sizing exchanges:
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={`${whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
              "Hi ALPAZA, I would like to request a size exchange for my recent order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wider text-background transition-transform hover:scale-[1.02]"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Request Exchange on WhatsApp</span>
          </a>
          <a
            href={appConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <span>DM @alpaza.wear</span>
          </a>
        </div>
      </section>
    </PolicyLayout>
  );
}

