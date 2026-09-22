import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ApdfPipelineVisual } from "@/components/ApdfPipelineVisual";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  FileText,
  ScanText,
  FolderArchive,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  FileCheck2,
  Workflow,
  Search,
  Lock,
  Binary
} from "lucide-react";

export const metadata = {
  title: "APDF and Document Processing Services | Insure Tech Services",
  description:
    "Discover APDF-related document processing, conversion, validation, formatting, extraction, classification, and workflow support services from Insure Tech Services PVT LTD.",
  keywords: [
    "APDF services",
    "document processing services",
    "PDF processing",
    "document conversion",
    "document automation",
    "document validation",
    "OCR data extraction",
    "document indexing",
  ],
};

const SUB_SERVICES = [
  {
    title: "Document Conversion",
    desc: "Conversion of legacy paper records, unstructured files, and legacy image formats into standardized PDF, APDF, or approved digital outputs.",
    icon: FileText,
  },
  {
    title: "Automated Document Generation",
    desc: "Dynamic creation of standardized digital documents using pre-approved templates, structured database values, or application feeds.",
    icon: Sparkles,
  },
  {
    title: "Document Layout Formatting",
    desc: "Correcting visual alignment, page arrangement, headers, footers, pagination, and structural consistency across massive document pools.",
    icon: Layers,
  },
  {
    title: "OCR Data Extraction",
    desc: "Extracting critical text, tables, policy numbers, dates, line items, and metadata from scanned documents for downstream processing.",
    icon: Binary,
  },
  {
    title: "Document Validation & Verification",
    desc: "Two-stage verification auditing page count, image resolution, required field presence, barcode clarity, and quality metrics.",
    icon: FileCheck2,
  },
  {
    title: "Batch Document Operations",
    desc: "Processing thousands of incoming records daily through automated classification rules, standardized folder trees, and delivery schedules.",
    icon: Workflow,
  },
  {
    title: "Intelligent Classification",
    desc: "Organizing documents by document type, policyholder, department, date, category, or customer account for structured filing.",
    icon: ScanText,
  },
  {
    title: "Searchable Indexing",
    desc: "Injecting searchable metadata tags, XML attributes, and OCR text layers to enable sub-second document search and retrieval.",
    icon: Search,
  },
  {
    title: "Secure Archival Support",
    desc: "Preparing files and metadata for compliant long-term retention, encrypted storage, and audit-ready lifecycle management.",
    icon: FolderArchive,
  },
  {
    title: "System Integration",
    desc: "Connecting document processing output directly to your core ERP, CRM, EHR, claims platform, or cloud repositories via secure APIs.",
    icon: Lock,
  },
];

const BENEFITS = [
  "Eliminates repetitive manual paper handling and data entry",
  "Improves formatting consistency across enterprise document repositories",
  "Enables rapid search and instant retrieval via full-text indexed metadata",
  "Prevents filing errors, lost pages, and incorrect document classification",
  "Supports centralized, role-based digital document workflows",
  "Enhances regulatory audit readiness and historical traceability",
  "Scales seamlessly to accommodate high-volume spikes without backlog",
];

const FAQ_ITEMS = [
  {
    question: "What types of business documents can be processed?",
    answer:
      "We process a wide range of documents including insurance claims, medical records, EOBs, invoices, policy contracts, enrollment forms, legal agreements, receipts, and technical reports in physical paper or digital format.",
    category: "Supported Documents",
  },
  {
    question: "Can documents be processed in high-volume bulk batches?",
    answer:
      "Yes. Our automated ingestion and extraction pipelines are built to handle tens of thousands of documents daily with standardized batch naming conventions, exception tracking, and scheduled delivery.",
    category: "Batch Processing",
  },
  {
    question: "Can APDF services integrate directly with our existing document management software?",
    answer:
      "Yes. Transformed documents and extracted metadata can be delivered via REST APIs, webhook triggers, direct database feeds, or structured cloud storage drops (AWS S3, Google Cloud Storage, Azure Blob).",
    category: "Software Integration",
  },
  {
    question: "How do you ensure OCR accuracy on poor-quality or handwritten scans?",
    answer:
      "We employ advanced image preprocessing (deskewing, binarization, adaptive thresholding) alongside multi-engine OCR and human-in-the-loop exception review to maintain high fidelity even on legacy or low-resolution scans.",
    category: "Quality Assurance",
  },
  {
    question: "How is document security and confidentiality maintained?",
    answer:
      "All documents are encrypted in transit (TLS 1.3) and at rest (AES-256). Access is restricted via role-based permissions, and our facilities and digital infrastructure adhere strictly to ISO 27001 data protection standards.",
    category: "Security",
  },
];

export default function ApdfServicesPage() {
  return (
    <div className="relative overflow-hidden tech-grid">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <ScanText className="w-3.5 h-3.5" />
              <span>Intelligent Document Automation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
              APDF &amp; Document <br />
              <span className="text-gradient-emerald">Processing Solutions</span> <br />
              for Enterprise Workflows
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Insure Tech Services PVT LTD supports organizations with document conversion, data extraction, validation, classification, indexing, and workflow automation for high-volume paper and digital file ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-[#4d915d] hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all"
              >
                <span>Request Document Processing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#pipeline"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[var(--text-primary)] glass-panel hover:border-emerald-500/40 transition-colors"
              >
                <span>Explore Document Pipeline</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                99.4% OCR Extraction Precision
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Searchable Full-Text Indexing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ISO 27001 Secure Handling
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 p-2 shadow-2xl">
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/image_2.jpg"
                  alt="Document Processing and Inspection"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061b12] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white space-y-1">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span>DOCUMENT ENGINE</span>
                    <span>10,000+ DAILY</span>
                  </div>
                  <div className="text-sm font-bold">Legacy &amp; Digital Document OCR</div>
                  <div className="text-xs text-slate-300">Automated Classification, Indexing &amp; Archival</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PIPELINE VISUALIZER ================= */}
      <section id="pipeline" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <ApdfPipelineVisual />
      </section>

      {/* ================= 10 SUB-SERVICES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Service Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
            Complete Document Transformation Capabilities
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            Turn disorganized paperwork into searchable, verified, and automated digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS ================= */}
      <section className="py-16 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-[340px] w-full rounded-2xl overflow-hidden glass-panel border border-emerald-500/20 shadow-lg">
                <Image
                  src="/images/image_9.jpg"
                  alt="Enterprise Insurance and Business Processing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                  Measurable Operational Impact
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-1">
                  Why Leading Enterprises Trust Our Document Engine
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BENEFITS.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FaqAccordion
          items={FAQ_ITEMS}
          title="APDF & Document Processing FAQs"
          subtitle="Answers to common questions regarding document types, bulk processing, OCR accuracy, and system integration."
        />
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061b12] to-[#0a291b] border border-emerald-500/40 text-center space-y-6 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Automate Your Document Processing?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact Insure Tech Services PVT LTD to discuss your file formats, processing volumes, and output specifications.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-[#73cb71] hover:bg-[#88dc86] transition-all shadow-lg"
            >
              <span>Request Service Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
