"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, FileCode2, Cpu, Globe2, ShieldCheck, ArrowRight, Play, Check } from "lucide-react";

export function XmlPipelineAnimation() {
  const [selectedNode, setSelectedNode] = useState<string>("transform");

  const NODE_DETAILS: Record<string, { title: string; desc: string; stats: string }> = {
    source: {
      title: "Source Data Ingestion",
      desc: "Raw, multi-format feeds (Excel, CSV, JSON, SQL DB, EDI 837) are extracted via batch watchers or automated sFTP/API listeners.",
      stats: "Supports 15+ Source Formats",
    },
    mapping: {
      title: "Dynamic Field Mapping & Normalization",
      desc: "Data dictionaries and canonical crosswalks map source attributes to standardized enterprise XML tags, namespaces, and data types.",
      stats: "100% Schema Alignment",
    },
    validation: {
      title: "XSD & Schematron Validation Gate",
      desc: "Every payload is rigorously audited against target XSD schemas and custom business validation rules before transformation.",
      stats: "0% Silent Structural Errors",
    },
    transform: {
      title: "High-Throughput XML Transformation Engine",
      desc: "XSLT 3.0 / DOM processing pipeline generates well-formed, UTF-8 encoded, clean XML hierarchical document structures.",
      stats: "50,000+ Records / Min Throughput",
    },
    integration: {
      title: "API & Enterprise Partner Integration",
      desc: "Delivers validated XML payloads to destination cloud databases, REST/SOAP endpoints, healthcare clearinghouses, or microservices.",
      stats: "REST, Webhook, SOAP & sFTP",
    },
  };

  return (
    <div className="w-full glass-panel p-6 sm:p-8 lg:p-10 border border-[var(--border-subtle)] relative overflow-hidden">
      {/* Title */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">
            Real-Time Structural Engine
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-2">
            Data-to-XML <span className="text-gradient-emerald">Integration Architecture</span>
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Explore the multi-tier pipeline transforming disparate data into validated enterprise XML streams.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-[var(--bg-surface)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>XSLT 3.0 • XSD 1.1 READY</span>
        </div>
      </div>

      {/* High-Tech Animated SVG Flow */}
      <div className="relative w-full overflow-x-auto py-4">
        <svg
          viewBox="0 0 900 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full min-w-[750px] h-auto drop-shadow-md select-none"
        >
          <defs>
            <linearGradient id="streamLineGrad" x1="0" y1="120" x2="900" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4d915d" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#73cb71" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#a3e635" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#73cb71" stopOpacity="0.4" />
            </linearGradient>

            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Main Connecting Flow Path */}
          <path
            d="M 120 120 L 780 120"
            stroke="url(#streamLineGrad)"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="data-flow-path"
          />

          {/* Moving Animated Packets between nodes */}
          <motion.circle
            cx="120"
            cy="120"
            r="4.5"
            fill="#73cb71"
            filter="url(#svgGlow)"
            animate={{ cx: [120, 275, 450, 625, 780] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="120"
            cy="120"
            r="3.5"
            fill="#a3e635"
            filter="url(#svgGlow)"
            animate={{ cx: [120, 275, 450, 625, 780] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 3 }}
          />

          {/* Node 1: Source Data */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedNode("source")}
          >
            <rect
              x="50"
              y="65"
              width="130"
              height="110"
              rx="14"
              fill={selectedNode === "source" ? "rgba(115, 203, 113, 0.2)" : "rgba(7, 26, 18, 0.85)"}
              stroke={selectedNode === "source" ? "#73cb71" : "rgba(115, 203, 113, 0.35)"}
              strokeWidth={selectedNode === "source" ? "2.5" : "1.5"}
            />
            <rect x="90" y="80" width="50" height="32" rx="8" fill="#4d915d" opacity="0.25" />
            <text x="115" y="100" fill="#73cb71" fontSize="12" fontWeight="bold" textAnchor="middle">SRC</text>
            <text x="115" y="135" fill="#f8fafc" fontSize="12" fontWeight="600" textAnchor="middle">Source Data</text>
            <text x="115" y="153" fill="#94a3b8" fontSize="10" textAnchor="middle">Excel / CSV / DB</text>
          </g>

          {/* Node 2: Mapping & Schema */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedNode("mapping")}
          >
            <rect
              x="220"
              y="65"
              width="130"
              height="110"
              rx="14"
              fill={selectedNode === "mapping" ? "rgba(115, 203, 113, 0.2)" : "rgba(7, 26, 18, 0.85)"}
              stroke={selectedNode === "mapping" ? "#73cb71" : "rgba(115, 203, 113, 0.35)"}
              strokeWidth={selectedNode === "mapping" ? "2.5" : "1.5"}
            />
            <rect x="260" y="80" width="50" height="32" rx="8" fill="#4d915d" opacity="0.25" />
            <text x="285" y="100" fill="#73cb71" fontSize="12" fontWeight="bold" textAnchor="middle">MAP</text>
            <text x="285" y="135" fill="#f8fafc" fontSize="12" fontWeight="600" textAnchor="middle">Field Mapping</text>
            <text x="285" y="153" fill="#94a3b8" fontSize="10" textAnchor="middle">Namespaces & Tags</text>
          </g>

          {/* Node 3: Validation */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedNode("validation")}
          >
            <rect
              x="390"
              y="65"
              width="130"
              height="110"
              rx="14"
              fill={selectedNode === "validation" ? "rgba(115, 203, 113, 0.2)" : "rgba(7, 26, 18, 0.85)"}
              stroke={selectedNode === "validation" ? "#73cb71" : "rgba(115, 203, 113, 0.35)"}
              strokeWidth={selectedNode === "validation" ? "2.5" : "1.5"}
            />
            <rect x="430" y="80" width="50" height="32" rx="8" fill="#4d915d" opacity="0.25" />
            <text x="455" y="100" fill="#73cb71" fontSize="12" fontWeight="bold" textAnchor="middle">XSD</text>
            <text x="455" y="135" fill="#f8fafc" fontSize="12" fontWeight="600" textAnchor="middle">Validation Gate</text>
            <text x="455" y="153" fill="#94a3b8" fontSize="10" textAnchor="middle">Schema & DTD Audit</text>
          </g>

          {/* Node 4: Transformation */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedNode("transform")}
          >
            <rect
              x="560"
              y="65"
              width="130"
              height="110"
              rx="14"
              fill={selectedNode === "transform" ? "rgba(115, 203, 113, 0.25)" : "rgba(7, 26, 18, 0.85)"}
              stroke={selectedNode === "transform" ? "#73cb71" : "rgba(115, 203, 113, 0.35)"}
              strokeWidth={selectedNode === "transform" ? "2.5" : "1.5"}
            />
            <rect x="600" y="80" width="50" height="32" rx="8" fill="#4d915d" opacity="0.25" />
            <text x="625" y="100" fill="#a3e635" fontSize="12" fontWeight="bold" textAnchor="middle">XML</text>
            <text x="625" y="135" fill="#f8fafc" fontSize="12" fontWeight="600" textAnchor="middle">XSLT Engine</text>
            <text x="625" y="153" fill="#94a3b8" fontSize="10" textAnchor="middle">Formatted Tree</text>
          </g>

          {/* Node 5: Integration */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedNode("integration")}
          >
            <rect
              x="730"
              y="65"
              width="130"
              height="110"
              rx="14"
              fill={selectedNode === "integration" ? "rgba(115, 203, 113, 0.2)" : "rgba(7, 26, 18, 0.85)"}
              stroke={selectedNode === "integration" ? "#73cb71" : "rgba(115, 203, 113, 0.35)"}
              strokeWidth={selectedNode === "integration" ? "2.5" : "1.5"}
            />
            <rect x="770" y="80" width="50" height="32" rx="8" fill="#4d915d" opacity="0.25" />
            <text x="795" y="100" fill="#73cb71" fontSize="12" fontWeight="bold" textAnchor="middle">API</text>
            <text x="795" y="135" fill="#f8fafc" fontSize="12" fontWeight="600" textAnchor="middle">API Integration</text>
            <text x="795" y="153" fill="#94a3b8" fontSize="10" textAnchor="middle">REST / SOAP / sFTP</text>
          </g>
        </svg>
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-4 p-5 rounded-xl bg-[var(--bg-surface)] border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
              {NODE_DETAILS[selectedNode].title}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-2xl">
            {NODE_DETAILS[selectedNode].desc}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-xs text-[var(--text-muted)] block">Benchmark SLA</span>
          <span className="text-sm font-semibold text-emerald-500">
            {NODE_DETAILS[selectedNode].stats}
          </span>
        </div>
      </div>
    </div>
  );
}
