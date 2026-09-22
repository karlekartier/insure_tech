"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroShieldAnimation() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-3/4 h-3/4 bg-emerald-400/20 rounded-full blur-2xl" />

      {/* SVG Canvas for Shield & Data Ingestion Flow */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_35px_rgba(115,203,113,0.35)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="shieldGrad" x1="100" y1="50" x2="400" y2="450" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#73cb71" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#4d915d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0a291b" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="shieldBorder" x1="150" y1="60" x2="350" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="50%" stopColor="#73cb71" />
            <stop offset="100%" stopColor="#347545" />
          </linearGradient>

          <linearGradient id="streamGrad1" x1="0" y1="0" x2="250" y2="250" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#73cb71" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#73cb71" stopOpacity="0.9" />
          </linearGradient>

          <radialGradient id="coreGlow" cx="250" cy="240" r="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#73cb71" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#4d915d" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Filter for glowing nodes */}
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Core Radial */}
        <circle cx="250" cy="240" r="180" fill="url(#coreGlow)" />

        {/* Outer Orbiting Data Rings */}
        <motion.circle
          cx="250"
          cy="240"
          r="190"
          stroke="rgba(115, 203, 113, 0.25)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 240px" }}
        />
        <motion.circle
          cx="250"
          cy="240"
          r="150"
          stroke="rgba(115, 203, 113, 0.3)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "250px 240px" }}
        />

        {/* Inflowing Data Stream Paths converging into Shield center */}
        {/* Stream 1 - Top Left */}
        <path
          d="M 50 80 Q 150 120 230 200"
          stroke="url(#streamGrad1)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-flow-path"
        />
        {/* Stream 2 - Bottom Left */}
        <path
          d="M 60 400 Q 140 340 220 260"
          stroke="url(#streamGrad1)"
          strokeWidth="2"
          strokeDasharray="8 6"
          className="data-flow-path"
        />
        {/* Stream 3 - Top Right */}
        <path
          d="M 440 90 Q 350 130 270 200"
          stroke="url(#streamGrad1)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="data-flow-path"
        />
        {/* Stream 4 - Bottom Right */}
        <path
          d="M 430 390 Q 350 330 270 260"
          stroke="url(#streamGrad1)"
          strokeWidth="2"
          strokeDasharray="7 7"
          className="data-flow-path"
        />
        {/* Stream 5 - Top Center */}
        <path
          d="M 250 30 L 250 150"
          stroke="url(#streamGrad1)"
          strokeWidth="2"
          strokeDasharray="5 5"
          className="data-flow-path"
        />

        {/* Floating Data Packet Nodes traveling towards shield */}
        <motion.circle
          cx="120"
          cy="110"
          r="4"
          fill="#73cb71"
          filter="url(#glowFilter)"
          animate={{
            x: [0, 80, 110],
            y: [0, 60, 90],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="380"
          cy="110"
          r="4.5"
          fill="#a3e635"
          filter="url(#glowFilter)"
          animate={{
            x: [0, -70, -110],
            y: [0, 60, 90],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="100"
          cy="370"
          r="4"
          fill="#73cb71"
          filter="url(#glowFilter)"
          animate={{
            x: [0, 80, 120],
            y: [0, -60, -90],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Central Tech Shield Geometry */}
        {/* Outer Shield Shell */}
        <motion.path
          d="M 250 110 
             C 320 110, 360 140, 360 210 
             C 360 300, 290 355, 250 380 
             C 210 355, 140 300, 140 210 
             C 140 140, 180 110, 250 110 Z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldBorder)"
          strokeWidth="3.5"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "250px 240px" }}
        />

        {/* Inner Shield Facet Layer */}
        <path
          d="M 250 135 
             C 300 135, 335 160, 335 220 
             C 335 290, 280 335, 250 355 
             C 220 335, 165 290, 165 220 
             C 165 160, 200 135, 250 135 Z"
          fill="rgba(7, 26, 18, 0.65)"
          stroke="rgba(115, 203, 113, 0.45)"
          strokeWidth="1.5"
        />

        {/* Central Pulse Hexagon / Core Security Check */}
        <g transform="translate(250, 235)">
          {/* Animated radar rings */}
          <motion.polygon
            points="0,-35 30,-17 30,17 0,35 -30,17 -30,-17"
            fill="none"
            stroke="#73cb71"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.4, 1.8], opacity: [0.8, 0.3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Solid Core Hex */}
          <polygon
            points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14"
            fill="rgba(115, 203, 113, 0.2)"
            stroke="#73cb71"
            strokeWidth="2.5"
          />

          {/* Insure Tech Shield Emblem Vector Icon */}
          <path
            d="M -10 -2 L -2 7 L 12 -7"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Floating Metrics / Data Labels on sides */}
        <g className="text-xs font-mono select-none">
          {/* Top Left Tag */}
          <rect x="40" y="150" width="105" height="28" rx="6" fill="rgba(7, 26, 18, 0.85)" stroke="rgba(115,203,113,0.3)" />
          <text x="50" y="168" fill="#73cb71" fontSize="11" fontWeight="600">RCM STREAM &gt; OK</text>

          {/* Top Right Tag */}
          <rect x="350" y="160" width="115" height="28" rx="6" fill="rgba(7, 26, 18, 0.85)" stroke="rgba(115,203,113,0.3)" />
          <text x="360" y="178" fill="#73cb71" fontSize="11" fontWeight="600">XML PARSER &gt; 99.8%</text>

          {/* Bottom Center Tag */}
          <rect x="185" y="405" width="130" height="28" rx="6" fill="rgba(7, 26, 18, 0.85)" stroke="rgba(115,203,113,0.3)" />
          <text x="195" y="423" fill="#a3e635" fontSize="11" fontWeight="600">APDF ENGINE &gt; ACTIVE</text>
        </g>
      </svg>
    </div>
  );
}
