"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative p-2.5 rounded-full transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
        theme === "dark"
          ? "bg-forest-900/80 border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:bg-forest-800 shadow-[0_0_15px_rgba(115,203,113,0.15)]"
          : "bg-white/90 border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" strokeWidth={2} />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0" strokeWidth={2} />
        )}
      </div>
    </button>
  );
}
