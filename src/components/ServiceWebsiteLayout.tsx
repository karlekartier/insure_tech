"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import { ServiceSwitcher, SERVICES_CONFIG } from "@/components/ServiceSwitcher";
import {
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Award,
  Clock,
  Users,
  Star,
  Send,
  Building,
  Mail,
  MapPin,
  LucideIcon,
  ChevronRight,
  BadgeCheck,
  Menu,
  X,
  Layers,
  Wrench,
  HelpCircle,
} from "lucide-react";

export interface CapabilityItem {
  title: string;
  desc: string;
  icon: LucideIcon;
  deliverables?: string[];
  tag?: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  desc: string;
}

export interface CaseStudyItem {
  client: string;
  industry: string;
  quote: string;
  result: string;
  author: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceWebsiteProps {
  serviceId: "insurance" | "it-services" | "publication-support" | "medical-billing";
  themeColor: "emerald" | "cyan" | "amber" | "teal";
  divisionTitle: string;
  divisionBadge: string;
  divisionBadgeIcon?: LucideIcon;
  compliancePill: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroSecondaryCtaText?: string;
  heroStats: { value: string; label: string }[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: CapabilityItem[];
  estimatorTitle?: string;
  estimatorSubtitle?: string;
  estimatorComponent: React.ReactNode;
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: WorkflowStage[];
  whyChooseUsTitle: string;
  whyChooseUsSubtitle: string;
  whyChooseUsPoints: { title: string; desc: string; icon: LucideIcon }[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: CaseStudyItem[];
  faqs: FaqItem[];
  contactPreselectedService: string;
}

export function ServiceWebsiteLayout({
  serviceId,
  themeColor,
  divisionTitle,
  divisionBadge,
  divisionBadgeIcon: DivisionBadgeIcon = ShieldCheck,
  compliancePill,
  heroHeadline,
  heroHeadlineHighlight,
  heroSubtitle,
  heroCtaText,
  heroSecondaryCtaText = "Try Interactive Calculator",
  heroStats,
  capabilitiesTitle,
  capabilitiesSubtitle,
  capabilities,
  estimatorComponent,
  workflowTitle,
  workflowSubtitle,
  workflowSteps,
  whyChooseUsTitle,
  whyChooseUsSubtitle,
  whyChooseUsPoints,
  testimonialsTitle,
  testimonialsSubtitle,
  testimonials,
  faqs,
  contactPreselectedService,
}: ServiceWebsiteProps) {
  // Theme styling definitions
  const themeStyles = {
    emerald: {
      heroBg: "from-[#021f11] via-[#053720] to-[#031d10]",
      heroGlow: "bg-emerald-500/15",
      accentText: "text-emerald-400",
      accentGradient: "from-white via-slate-100 to-emerald-400",
      badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      primaryBtn: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
      cardBorderHover: "hover:border-emerald-500",
      activeTab: "bg-emerald-600 text-white",
      highlightBorder: "border-emerald-500/30",
      lightBg: "bg-emerald-50/50",
      stepBadge: "bg-emerald-500 text-slate-950",
      pillAccent: "text-emerald-700 bg-emerald-100/70",
    },
    cyan: {
      heroBg: "from-[#03152e] via-[#092954] to-[#041938]",
      heroGlow: "bg-cyan-500/15",
      accentText: "text-cyan-400",
      accentGradient: "from-white via-slate-100 to-cyan-400",
      badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      primaryBtn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
      cardBorderHover: "hover:border-cyan-500",
      activeTab: "bg-cyan-600 text-white",
      highlightBorder: "border-cyan-500/30",
      lightBg: "bg-cyan-50/50",
      stepBadge: "bg-cyan-500 text-slate-950",
      pillAccent: "text-cyan-700 bg-cyan-100/70",
    },
    amber: {
      heroBg: "from-[#241203] via-[#3b1e06] to-[#1c0d02]",
      heroGlow: "bg-amber-500/15",
      accentText: "text-amber-400",
      accentGradient: "from-white via-slate-100 to-amber-400",
      badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      primaryBtn: "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/25",
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
      cardBorderHover: "hover:border-amber-500",
      activeTab: "bg-amber-600 text-white",
      highlightBorder: "border-amber-500/30",
      lightBg: "bg-amber-50/50",
      stepBadge: "bg-amber-500 text-slate-950",
      pillAccent: "text-amber-800 bg-amber-100/70",
    },
    teal: {
      heroBg: "from-[#021c18] via-[#063832] to-[#021814]",
      heroGlow: "bg-teal-500/15",
      accentText: "text-teal-400",
      accentGradient: "from-white via-slate-100 to-teal-300",
      badgeClass: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      primaryBtn: "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/25",
      iconBg: "bg-teal-50 text-teal-600 border-teal-200",
      cardBorderHover: "hover:border-teal-500",
      activeTab: "bg-teal-600 text-white",
      highlightBorder: "border-teal-500/30",
      lightBg: "bg-teal-50/50",
      stepBadge: "bg-teal-500 text-slate-950",
      pillAccent: "text-teal-700 bg-teal-100/70",
    },
  };

  const currentTheme = themeStyles[themeColor];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* 1. Global Multi-Service Navigation Switcher Bar */}
      <ServiceSwitcher currentServiceId={serviceId} />

      {/* 2. Division Specific Sub-Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Division Branding */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/" className="flex items-center gap-2 group shrink-0">
                <div className="relative h-8 w-36 sm:h-10 sm:w-48 md:w-52">
                  <Image
                    src={getAssetPath("/logo.svg")}
                    alt="InsureTech Services"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-2 pl-3 sm:pl-4 border-l border-slate-200">
                <span
                  className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border ${currentTheme.badgeClass}`}
                >
                  {divisionBadge}
                </span>
              </div>
            </div>

            {/* Quick in-page links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold text-slate-700">
              <a
                href="#overview"
                className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Overview
              </a>
              <a
                href="#capabilities"
                className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Capabilities
              </a>
              <a
                href="#estimator"
                className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Interactive Tool
              </a>
              <a
                href="#workflow"
                className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Process
              </a>
              <a
                href="#faq"
                className="px-3 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                FAQs
              </a>
            </nav>

            {/* Action buttons & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:9150005721"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                <span>+91 91500 05721</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-xs font-extrabold shadow-sm transition-all cursor-pointer ${currentTheme.primaryBtn}`}
              >
                <span>Inquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown / Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Division Tag in Mobile Drawer */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${currentTheme.badgeClass}`}>
                {divisionBadge}
              </span>
              <a
                href="tel:9150005721"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>+91 91500 05721</span>
              </a>
            </div>

            {/* In-page navigation jump links */}
            <div className="space-y-1">
              {[
                { name: "Overview", href: "#overview", icon: Sparkles },
                { name: "Core Capabilities", href: "#capabilities", icon: Layers },
                { name: "Interactive Estimator & Tool", href: "#estimator", icon: Wrench },
                { name: "Workflow & Process", href: "#workflow", icon: CheckCircle2 },
                { name: "Frequently Asked Questions", href: "#faq", icon: HelpCircle },
                { name: "Contact & Consultation", href: "#contact", icon: Send },
              ].map((link) => {
                const NavIcon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <NavIcon className="w-4 h-4 text-slate-500" />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Division Switcher in Drawer */}
            <div className="pt-2 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Jump To Other Division
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES_CONFIG.map((srv) => {
                  const SrvIcon = srv.icon;
                  const isCurrent = serviceId === srv.id;
                  return (
                    <Link
                      key={srv.id}
                      href={srv.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 p-2 rounded-xl text-xs transition-colors border ${
                        isCurrent
                          ? "bg-slate-100 font-bold border-slate-300 text-slate-900"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/60"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center text-white ${srv.badgeColor} shrink-0`}>
                        <SrvIcon className="w-3 h-3" />
                      </div>
                      <span className="truncate">{srv.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section
        id="overview"
        className={`relative bg-gradient-to-b ${currentTheme.heroBg} text-white pt-14 pb-24 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      >
        {/* Thematic Ambient Glow Orbs */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] ${currentTheme.heroGlow} rounded-full blur-[140px] pointer-events-none`}
        />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6 text-center sm:text-left">
            {/* Compliance Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${currentTheme.badgeClass}`}
            >
              <DivisionBadgeIcon className="w-4 h-4" />
              <span>{compliancePill}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              {heroHeadline}{" "}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.accentGradient}`}
              >
                {heroHeadlineHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              {heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <a
                href="#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full text-sm font-extrabold shadow-lg transition-transform hover:scale-[1.02] ${currentTheme.primaryBtn}`}
              >
                <span>{heroCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-300" />
                <span>{heroSecondaryCtaText}</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold ${currentTheme.accentText} font-mono`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES / SERVICES GRID */}
      <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.pillAccent}`}
          >
            Capabilities &amp; Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {capabilitiesTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{capabilitiesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${currentTheme.cardBorderHover} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${currentTheme.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {cap.tag && (
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase">
                        {cap.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{cap.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cap.desc}</p>
                </div>

                {cap.deliverables && cap.deliverables.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Deliverables:
                    </span>
                    {cap.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE ESTIMATOR SECTION */}
      <section
        id="estimator"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200/60 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <span
              className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.pillAccent}`}
            >
              Real-Time Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Instant Scope &amp; Projection Calculator
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Experiment with parameters below for instant pricing, resource allocation, and SLA commitments.
            </p>
          </div>

