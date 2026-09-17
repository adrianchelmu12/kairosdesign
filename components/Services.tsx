"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#216869]/20 border border-[#49a078]/30 text-[#49a078] text-xs font-semibold uppercase tracking-wider mb-4">
            Servicii Core
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
            Expertiză digitală{" "}
            <span className="text-gradient-kairos">completă.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9cc5a1]/85 font-light leading-relaxed max-w-2xl">
            Construim experiențe digitale end-to-end, de la identitate vizuală distinctă până la arhitectură tehnică de elită.
          </p>
        </div>

        {/* 3-Column Services Cards Grid - 100% natural vertical scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl p-7 sm:p-8 bg-[#1f2421]/90 border border-[#49a078]/25 hover:border-[#49a078]/60 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078]/0 to-transparent group-hover:via-[#49a078]/70 transition-all duration-500 rounded-t-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-[#216869] group-hover:text-[#49a078] transition-colors font-mono">
                    {service.number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#216869]/20 border border-[#216869]/40 text-[#9cc5a1]">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#f3f7f4] group-hover:text-white transition-colors">
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
                      className="text-xs px-3 py-1 rounded-full border border-[#9cc5a1]/20 bg-[#216869]/10 text-[#9cc5a1] group-hover:border-[#49a078]/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
