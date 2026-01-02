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
}

export const QRGenerator: React.FC<QRGeneratorProps> = ({
  title,
  description,
  type,
  formComponent: FormComponent,
  faqItems,
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
      <div className="max-w-4xl mx-auto space-y-12 mt-16">
        <section className="prose prose-indigo max-w-none">
          <h2 className="text-2xl font-bold text-text-primary">How to Create your QR Code</h2>
          <p className="text-text-secondary">
            Creating a professional QR code is fast and easy with our tool. Simply follow these steps:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-text-secondary">
            <li><strong>Enter your information:</strong> Use the form above to enter the URL, WiFi details, or text you want to encode.</li>
            <li><strong>Customize:</strong> Select the size that best fits your needs.</li>
            <li><strong>Generate:</strong> Click the generate button to create your custom QR code instantly.</li>
            <li><strong>Download:</strong> Save your QR code as a high-quality PNG for digital use or a scalable SVG for printing.</li>
          </ol>
        </section>

        {faqItems && faqItems.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-border-custom">
                  <h3 className="font-bold text-lg text-text-primary mb-2">{item.question}</h3>
                  <p className="text-text-secondary">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
