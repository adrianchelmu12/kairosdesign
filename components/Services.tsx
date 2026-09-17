"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design",
    tagline: "UI / UX & Arhitectură Digitală",
    description:
      "Construim interfețe curate, logice și plăcute la navigare. Punem accent pe o experiență fără fricțiuni, în care fiecare pagină își atinge scopul și transformă vizitatorii în clienți fideli.",
    deliverables: [
      "Design UI / UX Personalizat",
      "Design Responsive (Mobil & Desktop)",
      "Prototipare & Navigație Fluidă",
      "Design System & Componente",
    ],
  },
  {
    id: "branding",
    number: "02",
    title: "Branding",
    tagline: "Identitate Vizuală & Strategie",
    description:
      "O identitate vizuală coerentă face diferența între un site oarecare și un brand memorabil. Definim elemente vizuale clare și de impact, gândite să inspire încredere de la prima secundă.",
    deliverables: [
      "Identitate Vizuală & Logo Design",
      "Sisteme Tipografice & Palete Cromatice",
      "Brand Guidelines & Manual de Brand",
      "Direcție Artistică pentru Conținut",
    ],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    tagline: "Ultimele Tehnologii & Performanță",
    description:
      "Traducem designul într-un cod curat, rapid și stabil. Construim folosind cele mai noi tehnologii pentru o încărcare instantanee, securitate solidă și o funcționare impecabilă pe orice ecran.",
    deliverables: [
      "Construit cu Ultimele Tehnologii",
      "Viteză Maximă de Încărcare",
      "Optimizare Tehnică & SEO",
      "Cod Curat",
    ],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) return;

    // Spațiu mort de scroll (buffer) la final (~70vh) pentru a preveni trecerea accidentală în Portofoliu
    const bufferDistance = Math.min(window.innerHeight * 0.7, 700);
    const activeScrollDistance = Math.max(totalScroll - bufferDistance, 1);

    // Calculate progress between 0 and 1
    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / activeScrollDistance, 0), 1);
    setScrollProgress(progress);

    // Determine active service index (0, 1, 2)
    const index = Math.min(
      Math.floor(progress * SERVICES.length),
      SERVICES.length - 1
    );
    setActiveIndex(index);

    // Track translation calculation
    const trackWidth = trackRef.current.scrollWidth;
    const parentWidth =
      trackRef.current.parentElement?.clientWidth || window.innerWidth;
    const maxScroll = Math.max(0, trackWidth - parentWidth + 80);

    // Smooth translation
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


  return (
    <section
      id="servicii"
      ref={containerRef}
      className="relative h-[380vh] bg-[#1f2421] text-[#f3f7f4]"
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-20 py-8 sm:py-12">
        {/* Ambient Atmospheric Lighting */}
        <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-[#216869] opacity-20 blur-[190px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-[#49a078] opacity-15 blur-[220px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Top Pinned Bar */}
        <div className="relative z-20 flex items-center justify-end pb-6 border-b border-[#49a078]/20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9cc5a1]/70 tracking-wider uppercase">
            <span>Scroll orizontal</span>
            <ArrowRight className="w-4 h-4 text-[#49a078] animate-pulse" />
          </div>
        </div>

        {/* Center: Massive Horizontal Sliding Track */}
        <div className="relative z-10 my-auto overflow-visible">
          <div
            ref={trackRef}
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
            }}
            className="flex items-stretch gap-16 sm:gap-24 lg:gap-32 w-max will-change-transform ease-out duration-75"
          >
            {SERVICES.map((service, index) => {
              const isCurrent = activeIndex === index;

              return (
                <div
                  key={service.id}
                  className={`w-[88vw] sm:w-[78vw] lg:w-[68vw] max-w-5xl shrink-0 flex flex-col justify-center py-4 transition-all duration-700 ease-out ${
                    isCurrent
                      ? "opacity-100 scale-100"
                      : "opacity-30 scale-[0.97] blur-[0.3px]"
                  }`}
                >

                  {/* Monumental Category Title (prevent descender clipping with pb-2 sm:pb-3) */}
                  <h3
                    className={`text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight text-[#f3f7f4] leading-[1.05] pb-2 sm:pb-3 transition-all duration-700 ${
                      isCurrent
                        ? "opacity-100 translate-y-0"
                        : "opacity-40 translate-y-4"
                    }`}
                  >
                    {service.title}
                    <span className="text-[#49a078]">.</span>
                  </h3>

                  {/* Grounded & Natural Description - Fades in sequentially after title */}
                  <p
                    className={`mt-4 sm:mt-8 text-lg sm:text-2xl lg:text-[1.75rem] text-[#9cc5a1]/90 font-light leading-relaxed max-w-3xl transition-all duration-700 delay-150 ${
                      isCurrent
                        ? "opacity-100 translate-y-0"
                        : "opacity-20 translate-y-6"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Clean Deliverables Chips */}
                  <div
                    className={`mt-8 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3.5 transition-all duration-700 delay-300 ${
                      isCurrent
                        ? "opacity-100 translate-y-0"
                        : "opacity-10 translate-y-8"
                    }`}
                  >
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm px-4 py-2 rounded-full border border-[#9cc5a1]/20 bg-[#216869]/10 text-[#9cc5a1] hover:border-[#49a078]/50 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Direct Contact Link */}
                  <div
                    className={`mt-8 sm:mt-10 transition-all duration-700 delay-500 ${
                      isCurrent
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#49a078] hover:text-white transition-colors group"
                    >
                      <span className="border-b border-[#49a078]/40 group-hover:border-white pb-0.5">
                        Discută un proiect de {service.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
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
              const bufferDistance = Math.min(window.innerHeight * 0.7, 700);
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
            0{activeIndex + 1} / 0{SERVICES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
