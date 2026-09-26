"use client";

import React from "react";
import { ServiceWebsiteLayout } from "@/components/ServiceWebsiteLayout";
import { MedicalBillingEstimator } from "@/components/estimators/MedicalBillingEstimator";
import { MedicalBillingServiceTracks } from "@/components/MedicalBillingServiceTracks";
import { ClaimToPaymentFlow } from "@/components/ClaimToPaymentFlow";
import {
  Stethoscope,
  Activity,
  DollarSign,
  ShieldCheck,
  RefreshCw,
  FileCheck,
  Zap,
  TrendingUp,
  Clock,
  Award,
  HeartPulse,
  HeartHandshake,
  UserCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function MedicalBillingPage() {
  return (
    <ServiceWebsiteLayout
      serviceId="medical-billing"
      themeColor="teal"
      divisionTitle="Medical Billing &amp; RCM Services"
      divisionBadge="Healthcare RCM Division"
      divisionBadgeIcon={Stethoscope}
      compliancePill="HIPAA Title II Compliant • AAPC & AHIMA Certified Coders • 98.6% Clean Claims"
      heroHeadline="Medical Billing &amp;"
      heroHeadlineHighlight="Revenue Cycle Management Solutions"
      heroSubtitle="We provide reliable and efficient medical billing and revenue cycle management solutions designed to help healthcare providers streamline their billing operations, improve workflow efficiency, and focus on patient care."
      heroCtaText="Partner With Us"
      heroSecondaryCtaText="Calculate RCM Revenue"
      heroStats={[
        { value: "98.6%", label: "First-Pass Clean Claims" },
        { value: "↓ 45%", label: "Average A/R Days Reduced" },
        { value: "<24h", label: "Payment Posting SLA" },
        { value: "100%", label: "HIPAA Title II & HITECH Compliant" },
      ]}
      capabilitiesTitle="Our Services"
      capabilitiesSubtitle="We provide reliable and efficient medical billing and revenue cycle management solutions designed to help healthcare providers streamline their billing operations, improve workflow efficiency, and focus on patient care."
      capabilities={[
        {
          title: "Medical Billing",
          desc: "End-to-end medical billing workflows from demographic entry and charge capture to claim scrubbing, submission, and payment reconciliation.",
          icon: Stethoscope,
          tag: "Core Service",
          deliverables: [
            "Clean claim preparation & electronic batching",
            "Fee schedule alignment & charge verification",
            "Continuous payment reconciliation",
          ],
        },
        {
          title: "Revenue Cycle Management",
          desc: "Closed-loop revenue cycle management coordinating registration, clinical coding, submission, remittance, and proactive cash flow optimization.",
          icon: TrendingUp,
          tag: "Full RCM",
          deliverables: [
            "End-to-end revenue cycle synchronization",
            "Clean-claim rate maximization (98%+)",
            "Financial visibility & workflow audits",
          ],
        },
        {
          title: "Insurance Eligibility Verification",
          desc: "Real-time verification of active patient coverage, co-pays, deductibles, and pre-authorization requirements prior to appointments.",
          icon: UserCheck,
          tag: "Front-End",
          deliverables: [
            "Real-time insurance eligibility checks",
            "Prior-authorization submission & tracking",
            "Patient financial responsibility calculation",
          ],
        },
        {
          title: "Claims Submission",
          desc: "Fast, secure batch transmission of electronic medical claims (EDI 837P / 837I) to commercial payers and clearinghouses with real-time tracking.",
          icon: Zap,
          tag: "EDI 837",
          deliverables: [
            "Daily electronic batch transmission",
            "Clearinghouse 999 & 277 acknowledgment audits",
            "Rejection error handling within 4 hours",
          ],
        },
        {
          title: "Payment Posting",
          desc: "Accurate daily recording of electronic remittance advices (ERA / 835) and paper explanation of benefits (EOB) with adjustment verification.",
          icon: DollarSign,
          tag: "Remittance",
          deliverables: [
            "Automated line-item ERA / EOB posting",
            "Contractual allowance & write-off checks",
            "Prompt secondary and tertiary insurance billing",
          ],
        },
        {
          title: "Denial Management",
          desc: "Systematic review of denial codes (CARC/RARC), root-cause categorization, and structured clinical appeals submitted within 48 hours.",
          icon: RefreshCw,
          tag: "Denial Recovery",
          deliverables: [
            "Denial reason classification & trend analysis",
            "Clinical record appeal preparation within 48h",
            "Root-cause operational prevention feedback",
          ],
        },
        {
          title: "AR Follow-up",
          desc: "Proactive tracking and direct outreach on unpaid balances and claims aging beyond 30 days to minimize days in A/R and recover cash.",
          icon: Clock,
          tag: "Cash Recovery",
          deliverables: [
            "Direct telephone follow-up with payer reps",
            "Aging bucket reduction (>90 days cut to <8%)",
            "Prompt unpaid claim resolution workflows",
          ],
        },
        {
          title: "Medical Coding Support",
          desc: "Expert diagnostic and procedure coding by AAPC & AHIMA certified professionals adhering to official ICD-10-CM, CPT, and HCPCS guidelines.",
          icon: FileCheck,
          tag: "Certified Coding",
          deliverables: [
            "ICD-10-CM & CPT procedure code assignment",
            "Compliant modifier optimization (-25, -59, -76)",
            "Physician documentation clarification queries",
          ],
        },
        {
          title: "Patient Billing Support",
          desc: "Compassionate, professional assistance for patients regarding clear balance statements, billing inquiries, and payment processing.",
          icon: HeartHandshake,
          tag: "Patient Care",
          deliverables: [
            "Clear patient balance statement generation",
            "Billing inquiry telephone assistance",
            "Transparent payment reconciliation",
          ],
        },
        {
          title: "Reporting & Analytics",
          desc: "Comprehensive operational dashboards tracking gross/net collection ratios, days in A/R, denial patterns, and provider productivity.",
          icon: Activity,
          tag: "KPI Dashboards",
          deliverables: [
            "Monthly executive practice financial reviews",
            "Aging waterfall and denial hotspot metrics",
            "Provider-level productivity and RVU reports",
          ],
        },
      ]}
      contactTitle="Partner With Us"
      contactSubtitle="Looking for a reliable medical billing partner? Let's discuss your requirements and build a smarter revenue cycle together."
      extraSections={
        <div className="space-y-16">
          {/* Detailed 3-Track Sub-Services Breakdown & Our Commitment from Document */}
          <MedicalBillingServiceTracks />

          {/* Interactive 8-Stage Claim to Payment Flow Explorer */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClaimToPaymentFlow themeColor="teal" />
          </div>
        </div>
      }
      estimatorComponent={<MedicalBillingEstimator />}
      workflowTitle="8-Stage Onboarding & Revenue-Cycle Pipeline"
      workflowSubtitle="From initial specialty scope assessment and secure EHR integration through multi-tier scrubbing, payment posting, and denial resolution."
      workflowSteps={[
        {
          step: "01",
          title: "Specialty & Scope Assessment",
          desc: "Review provider specialty, clinical documentation standards, EHR/PMS systems, and approved service scope.",
        },
        {
          step: "02",
          title: "Payer Rules & Compliance Setup",
          desc: "Confirm payer-specific billing rules, authorization requirements, privacy procedures, and access permissions.",
        },
        {
          step: "03",
          title: "Secure System Integration",
          desc: "Establish secure data-transfer processes and role-based VPN access to your existing practice management software.",
        },
        {
          step: "04",
          title: "Intake & Eligibility Review",
          desc: "Verify patient demographics, active coverage, co-pays, deductibles, and pre-authorizations prior to encounter.",
        },
        {
          step: "05",
          title: "Charge Entry & Coding Execution",
          desc: "Translate authorized documentation into accurate ICD-10 and CPT codes adhering to official coding guidelines.",
        },
        {
          step: "06",
          title: "Multi-Tier Quality Scrubbing",
          desc: "Conduct triple-pass validation checking for NCCI edits, modifier accuracy, and payer-specific submission rules.",
        },
        {
          step: "07",
          title: "Submission & ERA Payment Posting",
          desc: "Submit EDI 837 batches daily, balance 835 remittance advices, and dispatch secondary claims promptly.",
        },
        {
          step: "08",
          title: "Denial Resolution & A/R Follow-Up",
          desc: "Appeal denied claims within 48 hours with clinical records and actively follow up on unpaid balances.",
        },
      ]}
      whyChooseUsTitle="Accuracy. Efficiency. Reliability."
      whyChooseUsSubtitle="We combine credentialed medical billing and coding professionals, structured processes, and technology-enabled solutions to deliver quality support tailored to each practice."
      whyChooseUsPoints={[
        {
          title: "98.6% Clean Claim Rate",
          desc: "Triple-layer algorithmic scrubbing identifies errors prior to payer transmission, eliminating avoidable administrative denials.",
          icon: Award,
        },
        {
          title: "Full HIPAA Title II Security",
          desc: "Encrypted data pipelines, role-based access controls, and audited workstations safeguard Protected Health Information (PHI).",
          icon: ShieldCheck,
        },
        {
          title: "EHR / PMS Compatibility",
          desc: "We work directly inside your existing software: Epic, Cerner, AthenaHealth, eClinicalWorks, Kareo, NextGen, and AdvancedMD.",
          icon: HeartPulse,
        },
        {
          title: "Transparent Operational SLAs",
          desc: "Claims submitted within 24-48 hours, payments posted within 24 hours, and denials appealed with clinical records in 48 hours.",
          icon: Clock,
        },
      ]}
      testimonialsTitle="Provider & Practice Proof Points"
      testimonialsSubtitle="What physicians, practice administrators, and surgical centers say about our revenue-cycle operations."
      testimonials={[
        {
          client: "Northside Cardiology Associates",
          industry: "Cardiology Specialty Practice (4 Physicians)",
          quote:
            "InsureTech recovered over $140,000 in aged claims older than 90 days that our previous billing company had written off as uncollectible.",
          result: "+$140k Recovered",
          author: "Dr. Marcus Vance, MD",
          role: "Managing Partner",
        },
        {
          client: "Family Care Medical Group",
          industry: "Primary Care & Pediatrics Clinic",
          quote:
            "Our days in A/R plummeted from 54 days down to 22 days within four months of partnering with InsureTech. Cash flow has never been more predictable.",
          result: "A/R Cut to 22 Days",
          author: "Sarah Jenkins",
          role: "Practice Administrator",
        },
        {
          client: "Tri-County Orthopedic & Spine",
          industry: "Orthopedic Surgical Center",
          quote:
            "Their AAPC certified coders understand complex surgical modifiers and prior authorizations. Our denial rate dropped from 14% to less than 2.8%.",
          result: "Denials <2.8%",
          author: "Robert Chen, MD",
          role: "Clinical Director",
        },
      ]}
      faqs={[
        {
          q: "Do you support all medical specialties?",
          a: "Yes. Our team includes certified coders and billing specialists experienced across Primary Care, Internal Medicine, Cardiology, Orthopedics, General Surgery, Pediatrics, Radiology, Mental Health, and multi-specialty practices. Specialty support is aligned with the documentation standards and qualifications of the assigned team.",
        },
        {
          q: "Do you provide both medical billing and coding services?",
          a: "Yes. The service scope can be customized to include billing only, certified coding only, or a complete end-to-end revenue cycle management (RCM) workflow depending on your healthcare organization's specific requirements.",
        },
        {
          q: "How is patient data protected under HIPAA regulations?",
          a: "Patient information is protected through strict HIPAA Title II and HITECH Act protocols. We execute formal Business Associate Agreements (BAA), utilize end-to-end encrypted connections (TLS 1.3 / AES-256), enforce role-based access controls (RBAC), disable external storage/printing on billing terminals, and maintain comprehensive audit logs.",
        },
        {
          q: "How do you handle denial management and appeals?",
          a: "Our Denial Management Protocol mandates that clearinghouse rejections are reviewed and fixed within 4 hours. Payer denials (CARC/RARC codes) are categorized by root cause, supplemented with authorized clinical documentation, and re-submitted or formally appealed within 48 hours.",
        },
        {
          q: "Do you conduct sample-based coding quality audits?",
          a: "Yes. Our senior coding supervisors perform periodic, randomized sample-based quality audits across clinical charts. This ensures coding accuracy benchmarks of 98%+ and identifies documentation improvement opportunities for provider feedback.",
        },
        {
          q: "Can reports and dashboards be customized to our practice KPIs?",
          a: "Absolutely. Reports can be tailored around your agreed operational metrics, including gross and net collection percentages, first-pass clean claim rates, days in A/R, denial frequency by payer, and provider-level RVU productivity.",
        },
        {
          q: "What practice management systems (PMS) and EHR software do you work with?",
          a: "Our specialists operate directly inside leading EHR/PMS software including Epic, Cerner, AthenaHealth, eClinicalWorks, Kareo, NextGen, AdvancedMD, DrChrono, and Allscripts via secure remote connection, requiring zero data migration.",
        },
        {
          q: "Are clinical decisions or medical treatment advisories included?",
          a: "No. As outlined in our compliance framework, medical billing and coding support forms the administrative side of healthcare revenue operations. Administrative support does not replace clinical judgment, which remains exclusively with qualified healthcare professionals.",
        },
      ]}
      contactPreselectedService="Medical Billing & Revenue Cycle Management"
    />
  );
}
