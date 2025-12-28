import React from 'react';

interface SchemaProps {
  type: 'WebApplication' | 'FAQPage';
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<SchemaProps> = ({ type, data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebAppSchema = () => (
  <JsonLd
    type="WebApplication"
    data={{
      name: 'QR Studio',
      url: 'https://qr-generator.cc',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Windows, macOS, Android, iOS',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: 'URL QR Code, WiFi QR Code, Email QR Code, Phone QR Code, Text QR Code',
    }}
  />
);
