'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import { trackQRGeneration } from '@/lib/analytics';
import React from 'react';
import { Button } from '../../ui/Button';
import { TipIcon } from '../../ui/Icons';
import { Input, Select } from '../../ui/Input';

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
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Invalid email address';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    trackQRGeneration('email');
    // mailto:email@example.com?subject=Subject&body=Body
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onGenerate(mailto, { width: parseInt(size) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="email"
        label="Email Address"
        placeholder="contact@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      
      <Input
        id="subject"
        label="Subject (Optional)"
        placeholder="Inquiry about..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <div className="space-y-1.5">
        <label htmlFor="body" className="block text-sm font-medium text-text-primary">
          Message (Optional)
        </label>
        <textarea
          id="body"
          rows={3}
          className="w-full rounded-lg border border-border-custom bg-white px-4 py-2.5 text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Hello, I would like to..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
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
        Generate Email QR Code
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10 mt-6">
        <h5 className="text-sm font-semibold text-primary mb-1"><TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tips:</h5>
        <ul className="text-xs text-text-secondary space-y-1 list-disc pl-4">
          <li>Check the email address carefully for typos</li>
          <li>Pre-filling the subject and body saves time for your users</li>
          <li>Test with your own email before sharing the code</li>
        </ul>
      </div>
    </form>
  );
};
