import { QRGenerator } from '@/components/qr/QRGenerator';
import { EmailForm } from '@/components/qr/forms/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email QR Code Generator - Quick Email Contact | QR Studio',
  description: 'Create an email QR code with a pre-filled address and subject. Scanning the code opens the user\'s email app automatically.',
};

const faqItems = [
  {
    question: 'How does an Email QR code work?',
    answer: 'It uses the mailto: protocol. When a smartphone scans it, the device recognizes the email format and opens the default email application with the recipient and subject already filled out.',
  },
  {
    question: 'Can I include a message body?',
    answer: 'Yes! Our tool allows you to include an optional subject and message body, saving your customers time and effort.',
  },
];

export default function EmailQRPage() {
  return (
    <QRGenerator
      title="Email QR Code Generator"
      description="Make it easy for people to email you. One scan opens their email app with your address and a subject line already filled in."
      formComponent={EmailForm}
      faqItems={faqItems}
    />
  );
}
