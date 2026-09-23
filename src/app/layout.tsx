import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAssetPath } from "@/lib/assets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insuretechservices.com"),
  title: {
    default: "Insure Tech Services Pvt Ltd | IRDAI Certified Insurance Advisor",
    template: "%s | Insure Tech Services Pvt Ltd",
  },
  description:
    "Leading IRDAI certified insurance advisor and broking partner. Partnered with 15+ top insurance companies for Motor, Health, Life, Fire, and Corporate insurance with 99% claim settlement success.",
  keywords: [
    "Insure Tech Services",
    "Insurance Advisor Tamil Nadu",
    "Motor Insurance Sriperumbudur",
    "Health Insurance Comparison",
    "Life Insurance Plans",
    "Corporate Fire Insurance",
    "Commercial Vehicle Insurance",
    "IRDAI Certified Advisor",
    "Tata AIG",
    "HDFC ERGO",
    "ICICI Lombard",
    "Bajaj Allianz",
    "Care Health Insurance",
  ],
  authors: [{ name: "Insure Tech Services Pvt Ltd" }],
  creator: "Insure Tech Services Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://insuretechservices.com",
    title: "Insure Tech Services Pvt Ltd - The New Standard in Insurance",
    description:
      "IRDAI Certified Authorized Insurance Advisor. Compare & buy Motor, Health, Life & Corporate Insurance from 15+ leading companies.",
    siteName: "Insure Tech Services",
  },
  icons: {
    icon: getAssetPath("/logo.svg"),
    apple: getAssetPath("/logo.svg"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "Insure Tech Services Pvt Ltd",
    url: "https://insuretechservices.com",
    logo: "https://insuretechservices.com/logo.svg",
    description:
      "IRDAI Certified Authorized Insurance Advisor providing comprehensive Motor, Health, Life, and Corporate Insurance solutions across India.",
    telephone: "+91-91500-05721",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Selvashakthi Complex, 228/2 Malaipattu Village",
      addressLocality: "Sriperumbudur",
      addressRegion: "Tamil Nadu",
      postalCode: "601301",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased selection:bg-orange-500/20 selection:text-orange-400`}
      >
        <ThemeProvider>
          {/* Subtle vector background lines across entire layout matching insuretec.com */}
          <div className="vector-lines-container">
            <div className="vector-lines">
              <div className="vector-line" />
              <div className="vector-line hidden sm:block" />
              <div className="vector-line" />
              <div className="vector-line hidden md:block" />
              <div className="vector-line" />
            </div>
          </div>

          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
