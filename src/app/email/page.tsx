import { QRGenerator } from '@/components/qr/QRGenerator';
import { EmailForm } from '@/components/qr/forms/EmailForm';
import { tools } from '@/config/tools';
import { Metadata } from 'next';

const tool = tools.find(t => t.id === 'email')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
  alternates: {
    canonical: '/email',
    languages: {
      'en-US': '/en-US/email',
      'es-ES': '/es-ES/email',
      'ja-JP': '/ja-JP/email',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmailPage() {
  return (
    <QRGenerator
      title={tool.name}
      description={tool.longDescription}
      type="email"
      formComponent={EmailForm}
      faqItems={tool.faqItems}
      bestPractices={tool.bestPractices}
      useCases={tool.useCases}
    />
  );
}
