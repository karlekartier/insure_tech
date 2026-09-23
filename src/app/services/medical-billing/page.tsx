import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Zap,
  Lock,
  Clock,
  PhoneCall,
  Activity,
  FileText,
  BadgeCheck,
  DollarSign,
  HeartPulse,
} from "lucide-react";

export const metadata = {
  title: "Medical Billing Services | Insure Tech Services Pvt Ltd",
  description:
    "End-to-end medical billing and coding services for healthcare providers. Compliant claims preparation, accurate charge entry, and fast revenue realization.",
};

export default function MedicalBillingPage() {
  const billingCapabilities = [
    {
      title: "Patient Demographic & Eligibility Verification",
      desc: "Comprehensive review of patient insurance coverage, co-pays, deductibles, and prior authorizations before appointments to avoid upstream rejections.",
      icon: UsersIcon,
    },
    {
      title: "ICD-10 & CPT Medical Coding",
      desc: "Certified medical coders mapping diagnostic records and physician notes to current ICD-10-CM, CPT, and HCPCS Level II code sets.",
      icon: FileCheck,
    },
    {
      title: "Charge Capture & Claims Scrubbing",
      desc: "Rigorous pre-submission validation checking for fee schedules, modifier usage, bundled codes, and payer-specific billing rules.",
      icon: Activity,
    },
    {
      title: "Electronic Claim Submission (EDI 837)",
      desc: "Fast, secure batch transmission of electronic medical claims to commercial and government clearinghouses with real-time delivery acknowledgments.",
      icon: Zap,
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "Accurate logging of electronic remittance advices (ERA / 835) and paper explanation of benefits (EOB), balancing contractual write-offs and patient balances.",
      icon: DollarSign,
    },
    {
      title: "Compliance & Audit Readiness",
      desc: "Strict adherence to HIPAA Title II privacy regulations, ISO data security safeguards, and systematic operational audit trails.",
      icon: ShieldCheck,
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Encounter & Demographics", desc: "Patient data ingestion and eligibility confirmation." },
    { step: "02", title: "Medical Coding", desc: "ICD-10 & CPT coding by certified specialists." },
    { step: "03", title: "Automated Scrubbing", desc: "Validation against payer-specific claim edit rules." },
    { step: "04", title: "Clearinghouse Submission", desc: "Direct electronic EDI 837 transmission." },
    { step: "05", title: "ERA / EOB Posting", desc: "Remittance reconciliation and patient responsibility split." },
    { step: "06", title: "Performance Reporting", desc: "Real-time visibility into collections, days in AR, and clean-claim rates." },
  ];

  function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return <HeartPulse {...props} />;
  }

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15">
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span>Healthcare Administrative &amp; BPO Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Medical Billing &amp; Coding Services
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            High-accuracy clinical revenue operations for physicians, clinics, and hospital systems. We minimize claim rejection rates and accelerate reimbursement cycles.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Request Billing Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9150005721"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Call +91 91500 05721</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES GRID ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Comprehensive Billing Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
              Our Medical Billing Capabilities
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From initial charge entry to clearinghouse transmission and payment posting, every touchpoint is audited for quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billingCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="insuretec-card p-7 flex flex-col justify-between group hover:border-orange-500/40 bg-white border border-slate-200 shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#19375c]">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW STEPS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Structured Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
              The Medical Billing Lifecycle
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              How we turn patient encounters into clean claims and timely disbursements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((ws) => (
              <div
                key={ws.step}
                className="insuretec-card p-6 bg-white border border-slate-200 shadow-sm"
              >
                <div className="text-2xl font-extrabold text-orange-600 font-mono mb-2">
                  {ws.step}
                </div>
                <h3 className="font-bold text-base text-[#19375c]">
                  {ws.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HIPAA & SECURITY STATEMENT ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#19375c] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300">
                <Lock className="w-3.5 h-3.5" />
                <span>Confidentiality &amp; Compliance Guaranteed</span>
              </div>
              <h3 className="text-2xl font-bold">
                HIPAA Aligned &bull; 256-Bit Encrypted Data Flows
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                We handle Protected Health Information (PHI) under strict administrative, physical, and technical safeguards. All personnel undergo continuous healthcare privacy training.
              </p>
            </div>

            <Link href="/contact" className="btn-orange text-sm py-3 px-6 whitespace-nowrap shadow-lg">
              <span>Discuss Your Practice</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
