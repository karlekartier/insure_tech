import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0d1827] text-slate-300 pt-16 pb-10 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#19375c] to-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-52">
                <Image
                  src="/logo.svg"
                  alt="Insure Tech Services Pvt Ltd"
                  fill
                  className="object-contain brightness-110"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Insure Tech Services Pvt Ltd is an IRDAI Certified Authorized Insurance Advisor. We deliver transparent, multi-company insurance comparisons and end-to-end claim assistance for individuals and corporate enterprises.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>IRDAI Certified Authorized Insurance Advisory</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 shrink-0 text-orange-400" />
                <span>15+ General &amp; Life Insurance Partners</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <HeartHandshake className="w-4 h-4 shrink-0 text-blue-400" />
                <span>99% Claim Success Rate &bull; 48h Fast Processing</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  Services &amp; Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Specialized Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/medical-billing"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Medical Billing &amp; Coding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rcm"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Revenue Cycle Management (RCM)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/xml-data"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  XML &amp; Data Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/apdf-documents"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  APDF &amp; Document Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  General &amp; Corporate Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Selvashakthi Complex, 228/2 Malaipattu Village, Sriperumbudur, Tamil Nadu 601301
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="tel:9150005721"
                  className="text-xs hover:text-orange-400 transition-colors font-semibold"
                >
                  +91 91500 05721
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs">
                  Mon – Fri: 9:00 AM – 6:00 PM<br />Sat: 9:00 AM – 2:00 PM
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <span>Request Claim Support &amp; Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Insure Tech Services Pvt Ltd. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-slate-500">
            Disclaimer: Insurance is a subject matter of solicitation. Insure Tech Services Pvt Ltd operates in full compliance with IRDAI guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
