"use client";

import React from "react";
import { ServiceWebsiteLayout } from "@/components/ServiceWebsiteLayout";
import { InsuranceEstimator } from "@/components/estimators/InsuranceEstimator";
import {
  ShieldCheck,
  Heart,
  Car,
  Building,
  Flame,
  Umbrella,
  FileCheck,
  Clock,
  Award,
  Users,
  CheckCircle2,
  HeartHandshake,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function InsurancePage() {
  return (
    <ServiceWebsiteLayout
      serviceId="insurance"
      themeColor="emerald"
      divisionTitle="All Insurance Solutions"
      divisionBadge="Insurance Division"
      divisionBadgeIcon={ShieldCheck}
      compliancePill="IRDAI Certified Authorized Advisory • 15+ Insurer Partners"
      heroHeadline="Complete Multi-Line"
      heroHeadlineHighlight="Insurance Protection"
      heroSubtitle="Unbiased multi-quote comparisons, guaranteed lowest premiums, and dedicated 48-hour claim concierge for Motor, Health, Life, and Corporate coverage."
      heroCtaText="Get Free Multi-Quote"
      heroSecondaryCtaText="Calculate Premium"
      heroStats={[
        { value: "15,000+", label: "Policies Issued" },
        { value: "99%", label: "Claim Success Rate" },
        { value: "15+", label: "Insurer Partners" },
        { value: "48 Hrs", label: "Fast Claim Assistance" },
      ]}
      capabilitiesTitle="Comprehensive Insurance Portfolio"
      capabilitiesSubtitle="From personal family health to multi-crore industrial property risk, we provide customized IRDAI compliant protection."
      capabilities={[
        {
          title: "Comprehensive Health Insurance",
          desc: "Individual & Family Floater plans with 10,000+ cashless network hospitals, 100% restoration, and zero room-rent capping.",
          icon: Heart,
          tag: "Health & Critical",
          deliverables: [
            "Cashless OPD & day-care procedure coverage",
            "Maternity & pre/post hospitalization expense",
            "Lifelong renewal guarantee with no age limit",
          ],
        },
        {
          title: "Motor & Fleet Insurance",
          desc: "Instant policy issuance for private cars, two-wheelers, and commercial vehicle fleets with zero-depreciation add-ons.",
          icon: Car,
          tag: "Motor & Commercial",
          deliverables: [
            "Cashless garage repairs at 5,000+ partner workshops",
            "Engine protect & return-to-invoice coverage",
            "Up to 50% No Claim Bonus (NCB) transfer support",
          ],
        },
        {
          title: "Life & Term Protection",
          desc: "High sum-assured pure term insurance securing your family's future, with critical illness riders and whole-life payout options.",
          icon: Umbrella,
          tag: "Life & Term",
          deliverables: [
            "Up to ₹5 Crore sum assured with affordable premiums",
            "Terminal illness accelerated payout benefit",
            "Waiver of premium on accidental disability",
          ],
        },
        {
          title: "Corporate Group Health (GMC/GPA)",
          desc: "Employee benefit packages tailored for SMEs, startups, and enterprises with cashless claims and corporate wellness perks.",
          icon: Users,
          tag: "Corporate & SME",
          deliverables: [
            "Day-one coverage for pre-existing diseases",
            "Dedicated corporate claim relationship manager",
            "Digital employee health portal & e-cards",
          ],
        },
        {
          title: "Standard Fire & Special Perils (SFSP)",
          desc: "Safeguard factories, warehouses, machinery, and commercial buildings against fire, lightning, flooding, and natural calamities.",
          icon: Flame,
          tag: "Property & Fire",
          deliverables: [
            "Building, plant & machinery reinstatement value",
            "Stock and raw material fire risk evaluation",
            "Business interruption & loss of profits rider",
          ],
        },
        {
          title: "Marine Cargo & Transit Insurance",
          desc: "End-to-end protection for domestic and international goods in transit via road, rail, air, and ocean freight.",
          icon: Building,
          tag: "Logistics & Marine",
          deliverables: [
            "Warehouse-to-warehouse all-risk coverage (ICC A/B/C)",
            "Instant digital transit certificates for shipments",
            "Surveyor deployment within 24 hours of damage",
          ],
        },
      ]}
      estimatorComponent={<InsuranceEstimator />}
      workflowTitle="Our Transparent Claim & Advisory Process"
      workflowSubtitle="From initial consultation to policy issuance and claim settlement, we stand with you at every step."
      workflowSteps={[
        {
          step: "01",
          title: "Risk Discovery",
          desc: "We analyze your family or corporate assets, existing coverages, and identify underinsurance gaps.",
        },
        {
          step: "02",
          title: "15+ Multi-Quote Comparison",
          desc: "We generate side-by-side premium and feature comparisons across Tata AIG, HDFC ERGO, ICICI Lombard, and Care.",
        },
        {
          step: "03",
          title: "Policy Issuance",
          desc: "Instant digital policy delivery with verified terms, riders, and tax-saving 80D / 80C certification.",
        },
        {
          step: "04",
          title: "48-Hour Claim Concierge",
          desc: "When a claim arises, our dedicated claims officer manages documentation, surveyor coordination, and cashless approval.",
        },
      ]}
      whyChooseUsTitle="Why InsureTech is the Trusted Advisory Choice"
      whyChooseUsSubtitle="Combining technological transparency with seasoned insurance advisory experience."
      whyChooseUsPoints={[
        {
          title: "IRDAI Certified & Unbiased",
          desc: "We work for our clients, not the insurers. You receive 100% objective policy advice based on claim settlement metrics.",
          icon: Award,
        },
        {
          title: "15+ Insurer Partnerships",
          desc: "Direct tie-ups with India's premier public and private insurance companies guarantee competitive pricing.",
          icon: ShieldCheck,
        },
        {
          title: "48-Hour Claim Assistance",
          desc: "No call center loops. You receive direct phone support from a dedicated claims manager during emergencies.",
          icon: Clock,
        },
        {
          title: "99% Claim Success Rate",
          desc: "Over 15,000 satisfied policyholders trust us for stress-free cashless hospitalizations and vehicle repair approvals.",
          icon: HeartHandshake,
        },
      ]}
      testimonialsTitle="What Our Policyholders Say"
      testimonialsSubtitle="Real feedback from families, vehicle owners, and business leaders protected by InsureTech."
      testimonials={[
        {
          client: "AutoTech Manufacturing, Chennai",
          industry: "Automotive Ancillary",
          quote:
            "InsureTech structured our Group Medical Cover for 450+ shop floor employees and reduced our annual premium by 22% while providing better cashless terms.",
          result: "22% Cost Savings",
          author: "Rajesh Kumar",
          role: "Head of HR & Admin",
        },
        {
          client: "Sriperumbudur Resident",
          industry: "Individual Health",
          quote:
            "When my father required emergency cardiac surgery, InsureTech's claim concierge team handled the cashless approval within 90 minutes. Lifesavers!",
          result: "₹4.8L Cashless Approved",
          author: "Meenakshi S.",
          role: "Senior Consultant",
        },
        {
          client: "Apex Logistics Fleet",
          industry: "Commercial Fleet",
          quote:
            "Managing insurance for 85 commercial trucks used to be a nightmare. InsureTech consolidated our renewals and handles accidental claims seamlessly.",
          result: "85 Vehicles Protected",
          author: "Venkatesh Rao",
          role: "Fleet Operations Director",
        },
      ]}
      faqs={[
        {
          q: "How does InsureTech differ from buying directly from an insurance company?",
          a: "Direct insurance websites only sell their own products and want to maximize their margin. As an IRDAI Certified Advisor, InsureTech compares 15+ top companies side-by-side to find the lowest premium, and more importantly, acts as your advocate during claims to ensure you get paid without dispute.",
        },
        {
          q: "Do you assist during the claim settlement process?",
          a: "Yes! Claim assistance is our primary differentiator. We assign a dedicated Claim Concierge who coordinates hospital cashless approvals, surveyor visits for accident claims, and document submission to achieve our 99% settlement success rate.",
        },
        {
          q: "Which insurance companies do you partner with?",
          a: "We are authorized partners with over 15 leading insurance providers in India, including HDFC ERGO, Tata AIG, ICICI Lombard, Bajaj Allianz, Care Health Insurance, Star Health, United India, and New India Assurance.",
        },
        {
          q: "Can I transfer my existing car policy No Claim Bonus (NCB)?",
          a: "Absolutely. When you switch your motor insurance through InsureTech, we ensure your full accumulated NCB (up to 50%) is preserved, giving you substantial discounts on your own damage premium.",
        },
        {
          q: "How fast can I get a corporate Group Health Insurance quote?",
          a: "We typically generate competitive quotes from multiple insurers within 24 to 48 hours once you provide your employee census (age, gender, dependency count).",
        },
      ]}
      contactPreselectedService="General & Health Insurance"
    />
  );
}
