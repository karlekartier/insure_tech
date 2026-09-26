"use client";

import React, { useState } from "react";
import {
  BookOpen,
  FileCode2,
  FileText,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Database,
  Search,
  Zap,
} from "lucide-react";

export function PublicationEstimator() {
  const [sourceFormat, setSourceFormat] = useState<"word" | "pdf_scan" | "latex" | "indesign">(
    "word"
  );
  const [targets, setTargets] = useState<string[]>(["jats_xml", "apdf_typeset"]);
  const [pageVolume, setPageVolume] = useState<number>(1200); // 1,200 pages / month
  const [slaTier, setSlaTier] = useState<"24h" | "48h" | "standard">("48h");
  const [requested, setRequested] = useState(false);

  const targetOptions = [
    { id: "jats_xml", label: "JATS / NLM XML", desc: "PubMed Central & Crossref compliant" },
    { id: "apdf_typeset", label: "APDF & Typeset Print", desc: "High-resolution vector pagination" },
    { id: "epub3", label: "EPUB3 & Reflowable eBook", desc: "Accessible readers & mobile devices" },
    { id: "crossref_doi", label: "Crossref DOI & Indexing", desc: "Automated metadata submission" },
  ];

  const toggleTarget = (id: string) => {
    setTargets((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deliveryTurnaround =
    slaTier === "24h" ? "24 Hours (Priority Express)" :
    slaTier === "48h" ? "48 Hours (Rapid Batch)" : "3 - 5 Business Days (Standard)";

  const accuracyGuarantee = "99.98% Character Accuracy SLA";

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Inputs */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Journal &amp; Document Workflow Estimator</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Scope Your Publication &amp; XML Conversion
          </h3>
          <p className="text-sm text-slate-600">
            Configure your source manuscripts and target publishing formats to calculate production throughput, DTD schema compliance, and delivery schedule.
          </p>

          {/* Source Format */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Source Input Format:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "word", label: "MS Word DOCX", icon: FileText },
                { id: "pdf_scan", label: "PDF & OCR Scans", icon: Search },
                { id: "latex", label: "LaTeX / Math TeX", icon: FileCode2 },
                { id: "indesign", label: "InDesign / DTP", icon: Layers },
              ].map((fmt) => {
                const Icon = fmt.icon;
                const isSelected = sourceFormat === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => setSourceFormat(fmt.id as any)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border text-xs font-semibold transition-all ${
                      isSelected
                        ? "border-amber-500 bg-amber-50 text-amber-900 shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? "text-amber-600" : "text-slate-400"}`} />
                    <span>{fmt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Volume Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-slate-700">Estimated Monthly Page / Article Volume:</span>
              <span className="font-extrabold text-amber-800 font-mono text-base bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {pageVolume.toLocaleString()} Pages / Month
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={25000}
              step={100}
              value={pageVolume}
              onChange={(e) => setPageVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
          </div>

          {/* Target Deliverables & Turnaround */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Required Output Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {targetOptions.map((opt) => {
                const isChecked = targets.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleTarget(opt.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all ${
                      isChecked
                        ? "border-amber-500 bg-amber-50/80 text-amber-950 font-medium"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-white ${
                        isChecked ? "bg-amber-600" : "border border-slate-300"
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{opt.label}</div>
                      <div className="text-[10px] text-slate-500">{opt.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Turnaround SLA */}
          <div className="space-y-2 pt-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Production Turnaround SLA:
            </span>
            <div className="flex gap-2">
              {[
                { id: "24h", label: "24h Priority Express" },
                { id: "48h", label: "48h Rapid Batch" },
                { id: "standard", label: "Standard Production (3-5 Days)" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSlaTier(s.id as any)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    slaTier === s.id
                      ? "bg-amber-600 text-white border-amber-600"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:w-80 bg-gradient-to-b from-slate-900 to-[#281504] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border border-amber-500/30">
          <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>JATS &amp; DTD Validation Matrix</span>
            </div>

            <div className="mt-6">
              <span className="text-xs text-slate-300 block font-medium">Turnaround Commitment</span>
              <div className="text-xl font-extrabold text-amber-400 mt-1">{deliveryTurnaround}</div>
              <span className="text-xs text-slate-300 block mt-1.5 font-medium">
                Quality: <strong className="text-amber-300">{accuracyGuarantee}</strong>
              </span>
            </div>

            <div className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100% Automated Schematron &amp; DTD Strict Parsing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Full PubMed, Scopus, DOAJ &amp; Crossref Compatibility</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Free 50-Page Sample Production &amp; QA Audit</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {requested ? (
              <div className="p-3 bg-amber-600/30 border border-amber-400 rounded-2xl text-center text-xs text-amber-200">
                📚 Sample Audit Confirmed! Our editorial technical director will connect today.
              </div>
            ) : (
              <button
                onClick={() => setRequested(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                <span>Request Free Sample Conversion</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="text-[11px] text-center text-slate-400">
              NDA Protected • Secure Transfer via SFTP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
