"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  ShieldAlert,
  FileSpreadsheet,
  Send,
  Building2,
  CheckCircle2,
  RotateCcw,
  BarChart3,
  ChevronRight,
  ArrowRight,
  Layers,
  Clock,
  Sparkles
} from "lucide-react";

const STAGES = [
  {
    id: 1,
    title: "1. Intake & Eligibility",
    shortName: "Intake",
    icon: UserCheck,
    tagline: "Front-end demographic entry & coverage validation",
    details:
      "Patient demographics and primary/secondary insurance information are validated in real-time. Active coverage, co-pays, deductibles, and pre-authorizations are confirmed before service delivery.",
    sla: "< 2 Hours Turnaround",
    accuracy: "99.9% Eligibility Match",
    deliverables: ["Demographic scrub", "Payer eligibility check", "Prior-authorization logs"],
  },
  {
    id: 2,
    title: "2. Charge Capture & Coding",
    shortName: "Coding",
    icon: FileSpreadsheet,
    tagline: "Certified ICD-10, CPT, and HCPCS medical coding",
    details:
      "Clinical notes and encounter documents are translated into standardized medical codes. Our certified coders ensure accurate modifier usage and medical necessity alignment to prevent downcoding.",
    sla: "24-Hour Coding SLA",
    accuracy: "98.5% First-Pass Coding",
    deliverables: ["ICD-10-CM / CPT assignment", "CCI edit scrubbing", "Superbill reconciliation"],
  },
  {
    id: 3,
    title: "3. Claim Scrubbing & Filing",
    shortName: "Submission",
    icon: Send,
    tagline: "Automated pre-submission validation & EDI submission",
    details:
      "Claims pass through our automated rule engine testing against payer-specific guidelines, NCCI edits, and formatting requirements before submission via clearinghouse 837P/837I EDI streams.",
    sla: "Daily Electronic Submissions",
    accuracy: "98.2% Clean Claim Rate",
    deliverables: ["Payer-specific edit checks", "EDI 837 batch creation", "Submission confirmation logs"],
  },
  {
    id: 4,
    title: "4. Payer Adjudication",
    shortName: "Adjudication",
    icon: Building2,
    tagline: "Clearinghouse and commercial/government payer processing",
    details:
      "Claims are ingested by commercial payers (Aetna, BCBS, UnitedHealthcare, Cigna) and government programs (Medicare/Medicaid). 277 Electronic Claim Status inquiries track live status updates.",
    sla: "Real-Time Tracking",
    accuracy: "100% Audit Traceability",
    deliverables: ["EDI 277 status reports", "Payer receipt verification", "Clearinghouse batch receipts"],
  },
  {
    id: 5,
    title: "5. Payment Posting (ERA/EOB)",
    shortName: "Posting",
    icon: CheckCircle2,
    tagline: "Electronic Remittance Advice (835) & check reconciliation",
    details:
      "Payments, contractual allowances, deductibles, co-insurances, and write-offs are posted with line-item precision into provider practice management systems within 24 hours of payer deposit.",
    sla: "< 24 Hours Posting",
    accuracy: "100% Financial Reconciliation",
    deliverables: ["ERA 835 auto-posting", "Manual EOB entry", "Bank deposit matching"],
  },
  {
    id: 6,
    title: "6. Denial Categorization & Appeals",
    shortName: "Denials",
    icon: RotateCcw,
    tagline: "Root-cause diagnosis and aggressive denial overturns",
    details:
      "Every denial is classified by CARC/RARC codes (timely filing, missing documentation, authorization, medical necessity). Actionable appeals packages are generated and resubmitted within 48 hours.",
    sla: "48h Denial Turnaround",
    accuracy: "87% Denial Overturn Rate",
    deliverables: ["Root-cause analysis", "Appeals packet generation", "Corrected claim rebilling"],
  },
  {
    id: 7,
    title: "7. AR Follow-up & Collections",
    shortName: "AR Recovery",
    icon: Clock,
    tagline: "Aging bucket optimization (30, 60, 90, 120+ days)",
    details:
      "Dedicated revenue recovery specialists engage payer reps directly to resolve pending and disputed claims, maintaining minimal days in AR and maximizing realized practice revenue.",
    sla: "32 Days Average in AR",
    accuracy: "Top 5% Industry Benchmark",
    deliverables: ["Payer representative follow-up", "Low-balance sweep", "Patient balance statements"],
  },
  {
    id: 8,
    title: "8. Analytics & BI Reporting",
    shortName: "Analytics",
    icon: BarChart3,
    tagline: "Comprehensive executive dashboard & cash-flow intelligence",
    details:
      "Transparent reporting gives practice leaders real-time visibility into collection ratios, provider productivity, clean claim trends, denial hot-spots, and forecasted cash flow.",
    sla: "Weekly & Monthly Reporting",
    accuracy: "100% Operational Transparency",
    deliverables: ["Denial trend reports", "Aging waterfall analysis", "Provider productivity metrics"],
  },
];

interface ClaimToPaymentFlowProps {
  themeColor?: "emerald" | "teal";
}

