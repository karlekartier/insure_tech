import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroShieldAnimation } from "@/components/HeroShieldAnimation";
import {
  ShieldCheck,
  FileCode2,
  FileText,
  Activity,
  ArrowRight,
  CheckCircle2,
  Zap,
  BarChart3,
  Lock,
  ChevronRight,
  Layers,
  Sparkles,
  Award
} from "lucide-react";

export const metadata = {
  title: "Insure Tech Services Pvt Ltd | Accuracy. Efficiency. Reliability.",
  description:
    "Next-generation digital ecosystem for healthcare Medical Billing & RCM, enterprise XML structured data engineering, and APDF document automation.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden tech-grid">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: The Hook & Value Prop (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* High-tech pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-[0_0_15px_rgba(115,203,113,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Tech-Forward Reliability</span>
              <span className="opacity-40">•</span>
              <span className="font-mono text-[11px] text-emerald-300">ISO 27001 &amp; HIPAA ALIGNED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12]">
              Next-Gen Ecosystem for <br />
              <span className="text-gradient-emerald">Medical Billing</span>,{" "}
              <span className="text-gradient-cyber">XML</span> &amp;{" "}
              <span className="text-gradient-emerald">APDF</span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl sm:text-2xl font-semibold text-emerald-500/90 tracking-wide">
              Accuracy. Efficiency. Reliability.
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Insure Tech Services Pvt Ltd simplifies high-stakes healthcare revenue cycles and complex structured data operations. We combine specialized domain specialists, automated validation engines, and scalable workflows to eliminate errors and accelerate cash flow.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-[#4d915d] to-emerald-500 hover:brightness-110 transition-all shadow-[0_4px_25px_rgba(77,145,93,0.4)] hover:shadow-[0_6px_30px_rgba(115,203,113,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Request Service Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/medical-billing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-[var(--text-primary)] glass-panel hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
              >
                <span>Explore RCM Flow</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>
            </div>

            {/* Mini Trust Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>99.8% Claims Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>24-48h Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Data Leaks Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech SVG Shield Animation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <HeroShieldAnimation />
          </div>
        </div>
      </section>

      {/* ================= LIVE METRICS & AUDIT STATS ================= */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono">
              99.8%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Clean Claim Accuracy
            </div>
            <div className="text-xs text-[var(--text-muted)]">Verified against payer rules</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono">
              10M+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Data Files Processed
            </div>
            <div className="text-xs text-[var(--text-muted)]">XML, APDF, &amp; EDI records</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono">
              &lt; 24h
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Posting &amp; Turnaround
            </div>
            <div className="text-xs text-[var(--text-muted)]">Rapid payment reconciliation</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 font-mono">
              100%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">
              Security Compliance
            </div>
            <div className="text-xs text-[var(--text-muted)]">HIPAA &amp; ISO 27001 standard</div>
          </div>
        </div>
      </section>

      {/* ================= THREE CORE SPECIALTIES SHOWCASE ================= */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
            <Layers className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Engineered for High-Stakes Operations
          </h2>
          <p className="text-base text-[var(--text-secondary)]">
            Explore our three core verticals tailored for healthcare institutions, insurance carriers, and technology organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Medical Billing & RCM */}
          <div className="glass-panel glass-panel-hover p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-6">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/image_4.jpg"
                  alt="Medical Billing and RCM Consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b12] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-emerald-600/90 px-2.5 py-1 rounded-md">
                  Healthcare Revenue Cycle
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    Medical Billing &amp; RCM
                  </h3>
                  <Activity className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Complete revenue cycle optimization from patient demographic validation to claims submission, payment posting, denial resolution, and AR recovery.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Insurance eligibility verification &amp; pre-authorization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Certified ICD-10, CPT, and HCPCS charge entry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Proactive denial categorization and appeals pipeline</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/medical-billing"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Full Medical Billing Suite</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: XML & Data Services */}
          <div className="glass-panel glass-panel-hover p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-6">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-[#030e09] flex items-center justify-center border border-emerald-500/20">
                <div className="absolute inset-0 tech-grid-dense opacity-40" />
                <div className="text-center p-4 relative z-10">
                  <FileCode2 className="w-12 h-12 text-emerald-400 mx-auto mb-2 animate-pulse" />
                  <span className="font-mono text-xs text-emerald-300 block">XSD 1.1 • XSLT 3.0</span>
                  <span className="text-[10px] text-slate-400">Data Normalization Engine</span>
                </div>
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-emerald-600/90 px-2.5 py-1 rounded-md">
                  Structured Data Engine
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    XML &amp; Data Services
                  </h3>
                  <FileCode2 className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  High-volume data conversion, custom schema creation, field mapping, XSD validation, and seamless integration between disparate business databases and APIs.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Excel, CSV, JSON, and SQL database conversion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Automated schema (XSD / DTD) validation gates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>High-throughput batch transformations &amp; REST APIs</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/xml-services"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Explore XML &amp; Data Integration</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: APDF & Document Processing */}
          <div className="glass-panel glass-panel-hover p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-6">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/image_2.jpg"
                  alt="APDF Document Processing and Verification"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b12] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-emerald-600/90 px-2.5 py-1 rounded-md">
                  Digital Document Automation
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    APDF &amp; Document Processing
                  </h3>
                  <FileText className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Turn physical paperwork, unstructured PDFs, invoices, and records into indexed, searchable, and machine-readable APDF formats with high OCR fidelity.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Optical character recognition (OCR) &amp; deskewing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Automated document classification &amp; indexing tags</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Enterprise archival and business platform integrations</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/apdf-services"
                className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Discover APDF Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT TRUST & ENTERPRISE ECOSYSTEM ================= */}
      <section className="py-16 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-semibold tracking-wider text-[var(--text-muted)]">
              Trusted by Healthcare Systems, Insurance Carriers &amp; Data Leaders
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-80 hover:opacity-100 transition-opacity">
            {/* ICICI Lombard extracted client asset */}
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                <Image src="/images/image_7.jpg" alt="ICICI Lombard Insurance" fill className="object-cover" />
              </div>
              <span className="text-base font-bold text-[var(--text-primary)]">ICICI Lombard</span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-[var(--text-secondary)]">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              <span>Commercial Health Alliances</span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-[var(--text-secondary)]">
              <Award className="w-6 h-6 text-emerald-500" />
              <span>National Clearinghouse EDI</span>
            </div>

            <div className="flex items-center gap-2 font-semibold text-[var(--text-secondary)]">
              <Lock className="w-6 h-6 text-emerald-500" />
              <span>EHR / EMR Interoperability</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH-CONVERTING CTA BANNER ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-br from-[#061b12] via-[#0a291b] to-[#04100a] text-white border border-emerald-500/30 shadow-2xl">
          {/* Ambient vector rings */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accelerate Your Growth</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Upgrade to <br />
              <span className="text-gradient-emerald">Precision Operations?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Whether you need to recover aging medical receivables, convert legacy files to structured XML, or automate paper document extraction, our team is equipped to execute seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-[#73cb71] hover:bg-[#88dc86] transition-all shadow-[0_0_25px_rgba(115,203,113,0.5)]"
              >
                <span>Request Custom Service Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/medical-billing#workflow"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white border border-emerald-500/40 hover:bg-emerald-500/10 transition-colors"
              >
                <span>Inspect Technical SLAs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
