import { QRGenerator } from '@/components/qr/QRGenerator';
import { PhoneForm } from '@/components/qr/forms/PhoneForm';
import { tools } from '@/config/tools';
import { Metadata } from 'next';

const tool = tools.find(t => t.id === 'phone')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
};

export default function PhonePage() {
  return (
    <QRGenerator
      title={tool.name}
      description={tool.longDescription}
      type="phone"
      formComponent={PhoneForm}
      faqItems={tool.faqItems}
    />
  );
}
