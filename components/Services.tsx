"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
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

    const bufferDistance = Math.min(window.innerHeight * 0.7, 700);
    const activeScrollDistance = Math.max(totalScroll - bufferDistance, 1);

    const currentScroll = -rect.top;
    const progress = Math.min(Math.max(currentScroll / activeScrollDistance, 0), 1);
    setScrollProgress(progress);

    const index = Math.min(
      Math.floor(progress * SERVICES.length),
      SERVICES.length - 1
    );
    setActiveIndex(index);

    const trackWidth = trackRef.current.scrollWidth;
    const parentWidth =
      trackRef.current.parentElement?.clientWidth || window.innerWidth;
    const maxScroll = Math.max(0, trackWidth - parentWidth + 80);

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

  return (
    <section
      id="servicii"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#1f2421] text-[#f3f7f4] overflow-hidden border-t border-[#49a078]/20"
    >
      {/* Ambient Atmospheric Lighting - zero-cost radial gradients */}
      <div
        className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(73, 160, 120, 0.16) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <section id="servicii" className="bg-[#1f2421] text-[#f3f7f4]">
      {/* ======================================================== */}
      {/* 1. VARIANTA MOBIL / TABLETĂ (< 1024px): 100% Vertical    */}
      {/* ======================================================== */}
      <div className="lg:hidden py-14 sm:py-20 px-4 sm:px-6 border-t border-[#49a078]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header mobil */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
              Expertiză digitală{" "}
              <span className="text-gradient-kairos">completă.</span>
            </h2>
            <p className="mt-4 text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              O combinație echilibrată între viziune vizuală și arhitectură tehnică de elită, concentrată pe claritate și impact pe termen lung.
            </p>
          </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
            Expertiză digitală{" "}
            <span className="text-gradient-kairos">completă.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9cc5a1]/85 font-light leading-relaxed max-w-2xl">
            Construim experiențe digitale end-to-end, de la identitate vizuală distinctă până la arhitectură tehnică de elită.
          </p>
          {/* Listă verticală curată pe mobil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="relative rounded-2xl p-7 sm:p-8 bg-[#1f2421]/90 border border-[#49a078]/25 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-[#216869] font-mono">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f7f4]">
                    {service.title}
                    <span className="text-[#49a078]">.</span>
                  </h3>

                  <p className="mt-4 text-sm text-[#9cc5a1]/85 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full border border-[#9cc5a1]/20 bg-[#216869]/10 text-[#9cc5a1]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#216869]/30">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#49a078] hover:text-white transition-colors"
                  >
                    <span>Discută un proiect de {service.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 3-Column Services Cards Grid - 100% natural vertical scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
      {/* ======================================================== */}
      {/* 2. VARIANTA DESKTOP (>= 1024px): Scroll Orizontal Lipit  */}
      {/* ======================================================== */}
      <div
        ref={containerRef as unknown as React.RefObject<HTMLDivElement>}
        className="hidden lg:block relative h-[340vh]"
      >
        <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-16 lg:px-20 py-10">
          {/* Ambient Atmospheric Lighting - zero-cost radial gradients */}
          <div
            className="absolute top-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(33, 104, 105, 0.22) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(73, 160, 120, 0.16) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Top Pinned Bar */}
          <div className="relative z-20 flex items-center justify-between pb-6 border-b border-[#49a078]/20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#f3f7f4]">
                Expertiză digitală{" "}
                <span className="text-gradient-kairos">completă.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#9cc5a1]/70 tracking-wider uppercase">
              <span>Scroll orizontal</span>
              <ArrowRight className="w-4 h-4 text-[#49a078] animate-pulse" />
            </div>
          </div>

          {/* Center: Massive Horizontal Sliding Track */}
          <div className="relative z-10 my-auto overflow-visible">
            <div
              key={service.id}
              className="relative rounded-2xl p-7 sm:p-8 bg-[#1f2421]/90 border border-[#49a078]/25 hover:border-[#49a078]/60 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              ref={trackRef}
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
              className="flex items-stretch gap-24 lg:gap-32 w-max will-change-transform ease-out duration-75"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078]/0 to-transparent group-hover:via-[#49a078]/70 transition-all duration-500 rounded-t-2xl pointer-events-none" />
              {SERVICES.map((service, index) => {
                const isCurrent = activeIndex === index;

              <div>
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#216869] group-hover:text-[#49a078] transition-colors font-mono">
                    {service.number}
                  </span>
                </div>
                return (
                  <div
                    key={service.id}
                    className={`w-[68vw] max-w-5xl shrink-0 flex flex-col justify-center py-4 transition-all duration-700 ease-out ${
                      isCurrent
                        ? "opacity-100 scale-100"
                        : "opacity-30 scale-[0.97] blur-[0.3px]"
                    }`}
                  >
                    <div className="mb-4">
                      <span className="text-3xl lg:text-4xl font-black text-[#216869] font-mono">
                        {service.number}
                      </span>
                    </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f7f4] group-hover:text-white transition-colors">
                  {service.title}
                  <span className="text-[#49a078]">.</span>
                </h3>
                    <h3 className="text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight text-[#f3f7f4] leading-[1.05] pb-3 transition-all duration-700">
                      {service.title}
                      <span className="text-[#49a078]">.</span>
                    </h3>

                <p className="mt-4 text-sm text-[#9cc5a1]/85 font-light leading-relaxed">
                  {service.description}
                </p>
                    <p className="mt-6 text-xl lg:text-[1.75rem] text-[#9cc5a1]/90 font-light leading-relaxed max-w-3xl transition-all duration-700 delay-150">
                      {service.description}
                    </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-[#9cc5a1]/20 bg-[#216869]/10 text-[#9cc5a1] group-hover:border-[#49a078]/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
                    <div className="mt-10 flex flex-wrap gap-3 transition-all duration-700 delay-300">
                      {service.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-4 py-2 rounded-full border border-[#9cc5a1]/20 bg-[#216869]/10 text-[#9cc5a1] hover:border-[#49a078]/50 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

              <div className="mt-8 pt-5 border-t border-[#216869]/30">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#49a078] hover:text-white transition-colors group/link"
                >
                  <span>Discută un proiect de {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
                    <div className="mt-10 transition-all duration-700 delay-500">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-base font-semibold text-[#49a078] hover:text-white transition-colors group"
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
          ))}
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
              0{activeIndex + 1} / 0{SERVICES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
