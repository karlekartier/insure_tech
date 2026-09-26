"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import { MotionWaveCanvas } from "@/components/MotionWaveCanvas";
import { PortalCard } from "@/components/PortalCard";
import {
  ShieldCheck,
  Cpu,
  BookOpen,
  Stethoscope,
  PhoneCall,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";

export default function PortalGatewayPage() {
  const serviceCards = [
    {
      id: "insurance",
      title: "insurance",
      subtitle: "all type of insurance",
      categoryTag: "Insurance Division",
      imageSrc: getAssetPath("/images/insurance_umbrella.jpg"),
      href: "/insurance",
      accentColor: "emerald" as const,
      badgeIcon: ShieldCheck,
      features: ["Motor, Health, Life & Corporate", "IRDAI Certified • 99% Claim Success"],
    },
    {
      id: "it-services",
      title: "IT services",
      subtitle: "all IT based service",
      categoryTag: "IT & Engineering",
      imageSrc: getAssetPath("/images/it_services.jpg"),
      href: "/it-services",
      accentColor: "cyan" as const,
      badgeIcon: Cpu,
      features: ["Cloud Architecture & Migration", "Cybersecurity & DevOps Automation"],
    },
    {
      id: "publication-support",
      title: "publication based",
      subtitle: "publication based support",
      categoryTag: "Publishing Systems",
      imageSrc: getAssetPath("/images/publication_support.jpg"),
      href: "/publication-support",
      accentColor: "amber" as const,
      badgeIcon: BookOpen,
      features: ["JATS/NLM XML & APDF Processing", "Academic Journal & PubMed Indexing"],
    },
    {
      id: "medical-billing",
      title: "Medical Billing",
      subtitle: "Medical Billing & Revenue Cycle Management",
      categoryTag: "Healthcare RCM",
      imageSrc: getAssetPath("/images/medical_billing.jpg"),
      href: "/medical-billing",
      accentColor: "teal" as const,
      badgeIcon: Stethoscope,
      features: ["AAPC Certified Medical Coding", "98.6% Clean Claims • AR Recovery"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#02130b] via-[#041c10] to-[#010d07] text-white flex flex-col justify-between overflow-hidden select-none">
      {/* 1. Dynamic 3D Particle Motion Graphic Wave */}
      <MotionWaveCanvas
        className="z-0"
        dotColor="#10b981"
        lineColor="rgba(16, 185, 129, 0.22)"
        glowColor="rgba(52, 211, 153, 0.45)"
      />

      {/* Ambient background glow points */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 2. Top Portal Header Bar */}
      <header className="relative z-10 w-full pt-5 sm:pt-10 px-4 sm:px-10 lg:px-14 flex items-center justify-between gap-3">
        {/* Exact Canva Brand Pill Badge */}
        <div className="bg-white rounded-2xl sm:rounded-3xl px-3.5 py-2 sm:px-5 sm:py-3.5 shadow-2xl border border-white/20 inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] shrink-0">
          <div className="relative h-8 w-36 sm:h-10 sm:w-56">
            <Image
              src={getAssetPath("/logo.svg")}
              alt="InsureTech Services Pvt Ltd"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Top Right Quick Controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="tel:9150005721"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 91500 05721</span>
          </a>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden sm:inline">Enterprise Gateway</span>
            <span className="sm:hidden text-[11px]">Portal Hub</span>
          </div>
        </div>
      </header>

      {/* 3. Center Stage: The 4 Interactive Division Cards */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 my-auto">
        {/* Section Intro Tag */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-emerald-300 border border-white/15 backdrop-blur-md mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Select Your Service Division</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            Multi-Industry Specialized Solutions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl mx-auto font-normal">
            Click any division card below to access its dedicated portal with specialized workflows and estimators.
          </p>
        </div>

        {/* The 4 Cards Grid - Exact side-by-side match to Canva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {serviceCards.map((card) => (
            <PortalCard key={card.id} {...card} />
          ))}
        </div>
      </main>

      {/* 4. Bottom Footer Strip */}
      <footer className="relative z-10 w-full py-5 px-6 sm:px-12 border-t border-white/10 bg-black/30 backdrop-blur-md text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span>&copy; {new Date().getFullYear()} Insure Tech Services Pvt Ltd</span>
            <span className="opacity-40">•</span>
            <span>Sriperumbudur, Tamil Nadu</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
            <Link href="/insurance" className="hover:text-emerald-400 transition-colors">
              Insurance
            </Link>
            <span>•</span>
            <Link href="/it-services" className="hover:text-cyan-400 transition-colors">
              IT Services
            </Link>
            <span>•</span>
            <Link href="/publication-support" className="hover:text-amber-400 transition-colors">
              Publication Support
            </Link>
            <span>•</span>
            <Link href="/medical-billing" className="hover:text-teal-400 transition-colors">
              Medical Billing
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
