import { QRGenerator } from '@/components/qr/QRGenerator';
import { WiFiForm } from '@/components/qr/forms/WiFiForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WiFi QR Code Generator - Share Your WiFi Easily | QR Studio',
  description: 'Create a WiFi QR code to share your network details. Guests can scan to join your WiFi instantly without typing passwords.',
};

const faqItems = [
  {
    question: 'How do I create a WiFi QR code?',
    answer: 'Creating a WiFi QR code is simple. Enter your network name (SSID), password, and select the security type (WPA/WPA2 is most common). Click "Generate QR Code" and download it. When someone scans this code, they\'ll automatically connect to your network without typing the password.',
  },
  {
    question: 'Do WiFi QR codes work on all phones?',
    answer: 'Yes, WiFi QR codes work on most modern smartphones. iOS devices (iPhone) running iOS 11 or later and Android devices running Android 10 or later can scan and connect directly through their camera app.',
  },
  {
    question: 'Is it safe to share my WiFi via QR code?',
    answer: 'WiFi QR codes are generally safe for trusted environments like your home or office. Our tool generates the QR code locally in your browser, so your WiFi password is never sent to our servers or stored anywhere.',
  },
  {
    question: 'Can I create a QR code for hidden WiFi networks?',
    answer: 'Yes, but ensure you check the "Hidden" option if your network SSID is not broadcast. This tells the scanning device to look for the network even if it\'s not visible in the standard scan list.',
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
