"use client";

import React, { useState, useRef } from "react";

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

// Interactive Pillar Row with compact, elegant proportions
function PillarRow({
  pillar,
}: {
  pillar: PillarItem;
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
      className="group relative py-5 sm:py-7 lg:py-8 px-3 sm:px-5 lg:px-6 mx-0 sm:-mx-2 lg:-mx-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-12 border-b border-[#49a078]/20 overflow-hidden w-full max-w-full"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(73, 160, 120, 0.14), transparent 70%)`,
        }}
      />

      {/* Radiant Top Border Accent Line that lights up on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#49a078]/0 to-transparent group-hover:via-[#49a078]/60 transition-all duration-500 pointer-events-none" />

      {/* Left Column: Title with expanding glowing bar */}
      <div className="relative z-10 lg:w-5/12 shrink-0 flex items-center">
        {/* Sleek Vertical Accent Pillar on Hover */}
        <div className="w-1.5 h-0 group-hover:h-6 sm:group-hover:h-7 rounded-full bg-[#49a078] shadow-[0_0_12px_#49a078] transition-all duration-300 mr-0 group-hover:mr-3 shrink-0 opacity-0 group-hover:opacity-100" />

        <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#f3f7f4] group-hover:text-white transition-all duration-300 group-hover:translate-x-1.5">
          {pillar.title}
        </h3>
      </div>

      {/* Right Column: Text smoothly illuminating */}
      <div className="relative z-10 lg:w-7/12">
        <p className="text-sm sm:text-base text-[#9cc5a1]/85 group-hover:text-[#f3f7f4] font-light leading-relaxed transition-colors duration-300">
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section
      id="abordare"
      className="relative pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 bg-[#1f2421] overflow-hidden"
    >
      {/* Ambient Cinematic Lighting - zero-cost radial gradients */}
      <div
        className="absolute top-1/4 -left-48 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(73, 160, 120, 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Decorative Hairline Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#49a078]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Editorial Headline */}
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#f3f7f4] leading-[1.18]">
            <span className="block sm:whitespace-nowrap pb-1">
              Nu construim doar site-uri.
            </span>
            <span className="block mt-1 sm:mt-2 text-gradient-kairos pb-2">
              Creăm repere digitale.
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#9cc5a1]/90 font-light leading-relaxed max-w-3xl">
            Lucrăm simplu, clar și bine făcut. De la primul concept vizual până la ultima linie de cod, dezvoltăm proiecte digitale rapide, ușor de folosit și construite să dureze.
          </p>
        </div>

        {/* Structură Compactă & Elegantă */}
        <div className="mt-10 sm:mt-14 border-t border-[#49a078]/25">
          {PILLARS.map((pillar) => (
            <PillarRow
              key={pillar.id}
              pillar={pillar}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
