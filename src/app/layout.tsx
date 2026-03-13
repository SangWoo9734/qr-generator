import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Analytics } from "@/components/ui/Analytics";
import { WebAppSchema } from "@/components/ui/JsonLd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR 코드 무료 생성 - 쉽고 빠른 QR Studio",
  description: "QR Studio에서 쉽고 빠르게 QR 코드를 무료로 생성하세요. 다양한 디자인 옵션과 편리한 기능 제공. 지금 바로 시작하세요!",
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
