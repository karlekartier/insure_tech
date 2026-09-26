"use client";

import React from "react";
import { ServiceWebsiteLayout } from "@/components/ServiceWebsiteLayout";
import { PublicationEstimator } from "@/components/estimators/PublicationEstimator";
import {
  BookOpen,
  FileCode2,
  FileText,
  Layers,
  Search,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function PublicationSupportPage() {
  return (
    <ServiceWebsiteLayout
      serviceId="publication-support"
      themeColor="amber"
      divisionTitle="Publication &amp; Document Systems"
      divisionBadge="Publication Support Division"
      divisionBadgeIcon={BookOpen}
      compliancePill="JATS / NLM XML DTD Compliant • PubMed &amp; Crossref Validated • 99.98% Accuracy"
      heroHeadline="Intelligent Digital"
      heroHeadlineHighlight="Publishing &amp; XML Systems"
      heroSubtitle="End-to-end editorial, JATS/NLM XML conversion, APDF document normalization, and metadata syndication for academic journals, university presses, and enterprise publishers."
      heroCtaText="Request Sample Conversion"
      heroSecondaryCtaText="Publication Estimator"
      heroStats={[
        { value: "99.98%", label: "Character Accuracy" },
        { value: "2M+", label: "Pages Converted" },
        { value: "100%", label: "DTD & Schematron Pass" },
        { value: "24-48h", label: "Express Turnaround" },
      ]}
      capabilitiesTitle="Comprehensive Publishing &amp; Data Pipeline"
      capabilitiesSubtitle="Automated and human-in-the-loop workflows converting raw manuscripts, legacy PDFs, and documents into structured, discoverable assets."
      capabilities={[
        {
          title: "JATS / NLM XML Conversion",
          desc: "Full conversion of complex scholarly articles into valid JATS 1.2 / 1.3 XML specifications with precision tagging of mathematical equations (MathML), citations, tables, and author affiliations.",
          icon: FileCode2,
          tag: "Scholarly XML",
          deliverables: [
            "100% PubMed Central (PMC) compliant package",
            "MathML 3.0 & TeX equation preservation",
            "Automated citation validation against Crossref & PubMed",
          ],
        },
        {
          title: "APDF & Document Processing",
          desc: "Standardized document preparation, layout correction, OCR conversion, and vector formatting producing archival-grade Accessible PDF (APDF) and digital print deliverables.",
          icon: FileText,
          tag: "Document Engineering",
          deliverables: [
            "Vector font embedding & high-resolution print PDF",
            "Accessible PDF/UA tagging for screen readers",
            "Automated bookmarking, pagination, and running headers",
          ],
        },
        {
          title: "Journal Metadata & Indexing Support",
          desc: "Generating and depositing rich metadata for digital object identifiers (DOI), abstracting services, and international academic citation indexing databases.",
          icon: Database,
          tag: "Indexation & DOI",
          deliverables: [
            "Crossref schema-compliant DOI registration XML",
            "PubMed Central, Scopus, DOAJ & Google Scholar indexing",
            "ORCID author ID linking and funder registry tagging",
          ],
        },
        {
          title: "High-Volume Batch OCR & Extraction",
          desc: "Digitization of physical journals, historical book archives, and scanned legal documents into structured, searchable digital databases with field extraction.",
          icon: Search,
          tag: "Archival & OCR",
          deliverables: [
            "Multi-engine OCR with character confidence scoring",
            "Key-value field extraction from forms, tables & invoices",
            "Batch naming convention and automated folder indexing",
          ],
        },
        {
          title: "Automated Typesetting & Composition",
          desc: "Automated XML-first typesetting engines producing synchronized PDF, web-HTML, and print-ready proofs simultaneously from a single master data source.",
          icon: Layers,
          tag: "Typesetting",
          deliverables: [
            "Adobe InDesign & 3B2 template automation",
            "Fast author proof turnaround in under 24 hours",
            "Strict adherence to Chicago, APA, IEEE, and Vancouver styles",
          ],
        },
        {
          title: "EPUB3 & Multi-Device eBook Conversion",
          desc: "Reflowable and fixed-layout EPUB3 conversion supporting interactive media, audio narration, and clean rendering across Kindle, Apple Books, and Android.",
          icon: BookOpen,
          tag: "Digital eBooks",
          deliverables: [
            "W3C EPUBCheck 100% validation guarantee",
            "Dynamic font resizing and dark mode styling",
            "Metadata embedding and DRM packaging support",
          ],
        },
      ]}
      estimatorComponent={<PublicationEstimator />}
      workflowTitle="Our Rigorous 4-Stage Editorial &amp; XML Workflow"
      workflowSubtitle="Combining AI-driven schema parsing with expert academic proofreaders for guaranteed zero-defect publishing."
      workflowSteps={[
        {
          step: "01",
          title: "Source Ingestion & Audit",
          desc: "Source Word, PDF, or TeX manuscripts are audited for fonts, missing reference citations, math equations, and figure resolutions.",
        },
        {
          step: "02",
          title: "XML Tagging & MathML",
          desc: "Content is structured into JATS/NLM XML with full tagging of metadata, body paragraphs, tables, and MathML equations.",
        },
        {
          step: "03",
          title: "Automated Schematron & DTD QA",
          desc: "Files undergo multi-pass automated validation against official DTD schemas and custom Schematron business rules.",
        },
        {
          step: "04",
          title: "Proof Delivery & Indexing",
          desc: "Final validated APDF, XML, and DOI metadata packages are packaged and delivered securely via SFTP or repository API.",
        },
      ]}
      whyChooseUsTitle="Why Academic &amp; Enterprise Publishers Choose Us"
      whyChooseUsSubtitle="Flawless accuracy, strict schema compliance, and dependable delivery calendars."
      whyChooseUsPoints={[
        {
          title: "99.98% Character Accuracy",
          desc: "Every character, accent, mathematical symbol, and Greek notation is preserved with double-key verification quality.",
          icon: Award,
        },
        {
          title: "Zero-Defect DTD Compliance",
          desc: "We validate against JATS, BITS, TEI, and custom client DTDs to ensure 100% first-attempt repository acceptance.",
          icon: CheckCircle2,
        },
        {
          title: "Rapid 24-48h SLA",
          desc: "Whether you publish monthly journals or daily monograph releases, we meet aggressive production deadlines.",
          icon: Clock,
        },
        {
          title: "Dedicated Project Managers",
          desc: "Direct communication with seasoned publication coordinators who understand scholarly editorial nuances.",
          icon: ShieldCheck,
        },
      ]}
      testimonialsTitle="Publisher &amp; Editorial Testimonials"
      testimonialsSubtitle="What academic editors, journal societies, and production managers say about our services."
      testimonials={[
        {
          client: "International Journal of Medical Research",
          industry: "Scholarly Publishing",
          quote:
            "InsureTech converts over 60 articles every month into JATS XML for our PubMed Central deposit. We haven't had a single DTD validation rejection in three years.",
          result: "100% PubMed Acceptance",
          author: "Dr. Alistair Finch",
          role: "Managing Editor",
        },
        {
          client: "Global Academic Press, Singapore",
          industry: "Monographs & Books",
          quote:
            "Their APDF normalization process digitized our archive of 4,000 legacy books into searchable, accessible PDF and EPUB3 files on schedule and under budget.",
          result: "4,000 Books Digitized",
          author: "Evelyn Tan",
          role: "Director of Digital Production",
        },
        {
          client: "TechnoScience Review Society",
          industry: "Engineering Journals",
          quote:
            "The accuracy of their MathML conversion for heavy LaTeX engineering manuscripts is astounding. Proof correction cycles were cut in half.",
          result: "50% Faster Proof Cycles",
          author: "Prof. H. R. Natarajan",
          role: "Editor-in-Chief",
        },
      ]}
      faqs={[
        {
          q: "What is JATS XML and why is it required for academic journals?",
          a: "JATS (Journal Article Tag Suite) is the international standard XML format used by PubMed Central, Crossref, and leading academic libraries. It enables automated preservation, search indexing, citation linking, and multi-format publishing without losing scientific structure.",
        },
        {
          q: "Can you convert manuscripts containing complex mathematical formulas and tables?",
          a: "Yes. Our team specializes in complex STM (Scientific, Technical, Medical) content. We convert intricate formulas into standards-compliant MathML 3.0 or vector SVG, and format multi-column, multi-page data tables with precision.",
        },
        {
          q: "What does APDF mean in your document processing workflow?",
          a: "APDF refers to Accessible & Archival PDF workflows where digital documents are structured with proper font subsets, vector graphics, tagged hierarchies (PDF/UA), and searchable metadata for long-term preservation and regulatory compliance.",
        },
        {
          q: "Do you offer a free sample conversion for new publishers?",
          a: "Yes! We provide a complimentary sample conversion of up to 50 pages or 2 full journal articles so you can inspect our XML tagging quality, DTD validation reports, and APDF rendering before signing any contract.",
        },
        {
          q: "How are files transferred and secured during processing?",
          a: "We support automated secure SFTP workflows, encrypted cloud storage (AWS S3 / Google Cloud), or direct integration with your manuscript submission systems (such as Editorial Manager or Open Journal Systems). All data is protected under strict confidentiality NDAs.",
        },
      ]}
      contactPreselectedService="Publication Support & XML Services"
    />
  );
}
