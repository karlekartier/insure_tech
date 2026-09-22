import React from "react";
import Image from "next/image";
import { MultiStepServiceForm } from "@/components/MultiStepServiceForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Lock,
  Headphones,
  CheckCircle2,
  FileText
} from "lucide-react";

export const metadata = {
  title: "Contact & Request for Services | Insure Tech Services",
  description:
    "Submit an official Request for Quote (RFQ) or schedule a technical consultation with Insure Tech Services PVT LTD for Medical Billing, XML Conversion, and APDF Solutions.",
  keywords: [
    "Request for Services",
    "Medical Billing quote",
    "XML conversion RFQ",
    "APDF document processing consultation",
    "Insure Tech contact",
  ],
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden tech-grid">
      {/* ================= HERO INTRO ================= */}
      <section className="relative pt-12 pb-10 lg:pt-16 lg:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <Headphones className="w-3.5 h-3.5" />
            <span>Dedicated Solutions Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Request for <span className="text-gradient-emerald">Services &amp; Consultation</span>
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Connect directly with our solutions architects to discuss your clinical billing workflows, XML schemas, file volumes, or document conversion requirements.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT: FORM & CONTACT CHANNELS ================= */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Security Commitments (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] space-y-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-3">
                Official Contact Channels
              </h3>

              <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Headquarters</span>
                    <span className="text-[var(--text-primary)] font-semibold leading-tight block mt-0.5">
                      Insure Tech Services Pvt Ltd
                    </span>
                    <span className="text-xs">Enterprise Tech Park, Financial District</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Enquiries &amp; RFQs</span>
                    <a
                      href="mailto:contact@insuretechservices.com"
                      className="text-[var(--text-primary)] font-semibold hover:text-emerald-500 transition-colors block mt-0.5"
                    >
                      contact@insuretechservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Telephone Desk</span>
                    <span className="text-[var(--text-primary)] font-semibold block mt-0.5">
                      +91 (0) 44 4890 2300
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block font-medium">Operations Hours</span>
                    <span className="text-[var(--text-primary)] font-semibold block mt-0.5">
                      24/7 Operations &amp; Support
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality & Security Assurance Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/25 space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-500 font-bold text-sm">
                <Lock className="w-4 h-4" />
                <span>Confidentiality Guaranteed</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Prior to file exchanges or data transmissions, Insure Tech Services executes mutual Non-Disclosure Agreements (NDAs) and healthcare Business Associate Agreements (BAAs).
              </p>
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)] text-xs text-[var(--text-primary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>HIPAA Security Rule Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-Bit SSL/TLS Data Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Dedicated Account Manager within 4 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Form (8 cols) */}
          <div className="lg:col-span-8">
            <MultiStepServiceForm />
          </div>
        </div>
      </section>
    </div>
  );
}
