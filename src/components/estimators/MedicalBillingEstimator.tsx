"use client";

import React, { useState } from "react";
import {
  Stethoscope,
  Activity,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RefreshCw,
  Clock,
  HeartPulse,
} from "lucide-react";

export function MedicalBillingEstimator() {
  const [specialty, setSpecialty] = useState<
    "cardiology" | "orthopedics" | "primary" | "radiology" | "multispecialty"
  >("primary");
  const [claimsCount, setClaimsCount] = useState<number>(2500); // 2,500 claims / mo
  const [avgClaimValue, setAvgClaimValue] = useState<number>(320); // $320 / claim
  const [currentDenialRate, setCurrentDenialRate] = useState<number>(12); // 12% denials
  const [requested, setRequested] = useState(false);

  const specialties = [
    { id: "primary", name: "Family & Internal Med", avg: 220 },
    { id: "cardiology", name: "Cardiology & Vascular", avg: 580 },
    { id: "orthopedics", name: "Orthopedic Surgery", avg: 850 },
    { id: "radiology", name: "Radiology & Imaging", avg: 310 },
    { id: "multispecialty", name: "Multi-Specialty Clinic", avg: 410 },
  ];

  // Financial calculations
  const monthlyBilledTotal = claimsCount * avgClaimValue;
  const currentLostDenials = monthlyBilledTotal * (currentDenialRate / 100);
  // Our RCM service typically recovers 75% of denied revenue and drives clean claims to 98%+
  const monthlyRecovered = Math.round(currentLostDenials * 0.76);
  const annualRecovered = monthlyRecovered * 12;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Inputs */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-teal-600 font-bold text-xs uppercase tracking-wider">
            <HeartPulse className="w-4 h-4" />
            <span>Healthcare Revenue Cycle (RCM) Recovery Calculator</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Practice&apos;s Recoverable Cash Flow
          </h3>
          <p className="text-sm text-slate-600">
            See how much revenue your practice can capture by lowering your denial rate and accelerating days in Accounts Receivable (A/R).
          </p>

          {/* Specialty Selector */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Medical Specialty:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {specialties.map((spec) => {
                const isSelected = specialty === spec.id;
                return (
                  <button
                    key={spec.id}
                    onClick={() => {
                      setSpecialty(spec.id as any);
                      setAvgClaimValue(spec.avg);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-teal-500 bg-teal-50/80 text-teal-950 shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="font-bold text-xs block">{spec.name}</span>
                    <span className="text-[10px] text-teal-700 font-mono">
                      Avg. ${spec.avg} / claim
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Claims Count */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">Monthly Claims Count:</span>
                <span className="font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {claimsCount.toLocaleString()} Claims
                </span>
              </div>
              <input
                type="range"
                min={300}
                max={15000}
                step={100}
                value={claimsCount}
                onChange={(e) => setClaimsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
            </div>

            {/* Current Denial Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-700">Current Denial Rate (%):</span>
                <span className="font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                  {currentDenialRate}% Denials
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={currentDenialRate}
                onChange={(e) => setCurrentDenialRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
            </div>
          </div>

          {/* Target Metrics Grid */}
          <div className="pt-2 grid grid-cols-3 gap-3 text-center border-t border-slate-100">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-[11px] text-slate-500 font-medium">Monthly Billed</div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 font-mono mt-0.5">
                ${(monthlyBilledTotal / 1000).toFixed(0)}k
              </div>
            </div>
            <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200">
              <div className="text-[11px] text-teal-700 font-medium">Clean Claim Rate</div>
              <div className="text-base sm:text-lg font-extrabold text-teal-900 font-mono mt-0.5">
                98.6%
              </div>
            </div>
            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
              <div className="text-[11px] text-emerald-700 font-medium">A/R Days Cut</div>
              <div className="text-base sm:text-lg font-extrabold text-emerald-900 font-mono mt-0.5">
                ↓ 45%
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:w-80 bg-gradient-to-b from-slate-900 to-[#042421] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border border-teal-500/30">
          <div className="absolute top-0 right-0 w-44 h-44 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <TrendingUp className="w-3 h-3 text-teal-400" />
              <span>Projected Cash Realization</span>
            </div>

            <div className="mt-6">
              <span className="text-xs text-slate-300 block font-medium">
                Annual Recovered Revenue
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  +${annualRecovered.toLocaleString()}
                </span>
              </div>
              <span className="text-xs text-teal-400 block mt-1 font-mono">
                approx. +${monthlyRecovered.toLocaleString()} / month recovered
              </span>
            </div>

            <div className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Aggressive 48-Hour Denial Appeal Submission</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Full HIPAA Title II &amp; ISO 27001 Security Standard</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>EHR/PMS Integration (Epic, Cerner, Athena, eCW)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {requested ? (
              <div className="p-3 bg-teal-600/30 border border-teal-400 rounded-2xl text-center text-xs text-teal-200">
                🩺 Free Practice Audit Booked! A certified RCM specialist will call you.
              </div>
            ) : (
              <button
                onClick={() => setRequested(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/25 cursor-pointer"
              >
                <span>Claim Free Practice Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="text-[11px] text-center text-slate-400">
              No Obligation • 100% Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
