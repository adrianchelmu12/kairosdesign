"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Toate");

  const categories = ["Toate", "Web Design", "Branding", "Web Development"];

  const projects = [
    {
      id: "aura-luxe",
      title: "Aura Haute Joaillerie",
      category: "Branding",
      tags: ["Branding", "Directie Artistica", "E-Commerce"],
      description:
        "Redefinire completă de identitate vizuală și platformă digitală de lux cu interfețe tactile, tipografie elegantă și fluiditate maximă.",
      metric: "+240% Rata de Conversie",
      colorGradient: "from-[#216869] to-[#1f2421]",
      accent: "#49a078",
      year: "2025",
    },
    {
      id: "nexis-cloud",
      title: "Nexis Cloud Infrastructure",
      category: "Web Development",
      tags: ["Web Development", "Next.js", "Design System"],
      description:
        "Arhitectură Next.js de înaltă performanță pentru o platformă SaaS B2B, cu încărcare instantanee și scoruri perfecte de 100/100 Core Web Vitals.",
      metric: "Timp încărcare 0.28s",
      colorGradient: "from-[#1f2421] to-[#216869]",
      accent: "#9cc5a1",
      year: "2025",
    },
    {
      id: "vanguard-studios",
      title: "Vanguard Atelier",
      category: "Web Design",
      tags: ["Web Design", "UI/UX", "Micro-Animații"],
      description:
        "Website editorial pentru un birou de arhitectură premiat internațional. Design curajos, grid-uri experimentale și tranziții hipnotice.",
      metric: "Premiat Awwwards Honorable",
      colorGradient: "from-[#216869]/80 to-[#49a078]/20",
      accent: "#49a078",
      year: "2024",
    },
    {
      id: "krypton-fintech",
      title: "Krypton Asset Protocol",
      category: "Web Design",
      tags: ["Web Design", "Branding", "Web Development"],
      description:
        "Lansare completă de brand și dashboard web interactiv pentru fond de investiții fintech. Claritate absolută într-un domeniu complex.",
      metric: "Volum gestionat 40M€+",
      colorGradient: "from-[#1f2421] via-[#216869]/60 to-[#1f2421]",
      accent: "#9cc5a1",
      year: "2024",
    },
  ];

  const filteredProjects =
    activeFilter === "Toate"
      ? projects
      : projects.filter((p) => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <section id="portofoliu" className="relative py-28 bg-[#1f2421] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f3f7f4]">
              Creativitate care aduce{" "}
              <span className="text-gradient-kairos">rezultate reale.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#49a078] text-[#1f2421] shadow-[0_0_20px_rgba(73,160,120,0.4)]"
                    : "glass-panel text-[#9cc5a1] hover:text-white hover:border-[#49a078]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel p-6 sm:p-8 border border-[#9cc5a1]/15 hover:border-[#49a078]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              {/* Project Card Visual Preview Canvas */}
              <div
                className={`relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-br ${project.colorGradient} p-6 flex flex-col justify-between overflow-hidden border border-[#9cc5a1]/10 group-hover:scale-[1.01] transition-transform duration-500`}
              >
                {/* Visual Ambient Texture */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Glow accent */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1f2421]/80 backdrop-blur-md border border-[#9cc5a1]/20 text-[#9cc5a1]">
                    {project.year}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#1f2421]/80 backdrop-blur-md border border-[#9cc5a1]/20 flex items-center justify-center text-[#f3f7f4] group-hover:bg-[#49a078] group-hover:text-[#1f2421] transition-colors">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Center Stylized Abstract Branding Graphic */}
                <div className="relative z-10 my-auto text-center">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f7f4]/90 group-hover:text-white transition-colors">
                    {project.title}
                  </span>
                </div>

                {/* Metric pill */}
                <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-[#f3f7f4] bg-[#1f2421]/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#49a078]/30 w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-[#49a078]" />
                  <span>{project.metric}</span>
                </div>
              </div>

              {/* Project Card Bottom Content */}
              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#216869]/20 text-[#9cc5a1] border border-[#216869]/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#f3f7f4] mb-2 group-hover:text-[#49a078] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#9cc5a1]/85 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#9cc5a1]/80">
            Fiecare proiect este supus unui acord strict de confidențialitate.{" "}
            <a
              href="#contact"
              className="text-[#49a078] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Solicită portofoliul complet privat <ArrowUpRight className="w-4 h-4" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

