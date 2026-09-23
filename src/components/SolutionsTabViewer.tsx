"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Car,
  HeartPulse,
  ShieldCheck,
  Plane,
  Flame,
  Scale,
  Users2,
  Ship,
  Hammer,
  Banknote,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

export function SolutionsTabViewer() {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual");

  const individualSolutions = [
    {
      title: "Motor Insurance",
      badge: "15+ Tie-ups",
      icon: Car,
      color: "text-blue-600",
      description:
        "Comprehensive & Third-Party protection for cars, two-wheelers, and commercial fleets with zero-depreciation and 24/7 roadside recovery.",
      highlights: [
        "Cashless claim at 6,500+ garages",
        "Up to 50% No Claim Bonus transfer",
        "Engine protector & consumable cover",
      ],
      link: "/services#motor",
    },
    {
      title: "Health & Medical",
      badge: "99% Settlement",
      icon: HeartPulse,
      color: "text-emerald-600",
      description:
        "Cashless medical protection for individuals and families against rising healthcare costs, with pre- and post-hospitalization coverage.",
      highlights: [
        "10,000+ networked cashless hospitals",
        "No room-rent capping options",
        "Cumulative bonus on claim-free years",
      ],
      link: "/services#health",
    },
    {
      title: "Life & Term Protection",
      badge: "High Sum Assured",
      icon: ShieldCheck,
      color: "text-indigo-600",
      description:
        "Guaranteed financial protection for your loved ones with affordable high-cover term plans, critical illness riders, and tax benefits.",
      highlights: [
        "Covers up to ₹5+ Crores sum assured",
        "Critical illness & disability riders",
        "Tax benefits under Section 80C & 10(10D)",
      ],
      link: "/services#life",
    },
    {
      title: "Travel Insurance",
      badge: "Worldwide Cover",
      icon: Plane,
      color: "text-orange-600",
      description:
        "Travel with peace of mind across the globe with coverage for emergency medical treatment, trip cancellations, passport loss, and delays.",
      highlights: [
        "Schengen & worldwide approved policies",
        "Baggage loss & flight delay cover",
        "24/7 international emergency support",
      ],
      link: "/services#travel",
    },
  ];

  const corporateSolutions = [
    {
      title: "Fire & Property Insurance",
      badge: "Industrial Risks",
      icon: Flame,
      color: "text-red-600",
      description:
        "Safeguard your manufacturing plant, machinery, warehouse inventory, and business premises against fire, flood, earthquake, and explosions.",
      highlights: [
        "Standard Fire & Special Perils policy",
        "Machinery breakdown & boiler cover",
        "Business interruption & profit loss",
      ],
      link: "/services#fire",
    },
    {
      title: "Liability & Directors' Protection",
      badge: "Legal Shield",
      icon: Scale,
      color: "text-purple-600",
      description:
        "Protect your enterprise, directors, and officers against third-party lawsuits, professional negligence, and contractual liabilities.",
      highlights: [
        "Commercial General Liability (CGL)",
        "Directors & Officers (D&O) liability",
        "Professional indemnity for consultants",
      ],
      link: "/services#liability",
    },
    {
      title: "Employee Welfare & Group Health",
      badge: "Talent Retention",
      icon: Users2,
      color: "text-teal-600",
      description:
        "Tailored corporate group health, group personal accident, and gratuity plans designed to retain top talent and protect workforce well-being.",
      highlights: [
        "Cashless treatment with day-1 cover",
        "Maternity & pre-existing ailment cover",
        "Flexible sum insured per employee tier",
      ],
      link: "/services#corporate",
    },
    {
      title: "Marine, Cargo & Transit",
      badge: "Supply Chain",
      icon: Ship,
      color: "text-cyan-600",
      description:
        "End-to-end cargo insurance covering loss or damage to goods during sea freight, air transit, road carriage, and warehouse storage.",
      highlights: [
        "All risks coverage (Institute Cargo Clauses)",
        "Single voyage or annual open policy",
        "Door-to-door transit protection",
      ],
      link: "/services#marine",
    },
    {
      title: "Engineering & Construction",
      badge: "Project Risk",
      icon: Hammer,
      color: "text-amber-600",
      description:
        "Contractor All Risks (CAR) and Erection All Risks (EAR) coverage for civil infrastructure projects, plant setups, and building contractors.",
      highlights: [
        "Material damage & third-party liability",
        "Plant, tools & equipment cover",
        "Testing and commissioning coverage",
      ],
      link: "/services#engineering",
    },
    {
      title: "Trade Credit & Extended Warranty",
      badge: "Cash Flow Safety",
      icon: Banknote,
      color: "text-emerald-600",
      description:
        "Protect business accounts receivable against client bankruptcy, default, or political risks, plus post-purchase extended warranty solutions.",
      highlights: [
        "Domestic & export trade credit cover",
        "Insolvency and protracted default safeguard",
        "Improved borrowing power from lenders",
      ],
      link: "/services#credit",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Insurance Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] tracking-tight">
              Insurance Solutions for Every Need
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              From family health and motor protection to multi-crore industrial property risk, we provide certified advisory and guaranteed best market terms.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab("individual")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "individual"
                  ? "bg-[#19375c] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              For Individuals &amp; Families
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("corporate")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "corporate"
                  ? "bg-[#19375c] text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              For Corporates &amp; MSMEs
            </button>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(activeTab === "individual" ? individualSolutions : corporateSolutions).map(
            (sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="insuretec-card p-6 sm:p-7 flex flex-col justify-between group hover:border-orange-500/40 relative overflow-hidden bg-white border border-slate-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${sol.color}`} />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#19375c] group-hover:text-orange-500 transition-colors">
                      {sol.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {sol.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <Link
                      href={sol.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Coverage &amp; Quotes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
