"use client";

import { useEffect } from "react";

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

    if (
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
        .gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        action,
        params
      );
    }
  } catch {
    // Fail gracefully
  }
}

export default function Analytics() {
  useEffect(() => {
    const updateGtagConsent = (granted: boolean) => {
      if (
        typeof (window as unknown as { gtag?: (...args: unknown[]) => void })
          .gtag === "function"
      ) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "consent",
          "update",
          {
            analytics_storage: granted ? "granted" : "denied",
          }
        );
      }
    };

    // 1. Verificare inițială a consimțământului salvat în browser
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.preferences?.analytics) {
          updateGtagConsent(true);
        }
      }
    } catch {
      // Ignore
    }

    // 2. Ascultare pentru actualizări live din CookieBanner
    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ analytics?: boolean }>;
      const isAllowed = Boolean(customEvent.detail?.analytics);
      updateGtagConsent(isAllowed);
    };

    window.addEventListener("kairosCookieConsentUpdated", handleConsentUpdate);
    return () => {
      window.removeEventListener(
        "kairosCookieConsentUpdated",
        handleConsentUpdate
      );
    };
  }, []);

  return null;
}
