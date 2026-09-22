"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Clarifications and technical specifications for service engagement",
}: {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Clear Answers</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1.5 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-[var(--bg-surface)] border-emerald-500/40 shadow-[0_4px_20px_rgba(115,203,113,0.1)]"
                  : "bg-[var(--bg-surface)]/70 border-[var(--border-subtle)] hover:border-emerald-500/30"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                type="button"
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className={`text-base sm:text-lg font-semibold transition-colors ${
                  isOpen ? "text-emerald-500" : "text-[var(--text-primary)]"
                }`}>
                  {item.question}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-emerald-500 text-white rotate-180"
                      : "bg-[var(--bg-page)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/50">
                  <p>{item.answer}</p>
                  {item.category && (
                    <span className="inline-block mt-3 text-xs font-mono text-emerald-500/80 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Category: {item.category}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
