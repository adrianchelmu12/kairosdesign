"use client";

import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      phase: "Etapa 01",
      icon: Search,
      title: "Descoperire & Strategie",
      description:
        "Analizăm obiectivele, audiența și cerințele proiectului pentru a stabili o direcție clară și o bază solidă de lucru.",
    },
    {
      number: "02",
      phase: "Etapa 02",
      icon: PenTool,
      title: "Design & Concepție",
      description:
        "Conturăm identitatea vizuală, structura și experiența de utilizare, punând accent pe claritate, rafinament și impact.",
    },
    {
      number: "03",
      phase: "Etapa 03",
      icon: Code2,
      title: "Dezvoltare & Implementare",
      description:
        "Transformăm conceptele într-o soluție tehnică robustă, rapidă, sigură și adaptată perfect pe orice tip de ecran.",
    },
    {
      number: "04",
      phase: "Etapa 04",
      icon: Rocket,
      title: "Lansare & Suport",
      description:
        "Testăm riguros fiecare detaliu, publicăm proiectul și rămânem alături de tine pentru stabilitate și asistență continuă.",
    },
  ];

  return (
    <section id="proces" className="relative py-24 sm:py-32 bg-[#1f2421] overflow-hidden">
      {/* Background radial highlights - zero-cost radial gradients */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -left-24 bottom-12 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(73, 160, 120, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#216869]/20 border border-[#49a078]/30 text-[#49a078] text-xs font-semibold uppercase tracking-wider mb-4">
            Metodologie
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
            Un parcurs clar,{" "}
            <span className="text-gradient-kairos">de la idee la rezultat.</span>
          </h2>
          <p className="mt-4 text-base text-[#9cc5a1]/85 max-w-2xl font-light">
            O colaborare structurată și transparentă, gândită să elimine incertitudinea și să asigure o execuție impecabilă la fiecare etapă.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl glass-panel p-6 sm:p-7 border border-[#9cc5a1]/15 hover:border-[#49a078]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Step Number & Phase Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#216869] group-hover:text-[#49a078] transition-colors font-mono tracking-tight">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#216869]/20 border border-[#216869]/40 text-[#9cc5a1]">
                      {step.phase}
                    </span>
                  </div>

                  {/* Step Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center text-[#49a078] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#f3f7f4] mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-[#9cc5a1]/80 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 pt-4 border-t border-[#216869]/30">
                  <div className="w-full bg-[#1f2421] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#216869] to-[#49a078] rounded-full transition-all duration-500 group-hover:w-full"
                      style={{ width: `${(index + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
