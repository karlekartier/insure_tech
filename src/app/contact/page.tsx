import React from "react";
import Link from "next/link";
import { InsuranceQuoteWizard } from "@/components/InsuranceQuoteWizard";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  Navigation,
  MessageCircle,
  Award,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Insure Tech Services Pvt Ltd",
  description:
    "Get in touch with Insure Tech Services Pvt Ltd in Sriperumbudur, Tamil Nadu. Request an insurance quote, policy renewal, or 24/7 claim assistance.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Authorized Insurance Advisory &bull; Sriperumbudur Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact Insure Tech Services
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about your coverage or looking for the lowest premium quotes across 15+ insurers? We are here to guide you.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT: FORM & DETAILS ================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0a121e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Headquarters Details & Direct Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="insuretec-card p-6 sm:p-8 space-y-6 bg-slate-50/70 dark:bg-slate-900/60">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                  Direct Contact Information
                </span>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                  Sriperumbudur Headquarters
                </h2>

                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">
                        Office Location
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                        Insure Tech Services Pvt Ltd<br />
                        Selvashakthi Complex, 228/2 Malaipattu Village<br />
                        Sriperumbudur, Tamil Nadu – 601301
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">
                        Advisory &amp; Support Phone
                      </h4>
                      <a
                        href="tel:9150005721"
                        className="text-xs text-orange-500 hover:underline font-bold mt-0.5 block"
                      >
                        +91 91500 05721
                      </a>
                      <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                        Direct line to certified advisor desk
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">
                        Business Hours
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        Monday – Friday: 9:00 AM – 6:00 PM<br />
                        Saturday: 9:00 AM – 2:00 PM<br />
                        <span className="text-emerald-500 font-semibold">24/7 Claim Assistance Helpline Active</span>
                      </p>
                    </div>
                  </div>

                  {/* Certification */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">
                        Regulatory Accreditation
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                        IRDAI Certified Authorized Insurance Advisor
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:9150005721"
                    className="btn-orange flex-1 text-center justify-center text-xs py-2.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=12.925139,80.008987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-navy flex-1 text-center justify-center text-xs py-2.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-500" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>
                  All consultations and quote comparisons are 100% free of charge with zero obligation to buy.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Wizard (7 cols) */}
            <div className="lg:col-span-7">
              <InsuranceQuoteWizard />
            </div>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAPS EMBED ================= */}
      <section className="py-12 bg-slate-50 dark:bg-[#0c1624] border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
              Visit Our Office
            </span>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1">
              Find Us in Sriperumbudur
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Selvashakthi Complex, 228/2 Malaipattu Village, Sriperumbudur, Tamil Nadu 601301
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-[380px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.090260742234!2d80.008987!3d12.925139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzMwLjUiTiA4MMKwMDAnNDAuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Insure Tech Services Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
