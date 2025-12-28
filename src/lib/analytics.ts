
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-2FWTDMK9KZ';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackQRGeneration = (type: string) => {
  trackEvent('generate_qr', 'engagement', type);
};

export const trackQRDownload = (format: string, type: string) => {
  trackEvent('download_qr', 'engagement', `${type}_${format}`);
};
