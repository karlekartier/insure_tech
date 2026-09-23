"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Car,
  HeartPulse,
  ShieldCheck,
  Flame,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
  PhoneCall,
  Clock,
  Check,
} from "lucide-react";

export function InsuranceQuoteWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    insuranceType: "Motor Insurance",
    requestType: "New Policy / Best Price Quote",
    coverageAmount: "₹10 - ₹25 Lakhs",
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    city: "Sriperumbudur / Chennai",
    notes: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Confetti fallback
    }
  };

  const insuranceOptions = [
    { title: "Motor Insurance", icon: Car, desc: "Cars, commercial fleets, bikes (15+ tie-ups)" },
    { title: "Health Insurance", icon: HeartPulse, desc: "Individual, family floater, senior citizens" },
    { title: "Life & Term Insurance", icon: ShieldCheck, desc: "High sum assured (₹1 Cr+), tax savings" },
    { title: "Corporate Fire & Property", icon: Flame, desc: "Industrial all risks, factory, machinery" },
  ];

  return (
    <div className="insuretec-card p-6 sm:p-8 bg-white dark:bg-[#112136] border border-slate-200 dark:border-slate-700 shadow-2xl relative">
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
            Step {step} of 3
          </span>
          <h3 className="text-lg font-bold text-[var(--text-primary)] mt-0.5">
            {step === 1 && "Select Insurance Category"}
            {step === 2 && "Policy & Coverage Requirements"}
            {step === 3 && "Your Contact & Callback Details"}
          </h3>
        </div>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                s === step
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105"
                  : s < step
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-400"
              }`}
            >
              {s < step ? <Check className="w-3.5 h-3.5" /> : s}
            </div>
          ))}
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* STEP 1: Insurance Category */}
          {step === 1 && (
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-[var(--text-secondary)]">
                Which insurance protection do you need?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {insuranceOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = formData.insuranceType === opt.title;
                  return (
                    <div
                      key={opt.title}
                      onClick={() => setFormData({ ...formData, insuranceType: opt.title })}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/20 ring-2 ring-orange-500/20"
                          : "border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50/50 dark:bg-slate-900/50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-orange-500 text-white"
                            : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                          {opt.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-orange w-full text-center justify-center text-sm py-3 mt-4"
                >
                  <span>Continue to Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Policy Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                  Request Type
                </label>
                <select
                  value={formData.requestType}
                  onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                  className="w-full text-sm p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                >
                  <option>New Policy / Best Price Quote</option>
                  <option>Policy Renewal with NCB Transfer</option>
                  <option>Multi-Company Rate Comparison</option>
                  <option>Claim Filing Assistance</option>
                  <option>Corporate Risk Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                  Estimated Cover Value / Sum Insured
                </label>
                <select
                  value={formData.coverageAmount}
                  onChange={(e) => setFormData({ ...formData, coverageAmount: e.target.value })}
                  className="w-full text-sm p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                >
                  <option>Under ₹5 Lakhs (Basic Vehicle / Entry Health)</option>
                  <option>₹10 - ₹25 Lakhs (Standard Family Floater / Mid Car)</option>
                  <option>₹50 Lakhs - ₹1 Crore (Comprehensive / Term Plan)</option>
                  <option>₹1 Crore+ (Industrial Plant / Corporate All Risk)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1.5">
                  Specific Requirements or Vehicle/Property Info (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2022 Hyundai Creta Petrol, or Family of 4, or Factory Machinery..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-outline-navy w-1/3 text-center justify-center text-sm py-3"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-orange w-2/3 text-center justify-center text-sm py-3"
                >
                  <span>Next: Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Callback */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sriperumbudur / Chennai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-sm p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Zero Spam Guarantee. Our certified advisor will call you within 15 minutes.</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-outline-navy w-1/3 text-center justify-center text-sm py-3"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="btn-orange w-2/3 text-center justify-center text-sm py-3 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </div>
          )}
        </form>
      ) : (
        /* SUCCESS CONFIRMATION */
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
              Request Received Successfully
            </span>
            <h4 className="text-2xl font-extrabold text-[var(--text-primary)]">
              Thank You, {formData.fullName || "Valued Client"}!
            </h4>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Our IRDAI certified insurance advisor has received your request for{" "}
              <strong className="text-orange-500">{formData.insuranceType}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-sm mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Contact Number:</span>
              <span className="font-semibold text-[var(--text-primary)]">{formData.phoneNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Coverage Tier:</span>
              <span className="font-semibold text-[var(--text-primary)]">{formData.coverageAmount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Estimated Response:</span>
              <span className="font-bold text-emerald-500">Within 15 Minutes</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="tel:9150005721"
              className="btn-orange text-xs sm:text-sm py-2.5 px-6 inline-flex"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Need Immediate Advice? Call +91 91500 05721</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
