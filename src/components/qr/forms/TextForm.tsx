'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { TextArea } from '../../ui/Input';
import { BaseForm } from './BaseForm';

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
      setError('Please enter some text');
      return;
    }
    setError('');
    trackQRGeneration('text');
    onGenerate(text, { width: parseInt(size) });
  };

  return (
    <BaseForm
      onSubmit={handleSubmit}
      size={size}
      onSizeChange={setSize}
      buttonText="Generate Text QR Code"
      tips={
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Keep text concise for better scan reliability</li>
          <li>Supports special characters and emojis</li>
          <li>Works entirely offline - no internet needed</li>
        </ul>
      }
    >
      <TextArea
        id="text"
        label="Enter Your Text"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        error={error}
        rows={5}
        required
      />
    </BaseForm>
  );
};
