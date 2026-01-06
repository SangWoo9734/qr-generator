'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { Input } from '../../ui/Input';
import { BaseForm } from './BaseForm';

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
    setError('');
    trackQRGeneration('url');
    onGenerate(url, { width: parseInt(size) });
  };

  return (
    <BaseForm
      onSubmit={handleSubmit}
      size={size}
      onSizeChange={setSize}
      buttonText="Generate QR Code"
      tips={
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Make sure to include http:// or https://</li>
          <li>Test your QR code with your phone after generating</li>
          <li>Static QR codes never expire and work offline</li>
        </ul>
      }
    >
      <Input
        id="url"
        label="Enter Website URL"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={error}
        required
      />
    </BaseForm>
  );
};
