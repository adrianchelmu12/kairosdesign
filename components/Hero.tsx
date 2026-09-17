"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // Reveal immediately on mount for instantaneous mobile & desktop readiness
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#1f2421]">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Atmospheric Glows - ultra-performant on mobile */}
      <div
        className={`absolute top-1/4 left-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-[#216869] blur-2xl sm:blur-[130px] rounded-full pointer-events-none transition-all duration-700 ease-out ${
          isRevealed ? "opacity-20 scale-100" : "opacity-0 scale-75"
        }`}
      />
      <div
        className={`absolute top-1/3 right-10 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#49a078] blur-2xl sm:blur-[140px] rounded-full pointer-events-none transition-all duration-700 delay-100 ease-out ${
          isRevealed ? "opacity-15 scale-100" : "opacity-0 scale-75"
        }`}
      />
      <div
        className={`hidden sm:block absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-[#216869] blur-[140px] rounded-full pointer-events-none transition-all duration-700 delay-200 ease-out ${
          isRevealed ? "opacity-15 scale-100" : "opacity-0 scale-75"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* PARTEA STÂNGA: Text scurt, gigantic, animat la intrare   */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
            {/* Giant Monumental Headline with staggered line reveals */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.25rem] font-black tracking-tighter text-[#f3f7f4] leading-[0.92] select-none">
              <span className="block overflow-hidden py-1">
                <span
                  className={`block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRevealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
                >
                  CREĂM
                </span>
              </span>

              <span className="block overflow-hidden py-1">
                <span
                  className={`block text-gradient-kairos transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRevealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
                >
                  EXPERIENȚE
                </span>
              </span>

              <span className="block overflow-hidden py-1">
                <span
                  className={`block transition-all duration-700 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRevealed
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
                >
                  DIGITALE.
                </span>
              </span>
            </h1>

            {/* Core Services Label with slide-fade entrance */}
            <div
              className={`mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm sm:text-base md:text-lg font-medium text-[#9cc5a1]/90 tracking-wide transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isRevealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-[#f3f7f4]">UI/UX Design</span>
              <span className="text-[#49a078]">&bull;</span>
              <span className="text-[#f3f7f4]">Branding</span>
              <span className="text-[#49a078]">&bull;</span>
              <span className="text-[#f3f7f4]">Web Development</span>
            </div>

            {/* Actions / CTA Buttons with slide-scale entrance */}
            <div
              className={`mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5 transition-all duration-700 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isRevealed
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#216869] via-[#49a078] to-[#49a078] text-[#1f2421] font-bold text-base transition-all duration-300 hover:shadow-[0_0_35px_rgba(73,160,120,0.5)] hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span className="text-[#f3f7f4] group-hover:text-white transition-colors">
                  Hai să vorbim
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#f3f7f4] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#servicii"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-panel text-[#f3f7f4] font-medium text-base hover:border-[#49a078]/50 hover:bg-[#216869]/20 transition-all duration-300"
              >
                <span>Explorează Serviciile</span>
              </a>
            </div>

          </div>

          {/* ======================================================== */}
          {/* PARTEA DREAPTĂ: Piesa centrală cu deschidere fluidă       */}
          {/* ======================================================== */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-5 flex items-center justify-center relative select-none transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isRevealed ? "scale-100 opacity-100" : "scale-85 opacity-0"
            }`}
          >
            <div className="relative w-[320px] sm:w-[420px] md:w-[460px] h-[320px] sm:h-[420px] md:h-[460px] flex items-center justify-center">
              
              {/* Outer Pulsing Orbital Ring */}
              <div className="absolute inset-0 rounded-full border border-[#216869]/30 animate-[spin_40s_linear_infinite]" />
              
              {/* Concentric Dashed Ring */}
              <div className="absolute inset-7 rounded-full border border-dashed border-[#49a078]/25 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Inner Glowing Ring */}
              <div className="absolute inset-14 rounded-full border border-[#9cc5a1]/20 shadow-[0_0_50px_rgba(33,104,105,0.3)] animate-pulse" />

              {/* Ambient Glow Core */}
              <div className="absolute w-64 h-64 bg-gradient-radial from-[#49a078]/25 via-[#216869]/30 to-transparent blur-3xl rounded-full" />

              {/* 3D Reactive Tilting Logo Container */}
              <div
                className="relative z-20 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 transition-transform duration-200 ease-out cursor-pointer flex items-center justify-center"
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateY(${mousePos.x * 24}deg) rotateX(${-mousePos.y * 24}deg) scale3d(1.06, 1.06, 1.06)`
                    : "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
                }}
              >
                {/* Breathing Shadow Beneath Sigla */}
                <div className="absolute -inset-4 bg-[#49a078]/25 blur-3xl rounded-full -z-10 animate-pulse" />

                {/* The Kairos Sigla (Favicon SVG Paths) with dynamic multi-layer effects */}
                <svg
                  viewBox="0 0 64 64"
                  className="w-full h-full drop-shadow-[0_0_35px_rgba(73,160,120,0.5)] transition-all duration-300"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 0 50px rgba(73,160,120,0.85))"
                      : "drop-shadow(0 0 35px rgba(73,160,120,0.5))",
                  }}
                >
                  <g transform="matrix(0.140125,0,0,0.140125,-56.146273,-137.463049)">
                    <g transform="matrix(1,0,0,1,-33.575588,54)">
                      <g transform="matrix(0.676678,-0.603313,0.603313,0.676678,-584.212429,1972.138298)">
                        
                        {/* Outer Green Ring with subtle gradient styling */}
                        <path
                          d="M1614.262,418.378C1567.517,418.378 1523.571,400.174 1490.518,367.122C1457.465,334.068 1439.262,290.122 1439.262,243.378C1439.262,196.633 1457.465,152.687 1490.518,119.634C1523.571,86.58 1567.517,68.378 1614.262,68.378C1661.006,68.378 1704.952,86.581 1738.005,119.634C1771.058,152.687 1789.261,196.633 1789.261,243.378C1789.261,290.122 1771.058,334.068 1738.005,367.122C1704.952,400.174 1661.006,418.378 1614.262,418.378ZM1614.262,91.03C1575.231,91.03 1536.199,105.887 1506.486,135.601C1447.057,195.029 1447.057,291.726 1506.486,351.154C1565.914,410.582 1662.61,410.582 1722.038,351.154C1781.467,291.726 1781.467,195.028 1722.038,135.601C1692.323,105.887 1653.292,91.03 1614.262,91.03Z"
                          fill="#49a078"
                          stroke="#49a078"
                          strokeWidth="41.98"
                          className="transition-colors duration-300"
                        />

                        {/* Inner Deep Teal Crescent */}
                        <path
                          d="M1730.021,387.364C1722.796,387.364 1715.574,384.608 1710.062,379.097C1699.04,368.074 1699.04,350.202 1710.062,339.179C1735.652,313.589 1749.745,279.566 1749.745,243.378C1749.745,207.188 1735.652,173.166 1710.062,147.576C1699.04,136.553 1699.04,118.681 1710.062,107.658C1721.085,96.636 1738.956,96.636 1749.98,107.658C1824.815,182.494 1824.815,304.26 1749.98,379.096C1744.468,384.608 1737.245,387.364 1730.021,387.364Z"
                          fill="#216869"
                          stroke="#216869"
                          strokeWidth="41.98"
                          className="transition-colors duration-300"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
