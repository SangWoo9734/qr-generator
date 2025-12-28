import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Analytics } from "@/components/ui/Analytics";
import { WebAppSchema } from "@/components/ui/JsonLd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Studio - Free QR Code Generator | Instant & Private",
  description: "Create URL, WiFi, Text, Email, and Phone codes instantly with QR Studio. Free, no signup, download as PNG or SVG. 100% private.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6614861725944730"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Analytics />
        <WebAppSchema />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
