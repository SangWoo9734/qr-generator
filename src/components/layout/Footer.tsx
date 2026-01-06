import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-custom mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-1 rounded-lg">
                <Image src="/icon.png" alt="QR Studio Logo" width={24} height={24} className="rounded-lg" />
              </div>
              <span className="text-lg font-bold">QR Studio</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm">
              The ultimate all-in-one QR code generator. Free, instant, and privacy-focused. 
              Generated codes never expire and are free for commercial use.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/url" className="text-text-secondary hover:text-primary transition-colors">URL QR Code</Link></li>
              <li><Link href="/wifi" className="text-text-secondary hover:text-primary transition-colors">WiFi QR Code</Link></li>
              <li><Link href="/text" className="text-text-secondary hover:text-primary transition-colors">Text QR Code</Link></li>
              <li><Link href="/email" className="text-text-secondary hover:text-primary transition-colors">Email QR Code</Link></li>
              <li><Link href="/phone" className="text-text-secondary hover:text-primary transition-colors">Phone QR Code</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-custom mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} QR Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Built for speed & privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
