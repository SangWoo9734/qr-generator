'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { Input, TextArea } from '../../ui/Input';
import { BaseForm } from './BaseForm';

interface EmailFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onGenerate }) => {
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [body, setBody] = React.useState('');
  const [size, setSize] = React.useState('512');
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email address';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    trackQRGeneration('email');
    const mailtoData = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onGenerate(mailtoData, { width: parseInt(size) });
  };

  return (
    <BaseForm
      onSubmit={handleSubmit}
      size={size}
      onSizeChange={setSize}
      buttonText="Generate Email QR Code"
      tips={
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Pre-fill subject and body to save users time</li>
          <li>Works with all major email apps (Gmail, Outlook, etc.)</li>
          <li>Perfect for RSVP, support, or contact forms</li>
        </ul>
      }
    >
      <Input
        id="email"
        label="Recipient Email"
        type="email"
        placeholder="hello@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      
      <Input
        id="subject"
        label="Subject (Optional)"
        placeholder="Inquiry about services"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <TextArea
        id="body"
        label="Message Body (Optional)"
        placeholder="Hi there, I would like to..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
      />
    </BaseForm>
  );
};
