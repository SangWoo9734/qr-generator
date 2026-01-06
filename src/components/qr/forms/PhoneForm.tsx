'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { Input } from '../../ui/Input';
import { BaseForm } from './BaseForm';

interface PhoneFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const PhoneForm: React.FC<PhoneFormProps> = ({ onGenerate }) => {
  const [phone, setPhone] = React.useState('');
  const [size, setSize] = React.useState('512');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setError('Phone number is required');
      return;
    }
    setError('');
    trackQRGeneration('phone');
    onGenerate(`tel:${phone}`, { width: parseInt(size) });
  };

  return (
    <BaseForm
      onSubmit={handleSubmit}
      size={size}
      onSizeChange={setSize}
      buttonText="Generate Phone QR Code"
      tips={
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Use international format (e.g., +1234567890)</li>
          <li>Scanning will open the dialer with the number ready</li>
          <li>Perfect for business cards and support flyers</li>
        </ul>
      }
    >
      <Input
        id="phone"
        label="Phone Number"
        placeholder="+1 234 567 8900"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={error}
        required
      />
    </BaseForm>
  );
};
