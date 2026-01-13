# QR Studio - Analytics & AdSense 개선사항

**날짜**: 2026-01-13
**목적**: 트래픽 측정 정확도 향상 및 AdSense 정책 준수

---

## 📊 1. GA4 Analytics 개선

### 문제점
- 국가별 트래픽이 제대로 수집되지 않음 (한국만 31, 다른 국가 0)
- 기본 gtag 설정만 있고 Enhanced Measurement 미적용

### 해결방안 (적용 완료 ✅)

**파일**: `src/components/ui/Analytics.tsx`

#### 추가된 설정:
1. **지역 정보 수집 활성화**
   ```javascript
   allow_google_signals: true  // Google Signals 활성화
   ```

2. **광고 기능 및 인구통계 데이터**
   ```javascript
   allow_ad_personalization_signals: true  // 광고 맞춤설정 신호
   ```

3. **쿠키 설정**
   ```javascript
   cookie_flags: 'SameSite=None;Secure'  // 크로스 도메인 추적
   ```

4. **사용자 속성**
   ```javascript
   gtag('set', 'user_properties', {
     platform: 'web',
     app_name: 'QR Studio'
   });
   ```

### 추가로 필요한 설정 (Google Analytics 대시보드)

#### GA4 콘솔에서 설정 필요:

1. **Google Signals 활성화**
   - Admin → Data Settings → Data Collection
   - "Google signals data collection" 활성화
   - 목적: 크로스 디바이스 및 지역 정보 수집

2. **Enhanced Measurement 확인**
   - Admin → Data Streams → Web → Configure tag settings
   - 다음 항목 활성화:
     - ✅ Page views
     - ✅ Scrolls
     - ✅ Outbound clicks
     - ✅ Site search
     - ✅ File downloads

3. **데이터 보존 기간 설정**
   - Admin → Data Settings → Data Retention
   - User data: 14 months (최대)
   - Event data: 14 months (최대)

4. **IP 익명화 확인**
   - Admin → Data Settings → Data Collection
   - "IP anonymization" 활성화됨 확인 (GDPR 준수)

---

## 💰 2. AdSense 정책 준수 개선

### 문제점
- AdSense 계정 "주의 필요" 상태
- 광고 배치 및 라벨링 정책 위반 가능성

### 해결방안 (적용 완료 ✅)

**파일**: `src/components/ui/AdUnit.tsx`

#### 개선사항:

1. **명확한 광고 라벨**
   - Advertisement 텍스트를 더 명확하게 표시
   - 시각적 구분선 추가

2. **접근성 개선**
   ```javascript
   role="complementary"
   aria-label="Advertisement"
   ```

3. **최소 높이 보장**
   ```javascript
   min-h-[90px]  // 광고가 제대로 로드될 공간 확보
   ```

### 추가로 필요한 조치 (AdSense 정책 준수)

#### ⚠️ 필수 확인 사항:

1. **콘텐츠 품질**
   - ✅ 충분한 원본 콘텐츠 (FAQ, About 페이지 있음)
   - ⚠️ 더 많은 유용한 콘텐츠 추가 권장:
     - QR 코드 사용 가이드
     - QR 코드 디자인 팁
     - QR 코드 활용 사례

2. **광고 배치 정책**
   - ✅ 광고와 콘텐츠 명확히 구분됨
   - ✅ "Advertisement" 라벨 표시
   - ⚠️ 확인 필요:
     - 페이지당 광고 개수 (권장: 3개 이하)
     - 광고가 콘텐츠보다 많지 않도록

3. **사용자 경험**
   - ✅ 광고가 콘텐츠를 가리지 않음
   - ⚠️ 모바일에서 광고 크기 확인
   - ⚠️ 페이지 로딩 속도 확인

4. **트래픽 품질**
   - ⚠️ **중요**: 봇 트래픽 확인
     - GA4에서 Bot Filtering 활성화
     - Cloudflare Bot Management 고려
   - ⚠️ 유효 클릭률(CTR) 모니터링
     - 너무 높거나 낮으면 의심

#### 📋 AdSense 계정 확인 체크리스트:

