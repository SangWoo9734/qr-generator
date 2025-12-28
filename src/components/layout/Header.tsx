'use client';

import { EmailIcon, PhoneIcon, TextIcon, UrlIcon, WifiIcon } from '@/components/ui/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { name: 'URL', path: '/url', icon: <UrlIcon size={16} /> },
  { name: 'WiFi', path: '/wifi', icon: <WifiIcon size={16} /> },
  { name: 'Text', path: '/text', icon: <TextIcon size={16} /> },
  { name: 'Email', path: '/email', icon: <EmailIcon size={16} /> },
  { name: 'Phone', path: '/phone', icon: <PhoneIcon size={16} /> },
];

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-custom bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v2h-3v-2zm-3 3h2v3h-2v-3zm3 3h3v2h-3v-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              QR Studio
            </span>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  pathname === item.path
                    ? 'bg-primary-light text-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            {/* Mobile menu could be added here, but for now we'll rely on the horizontal scroll tabs on pages */}
          </div>
        </div>
      </div>
    </header>
  );
};
