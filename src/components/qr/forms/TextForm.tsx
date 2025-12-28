'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import React from 'react';
import { Button } from '../../ui/Button';
import { TipIcon } from '../../ui/Icons';
import { Select } from '../../ui/Input';

interface TextFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const TextForm: React.FC<TextFormProps> = ({ onGenerate }) => {
  const [text, setText] = React.useState('');
  const [size, setSize] = React.useState('512');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      setError('Text is required');
      return;
    }
    if (text.length > 500) {
      setError('Text is too long (max 500 characters)');
      return;
    }
    setError('');
    onGenerate(text, { width: parseInt(size) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1.5">
        <label htmlFor="text" className="block text-sm font-medium text-text-primary">
          Enter Your Text
        </label>
        <textarea
          id="text"
          rows={5}
          className={`w-full rounded-lg border border-border-custom bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
            error ? 'border-red-500 ring-red-500' : ''
          }`}
          placeholder="Type your message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="flex justify-between">
            {error && <p className="text-xs text-red-500">{error}</p>}
            <p className="text-xs text-text-secondary ml-auto">{text.length}/500</p>
        </div>
      </div>
      
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
        Generate Text QR Code
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10 mt-6">
        <h5 className="text-sm font-semibold text-primary mb-1"><TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tips:</h5>
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Keep your text concise for better scannability</li>
          <li>QR codes get denser as you add more text</li>
          <li>Use standard characters for maximum compatibility</li>
        </ul>
      </div>
    </form>
  );
};
