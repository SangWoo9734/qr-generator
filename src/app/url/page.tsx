import { QRGenerator } from '@/components/qr/QRGenerator';
import { URLForm } from '@/components/qr/forms/URLForm';
import { tools } from '@/config/tools';
import { Metadata } from 'next';

const tool = tools.find(t => t.id === 'url')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
};

export default function URLPage() {
  return (
    <QRGenerator
      title={tool.name}
      description={tool.longDescription}
      type="url"
      formComponent={URLForm}
      faqItems={tool.faqItems}
      bestPractices={tool.bestPractices}
    />
  );
}
