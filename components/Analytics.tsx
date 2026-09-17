"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "kairos_cookie_consent_v1";

// Helper universal pentru trimiterea evenimentelor analitice
export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (!parsed?.preferences?.analytics) return; // Respectă strict consimțământul GDPR

    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, params);
    }
  } catch {
    // Fail gracefully
  }
}

export default function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // 1. Verificare inițială a consimțământului salvat
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.preferences?.analytics) {
          setAnalyticsAllowed(true);
        }
      }
    } catch {
      // Ignore
    }

    // 2. Ascultare pentru actualizări live din CookieBanner
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ analytics?: boolean }>;
      const isAllowed = Boolean(customEvent.detail?.analytics);
      setAnalyticsAllowed(isAllowed);

      // Dacă utilizatorul a revocat consimțământul, dezactivăm Google Analytics
      if (!isAllowed && gaId && typeof window !== "undefined") {
        (window as unknown as Record<string, boolean>)[`ga-disable-${gaId}`] = true;
      }
    };

    window.addEventListener("kairosCookieConsentUpdated", handleConsentUpdate);
    return () => {
      window.removeEventListener("kairosCookieConsentUpdated", handleConsentUpdate);
    };
  }, [gaId]);

  // Dacă nu este setat niciun ID de GA sau utilizatorul nu a dat acordul pentru cookies analitice, nu încărcăm nimic
  if (!gaId || !analyticsAllowed) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

