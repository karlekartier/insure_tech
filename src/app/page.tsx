import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import { PartnerLogosMarquee } from "@/components/PartnerLogosMarquee";
import { InteractiveQuoteEstimator } from "@/components/InteractiveQuoteEstimator";
import { SolutionsTabViewer } from "@/components/SolutionsTabViewer";
import {
  ShieldCheck,
  Award,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  ChevronRight,
  Sparkles,
  Zap,
  Star,
  FileCheck,
  Building,
  Car,
} from "lucide-react";

export const metadata = {
  title: "Insure Tech Services Pvt Ltd | Smart, Powerful Insurance Solutions",
  description:
    "IRDAI certified insurance advisor with 15+ insurer tie-ups for Motor, Health, Life, and Corporate coverage. 99% claim settlement success rate.",
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Hook (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 text-emerald-300 border border-white/15 backdrop-blur-md shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>IRDAI Certified Authorized Insurance Advisor</span>
                <span className="opacity-40">•</span>
                <span className="text-orange-400 font-mono">15+ PARTNERS</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                Smart, Powerful <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-orange-400">
                  Insurance Solutions
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The new standard in personal and corporate protection. We partner with India&apos;s leading insurance providers to give you unbiased multi-quote comparisons, guaranteed lowest premiums, and dedicated 48-hour claim assistance.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/contact"
                  className="btn-orange w-full sm:w-auto text-base py-3.5 px-8"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:9150005721"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-md"
                >
                  <PhoneCall className="w-4 h-4 text-orange-400" />
                  <span>Call +91 91500 05721</span>
                </a>
              </div>

              {/* Trust Stats Bar */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">
                    15,000+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Happy Clients
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                    99%
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Claim Success
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-300">
                    15+
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Insurer Tie-ups
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    48h
                  </div>
                  <div className="text-xs text-slate-300 uppercase tracking-wider mt-0.5 font-medium">
                    Avg Settlement
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Estimator Widget (5 cols) */}
            <div className="lg:col-span-5">
              <InteractiveQuoteEstimator />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNERS MARQUEE ================= */}
      <PartnerLogosMarquee />

      {/* ================= VALUE PILLARS / WHY CHOOSE US ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              The Insure Tech Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
              Why Individuals &amp; Businesses Choose Us
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We eliminate the friction of insurance buying. As an independent IRDAI-certified advisor, our loyalty is to you — not the insurer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="insuretec-card p-8 group hover:border-blue-500/40 bg-white border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#19375c]">
                Unbiased Multi-Quote Comparison
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Compare rates and policy terms across 15+ top insurers simultaneously. We negotiate on your behalf to guarantee the most competitive premium without sacrificing coverage.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                <span>Save up to 45% on Premiums</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="insuretec-card p-8 group hover:border-emerald-500/40 bg-white border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#19375c]">
                Dedicated 48h Claim Assistance
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                When an accident or emergency occurs, our claims concierge steps in. We handle surveyor coordination, documentation, and follow-ups to ensure your claim is settled promptly.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-600">
                <span>99% Verified Claim Success</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="insuretec-card p-8 group hover:border-orange-500/40 bg-white border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#19375c]">
                IRDAI Certified Advisory
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Authorized and regulated under the Insurance Regulatory and Development Authority of India. We adhere to rigorous consumer protection and ethical advisory benchmarks.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-orange-600">
                <span>Licensed Professional Advisory</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ASYMMETRIC CORPORATE SPOTLIGHT ================= */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Corporate &amp; Individual Insurance Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] leading-tight">
                Headquartered in Sriperumbudur, Protecting Clients Across India
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Operating from our hub at Selvashakthi Complex in Sriperumbudur, we manage risk portfolios for diverse industries — from automotive manufacturing giants and IT parks to transport fleets and individual families.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#19375c]">
                      15+ Motor Insurance Company Tie-Ups
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Lowest premium quotes with cashless garage claims for personal cars and commercial fleet operators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#19375c]">
                      Turnkey Corporate Risk Protection
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Industrial All Risks, Fire &amp; Burglary, Employee Welfare, Group Mediclaim, and Marine Transit solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#19375c]">
                      Zero Hassle Digital Policy Delivery
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Digital documentation and renewal management delivered straight to your email and WhatsApp in minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/about" className="btn-navy text-sm py-3 px-6">
                  <span>Learn More About Our Team &amp; Pedigree</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                <Image
                  src={getAssetPath("/assets/home1.jpg")}
                  alt="Insure Tech Professional Insurance Advisors"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142942]/90 via-[#19375c]/30 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white inline-block mb-2">
                      Trusted Advisor
                    </span>
                    <h3 className="text-xl font-bold">
                      Personalized Advisory &amp; Prompt Settlement
                    </h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Selvashakthi Complex, Sriperumbudur, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-[#19375c]">
                    10+ Years
                  </div>
                  <div className="text-xs text-slate-500">
                    Industry Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UNIFIED SOLUTIONS SECTION ================= */}
      <SolutionsTabViewer />

      {/* ================= 4-STEP JOURNEY SECTION ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#142942] to-[#0f2136] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Transparent, Hassle-Free Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">
              How Insure Tech Works
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Getting the right policy at the lowest rate in 4 straightforward steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all relative">
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-white">Needs &amp; Risk Assessment</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                We understand your exact requirements, whether protecting your family&apos;s healthcare, motor vehicles, or industrial plant.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Quote Evaluation</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                We run instant quote comparisons across 15+ partner insurers to find policy options with the greatest coverage-to-cost ratio.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-white">Negotiation &amp; Placement</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Our certified advisors negotiate optimal add-ons, terms, and discounts before digital policy issuance to your inbox.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all relative">
              <div className="w-10 h-10 rounded-xl bg-purple-500 text-white font-bold flex items-center justify-center mb-4 text-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated Claim Concierge</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                When you need to make a claim, we stand with you end-to-end to guarantee fast surveyor processing and 99% settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS PREVIEW ================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Client Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c] mt-2">
                What Our Clients Say
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
            >
              <span>View All 15,000+ Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="insuretec-card p-6 flex flex-col justify-between bg-white border border-slate-200">
              <div>
                <div className="flex items-center gap-1 text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;The claim settlement process was incredibly smooth. When I had a car accident, Insure Tech guided me through every step and my claim was processed in under 48 hours. Highly recommended!&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                  PK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#19375c]">
                    Priya Kumar
                  </h4>
                  <p className="text-xs text-slate-500">
                    Software Engineer &bull; Motor Insurance
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="insuretec-card p-6 flex flex-col justify-between bg-white border border-slate-200">
              <div>
                <div className="flex items-center gap-1 text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;We insured our entire fleet of commercial vehicles with Insure Tech. Their corporate solutions are exceptional, and the premium rates we got were unbeatable. Saved us countless hours.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center text-sm">
                  AG
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#19375c]">
                    Anita Gupta
                  </h4>
                  <p className="text-xs text-slate-500">
                    Logistics Director &bull; Fleet Insurance
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="insuretec-card p-6 flex flex-col justify-between bg-white border border-slate-200">
              <div>
                <div className="flex items-center gap-1 text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;As a senior citizen, I was struggling to find comprehensive health coverage at reasonable rates. Insure Tech not only found me the perfect plan but also provided exceptional post-sales support.&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
                  SM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#19375c]">
                    Suresh Menon
                  </h4>
                  <p className="text-xs text-slate-500">
                    Retired Bank Manager &bull; Health Insurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#19375c] via-[#122842] to-[#19375c] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 text-orange-400 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Protect What Matters Most?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get Your Free, Unbiased Quote Comparison Today
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Join over 15,000 satisfied individuals and businesses. Talk to our IRDAI-certified advisors for personal or corporate risk coverage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-orange text-base py-3.5 px-8 w-full sm:w-auto"
            >
              <span>Request Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:9150005721"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Call Us: +91 91500 05721</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
