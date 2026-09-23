"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Building,
  Car,
  HeartPulse,
  PhoneCall,
  ArrowRight,
  Sparkles,
  MessageSquarePlus,
  Send,
  X,
} from "lucide-react";

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(5);

  const stats = [
    { number: "15,000+", label: "Satisfied Clients", desc: "Across personal & corporate sectors" },
    { number: "99%", label: "Claim Success Rate", desc: "Fast surveyor coordination" },
    { number: "4.9 / 5", label: "Average Rating", desc: "Based on 3,400+ client surveys" },
    { number: "48 Hours", label: "Avg Claim Settlement", desc: "Quick-track claim concierge" },
  ];

  const testimonials = [
    {
      id: 1,
      category: "motor",
      author: "Priya Kumar",
      role: "Software Engineer",
      location: "Chennai",
      policy: "Comprehensive Car Insurance",
      rating: 5,
      content:
        "The claim settlement process was incredibly smooth. When I had a car accident on the highway, Insure Tech guided me through every step and my claim was processed within 48 hours without any hassle. Highly recommended for their excellent service!",
      initials: "PK",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: 2,
      category: "corporate",
      author: "Rajesh Patel",
      role: "Business Owner & Director",
      location: "Sriperumbudur",
      policy: "Commercial Property & Fire",
      rating: 5,
      content:
        "We have trusted Insure Tech with our manufacturing unit's fire and industrial all-risk insurance for the past 6 years. Their comparative quotes saved us over ₹3.5 Lakhs in annual premiums while expanding our coverage parameters.",
      initials: "RP",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      id: 3,
      category: "health",
      author: "Suresh Menon",
      role: "Retired Bank Manager",
      location: "Kanchipuram",
      policy: "Senior Citizen Health Cover",
      rating: 5,
      content:
        "As a senior citizen, I was struggling to find comprehensive health coverage at reasonable rates with pre-existing disease terms. Insure Tech not only found me the perfect plan but also provided exceptional post-sales support and hospital admission guidance.",
      initials: "SM",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      id: 4,
      category: "corporate",
      author: "Anita Gupta",
      role: "Logistics Company Director",
      location: "Tamil Nadu",
      policy: "Commercial Vehicle Fleet Insurance",
      rating: 5,
      content:
        "We insured our entire fleet of 45+ commercial trucks with Insure Tech. Their corporate solutions are exceptional, and the premium rates we got were unbeatable. The digital documentation and endorsement turnaround saved us countless operational hours.",
      initials: "AG",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      id: 5,
      category: "life",
      author: "Vikram Khanna",
      role: "Financial Analyst",
      location: "Chennai",
      policy: "Term Life Protection (₹2 Cr)",
      rating: 5,
      content:
        "The life insurance policy recommended by Insure Tech perfectly aligned with my family's financial goals. Their advisor took the time to understand my liabilities and compared 4 major insurers with clear terms and zero pushiness.",
      initials: "VK",
      color: "bg-indigo-500/10 text-indigo-600",
    },
    {
      id: 6,
      category: "health",
      author: "Neha Joshi",
      role: "Marketing Professional",
      location: "Chennai",
      policy: "Family Floater Health Plan",
      rating: 5,
      content:
        "Excellent service! I was confused between multiple health insurance policies, but the team at Insure Tech simplified everything and helped me choose the best one. Their proactive renewal reminders and cashless support are very helpful.",
      initials: "NJ",
      color: "bg-pink-500/10 text-pink-600",
    },
  ];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  return (
    <div className="relative overflow-hidden">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Policyholder Experiences</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Client Testimonials &amp; Reviews
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover why over 15,000 policyholders across Tamil Nadu and India trust Insure Tech Services for unbiased advice and rapid claims.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="btn-orange text-xs sm:text-sm py-2.5 px-6"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Feedback</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS BANNER ================= */}
      <section className="py-12 bg-white dark:bg-[#0c1624] border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#19375c] dark:text-[#38bdf8]">
                  {s.number}
                </div>
                <div className="text-sm font-bold text-[var(--text-primary)] mt-1">
                  {s.label}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FILTER & TESTIMONIALS GRID ================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0a121e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "All Reviews" },
              { id: "motor", label: "Motor Insurance" },
              { id: "health", label: "Health Plans" },
              { id: "life", label: "Life & Term" },
              { id: "corporate", label: "Corporate & Fleet" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === f.id
                    ? "bg-[#19375c] text-white shadow-md shadow-blue-900/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((t) => (
              <div
                key={t.id}
                className="insuretec-card p-7 flex flex-col justify-between group hover:border-orange-500/40 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-orange-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {t.policy}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full font-bold flex items-center justify-center text-sm shrink-0 ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {t.role} &bull; {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL: SUBMIT A REVIEW ================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#112136] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => {
                setModalOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Share Your Experience
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Your feedback helps us continuously improve our insurance advisory and claims service.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-5 space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setUserRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= userRating
                                ? "text-orange-400 fill-current"
                                : "text-slate-300 dark:text-slate-600"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand R."
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                        Policy Type *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Car Insurance / Health"
                        className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                      Your Review / Experience *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about the advisor guidance, claim processing, or premium savings..."
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[var(--text-primary)] focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-orange w-full text-center justify-center text-xs py-3 mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Review</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto">
                  Your review has been successfully submitted and will appear on our website following standard verification.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="btn-navy text-xs py-2 px-6"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-[#122438] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Experience Top-Tier Insurance Service?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join thousands of satisfied individuals and fleet owners. Get your policy reviewed by our certified advisors today.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Get Free Quote Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
