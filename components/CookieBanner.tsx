"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cookie,
  Shield,
  SlidersHorizontal,
  Check,
  X,
  ArrowUpRight,
  Info,
} from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functionality: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "kairos_cookie_consent_v1";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    functionality: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Dacă nu a fost salvat consimțământul, afișăm banner-ul după un scurt delay estetic
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        if (parsed?.preferences) {
          setPreferences(parsed.preferences);
        }
      }
    } catch {
      setIsVisible(true);
    }

    // Ascultător global pentru redeschiderea preferințelor din orice buton "Setări Cookie" din site
    const handleReopen = () => {
      setIsVisible(true);
      setIsCustomizing(true);
    };

    window.addEventListener("openKairosCookieSettings", handleReopen);
    return () => window.removeEventListener("openKairosCookieSettings", handleReopen);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          consentGiven: true,
          preferences: prefs,
          updatedAt: new Date().toISOString(),
        })
      );
    } catch {
      // Ignore localStorage errors
    }
    setPreferences(prefs);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kairosCookieConsentUpdated", { detail: prefs })
      );
    }
    setIsCustomizing(false);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      functionality: true,
      marketing: true,
    });
  };

  const handleRefuseOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      functionality: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* 1. Modulul de Personalizare Detaliată (Modal Overlay) */}
      {isCustomizing && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-xl bg-[#1f2421] border border-[#49a078]/35 rounded-2xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col max-h-[90vh]">
            {/* Top laser glow line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#216869]/25 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#216869]/25 border border-[#49a078]/30 flex items-center justify-center text-[#49a078] shrink-0">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#f3f7f4]">
                    Preferințe Module Cookie
                  </h3>
                  <p className="text-xs font-mono text-[#9cc5a1]/70">
                    Conformitate GDPR &bull; SC URBANSELL SRL
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCustomizing(false)}
                className="w-8 h-8 rounded-lg bg-[#262c28] border border-[#216869]/30 text-[#9cc5a1] hover:text-[#f3f7f4] hover:border-[#49a078] flex items-center justify-center transition-colors"
                aria-label="Închide personalizarea"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="py-5 space-y-4 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#216869]/40 text-left">
              <p className="text-xs sm:text-sm text-[#9cc5a1]/85 font-light leading-relaxed">
                Poți activa sau dezactiva categoriile de cookie-uri mai jos. Pentru detalii complete,
                consultă{" "}
                <Link
                  href="/politica-de-confidentialitate#cookie-uri"
                  target="_blank"
                  className="text-[#49a078] underline hover:text-white"
                >
                  Politica de Cookie-uri
                </Link>
                .
              </p>

              {/* Necessary Cookies */}
              <div className="p-4 rounded-xl bg-[#262c28]/60 border border-[#216869]/25 flex items-start justify-between gap-4">
                <div className="pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#f3f7f4]">
                      Strict Necesare
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#49a078]/15 border border-[#49a078]/30 text-[10px] font-mono text-[#49a078] uppercase tracking-wider">
                      Obligatorii
                    </span>
                  </div>
                  <p className="text-xs text-[#9cc5a1]/75 font-light leading-relaxed">
                    Esențiale pentru buna funcționare, securitate și protecție anti-CSRF. Nu pot fi dezactivate.
                  </p>
                </div>

                <div className="shrink-0 pt-1">
                  <div className="w-11 h-6 bg-[#49a078] rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-80">
                    <div className="w-4 h-4 bg-[#1f2421] rounded-full shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Analytics & Performance Cookies */}
              <div className="p-4 rounded-xl bg-[#262c28]/60 border border-[#216869]/25 flex items-start justify-between gap-4">
                <div className="pr-2">
                  <div className="text-sm font-semibold text-[#f3f7f4] mb-1">
                    Performanță &amp; Analiză
                  </div>
                  <p className="text-xs text-[#9cc5a1]/75 font-light leading-relaxed">
                    Ne ajută să măsurăm traficul și să optimizăm viteza site-ului prin date anonimizate (Google Analytics).
                  </p>
                </div>

                <div className="shrink-0 pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        analytics: !preferences.analytics,
                      })
                    }
                    className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-1 cursor-pointer ${
                      preferences.analytics ? "bg-[#49a078] justify-end" : "bg-[#1f2421] border border-[#216869] justify-start"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full shadow-sm transition-all ${
                        preferences.analytics ? "bg-[#1f2421]" : "bg-[#9cc5a1]/60"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Functionality Cookies */}
              <div className="p-4 rounded-xl bg-[#262c28]/60 border border-[#216869]/25 flex items-start justify-between gap-4">
                <div className="pr-2">
                  <div className="text-sm font-semibold text-[#f3f7f4] mb-1">
                    Funcționalitate
                  </div>
                  <p className="text-xs text-[#9cc5a1]/75 font-light leading-relaxed">
                    Permit platformei să rețină preferințele tale de navigare și setările de afișare.
                  </p>
                </div>

                <div className="shrink-0 pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.functionality}
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        functionality: !preferences.functionality,
                      })
                    }
                    className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-1 cursor-pointer ${
                      preferences.functionality ? "bg-[#49a078] justify-end" : "bg-[#1f2421] border border-[#216869] justify-start"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full shadow-sm transition-all ${
                        preferences.functionality ? "bg-[#1f2421]" : "bg-[#9cc5a1]/60"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 rounded-xl bg-[#262c28]/60 border border-[#216869]/25 flex items-start justify-between gap-4">
                <div className="pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#f3f7f4]">
                      Marketing &amp; Publicitate
                    </span>
                    <span className="text-[10px] font-mono text-[#9cc5a1]/60 italic">
                      (Neutilizate în prezent)
                    </span>
                  </div>
                  <p className="text-xs text-[#9cc5a1]/75 font-light leading-relaxed">
                    Utilizate pentru publicitate targetată. În prezent, site-ul Kairos nu rulează campanii de marketing prin cookie-uri terțe.
                  </p>
                </div>

                <div className="shrink-0 pt-1">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() =>
                      setPreferences({
                        ...preferences,
                        marketing: !preferences.marketing,
                      })
                    }
                    className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-1 cursor-pointer ${
                      preferences.marketing ? "bg-[#49a078] justify-end" : "bg-[#1f2421] border border-[#216869] justify-start"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full shadow-sm transition-all ${
                        preferences.marketing ? "bg-[#1f2421]" : "bg-[#9cc5a1]/60"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-5 border-t border-[#216869]/25 flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
              <button
                onClick={handleSaveCustom}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#49a078]/40 bg-[#216869]/20 text-xs font-semibold text-[#f3f7f4] hover:border-[#49a078] hover:text-[#49a078] transition-all cursor-pointer text-center"
              >
                Salvează preferințele
              </button>

              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#216869] to-[#49a078] text-[#1f2421] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(73,160,120,0.4)] transition-all cursor-pointer text-center"
              >
                <span className="text-[#f3f7f4]">Acceptă toate</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Banner-ul Principal Plutitor (Floating Compact Glass Card) */}
      {!isCustomizing && (
        <aside
          role="region"
          aria-label="Consimțământ Cookie"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md lg:max-w-lg z-[90] bg-[#1f2421]/95 backdrop-blur-xl border border-[#49a078]/35 rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-slideUp text-left"
        >
          {/* Subtle laser top glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent" />

          <div className="flex items-start gap-3.5 mb-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#216869]/25 border border-[#49a078]/35 flex items-center justify-center text-[#49a078] shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#f3f7f4] tracking-tight">
                Respectăm confidențialitatea datelor tale
              </h3>
              <p className="text-[11px] font-mono text-[#9cc5a1]/70">
                Regulamentul (UE) 2016/679 &bull; GDPR
              </p>
            </div>
          </div>

          <p className="text-xs text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
            Utilizăm cookie-uri pentru a asigura funcționarea tehnică a site-ului și pentru a analiza
            performanța navigării. Poți alege să accepți toate cookie-urile, să refuzi cookie-urile
            opționale sau să îți configurezi preferințele.
          </p>

          <div className="mb-4 text-[11px] font-mono">
            <Link
              href="/politica-de-confidentialitate#cookie-uri"
              className="text-[#49a078] hover:underline inline-flex items-center gap-1"
            >
              <span>Citește Politica completă de Cookie-uri</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Action Buttons: Accepta, Refuza, Personalizeaza */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#216869] to-[#49a078] text-[#f3f7f4] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(73,160,120,0.4)] transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5 text-[#f3f7f4]" />
              <span>Acceptă</span>
            </button>

            <button
              onClick={handleRefuseOptional}
              className="py-2.5 px-4 rounded-xl border border-[#216869]/50 bg-[#262c28]/80 text-[#9cc5a1] hover:text-[#f3f7f4] hover:border-[#49a078] text-xs font-semibold transition-all cursor-pointer text-center"
            >
              Refuză
            </button>

            <button
              onClick={() => setIsCustomizing(true)}
              className="py-2.5 px-3 rounded-xl border border-[#216869]/30 hover:border-[#49a078]/50 text-[#9cc5a1]/80 hover:text-[#49a078] text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5"
              title="Personalizează categoriile de cookie-uri"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Personalizează</span>
            </button>
          </div>
        </aside>
      )}
    </>
  );
}

