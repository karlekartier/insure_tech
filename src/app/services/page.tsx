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
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Search,
  FileCheck,
  Zap,
  Clock,
  Sparkles,
  Stethoscope,
  RefreshCw,
  FileCode2,
  FileText,
  Shield,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const techServices = [
    {
      title: "Medical Billing & Coding",
      href: "/services/medical-billing",
      desc: "ICD-10/CPT coding, patient demographic verification, charge entry, claim scrubbing, and clearinghouse submission for healthcare providers.",
      icon: Stethoscope,
      badge: "Healthcare BPO",
      kpi: "98%+ Clean Claim Rate",
      accent: "border-blue-200 hover:border-blue-400",
    },
    {
      title: "Revenue Cycle Management (RCM)",
      href: "/services/rcm",
      desc: "End-to-end financial lifecycle management: denial recovery appeals, aging AR liquidation, payment posting, and practice KPI analytics.",
      icon: RefreshCw,
      badge: "Financial Operations",
      kpi: "< 32 Days in AR",
      accent: "border-cyan-200 hover:border-cyan-400",
    },
    {
      title: "XML & Data Services",
      href: "/services/xml-data",
      desc: "Schema validation (XSD/DTD), XSLT transformations, parsing, data extraction, high-volume batch processing, and API integration.",
      icon: FileCode2,
      badge: "Data Engineering",
      kpi: "Strict XSD Conformance",
      accent: "border-indigo-200 hover:border-indigo-400",
    },
    {
      title: "APDF & Document Processing",
      href: "/services/apdf-documents",
      desc: "Intelligent PDF conversion, OCR data extraction, document classification, full-text indexing, and automated workflow archiving.",
      icon: FileText,
      badge: "Document Operations",
      kpi: "99.8% Field Accuracy",
      accent: "border-teal-200 hover:border-teal-400",
    },
  ];

  const categories = [
    { id: "all", name: "All Insurance Lines" },
    { id: "motor", name: "Motor Insurance" },
    { id: "health", name: "Health & Life" },
    { id: "corporate", name: "Corporate & Fire" },
    { id: "transit", name: "Marine & Transit" },
  ];

  const insuranceServices = [
    {
      id: "motor",
      title: "Motor & Commercial Fleet Insurance",
      category: "motor",
      badge: "15+ Insurer Tie-ups",
      icon: Car,
      color: "text-blue-600",
      description:
        "Comprehensive coverage for private cars, two-wheelers, passenger buses, trucks, and commercial fleets. We compare rates across 15+ companies to secure the highest discounts.",
      benefits: [
        "Cashless repairs at 6,500+ authorized workshops",
        "Zero Depreciation (Bumper-to-Bumper) add-on",
        "Engine protector, consumables, and roadside assistance",
        "Up to 50% No Claim Bonus (NCB) transfer",
      ],
      partnerInsurers: ["Tata AIG", "HDFC ERGO", "ICICI Lombard", "Cholamandalam MS", "Bajaj Allianz"],
    },
    {
      id: "health",
      title: "Health & Medical Insurance",
      category: "health",
      badge: "99% Settlement",
      icon: HeartPulse,
      color: "text-emerald-600",
      description:
        "Protect yourself and your family against escalating medical bills with comprehensive cashless hospitalization, day-care procedure cover, and pre-existing disease riders.",
      benefits: [
        "10,000+ networked cashless hospitals across India",
        "Individual, family floater, and senior citizen plans",
        "Zero room-rent capping & restore benefit options",
        "Tax deduction up to ₹75,000 under Section 80D",
      ],
      partnerInsurers: ["Care Health", "HDFC ERGO", "Tata AIG", "Star Health", "SBI General"],
    },
    {
      id: "life",
      title: "Life Insurance & Term Protection",
      category: "health",
      badge: "Financial Security",
      icon: ShieldCheck,
      color: "text-indigo-600",
      description:
        "Ensure your family's future stays financially secure in any eventuality with high sum-assured term insurance plans, critical illness protection, and savings plans.",
      benefits: [
        "High sum-assured coverage (₹1 Crore to ₹10+ Crores)",
        "Critical illness & accidental disability riders",
        "Return of premium (TROP) options available",
        "Tax benefits under Section 80C and 10(10D)",
      ],
      partnerInsurers: ["Kotak Mahindra Life", "Max Life", "HDFC Life", "Tata AIA"],
    },
    {
      id: "fire",
      title: "Corporate Fire & Property Insurance",
      category: "corporate",
      badge: "Asset Protection",
      icon: Flame,
      color: "text-red-600",
      description:
        "Shield your factory, warehouse, office premises, inventory, and machinery against fire, lightning, earthquake, storm, flood, and explosions.",
      benefits: [
        "Standard Fire & Special Perils policy (SFSP)",
        "Industrial All Risks (IAR) for large plants",
        "Machinery breakdown & electronic equipment cover",
        "Business interruption & loss of profit coverage",
      ],
      partnerInsurers: ["ICICI Lombard", "Bajaj Allianz", "Tata AIG", "SBI General", "Chola MS"],
    },
    {
      id: "liability",
      title: "Corporate Liability Insurance",
      category: "corporate",
      badge: "Legal Shield",
      icon: Scale,
      color: "text-purple-600",
      description:
        "Safeguard your company, management, and key personnel against third-party bodily injury, property damage, professional errors, and regulatory legal fees.",
      benefits: [
        "Commercial General Liability (CGL)",
        "Directors & Officers (D&O) liability cover",
        "Professional Indemnity (Errors & Omissions)",
        "Product liability and cyber risk safeguards",
      ],
      partnerInsurers: ["HDFC ERGO", "ICICI Lombard", "Tata AIG"],
    },
    {
      id: "welfare",
      title: "Group Employee Welfare Plans",
      category: "corporate",
      badge: "Workforce Retention",
      icon: Users2,
      color: "text-teal-600",
      description:
        "Customizable group health, accident, and term insurance policies for corporate workforces, empowering your talent retention with day-one medical coverage.",
      benefits: [
        "Group Mediclaim (GMC) with cashless facility",
        "Group Personal Accident (GPA) 24/7 worldwide",
        "Day-one coverage for pre-existing diseases & maternity",
        "Employee self-service portal for claim tracking",
      ],
      partnerInsurers: ["Care Health", "ICICI Lombard", "Bajaj Allianz", "Tata AIG"],
    },
    {
      id: "marine",
      title: "Marine, Cargo & Transit Insurance",
      category: "transit",
      badge: "Supply Chain",
      icon: Ship,
      color: "text-cyan-600",
      description:
        "Protection for raw materials, finished inventory, and equipment against damage, theft, or total loss during transit across domestic and international trade routes.",
      benefits: [
        "All risks coverage under Institute Cargo Clauses (A)",
        "Inland transit via road, rail, and air",
        "Annual Open Policies and Marine Turnkey covers",
        "Customized door-to-door transit protection",
      ],
      partnerInsurers: ["Cholamandalam MS", "Tata AIG", "ICICI Lombard", "Bajaj Allianz"],
    },
    {
      id: "engineering",
      title: "Engineering & Construction Insurance",
      category: "corporate",
      badge: "Civil Infrastructure",
      icon: Hammer,
      color: "text-amber-600",
      description:
        "Comprehensive project protection for contractors, developers, and engineers against material damage and third-party liabilities during construction and erection.",
      benefits: [
        "Contractor All Risks (CAR) & Erection All Risks (EAR)",
        "Contractor Plant & Machinery (CPM) cover",
        "Testing and commissioning phase protection",
        "Third-party property damage & bodily injury cover",
      ],
      partnerInsurers: ["Tata AIG", "HDFC ERGO", "SBI General", "Chola MS"],
    },
    {
      id: "travel",
      title: "International & Domestic Travel Insurance",
      category: "transit",
      badge: "Global Protection",
      icon: Plane,
      color: "text-orange-600",
      description:
        "Complete travel safety for leisure, business, and overseas education. Covers unexpected hospitalizations, flight disruptions, baggage losses, and passport replacements.",
      benefits: [
        "Schengen visa and worldwide compliant plans",
        "Cashless emergency hospitalization overseas",
        "Trip delays, cancellations, and missed connections",
        "24/7 global emergency assistance hotline",
      ],
      partnerInsurers: ["HDFC ERGO", "Tata AIG", "Care Health", "Bajaj Allianz"],
    },
    {
      id: "credit",
      title: "Trade Credit & Extended Warranty",
      category: "corporate",
      badge: "Balance Sheet Safety",
      icon: Banknote,
      color: "text-emerald-600",
      description:
        "Protect your balance sheet from non-payment risks, buyer insolvency, and defaults, alongside post-warranty protection programs for manufacturing goods.",
      benefits: [
        "Domestic and export trade credit protection",
        "Insolvency and protracted default safeguard",
        "Protection for consumer appliances & vehicles",
        "Enhanced credit terms for commercial buyers",
      ],
      partnerInsurers: ["ICICI Lombard", "Tata AIG", "Bajaj Allianz"],
    },
  ];

  const filteredInsurance =
    selectedCategory === "all"
      ? insuranceServices
      : insuranceServices.filter((s) => s.category === selectedCategory);

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Complete Solutions Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our Services &amp; Solutions
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence across Technology &amp; Healthcare BPO Services and comprehensive Corporate &amp; Retail Insurance Advisory.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Medical Billing &amp; Coding</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Revenue Cycle Management</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> XML &amp; Data Services</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> APDF &amp; Document Processing</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 15+ Insurer Partnerships</span>
          </div>
        </div>
      </section>

      {/* ================= FEATURED TECH & BPO SERVICES ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100">
              Technology &amp; Healthcare BPO
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
              Specialized Operations Services
            </h2>
            <p className="text-slate-700 text-sm max-w-xl">
              Enterprise administrative processing, schema data engineering, and end-to-end clinical revenue realization.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
              Dedicated Global Delivery Teams
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techServices.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border ${tech.accent} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#19375c]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#19375c] mb-2">{tech.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4">{tech.desc}</p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 mb-4 inline-block">
                    {tech.kpi}
                  </div>

                  <Link
                    href={tech.href}
                    className="flex items-center justify-between text-xs font-bold text-[#19375c] hover:text-orange-600 pt-3 border-t border-slate-100 group"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= INSURANCE SOLUTIONS CATALOG ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-200">
              Insurance Risk Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
              General &amp; Corporate Insurance Solutions
            </h2>
            <p className="text-slate-700 text-sm">
              Independent IRDAI-certified advisory comparing 15+ leading insurance companies for guaranteed lowest premiums.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === c.id
                    ? "bg-[#19375c] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInsurance.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#19375c] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-700 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Key Coverage Highlights:
                      </span>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] text-slate-700 block mb-1.5">
                        Partner Insurers:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.partnerInsurers.map((p) => (
                          <span
                            key={p}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn-orange text-xs py-2 px-5"
                    >
                      <span>Get Instant Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href="tel:9150005721"
                      className="text-xs font-semibold text-[#19375c] hover:text-orange-600 flex items-center gap-1 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Inquire Now</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CLAIMS CONCIERGE ================= */}
      <section className="py-16 bg-[#19375c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-emerald-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rapid Claims Assistance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Dedicated Claim Support &amp; Operational Inquiries
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                Our specialists provide hands-on assistance across all insurance claims, medical billing questions, and XML/APDF file processing pipelines.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="tel:9150005721"
                className="btn-orange text-center justify-center text-sm py-3 px-6 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Us: +91 91500 05721</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors"
              >
                <span>Contact Operations Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
