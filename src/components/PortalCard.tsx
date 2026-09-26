"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, LucideIcon } from "lucide-react";

export interface PortalCardProps {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  imageSrc: string;
  href: string;
  accentColor: "emerald" | "cyan" | "amber" | "teal";
  badgeIcon?: LucideIcon;
  features?: string[];
}

export function PortalCard({
  title,
  subtitle,
  categoryTag,
  imageSrc,
  href,
  accentColor,
  badgeIcon: BadgeIcon,
  features,
}: PortalCardProps) {
  // Color configuration based on accent
  const colorMap = {
    emerald: {
      border: "group-hover:border-emerald-500",
      glow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.35)]",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      textAccent: "group-hover:text-emerald-600",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      ring: "group-hover:ring-emerald-400/30",
    },
    cyan: {
      border: "group-hover:border-cyan-500",
      glow: "hover:shadow-[0_20px_50px_rgba(6,182,212,0.35)]",
      badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
      textAccent: "group-hover:text-cyan-600",
      buttonBg: "bg-cyan-600 hover:bg-cyan-700 text-white",
      ring: "group-hover:ring-cyan-400/30",
    },
    amber: {
      border: "group-hover:border-amber-500",
      glow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.35)]",
      badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
      textAccent: "group-hover:text-amber-600",
      buttonBg: "bg-amber-600 hover:bg-amber-700 text-white",
      ring: "group-hover:ring-amber-400/30",
    },
    teal: {
      border: "group-hover:border-teal-500",
      glow: "hover:shadow-[0_20px_50px_rgba(20,184,166,0.35)]",
      badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
      textAccent: "group-hover:text-teal-600",
      buttonBg: "bg-teal-600 hover:bg-teal-700 text-white",
      ring: "group-hover:ring-teal-400/30",
    },
  };

  const currentTheme = colorMap[accentColor];

  return (
    <Link
      href={href}
      className={`group relative block bg-white rounded-3xl p-4 sm:p-5 transition-all duration-300 transform hover:-translate-y-2.5 border-2 border-transparent ${currentTheme.border} ${currentTheme.glow} shadow-xl hover:shadow-2xl overflow-hidden`}
    >
      {/* Visual Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        {/* Subtle glass gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm border backdrop-blur-md bg-white/90 text-slate-800`}
          >
            {BadgeIcon && <BadgeIcon className="w-3 h-3 text-slate-600" />}
            {categoryTag}
          </span>
        </div>

        {/* Quick Launch Pill icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-4 h-4 text-slate-800" />
        </div>
      </div>

      {/* Card Content Information */}
      <div className="pt-4 pb-1 px-1">
        <h3
          className={`text-xl font-bold tracking-tight text-slate-900 ${currentTheme.textAccent} transition-colors duration-200 capitalize`}
        >
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-snug">
          {subtitle}
        </p>

        {/* Optional feature bullet pills */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
            {features.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium"
              >
                • {feat}
              </span>
            ))}
          </div>
        )}

        {/* Action Link Row */}
        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
          <span>Enter Portal</span>
          <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
