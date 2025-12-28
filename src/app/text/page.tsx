import { QRGenerator } from '@/components/qr/QRGenerator';
import { TextForm } from '@/components/qr/forms/TextForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text QR Code Generator - Convert Text to QR | QR Studio',
  description: 'Convert any plain text into a QR code. Useful for secret messages, notes, and information sharing without an internet connection.',
};

const faqItems = [
  {
    question: 'How much text can I put in a QR code?',
    answer: 'While QR codes can technically hold up to 4,000 characters, we limit ours to 500 for better scan reliability. Longer text makes the QR code more complex and harder for some cameras to read.',
  },
  {
    question: 'Does scanning a text QR code require internet?',
    answer: 'No. The text is encoded directly into the QR code. When scanned, the text will be displayed on the phone even if there is no internet connection.',
  },
];

export default function TextQRPage() {
  return (
    <QRGenerator
      title="Text QR Code Generator"
      description="Create a QR code for plain text. Perfect for short notes, product information, or simple messages that need to be read offline."
      formComponent={TextForm}
      faqItems={faqItems}
    />
  );
}
