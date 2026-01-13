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

          // Enhanced measurement 설정
          gtag('config', '${gaId}', {
            // 페이지뷰 자동 추적
            send_page_view: true,
            // 익명 IP 수집 (GDPR 준수)
            anonymize_ip: true,
            // 지역 정보 수집 활성화
            allow_google_signals: true,
            // 광고 기능 활성화 (인구통계, 관심분야)
            allow_ad_personalization_signals: true,
            // 쿠키 설정
            cookie_flags: 'SameSite=None;Secure',
            // 디버그 모드 (개발 시에만)
            debug_mode: ${process.env.NODE_ENV === 'development'}
          });

          // 사용자 속성 설정
          gtag('set', 'user_properties', {
            platform: 'web',
            app_name: 'QR Studio'
          });
        `}
      </Script>
    </>
  );
};