```
[ ] AdSense 대시보드에서 정책 위반 알림 확인
[ ] Invalid traffic 경고 확인
[ ] 광고 배치 정책 준수 확인
[ ] 콘텐츠 정책 준수 확인
[ ] Privacy Policy 페이지 AdSense 사용 명시
[ ] 쿠키 동의 배너 추가 (GDPR/CCPA 준수)
```

---

## 🔍 3. 권장 추가 개선사항

### A. 더 상세한 이벤트 추적

**파일**: `src/lib/analytics.ts`

현재 추적 중인 이벤트:
- `generate_qr`: QR 생성
- `download_qr`: QR 다운로드

**추천 추가 이벤트**:
```typescript
// 페이지 이탈 전 QR 생성 여부
export const trackEngagement = () => {
  trackEvent('user_engaged', 'engagement', 'stayed_5sec');
};

// QR 타입별 생성 비율
export const trackQRType = (type: string) => {
  trackEvent('qr_type_usage', 'engagement', type);
};

// 컬러 커스터마이징 사용 여부
export const trackCustomization = (feature: string) => {
  trackEvent('customization_used', 'engagement', feature);
};
```

### B. 쿠키 동의 배너 (GDPR/CCPA)

AdSense와 GA4 모두 쿠키를 사용하므로 쿠키 동의가 필요합니다.

**추천 라이브러리**:
- `@cookie-consent-banner/react`
- `react-cookie-consent`

**예시 구현**:
```tsx
import CookieConsent from 'react-cookie-consent';

<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  cookieName="qr-studio-consent"
  enableDeclineButton
  onAccept={() => {
    // GA4 및 AdSense 활성화
  }}
>
  We use cookies to improve your experience and show relevant ads.
  <a href="/privacy-policy">Learn more</a>
</CookieConsent>
```

### C. 페이지 속도 최적화

GA4와 AdSense 스크립트는 페이지 속도에 영향을 줍니다.

**최적화 방법**:
1. Next.js Script 컴포넌트 사용 중 ✅
2. `strategy="afterInteractive"` 사용 중 ✅
3. 추가 권장:
   - 이미지 최적화 (next/image)
   - 폰트 최적화 (font-display: swap)
   - 번들 크기 최적화

---

## 📊 4. 모니터링 및 추적

### GA4 대시보드에서 확인할 지표:

**일별 확인**:
- [ ] 국가별 트래픽 분포
- [ ] 신규/재방문 사용자 비율
- [ ] 이탈률 (Bounce Rate)
- [ ] 평균 세션 시간

**주간 확인**:
- [ ] 인기 페이지
- [ ] 전환율 (QR 생성 → 다운로드)
- [ ] 트래픽 소스 (Organic / Direct / Referral)

### AdSense 대시보드에서 확인할 지표:

**일별 확인**:
- [ ] 수익 (RPM, CTR, CPC)
- [ ] Invalid traffic 경고
- [ ] 정책 위반 알림

**주간 확인**:
- [ ] 광고 단위별 성과
- [ ] 페이지별 수익
- [ ] 최적화 제안 사항

---

## ✅ 적용 완료 사항

1. ✅ GA4 Enhanced Measurement 설정 추가
2. ✅ 지역 정보 수집 활성화
3. ✅ AdSense 광고 라벨 개선
4. ✅ 접근성 속성 추가 (ARIA)

## ⏳ 다음 단계

1. **테스트 및 배포**
   ```bash
   npm run build
   npm run start
   # 또는 Vercel 배포
   ```

2. **GA4 콘솔 설정**
   - Google Signals 활성화
   - Enhanced Measurement 확인

3. **AdSense 상태 모니터링**
   - 24-48시간 후 정책 위반 상태 재확인
   - Invalid traffic 경고 확인

4. **추가 개선 고려**
   - 쿠키 동의 배너 추가
   - 더 많은 콘텐츠 페이지 추가
   - 페이지 속도 최적화

---

## 📞 문의 및 지원

- Google Analytics 지원: https://support.google.com/analytics
- AdSense 지원: https://support.google.com/adsense
- AdSense 정책: https://support.google.com/adsense/answer/48182

---

**마지막 업데이트**: 2026-01-13
