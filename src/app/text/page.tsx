import { QRGenerator } from '@/components/qr/QRGenerator';
import { TextForm } from '@/components/qr/forms/TextForm';
import { tools } from '@/config/tools';
import { Metadata } from 'next';

const tool = tools.find(t => t.id === 'text')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
};

export default function TextPage() {
  return (
    <QRGenerator
      title={tool.name}
      description={tool.longDescription}
      type="text"
      formComponent={TextForm}
      faqItems={tool.faqItems}
    />
  );
}
