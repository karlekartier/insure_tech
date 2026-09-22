"use client";

import React, { useState } from "react";
import { Code2, ArrowRight, CheckCircle2, Copy, Sparkles, RefreshCw } from "lucide-react";

export function XmlTransformerDemo() {
  const [sourceType, setSourceType] = useState<"insurance" | "claim">("insurance");
  const [copied, setCopied] = useState(false);

  const SAMPLES = {
    insurance: {
      inputName: "policy_feed.json",
      inputData: `{
  "policyNumber": "IN-789042",
  "holder": "Sophia Vance",
  "effectiveDate": "2026-04-01",
  "premium": 1420.00,
  "coverage": "Comprehensive Health & RCM",
  "activeStatus": true
}`,
      outputName: "policy_export.xml",
      outputXml: `<?xml version="1.0" encoding="UTF-8"?>
<InsurancePolicy xmlns="http://insuretechservices.com/schema/policy/v3">
  <Header timestamp="2026-04-01T00:00:00Z" status="VALIDATED"/>
  <PolicyDetails id="IN-789042">
    <HolderName>Sophia Vance</HolderName>
    <EffectiveDate>2026-04-01</EffectiveDate>
    <Premium currency="USD">1420.00</Premium>
    <CoverageCategory type="HEALTH_RCM">Comprehensive</CoverageCategory>
    <UnderwritingStatus>ACTIVE</UnderwritingStatus>
  </PolicyDetails>
</InsurancePolicy>`,
    },
    claim: {
      inputName: "claim_batch.csv",
      inputData: `ClaimID,PatientID,DOS,ICD10,CPT,Charge
CLM-901,PAT-442,2026-03-15,I10,99214,175.00
CLM-902,PAT-881,2026-03-16,E11.9,99213,125.00`,
      outputName: "claim_837_structured.xml",
      outputXml: `<?xml version="1.0" encoding="UTF-8"?>
<HealthcareClaimsBatch xmlns="http://insuretechservices.com/rcm/837">
  <BatchHeader controlNumber="BATCH-20260316" totalClaims="2"/>
  <Claim recordId="CLM-901">
    <PatientIdentifier>PAT-442</PatientIdentifier>
    <DateOfService>2026-03-15</DateOfService>
    <DiagnosisCode system="ICD10">I10</DiagnosisCode>
    <ProcedureCode system="CPT">99214</ProcedureCode>
    <BilledAmount currency="USD">175.00</BilledAmount>
  </Claim>
  <Claim recordId="CLM-902">
    <PatientIdentifier>PAT-881</PatientIdentifier>
    <DateOfService>2026-03-16</DateOfService>
    <DiagnosisCode system="ICD10">E11.9</DiagnosisCode>
    <ProcedureCode system="CPT">99213</ProcedureCode>
    <BilledAmount currency="USD">125.00</BilledAmount>
  </Claim>
</HealthcareClaimsBatch>`,
    },
  };

  const current = SAMPLES[sourceType];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.outputXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel p-6 sm:p-8 border border-[var(--border-subtle)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Transformer</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            Source Data to Validated XML Studio
          </h4>
        </div>

        {/* Toggle sample dataset */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setSourceType("insurance")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              sourceType === "insurance"
                ? "bg-emerald-500 text-white font-semibold shadow-sm"
                : "text-[var(--text-secondary)] hover:text-emerald-500"
            }`}
          >
            Policy Feed (JSON)
          </button>
          <button
            onClick={() => setSourceType("claim")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              sourceType === "claim"
                ? "bg-emerald-500 text-white font-semibold shadow-sm"
                : "text-[var(--text-secondary)] hover:text-emerald-500"
            }`}
          >
            Claim Batch (CSV)
          </button>
        </div>
      </div>

      {/* Side-by-Side Code Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Source Input */}
        <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[#030e09] text-slate-300 font-mono text-xs">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#05160e] border-b border-emerald-950/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-slate-300 font-semibold">{current.inputName}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Source Payload</span>
          </div>
          <div className="p-4 overflow-x-auto min-h-[220px]">
            <pre className="text-emerald-400/90 leading-relaxed whitespace-pre font-mono">
              {current.inputData}
            </pre>
          </div>
        </div>

        {/* Right: Validated XML Output */}
        <div className="rounded-xl overflow-hidden border border-emerald-500/40 bg-[#030e09] text-slate-300 font-mono text-xs shadow-lg relative">
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#061d13] border-b border-emerald-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">{current.outputName}</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[10px] font-medium transition-colors"
            >
              {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy XML"}</span>
            </button>
          </div>
          <div className="p-4 overflow-x-auto min-h-[220px]">
            <pre className="text-[#a3e635] leading-relaxed whitespace-pre font-mono">
              {current.outputXml}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
