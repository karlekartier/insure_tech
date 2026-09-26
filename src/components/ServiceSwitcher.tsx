"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  Cpu,
  BookOpen,
  Stethoscope,
  ChevronDown,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

export const SERVICES_CONFIG = [
  {
    id: "insurance",
    name: "All Insurance",
    subtitle: "Motor, Health, Life & Corporate",
    href: "/insurance",
    color: "emerald",
    badgeColor: "bg-emerald-500",
    activePill: "bg-emerald-500 text-white shadow-md shadow-emerald-500/30 ring-2 ring-white/30",
    hoverBg: "hover:bg-emerald-50 text-emerald-950",
    borderActive: "border-emerald-500 bg-emerald-500/10 text-emerald-700",
    icon: ShieldCheck,
  },
  {
    id: "it-services",
    name: "IT Services",
    subtitle: "Cloud, AI, DevOps & Security",
    href: "/it-services",
    color: "cyan",
    badgeColor: "bg-cyan-500",
    activePill: "bg-cyan-500 text-white shadow-md shadow-cyan-500/30 ring-2 ring-white/30",
    hoverBg: "hover:bg-cyan-50 text-cyan-950",
    borderActive: "border-cyan-500 bg-cyan-500/10 text-cyan-700",
    icon: Cpu,
  },
  {
    id: "publication-support",
    name: "Publication Support",
    subtitle: "XML, APDF, Journals & Indexing",
    href: "/publication-support",
    color: "amber",
    badgeColor: "bg-amber-500",
    activePill: "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30 ring-2 ring-white/30",
    hoverBg: "hover:bg-amber-50 text-amber-950",
    borderActive: "border-amber-500 bg-amber-500/10 text-amber-800",
    icon: BookOpen,
  },
  {
    id: "medical-billing",
    name: "Medical Billing",
    subtitle: "RCM, Claims & AR Management",
    href: "/medical-billing",
    color: "teal",
    badgeColor: "bg-teal-500",
    activePill: "bg-teal-500 text-white font-bold shadow-md shadow-teal-500/30 ring-2 ring-white/30",
    hoverBg: "hover:bg-teal-50 text-teal-950",
    borderActive: "border-teal-500 bg-teal-500/10 text-teal-700",
    icon: Stethoscope,
  },
];

interface ServiceSwitcherProps {
  currentServiceId?: "insurance" | "it-services" | "publication-support" | "medical-billing";
  variant?: "pill-bar" | "dropdown";
  className?: string;
}

export function ServiceSwitcher({
  currentServiceId,
  variant = "pill-bar",
  className = "",
}: ServiceSwitcherProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeService =
    SERVICES_CONFIG.find((s) => s.id === currentServiceId) ||
    SERVICES_CONFIG.find((s) => pathname.startsWith(s.href));

  if (variant === "dropdown") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-sm backdrop-blur-md transition-all cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-500 hidden sm:inline">Division:</span>
          <span className="font-bold text-slate-900">
            {activeService ? activeService.name : "Select Service"}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {dropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                <span>InsureTech Ecosystem</span>
                <Link
                  href="/"
                  className="text-emerald-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <LayoutGrid className="w-3 h-3" />
                  Main Portal
                </Link>
              </div>
              <div className="py-1 space-y-1">
                {SERVICES_CONFIG.map((srv) => {
                  const Icon = srv.icon;
                  const isCurrent = activeService?.id === srv.id;
                  return (
                    <Link
                      key={srv.id}
                      href={srv.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-colors ${
                        isCurrent
                          ? "bg-slate-100 font-bold text-slate-900"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-white ${srv.badgeColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">
                          {srv.name}
                        </div>
                        <div className="text-[10px] text-slate-500">
                          {srv.subtitle}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Pill Bar variant (displayed across top of each sub-website)
  return (
    <div
      className={`w-full bg-[#0a1626]/95 backdrop-blur-md border-b border-white/10 text-white py-1.5 sm:py-2 px-3 sm:px-6 relative z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 text-xs">
        {/* Left: Ecosystem / Portal Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all font-medium border border-white/10 text-[11px] sm:text-xs"
            title="Return to Main Portal Gateway"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">Main Portal</span>
            <span className="xs:hidden">Portal</span>
          </Link>

          <span className="text-white/20 hidden md:inline">|</span>

          <span className="text-slate-400 hidden lg:inline-flex items-center gap-1.5 text-xs">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Select Specialized Division:</span>
          </span>
        </div>

        {/* Right: Quick Switcher Tabs with NO native scrollbars and smooth swipe */}
        <div className="relative flex-1 min-w-0 flex items-center justify-end">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1 max-w-full overscroll-x-contain scroll-smooth">
            {SERVICES_CONFIG.map((srv) => {
              const Icon = srv.icon;
              const isCurrent = activeService?.id === srv.id;
              return (
                <Link
                  key={srv.id}
                  href={srv.href}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? `${srv.activePill} scale-[1.02]`
                      : "bg-white/[0.08] text-slate-300 hover:bg-white/[0.16] hover:text-white border border-white/[0.08]"
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0" />
                  <span>{srv.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
