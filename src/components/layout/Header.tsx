'use client';

import { EmailIcon, PhoneIcon, TextIcon, UrlIcon, WifiIcon } from '@/components/ui/Icons';
import Image from 'next/image';
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
            <div className="p-1 rounded-lg">
              <Image src="/icon.png" alt="QR Studio Logo" width={32} height={32} className="rounded-lg" />
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
