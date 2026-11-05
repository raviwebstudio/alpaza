import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PlaceholderBadge } from "@/components/policy-layout";
import { appConfig } from "@/lib/config";
import { FileText, Scale, CheckCircle2, AlertCircle } from "lucide-react";

const { brandName, siteUrl, location, phoneNumber, displayPhoneNumber, instagramHandle } =
  appConfig;

const CANONICAL_URL = `${siteUrl}/terms-and-conditions`;

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
        title: `Terms & Conditions — ${brandName} | Official Store Agreement & Rules`,
      },
      {
        name: "description",
        content: `Official Terms & Conditions for ${brandName}. Understand our policies on ordering, pricing, shipping, cancellations, intellectual property, and Indian jurisdiction.`,
      },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: `Terms & Conditions — ${brandName}` },
      {
        property: "og:description",
        content: `Official Terms and Conditions governing purchases and website usage for ${brandName} (${location}).`,
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
          name: `Terms & Conditions — ${brandName}`,
          description: `Terms and conditions governing purchases and service from ${brandName}.`,
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
                name: "Terms & Conditions",
                item: CANONICAL_URL,
              },
            ],
          },
        }),
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      currentPolicy="terms"
      title="Terms & Conditions"
      subtitle="The terms, standards, and legal agreement governing the purchase of ALPAZA apparel and interactions with our studio."
      lastUpdated="November 2026"
    >
      {/* Key Highlights Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-border/80 bg-secondary/30">
        <div className="flex items-start gap-3">
          <Scale className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Indian Jurisdiction
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Governed by Indian laws with legal jurisdiction at Meerut, Uttar Pradesh.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Honest Pricing
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              All prices displayed in INR (₹) inclusive of applicable Indian GST.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Direct Verification
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Every direct order is confirmed personally by human studio staff within 24h.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          1. Legal Agreement &amp; Parties
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement
          between you (the &ldquo;Customer&rdquo;, &ldquo;User&rdquo;, or &ldquo;You&rdquo;) and{" "}
          <strong>{brandName}</strong>, operated by{" "}
          <PlaceholderBadge
            field="LEGAL_BUSINESS_NAME"
            suggested="ALPAZA Wear / Registered Entity Name"
          />
          , with studio presence at {location} (&ldquo;ALPAZA&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          By accessing our website (
          <a href={siteUrl} className="underline hover:text-foreground">
            {siteUrl}
          </a>
          ), communicating with our WhatsApp concierge (+91 92598 80496), placing orders through
          Instagram ({instagramHandle}), or purchasing ALPAZA goods on partner platforms, you
          agree to comply with and be bound by these Terms.
        </p>
      </section>

      {/* Section 2: Eligibility */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          2. Eligibility to Contract
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Under the <strong>Indian Contract Act, 1872</strong>, you must be at least 18 years of age
          and legally competent to enter into binding agreements. If you are under 18 years of age,
          you may browse our website and initiate purchases only with the active involvement and
          consent of a parent or legal guardian.
        </p>
      </section>

      {/* Section 3: Products & Sizing */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          3. Curated Products, Fabric &amp; Sizing
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          ALPAZA curates premium apparel sourced from trusted manufacturing partners in India:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Fabrics:</strong> Our pieces are crafted from 100% premium cotton, including
            high-density combed and heavyweight jersey knits (e.g., 240 GSM).
          </li>
          <li>
            <strong>Oversized Silhouette:</strong> ALPAZA designs feature an intentional oversized,
            drop-shoulder fit. Detailed sizing measurements are provided upon request via WhatsApp.
            If you prefer a regular fitted look, we recommend sizing down.
          </li>
          <li>
            <strong>Color Representation:</strong> We capture all product photography in true-to-life
            lighting. However, subtle color differences may occur due to screen calibration, display
            technology, and ambient room lighting. Such variations do not constitute a defect.
          </li>
        </ul>
      </section>

      {/* Section 4: Ordering & Contract Formation */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          4. Orders, Verification &amp; Acceptance
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To maintain a premium, personalized shopping experience:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            Orders initiated through the website route to our WhatsApp concierge or to our authorized
            listing on Flipkart.
          </li>
          <li>
            For direct studio orders, a binding contract is formed once our team confirms product
            availability, verifies your delivery address, and receives payment confirmation.
          </li>
          <li>
            We reserve the right to decline or cancel any order in instances of inventory shortage,
            technical errors in pricing, incomplete delivery addresses, or suspected fraudulent
            activity. In such cases, any received payments will be refunded in full.
          </li>
        </ul>
      </section>

      {/* Section 5: Pricing & Payments */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          5. Pricing, Taxes &amp; Payment Methods
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Currency &amp; Taxes:</strong> All prices are listed in Indian National Rupees
            (INR / ₹) and are inclusive of applicable Goods and Services Tax (GST) under Indian tax
            regulations.
          </li>
          <li>
            <strong>Direct Payment Modes:</strong> We accept UPI (Google Pay, PhonePe, Paytm, BHIM),
            direct NEFT/IMPS bank transfer, and authorized payment links.
          </li>
          <li>
            <strong>No Surcharges:</strong> ALPAZA does not charge hidden payment fees. The price
            confirmed by our team is the total amount payable.
          </li>
          <li>
            <strong>Marketplace Orders:</strong> For orders placed through Flipkart, pricing and
            payment processing are handled under Flipkart&rsquo;s checkout terms.
          </li>
        </ul>
      </section>

      {/* Section 6: Shipping & Delivery */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          6. Shipping, Timelines &amp; Delivery
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Serviceable Regions:</strong> We ship PAN-India across all major states and
            Union Territories via reputable logistics carriers.
          </li>
          <li>
            <strong>Dispatch Time:</strong> Orders are typically processed, packed, and dispatched
            within 24 to 48 hours of payment verification (excluding Sundays and national holidays).
          </li>
          <li>
            <strong>Delivery Window:</strong> Standard domestic delivery is estimated at{" "}
            <PlaceholderBadge
              field="DOMESTIC_SHIPPING_DAYS"
              suggested="3 to 7 business days depending on location"
            />
            . Tracking numbers are shared via WhatsApp/SMS once dispatched.
          </li>
          <li>
            <strong>Shipping Fee Policy:</strong>{" "}
            <PlaceholderBadge
              field="SHIPPING_FEE_DETAILS"
              suggested="Free shipping PAN-India on all orders / Flat standard rate"
            />
            .
          </li>
          <li>
            <strong>Worldwide Shipping:</strong> We arrange worldwide international delivery on
            request. International customs duties and import taxes (if applicable) are the
            responsibility of the recipient.
          </li>
        </ul>
      </section>

      {/* Section 7: Cancellations */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          7. Order Cancellations
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Before Dispatch:</strong> You may cancel your order at zero charge by messaging
            our WhatsApp concierge (+91 92598 80496) prior to dispatch. A 100% full refund will be
            processed immediately.
          </li>
          <li>
            <strong>After Dispatch:</strong> Once your package is handed over to the courier partner
            and a tracking number is generated, cancellation is no longer possible in transit. You
            may initiate an exchange or return upon doorstep delivery under our Return Policy.
          </li>
        </ul>
      </section>

      {/* Section 8: Exchanges & Returns */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          8. Exchanges &amp; Returns Summary
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          All returns and exchanges are governed by our dedicated policies:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Return Window:</strong> Unworn pieces can be returned or exchanged within{" "}
            <strong>3 days of delivery</strong> with original tags intact.
          </li>
          <li>
            <strong>Free Size Exchanges:</strong> As part of our signature promise, ALPAZA covers
            return shipping on size exchanges.
          </li>
          <li>
            For comprehensive conditions and step-by-step guides, refer to our{" "}
            <a href="/exchange-policy" className="underline font-medium text-foreground">
              Exchange Policy
            </a>{" "}
            and{" "}
            <a href="/return-policy" className="underline font-medium text-foreground">
              Return Policy
            </a>
            .
          </li>
        </ul>
      </section>

      {/* Section 9: Intellectual Property */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          9. Intellectual Property Rights
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The name <strong>&ldquo;ALPAZA&rdquo;</strong>, the tagline{" "}
          <strong>&ldquo;Made for the Move&rdquo;</strong>, brand logotypes, graphic marks,
          garment photography, product copy, visual layouts, and web code are the exclusive
          intellectual property of{" "}
          <PlaceholderBadge
            field="LEGAL_BUSINESS_NAME"
            suggested="ALPAZA Wear / Registered Entity"
          />
          .
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You may not reproduce, copy, republish, distribute, sell, or exploit any content or assets
          from {siteUrl} without prior written authorization from ALPAZA.
        </p>
      </section>

      {/* Section 10: Limitation of Liability */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          10. Limitation of Liability &amp; Disclaimers
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To the maximum extent permitted under applicable Indian laws:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            ALPAZA provides this website and related services on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis without warranties of any kind, whether express or implied.
          </li>
          <li>
            In no event shall ALPAZA, its founders, or affiliates be liable for indirect,
            incidental, punitive, or consequential damages arising from the use of our products or
            website.
          </li>
          <li>
            Our total aggregate liability for any proven claim related to a purchase shall not
            exceed the amount actually paid by you for the specific item in question.
          </li>
          <li>
            <strong>Force Majeure:</strong> We are not liable for transit delays or failures caused
            by events beyond our reasonable control, including extreme weather, natural disasters,
            strikes, lockdowns, civil unrest, or courier system outages.
          </li>
        </ul>
      </section>

      {/* Section 11: Governing Law & Jurisdiction */}
      <section className="space-y-4 rounded-xl border border-border/80 bg-secondary/20 p-6">
        <h2 className="font-display text-2xl text-foreground">
          11. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          These Terms and any non-contractual obligations arising from your relationship with ALPAZA
          shall be governed by and construed in accordance with the <strong>laws of the Republic of
          India</strong>.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          In the event of any dispute, controversy, or claim, parties agree to first seek an amicable
          resolution through direct communication with ALPAZA support. If unresolved, the dispute
          shall be subject to the <strong>exclusive jurisdiction of the competent courts in
          Meerut, Uttar Pradesh, India</strong>.
        </p>
      </section>

      {/* Section 12: Customer Support & Notices */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl text-foreground">
          12. Official Contact &amp; Legal Notices
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          For any legal notices, queries, or clarification concerning these Terms &amp; Conditions,
          contact our studio:
        </p>
        <div className="space-y-1 text-xs font-mono text-foreground/90 bg-white/70 p-4 rounded-lg border border-border/60">
          <p>
            <strong>Brand:</strong> {brandName}
          </p>
          <p>
            <strong>Entity:</strong>{" "}
            <PlaceholderBadge
              field="LEGAL_BUSINESS_NAME"
              suggested="ALPAZA Wear / Registered Business Name"
            />
          </p>
          <p>
            <strong>Official Support Email:</strong>{" "}
            <PlaceholderBadge
              field="SUPPORT_EMAIL"
              suggested="support@alpaza.in / legal@alpaza.in"
            />
          </p>
          <p>
            <strong>Support WhatsApp / Phone:</strong> {displayPhoneNumber} ({phoneNumber})
          </p>
          <p>
            <strong>Studio Location:</strong>{" "}
            <PlaceholderBadge
              field="FULL_POSTAL_ADDRESS"
              suggested="Registered Office Address, Meerut, Uttar Pradesh, PIN - 250001, India"
            />
          </p>
        </div>
      </section>
    </PolicyLayout>
  );
}

