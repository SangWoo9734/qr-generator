'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import React from 'react';
import { TipIcon } from '../../ui/Icons';
import { Button } from '../../ui/Button';
import { Input, Select } from '../../ui/Input';

interface URLFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const URLForm: React.FC<URLFormProps> = ({ onGenerate }) => {
  const [url, setUrl] = React.useState('');
  const [size, setSize] = React.useState('512');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      // Basic validation, but we can be lenient or auto-prepend
      // Let's just warn for now or prepend if it looks like a domain
    }
    setError('');
    onGenerate(url, { width: parseInt(size) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="url"
        label="Enter Website URL"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={error}
        required
      />
      
      <Select
        id="size"
        label="QR Code Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        options={[
          { value: '256', label: 'Small (256x256)' },
          { value: '512', label: 'Medium (512x512)' },
          { value: '1024', label: 'Large (1024x1024)' },
        ]}
      />

      <Button type="submit" className="w-full">
        Generate QR Code
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10">
        <h5 className="text-sm font-semibold text-primary mb-1"><TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tips:</h5>
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Make sure to include http:// or https://</li>
          <li>Test your QR code with your phone after generating</li>
          <li>Static QR codes never expire and work offline</li>
        </ul>
      </div>
    </form>
  );
};
