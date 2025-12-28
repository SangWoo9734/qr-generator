'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { Button } from '../../ui/Button';
import { TipIcon } from '../../ui/Icons';
import { Input, Select } from '../../ui/Input';

interface PhoneFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const PhoneForm: React.FC<PhoneFormProps> = ({ onGenerate }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [size, setSize] = React.useState('512');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setError('Phone number is required');
      return;
    }
    setError('');
    trackQRGeneration('phone');
    // tel:+123456789
    onGenerate(`tel:${phoneNumber}`, { width: parseInt(size) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="phone"
        label="Phone Number"
        placeholder="+1 234 567 8900"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        error={error}
        required
      />
      
      <Select
        id="size"
        label="QR Code Size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        options={[
          { value: '256', label: 'Small' },
          { value: '512', label: 'Medium' },
          { value: '1024', label: 'Large' },
        ]}
      />

      <Button type="submit" className="w-full">
        Generate Phone QR Code
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10 mt-6">
        <h5 className="text-sm font-semibold text-primary mb-1"><TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tips:</h5>
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Include the country code for international calls (e.g., +1 for USA)</li>
          <li>Ensure the number is correctly formatted</li>
          <li>Static codes work even if the user has no internet</li>
        </ul>
      </div>
    </form>
  );
};
