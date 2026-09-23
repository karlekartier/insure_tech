import React from "react";
import Link from "next/link";
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Clock,
  PhoneCall,
  DollarSign,
  BarChart3,
  Search,
  FileCheck2,
  Layers,
  ArrowUpRight,
  FileSpreadsheet,
} from "lucide-react";

export const metadata = {
  title: "Revenue Cycle Management (RCM) Services | Insure Tech Services",
  description:
    "End-to-end healthcare Revenue Cycle Management (RCM). Accelerate cash flow, slash AR days, resolve denials systematically, and boost practice profitability.",
};

export default function RCMPage() {
  const rcmCapabilities = [
    {
      title: "Front-End Registration & Eligibility Verification",
      desc: "Comprehensive pre-encounter checks verifying active policy coverage, copays, deductibles, and prior-authorization prerequisites to halt rejections upstream.",
      icon: Search,
      tag: "Front-End",
    },
    {
      title: "Charge Capture & Claim Preparation",
      desc: "Accurate translation of clinical services into billable charges with complete documentation mapping, charge audits, and zero-leakage capture.",
      icon: FileSpreadsheet,
      tag: "Mid-Cycle",
    },
    {
      title: "Denial Management & Root-Cause Remediation",
      desc: "Systematic classification of CARC/RARC denial codes, automated appeal package generation, and clinical documentation resubmissions for prompt overturning.",
      icon: AlertTriangle,
      tag: "Resolution",
    },
    {
      title: "Accounts Receivable (AR) Follow-up & Aging Analysis",
      desc: "Aggressive, structured tracking of outstanding balances across 30, 60, 90, and 120+ day buckets with dedicated payer follow-up specialists.",
      icon: TrendingUp,
      tag: "Collections",
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "Precision matching of Electronic Remittance Advices (ERA 835) and paper EOBs against submitted claims, reconciling contractual write-offs and patient balances.",
      icon: DollarSign,
      tag: "Accounting",
    },
    {
      title: "RCM Analytics & Payer KPI Reporting",
      desc: "Transparent dashboard visibility into net collection ratios, days in AR, first-pass clean claim rates, and insurer-specific payment cycle trends.",
      icon: BarChart3,
      tag: "Executive Intel",
    },
  ];

  const lifecycleStages = [
    {
      step: "01",
      name: "Patient Access",
      desc: "Demographic capture, insurance discovery, benefit verification, and pre-authorizations.",
    },
    {
      step: "02",
      name: "Charge & Coding Audit",
      desc: "Clinical documentation validation, CPT/ICD-10 cross-referencing, and charge entry.",
    },
    {
      step: "03",
      name: "Clean Claim Scrubbing",
      desc: "Clearinghouse edit validation and real-time electronic EDI 837 batch transmission.",
    },
    {
      step: "04",
      name: "Payer Adjudication",
      desc: "Claim status inquiry tracking and continuous adjudication surveillance.",
    },
    {
      step: "05",
      name: "ERA & Payment Posting",
      desc: "Electronic funds transfer (EFT) reconciliation and patient responsibility splits.",
    },
    {
      step: "06",
      name: "Denial Appeals & AR Liquidation",
      desc: "Targeted denial resolution, appeal documentation, and aged AR recovery.",
    },
  ];

  const kpis = [
    { label: "Clean Claim Rate", value: "98.2%", detail: "First-pass acceptance rate" },
    { label: "AR Days Reduction", value: "< 32 Days", detail: "Industry average is 45-55 days" },
    { label: "Denial Reversal Rate", value: "84.5%", detail: "Appeals recovered successfully" },
    { label: "Average Collections Lift", value: "+14%", detail: "Within 90 days of onboarding" },
  ];

  const faqs = [
    {
      q: "How does Insure Tech handle denial management?",
      a: "Every denial is categorized by CARC/RARC reason codes within 24 hours of receipt. Our specialists investigate root causes (coding gaps, medical necessity, missing documentation, or timely filing), prepare comprehensive appeal packages with clinical records, and submit corrected claims directly to payers.",
    },
    {
      q: "Can your team work directly inside our existing EHR/PM software?",
      a: "Yes. Our RCM team is proficient across leading healthcare platforms including Epic, Cerner, AthenaHealth, Kareo, NextGen, eClinicalWorks, AdvancedMD, and Allscripts. We operate securely via role-based credentials within your native environment.",
    },
    {
      q: "What metrics and reports do practice leaders receive?",
      a: "We provide executive dashboards covering key RCM health indicators: Clean Claim Submission Rate, Net and Gross Collection Ratios, Days in AR, Aging Buckets (30/60/90/120+), Top Denial Reasons by Payer, and Provider-level Productivity Reports.",
    },
    {
      q: "How do you ensure HIPAA compliance and data security?",
      a: "All operations strictly adhere to HIPAA Title II administrative, physical, and technical safeguards. We utilize encrypted data pipelines (AES-256 in transit and at rest), secure dedicated VPN tunnels, two-factor authentication, and signed Business Associate Agreements (BAAs).",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            <span>Healthcare Financial Lifecycle Management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Revenue Cycle Management (RCM)
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Eliminate revenue leakage, accelerate cash flow, and reduce days in Accounts Receivable. We manage the entire financial lifecycle from patient registration to final claim settlement.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Schedule Free RCM Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9150005721"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Talk to RCM Specialist</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= KPI STATS BAR ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#19375c] tracking-tight">
                {kpi.value}
              </div>
              <div className="font-bold text-slate-800 text-sm mt-1">{kpi.label}</div>
              <div className="text-xs text-slate-700 mt-1">{kpi.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAPABILITIES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100">
            End-to-End Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
            Comprehensive RCM Support Solutions
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            From upstream patient intake to downstream denial adjudication, our specialized RCM teams apply rigorous workflows to protect practice revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rcmCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#19375c] mb-2">{cap.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{cap.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-cyan-800 group">
                  <span>Explore workflow</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 6-STEP RCM LIFECYCLE ================= */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-200">
              Structured Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
              The 6-Phase Revenue Realization Cycle
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Every patient encounter follows a disciplined, transparent pipeline that guarantees accountability, audit readiness, and maximum cash collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleStages.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="text-4xl font-black text-cyan-800/20 mb-2">{phase.step}</div>
                <h3 className="text-base font-bold text-[#19375c] mb-2">{phase.name}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DENIAL MANAGEMENT DEEP DIVE ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#19375c] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Zero-Tolerance Denial Framework</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Transforming Payer Denials into Realized Cash
            </h2>

            <p className="text-slate-200 text-base leading-relaxed">
              Industry studies show that over 60% of denied claims are never resubmitted, leaving up to 10% of revenue uncollected. Insure Tech’s dedicated Denial &amp; Appeals Unit overturns denials with forensic rigor:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "24-hour CARC/RARC code triage",
                "Automated appeal documentation",
                "Medical necessity record compilation",
                "Timely filing tracking & escalation",
                "Payer policy discrepancy dispute",
                "Underpayment recovery audits",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-orange text-sm py-3 px-8 inline-flex items-center gap-2">
                <span>Request Denial Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EHR / PM INTEGRATIONS ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Systems &amp; Platforms We Integrate With
          </div>
          <h3 className="text-2xl font-bold text-[#19375c]">
            Seamless Compatibility with Your Existing Healthcare Stack
          </h3>
          <p className="text-slate-700 text-sm max-w-2xl mx-auto">
            Our certified billers work remotely within your electronic health records and practice management software without disrupting your clinic staff.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Epic Systems",
              "Cerner / Oracle Health",
              "AthenaHealth",
              "eClinicalWorks",
              "Kareo / Tebra",
              "NextGen Healthcare",
              "AdvancedMD",
              "Allscripts / Veradigm",
              "Availity Clearinghouse",
              "Change Healthcare",
            ].map((sys, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-semibold shadow-xs"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-100">
            Common Questions
          </div>
          <h2 className="text-3xl font-extrabold text-[#19375c]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2"
            >
              <h3 className="text-base font-bold text-[#19375c]">{faq.q}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-gradient-to-r from-[#19375c] to-[#0f2136] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Accelerate Your Healthcare Practice Revenue?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Contact Insure Tech Services PVT LTD today for a confidential evaluation of your current aging AR, denial rate, and clean claim metrics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-orange text-sm py-3.5 px-8">
              <span>Book an RCM Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
