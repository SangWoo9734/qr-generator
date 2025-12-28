import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border-custom mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-white p-1 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v2h-3v-2zm-3 3h2v3h-2v-3zm3 3h3v2h-3v-2z" />
                </svg>
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
