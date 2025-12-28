import { QRGenerator } from '@/components/qr/QRGenerator';
import { PhoneForm } from '@/components/qr/forms/PhoneForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phone Number QR Code Generator | QR Studio',
  description: 'Create a phone QR code that dials a number automatically when scanned. Fast way to share business contact lines.',
};

const faqItems = [
  {
    question: 'Will the phone call be made automatically?',
    answer: 'No. For security reasons, scanning the code will open the phone\'s dialer app with the number filled in. The user must still press the "Call" button to start the call.',
  },
  {
    question: 'Does this work for international numbers?',
    answer: 'Yes. We recommend using the international format (e.g., +1 for USA) to ensure the number can be dialed correctly from anywhere in the world.',
  },
];

export default function PhoneQRPage() {
  return (
    <QRGenerator
      title="Phone QR Code Generator"
      description="Create a QR code that opens the dialer app on any smartphone with your number ready to call. Perfect for support lines and business flyers."
      formComponent={PhoneForm}
      faqItems={faqItems}
    />
  );
}
