import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    default: "Insure Tech Services Pvt Ltd | Medical Billing, XML & APDF Solutions",
    template: "%s | Insure Tech Services Pvt Ltd",
  },
  description:
    "High-performance digital ecosystem specializing in Healthcare Medical Billing & Revenue Cycle Management (RCM), structured XML data conversion, and APDF document processing.",
  keywords: [
    "Medical Billing Services",
    "Revenue Cycle Management",
    "RCM healthcare",
    "Claims Processing",
    "Denial Management",
    "XML Data Conversion",
    "XML Validation and Integration",
    "Structured Data Services",
    "APDF Document Processing",
    "OCR Document Automation",
    "Insure Tech Services",
  ],
  authors: [{ name: "Insure Tech Services Pvt Ltd" }],
  creator: "Insure Tech Services Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insuretechservices.com",
    title: "Insure Tech Services Pvt Ltd - Accuracy. Efficiency. Reliability.",
    description:
      "Precision Medical Billing, Enterprise XML Conversion, and APDF Document Processing Solutions.",
    siteName: "Insure Tech Services",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Insure Tech Services Pvt Ltd",
    url: "https://insuretechservices.com",
    logo: "https://insuretechservices.com/logo.svg",
    description:
      "Enterprise healthcare revenue cycle management, XML structured data services, and automated APDF document processing.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-44-4890-2300",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col antialiased selection:bg-emerald-500/20 selection:text-emerald-400`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
