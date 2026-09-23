"use client";

import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

interface Partner {
  name: string;
  category: string;
  logo: string;
  claimRate: string;
}

const PARTNERS: Partner[] = [
  { name: "Tata AIG", category: "General & Motor", logo: getAssetPath("/assets/tata.jpeg"), claimRate: "98.9%" },
  { name: "HDFC ERGO", category: "Health & Motor", logo: getAssetPath("/assets/ergo.png"), claimRate: "99.1%" },
  { name: "ICICI Lombard", category: "Motor & Health", logo: getAssetPath("/assets/lombard.png"), claimRate: "99.0%" },
  { name: "Bajaj Allianz", category: "All General", logo: getAssetPath("/assets/Bajaj.png"), claimRate: "98.7%" },
  { name: "Cholamandalam MS", category: "Commercial & Motor", logo: getAssetPath("/assets/chola.png"), claimRate: "98.5%" },
  { name: "Kotak Mahindra", category: "Life & General", logo: getAssetPath("/assets/kotak.jpg"), claimRate: "98.8%" },
  { name: "SBI General", category: "Fire & Health", logo: getAssetPath("/assets/sbi.png"), claimRate: "98.6%" },
  { name: "Care Insurance", category: "Health & Critical Illness", logo: getAssetPath("/assets/care.png"), claimRate: "99.3%" },
];

export function PartnerLogosMarquee() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 mb-3">
            <span>Direct Tie-Ups</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#19375c]">
            Our Trusted Insurance Partners
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We partner with 15+ leading IRDAI-registered insurance companies to compare quotes and guarantee you the lowest premium with the highest claim settlement ratio.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="insuretec-card p-5 flex flex-col items-center justify-center text-center group bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-lg transition-all"
            >
              <div className="relative h-16 w-36 mb-3 flex items-center justify-center transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className="object-contain p-1 rounded"
                />
              </div>

              <h3 className="font-bold text-sm text-[#19375c] group-hover:text-orange-500 transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {partner.category}
              </p>

              <div className="mt-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span>{partner.claimRate} Settlement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#19375c] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base sm:text-lg text-white">
              Looking for a specific insurer or multi-quote comparison?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
              Get an unbiased side-by-side comparison with personalized recommendations.
            </p>
          </div>
          <a
            href="tel:9150005721"
            className="btn-orange text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap shadow-md"
          >
            Speak to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}
