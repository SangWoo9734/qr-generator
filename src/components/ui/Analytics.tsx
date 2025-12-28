'use client';

import Script from 'next/script';
import React from 'react';

export const Analytics: React.FC = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-2FWTDMK9KZ';

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};
