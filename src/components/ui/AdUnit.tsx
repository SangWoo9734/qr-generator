'use client';

import React, { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', className = '' }) => {
  useEffect(() => {
    try {
      // @ts-expect-error: adsbygoogle is not defined on window in typescript but loaded via script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container overflow-hidden text-center mx-auto my-8 ${className}`}>
      <span className="block text-[10px] text-text-secondary uppercase tracking-widest mb-1">Advertisement</span>
      {/* Real AdSense code would go here */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with actual client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export const AdPlaceholder: React.FC<{ label?: string; height?: string }> = ({ label = 'Advertisement', height = 'h-24' }) => {
  return (
    <div className={`w-full ${height} bg-background-secondary border border-dashed border-border-custom rounded-xl flex flex-col items-center justify-center text-text-secondary my-8 overflow-hidden`}>
      <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">{label}</span>
      <div className="w-12 h-1 bg-border-custom rounded-full opacity-30"></div>
    </div>
  );
};
