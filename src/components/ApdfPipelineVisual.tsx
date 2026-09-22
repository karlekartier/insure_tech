"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ScanText,
  Binary,
  ShieldCheck,
  FolderArchive,
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck2,
  Check
} from "lucide-react";

export function ApdfPipelineVisual() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      step: 1,
      title: "Document Ingestion",
      short: "Ingestion",
      icon: FileText,
      desc: "Batch capture of legacy physical paperwork, scanned PDFs, EOBs, claim receipts, and health records via secure portals or automated folder drops.",
      feature: "Multi-Format Ingestion",
      stats: "10,000+ Docs / Day",
    },
    {
      step: 2,
      title: "Optical Normalization",
      short: "Normalization",
      icon: ScanText,
      desc: "Automatic image deskewing, noise reduction, orientation correction, and DPI enhancement to maximize optical character extraction quality.",
      feature: "Binarization & Deskew",
      stats: "300+ DPI Auto Upscale",
    },
    {
      step: 3,
      title: "OCR & Key-Value Extraction",
      short: "Extraction",
      icon: Binary,
      desc: "Intelligent recognition of tabular data, policy numbers, patient identifiers, service dates, line items, and signature presence.",
      feature: "Table & Field Extraction",
      stats: "99.4% Field Accuracy",
    },
    {
      step: 4,
      title: "Quality Audit & Verification",
      short: "Verification",
      icon: ShieldCheck,
      desc: "Two-pass validation checking completeness, missing pages, character confidence scores, and business rule compliance.",
      feature: "Exception Gatekeeping",
      stats: "Zero Silent Drops",
    },
    {
      step: 5,
      title: "APDF & System Delivery",
      short: "Delivery",
      icon: FolderArchive,
      desc: "Publication of standardized, searchable APDF documents with embedded XML/JSON metadata tags into cloud archives and core platforms.",
      feature: "Searchable Indexing",
      stats: "Instant Retrieval",
    },
  ];

  return (
    <div className="w-full glass-panel p-6 sm:p-8 lg:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Document Automation Lifecycle
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-2">
            The <span className="text-gradient-emerald">APDF Digital Transformation</span> Pipeline
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Converting legacy, complex paperwork into standardized, searchable, and machine-readable digital assets.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-medium text-emerald-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>OCR 2.0 • ISO 27001 VAULT</span>
        </div>
      </div>

      {/* 5-Step Process Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
        {STEPS.map((s, idx) => {
          const isSelected = activeStep === idx;
          const StepIcon = s.icon;
          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-300 relative cursor-pointer ${
                isSelected
                  ? "bg-emerald-500/15 border-emerald-500 shadow-[0_0_20px_rgba(115,203,113,0.2)]"
                  : "bg-[var(--bg-surface)]/70 border-[var(--border-subtle)] hover:border-emerald-500/40"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  isSelected ? "bg-emerald-500 text-white font-bold" : "bg-emerald-500/10 text-emerald-500"
                }`}>
                  0{s.step}
                </span>
                <StepIcon className={`w-4 h-4 ${isSelected ? "text-emerald-500" : "text-[var(--text-muted)]"}`} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] line-clamp-1">
                {s.short}
              </h4>
              <span className="text-[11px] text-[var(--text-muted)] block mt-0.5">
                {s.feature}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <div className="bg-[var(--bg-surface)] p-6 sm:p-8 rounded-2xl border border-emerald-500/30 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                Phase 0{STEPS[activeStep].step} Spotlight
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-xs text-[var(--text-muted)]">Enterprise Document Engine</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {STEPS[activeStep].title}
            </h4>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {STEPS[activeStep].desc}
            </p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-[var(--border-glow)] shrink-0 min-w-[220px] space-y-2">
            <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              Performance Benchmark
            </span>
            <span className="text-xl font-bold text-emerald-500 block">
              {STEPS[activeStep].stats}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] pt-1 border-t border-[var(--border-subtle)]">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Full Audit Traceability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
