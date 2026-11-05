import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, PlaceholderBadge } from "@/components/policy-layout";
import { appConfig } from "@/lib/config";
import { ShieldCheck, Lock, Eye, Database, HelpCircle } from "lucide-react";

const { brandName, siteUrl, location, phoneNumber, displayPhoneNumber, instagramHandle } =
  appConfig;

const CANONICAL_URL = `${siteUrl}/privacy-policy`;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${brandName} | Data Protection & Privacy in India` },
      {
        name: "description",
        content: `Read the official Privacy Policy for ${brandName}. Learn how we collect, handle, protect, and process personal data in compliance with Indian IT and Data Protection laws.`,
      },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: `Privacy Policy — ${brandName}` },
      {
        property: "og:description",
        content: `Official customer data protection and privacy policy for ${brandName} (${location}).`,
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
          name: `Privacy Policy — ${brandName}`,
          description: `Customer privacy and personal data protection policy for ${brandName}.`,
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
                name: "Privacy Policy",
                item: CANONICAL_URL,
              },
            ],
          },
        }),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      currentPolicy="privacy"
      title="Privacy Policy"
      subtitle="How ALPAZA respects, safeguards, and handles your personal data across our website and direct shopping channels in India."
      lastUpdated="November 2026"
    >
      {/* Key Highlights Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl border border-border/80 bg-secondary/30">
        <div className="flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Zero Data Selling
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              We never sell, rent, or trade your personal details with third-party brokers.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Lock className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Payment Security
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Payment data is handled by regulated Indian gateways and UPI channels.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Eye className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground">
              Full Transparency
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              You retain the right to review, update, or request deletion of your information.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          1. Introduction &amp; Applicability
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          This Privacy Policy applies to the official website of{" "}
          <strong>{brandName}</strong> (accessible at{" "}
          <a href={siteUrl} className="underline hover:text-foreground">
            {siteUrl}
          </a>
          ), operated by{" "}
          <PlaceholderBadge
            field="LEGAL_BUSINESS_NAME"
            suggested="ALPAZA Wear / Registered Entity Name"
          />
          , based in {location} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). It
          covers information collected through our website, direct WhatsApp order concierge,
          Instagram direct messaging ({instagramHandle}), telephone interactions, and order
          fulfillment procedures.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We operate in compliance with applicable Indian digital privacy frameworks, including the{" "}
          <strong>Information Technology Act, 2000</strong>, the Information Technology (Reasonable
          Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
          and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>. By using
          our website or interacting with our order channels, you consent to the practices
          described herein.
        </p>
      </section>

      {/* Section 2: Data We Collect */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          2. Information We Collect
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To provide personal sizing consultations, process orders, and ensure reliable doorstep
          delivery across India, we collect only the necessary information:
        </p>
        <div className="space-y-3 pl-2">
          <div className="border-l-2 border-foreground/30 pl-4 py-1">
            <h3 className="text-sm font-semibold text-foreground">
              A. Identity &amp; Contact Details
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">
              Your full name, mobile/WhatsApp telephone number, complete shipping address (including
              street, landmark, city, state, and PIN code), and email address (when provided for
              invoicing or correspondence).
            </p>
          </div>
          <div className="border-l-2 border-foreground/30 pl-4 py-1">
            <h3 className="text-sm font-semibold text-foreground">
              B. Order &amp; Fit Preferences
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">
              Specific products selected (e.g., Signature Oversized Tees, Combos), chosen sizes,
              garment measurements discussed with our team, and notes for size exchange or custom
              delivery requests.
            </p>
          </div>
          <div className="border-l-2 border-foreground/30 pl-4 py-1">
            <h3 className="text-sm font-semibold text-foreground">
              C. Transaction &amp; Payment Records
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">
              Payment reference identifiers, UPI transaction IDs, and payment confirmation
              screenshots required to verify direct orders. <em>Important:</em> ALPAZA does{" "}
              <strong>not</strong> collect or store raw debit/credit card CVVs, PINs, or netbanking
              passwords.
            </p>
          </div>
          <div className="border-l-2 border-foreground/30 pl-4 py-1">
            <h3 className="text-sm font-semibold text-foreground">
              D. Technical &amp; Device Information
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">
              Aggregated technical metrics such as device type, browser version, Internet Protocol
              (IP) address, referring source, and on-site engagement collected via privacy-conscious
              analytics tools (Google Tag Manager and Meta Pixel).
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How We Use Data */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Order Processing &amp; Logistics:</strong> Confirming orders, generating
            invoices, packaging shipments, and coordinating pickup and delivery with our vetted
            Indian courier partners.
          </li>
          <li>
            <strong>Customer Care &amp; Sizing:</strong> Providing human assistance on WhatsApp and
            Instagram DM to answer fit questions, coordinate size exchanges, and update delivery
            milestones.
          </li>
          <li>
            <strong>Size Exchanges &amp; Reverse Pickups:</strong> Facilitating complimentary size
            exchanges and coordinating doorstep returns.
          </li>
          <li>
            <strong>Security &amp; Fraud Prevention:</strong> Validating transaction authenticity
            and protecting against unauthorized or fraudulent orders.
          </li>
          <li>
            <strong>Statutory Compliance:</strong> Maintaining tax, GST, and accounting records in
            accordance with Indian commercial statutes.
          </li>
        </ul>
      </section>

      {/* Section 4: Cookies & Tracking */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          4. Cookies &amp; Tracking Technologies
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Our website utilizes minimal cookies and lightweight scripts to provide a fast, secure,
          and smooth browsing experience:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Essential Cookies:</strong> Required for fundamental website routing, page
            rendering, and theme consistency.
          </li>
          <li>
            <strong>Analytics Tools:</strong> Google Tag Manager (GTM-NTB299NR) is deployed to
            understand aggregated browsing patterns and optimize loading speeds.
          </li>
          <li>
            <strong>Marketing Pixels:</strong> Meta Pixel (1060932950017280) measures advertising
            effectiveness and provides aggregated performance insights without exposing your
            individual personal identity.
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground">
          You may disable or clear cookies at any time via your browser settings (Chrome, Safari,
          Firefox, Edge). Doing so will not restrict your ability to browse our collection or place
          orders via our direct WhatsApp/Instagram concierge.
        </p>
      </section>

      {/* Section 5: Data Sharing */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          5. Third-Party Disclosures &amp; Partners
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We share customer data strictly on a need-to-know basis to fulfill orders:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>
            <strong>Courier &amp; Logistics Partners:</strong> Delivery carriers (e.g. Delhivery,
            Blue Dart, Shiprocket, India Post, or similar certified logistics providers) receive
            your name, shipping address, and phone number solely to deliver your parcel and send SMS
            out-for-delivery notifications.
          </li>
          <li>
            <strong>Communication Infrastructure:</strong> WhatsApp (Meta Platforms) and Instagram
            are used to communicate with you when you initiate contact on those platforms.
          </li>
          <li>
            <strong>Marketplace Channels:</strong> When purchasing through authorized third-party
            channels such as Flipkart, transactions are governed by their respective privacy
            policies alongside ours.
          </li>
          <li>
            <strong>Legal Authorities:</strong> We disclose information only when strictly mandated
            by Indian law, court summons, or regulatory authorities.
          </li>
        </ul>
      </section>

      {/* Section 6: Security & Retention */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          6. Data Security &amp; Retention
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We maintain physical, electronic, and managerial procedures to safeguard customer details:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>All web traffic to {siteUrl} is encrypted using TLS / HTTPS standards.</li>
          <li>Access to order records is restricted to authorized studio personnel only.</li>
          <li>
            Customer information is retained only as long as necessary to fulfill orders, process
            returns/exchanges within the 3-day window, and comply with mandatory tax/audit
            regulations under Indian law.
          </li>
        </ul>
      </section>

      {/* Section 7: User Rights */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground">
          7. Your Rights Under Indian Law
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          As a consumer, you have the right under Indian law to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>Access and review the personal information we hold about you.</li>
          <li>Request correction or rectification of incomplete or inaccurate details.</li>
          <li>Withdraw consent for future marketing communications at any time.</li>
          <li>Request deletion of your non-statutory personal data from our active records.</li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground">
          To exercise any of these rights, contact our team via WhatsApp at {displayPhoneNumber} or
          reach our Grievance Officer.
        </p>
      </section>

      {/* Section 8: Grievance Redressal */}
      <section className="space-y-4 rounded-xl border border-border/80 bg-secondary/20 p-6">
        <h2 className="font-display text-2xl text-foreground flex items-center gap-2">
          <Database className="h-5 w-5 text-foreground/80" />
          <span>8. Grievance Officer &amp; Statutory Redressal</span>
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          In accordance with the Information Technology Act, 2000 and the Consumer Protection
          (E-Commerce) Rules, 2020, the details of our designated Grievance Officer are provided
          below:
        </p>
        <div className="mt-3 space-y-1.5 text-xs font-mono text-foreground/90 bg-white/70 p-4 rounded-lg border border-border/60">
          <p>
            <strong>Designation:</strong> Grievance Redressal Officer, {brandName}
          </p>
          <p>
            <strong>Name:</strong>{" "}
            <PlaceholderBadge
              field="GRIEVANCE_OFFICER_NAME"
              suggested="Ravi Gautam / Nominated Officer"
            />
          </p>
          <p>
            <strong>Official Email:</strong>{" "}
            <PlaceholderBadge
              field="GRIEVANCE_OFFICER_EMAIL"
              suggested="grievance@alpaza.in / support@alpaza.in"
            />
          </p>
          <p>
            <strong>Support Phone:</strong> {displayPhoneNumber} ({phoneNumber})
          </p>
          <p>
            <strong>Registered Location:</strong>{" "}
            <PlaceholderBadge
              field="FULL_POSTAL_ADDRESS"
              suggested="Registered Postal Address, Meerut, Uttar Pradesh, PIN - 250001, India"
            />
          </p>
          <p>
            <strong>Working Hours:</strong> Monday – Saturday, 10:00 AM to 6:00 PM IST
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Complaints will be acknowledged within 48 hours and resolved within 30 days as prescribed
          under Indian consumer protection regulations.
        </p>
      </section>

      {/* Section 9: Updates */}
      <section className="space-y-4">
        <h2 className="font-display text-2xl text-foreground">
          9. Amendments to this Policy
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We reserve the right to revise this Privacy Policy periodically to reflect legal,
          operational, or technological updates. Any modifications will be posted directly on this
          page with an updated effective date. Continued use of our website constitutes your
          acknowledgment of the updated terms.
        </p>
      </section>
    </PolicyLayout>
  );
}

