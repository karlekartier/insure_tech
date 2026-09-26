"use client";

import React from "react";
import { ServiceWebsiteLayout } from "@/components/ServiceWebsiteLayout";
import { MedicalBillingEstimator } from "@/components/estimators/MedicalBillingEstimator";
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
} from "lucide-react";

export default function MedicalBillingPage() {
  return (
    <ServiceWebsiteLayout
      serviceId="medical-billing"
      themeColor="teal"
      divisionTitle="Medical Billing &amp; RCM Services"
      divisionBadge="Medical Billing Division"
      divisionBadgeIcon={Stethoscope}
      compliancePill="HIPAA Title II Compliant • AAPC Certified Coders • 98.6% Clean Claims"
      heroHeadline="Accelerated Healthcare"
      heroHeadlineHighlight="Revenue Cycle Management"
      heroSubtitle="Maximize collections, slash denial rates to under 3%, and streamline provider cash flow with certified medical coding, proactive claims scrubbing, and aggressive AR recovery."
      heroCtaText="Claim Free Practice Audit"
      heroSecondaryCtaText="Calculate RCM Revenue"
      heroStats={[
        { value: "98.6%", label: "First-Pass Clean Claims" },
        { value: "↓ 45%", label: "Average A/R Days Reduced" },
        { value: "100%", label: "HIPAA Title II Compliant" },
        { value: "<48h", label: "Turnaround on Claims" },
      ]}
      capabilitiesTitle="Complete Revenue-Cycle Lifecycle"
      capabilitiesSubtitle="From front-desk patient eligibility verification to electronic remittance reconciliation and denial appeal resolution."
      capabilities={[
        {
          title: "Patient Eligibility & Prior Authorization",
          desc: "Real-time verification of active insurance coverage, co-pays, deductibles, and secondary payer rules before appointments to stop denials before they happen.",
          icon: ShieldCheck,
          tag: "Front-End RCM",
          deliverables: [
            "Same-day insurance eligibility check",
            "Prior-authorization submission & status tracking",
            "Patient financial responsibility calculation",
          ],
        },
        {
          title: "AAPC Certified Medical Coding",
          desc: "Expert diagnostic and procedure coding by AAPC & AHIMA certified professionals adhering to official ICD-10-CM, CPT-4, and HCPCS Level II guidelines.",
          icon: FileCheck,
          tag: "Coding & Audits",
          deliverables: [
            "Specialty-specific chart review & clinical coding",
            "Modifier optimization (-25, -59, -76) avoiding audits",
            "Documentation deficiency queries to clinicians",
          ],
        },
        {
          title: "Charge Capture & Claims Scrubbing",
          desc: "Pre-submission algorithmic validation checking for National Correct Coding Initiative (NCCI) edits, fee schedule accuracy, and payer-specific submission rules.",
          icon: Activity,
          tag: "Clean Claims",
          deliverables: [
            "Triple-layer rule engine scrubbing before transmission",
            "EDI 837 electronic batch submission to clearinghouses",
            "Daily clearinghouse rejection error handling within 4 hours",
          ],
        },
        {
          title: "Payment Posting & ERA/EOB Reconciliation",
          desc: "Daily logging of electronic remittance advices (ERA / 835) and paper Explanation of Benefits (EOB), balancing contractual write-offs and secondary claim dispatch.",
          icon: DollarSign,
          tag: "Cash Posting",
          deliverables: [
            "Automated line-item reconciliation against fee schedules",
            "Prompt secondary and tertiary insurance billing",
            "Accurate patient responsibility balance invoicing",
          ],
        },
        {
          title: "Aggressive A/R Follow-up & Denial Management",
          desc: "Proactive tracking of unpaid claims aging beyond 30 days with root-cause categorization, clinical appeal documentation, and payer escalation.",
          icon: RefreshCw,
          tag: "Denial Recovery",
          deliverables: [
            "Appeals submitted within 48 hours with clinical records",
            "Aging bucket reduction (>90 days reduced to <8%)",
            "Direct telephone follow-up with payer provider reps",
          ],
        },
        {
          title: "Executive RCM Analytics & Reporting",
          desc: "Transparent monthly financial dashboards tracking gross collection rates, net collection rates, days in A/R, and denial frequency by provider and payer.",
          icon: TrendingUp,
          tag: "KPI Reporting",
          deliverables: [
            "Monthly executive practice review & financial summary",
            "Clean claim percentage tracking and trend analysis",
            "Provider-level productivity and RVU reporting",
          ],
        },
      ]}
      estimatorComponent={<MedicalBillingEstimator />}
      workflowTitle="Our Closed-Loop Revenue-Cycle Pipeline"
      workflowSubtitle="Seamless synchronization between your clinic EHR/PMS and our certified billing operations center."
      workflowSteps={[
        {
          step: "01",
          title: "Demographics & Eligibility",
          desc: "Patient demographic and insurance data is verified directly inside your EHR system prior to clinical encounter.",
        },
        {
          step: "02",
          title: "Superbill & Code Review",
          desc: "Certified coders translate clinical notes into accurate ICD-10 and CPT codes with appropriate modifiers.",
        },
        {
          step: "03",
          title: "Claim Scrubbing & EDI 837",
          desc: "Claims undergo 3-stage validation and are transmitted electronically to Medicare, Medicaid, and commercial payers.",
        },
        {
          step: "04",
          title: "ERA Posting & Denial Appeal",
          desc: "Payments are balanced daily; any unpaid or partially denied claims are analyzed and appealed within 48 hours.",
        },
      ]}
      whyChooseUsTitle="Why Healthcare Practices Partner with InsureTech"
      whyChooseUsSubtitle="Higher collection rates, reduced overhead, and full HIPAA regulatory compliance."
      whyChooseUsPoints={[
        {
          title: "98.6% Clean Claim Rate",
          desc: "Our pre-submission scrubbing catches errors before payers do, ensuring first-pass acceptance and prompt cash.",
          icon: Award,
        },
        {
          title: "Full HIPAA Title II Security",
          desc: "Encrypted VPN tunnels, role-based access controls, and audited workstations safeguard Protected Health Information (PHI).",
          icon: ShieldCheck,
        },
        {
          title: "EHR / PMS Compatibility",
          desc: "We work directly inside your existing software: Epic, Cerner, AthenaHealth, eClinicalWorks, Kareo, NextGen, and AdvancedMD.",
          icon: HeartPulse,
        },
        {
          title: "Zero Setup Fee & Fast Onboarding",
          desc: "Seamless transition with zero disruption to your daily clinical workflow. You start seeing results in 7 business days.",
          icon: Clock,
        },
      ]}
      testimonialsTitle="Provider &amp; Clinic Testimonials"
      testimonialsSubtitle="What physicians, practice administrators, and surgical centers say about our RCM results."
      testimonials={[
        {
          client: "Northside Cardiology Associates",
          industry: "Specialty Practice (4 Physicians)",
          quote:
            "InsureTech recovered over $140,000 in aged claims older than 90 days that our previous billing company had written off as uncollectible.",
          result: "+$140k Recovered",
          author: "Dr. Marcus Vance, MD",
          role: "Managing Partner",
        },
        {
          client: "Family Care Medical Group",
          industry: "Primary Care Clinic",
          quote:
            "Our days in A/R plummeted from 54 days down to 22 days within four months of partnering with InsureTech. Cash flow has never been more predictable.",
          result: "A/R Cut to 22 Days",
          author: "Sarah Jenkins",
          role: "Practice Administrator",
        },
        {
          client: "Tri-County Orthopedic & Spine",
          industry: "Surgical Center",
          quote:
            "Their AAPC certified coders understand complex surgical modifiers and prior authorizations. Our denial rate dropped from 14% to less than 2.8%.",
          result: "Denials <2.8%",
          author: "Robert Chen, MD",
          role: "Clinical Director",
        },
      ]}
      faqs={[
        {
          q: "What practice management (PMS) and EHR software do you support?",
          a: "Our billing specialists are proficient across all leading platforms including Epic, Cerner, AthenaHealth, eClinicalWorks, Kareo, NextGen, AdvancedMD, DrChrono, and Allscripts. We log in remotely to your existing system with zero data migration required.",
        },
        {
          q: "How do you protect patient data under HIPAA regulations?",
          a: "All operations are conducted under strict HIPAA Title II and HITECH Act compliance. We execute Business Associate Agreements (BAA), use end-to-end encrypted connections (TLS 1.3 / AES-256), restrict USB/printing capabilities on billing terminals, and maintain continuous access auditing.",
        },
        {
          q: "How quickly do you resolve denied or rejected claims?",
          a: "Our Denial Management Protocol mandates that any clearinghouse rejection is addressed within 4 hours, and formal payer denials (CARC/RARC codes) are reviewed, supplemented with clinical documentation, and re-submitted or appealed within 48 hours.",
        },
        {
          q: "What is your pricing model for medical billing services?",
          a: "We operate on a transparent performance-based percentage of collections model (typically 3.5% to 6.5% depending on specialty and monthly billing volume). We only get paid when you collect, aligning our incentives directly with your practice's financial success.",
        },
        {
          q: "What is included in the Free Practice Revenue Cycle Audit?",
          a: "Our free audit analyzes a representative sample of your past 90 days of claims. We identify recurring denial codes, missing modifier revenue opportunities, fee schedule discrepancies, and provide an actionable report showing exactly how much cash flow is being left on the table.",
        },
      ]}
      contactPreselectedService="Medical Billing & Revenue Cycle Management"
    />
  );
}
