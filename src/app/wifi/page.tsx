import { QRGenerator } from '@/components/qr/QRGenerator';
import { WiFiForm } from '@/components/qr/forms/WiFiForm';
import { tools } from '@/config/tools';
import { Metadata } from 'next';

const tool = tools.find(t => t.id === 'wifi')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
  alternates: {
    canonical: '/wifi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WiFiPage() {
  return (
    <QRGenerator
      title={tool.name}
      description={tool.longDescription}
      type="wifi"
      formComponent={WiFiForm}
      faqItems={tool.faqItems}
      bestPractices={tool.bestPractices}
    />
  );
}
