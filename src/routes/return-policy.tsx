import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PlaceholderBadge } from "@/components/policy-layout";
import { appConfig } from "@/lib/config";
import { RotateCcw, AlertTriangle, Clock, CreditCard, CheckCircle2, ShieldAlert } from "lucide-react";

const { brandName, siteUrl, location, phoneNumber, displayPhoneNumber, instagramHandle, whatsappUrl } =
  appConfig;

const CANONICAL_URL = `${siteUrl}/return-policy`;

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      {
        title: `Return & Refund Policy — ${brandName} | Straightforward 3-Day Returns in India`,
      },
      {
        name: "description",
        content: `Read the official ALPAZA Return & Refund Policy. Understand our 3-day return window, damaged goods protocol, inspection standards, and transparent refund timelines across India.`,
      },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: `Return & Refund Policy — ${brandName}` },
      {
        property: "og:description",
        content: `Straightforward 3-day return policy for unworn ALPAZA pieces. Quick resolution for damaged shipments and transparent refunds.`,
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
          name: `Return & Refund Policy — ${brandName}`,
          description: `Customer return and refund policy for ${brandName}.`,
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
                name: "Return Policy",
                item: CANONICAL_URL,
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ReturnPolicyPage,
});

function ReturnPolicyPage() {
  return (
    <PolicyLayout
      currentPolicy="return"
      title="Return & Refund Policy"
      subtitle="Clear, honest return guidelines for unworn essentials, transit damage protection, and swift refund processing."
      lastUpdated="November 2026"
    >
      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-border/80 bg-secondary/30">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              3-Day Return Window
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Unworn pieces can be returned within 3 days of delivery.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Transit Damage Protected
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Damaged shipments receive 100% free immediate replacement or full refund.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CreditCard className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Direct Bank/UPI Refunds
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Refunds credited directly to source account or UPI upon studio inspection.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Overview */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          1. Return Eligibility Window
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          At <strong>{brandName}</strong>, we stand behind the craftsmanship of every garment we
          release. If you are not completely satisfied with your purchase, unworn pieces can be
          returned within <strong>3 calendar days (72 hours)</strong> from the confirmed delivery
          date recorded by the delivery partner.
        </p>
        <div className="rounded-xl border border-border/70 bg-amber-500/5 p-4 text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Sizing Note:</strong> If you only need a different
          size (e.g. S instead of M), please refer to our{" "}
          <a href="/exchange-policy" className="underline font-medium text-foreground">
            Exchange Policy
          </a>
          . We cover return shipping on size exchanges!
        </div>
      </section>

      {/* Section 2: Qualifying Conditions */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          2. Conditions for an Acceptable Return
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To maintain hygiene and product authenticity for all customers, returns are accepted
          strictly under the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Unworn &amp; Unwashed:</strong> The garment must not have been worn outdoors,
            washed, ironed, dry-cleaned, or altered in any manner.
          </li>
          <li>
            <strong>Odor-Free &amp; Clean:</strong> Free from perfume, deodorant, smoke, sweat,
            pet hair, make-up, or stains.
          </li>
          <li>
            <strong>Original Tags &amp; Packaging:</strong> All brand neck tags, product hangtags,
            and barcodes must be intact and securely attached as delivered.
          </li>
          <li>
            <strong>Proof of Purchase:</strong> Digital invoice or WhatsApp order confirmation
            identifying the transaction.
          </li>
        </ul>
      </section>

      {/* Section 3: Damaged or Wrong Item */}
      <section className="space-y-4 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="font-display text-2xl text-foreground flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <span>3. Damaged, Defective, or Incorrect Pieces</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Every piece is individually hand-checked before packing at our studio. However, in the
          rare event that your parcel arrives damaged in transit or contains a defective or
          incorrect item:
        </p>
        <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
          <p>
            1. <strong>Notify Us Within 48 Hours:</strong> Contact us on WhatsApp at{" "}
            {displayPhoneNumber} or email{" "}
            <PlaceholderBadge field="SUPPORT_EMAIL" suggested="support@alpaza.in" /> within 48 hours
            of delivery.
          </p>
          <p>
            2. <strong>Share Clear Photos or Unboxing Video:</strong> Send clear photos or a short
            video clip highlighting the defect, incorrect label, or damaged courier bag.
          </p>
          <p>
            3. <strong>Immediate Resolution at Zero Cost:</strong> We will instantly schedule a 100%
            free reverse pickup. You will have your choice of an immediate priority replacement or a
            100% full refund with zero deductions.
          </p>
        </div>
      </section>

      {/* Section 4: Return Process */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          4. How to Initiate a Return
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Follow these simple steps to start your return:
        </p>
        <div className="space-y-3">
          {[
            {
              step: "Step 1",
              title: "Contact ALPAZA Support",
              desc: `Message us on WhatsApp (+91 92598 80496) or Instagram DM (${instagramHandle}) within 3 days of delivery. State your order reference and the reason for your return.`,
            },
            {
              step: "Step 2",
              title: "Approval & Reverse Pickup Booking",
              desc: "Our team verifies the timeline and schedules a reverse pickup from your original delivery address through our courier network.",
            },
            {
              step: "Step 3",
              title: "Handover to Courier",
              desc: "Pack the item securely in its original packaging with all tags attached. Hand it over to the courier executive and collect the physical or digital pickup receipt.",
            },
            {
              step: "Step 4",
              title: "Studio Inspection & Refund Release",
              desc: "Once received at our studio in Meerut, the piece is inspected within 24 to 48 hours. Upon approval, your refund is processed immediately.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 rounded-xl border border-border/70 bg-white/60 p-4"
            >
              <span className="font-mono text-xs font-semibold text-foreground/50 shrink-0 pt-0.5">
                {item.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Return Shipping Fees */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          5. Return Shipping &amp; Logistics Charges
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Defective or Damaged Products:</strong> 100% Free. ALPAZA bears all reverse
            logistics costs.
          </li>
          <li>
            <strong>Size Exchanges:</strong> 100% Free. Covered under our signature Exchange Policy.
          </li>
          <li>
            <strong>Standard Preference Returns (Voluntary Return):</strong> For returns initiated
            due to personal preference or change of mind, reverse courier charges of{" "}
            <PlaceholderBadge
              field="RETURN_PICKUP_FEE"
              suggested="₹100 – ₹150 reverse pickup deduction / customer borne"
            />{" "}
            may be deducted from the final refund amount to cover actual transit expenses.
          </li>
        </ul>
      </section>

      {/* Section 6: Refund Modes & Timelines */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          6. Refund Modes &amp; Processing Timelines
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Once your return is inspected and approved by our studio team:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/80 bg-white/70 p-5">
            <h3 className="text-sm font-semibold text-foreground">Prepaid Orders</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Refunds are initiated directly back to the original source account (UPI, credit/debit
              card, or netbanking). Funds reflect in your account within{" "}
              <PlaceholderBadge
                field="REFUND_PROCESSING_DAYS"
                suggested="5 to 7 business days"
              />{" "}
              as per standard Indian banking clearing cycles.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-white/70 p-5">
            <h3 className="text-sm font-semibold text-foreground">Direct / COD Orders</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For direct orders paid via manual UPI or Cash on Delivery, our team will request your
              preferred UPI ID (VPA) or bank account details. Refunds are credited via IMPS/UPI
              within 24 to 48 hours of studio approval, and a transaction confirmation UTR is
              shared with you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Non-Returnable Items */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          7. Non-Returnable Scenarios
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Returns will be declined and sent back to the customer at their expense if:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>The return request is submitted after 3 days of delivery.</li>
          <li>Original brand tags or labels have been removed or tampered with.</li>
          <li>Garments show visible signs of wear, washing, alteration, stains, or odors.</li>
          <li>Custom customized print orders created on specific customer briefs.</li>
        </ul>
      </section>

      {/* Section 8: Flipkart Purchases */}
      <section className="space-y-4 rounded-xl border border-border/80 bg-secondary/20 p-6">
        <h2 className="font-display text-2xl text-foreground">
          8. Purchases via Flipkart
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          For any ALPAZA products purchased through our official partner store on{" "}
          <strong>Flipkart</strong>, returns, replacements, and refunds are managed directly
          through your Flipkart account under their standard marketplace return policies.
        </p>
      </section>

      {/* Section 9: Customer Support */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl text-foreground">
          9. Dedicated Return Support
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Our team is on standby to help ensure every return is handled fairly, politely, and
          quickly:
        </p>
        <div className="space-y-1 text-xs font-mono text-foreground/90 bg-white/70 p-4 rounded-lg border border-border/60">
          <p>
            <strong>WhatsApp Concierge:</strong> {displayPhoneNumber} ({phoneNumber})
          </p>
          <p>
            <strong>Official Support Email:</strong>{" "}
            <PlaceholderBadge field="SUPPORT_EMAIL" suggested="support@alpaza.in" />
          </p>
          <p>
            <strong>Studio Location:</strong> {location}
          </p>
          <p>
            <strong>Hours:</strong> Monday – Saturday, 10:00 AM – 6:00 PM IST
          </p>
        </div>
        <div className="pt-2">
          <a
            href={`${whatsappUrl.split("?")[0]}?text=${encodeURIComponent(
              "Hi ALPAZA, I would like to initiate a return for my order."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wider text-background transition-transform hover:scale-[1.02]"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Initiate Return on WhatsApp</span>
          </a>
        </div>
      </section>
    </PolicyLayout>
  );
}

