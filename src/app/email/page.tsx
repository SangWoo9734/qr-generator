import { QRGenerator } from '@/components/qr/QRGenerator';
import { EmailForm } from '@/components/qr/forms/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email QR Code Generator - Quick Email Contact | QR Studio',
  description: 'Create an email QR code with a pre-filled address and subject. Scanning the code opens the user\'s email app automatically.',
};

const faqItems = [
  {
    question: 'How do I create an email QR code?',
    answer: 'Enter the recipient\'s email address, a subject line, and an optional message body. Click "Generate" and download your QR code. When scanned, it will automatically open the user\'s default email app with all the fields pre-filled.',
  },
  {
    question: 'Can I pre-fill the email subject and body?',
    answer: 'Yes! Our tool allows you to include a subject and a message body. This is perfect for RSVPing to events, requesting support, or starting a specific conversation with your customers.',
  },
  {
    question: 'Do email QR codes work on all devices?',
    answer: 'Yes, email QR codes use the standard "mailto:" protocol, which is supported by virtually all modern smartphones and email clients, including Gmail, Outlook, and Apple Mail.',
  },
  {
    question: 'Can I send attachments through email QR codes?',
    answer: 'No, the standard "mailto:" protocol used by QR codes does not support attachments for security and technical reasons. You can, however, include a link to a file in the message body.',
  },
];

export default function EmailQRPage() {
  return (
    <QRGenerator
      title="Email QR Code Generator"
      description="Make it easy for people to email you. One scan opens their email app with your address and a subject line already filled in."
      type="email"
      formComponent={EmailForm}
      faqItems={faqItems}
    />
  );
}
