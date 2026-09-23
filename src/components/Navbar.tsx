"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getAssetPath } from "@/lib/assets";
import {
  Menu,
  X,
  PhoneCall,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  Stethoscope,
  RefreshCw,
  FileCode2,
  FileText,
  Shield,
} from "lucide-react";

const SERVICE_DROPDOWN = [
  {
    name: "Medical Billing",
    href: "/services/medical-billing",
    desc: "Charge entry, claims scrubbing & provider billing",
    icon: Stethoscope,
  },
  {
    name: "Revenue Cycle Management (RCM)",
    href: "/services/rcm",
    desc: "Denial management, AR follow-up & payment posting",
    icon: RefreshCw,
  },
  {
    name: "XML & Data Services",
    href: "/services/xml-data",
    desc: "Schema validation, transformation & batch processing",
    icon: FileCode2,
  },
  {
    name: "APDF & Document Processing",
    href: "/services/apdf-documents",
    desc: "Intelligent document extraction & automated indexing",
    icon: FileText,
  },
  {
    name: "General & Corporate Insurance",
    href: "/services",
    desc: "Motor, Health, Life, Fire & Corporate Risk Advisory",
    icon: Shield,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <>
      {/* Top Credential Ribbon */}
      <div className="bg-[#122438] text-slate-300 text-xs py-2 px-4 border-b border-slate-700/50 relative z-50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              IRDAI Certified Authorized Insurance Advisor
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              15+ Insurer Partners &bull; BPO &amp; XML Services
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              <Clock className="w-3 h-3 text-orange-400" />
              99% Claim Success Rate
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-orange-400" />
              Sriperumbudur, Tamil Nadu
            </span>
            <span className="text-slate-600">|</span>
            <a
              href="tel:9150005721"
              className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1 transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              +91 91500 05721
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-white ${
          isScrolled
            ? "shadow-md border-b border-slate-200"
            : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 focus:outline-none group">
              <div className="relative h-11 w-48 sm:w-56 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={getAssetPath("/logo.svg")}
                  alt="Insure Tech Services Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-sm"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === "/"
                    ? "text-[#19375c] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#19375c] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === "/about"
                    ? "text-[#19375c] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#19375c] hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  id="services-dropdown-btn"
                  type="button"
                  onClick={() => setServicesDropdownOpen((prev) => !prev)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isServicesActive
                      ? "text-[#19375c] bg-slate-100 font-bold"
                      : "text-slate-700 hover:text-[#19375c] hover:bg-slate-50"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-orange-500" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    id="services-dropdown-menu"
                    className="absolute top-full left-0 w-80 pt-2 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                        Insure Tech Solutions
                      </div>

                      {SERVICE_DROPDOWN.map((item) => {
                        const Icon = item.icon;
                        const isCurrent = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                              isCurrent
                                ? "bg-orange-50 text-orange-600 font-bold"
                                : "hover:bg-slate-50 text-slate-800"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-[#19375c] mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#19375c] leading-snug">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-600 leading-tight mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/testimonials"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === "/testimonials"
                    ? "text-[#19375c] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#19375c] hover:bg-slate-50"
                }`}
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === "/contact"
                    ? "text-[#19375c] bg-slate-100 font-bold"
                    : "text-slate-700 hover:text-[#19375c] hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:9150005721"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-orange-600 transition-colors"
                title="Call Advisor"
              >
                <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
                <span>+91 91500 05721</span>
              </a>

              <Link
                href="/contact"
                className="btn-orange text-sm py-2.5 px-5 shadow-sm"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-800 hover:border-orange-500 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-orange-500" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <div className="space-y-1">
              <Link
                href="/"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                  pathname === "/" ? "bg-orange-50 text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              <Link
                href="/about"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                  pathname === "/about" ? "bg-orange-50 text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-slate-800 ${
                    isServicesActive ? "bg-slate-100 text-[#19375c] font-bold" : ""
                  }`}
                >
                  <span>Services &amp; Offerings</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-orange-500" : "opacity-40"
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                    {SERVICE_DROPDOWN.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                          pathname === item.href
                            ? "text-orange-600 bg-orange-100/60 font-bold"
                            : "text-slate-700 hover:text-orange-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/testimonials"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                  pathname === "/testimonials" ? "bg-orange-50 text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span>Testimonials</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>

              <Link
                href="/contact"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                  pathname === "/contact" ? "bg-orange-50 text-orange-600 font-bold" : "text-slate-800"
                }`}
              >
                <span>Contact</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a
                href="tel:9150005721"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-200 text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <PhoneCall className="w-4 h-4 text-orange-500" />
                <span>Call Us: +91 91500 05721</span>
              </a>

              <Link
                href="/contact"
                className="btn-orange w-full text-center justify-center py-3"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
