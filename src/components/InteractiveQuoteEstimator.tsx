"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Car,
  HeartPulse,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

type PolicyType = "motor" | "health" | "life" | "corporate";

export function InteractiveQuoteEstimator() {
  const [activeType, setActiveType] = useState<PolicyType>("motor");
  const [vehicleType, setVehicleType] = useState("Private Car (Comprehensive)");
  const [healthMembers, setHealthMembers] = useState("Self + Spouse + 2 Children");
  const [lifeCover, setLifeCover] = useState("₹1.00 Crore");
  const [corpType, setCorpType] = useState("Factory & Industrial All Risk");
  const [zeroDep, setZeroDep] = useState(true);
  const [ncbDiscount, setNcbDiscount] = useState("50% NCB (Max Savings)");

  const getCalculation = () => {
    switch (activeType) {
      case "motor":
        return {
          startingFrom: "₹ 2,450",
          marketAverage: "₹ 4,200",
          savings: "Save up to 42%",
          tagline: "Cashless in 6,500+ network garages",
          topProviders: ["Tata AIG", "HDFC ERGO", "ICICI Lombard"],
        };
      case "health":
        return {
          startingFrom: "₹ 480 / mo",
          marketAverage: "₹ 820 / mo",
          savings: "Save ₹4,080 / yr",
          tagline: "10,000+ Cashless Hospitals & No Co-pay",
          topProviders: ["Care Health", "HDFC ERGO", "Tata AIG"],
        };
      case "life":
        return {
          startingFrom: "₹ 620 / mo",
          marketAverage: "₹ 950 / mo",
          savings: "Tax Benefit u/s 80C",
          tagline: "Terminal Illness & Accidental Rider",
          topProviders: ["Kotak Life", "Max Life", "HDFC Life"],
        };
      case "corporate":
        return {
          startingFrom: "Custom Tier",
          marketAverage: "Standard Tariff",
          savings: "Corporate Bulk Rates",
          tagline: "Audited Risk Profiling & 48h Claim Assistance",
          topProviders: ["Chola MS", "ICICI Lombard", "Bajaj Allianz"],
        };
    }
  };

  const calc = getCalculation();

  return (
    <div className="insuretec-card p-5 sm:p-7 bg-white border border-slate-200 shadow-2xl relative overflow-hidden text-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Quote Comparison</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#19375c] mt-0.5">
            Compare 15+ Insurers
          </h3>
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <Percent className="w-3 h-3" />
          <span>Best Price</span>
        </div>
      </div>

      {/* Policy Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-5 pb-5">
        <button
          type="button"
          onClick={() => setActiveType("motor")}
          className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeType === "motor"
              ? "bg-[#19375c] text-white shadow-md shadow-blue-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <Car className="w-4 h-4 text-orange-400" />
          <span>Motor</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveType("health")}
          className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeType === "health"
              ? "bg-[#19375c] text-white shadow-md shadow-blue-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <HeartPulse className="w-4 h-4 text-emerald-500" />
          <span>Health</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveType("life")}
          className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeType === "life"
              ? "bg-[#19375c] text-white shadow-md shadow-blue-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span>Life</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveType("corporate")}
          className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeType === "corporate"
              ? "bg-[#19375c] text-white shadow-md shadow-blue-950/20"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <Building2 className="w-4 h-4 text-amber-500" />
          <span>Corporate</span>
        </button>
      </div>

      {/* Select Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-5">
        {activeType === "motor" && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Vehicle Category
              </label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]"
              >
                <option>Private Car (Comprehensive)</option>
                <option>Two-Wheeler / Bike</option>
                <option>Commercial Fleet / Truck</option>
                <option>Third-Party Mandatory</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                No Claim Bonus (NCB)
              </label>
              <select
                value={ncbDiscount}
                onChange={(e) => setNcbDiscount(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]"
              >
                <option>50% NCB (Max Savings - 5 Yrs)</option>
                <option>35% NCB Discount</option>
                <option>20% NCB Discount</option>
                <option>0% NCB (New Vehicle)</option>
              </select>
            </div>
          </>
        )}

        {activeType === "health" && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Family Members Covered
              </label>
              <select
                value={healthMembers}
                onChange={(e) => setHealthMembers(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]"
              >
                <option>Self + Spouse + 2 Children</option>
                <option>Individual (Self Only)</option>
                <option>Parents &amp; Senior Citizens</option>
                <option>1 Crore Super Top-Up</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Sum Insured
              </label>
              <select className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]">
                <option>₹ 10 Lakhs (Recommended)</option>
                <option>₹ 15 Lakhs</option>
                <option>₹ 25 Lakhs</option>
                <option>₹ 50 Lakhs+</option>
              </select>
            </div>
          </>
        )}

        {activeType === "life" && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Term Life Cover Amount
              </label>
              <select
                value={lifeCover}
                onChange={(e) => setLifeCover(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]"
              >
                <option>₹ 1.00 Crore</option>
                <option>₹ 50 Lakhs</option>
                <option>₹ 2.00 Crores</option>
                <option>₹ 5.00 Crores</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Cover Term
              </label>
              <select className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]">
                <option>Up to 70 Years of Age</option>
                <option>Up to 60 Years (Retirement)</option>
                <option>Whole Life Cover (99 Years)</option>
              </select>
            </div>
          </>
        )}

        {activeType === "corporate" && (
          <>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Corporate Coverage
              </label>
              <select
                value={corpType}
                onChange={(e) => setCorpType(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]"
              >
                <option>Factory &amp; Industrial All Risk</option>
                <option>Group Health &amp; Mediclaim</option>
                <option>Marine &amp; Transit Cargo</option>
                <option>Commercial Liability / D&amp;O</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enterprise Size
              </label>
              <select className="w-full text-xs sm:text-sm p-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#19375c]">
                <option>Medium Enterprise (25 - 150 Staff)</option>
                <option>Small Business / MSME (Under 25 Staff)</option>
                <option>Large Corporate (150+ Staff)</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Calculated Output & CTA Box (Cleanly styled, zero horizontal overflow) */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
            Estimated Best Premium
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            {calc.savings}
          </span>
        </div>

        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-extrabold text-[#19375c]">
            {calc.startingFrom}
          </span>
          <span className="text-xs text-slate-500 line-through">
            {calc.marketAverage}
          </span>
        </div>

        <p className="text-xs text-slate-600 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{calc.tagline}</span>
        </p>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 pt-0.5">
          <span className="font-medium">Compared across:</span>
          {calc.topProviders.map((prov) => (
            <span
              key={prov}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-slate-800"
            >
              {prov}
            </span>
          ))}
        </div>

        {/* Clean, Full-Width Button that will NEVER bleed or overflow */}
        <div className="pt-2">
          <Link
            href={`/contact?type=${activeType}`}
            className="btn-orange w-full text-center justify-center text-sm py-3 px-4 flex items-center gap-2 shadow-md"
          >
            <span>Get Custom Policy Quote</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
