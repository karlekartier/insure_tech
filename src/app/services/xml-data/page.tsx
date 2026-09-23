import React from "react";
import Link from "next/link";
import {
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Database,
  Layers,
  FileCheck,
  Zap,
  Repeat,
  ShieldCheck,
  PhoneCall,
  ArrowUpRight,
  GitBranch,
  Terminal,
  FileSpreadsheet,
} from "lucide-react";

export const metadata = {
  title: "XML & Data Services | Conversion, Validation & Integration | Insure Tech",
  description:
    "Professional XML creation, schema validation (XSD/DTD), XSLT transformation, parsing, batch processing, and API integration services by Insure Tech Services PVT LTD.",
};

export default function XMLDataServicesPage() {
  const xmlServices = [
    {
      title: "XML File Creation",
      desc: "Authoring well-formed, valid XML documents based on business templates, source files, custom schemas, and client data specifications.",
      icon: FileCode2,
      tag: "Creation",
    },
    {
      title: "XML Data Conversion",
      desc: "Bi-directional conversion of complex datasets from Excel, CSV, JSON, relational databases, flat files, or legacy systems into standardized XML schemas.",
      icon: FileSpreadsheet,
      tag: "Conversion",
    },
    {
      title: "Schema Validation (XSD / DTD)",
      desc: "Automated verification of XML files against rigorous XML Schema Definitions (XSD) and Document Type Definitions (DTD) to guarantee syntactical correctness.",
      icon: FileCheck,
      tag: "Validation",
    },
    {
      title: "XML Parsing & Data Extraction",
      desc: "High-speed extraction of targeted data elements, attributes, and hierarchical nodes for analytical reporting, database ingestion, or system migration.",
      icon: Terminal,
      tag: "Extraction",
    },
    {
      title: "XML Transformation (XSLT)",
      desc: "Transforming XML documents into alternate XML formats, HTML, JSON, delimited text, or custom partner structures using standards-compliant XSLT stylesheets.",
      icon: Repeat,
      tag: "Transformation",
    },
    {
      title: "XML Data Mapping",
      desc: "Comprehensive cross-system field mapping specifying element hierarchies, namespace resolutions, attribute requirements, and required data types.",
      icon: GitBranch,
      tag: "Data Architecture",
    },
    {
      title: "High-Volume Batch Processing",
      desc: "Automated processing of enterprise-scale XML repositories with standardized folder monitoring, batch validation, exception logging, and error queues.",
      icon: Zap,
      tag: "Batch Pipeline",
    },
    {
      title: "System & API Integration",
      desc: "Direct integration of XML pipelines with partner web services, enterprise REST/SOAP APIs, internal relational databases, and third-party software portals.",
      icon: Database,
      tag: "Integration",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Schema Review",
      desc: "Analysis of source data formats, required target tags, namespaces, attributes, and output specifications.",
    },
    {
      step: "02",
      title: "Data Mapping & Rules Definition",
      desc: "Documenting field-by-field relationships, required formats, character sets, and conversion logic.",
    },
    {
      step: "03",
      title: "Validation Matrix Setup",
      desc: "Configuring XSD/DTD schemas, business validation rules, and automated structural error traps.",
    },
    {
      step: "04",
      title: "Sample Batch Testing",
      desc: "Processing representative test datasets to verify tag nesting, data types, and transformation accuracy.",
    },
    {
      step: "05",
      title: "Production Batch Execution",
      desc: "Executing high-speed batch conversion, parsing, and automated schema enforcement pipelines.",
    },
    {
      step: "06",
      title: "Quality Review & Delivery",
      desc: "Automated exception reporting, manual quality audits, and secure delivery via SFTP, API, or database write.",
    },
  ];

  const industries = [
    {
      name: "Insurance & Bordereaux",
      use: "Policy schedule feeds, claim data exchanges, reinsurance bordereaux, and regulatory filings.",
    },
    {
      name: "Healthcare & EDI",
      use: "Clinical summaries, diagnostic reporting feeds, HL7/XML data exchange, and provider directories.",
    },
    {
      name: "Publishing & Content",
      use: "Structured digital publications, cross-media tagging, eBook XML generation, and technical manuals.",
    },
    {
      name: "Supply Chain & Retail",
      use: "Product catalogues, inventory feeds, electronic orders, and B2B vendor transactional messages.",
    },
  ];

  const faqs = [
    {
      q: "What types of source data can you convert to XML?",
      a: "We process source data from Excel spreadsheets, CSV files, relational databases (SQL Server, MySQL, PostgreSQL, Oracle), JSON payloads, flat text files, delimited formats, and scanned documents.",
    },
    {
      q: "How do you handle XML validation errors or missing fields?",
      a: "Our automated pipeline flags non-compliant files against your custom XSD/DTD schemas. Missing values, character encoding discrepancies, or invalid tags trigger automated exception logs that are reviewed and corrected before production output is generated.",
    },
    {
      q: "Can you handle high-volume recurring XML batch processing?",
      a: "Yes. We configure automated batch pipelines capable of processing thousands of XML files daily, maintaining standardized folder structures, versioning, audit trails, and automated error alerting.",
    },
    {
      q: "Do you support XSLT transformations to JSON or HTML?",
      a: "Yes. Our team writes and tests custom XSLT 1.0, 2.0, and 3.0 stylesheets to transform XML feeds into clean JSON for modern web applications, semantic HTML for publishing, or alternative XML dialects for business partners.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-b from-[#142942] via-[#19375c] to-[#0f2136] text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-cyan-300 border border-white/15">
            <FileCode2 className="w-4 h-4 text-cyan-400" />
            <span>Structured Data &amp; Integration Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            XML &amp; Data Services
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Enterprise XML creation, schema validation, XSLT transformation, parsing, and batch processing. We help organizations exchange structured data accurately between systems and business partners.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-orange text-sm py-3 px-8">
              <span>Discuss XML Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9150005721"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Talk to Data Specialist</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICE HIGHLIGHTS ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">XSD &amp; DTD</div>
            <div className="text-xs text-slate-700 mt-1">Schema Enforcement</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">XSLT 2.0 / 3.0</div>
            <div className="text-xs text-slate-700 mt-1">Format Transformations</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">Batch Scalable</div>
            <div className="text-xs text-slate-700 mt-1">Millions of Records</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="text-2xl font-bold text-[#19375c]">100% Traceable</div>
            <div className="text-xs text-slate-700 mt-1">Audit-Ready Workflows</div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100">
            Pillars of XML Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
            Comprehensive XML Data Capabilities
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Whether you require one-time legacy format migrations or ongoing high-volume automated data feeds, our engineering workflows ensure zero data loss and strict schema conformance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {xmlServices.map((service, idx) => {
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
                  <span>Specification</span>
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
              Execution Pipeline
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
              Repeatable, Validated XML Workflow
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Every XML project begins with sample file verification and schema definition, guaranteeing that errors are trapped and resolved before production data reaches destination systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden"
              >
                <div className="text-3xl font-black text-cyan-800/20 mb-2">{step.step}</div>
                <h3 className="text-base font-bold text-[#19375c] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES SERVED ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100">
            Domain Applications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19375c]">
            Industry-Specific XML Solutions
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Our data specialists understand the data structures and compliance mandates unique to each industry sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
            >
              <h3 className="text-base font-bold text-[#19375c] mb-2">{ind.name}</h3>
              <p className="text-xs text-slate-700 leading-relaxed">{ind.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-200">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#19375c] bg-slate-100">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-extrabold text-[#19375c]">
            XML Services FAQs
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
            Have an XML Data Project or Migration to Execute?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Send us your sample schemas, source datasets, and project specifications. Our engineering team will analyze the mapping and deliver a customized processing plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/contact" className="btn-orange text-sm py-3.5 px-8">
              <span>Request XML Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
