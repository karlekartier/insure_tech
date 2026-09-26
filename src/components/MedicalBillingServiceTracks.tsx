"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  FileCheck2,
  RefreshCw,
  UserCheck,
  ShieldAlert,
  CreditCard,
  Send,
  Building2,
  FileText,
  Clock,
  CheckCircle2,
  BarChart3,
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
  Zap,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

export function MedicalBillingServiceTracks() {
  const [activeTab, setActiveTab] = useState<"billing" | "coding" | "rcm">("billing");

  const billingServices = [
    {
      title: "Patient Demographic Entry",
      desc: "Entering and maintaining accurate patient demographic information based on authorized records to ensure clean downstream claim preparation.",
      icon: UserCheck,
      items: ["Demographic data hygiene", "Authorized record ingestion", "Patient identity verification"],
    },
    {
      title: "Insurance Information Verification",
      desc: "Real-time verification of active insurance coverage, co-pays, deductibles, and pre-authorization requirements before appointment dates.",
      icon: ShieldCheck,
      items: ["Primary & secondary coverage audit", "Pre-authorization status logging", "Co-pay & deductible calculation"],
    },
    {
      title: "Accurate Charge Entry",
      desc: "Entering line-item clinical charges and service details into approved EHR/PMS billing software in alignment with fee schedules.",
      icon: CreditCard,
      items: ["Encounter superbill reconciliation", "Fee schedule alignment", "Prompt charge capture entry"],
    },
    {
      title: "Claim Preparation",
      desc: "Organizing and validating claim details against payer rules, clinical documentation, and client-specific submission standards.",
      icon: FileText,
      items: ["Documentation completeness check", "Payer requirement validation", "Pre-submission format review"],
    },
    {
      title: "Claim Submission Support (EDI 837)",
      desc: "Electronic batch submission of professional (837P) and institutional (837I) claims through clearinghouses with delivery acknowledgments.",
      icon: Send,
      items: ["Daily electronic transmission", "Clearinghouse 999 & 277 receipts", "Fast rejection error remediation"],
    },
    {
      title: "Payment Posting & Reconciliation",
      desc: "Recording electronic remittance advices (ERA / 835) and paper explanation of benefits (EOB) with accurate adjustment write-offs.",
      icon: RefreshCw,
      items: ["Line-item ERA / EOB posting", "Contractual adjustment checks", "Secondary claim dispatch"],
    },
    {
      title: "Accounts Receivable (A/R) Follow-Up",
      desc: "Systematic tracking and proactive follow-up on unpaid claims aging beyond 30 days to minimize days in AR and maintain steady cash flow.",
      icon: Clock,
      items: ["Payer representative outreach", "Aging bucket reduction (<60 days)", "Unpaid claim status resolution"],
    },
    {
      title: "Denial Management Support",
      desc: "Reviewing denial reason codes (CARC/RARC), categorizing root causes, and preparing structured appeals with clinical documentation within 48 hours.",
      icon: ShieldAlert,
      items: ["Denial categorization & tracking", "Clinical record appeal packages", "Root-cause prevention feedback"],
    },
    {
      title: "Patient Billing Support",
      desc: "Assisting patients with clear billing statements, balance inquiries, payment portal guidance, and transparent communication.",
      icon: Stethoscope,
      items: ["Patient balance statements", "Billing inquiry assistance", "Compassionate payment support"],
    },
    {
      title: "Billing Reports & Analytics",
      desc: "Comprehensive operational dashboards tracking monthly gross collections, net collection ratios, denial trends, and aging waterfalls.",
      icon: BarChart3,
      items: ["Monthly executive summaries", "Aging waterfall analysis", "Provider productivity metrics"],
    },
  ];

  const codingServices = [
    {
      title: "Diagnosis Coding Support (ICD-10-CM)",
      desc: "Assigning accurate ICD-10-CM diagnosis codes to the highest degree of specificity based on documented clinical encounters.",
      icon: FileCheck2,
      items: ["Highest specificity assignment", "Chronic condition staging", "Medical necessity linkage"],
    },
    {
      title: "Procedure Coding Support (CPT / HCPCS)",
      desc: "Accurate assignment of CPT-4 and HCPCS Level II codes and surgical modifiers (-25, -59, -76) avoiding unbundling and audit triggers.",
      icon: Zap,
      items: ["CPT-4 procedure coding", "HCPCS Level II supply codes", "Compliant modifier optimization"],
    },
    {
      title: "Code Review & Gap Auditing",
      desc: "Reviewing coding entries for completeness, cross-walking consistency, and potential clinical documentation gaps.",
      icon: Search,
      items: ["NCCI edit cross-referencing", "Documentation gap detection", "Comprehensive pre-bill review"],
    },
    {
      title: "Specialty-Specific Coding",
      desc: "Dedicated coding specialists experienced in Cardiology, Orthopedics, Family Medicine, Internal Medicine, Pediatrics, Surgery, and Radiology.",
      icon: Stethoscope,
      items: ["Subspecialty guideline mastery", "Complex surgical chart review", "Evaluation & Management (E/M) leveling"],
    },
    {
      title: "Coding Documentation Deficiencies & Queries",
      desc: "Structured physician query workflows to resolve unclear, conflicting, or incomplete documentation through approved clinical communication channels.",
      icon: BookOpen,
      items: ["Compliant physician queries", "Non-leading documentation requests", "Clinical clarification tracking"],
    },
    {
      title: "Sample-Based Quality Audits",
      desc: "Periodic random-sample audits by senior QA auditors ensuring 98%+ coding accuracy and adherence to official coding guidelines.",
      icon: ShieldCheck,
      items: ["Randomized sample auditing", "Error-pattern root cause analysis", "Ongoing education & feedback"],
    },
    {
      title: "Annual Regulatory & Code Updates",
      desc: "Continuous monitoring and implementation of annual AMA CPT and CMS ICD-10 regulatory code revisions and payer policy adjustments.",
      icon: RefreshCw,
      items: ["Annual code set transitions", "Payer policy updates", "Staff continuous education"],
    },
  ];

  const rcmServices = [
    {
      title: "Front-End Intake & Eligibility Validation",
      desc: "Capturing accurate patient data and securing insurance verification at the point of scheduling to prevent 70%+ of common billing rejections.",
      icon: UserCheck,
      items: ["Pre-service eligibility check", "Prior-authorization clearance", "Patient estimation & co-pay"],
    },
    {
      title: "Mid-Cycle Charge Capture & Scrubbing",
      desc: "Translating patient encounters into clean claims through certified coding, multi-layer rule engine scrubbing, and fee schedule verification.",
      icon: CreditCard,
      items: ["Accurate charge capture", "NCCI & CCI edit scrubbing", "EDI 837 batch compilation"],
    },
    {
      title: "Back-End Remittance & Denial Resolution",
      desc: "Daily ERA/EOB payment posting, contract allowance reconciliation, rapid denial appeals, and assertive accounts receivable recovery.",
      icon: TrendingUp,
      items: ["Same-day ERA posting", "48-hour denial appeal protocol", "Aged A/R bucket reduction"],
    },
    {
      title: "Executive Business Intelligence & Dashboards",
      desc: "Transparent financial analytics tracking first-pass clean claim rates, days in A/R, net collection percentages, and provider productivity.",
      icon: BarChart3,
      items: ["KPI dashboard access", "Monthly financial review", "Cash-flow projection models"],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-teal-100/70 text-teal-800 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Structured Healthcare Revenue-Cycle Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Specialized Service Tracks
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Structured administrative solutions designed to streamline billing operations, enforce coding compliance, and maximize practice collections.
        </p>
      </div>

      {/* Track Selection Switcher Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto no-scrollbar gap-1">
          <button
            onClick={() => setActiveTab("billing")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "billing"
                ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Medical Billing Services</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">10 Activities</span>
          </button>

          <button
            onClick={() => setActiveTab("coding")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "coding"
                ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Medical Coding Services</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">7 Activities</span>
          </button>

          <button
            onClick={() => setActiveTab("rcm")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "rcm"
                ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>End-to-End RCM Lifecycle</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20">4 Phases</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Medical Billing Services Grid */}
      {activeTab === "billing" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-teal-50/50 rounded-2xl p-4 sm:p-5 border border-teal-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-teal-900">
            <div className="flex items-center gap-2.5 font-medium">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <span>
                <strong>Operational Scope:</strong> Comprehensive administrative billing support from initial intake through final remittance and balance reconciliation.
              </span>
            </div>
            <span className="font-bold text-teal-700 shrink-0 bg-white px-3 py-1 rounded-full border border-teal-200 text-[11px]">
              100% HIPAA Title II Compliant
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {billingServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-1.5">
                    {srv.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Medical Coding Services Grid */}
      {activeTab === "coding" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-teal-50/50 rounded-2xl p-4 sm:p-5 border border-teal-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-teal-900">
            <div className="flex items-center gap-2.5 font-medium">
              <FileCheck2 className="w-5 h-5 text-teal-600 shrink-0" />
              <span>
                <strong>Certified Quality:</strong> AAPC &amp; AHIMA certified coders adhering to official ICD-10-CM, CPT-4, and HCPCS guidelines.
              </span>
            </div>
            <span className="font-bold text-teal-700 shrink-0 bg-white px-3 py-1 rounded-full border border-teal-200 text-[11px]">
              98.5%+ First-Pass Coding Accuracy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-1.5">
                    {srv.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: End-to-End RCM Lifecycle */}
      {activeTab === "rcm" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-teal-50/50 rounded-2xl p-4 sm:p-5 border border-teal-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-teal-900">
            <div className="flex items-center gap-2.5 font-medium">
              <TrendingUp className="w-5 h-5 text-teal-600 shrink-0" />
              <span>
                <strong>Closed-Loop Lifecycle:</strong> Continuous synchronization between your EHR/PMS system and our revenue operations center.
              </span>
            </div>
            <span className="font-bold text-teal-700 shrink-0 bg-white px-3 py-1 rounded-full border border-teal-200 text-[11px]">
              ↓ 45% Average Days in A/R
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rcmServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {srv.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Our Commitment Callout Banner from Document */}
      <div className="mt-12 bg-gradient-to-br from-[#02211c] via-[#04332c] to-[#011a16] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-teal-500/30 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-3 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Our Commitment</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Simplifying Healthcare Billing Operations
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Our goal is to simplify healthcare billing operations through reliable processes, transparent communication, quality-focused service, and scalable solutions.
          </p>
        </div>
        <a
          href="#contact"
          className="relative z-10 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/25 transition-all shrink-0 cursor-pointer"
        >
          <span>Partner With Us</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Essential Clinical Distinction Callout from Attached Document */}
      <div className="mt-8 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Clinical Boundary Notice:</strong> Medical billing and coding support forms the administrative side of healthcare revenue operations and does not replace clinical judgment. All clinical decisions remain exclusively with qualified healthcare professionals.
          </span>
        </div>
        <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider shrink-0">
          Compliance Standard
        </span>
      </div>
    </div>
  );
}
