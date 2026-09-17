"use client";

import React, { useState, useEffect, useRef } from "react";

interface PillarItem {
  id: string;
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "momentul-decisiv",
    title: "Momentul Decisiv",
    description:
      "În gândirea clasică, Kairos este clipa oportună în care ideile bune întâlnesc momentul potrivit. Construim site-uri care te poziționează în față exact când publicul tău caută o soluție serioasă.",
  },
  {
    id: "zero-sabloane",
    title: "Zero Șabloane",
    description:
      "Nu folosim teme copiate și nu reciclăm layout-uri vechi. Fiecare pagină este desenată și programată de la zero, adaptată fidel la specificul și obiectivele afacerii tale.",
  },
  {
    id: "construit-sa-dureze",
    title: "Construit să Dureze",
    description:
      "Nu facem compromisuri la calitatea codului. Folosim tehnologii moderne pentru a livra platforme sigure, stabile și ușor de administrat pe termen lung, indiferent de ritmul în care crește afacerea ta.",
  },
];

// Interactive Pillar Row with dynamic spotlight and micro-animations
function PillarRow({
  pillar,
  index,
  isVisible,
}: {
  pillar: PillarItem;
  index: number;
  isVisible: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${250 + index * 160}ms`,
      }}
      className={`group relative py-12 sm:py-16 lg:py-20 px-6 sm:px-10 -mx-6 sm:-mx-10 rounded-3xl transition-all duration-700 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-16 border-b border-[#49a078]/20 overflow-hidden transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-3xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(73, 160, 120, 0.16), transparent 70%)`,
        }}
      />

      {/* Radiant Top Border Accent Line that lights up on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#49a078]/0 to-transparent group-hover:via-[#49a078]/60 transition-all duration-700 pointer-events-none" />

      {/* Left Column: Title with expanding glowing bar */}
      <div className="relative z-10 lg:w-5/12 shrink-0 flex items-center">
        {/* Sleek Vertical Accent Pillar on Hover */}
        <div className="w-1.5 h-0 group-hover:h-8 sm:group-hover:h-10 rounded-full bg-[#49a078] shadow-[0_0_16px_#49a078] transition-all duration-300 mr-0 group-hover:mr-4 shrink-0 opacity-0 group-hover:opacity-100" />

        <h3 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#f3f7f4] group-hover:text-white transition-all duration-300 group-hover:translate-x-2">
          {pillar.title}
        </h3>
      </div>

      {/* Right Column: Text smoothly illuminating */}
      <div className="relative z-10 lg:w-7/12">
        <p className="text-base sm:text-lg text-[#9cc5a1]/80 group-hover:text-[#f3f7f4] font-light leading-relaxed transition-colors duration-300">
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="abordare"
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 lg:pt-36 pb-28 sm:pb-36 lg:pb-44 bg-[#1f2421] overflow-hidden"
    >
      {/* Ambient Cinematic Lighting */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#216869] opacity-20 blur-[190px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[650px] h-[650px] bg-[#49a078] opacity-15 blur-[220px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Decorative Hairline Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#49a078]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Monumental Editorial Headline */}
        <div
          className={`max-w-7xl transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[5.2rem] font-bold tracking-tight text-[#f3f7f4] leading-[1.16]">
            <span className="block sm:whitespace-nowrap pb-1">
              Nu construim doar site-uri.
            </span>
            <span className="block mt-2 sm:mt-3 text-gradient-kairos pb-4 -mb-3">
              Creăm repere digitale.
            </span>
          </h2>

          <p className="mt-8 sm:mt-12 text-lg sm:text-2xl text-[#9cc5a1]/90 font-light leading-relaxed max-w-4xl">
            Lucrăm simplu, clar și bine făcut. De la primul concept vizual până la ultima linie de cod, dezvoltăm proiecte digitale rapide, ușor de folosit și construite să dureze.
          </p>
        </div>

        {/* Varianta 1: Structură Orizontală Editorială Animat */}
        <div className="mt-20 sm:mt-28 border-t border-[#49a078]/25">
          {PILLARS.map((pillar, idx) => (
            <PillarRow
              key={pillar.id}
              pillar={pillar}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

