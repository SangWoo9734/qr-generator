import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Analytics } from "@/components/ui/Analytics";
import { WebAppSchema } from "@/components/ui/JsonLd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "무료 QR코드 생성기 - QR Studio: 쉽고 빠른 QR코드 만들기",
  description: "QR Studio에서 쉽고 빠르게 QR코드를 생성하세요. URL, 와이파이, 명함 등 다양한 유형의 QR코드를 무료로 만들 수 있습니다.",
  metadataBase: new URL('https://qr-generator.cc'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
      'ja-JP': '/ja-JP',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6614861725944730"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
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
