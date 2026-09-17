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
    name: "Next.js",
    role: "Full-Stack Framework",
    description: "Arhitectură pe componente, randare hibridă la server și viteză de încărcare sub-secundă.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="next-mask-mob" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#next-mask-mob)">
          <circle cx="90" cy="90" data-circle="true" fill="none" stroke="currentColor" strokeWidth="12" r="84" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z" />
          <rect fill="currentColor" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    role: "Type-Safe Architecture",
    description: "Cod robust și fără erori neprevăzute în producție, documentat natural prin tipuri de date.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 21.75 0H1.125zM12.75 12.012h-2.25v8.988H8.25v-8.988H6v-2.012h6.75v2.012zm4.35 0c-.576 0-1.074.126-1.494.378-.42.252-.75.6-.99 1.044s-.36.966-.36 1.566c0 .6.114 1.104.342 1.512.228.408.546.738.954.99.408.252.894.438 1.458.558.564.12 1.152.204 1.764.252.612.048 1.218.102 1.818.162.6.06 1.14.162 1.62.306.48.144.852.36 1.116.648.264.288.396.69.396 1.206 0 .552-.156.99-.468 1.314-.312.324-.762.546-1.35.666-.588.12-1.296.18-2.124.18-.864 0-1.632-.078-2.304-.234-.672-.156-1.224-.402-1.656-.738-.432-.336-.714-.768-.846-1.296l2.196-.864c.12.348.336.63.648.846.312.216.732.324 1.26.324.576 0 1.032-.096 1.368-.288.336-.192.504-.492.504-.9 0-.348-.132-.612-.396-.792-.264-.18-.642-.312-1.134-.396-.492-.084-1.074-.156-1.746-.216-.672-.06-1.344-.138-2.016-.234-.672-.096-1.272-.258-1.8-.486-.528-.228-.948-.552-1.26-.972-.312-.42-.468-.996-.468-1.728 0-.672.156-1.224.468-1.656.312-.432.756-.756 1.332-.972.576-.216 1.278-.324 2.106-.324.78 0 1.488.072 2.124.216.636.144 1.158.372 1.566.684.408.312.69.72.846 1.224l-2.196.864c-.12-.324-.324-.576-.612-.756-.288-.18-.684-.27-1.188-.27z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    role: "Design System & Utility UI",
    description: "Sistem vizual unificat, zero fișiere CSS balast și încărcare ultra-rapidă prin clase optimizate.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    role: "Fluid Micro-Interactions",
    description: "Animații de nivel cinematic la 60fps, optimizate direct prin GPU fără sacadări sau consum inutil de resurse.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    role: "UI/UX & Prototyping",
    description: "Arhitectură vizuală completă, prototipare interactivă fidelă și testare înainte de a scrie o singură linie de cod.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.5 0C4.119 0 3 1.119 3 2.5s1.119 2.5 2.5 2.5H8V0H5.5zM11 0h2.5C14.881 0 16 1.119 16 2.5S14.881 5 13.5 5H11V0zM3 7.5C3 6.119 4.119 5 5.5 5H8v5H5.5C4.119 10 3 8.881 3 7.5zM16 7.5c0-1.381-1.119-2.5-2.5-2.5S11 6.119 11 7.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5zM5.5 12.5C4.119 12.5 3 13.619 3 15s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-2.5H5.5z" />
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current || !isDesktop) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return;

    const bufferDistance = Math.min(window.innerHeight * 0.5, 500);
    const activeScrollDistance = Math.max(totalScroll - bufferDistance, 1);

    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / activeScrollDistance, 0), 1);
    setScrollProgress(progress);

    const index = Math.min(
      Math.floor(progress * TECH_ITEMS.length),
      TECH_ITEMS.length - 1
    );
    setActiveIndex(index);

    const trackWidth = trackRef.current.scrollWidth;
    const parentWidth =
      trackRef.current.parentElement?.clientWidth || window.innerWidth;
    const maxScroll = Math.max(0, trackWidth - parentWidth + 60);

    setTranslateX(progress * -maxScroll);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isDesktop]);

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
    <section id="tehnologii" className="bg-[#1f2421] text-[#f3f7f4]">
      {/* Anchor for backward compatibility */}
      <span id="portofoliu" className="absolute -top-24 pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. VARIANTA MOBIL / TABLETĂ (< 1024px): Grid Natural     */}
      {/* ======================================================== */}
      <div className="lg:hidden py-20 px-6 sm:px-10 border-t border-[#49a078]/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
              Tehnologii alese{" "}
              <span className="text-gradient-kairos">cu atenție.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#9cc5a1]/85 font-light">
              Fiecare unealtă are un rol precis în livrarea unui produs digital rapid, stabil și durabil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TECH_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative rounded-2xl p-6 sm:p-7 bg-[#1f2421] border border-[#49a078]/25 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#216869]/20 border border-[#9cc5a1]/25 flex items-center justify-center text-[#49a078] mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono tracking-wider uppercase text-[#49a078] font-medium">
                    {item.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-[#9cc5a1]/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. VARIANTA DESKTOP (>= 1024px): Scroll Orizontal Lipit  */}
      {/* ======================================================== */}
      <div
        ref={containerRef as unknown as React.RefObject<HTMLDivElement>}
        className="hidden lg:block relative h-[280vh]"
      >
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-16 lg:px-20 py-10">
          {/* Atmospheric Glow */}
          <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-[#216869] opacity-15 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] bg-[#49a078] opacity-10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top Header Row */}
          <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#49a078]/20 gap-4">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f7f4] leading-[1.16] pb-1">
                Tehnologii alese{" "}
                <span className="text-gradient-kairos pb-2 inline-block">
                  cu atenție.
                </span>
              </h2>
              <p className="mt-2 text-base text-[#9cc5a1]/80 font-light max-w-xl">
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
              className="flex items-stretch gap-8 w-max will-change-transform ease-out duration-75"
            >
              {TECH_ITEMS.map((item, idx) => {
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={item.name}
                    onMouseMove={(e) => handleMouseMove(idx, e)}
                    onMouseLeave={handleMouseLeave}
                    className="group relative rounded-2xl p-9 bg-[#1f2421] border border-[#49a078]/25 hover:border-[#49a078]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(33,104,105,0.4)] overflow-hidden flex flex-col justify-between w-[410px] shrink-0 min-h-[280px]"
                  >
                    {isHovered && (
                      <div
                        className="absolute pointer-events-none -inset-px transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(73, 160, 120, 0.16), transparent 70%)`,
                        }}
                      />
                    )}

                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#216869]/15 border border-[#9cc5a1]/20 flex items-center justify-center text-[#9cc5a1] group-hover:text-white group-hover:border-[#49a078] group-hover:bg-[#49a078]/20 group-hover:shadow-[0_0_25px_rgba(73,160,120,0.35)] group-hover:scale-105 transition-all duration-300">
                        {item.icon}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold tracking-tight text-[#f3f7f4] group-hover:text-white transition-colors">
                        {item.name}
                      </h3>

                      <p className="mt-1.5 text-sm font-mono tracking-wider uppercase text-[#49a078] font-medium">
                        {item.role}
                      </p>

                      <p className="mt-3 text-sm text-[#9cc5a1]/75 leading-relaxed font-light group-hover:text-[#9cc5a1]/95 transition-colors">
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
                  window.scrollY +
                  containerRef.current.getBoundingClientRect().top;
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
      </div>
    </section>
  );
}
