"use client";

import React, { useState } from "react";
import {
  Cpu,
  Cloud,
  Shield,
  Layers,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle2,
  Server,
  Code2,
  Terminal,
} from "lucide-react";

export function ItServicesEstimator() {
  const [projectType, setProjectType] = useState<
    "cloud" | "software" | "cybersecurity" | "devops" | "ai"
  >("cloud");
  const [scale, setScale] = useState<number>(5000); // 5,000 active users / day
  const [slaTier, setSlaTier] = useState<"standard" | "business" | "mission_critical">(
    "business"
  );
  const [cloudProvider, setCloudProvider] = useState<"aws" | "azure" | "gcp" | "hybrid">("aws");
  const [requested, setRequested] = useState(false);

  const projectTypes = [
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, desc: "AWS/Azure/GCP setup & migration" },
    { id: "software", name: "Custom Software", icon: Code2, desc: "Full-stack web & mobile apps" },
    { id: "cybersecurity", name: "Security & SOC", icon: Shield, desc: "VAPT, firewalls & compliance" },
    { id: "devops", name: "CI/CD & K8s", icon: Terminal, desc: "Docker, Kubernetes & GitOps" },
    { id: "ai", name: "AI Automation", icon: Cpu, desc: "LLMs, RPA & data pipelines" },
  ];

  // Dynamic calculations
  const sprintWeeks =
    projectType === "cloud"
      ? 4 + Math.round(scale / 25000)
      : projectType === "software"
      ? 8 + Math.round(scale / 15000)
      : projectType === "cybersecurity"
      ? 3 + Math.round(scale / 50000)
      : projectType === "devops"
      ? 4 + Math.round(scale / 30000)
      : 6 + Math.round(scale / 20000);

  const teamMembers =
    projectType === "software" ? "Lead Architect + 3 Engineers + QA" :
    projectType === "cloud" ? "Principal Cloud Architect + 2 DevOps" :
    projectType === "cybersecurity" ? "CISSP Lead + 2 Security Auditors" :
    "DevOps Tech Lead + SRE Specialist";

  const uptimeGuarantee = slaTier === "mission_critical" ? "99.99%" : slaTier === "business" ? "99.9%" : "99.5%";

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Inputs */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Interactive Engineering &amp; Scope Estimator</span>
          </div>

          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Scope Your Enterprise IT Architecture
          </h3>
          <p className="text-sm text-slate-600">
            Select your technology objectives and scale to generate an instant technical roadmap and delivery sprint plan.
          </p>

          {/* Project Type Grid */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Primary Objective:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {projectTypes.map((t) => {
                const Icon = t.icon;
                const isSelected = projectType === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setProjectType(t.id as any)}
                    className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-50/80 text-cyan-950 shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-1.5 ${
                        isSelected ? "text-cyan-600" : "text-slate-400"
                      }`}
                    />
                    <span className="font-bold text-xs block">{t.name}</span>
                    <span className="text-[10px] text-slate-500 line-clamp-1">{t.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scale Slider */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-slate-700">Estimated Users / Workload:</span>
              <span className="font-extrabold text-cyan-700 font-mono text-base bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                {scale.toLocaleString()} Active Users / Day
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={100000}
              step={1000}
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
          </div>

          {/* Cloud Platform & SLA Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Target Cloud Environment:
              </span>
              <div className="flex gap-1.5">
                {(["aws", "azure", "gcp", "hybrid"] as const).map((prov) => (
                  <button
                    key={prov}
                    onClick={() => setCloudProvider(prov)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border uppercase transition-colors ${
                      cloudProvider === prov
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Support &amp; SLA Level:
              </span>
              <div className="flex gap-1.5">
                {[
                  { id: "standard", label: "Business" },
                  { id: "business", label: "24/7 On-Call" },
                  { id: "mission_critical", label: "Mission Crit." },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSlaTier(s.id as any)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      slaTier === s.id
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Blueprint */}
        <div className="lg:w-80 bg-gradient-to-b from-slate-900 to-[#081b2e] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden border border-cyan-500/30">
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>Tailored Sprint Architecture</span>
            </div>

            <div className="mt-6">
              <span className="text-xs text-slate-300 block font-medium">Estimated Delivery Timeline</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white font-mono">{sprintWeeks}</span>
                <span className="text-base text-cyan-400 font-semibold">Weeks (Agile)</span>
              </div>
              <span className="text-xs text-slate-300 block mt-1">
                SLA Guarantee: <strong className="text-cyan-300">{uptimeGuarantee} Uptime</strong>
              </span>
            </div>

            <div className="mt-6 space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Dedicated Squad: {teamMembers}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Zero-Downtime CI/CD Automated Pipelines</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>SOC 2 &amp; ISO 27001 Security Audit Ready</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {requested ? (
              <div className="p-3 bg-cyan-600/30 border border-cyan-400 rounded-2xl text-center text-xs text-cyan-200">
                🚀 Technical Blueprint Requested! An IT Architect will reach out shortly.
              </div>
            ) : (
              <button
                onClick={() => setRequested(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <span>Get Full Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="text-[11px] text-center text-slate-400">
              Free 45-Minute Tech Discovery Session Included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
