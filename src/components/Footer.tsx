import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, MapPin, Clock, ArrowRight, FileCheck, Award, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.svg"
                  alt="Insure Tech Services Pvt Ltd"
                  fill
                  className="object-contain dark:brightness-110"
                />
              </div>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Insure Tech Services Pvt Ltd delivers high-performance digital ecosystems for healthcare Revenue Cycle Management (RCM), enterprise XML structured data engineering, and APDF document automation.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>HIPAA Aligned</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Lock className="w-3.5 h-3.5" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Award className="w-3.5 h-3.5" />
                <span>99.8% Accuracy SLA</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/medical-billing" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  Medical Billing & RCM
                </Link>
              </li>
              <li>
                <Link href="/medical-billing" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  Claims & Denial Management
                </Link>
              </li>
              <li>
                <Link href="/xml-services" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  XML Data Conversion & Mapping
                </Link>
              </li>
              <li>
                <Link href="/xml-services" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  XML Validation & Integration
                </Link>
              </li>
              <li>
                <Link href="/apdf-services" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  APDF Document Processing
                </Link>
              </li>
              <li>
                <Link href="/apdf-services" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  OCR Extraction & Indexing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              Company & Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors">
                  Overview & Hook
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors">
                  Request For Services (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors">
                  Schedule Technical Consultation
                </Link>
              </li>
              <li>
                <Link href="/medical-billing#workflow" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors">
                  Claim-to-Payment Flow
                </Link>
              </li>
              <li>
                <Link href="/xml-services#pipeline" className="text-[var(--text-secondary)] hover:text-emerald-500 transition-colors">
                  XML Data Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[var(--text-primary)]">
              Reach Our Team
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <span>Insure Tech Services Pvt Ltd, Enterprise Tech Park, Financial District</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="mailto:info@insuretechservices.com" className="hover:text-emerald-500 transition-colors">
                  contact@insuretechservices.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+91 (0) 44 4890 2300</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24/7 Operations Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} Insure Tech Services Pvt Ltd. All rights reserved. Accuracy. Efficiency. Reliability.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Privacy & Healthcare Security</span>
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Security Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
