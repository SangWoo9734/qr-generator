import { QRGenerator } from '@/components/qr/QRGenerator';
import { PhoneForm } from '@/components/qr/forms/PhoneForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phone Number QR Code Generator | QR Studio',
  description: 'Create a phone QR code that dials a number automatically when scanned. Fast way to share business contact lines.',
};

const faqItems = [
  {
    question: 'How do I create a phone QR code?',
    answer: 'Enter your phone number, including the country code for international compatibility. Click "Generate" and download your QR code. When scanned, it will open the phone\'s dialer app with your number already filled in.',
  },
  {
    question: 'Will the phone call be made automatically?',
    answer: 'No. For security reasons, scanning the code will open the dialer app with the number ready, but the user must still press the "Call" button to initiate the call.',
  },
  {
    question: 'Does this work for international numbers?',
    answer: 'Yes. We recommend using the full international format (e.g., +1 for USA, +44 for UK) to ensure the number can be dialed correctly from any country in the world.',
  },
  {
    question: 'Can I use this for WhatsApp?',
    answer: 'While this tool is for direct phone calls, you can use our URL QR code generator with a WhatsApp "wa.me" link to create a QR code that opens a WhatsApp chat directly.',
  },
];

export default function PhoneQRPage() {
  return (
    <QRGenerator
      title="Phone QR Code Generator"
      description="Create a QR code that opens the dialer app on any smartphone with your number ready to call. Perfect for support lines and business flyers."
      type="phone"
      formComponent={PhoneForm}
      faqItems={faqItems}
    />
  );
}
