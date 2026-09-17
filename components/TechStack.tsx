"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";

interface TechItem {
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: "Figma",
    role: "UI · Prototyping",
    description: "Design de interfețe, prototipuri interactive și design systems clare înainte de implementare.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 38 57" fill="currentColor">
        <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
        <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
        <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
      </svg>
    ),
  },
  {
    name: "HTML & CSS",
    role: "Markup · Styling",
    description: "Semantică web modernă, stilizare curată și layout-uri adaptabile fără compromisuri.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    role: "Interactivity · Logic",
    description: "Logică robustă, interacțiuni rapide și experiențe dinamice fără fricțiuni.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 8v6a2 2 0 0 1-2 2H6" />
        <path d="M14 15.5c.5.3 1.2.5 1.8.5 1.1 0 1.7-.5 1.7-1.3 0-1.8-3.5-1.1-3.5-3.2 0-1.1.9-1.9 2.2-1.9.8 0 1.5.2 2 .5" />
      </svg>
    ),
  },
  {
    name: "React",
    role: "UI · Components",
    description: "Arhitectură modulară pe componente reutilizabile, stare sincronizată și performanță ridicată.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    role: "Framework · SSR",
    description: "Randare hibridă la server (SSR), viteză instantanee și optimizare tehnică automată.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="next-mask-ts" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#next-mask-ts)">
          <circle cx="90" cy="90" data-circle="true" fill="none" stroke="currentColor" strokeWidth="12" r="84" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z" />
          <rect fill="currentColor" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: "Vercel",
    role: "Hosting · Deploy",
    description: "Infrastructură globală Edge, securitate ridicată și deployment automat continuu.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return;

    // Buffer zone la final pentru o experienta fluida
    const bufferDistance = Math.min(window.innerHeight * 0.5, 500);
    const activeScrollDistance = Math.max(totalScroll - bufferDistance, 1);

    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / activeScrollDistance, 0), 1);
    setScrollProgress(progress);

    // Active item index (0 to 5)
    const index = Math.min(
      Math.floor(progress * TECH_ITEMS.length),
      TECH_ITEMS.length - 1
    );
    setActiveIndex(index);

    // Track translation calculation
    const trackWidth = trackRef.current.scrollWidth;
    const parentWidth =
      trackRef.current.parentElement?.clientWidth || window.innerWidth;
    const maxScroll = Math.max(0, trackWidth - parentWidth + 60);

    setTranslateX(progress * -maxScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const handleMouseMove = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <section
      id="tehnologii"
      ref={containerRef}
      className="relative h-[280vh] bg-[#1f2421] text-[#f3f7f4]"
    >
      {/* Anchor for backward compatibility */}
      <span id="portofoliu" className="absolute -top-24 pointer-events-none" />

      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-20 py-8 sm:py-12">
        {/* Atmospheric Glow */}
        <div className="absolute top-1/4 -right-48 w-[550px] h-[550px] bg-[#216869] opacity-15 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-48 w-[550px] h-[550px] bg-[#49a078] opacity-10 blur-[220px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Top Header Row */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#49a078]/20 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f7f4] leading-[1.16] pb-1">
              Tehnologii alese{" "}
              <span className="text-gradient-kairos pb-2 inline-block">
                cu atenție.
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-base text-[#9cc5a1]/80 font-light max-w-xl">
              Fiecare unealtă are un rol precis în livrarea unui produs digital rapid, stabil și durabil.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#9cc5a1]/70 tracking-wider uppercase shrink-0">
            <span>Scroll orizontal</span>
            <ArrowRight className="w-4 h-4 text-[#49a078] animate-pulse" />
          </div>
        </div>

        {/* Center: Massive Single-Row Horizontal Track */}
        <div className="relative z-10 my-auto overflow-visible">
          <div
            ref={trackRef}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
            }}
            className="flex items-stretch gap-6 sm:gap-8 w-max will-change-transform ease-out duration-75"
          >
            {TECH_ITEMS.map((item, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={item.name}
                  onMouseMove={(e) => handleMouseMove(idx, e)}
                  onMouseLeave={handleMouseLeave}
                  className="group relative rounded-2xl p-7 sm:p-9 bg-[#1f2421] border border-[#49a078]/25 hover:border-[#49a078]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(33,104,105,0.4)] overflow-hidden flex flex-col justify-between w-[82vw] sm:w-[360px] md:w-[410px] shrink-0 min-h-[280px]"
                >
                  {/* Dynamic Mouse Cursor Spotlight */}
                  {isHovered && (
                    <div
                      className="absolute pointer-events-none -inset-px transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(73, 160, 120, 0.16), transparent 70%)`,
                      }}
                    />
                  )}

                  {/* Top Glowing Laser Hairline */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Modern Glass Tech Dock */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#216869]/15 border border-[#9cc5a1]/20 flex items-center justify-center text-[#9cc5a1] group-hover:text-white group-hover:border-[#49a078] group-hover:bg-[#49a078]/20 group-hover:shadow-[0_0_25px_rgba(73,160,120,0.35)] group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content: Title, Clean Role & Description */}
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f7f4] group-hover:text-white transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 text-xs sm:text-sm font-mono tracking-wider uppercase text-[#49a078] font-medium">
                      {item.role}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-[#9cc5a1]/75 leading-relaxed font-light group-hover:text-[#9cc5a1]/95 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pinned Progress Line */}
        <div className="relative z-20 pt-6 border-t border-[#49a078]/20 flex items-center justify-between gap-6">
          <div
            onClick={(e) => {
              if (!containerRef.current) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const clickProgress = Math.min(
                Math.max(clickX / rect.width, 0),
                1
              );
              const totalScroll =
                containerRef.current.offsetHeight - window.innerHeight;
              const bufferDistance = Math.min(window.innerHeight * 0.5, 500);
              const activeScrollDistance = Math.max(
                totalScroll - bufferDistance,
                1
              );
              const containerTop =
                window.scrollY + containerRef.current.getBoundingClientRect().top;
              window.scrollTo({
                top: containerTop + clickProgress * activeScrollDistance,
                behavior: "smooth",
              });
            }}
            className="w-full bg-[#216869]/30 h-1.5 rounded-full overflow-hidden cursor-pointer"
          >
            <div
              className="bg-gradient-to-r from-[#216869] via-[#49a078] to-[#9cc5a1] h-full rounded-full transition-all duration-100"
              style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>

          <span className="text-xs font-mono text-[#9cc5a1]/70 shrink-0">
            0{activeIndex + 1} / 0{TECH_ITEMS.length}
          </span>
        </div>
      </div>
    </section>
  );
}
