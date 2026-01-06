'use client';

import React, { ReactNode } from 'react';
import { Button } from '../../ui/Button';
import { TipIcon } from '../../ui/Icons';
import { Select } from '../../ui/Input';

interface BaseFormProps {
  onSubmit: (e: React.FormEvent) => void;
  size: string;
  onSizeChange: (size: string) => void;
  buttonText: string;
  tips: ReactNode;
  children: ReactNode;
}

export const BaseForm: React.FC<BaseFormProps> = ({
  onSubmit,
  size,
  onSizeChange,
  buttonText,
  tips,
  children,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {children}
      
      <Select
        id="size"
        label="QR Code Size"
        value={size}
        onChange={(e) => onSizeChange(e.target.value)}
        options={[
          { value: '256', label: 'Small (256x256)' },
          { value: '512', label: 'Medium (512x512)' },
          { value: '1024', label: 'Large (1024x1024)' },
        ]}
      />

      <Button type="submit" className="w-full">
        {buttonText}
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10">
        <h5 className="text-sm font-semibold text-primary mb-1">
          <TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tips:
        </h5>
        {tips}
      </div>
    </form>
  );
};
