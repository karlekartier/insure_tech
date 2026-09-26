"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Lock,
  PhoneCall,
  Sparkles,
  Building,
  Car,
  Heart,
  Briefcase,
  Flame,
} from "lucide-react";

export function InsuranceEstimator() {
  const [category, setCategory] = useState<"motor" | "health" | "life" | "corporate">("health");
  const [sumInsured, setSumInsured] = useState<number>(1000000); // 10 Lakhs
  const [members, setMembers] = useState<number>(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["cashless_opd", "restoration"]);
  const [locked, setLocked] = useState(false);

  const categories = [
    { id: "health", label: "Health Insurance", icon: Heart },
    { id: "motor", label: "Motor Insurance", icon: Car },
    { id: "life", label: "Life / Term Insurance", icon: ShieldCheck },
    { id: "corporate", label: "Corporate & Fire", icon: Building },
  ];

  const addonsList: Record<string, { id: string; name: string; cost: number }[]> = {
    health: [
      { id: "cashless_opd", name: "Cashless OPD & Diagnostics", cost: 1800 },
      { id: "restoration", name: "100% Unlimited Restored Sum", cost: 1200 },
      { id: "critical_illness", name: "36 Critical Illness Rider", cost: 2400 },
      { id: "maternity", name: "Maternity & Newborn Cover", cost: 3100 },
    ],
    motor: [
      { id: "zero_dep", name: "Zero Depreciation Cover", cost: 2200 },
      { id: "engine_protect", name: "Engine & Gearbox Protection", cost: 1400 },
      { id: "roadside", name: "24x7 Roadside Emergency Assistance", cost: 650 },
      { id: "return_to_invoice", name: "Return to Invoice Guarantee", cost: 1100 },
    ],
    life: [
      { id: "accidental_death", name: "Accidental Death Benefit (1 Cr)", cost: 1600 },
      { id: "waiver_of_premium", name: "Waiver of Premium on Disability", cost: 950 },
      { id: "terminal_illness", name: "Accelerated Terminal Illness Payout", cost: 1300 },
    ],
    corporate: [
      { id: "fire_burglary", name: "Standard Fire & Special Perils", cost: 3500 },
      { id: "machinery_breakdown", name: "Industrial Machinery Breakdown", cost: 4200 },
      { id: "workmen_compensation", name: "Employee Workmen Compensation", cost: 2800 },
      { id: "cyber_risk", name: "Corporate Cyber Risk & Data Breach", cost: 4900 },
    ],
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Dynamic estimate calculation
  const baseRate =
    category === "health"
      ? (sumInsured / 100000) * 1150 * (members * 0.75)
      : category === "motor"
      ? 4800 + (sumInsured / 100000) * 850
      : category === "life"
      ? (sumInsured / 1000000) * 620
      : (sumInsured / 100000) * 550;

  const currentAddons = addonsList[category] || [];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = currentAddons.find((a) => a.id === id);
    return sum + (found ? found.cost : 0);
  }, 0);

  const annualEstimate = Math.round(baseRate + addonsTotal);
  const monthlyEstimate = Math.round(annualEstimate / 12);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Input Configuration */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Multi-Insurer Premium Calculator</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Optimal Coverage
          </h3>
          <p className="text-sm text-slate-600">
            Compare plans across India&apos;s top 15+ IRDAI authorized insurers and get the lowest guaranteed premium.
          </p>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id as any);
                    setSelectedAddons([]);
                  }}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border text-xs font-semibold transition-all ${
                    isActive
                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Slider for Sum Insured */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-slate-700">
                {category === "health"
                  ? "Health Sum Insured Cover:"
                  : category === "motor"
                  ? "Vehicle Insured Declared Value (IDV):"
                  : category === "life"
                  ? "Life Term Sum Assured:"
                  : "Asset & Property Valuation:"}
              </span>
              <span className="font-extrabold text-emerald-700 font-mono text-base bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ₹{(sumInsured / 100000).toFixed(category === "life" ? 0 : 1)} Lakhs
              </span>
            </div>
            <input
              type="range"
              min={category === "life" ? 2500000 : 300000}
              max={category === "life" ? 20000000 : category === "corporate" ? 10000000 : 5000000}
              step={category === "life" ? 1000000 : 100000}
              value={sumInsured}
              onChange={(e) => setSumInsured(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          {/* Members / Units Selector */}
          {category === "health" && (
            <div className="space-y-2">
              <span className="text-sm font-semibold text-slate-700 block">
                Family Members to Cover:
              </span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setMembers(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      members === num
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {num === 1 ? "Individual" : `${num} Members`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-on Riders */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Recommended Add-ons &amp; Riders:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentAddons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs text-left transition-all ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate pr-2">{addon.name}</span>
                    <span className="font-mono text-emerald-700 font-bold shrink-0">
                      +₹{addon.cost}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:w-80 bg-gradient-to-b from-slate-900 to-[#022313] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border border-emerald-500/30">
          <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>Unbiased 15+ Insurer Match</span>
            </div>

            <div className="mt-6">
              <span className="text-xs text-slate-300 block font-medium">
                Estimated Starting Premium
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white font-mono">
                  ₹{monthlyEstimate.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-slate-300">/ month</span>
              </div>
              <span className="text-xs text-emerald-400 block mt-1 font-mono">
                or ₹{annualEstimate.toLocaleString("en-IN")} / year (Incl. GST)
              </span>
            </div>

            <div className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99% Claim Settlement Track Record</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free 48-Hour Claim Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cashless at 10,000+ Network Hospitals</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {locked ? (
              <div className="p-3 bg-emerald-600/30 border border-emerald-400 rounded-2xl text-center text-xs text-emerald-200">
                🎉 Quote Saved! Our advisor will call within 15 minutes.
              </div>
            ) : (
              <button
                onClick={() => setLocked(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <span>Lock In This Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <a
              href="tel:9150005721"
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Talk to Advisor (+91 91500 05721)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
