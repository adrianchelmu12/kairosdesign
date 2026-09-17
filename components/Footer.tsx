"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Clock, MapPin } from "lucide-react";

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>("");
  const flashlightRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 });
  const [isHovered, setIsHovered] = useState(false);

  const resetToCenter = () => {
    if (flashlightRef.current) {
      const rect = flashlightRef.current.getBoundingClientRect();
      setMousePos({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!flashlightRef.current) return;
    const rect = flashlightRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!flashlightRef.current) return;
    const rect = flashlightRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetToCenter();
  };

  useEffect(() => {
    resetToCenter();
    const handleResize = () => {
      if (!isHovered) {
        resetToCenter();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isHovered]);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("ro-RO", {
          timeZone: "Europe/Bucharest",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setLocalTime(formatted);
      } catch {
        // Fallback în caz de incompatibilitate de fus orar
        setLocalTime(new Date().toTimeString().slice(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const posX = mousePos.x >= 0 ? `${mousePos.x}px` : "50%";
  const posY = mousePos.y >= 0 ? `${mousePos.y}px` : "50%";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Abordare", href: "#abordare" },
    { label: "Servicii", href: "#servicii" },
    { label: "Tehnologii", href: "#tehnologii" },
    { label: "Proces de lucru", href: "#proces" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { label: "Web Design & UI/UX", href: "#servicii" },
    { label: "Identitate de Brand & Logo", href: "#servicii" },
    { label: "Aplicații Web Next.js", href: "#servicii" },
    { label: "Design Systems Scalabile", href: "#servicii" },
    { label: "Optimizare & SEO Tehnic", href: "#servicii" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/kairosdesign.ro", handle: "@kairosdesign.ro" },
    { label: "TikTok", href: "https://www.tiktok.com/@kairosdesign.ro?_r=1&_t=ZN-99jSG2kMltO", handle: "Kairos Design" },
  ];

  return (
    <footer className="relative bg-[#1f2421] text-[#f3f7f4] border-t border-[#216869]/30 pt-16 sm:pt-20 pb-10 overflow-hidden select-none">
      {/* Ambient background glows - zero-cost radial gradients */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(73, 160, 120, 0.16) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Main Grid Navigation */}
        <div className="pb-14 sm:pb-20 grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-14 border-b border-[#216869]/25">
          
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <Image
                  src="/logo.svg"
                  alt="Kairos"
                  width={150}
                  height={45}
                  priority
                  className="h-10 w-auto object-contain transition-opacity group-hover:opacity-85"
                />
              </Link>

              <p className="text-sm text-[#9cc5a1]/80 font-light leading-relaxed max-w-sm mb-6">
                Construim experiențe web la standarde înalte de estetică și inginerie software. Fără compromisuri, fără șabloane generice.
              </p>
            </div>

            {/* Live Time & Location */}
            <div className="mt-8 pt-6 border-t border-[#216869]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9cc5a1]/70">
                <MapPin className="w-3.5 h-3.5 text-[#49a078]" />
                <span>Iași, România &bull; Disponibilitate globală</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9cc5a1]/70">
                <Clock className="w-3.5 h-3.5 text-[#49a078]" />
                <span>
                  Ora locală:{" "}
                  <span className="text-[#f3f7f4] font-semibold">
                    {localTime || "--:--:--"}
                  </span>{" "}
                  (EEST)
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 sm:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9cc5a1] mb-5 font-semibold">
              Navigare
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9cc5a1]/80 hover:text-[#49a078] transition-colors inline-block font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9cc5a1] mb-5 font-semibold">
              Expertiză
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-[#9cc5a1]/80 hover:text-[#49a078] transition-colors inline-block font-light"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Presence */}
          <div className="md:col-span-3 sm:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#9cc5a1] mb-5 font-semibold">
              Conectare
            </h4>
            <ul className="space-y-3 text-sm">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between text-[#9cc5a1]/80 hover:text-[#49a078] transition-colors font-light py-0.5"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9cc5a1]/40 group-hover:text-[#49a078] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Full-Width Monumental Typography with Center-Default Flashlight Reveal */}
      <div
        ref={flashlightRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full py-6 sm:py-8 lg:py-10 overflow-hidden select-none sm:cursor-crosshair bg-[#1f2421]"
      >
        {/* Flashlight Ambient Glow Beam */}
        <div
          className={`pointer-events-none absolute inset-0 ${
            isHovered ? "transition-none" : "transition-all duration-700 ease-out"
          }`}
          style={{
            background: `radial-gradient(circle 300px at ${posX} ${posY}, rgba(73, 160, 120, 0.22) 0%, rgba(33, 104, 105, 0.08) 50%, transparent 75%)`,
          }}
        />

        {/* Flashlight Core Bright Beam */}
        <div
          className={`pointer-events-none absolute inset-0 ${
            isHovered ? "transition-none" : "transition-all duration-700 ease-out"
          }`}
          style={{
            background: `radial-gradient(circle 120px at ${posX} ${posY}, rgba(243, 247, 244, 0.22) 0%, rgba(73, 160, 120, 0.14) 50%, transparent 70%)`,
          }}
        />

        {/* Flashlight Bulb Follower (visible on hover) */}
        {isHovered && mousePos.x >= 0 && (
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-[#49a078]/70 bg-[#49a078]/30 shadow-[0_0_20px_rgba(73,160,120,0.9)] flex items-center justify-center z-30 transition-transform duration-75"
            style={{ left: posX, top: posY }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#f3f7f4] shadow-[0_0_6px_#ffffff]" />
          </div>
        )}

        {/* Masked Monumental Typography — Center illuminated initially, moves on hover, S unclipped */}
        <div
          className={`w-full max-w-full overflow-hidden flex justify-center items-center pointer-events-none relative z-10 px-4 sm:px-14 lg:px-20 ${
            isHovered ? "transition-none" : "transition-all duration-700 ease-out"
          }`}
          style={{
            WebkitMaskImage: `radial-gradient(circle 280px at ${posX} ${posY}, black 35%, transparent 100%)`,
            maskImage: `radial-gradient(circle 280px at ${posX} ${posY}, black 35%, transparent 100%)`,
          }}
        >
          <div className="text-[12vw] sm:text-[14vw] lg:text-[15vw] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f3f7f4] via-[#49a078] to-[#216869] leading-none select-none drop-shadow-[0_0_40px_rgba(73,160,120,0.65)] text-center whitespace-nowrap">
            KAIROS
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#9cc5a1]/60 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center sm:text-left flex-wrap">
            <p>&copy; {new Date().getFullYear()} Kairos. Toate drepturile rezervate.</p>
            <span className="hidden sm:inline text-[#216869]">&bull;</span>
            <Link
              href="/termeni-si-conditii"
              className="hover:text-[#49a078] transition-colors underline decoration-[#49a078]/40 underline-offset-4"
            >
              Termeni și Condiții
            </Link>
            <span className="hidden sm:inline text-[#216869]">&bull;</span>
            <Link
              href="/politica-de-confidentialitate"
              className="hover:text-[#49a078] transition-colors underline decoration-[#49a078]/40 underline-offset-4"
            >
              Politică de Confidențialitate &amp; Cookie-uri
            </Link>
            <span className="hidden sm:inline text-[#216869]">&bull;</span>
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("openKairosCookieSettings"));
                }
              }}
              className="hover:text-[#49a078] transition-colors cursor-pointer text-left"
            >
              Setări Cookie
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#216869]/10 border border-[#49a078]/25 text-xs text-[#9cc5a1] hover:text-[#f3f7f4] hover:border-[#49a078] hover:bg-[#216869]/20 transition-all cursor-pointer group flex-shrink-0"
          >
            <span>Înapoi sus</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#49a078] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* ANPC Mandatory Badges / Links */}
        <div className="mt-4 pt-3 border-t border-[#216869]/15 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] text-[#9cc5a1]/50 font-mono">
          <span>Conformitate ANPC:</span>
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md bg-[#262c28] border border-[#216869]/30 hover:border-[#49a078]/50 hover:text-[#49a078] transition-colors"
          >
            ANPC &bull; SAL
          </a>
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md bg-[#262c28] border border-[#216869]/30 hover:border-[#49a078]/50 hover:text-[#49a078] transition-colors"
          >
            Platforma SOL (UE)
          </a>
        </div>
      </div>
    </footer>
  );
}


