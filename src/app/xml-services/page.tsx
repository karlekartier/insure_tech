import React from "react";
import Link from "next/link";
import { XmlPipelineAnimation } from "@/components/XmlPipelineAnimation";
import { XmlTransformerDemo } from "@/components/XmlTransformerDemo";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  FileCode2,
  FileCheck2,
  ArrowRight,
  Database,
  Binary,
  Layers,
  Sparkles,
  GitBranch,
  RefreshCw,
  FolderSync,
  Globe2,
  BookOpen,
  CheckCircle2,
  Code2
} from "lucide-react";

export const metadata = {
  title: "XML Services | XML Data Conversion, Validation and Integration | Insure Tech Services",
  description:
    "Explore XML creation, conversion, validation, transformation, parsing, batch processing, and integration services from Insure Tech Services PVT LTD.",
  keywords: [
    "XML services",
    "XML data conversion",
    "XML validation",
    "XML transformation",
    "XML integration",
    "XML processing services",
    "XSLT transformation",
    "XSD schema validation",
  ],
};

const XML_SERVICES = [
  {
    title: "XML File Creation",
    desc: "Creation of structured XML documents based on business templates, source files, schemas, or exact partner specifications.",
    icon: FileCode2,
  },
  {
    title: "XML Data Conversion",
    desc: "Conversion of data from Excel spreadsheets, CSV tabular files, JSON payloads, relational SQL databases, or legacy formats into compliant XML.",
    icon: RefreshCw,
  },
  {
    title: "XML Validation & Audit",
    desc: "Checking XML documents against XSD schemas, DTD declarations, formatting rules, or custom business logic to guarantee 100% compliance.",
    icon: FileCheck2,
  },
  {
    title: "XML Parsing and Extraction",
    desc: "Extracting selected data elements and attributes from massive XML feeds for downstream reporting, migration, or ETL pipelines.",
    icon: Binary,
  },
  {
    title: "XML Transformation (XSLT)",
    desc: "Transforming XML payloads into another XML structure, HTML, flat text, JSON, or modern API formats using XSLT 2.0 / 3.0 scripts.",
    icon: GitBranch,
  },
  {
    title: "XML Data Mapping",
    desc: "Developing bidirectional mapping crosswalks connecting source fields to target XML tags, namespaces, and attribute constraints.",
    icon: Layers,
  },
  {
    title: "XML Batch Processing",
    desc: "High-throughput processing of tens of thousands of XML files using standardized naming, automated validation, and delivery rules.",
    icon: FolderSync,
  },
  {
    title: "XML Integration & APIs",
    desc: "Connecting automated XML exchange workflows with web portals, REST/SOAP microservices, cloud storage, or partner B2B endpoints.",
    icon: Globe2,
  },
  {
    title: "XML Cleanup & Formatting",
    desc: "Standardizing indentation, encoding (UTF-8/UTF-16), character entity sanitation, namespace declarations, and structural aesthetics.",
    icon: Code2,
  },
  {
    title: "XML Documentation & Dictionaries",
    desc: "Preparing comprehensive data dictionaries, element definitions, field mappings, validation notes, and developer guides.",
    icon: BookOpen,
  },
];

const USE_CASES = [
  {
    title: "Healthcare & Payer Exchange",
    desc: "Standardized transmission of EDI 837/835, HL7 XML, clinical summaries, and eligibility feeds between payers and providers.",
  },
  {
    title: "B2B Enterprise Interoperability",
    desc: "Connecting supply chain systems, ERP platforms, and third-party accounting applications through automated schema validation.",
  },
  {
    title: "Product Catalogs & Pricing Data",
    desc: "Publishing structured product listings, SKU metadata, inventory feeds, and pricing tiers across digital channels.",
  },
  {
    title: "Content Publishing & Syndication",
    desc: "Authoring and converting editorial content, legal documentation, and technical manuals into standardized publishing DTDs.",
  },
  {
    title: "Configuration & System Schemas",
    desc: "Creating and verifying strict XML configuration files for software deployment, enterprise platforms, and data pipelines.",
  },
  {
    title: "Financial & Tax Data Reporting",
    desc: "Generating compliant regulatory filings, audit records, and banking exchange documents adhering to governmental XML schemas.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can you process high-volume batches of XML files?",
    answer:
      "Yes. Our automated batch engines are engineered to process tens of thousands of XML files daily. Automated exception logging immediately flags any records failing schema validation without halting the entire batch queue.",
    category: "Scalability",
  },
  {
    question: "Can XML data be integrated directly into our proprietary application or database?",
    answer:
      "Yes. We support direct integration via REST APIs, webhooks, SQL database connectors, secure FTP (sFTP), and message queues, allowing transformed XML payloads to ingest directly into your production software.",
    category: "Integration",
  },
  {
    question: "Do you supply complete XML schema documentation and field mapping dictionaries?",
    answer:
      "Yes. Every conversion or integration project includes comprehensive data dictionaries, XSD schemas, sample payload files, element definitions, and mapping documentation to support future maintenance.",
    category: "Documentation",
  },
  {
    question: "How do you handle schema mismatches or missing values during transformation?",
    answer:
      "Our validation gatekeeper catches schema deviations, illegal characters, or missing required attributes in real-time. Exceptions are routed to an audit dashboard with line-number diagnostics and remediation recommendations.",
    category: "Error Handling",
  },
  {
    question: "Do you support XSLT transformations between differing XML formats?",
    answer:
      "Yes. We specialize in XSLT 1.0, 2.0, and 3.0 stylesheet transformations, restructuring legacy XML formats into modernized enterprise schemas or converting XML to JSON/HTML as required.",
    category: "XSLT",
  },
];

export default function XmlServicesPage() {
  return (
    <div className="relative overflow-hidden tech-grid">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Structured Data Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
            Professional <span className="text-gradient-emerald">XML Services</span> for <br />
            Data Conversion &amp; System Integration
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            Insure Tech Services PVT LTD delivers end-to-end XML solutions for organizations requiring structured data creation, validation, transformation, processing, and seamless API integration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-[#4d915d] hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Discuss XML Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--text-primary)] glass-panel hover:border-emerald-500/40 transition-colors"
            >
              <span>Explore Data Pipeline</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= ANIMATED SVG PIPELINE ================= */}
      <section id="pipeline" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <XmlPipelineAnimation />
      </section>

      {/* ================= INTERACTIVE CODE TRANSFORMER DEMO ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <XmlTransformerDemo />
      </section>

      {/* ================= 10 SUB-SERVICES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Engineering Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Comprehensive XML Service Catalog
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Tailored solutions available as dedicated ad-hoc conversions or fully managed recurring pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {XML_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= COMMON XML USE CASES ================= */}
      <section className="py-16 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Industry Applications
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Enterprise XML Use Cases
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Where structured XML drives automated interoperability and data integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{uc.title}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FaqAccordion
          items={FAQ_ITEMS}
          title="XML & Structured Data FAQs"
          subtitle="Key technical details on batch throughput, XSD validation, data mapping, and API delivery."
        />
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061b12] to-[#0a291b] border border-emerald-500/40 text-center space-y-6 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Standardize Your XML Workflows?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Submit sample source files or schemas to our technical team for a complimentary validation audit and conversion test.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-[#73cb71] hover:bg-[#88dc86] transition-all shadow-lg"
            >
              <span>Transmit File Details / Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
