"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/assets";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  Lock,
  MessageSquare,
  Award,
  Layers,
  PhoneCall,
  Activity,
  HeartHandshake,
} from "lucide-react";

export function MedicalBillingCommitment() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Reliable Processes",
      desc: "Structured, repeatable workflows ensuring claims are scrubbed, submitted, and reconciled with zero lag time.",
      icon: Layers,
      metrics: "98.6% Clean Claims",
      details:
        "Every clinical encounter passes through automated NCCI edit checks, modifier validation (-25, -59, -76), and secondary payer cross-referencing before submission.",
    },
    {
      title: "Transparent Communication",
      desc: "Real-time visibility into claims statuses, monthly executive reviews, and direct access to your dedicated billing team.",
      icon: MessageSquare,
      metrics: "Daily & Weekly Audits",
      details:
        "No opaque back-office silos. You receive weekly A/R aging reports, CARC/RARC denial root-cause breakdowns, and proactive physician documentation queries.",
    },
    {
      title: "Quality-Focused Service",
      desc: "AAPC and AHIMA credentialed billing & coding specialists dedicated to maximizing compliant reimbursement.",
      icon: Award,
      metrics: "AAPC & AHIMA Certified",
      details:
        "Certified coders ensure exact diagnostic ICD-10-CM and CPT coding specificity, reducing clinical record requests and accelerating payer adjudication.",
    },
    {
      title: "Scalable Solutions",
      desc: "Flexible operational infrastructure that scales smoothly with practice expansion, new providers, and volume surges.",
      icon: Zap,
      metrics: "Elastic Capacity",
      details:
        "Whether submitting 500 or 50,000+ monthly encounters, our cloud-connected workflows adapt seamlessly with zero disruption to your daily patient care.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. WHY CHOOSE US SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3 text-teal-800 bg-teal-100/80 border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Why Choose Us</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Accuracy. Efficiency. Reliability.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          We combine trained professionals, structured processes, and technology-enabled solutions to deliver quality medical billing support tailored to each client&apos;s requirements.
        </p>
      </div>

      {/* 3 Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
            Pillar 01
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Accuracy</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AAPC and AHIMA certified coders ensure precise ICD-10, CPT, and HCPCS code allocation. Triple-tier validation catches claim errors before electronic submission.
          </p>
          <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>98.6% First-pass clean claim rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Medical necessity &amp; modifier validation</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
            Pillar 02
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Efficiency</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Same-day charge entry and 24-hour electronic claim submission. Accelerated payment reconciliation significantly reduces overall days in Accounts Receivable.
          </p>
          <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>45% Average reduction in A/R days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Payment &amp; ERA posting within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <Lock className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
            Pillar 03
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">Reliability</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Uncompromising data security adhering to HIPAA Title II and HITECH compliance. Transparent weekly reporting and dedicated practice account management.
          </p>
          <div className="space-y-2 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>100% HIPAA &amp; HITECH Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Direct VPN connection into your EHR / PMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR COMMITMENT SHOWCASE SECTION WITH VECTOR GRAPHIC */}
      <div className="bg-gradient-to-br from-[#021f1b] via-[#053730] to-[#011a16] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-teal-500/30 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Commitment Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Our Commitment</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Simplifying Healthcare Billing Operations
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Our goal is to simplify healthcare billing operations through reliable processes, transparent communication, quality-focused service, and scalable solutions.
            </p>

            {/* Pillar Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-teal-500 text-slate-950 border-teal-400 font-bold shadow-lg shadow-teal-500/30"
                        : "bg-white/5 hover:bg-white/10 text-slate-200 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-slate-950" : "text-teal-400"}`} />
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                          isSelected ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-white/10 text-teal-300"
                        }`}
                      >
                        {pillar.metrics}
                      </span>
                    </div>
                    <div className="text-xs font-bold">{pillar.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Details Callout */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <div className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">
                {pillars[activePillar].title} In Detail
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {pillars[activePillar].details}
              </p>
            </div>
          </div>

          {/* Right: Modern Vector Graphic Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950/40 backdrop-blur-md group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={getAssetPath("/images/med_billing_process_vector.jpg")}
                  alt="InsureTech Medical Billing Workflow & HIPAA Compliance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Overlay Interactive Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Full-Spectrum RCM Flow</div>
                    <div className="text-[11px] text-slate-300">Intake → Coding → Claims → Remittance</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-500/30 shrink-0">
                  98.6% Clean
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. PARTNER WITH US CALLOUT */}
      <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-teal-800 bg-teal-100/70 border border-teal-200">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
            <span>Partner With Us</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Looking for a reliable medical billing partner?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Let&apos;s discuss your requirements and build a smarter revenue cycle together. Our healthcare specialists review your practice specialties, EHR systems, and billing volume to tailor a custom onboarding plan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href="tel:9150005721"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-teal-600" />
            <span>+91 91500 05721</span>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/25 transition-all"
          >
            <span>Discuss Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
