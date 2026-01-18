'use client';

import { generateQRCodeDataURL, generateQRCodeSVG } from '@/lib/qr-utils';
import React from 'react';
import { AdUnit } from '../ui/AdUnit';
import { QRPreview } from './QRPreview';

import { QRCodeOptions } from '@/lib/qr-utils';

interface QRGeneratorProps {
  title: string;
  description: string;
  type: string;
  formComponent: React.ComponentType<{ onGenerate: (data: string, options: QRCodeOptions) => void }>;
  faqItems?: { question: string; answer: string }[];
  bestPractices?: string[];
}

export const QRGenerator: React.FC<QRGeneratorProps> = ({
  title,
  description,
  type,
  formComponent: FormComponent,
  faqItems,
  bestPractices,
}) => {
  const [qrDataUrl, setQrDataUrl] = React.useState<string | null>(null);
  const [qrSvg, setQrSvg] = React.useState<string | null>(null);
  const [options, setOptions] = React.useState<QRCodeOptions>({ width: 512 });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = async (data: string, opts: QRCodeOptions) => {
    setIsLoading(true);
    setOptions(opts);
    try {
      const [dataUrl, svg] = await Promise.all([
        generateQRCodeDataURL(data, opts),
        generateQRCodeSVG(data, opts),
      ]);
      setQrDataUrl(dataUrl);
      setQrSvg(svg);
    } catch (err) {
      console.error('Failed to generate QR code', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Ad Placement - Header Bottom */}
      <AdUnit slot="1475123293" height="h-24" className="mb-8" />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Form (40%) */}
        <div className="w-full lg:w-[40%] space-y-8">
          <div>
            <h1 className="text-3xl font-extrabold text-text-primary mb-3">
              {title}
            </h1>
            <p className="text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-border-custom">
            <FormComponent onGenerate={handleGenerate} />
          </div>
        </div>

        {/* Right Column: Preview (60%) */}
        <div className="w-full lg:w-[60%] lg:sticky lg:top-24">
          <QRPreview
            qrDataUrl={qrDataUrl}
            qrSvg={qrSvg}
            isLoading={isLoading}
            size={options.width || 512}
            type={type}
          />
        </div>
      </div>

      {/* Ad Placement - Tool Bottom */}
      <AdUnit slot="2229817675" height="h-24" className="my-12" />

      {/* Content Section (SEO) */}
      <div className="max-w-4xl mx-auto space-y-16 mt-16">
        {/* How to Section */}
        <section className="bg-white p-8 rounded-2xl border border-border-custom shadow-sm">
          <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">01</span>
            How to Create your QR Code
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ol className="space-y-4 text-text-secondary">
                <li className="flex gap-4">
                  <span className="font-bold text-primary">1.</span>
                  <span><strong>Enter your information:</strong> Fill in the fields above with your desired data (URL, WiFi details, etc.).</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary">2.</span>
                  <span><strong>Customize:</strong> Adjust the resolution and settings to match your specific hardware or digital needs.</span>
                </li>
              </ol>
            </div>
            <div>
              <ol className="space-y-4 text-text-secondary" start={3}>
                <li className="flex gap-4">
                  <span className="font-bold text-primary">3.</span>
                  <span><strong>Generate:</strong> Our local engine creates your custom code instantly in the browser.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary">4.</span>
                  <span><strong>Download:</strong> Export as PNG for web use or high-quality SVG for professional printing.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        {bestPractices && bestPractices.length > 0 && (
          <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
            <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">02</span>
              Pro Tips: Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/50 p-4 rounded-xl border border-white/50">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-text-secondary text-sm leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Specs Section */}
        <section className="prose prose-indigo max-w-none bg-white p-8 rounded-2xl border border-border-custom shadow-sm">
          <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">03</span>
            Technical Specifications & Standards
          </h2>
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="space-y-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                All QR codes generated by <strong>QR Studio</strong> strictly adhere to the <strong>ISO/IEC 18004</strong> international standard. This ensures 100% compatibility with any hardware scanner or smartphone camera worldwide.
              </p>
              <div className="bg-background-secondary p-4 rounded-xl border border-border-custom">
                <ul className="text-xs space-y-2 text-text-secondary font-mono">
                  <li className="flex justify-between"><span>Standards:</span> <span className="text-primary">ISO/IEC 18004:2015</span></li>
                  <li className="flex justify-between"><span>Encoding:</span> <span className="text-primary">UTF-8 / Alphanumeric</span></li>
                  <li className="flex justify-between"><span>Correction:</span> <span className="text-primary">Reed-Solomon (Auto)</span></li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                Our generation engine uses optimized <strong>Reed-Solomon Error Correction</strong>, allowing codes to remain scannable even if up to 30% of the area is damaged or obscured.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed font-semibold">
                Privacy Guaranteed: Processing occurs locally in your browser memory via client-side libraries.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqItems && faqItems.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">04</span>
              Tool-Specific FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-border-custom hover:border-primary transition-all group">
                  <h3 className="font-bold text-lg text-text-primary mb-3 group-hover:text-primary transition-colors">{item.question}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            'name': `${title} Generator - QR Studio`,
            'description': description,
            'applicationCategory': 'UtilitiesApplication',
            'operatingSystem': 'Any',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'USD'
            }
          })
        }}
      />
      {faqItems && faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqItems.map(item => ({
                '@type': 'Question',
                'name': item.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': item.answer
                }
              }))
            })
          }}
        />
      )}
    </div>
  );
};
