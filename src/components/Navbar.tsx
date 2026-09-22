"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Medical Billing & RCM", href: "/medical-billing" },
  { name: "XML & Data Services", href: "/xml-services" },
  { name: "APDF & Documents", href: "/apdf-services" },
  { name: "Contact & RFQ", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-surface)]/85 backdrop-blur-md shadow-lg border-b border-[var(--border-subtle)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative h-12 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Insure Tech Services Pvt Ltd Logo"
                fill
                priority
                className="object-contain dark:brightness-110 drop-shadow-[0_2px_8px_rgba(115,203,113,0.2)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-emerald-500 font-semibold bg-emerald-500/10 dark:bg-emerald-500/15"
                      : "text-[var(--text-secondary)] hover:text-emerald-500 hover:bg-emerald-500/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: ThemeToggle + CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-[#4d915d] to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-[0_4px_18px_rgba(77,145,93,0.35)] hover:shadow-[0_6px_24px_rgba(115,203,113,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel mx-4 my-2 p-4 shadow-2xl border border-[var(--border-glow)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-emerald-500 bg-emerald-500/10 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-emerald-500 hover:bg-emerald-500/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[var(--border-subtle)] mt-2">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-emerald-600 to-[#4d915d] shadow-md"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