export function ClaimToPaymentFlow({ themeColor = "teal" }: ClaimToPaymentFlowProps) {
  const [activeStage, setActiveStage] = useState(0);

  const current = STAGES[activeStage];
  const IconComponent = current.icon;
  const isTeal = themeColor === "teal";

  return (
    <div className="w-full glass-panel p-6 sm:p-8 lg:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
      {/* Background ambient gradient */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 ${
          isTeal ? "bg-teal-500/5" : "bg-emerald-500/5"
        } rounded-full blur-3xl pointer-events-none`}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-subtle)]">
        <div>
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
              isTeal ? "bg-teal-500/10 text-teal-600" : "bg-emerald-500/10 text-emerald-500"
            } mb-2`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Workflow Explorer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            End-to-End{" "}
            <span
              className={
                isTeal
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"
                  : "text-gradient-emerald"
              }
            >
              Claim to Payment
            </span>{" "}
            Architecture
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Click through each phase of our healthcare revenue-cycle pipeline to inspect controls, benchmarks, and deliverables.
          </p>
        </div>

        {/* Quick stat pill */}
        <div className="flex items-center gap-4 bg-[var(--bg-surface)] px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] shrink-0 shadow-sm">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              isTeal ? "bg-teal-500" : "bg-emerald-500"
            } animate-ping`}
          />
          <div className="text-xs">
            <span className="text-[var(--text-muted)] block">Pipeline Clean Rate:</span>
            <span
              className={`text-sm font-bold ${isTeal ? "text-teal-600" : "text-emerald-500"}`}
            >
              98.2% First-Pass Clean
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Step Nav */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
        {STAGES.map((stage, idx) => {
          const isSelected = activeStage === idx;
          const StageIcon = stage.icon;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                isSelected
                  ? isTeal
                    ? "bg-teal-500/15 border-teal-500/60 shadow-[0_0_15px_rgba(20,184,166,0.25)] text-teal-600 scale-[1.03]"
                    : "bg-emerald-500/15 border-emerald-500/60 shadow-[0_0_15px_rgba(115,203,113,0.25)] text-emerald-500 scale-[1.03]"
                  : isTeal
                  ? "bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-teal-500/30 hover:text-teal-600"
                  : "bg-[var(--bg-surface)]/60 border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-emerald-500/30 hover:text-emerald-500"
              }`}
            >
              <div
                className={`p-2 rounded-lg mb-1.5 transition-colors ${
                  isSelected
                    ? isTeal
                      ? "bg-teal-500 text-white"
                      : "bg-emerald-500 text-white"
                    : isTeal
                    ? "bg-teal-500/10 text-teal-600"
                    : "bg-emerald-500/10 text-emerald-500"
                }`}
              >
                <StageIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold leading-tight line-clamp-1">{stage.shortName}</span>
              <span className="text-[10px] text-[var(--text-muted)] mt-0.5">Stage 0{stage.id}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Spotlight */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className={`bg-[var(--bg-surface)] rounded-2xl p-6 sm:p-8 border ${
            isTeal ? "border-teal-500/30" : "border-emerald-500/30"
          } shadow-lg relative`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left 2 cols: Details */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-3 rounded-xl ${
                    isTeal
                      ? "bg-teal-500/10 text-teal-600 border border-teal-500/20"
                      : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span
                    className={`text-xs uppercase tracking-wider font-semibold ${
                      isTeal ? "text-teal-600" : "text-emerald-500"
                    }`}
                  >
                    Step {current.id} of 8 • RCM Milestone
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {current.title}
                  </h4>
                </div>
              </div>

              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {current.details}
              </p>

              {/* Key Deliverables Checkmarks */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
                  Standard Controls & Output Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {current.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-primary)]"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          isTeal ? "text-teal-500" : "text-emerald-500"
                        } shrink-0`}
                      />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col: SLA & Metrics Card */}
            <div
              className={`glass-panel p-5 border ${
                isTeal ? "border-teal-500/20" : "border-emerald-500/20"
              } space-y-4`}
            >
              <h5 className="text-xs uppercase font-bold tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2">
                Phase SLA & Performance Metrics
              </h5>

              <div>
                <span className="text-xs text-[var(--text-muted)] block">Service Level Agreement (SLA):</span>
                <span
                  className={`text-lg font-bold ${
                    isTeal ? "text-teal-600" : "text-emerald-500"
                  } flex items-center gap-1.5 mt-0.5`}
                >
                  <Clock className="w-4 h-4" />
                  {current.sla}
                </span>
              </div>

              <div>
                <span className="text-xs text-[var(--text-muted)] block">Accuracy & Audit Benchmark:</span>
                <span className="text-base font-semibold text-[var(--text-primary)] flex items-center gap-1.5 mt-0.5">
                  <Layers
                    className={`w-4 h-4 ${isTeal ? "text-teal-600" : "text-emerald-500"}`}
                  />
                  {current.accuracy}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % STAGES.length)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white ${
                    isTeal
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 shadow-md shadow-teal-600/25"
                      : "bg-gradient-to-r from-emerald-600 to-[#4d915d]"
                  } hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>Explore Next Step ({STAGES[(activeStage + 1) % STAGES.length].shortName})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
