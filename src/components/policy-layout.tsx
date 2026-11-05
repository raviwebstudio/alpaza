import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Instagram,
  ShieldCheck,
  FileText,
  RefreshCw,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { appConfig } from "@/lib/config";

const { brandName, instagramUrl, whatsappUrl, displayPhoneNumber } = appConfig;

export type PolicyType = "privacy" | "terms" | "exchange" | "return";

interface PolicyLayoutProps {
  currentPolicy: PolicyType;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: ReactNode;
}

const POLICY_LINKS = [
  {
    id: "privacy" as PolicyType,
    label: "Privacy Policy",
    to: "/privacy-policy",
    icon: ShieldCheck,
  },
  {
    id: "terms" as PolicyType,
    label: "Terms & Conditions",
    to: "/terms-and-conditions",
    icon: FileText,
  },
  {
    id: "exchange" as PolicyType,
    label: "Exchange Policy",
    to: "/exchange-policy",
    icon: RefreshCw,
  },
  {
    id: "return" as PolicyType,
    label: "Return Policy",
    to: "/return-policy",
    icon: RotateCcw,
  },
];

export function PolicyLayout({
  currentPolicy,
  title,
  subtitle,
  lastUpdated = "November 2026",
  children,
}: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top micro-bar */}
      <div
        role="region"
        aria-label="Policy notice"
        className="bg-ink text-primary-foreground"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] font-medium tracking-[0.16em] sm:px-6 sm:text-xs lg:px-10">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span className="uppercase">
              {brandName} · Customer Care &amp; Store Policies
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 transition-opacity hover:opacity-80 sm:flex"
          >
            <MessageCircle className="h-3 w-3" />
            <span>Support: {displayPhoneNumber}</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            aria-label={`${brandName} — return to home`}
            className="flex items-center"
          >
            <img
              src={logo}
              alt={`${brandName} logo`}
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Store</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ALPAZA on WhatsApp"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium tracking-wider text-background transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Help</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Breadcrumb & Hero */}
        <section className="border-b border-border/60 bg-secondary/40 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-foreground/80">Policies</span>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">
                  <span className="text-foreground">{title}</span>
                </li>
              </ol>
            </nav>

            <p className="eyebrow mb-2">Legal &amp; Customer Information</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
              {title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] font-mono text-muted-foreground/90">
              <span>Jurisdiction: India (PAN-India)</span>
              <span>•</span>
              <span>Effective Date: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Policy Switcher Bar */}
        <div className="border-b border-border/60 bg-background/60 sticky top-[57px] z-30 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
              {POLICY_LINKS.map((link) => {
                const isActive = link.id === currentPolicy;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-foreground text-background shadow-sm"
                        : "border border-border/80 bg-background text-foreground/80 hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Policy Body */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          <article className="prose-alpaza space-y-10">{children}</article>

          {/* Need Assistance Card */}
          <section
            aria-labelledby="support-card-title"
            className="mt-16 rounded-2xl border border-border/80 bg-secondary/50 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="eyebrow mb-1">Direct Assistance</p>
                <h2
                  id="support-card-title"
                  className="font-display text-2xl sm:text-3xl text-foreground"
                >
                  Have questions about this policy?
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm max-w-md">
                  Reach out directly to the studio team. We handle all sizing,
                  exchanges, returns, and order queries with personal human care
                  within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-col gap-2.5 shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium tracking-wider text-background transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram @alpaza.wear</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/30 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="font-display text-xl tracking-tight text-foreground">
                {brandName}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Curated premium oversized essentials · Made for the Move
              </p>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              {POLICY_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={link.to}
                  className={`hover:text-foreground transition-colors ${
                    link.id === currentPolicy
                      ? "text-foreground font-medium underline underline-offset-4"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span>© 2026 {brandName} · ALL RIGHTS RESERVED</span>
            <span>MADE IN INDIA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Clean Badge Component for Placeholders requiring customer approval
 */
export function PlaceholderBadge({
  field,
  suggested = "",
}: {
  field: string;
  suggested?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2 py-0.5 font-mono text-[11px] text-amber-900 border border-amber-500/25"
      title={`Business details pending approval: ${field}`}
    >
      <span className="font-semibold">[{field}]</span>
      {suggested ? <span className="text-amber-800/80">({suggested})</span> : null}
    </span>
  );
}

