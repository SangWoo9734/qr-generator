import { QRGenerator } from '@/components/qr/QRGenerator';
import { WiFiForm } from '@/components/qr/forms/WiFiForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WiFi QR Code Generator - Share Your WiFi Easily | QR Studio',
  description: 'Create a WiFi QR code to share your network details. Guests can scan to join your WiFi instantly without typing passwords.',
};

const faqItems = [
  {
    question: 'How do customers join my WiFi using a QR code?',
    answer: 'Most modern smartphones (iOS and Android) have QR scanners built into their camera apps. When a guest scans the code, a prompt will appear asking if they want to join the network.',
  },
  {
    question: 'Is it safe to generate a WiFi QR code here?',
    answer: 'Yes. Our generator works entirely in your browser. Your WiFi name and password are never sent to our servers or stored anywhere. It is 100% private.',
  },
  {
    question: 'Does this work for hidden networks?',
    answer: 'The current version of our tool supports standard visible SSIDs. For best compatibility, ensure your network SSID is visible when using the QR code.',
  },
];

export default function WiFiQRPage() {
  return (
    <QRGenerator
      title="WiFi QR Code Generator"
      description="Let guests join your WiFi network instantly by scanning a QR code. Ideal for cafes, restaurants, and home guest rooms."
      type="wifi"
      formComponent={WiFiForm}
      faqItems={faqItems}
    />
  );
}
