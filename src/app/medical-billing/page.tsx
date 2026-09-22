import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClaimToPaymentFlow } from "@/components/ClaimToPaymentFlow";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  RotateCcw,
  Clock,
  BarChart3,
  Lock,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Activity,
  Layers,
  Award
} from "lucide-react";

export const metadata = {
  title: "Medical Billing & Coding Services | Healthcare Revenue-Cycle Support",
  description:
    "Insure Tech Services PVT LTD provides medical billing, certified medical coding, claim preparation, payment posting, denial follow-up, and revenue-cycle reporting.",
  keywords: [
    "medical billing services",
    "medical coding services",
    "healthcare billing support",
    "claims processing",
    "denial management",
    "revenue-cycle management",
    "HIPAA compliant medical billing",
  ],
};

const FAQ_ITEMS = [
  {
    question: "Do you support all medical specialties?",
    answer:
      "Yes. Our billing and coding teams support a broad spectrum of medical specialties—including Cardiology, Orthopedics, Family Practice, Internal Medicine, Pediatrics, Radiology, Oncology, Urgent Care, and Behavioral Health. Specialty assignment aligns directly with certified coders experienced in relevant guidelines.",
    category: "Specialties",
  },
  {
    question: "Do you provide both billing and coding services?",
    answer:
      "Yes. Engagements can be configured for end-to-end full revenue cycle management (both billing and certified coding), or modularly for specific components such as denial management, charge entry, or AR recovery.",
    category: "Service Scope",
  },
  {
    question: "How is patient health information (PHI) protected?",
    answer:
      "Patient data is protected through role-based access controls, encrypted VPN/SSL data transfer, continuous audit logs, BAA agreements, and strict compliance with HIPAA and healthcare privacy regulations. No unencrypted local files are stored.",
    category: "Security & HIPAA",
  },
  {
    question: "Can you take over and resolve our backlog of denied claims?",
    answer:
      "Absolutely. Our denial management specialists systematically classify denied claims by CARC/RARC codes, correct demographic or coding errors, assemble robust appeal documentation packets, and resubmit them within 48 hours to overturn denials and capture lost revenue.",
    category: "Denial Management",
  },
  {
    question: "Do you conduct regular coding audits?",
    answer:
      "Yes. We conduct periodic sample-based coding audits reviewing documentation completeness, correct modifier assignment, and medical necessity to ensure provider compliance and prevent both downcoding and upcoding risks.",
    category: "Quality Assurance",
  },
  {
    question: "Can reports and executive dashboards be customized?",
    answer:
      "Yes. We provide customizable weekly and monthly analytics reports covering clean claim rates, denial trends, days in accounts receivable (AR aging buckets), cash collection ratios, and provider productivity metrics.",
    category: "Reporting & BI",
  },
  {
    question: "Are clinical decisions included in billing support?",
    answer:
      "No. Our services provide administrative, coding, and billing support based strictly on authorized clinical records and documentation. Clinical judgment and patient care decisions remain entirely with licensed healthcare practitioners.",
    category: "Regulatory Boundaries",
  },
];

const SUB_SERVICES = [
  {
    title: "Patient Demographic Entry & Registration",
    desc: "Fast, accurate demographic capture from electronic intake or scanned records to ensure clean claim initiation.",
    icon: Stethoscope,
  },
  {
    title: "Insurance Eligibility & Benefits Verification",
    desc: "Proactive verification of coverage status, deductible limits, copays, coinsurance, and prior authorization needs before treatment.",
    icon: ShieldCheck,
  },
  {
    title: "Charge Capture & Certified Coding",
    desc: "Certified AAPC/AHIMA coders assign appropriate ICD-10, CPT, and HCPCS codes with precision modifier cross-referencing.",
    icon: FileCheck,
  },
  {
    title: "Electronic Claims Scrubbing & Submission",
    desc: "Rigorous pre-submission validation catching payer-specific NCCI edits, submitting daily via clearinghouses (EDI 837P / 837I).",
    icon: Activity,
  },
  {
    title: "Payment Posting & Reconciliation",
    desc: "Automated ERA (835) auto-posting and manual EOB posting within 24 hours, reconciling deposits against bank statements.",
    icon: CheckCircle2,
  },
  {
    title: "Denial Categorization & Rapid Appeals",
    desc: "Root-cause denial analysis, medical records gathering, and aggressive overturn follow-ups to maximize revenue recovery.",
    icon: RotateCcw,
  },
  {
    title: "Accounts Receivable (AR) Follow-up",
    desc: "Aging bucket monitoring (30, 60, 90, 120+ days) with payer representative escalation to minimize uncollected balances.",
    icon: Clock,
  },
  {
    title: "Patient Inquiries & Statement Support",
    desc: "Courteous, professional balance explanations, statement generation, and payment plan administration for patients.",
    icon: HeartPulse,
  },
  {
    title: "Revenue Cycle Analytics & Executive BI",
    desc: "Real-time visibility into collection ratios, denial benchmarks, provider productivity, and financial forecasting.",
    icon: BarChart3,
  },
];

