import React from "react";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Search,
  Layers,
  FileCheck2,
  Zap,
  FolderArchive,
  ShieldCheck,
  PhoneCall,
  ArrowUpRight,
  Sparkles,
  Cpu,
  BookOpen,
  Filter,
} from "lucide-react";

export const metadata = {
  title: "APDF & Document Processing Services | Conversion, OCR & Indexing | Insure Tech",
  description:
    "End-to-end APDF and digital document processing solutions. Automated document conversion, OCR data extraction, indexing, validation, and workflow automation by Insure Tech Services PVT LTD.",
};

export default function APDFDocumentsPage() {
  const documentServices = [
    {
      title: "Document Conversion",
      desc: "Conversion of source files into standardized PDF, APDF, and approved digital formats while preserving precise fonts, tables, layouts, and vector elements.",
      icon: FileText,
      tag: "Conversion",
    },
    {
      title: "Intelligent Document Generation",
      desc: "Dynamic generation of high-volume digital documents from templates, XML/JSON data sources, or application-driven transaction databases.",
      icon: Sparkles,
      tag: "Generation",
    },
    {
      title: "Layout Formatting & Normalization",
      desc: "Comprehensive page realignment, header/footer standardization, bookmark structuring, pagination, and visual consistency tuning.",
      icon: BookOpen,
      tag: "Formatting",
    },
    {
      title: "OCR Data Extraction",
      desc: "Advanced optical character recognition and field-level data extraction from scanned forms, invoices, reports, and legacy records.",
      icon: Search,
      tag: "Extraction",
    },
    {
      title: "Document Validation & Quality Review",
      desc: "Automated and human-in-the-loop checks verifying page completeness, naming conventions, required fields, and image resolution standards.",
      icon: FileCheck2,
      tag: "Quality Audit",
    },
    {
      title: "Batch Document Processing",
      desc: "High-throughput batch queues for transforming, validating, and cataloging thousands of enterprise documents with detailed exception logs.",
      icon: Zap,
      tag: "Batch Scalability",
    },
    {
      title: "Classification & Auto-Tagging",
      desc: "Automated categorisation of documents by type, customer, department, transaction date, or priority for streamlined operational routing.",
      icon: Filter,
      tag: "Classification",
    },
    {
      title: "Indexing & Searchable Metadata",
      desc: "Generating searchable metadata tags and full-text indexes to enable instantaneous record retrieval in document management systems.",
      icon: Cpu,
      tag: "Indexing",
    },
    {
      title: "Archival & Retention Support",
      desc: "Preparing files, audit logs, and compliance metadata for structured long-term storage, meeting corporate and regulatory retention policies.",
      icon: FolderArchive,
      tag: "Archival",
    },
    {
      title: "Workflow Automation & Integration",
      desc: "Connecting document ingestion pipelines with business software, ERPs, CRM platforms, and cloud storage repositories via automated webhooks.",
      icon: Layers,
      tag: "Automation",
    },
  ];

  const benefits = [
    "Reduces repetitive, error-prone manual document handling",
    "Standardizes branding and consistency across all output files",
    "Accelerates turnaround time for customer-facing documents",
    "Enables instantaneous search and retrieval across millions of files",
    "Enforces strict file naming conventions and folder structures",
    "Improves audit readiness with comprehensive transaction traceability",
    "Scales effortlessly to handle peak high-volume processing cycles",
    "Integrates smoothly with existing DMS, ERP, and cloud environments",
  ];

  const workflow = [
    {
      step: "01",
      title: "Requirements & Specification",
      desc: "Define document types, source inputs, target formats, naming conventions, and metadata needs.",
    },
    {
      step: "02",
      title: "Template & Rules Preparation",
      desc: "Configure style sheets, validation criteria, extraction schemas, and error thresholds.",
    },
    {
      step: "03",
      title: "Sample Batch Run",
      desc: "Execute representative sample files to review formatting, extraction accuracy, and resolution.",
    },
    {
      step: "04",
      title: "Production Batch Processing",
      desc: "Run high-volume automated conversion, OCR extraction, classification, and metadata indexing.",
    },
    {
      step: "05",
      title: "Quality Review & Exception Checks",
      desc: "Conduct thorough automated and manual checks to ensure complete readability and zero missing pages.",
    },
    {
      step: "06",
      title: "Secure Delivery & Integration",
      desc: "Deliver final documents and metadata packages via encrypted SFTP, cloud buckets, or direct DMS ingestion.",
    },
  ];

  const faqs = [
    {
      q: "What types of documents can your team process?",
      a: "We process a diverse range of business documents including insurance policy schedules, claims packets, medical records, financial statements, invoices, legal contracts, purchase orders, application forms, and technical manuals.",
    },
    {
      q: "Can you extract text and tabular data from scanned paper or low-resolution PDFs?",
      a: "Yes. Our OCR extraction pipelines apply image enhancement, deskewing, noise reduction, and zone-based character recognition to accurately capture both text fields and complex multi-column tables.",
    },
    {
      q: "How do you guarantee document confidentiality and data privacy?",
      a: "We enforce strict security controls including non-disclosure agreements, encrypted data transfer (TLS/HTTPS, SFTP), AES-256 storage encryption, role-based access controls, and air-gapped processing environments where required.",
    },
    {
      q: "Can your processing pipeline integrate directly with our Document Management System (DMS)?",
      a: "Yes. We can output documents and structured metadata (XML, JSON, CSV) formatted specifically for seamless ingestion into SharePoint, OpenText, Laserfiche, Alfresco, Salesforce, or custom cloud storage.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Digital Document Operations &amp; Automation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            APDF &amp; Document Processing Services
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Transform paper and digital documents into structured, searchable, and compliant digital assets. We handle high-volume conversion, OCR extraction, metadata indexing, and workflow automation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Discuss Document Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9150005721"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Talk to Document Specialist</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS STRIP ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">99.8% Accuracy</div>
            <div className="text-xs text-slate-700 mt-1">Quality Assured Verification</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">Full-Text OCR</div>
            <div className="text-xs text-slate-700 mt-1">Searchable Metadata</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">High Throughput</div>
            <div className="text-xs text-slate-700 mt-1">High-Volume Batch Capacity</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">Enterprise Safe</div>
            <div className="text-xs text-slate-700 mt-1">Encrypted &amp; Audit Ready</div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100">
            Document Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
            Comprehensive Document Lifecycle Solutions
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            From single-template formatting to complex multi-source document ingestion, our services eliminate manual data entry and standardize document assets across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-800">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#19375c] mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{service.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-cyan-800 group">
                  <span>Explore service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-200">
              Standardized Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
              6-Phase Document Processing Pipeline
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Every file is tracked from intake to final validation, ensuring complete structural integrity, legibility, and zero data omissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="text-3xl font-black text-cyan-800/20 mb-2">{phase.step}</div>
                <h3 className="text-base font-bold text-[#19375c] mb-2">{phase.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS BENEFITS ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#19375c] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Operational Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Why Global Enterprises Choose Insure Tech for Document Workflows
            </h2>

            <p className="text-slate-200 text-base leading-relaxed">
              Our automated document solutions free up skilled teams from mundane paperwork, accelerate turnaround times, and eliminate costly data transcription errors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-orange text-sm py-3 px-8 inline-flex items-center gap-2">
                <span>Start Document Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-100">
            Common Inquiries
          </div>
          <h2 className="text-3xl font-extrabold text-[#19375c]">
            Document Processing FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2"
            >
              <h3 className="text-base font-bold text-[#19375c]">{faq.q}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-gradient-to-r from-[#19375c] to-[#0f2136] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Automate Your Document Operations?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Send us sample files and required output specifications. We will perform a complimentary sample conversion and provide a customized turnaround and pricing proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-orange text-sm py-3.5 px-8">
              <span>Request Sample Conversion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
