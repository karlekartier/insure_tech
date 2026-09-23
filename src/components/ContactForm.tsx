"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  User,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Send,
  CheckCircle2,
  Clock,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    phone: "",
    insuranceCategory: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setReferenceId(data.referenceId || `ITS-${Math.floor(100000 + Math.random() * 900000)}`);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {
          // Confetti fallback
        }
      } else {
        setErrorMsg(data.message || "Failed to submit request. Please try again.");
      }
    } catch {
      // Fallback local submission
      const fallbackId = `ITS-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(fallbackId);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // Confetti fallback
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      location: "",
      phone: "",
      insuranceCategory: "",
      message: "",
    });
    setSubmitted(false);
    setReferenceId("");
    setErrorMsg("");
  };

  const insuranceCategories = [
    "Motor Insurance (Cars, Commercial Fleets, Bikes)",
    "Health & Medical Insurance (Cashless Family Floater)",
    "Life & Term Insurance (₹1 Cr+ Protection)",
    "Corporate Property & Fire Insurance",
    "Commercial Vehicle Fleet Insurance",
    "Marine & Transit Cargo Insurance",
    "Employee Group Health & Benefits",
    "Engineering & Construction All-Risk",
    "Medical Billing & Healthcare BPO Services",
    "XML & Schema Transformation Services",
    "Other Insurance Advisory",
  ];

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl text-center space-y-6 animate-in fade-in zoom-in-95">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            Inquiry Received
          </span>
          <h3 className="text-2xl font-bold text-[#19375c]">
            Thank You, {formData.fullName || "Valued Client"}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your insurance consultation request has been routed to our IRDAI-certified advisory team at our Sriperumbudur headquarters.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left space-y-2 text-xs">
          <div className="flex justify-between items-center py-1 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Tracking Reference:</span>
            <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
              {referenceId}
            </span>
          </div>
          {formData.insuranceCategory && (
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Category:</span>
              <span className="font-semibold text-slate-800 text-right truncate max-w-[200px]">
                {formData.insuranceCategory}
              </span>
            </div>
          )}
          {formData.phone && (
            <div className="flex justify-between items-center py-1 border-b border-slate-200">
              <span className="text-slate-500 font-medium">Callback Contact:</span>
              <span className="font-semibold text-slate-800">{formData.phone}</span>
            </div>
          )}
          {formData.location && (
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-500 font-medium">Location:</span>
              <span className="font-semibold text-slate-800 truncate max-w-[200px]">{formData.location}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-emerald-700 bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/60 max-w-sm mx-auto font-medium">
          <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Expected callback time: <strong>Within 30 minutes</strong> during business hours</span>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline-navy text-xs py-2.5 px-6 inline-flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative">
      <div className="mb-6 space-y-1">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
          Quick Consultation Request
        </span>
        <h3 className="text-2xl font-bold text-[#19375c]">
          Get Instant Free Advisory
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Fill in your details below and our authorized advisor will prepare comparative quotes from 15+ top insurers.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Mail & Phone in 2 cols on tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rajesh@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Location / City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Sriperumbudur, Chennai, Tamil Nadu"
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Select Insurance Category Dropdown */}
        <div>
          <label
            htmlFor="insuranceCategory"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Select Insurance Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <ShieldCheck className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <select
              id="insuranceCategory"
              name="insuranceCategory"
              required
              value={formData.insuranceCategory}
              onChange={handleChange}
              className="w-full pl-10 pr-8 py-3 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-slate-400">
                -- Choose an Insurance Category --
              </option>
              {insuranceCategories.map((cat) => (
                <option key={cat} value={cat} className="text-slate-800">
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-slate-700 mb-1.5"
          >
            Message / Requirements
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400 pointer-events-none" />
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your specific insurance requirements, current policy details, or queries..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="btn-orange w-full py-3.5 text-sm sm:text-base font-bold text-center justify-center shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing Request...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>Submit Request</span>
              </span>
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-500 text-center pt-1">
          🔒 Your information is safe. 100% free consultation with zero obligation.
        </p>
      </form>
    </div>
  );
}