export default function MedicalBillingPage() {
  return (
    <div className="relative overflow-hidden tech-grid">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <Activity className="w-3.5 h-3.5" />
              <span>Healthcare Revenue Cycle Excellence</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
              Streamlined <br />
              <span className="text-gradient-emerald">Medical Billing &amp; Coding</span> <br />
              Solutions for Providers
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              We empower healthcare providers, clinics, and hospital systems to streamline their billing operations, eliminate claim denials, accelerate reimbursement turnaround, and focus on delivering patient care.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-[#4d915d] hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all"
              >
                <span>Request Revenue Cycle Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#workflow"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--text-primary)] glass-panel hover:border-emerald-500/40 transition-colors"
              >
                <span>View Interactive Flow</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                98.2% Clean Claim Rate
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                HIPAA Certified Controls
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                24h Payment Posting SLA
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-2 shadow-2xl">
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/image_4.jpg"
                  alt="Medical Billing Consultation and Revenue Cycle"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b12] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-1">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span>STATUS: ACTIVE RCM</span>
                    <span>100% RECONCILED</span>
                  </div>
                  <div className="text-sm font-bold">AAPC Certified Coding Team</div>
                  <div className="text-xs text-slate-300">Continuous ICD-10 &amp; NCCI Compliance Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE CLAIM-TO-PAYMENT FLOW ================= */}
      <section id="workflow" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <ClaimToPaymentFlow />
      </section>

      {/* ================= SUB-SERVICES CATALOG ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Full-Spectrum Healthcare Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            End-to-End Medical Billing &amp; Coding Services
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Configurable as standalone service activities or as a unified turnkey revenue cycle department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= QUALITY MEASURES & BENCHMARKS ================= */}
      <section className="py-16 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Operational Metrics
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Quality Measures &amp; Operational Benchmarks
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              We manage revenue cycles through transparent, quantifiable performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-2">
              <span className="text-3xl font-extrabold text-emerald-500 font-mono">98.2%</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Clean Claim Rate</h4>
              <p className="text-xs text-[var(--text-muted)]">Submissions accepted on first pass without re-billing</p>
            </div>
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-2">
              <span className="text-3xl font-extrabold text-emerald-500 font-mono">&lt; 32 Days</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Days in AR</h4>
              <p className="text-xs text-[var(--text-muted)]">Accelerated cash flow significantly below industry averages</p>
            </div>
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-2">
              <span className="text-3xl font-extrabold text-emerald-500 font-mono">87%</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Denial Overturn Rate</h4>
              <p className="text-xs text-[var(--text-muted)]">Aggressive, evidence-backed appeal resolutions</p>
            </div>
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 text-center space-y-2">
              <span className="text-3xl font-extrabold text-emerald-500 font-mono">24 Hours</span>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Payment Posting SLA</h4>
              <p className="text-xs text-[var(--text-muted)]">Fast line-item posting and real-time bank reconciliation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HEALTHCARE DATA SECURITY & COMPLIANCE ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                <Lock className="w-3.5 h-3.5" />
                <span>Confidentiality &amp; Risk Governance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Enterprise Healthcare Security &amp; Compliance
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                Healthcare information is sensitive and must be handled with uncompromised integrity. Our service workflow includes comprehensive Business Associate Agreements (BAAs), role-based system permissions, encrypted data transfers, comprehensive audit trails, regular employee privacy training, and alignment with HIPAA standards.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-[var(--text-primary)]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  HIPAA Security Rule Aligned
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Role-Based Access Control (RBAC)
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  256-Bit SSL/TLS Data In Transit
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-emerald-500/30 text-center space-y-3 w-full max-w-xs shadow-lg">
                <Award className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-base font-bold text-[var(--text-primary)]">AAPC Certified</h4>
                <p className="text-xs text-[var(--text-muted)]">
                  All medical coding is supervised by credentialed CPC/CCS professionals adhering to annual CMS updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FaqAccordion
          items={FAQ_ITEMS}
          title="Medical Billing & Coding FAQs"
          subtitle="Answers to common questions regarding specialty support, HIPAA security, denial resolution, and reporting."
        />
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061b12] to-[#0a291b] border border-emerald-500/40 text-center space-y-6 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Optimize Your Healthcare Practice Revenue?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact Insure Tech Services PVT LTD today for a confidential revenue cycle diagnostic and tailored service proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-[#73cb71] hover:bg-[#88dc86] transition-all shadow-lg"
            >
              <span>Schedule Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
