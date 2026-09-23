import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Compass,
  Factory,
  Laptop,
  GraduationCap,
  Stethoscope,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "About Us | Insure Tech Services Pvt Ltd",
  description:
    "Learn about Insure Tech Services Pvt Ltd, our IRDAI certified insurance advisory pedigree, our Sriperumbudur headquarters, and our commitment to consumer trust.",
};

export default function AboutPage() {
  const corporateSectors = [
    { name: "Manufacturing Units", icon: Factory, desc: "Industrial fire, machinery breakdown, and public liability" },
    { name: "IT & Tech Enterprises", icon: Laptop, desc: "Group health, cyber liability, and professional indemnity" },
    { name: "Logistics & Fleet Operators", icon: Truck, desc: "Commercial vehicle fleet and transit marine cargo" },
    { name: "Educational Institutions", icon: GraduationCap, desc: "Campus property, student accident, and group cover" },
    { name: "Healthcare Facilities", icon: Stethoscope, desc: "Medical establishment liability and specialized equipment" },
    { name: "Small Businesses & MSMEs", icon: Building2, desc: "Custom shopkeeper policies, burglary, and workers cover" },
  ];

  const milestones = [
    { number: "15+", label: "Insurance Partners", desc: "Direct partnerships with India's top insurers" },
    { number: "15,000+", label: "Happy Clients", desc: "Individuals, families, and businesses protected" },
    { number: "10+ Years", label: "Industry Experience", desc: "Deep domain expertise in insurance broking" },
    { number: "100%", label: "IRDAI Certified", desc: "Regulated, licensed, and transparent advisory" },
  ];

  const values = [
    {
      title: "Trust & Transparency",
      icon: HeartHandshake,
      color: "text-emerald-600",
      desc: "We build relationships based on complete openness. Our clients trust us because we clearly explain exclusions, deductibles, and claim processes without hidden clauses.",
    },
    {
      title: "Customer-First Philosophy",
      icon: Users,
      color: "text-blue-600",
      desc: "Your family and business risks are our top priority. We listen, evaluate your financial boundaries, and present only the policies that maximize your coverage.",
    },
    {
      title: "Unbiased Expert Advisory",
      icon: Compass,
      color: "text-orange-600",
      desc: "Because we partner with 15+ insurers rather than just one, our advice is 100% impartial. We negotiate the best premium and add-ons entirely on your behalf.",
    },
    {
      title: "Regulatory Excellence",
      icon: Award,
      color: "text-purple-600",
      desc: "As an IRDAI-certified insurance advisor, we uphold the highest statutory standards, ensuring compliance, secure data handling, and prompt grievance resolution.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HEADER SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>IRDAI Certified Authorized Insurance Advisor</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            About Insure Tech Services
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Protecting individuals, families, and commercial enterprises across Tamil Nadu and all of India with personalized, multi-company insurance advisory.
          </p>
        </div>
      </section>

      {/* ================= STORY / WHO WE ARE ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5]">
                <Image
                  src={getAssetPath("/assets/who1.jpg")}
                  alt="Insure Tech Office and Advisory Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142942]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white inline-block mb-1">
                      Our Headquarters
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Selvashakthi Complex, Sriperumbudur
                    </h3>
                    <p className="text-xs text-slate-200">
                      Tamil Nadu 601301 &bull; Phone: +91 91500 05721
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Who We Are
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] leading-tight">
                A Decade of Committed Insurance Broking &amp; Risk Guidance
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                From our corporate headquarters at Selvashakthi Complex, 228/2 Malaipattu Village in Sriperumbudur, Insure Tech Services Pvt Ltd has built enduring relationships with India&apos;s most reputable insurance institutions.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are a vehicle owner seeking competitive motor insurance premiums, a family looking for comprehensive cashless health coverage, or a large manufacturing enterprise requiring multi-crore fire, marine, and liability protection, we provide unbiased, transparent advice backed by regulatory accreditation.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-orange-500 shadow-sm">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  &ldquo;Our mission is to simplify insurance so that every policyholder understands their true coverage, pays the fairest premium in the market, and receives immediate support during claim settlements.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link href="/services" className="btn-orange text-sm py-3 px-6">
                  <span>Explore Insurance Offerings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link href="/contact" className="btn-outline-navy text-sm py-3 px-6">
                  <span>Contact Our Advisors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="py-14 bg-gradient-to-r from-[#19375c] via-[#122842] to-[#19375c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {milestones.map((m) => (
              <div key={m.label} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-400">
                  {m.number}
                </div>
                <div className="text-sm font-bold text-white">{m.label}</div>
                <div className="text-xs text-slate-200">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              The foundational pillars that guide how we treat every policyholder and business client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-orange-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${v.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-[#19375c]">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CORPORATE CLIENTELE SECTORS ================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Diverse Industry Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
              Our Corporate Clientele
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We structure custom insurance programs tailored to the regulatory and operational risks of specific industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#19375c] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#19375c]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#19375c]">
                      {sector.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 bg-[#122438] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Partner with an Authorized Advisor?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Contact our Sriperumbudur headquarters today for a no-obligation insurance review and premium audit.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Schedule Free Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9150005721"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors text-white"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>+91 91500 05721</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
