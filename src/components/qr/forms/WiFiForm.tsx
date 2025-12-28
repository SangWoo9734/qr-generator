'use client';

import { QRCodeOptions } from '@/lib/qr-utils';

import React from 'react';
import { Button } from '../../ui/Button';
import { TipIcon, WifiIcon } from '../../ui/Icons';
import { Input, Select } from '../../ui/Input';

interface WiFiFormProps {
  onGenerate: (data: string, options: QRCodeOptions) => void;
}

export const WiFiForm: React.FC<WiFiFormProps> = ({ onGenerate }) => {
  const [ssid, setSsid] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [encryption, setEncryption] = React.useState('WPA');
  const [size, setSize] = React.useState('512');
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!ssid) newErrors.ssid = 'Network name (SSID) is required';
    if (encryption !== 'nopass' && !password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // MeCard format for WiFi: WIFI:S:SSID;T:WPA;P:PASSWORD;;
    const wifiData = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
    onGenerate(wifiData, { width: parseInt(size) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        id="ssid"
        label="Network Name (SSID)"
        placeholder="MyHomeWiFi"
        value={ssid}
        onChange={(e) => setSsid(e.target.value)}
        error={errors.ssid}
        required
      />
      
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        disabled={encryption === 'nopass'}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          id="encryption"
          label="Encryption"
          value={encryption}
          onChange={(e) => setEncryption(e.target.value)}
          options={[
            { value: 'WPA', label: 'WPA/WPA2' },
            { value: 'WEP', label: 'WEP' },
            { value: 'nopass', label: 'None' },
          ]}
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
      </div>

      <Button type="submit" className="w-full">
        Generate WiFi QR Code
      </Button>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10 mt-6">
        <h5 className="text-sm font-semibold text-primary mb-1"><WifiIcon size={16} className="inline-block mr-1.5 mb-0.5" /> WiFi Setup:</h5>
        <p className="text-xs text-text-secondary">
          Scanning this QR code will automatically connect your guests to your WiFi network without them needing to type the password.
        </p>
      </div>

      <div className="bg-primary-light p-4 rounded-lg border border-primary/10 mt-4">
        <h5 className="text-sm font-semibold text-primary mb-1"><TipIcon size={16} className="inline-block mr-1.5 mb-0.5" /> Pro Tip:</h5>
        <p className="text-xs text-text-secondary">
          We process everything locally. Your WiFi password is never sent to any server.
        </p>
      </div>
    </form>
  );
};
