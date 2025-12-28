'use client';

import React from 'react';
import { Button } from '../ui/Button';

interface QRPreviewProps {
  qrDataUrl: string | null;
  qrSvg: string | null;
  isLoading?: boolean;
  size: number;
}

export const QRPreview: React.FC<QRPreviewProps> = ({ qrDataUrl, qrSvg, isLoading, size }) => {
  const downloadPNG = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `qr-code-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadSVG = () => {
    if (!qrSvg) return;
    const blob = new Blob([qrSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `qr-code-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 bg-background-secondary p-8 rounded-2xl border border-border-custom h-full min-h-[400px]">
      <div className="relative bg-white p-6 rounded-xl shadow-lg border border-border-custom max-w-full overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center animate-pulse" style={{ width: 256, height: 256 }}>
            <div className="w-full h-full bg-gray-100 rounded-lg" />
          </div>
        ) : qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt="QR Code Preview"
            className="w-full h-auto max-w-[300px] md:max-w-full mx-auto"
            style={{ width: size > 512 ? 300 : size / 1.5 }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center space-y-4" style={{ width: 256, height: 256 }}>
            <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 17h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm px-4">
              Enter details on the left to generate your QR code
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        <Button
          onClick={downloadPNG}
          disabled={!qrDataUrl || isLoading}
          variant="primary"
          className="w-full"
        >
          Download PNG
        </Button>
        <Button
          onClick={downloadSVG}
          disabled={!qrSvg || isLoading}
          variant="secondary"
          className="w-full"
        >
          Download SVG
        </Button>
      </div>

      <div className="text-sm text-text-secondary w-full max-w-md border-t border-border-custom pt-6">
        <h4 className="font-semibold text-text-primary mb-2">QR Code Information:</h4>
        <ul className="space-y-1">
          <li className="flex justify-between">
            <span>Size:</span>
            <span className="font-medium text-text-primary">{size} x {size} px</span>
          </li>
          <li className="flex justify-between">
            <span>Format:</span>
            <span className="font-medium text-text-primary">PNG / SVG</span>
          </li>
          <li className="flex justify-between">
            <span>Security:</span>
            <span className="font-medium text-text-primary">Local Generation</span>
          </li>
          <li className="flex justify-between">
            <span>Expiration:</span>
            <span className="font-medium text-text-primary text-success font-semibold">Never</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