          {/* Embed the interactive tool */}
          {estimatorComponent}
        </div>
      </section>

      {/* 6. STEP-BY-STEP WORKFLOW PIPELINE */}
      <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.pillAccent}`}
          >
            Structured Delivery Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {workflowTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{workflowSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowSteps.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm mb-4 ${currentTheme.stepBadge}`}
              >
                {stage.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US & METRICS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span
              className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.badgeClass}`}
            >
              The InsureTech Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {whyChooseUsTitle}
            </h2>
            <p className="mt-3 text-base text-slate-300">{whyChooseUsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${currentTheme.stepBadge}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{point.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & CASE ACHIEVEMENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.pillAccent}`}
          >
            Client Proof Points
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {testimonialsTitle}
          </h2>
          <p className="mt-3 text-base text-slate-600">{testimonialsSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.client}
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span
              className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${currentTheme.pillAccent}`}
            >
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">Everything You Need to Know</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. LEAD CAPTURE & INQUIRY FORM */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-4">
              <span
                className={`inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${currentTheme.pillAccent}`}
              >
                Division Direct Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Start Your Project with InsureTech
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with our certified specialists in {divisionTitle}. We provide complete proposals and cost estimates within 24 hours.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-slate-400" />
                  <span>Call Us: +91 91500 05721</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>info@insuretechservices.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Sriperumbudur, Tamil Nadu 601301</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    A specialist from our {divisionTitle} division will review your details and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about your requirements for ${divisionTitle}...`}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 px-6 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all ${currentTheme.primaryBtn}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry to {divisionTitle}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. THEMATIC FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-3">
            <Link href="/" className="relative h-8 w-36 brightness-125">
              <Image
                src={getAssetPath("/logo.svg")}
                alt="InsureTech Services"
                fill
                className="object-contain"
              />
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-semibold">{divisionTitle}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Main Portal
            </Link>
            <span>•</span>
            <Link href="/insurance" className="hover:text-white transition-colors">
              All Insurance
            </Link>
            <span>•</span>
            <Link href="/it-services" className="hover:text-white transition-colors">
              IT Services
            </Link>
            <span>•</span>
            <Link href="/publication-support" className="hover:text-white transition-colors">
              Publication Support
            </Link>
            <span>•</span>
            <Link href="/medical-billing" className="hover:text-white transition-colors">
              Medical Billing
            </Link>
          </div>

          <div className="text-slate-500 text-[11px]">
            &copy; {new Date().getFullYear()} Insure Tech Services Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
