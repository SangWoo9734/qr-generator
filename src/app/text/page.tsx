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
    answer: 'While QR codes can technically hold up to 4,000 characters, we recommend keeping your text under 500 characters for the best scanning reliability. Longer text makes the QR code pattern denser and harder for some phone cameras to read.',
  },
  {
    question: 'Does scanning a text QR code require internet?',
    answer: 'No. The text is encoded directly into the QR code pattern. When scanned, the text will be displayed on the phone even if there is no internet connection, making it perfect for offline information sharing.',
  },
  {
    question: 'Can I include special characters and emojis?',
    answer: 'Yes, our text QR code generator supports UTF-8 encoding, which means you can include special characters, symbols, and even emojis in your messages.',
  },
  {
    question: 'Is my text data private?',
    answer: 'Absolutely. Our tool generates the QR code entirely in your browser. Your text is never sent to our servers or stored anywhere, ensuring 100% privacy for your messages.',
  },
];

export default function TextQRPage() {
  return (
    <QRGenerator
      title="Text QR Code Generator"
      description="Create a QR code for plain text. Perfect for short notes, product information, or simple messages that need to be read offline."
      type="text"
      formComponent={TextForm}
      faqItems={faqItems}
    />
  );
}
