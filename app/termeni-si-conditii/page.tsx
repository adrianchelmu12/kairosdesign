import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Code,
  Briefcase,
  CreditCard,
  Lock,
  Wrench,
  AlertTriangle,
  Scale,
  Mail,
  ExternalLink,
} from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termeni și Condiții de Utilizare — Kairos Design",
  description:
    "Termenii și condițiile generale privind prestarea serviciilor digitale de web design, branding și dezvoltare web de către SC URBANSELL SRL (Kairos Design).",
};

export default function TermeniSiConditii() {
  const sections = [
    { id: "operator", title: "1. Prestatorul & Aplicabilitate" },
    { id: "servicii", title: "2. Descrierea Serviciilor" },
    { id: "contractare", title: "3. Ofertare & Contractare" },
    { id: "etape-livrare", title: "4. Etape de Lucru & Validare" },
    { id: "conditii-financiare", title: "5. Condiții Financiare & Plăți" },
    { id: "proprietate-intelectuala", title: "6. Proprietate Intelectuală" },
    { id: "confidentialitate", title: "7. Confidențialitate & Portofoliu" },
    { id: "garantie-suport", title: "8. Garanție Tehnică & Mentenanță" },
    { id: "limitare-raspundere", title: "9. Limitarea Răspunderii" },
    { id: "litigii-anpc", title: "10. Litigii & ANPC (SAL / SOL)" },
    { id: "dispozitii-finale", title: "11. Dispoziții Finale & Contact" },
  ];

  return (
    <main className="min-h-screen bg-[#1f2421] text-[#f3f7f4] relative selection:bg-[#49a078] selection:text-[#1f2421]">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#216869] opacity-15 blur-[220px] pointer-events-none rounded-full" />
      <div className="absolute top-[800px] right-10 w-[500px] h-[400px] bg-[#49a078] opacity-10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Floating Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#1f2421]/80 backdrop-blur-xl border-b border-[#216869]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="Kairos Design"
              width={140}
              height={45}
              priority
              className="h-9 w-auto object-contain transition-opacity group-hover:opacity-85"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#216869]/15 border border-[#49a078]/30 text-xs font-mono uppercase tracking-wider text-[#9cc5a1] hover:text-[#f3f7f4] hover:border-[#49a078] transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#49a078] group-hover:-translate-x-0.5 transition-transform" />
            <span>Înapoi la site</span>
          </Link>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#216869]/20 border border-[#49a078]/30 text-xs font-mono uppercase tracking-wider text-[#49a078] mb-6">
            <FileText className="w-3.5 h-3.5 text-[#49a078]" />
            <span>Cadru Legal Comercial &bull; Servicii Digitale</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f7f4] leading-[1.14]">
            Termeni și Condiții{" "}
            <span className="text-gradient-kairos block mt-1">
              de Utilizare &amp; Prestare
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#9cc5a1]/75">
            <span className="px-3 py-1 rounded-md bg-[#262c28] border border-[#216869]/40">
              Ultima actualizare: <strong>17.09.2026</strong>
            </span>
            <span>&bull;</span>
            <span>Prestator: <strong>SC URBANSELL SRL (Kairos Design)</strong></span>
          </div>

          <p className="mt-8 text-base sm:text-lg text-[#9cc5a1]/90 font-light leading-relaxed">
            Prezentul document stabilește termenii și condițiile generale aplicabile
            utilizării site-ului web{" "}
            <strong className="text-[#49a078] font-mono">https://kairosdesign.ro</strong> și
            colaborărilor comerciale desfășurate între{" "}
            <strong className="text-[#f3f7f4] font-semibold">SC URBANSELL SRL (Kairos Design)</strong>,
            în calitate de prestator, și beneficiari (persoane fizice sau juridice).
          </p>
        </div>
      </section>

      {/* Quick Jump Navigation Pill Bar */}
      <section className="py-4 border-y border-[#216869]/25 bg-[#1f2421]/60 backdrop-blur-md relative z-10 overflow-x-auto scrollbar-none">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 flex items-center gap-2.5 whitespace-nowrap">
          <span className="text-xs font-mono uppercase text-[#9cc5a1]/60 pr-2">
            Cuprins:
          </span>
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3 py-1 rounded-lg bg-[#262c28]/60 hover:bg-[#216869]/20 border border-[#216869]/30 hover:border-[#49a078]/50 text-xs font-mono text-[#9cc5a1]/80 hover:text-[#f3f7f4] transition-all"
            >
              {sec.title}
            </a>
          ))}
        </div>
      </section>

      {/* Terms Body Content */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
          
          {/* 1. Prestatorul & Aplicabilitate */}
          <article id="operator" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Identificarea Prestatorului &amp; Aplicabilitate
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Site-ul web este deținut și serviciile sunt prestate de către:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono mb-6">
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Denumire societate</div>
                <div className="font-semibold text-[#f3f7f4]">SC URBANSELL SRL</div>
                <div className="text-xs text-[#49a078] mt-1">Brand comercial: Kairos Design</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Sediul social</div>
                <div className="font-semibold text-[#f3f7f4]">Iași, România</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Date Fiscale</div>
                <div className="font-semibold text-[#f3f7f4]">CUI: 50951134 / RO51344602</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Email oficial</div>
                <a
                  href="mailto:office@kairosdesign.ro"
                  className="font-semibold text-[#49a078] hover:underline"
                >
                  office@kairosdesign.ro
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Navigarea pe site, completarea formularelor de contact și solicitarea unei oferte
              implică acceptarea expresă și neechivocă a prezentelor clauze. În cazul încheierii unui
              contract individual de prestări servicii între părți, prevederile contractului semnat
              vor avea prioritate față de prezentul document general.
            </p>
          </article>

          {/* 2. Descrierea Serviciilor */}
          <article id="servicii" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                02
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Descrierea Serviciilor Digitale
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              Kairos Design oferă servicii specializate de consultanță, creație și inginerie digitală, incluzând:
            </p>

            <ul className="space-y-3 text-sm sm:text-base text-[#9cc5a1]/85 font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 flex-shrink-0" />
                <span><strong className="text-[#f3f7f4] font-medium">Web Design &amp; UI/UX:</strong> Realizarea de prototipuri interactive în Figma, design de interfețe, design responsive, sisteme de design și experiențe de utilizare personalizate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 flex-shrink-0" />
                <span><strong className="text-[#f3f7f4] font-medium">Dezvoltare Web &amp; Aplicații Frontend:</strong> Implementare tehnică bazată pe arhitecturi moderne (Next.js, React, TypeScript, Tailwind CSS), optimizare pentru motoare de căutare (SEO) și performanță Core Web Vitals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 flex-shrink-0" />
                <span><strong className="text-[#f3f7f4] font-medium">Branding Strategic &amp; Identitate Vizuală:</strong> Concepere de logo, ghid de stil (brand guidelines), palete cromatice, fonturi și active vizuale pentru prezența online și offline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 flex-shrink-0" />
                <span><strong className="text-[#f3f7f4] font-medium">Mentenanță &amp; Optimizare Continuă:</strong> Audit tehnic, securitate web, monitorizare viteză și actualizări de conținut.</span>
              </li>
            </ul>
          </article>

          {/* 3. Ofertare & Contractare */}
          <article id="contractare" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                03
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Procedura de Ofertare &amp; Contractare
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                1. <strong className="text-[#f3f7f4] font-medium">Brief-ul Inițial:</strong> Clientul transmite specificațiile proiectului prin formularul de contact sau prin sesiune directă de consultanță.
              </p>
              <p>
                2. <strong className="text-[#f3f7f4] font-medium">Oferta Comercială:</strong> Kairos elaborează o propunere tehnică și comercială detaliată (Scope of Work), ce conține estimările de timp, livrabilele concrete și bugetul alocat. Ofertele emise sunt valabile 30 de zile calendaristice de la data transmiterii, dacă nu se specifică altfel în scris.
              </p>
              <p>
                3. <strong className="text-[#f3f7f4] font-medium">Semnarea Contractului:</strong> Lucrările debutează doar ulterior semnării contractului de prestări servicii de către ambele părți și achitării tranșei de avans stabilite.
              </p>
            </div>
          </article>

          {/* 4. Etape de Lucru & Validare */}
          <article id="etape-livrare" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                04
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Etape de Lucru &amp; Proceduri de Validare
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                Pentru a asigura o calitate impecabilă și respectarea termenelor, proiectele se derulează pe etape secvențiale (ex: Arhitectură informațională &rarr; Design UI/UX Figma &rarr; Dezvoltare Frontend &rarr; Integrare &rarr; Testare &rarr; Lansare).
              </p>
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#49a078]/25 text-sm">
                <span className="text-[#49a078] font-semibold block mb-1">Principiul feedback-ului punctual:</span>
                Clientul se obligă să ofere feedback sau validare scrisă asupra livrabilelor intermediare în termen de maximum 5-7 zile lucrătoare de la prezentarea acestora. Întârzierile în transmiterea feedback-ului sau a materialelor necesare (texte, imagini, credențiale) decalează în mod corespunzător termenul final de livrare.
              </div>
              <p>
                Fiecare etapă include 2 runde de revizii/modificări în limitele specificațiilor convenite inițial. Orice solicitare de adăugare a unor funcționalități noi ce nu au făcut parte din oferta inițială (scope creep) va fi tratată ca un act adițional separat.
              </p>
            </div>
          </article>

          {/* 5. Condiții Financiare & Plăți */}
          <article id="conditii-financiare" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                05
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Condiții Financiare, Facturare &amp; Plăți
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                Plata serviciilor se realizează prin transfer bancar în baza facturilor fiscale emise în RON sau EUR (la cursul BNR din ziua emiterii), conform etapelor agreate prin contract (de regulă: avans la debutul proiectului și sold la finalizarea și acceptarea livrabilelor).
              </p>
              <ul className="space-y-2 text-sm text-[#9cc5a1]/80 font-mono">
                <li>&bull; Termen standard de plată a facturilor: <strong>5-10 zile calendaristice</strong> de la emitere.</li>
                <li>&bull; Întârzierile la plată pot atrage penalități contractuale de 0.1% pe zi de întârziere și suspendarea temporară a lucrărilor sau a accesului la mediile de staging/dezvoltare.</li>
              </ul>
            </div>
          </article>

          {/* 6. Proprietate Intelectuală */}
          <article id="proprietate-intelectuala" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                06
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Drepturi de Proprietate Intelectuală &amp; Drepturi de Autor
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                Drepturile patrimoniale de autor asupra creațiilor unice realizate la comandă (concepte grafice de brand, fișiere sursă Figma de design, cod sursă personalizat dezvoltat specific pentru client) se transferă în patrimoniul Clientului <strong className="text-[#f3f7f4] font-semibold">numai după achitarea integrală a tuturor facturilor fiscale aferente proiectului</strong>.
              </p>
              <p>
                Prestatorul își rezervă drepturile morale de autor prevăzute de Legea nr. 8/1996 privind dreptul de autor și drepturile conexe. Bibliotecile open-source, framework-urile (ex: React, Next.js) și modulele terțe utilizate rămân guvernate de licențele lor specifice (MIT, Apache, BSD).
              </p>
              <p>
                Clientul garantează că toate materialele furnizate către Prestator (texte, imagini, fonturi cu licență comercială, logo-uri deținute) nu încalcă drepturile de proprietate intelectuală ale unor terți, asumându-și întreaga responsabilitate legală pentru utilizarea acestora.
              </p>
            </div>
          </article>

          {/* 7. Confidențialitate & Portofoliu */}
          <article id="confidentialitate" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                07
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Confidențialitate (NDA) &amp; Dreptul de Portofoliu
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                Ambele părți se angajează să păstreze confidențialitatea strictă asupra informațiilor comerciale, tehnice și financiare schimbate pe parcursul colaborării, care nu sunt destinate publicității.
              </p>
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/30 text-sm">
                <span className="text-[#49a078] font-semibold block mb-1">Dreptul de Referință &amp; Portofoliu:</span>
                Cu excepția cazului în care s-a agreat în mod expres un Acord de Confidențialitate (NDA) ce interzice menționarea proiectului, Kairos Design are dreptul de a menționa colaborarea și de a expune imagini/capturi vizuale ale proiectului finalizat în propriul portofoliu online, rețele de socializare sau candidaturi la festivaluri și concursuri de design web (Awwwards, CSS Design Awards etc.).
              </div>
            </div>
          </article>

          {/* 8. Garanție Tehnică & Mentenanță */}
          <article id="garantie-suport" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                08
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Garanție Tehnică &amp; Suport Post-Lansare
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <p>
                Kairos acordă o <strong className="text-[#f3f7f4] font-semibold">garanție tehnică de 30 de zile calendaristice</strong> de la data lansării oficiale în producție a proiectului. În această perioadă, orice eroare de cod sau neconformitate raportată față de cerințele agreate inițial va fi remediată gratuit în cel mai scurt timp posibil.
              </p>
              <p className="text-xs text-[#9cc5a1]/70 font-mono">
                * Garanția își pierde valabilitatea dacă codul sursă a fost modificat de către Client sau de o terță parte fără acordul scris al prestatorului, sau în caz de incompatibilități cauzate de modificarea neanunțată a unor API-uri terțe (ex: Stripe, Google Maps etc.).
              </p>
            </div>
          </article>

          {/* 9. Limitarea Răspunderii */}
          <article id="limitare-raspundere" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                09
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Limitarea Răspunderii &amp; Forță Majoră
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              În măsura maximă permisă de legea aplicabilă, răspunderea totală a Prestatorului pentru orice pretenție decurgând din prestarea serviciilor este limitată la suma efectiv încasată de la Client pentru proiectul sau faza respectivă de lucru.
            </p>
            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Prestatorul nu răspunde pentru daune indirecte, pierderi de profit, întreruperi ale activității comerciale cauzate de indisponibilitatea furnizorilor de găzduire (Vercel, AWS, Cloudflare) sau a atacurilor cibernetice independente de controlul direct al acestuia.
            </p>
          </article>

          {/* 10. Litigii & ANPC (SAL / SOL) */}
          <article id="litigii-anpc" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Legea Aplicabilă, Soluționarea Litigiilor &amp; ANPC
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Prezentele condiții sunt guvernate de legea română. Părțile convin să depună toate diligențele pentru soluționarea pe cale amiabilă a oricărui diferend în termen de 30 de zile de la apariția acestuia. În caz contrar, litigiile vor fi deduse spre soluționare instanțelor judecătorești competente din municipiul Iași, România.
            </p>

            {/* ANPC Mandatory Consumer Protection Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#1f2421] border border-[#49a078]/30">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#f3f7f4] mb-3">
                <Scale className="w-4 h-4 text-[#49a078]" />
                <span>Informare Consumatori conform legislației ANPC (Ordinul 449/2022 &amp; 433/2022)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9cc5a1]/80 leading-relaxed mb-5">
                În cazul în care beneficiarul acționează în calitate de consumator (persoană fizică ce achiziționează servicii în scopuri din afara activității sale comerciale), acesta are dreptul de a apela la mecanismele alternative de soluționare a litigiilor puse la dispoziție de Autoritatea Națională pentru Protecția Consumatorilor (ANPC) și Comisia Europeană:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://anpc.ro/ce-este-sal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#262c28] border border-[#216869]/40 hover:border-[#49a078] transition-all group"
                >
                  <div>
                    <div className="text-xs font-bold text-[#f3f7f4] group-hover:text-[#49a078] transition-colors">
                      ANPC &bull; Soluționarea Alternativă a Litigiilor (SAL)
                    </div>
                    <div className="text-[11px] text-[#9cc5a1]/60 font-mono mt-0.5">
                      anpc.ro/ce-este-sal
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9cc5a1]/50 group-hover:text-[#49a078] transition-colors flex-shrink-0 ml-2" />
                </a>

                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#262c28] border border-[#216869]/40 hover:border-[#49a078] transition-all group"
                >
                  <div>
                    <div className="text-xs font-bold text-[#f3f7f4] group-hover:text-[#49a078] transition-colors">
                      Platforma Europeană SOL (Online Dispute Resolution)
                    </div>
                    <div className="text-[11px] text-[#9cc5a1]/60 font-mono mt-0.5">
                      ec.europa.eu/consumers/odr
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#9cc5a1]/50 group-hover:text-[#49a078] transition-colors flex-shrink-0 ml-2" />
                </a>
              </div>
            </div>
          </article>

          {/* 11. Dispoziții Finale & Contact */}
          <article id="dispozitii-finale" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Dispoziții Finale &amp; Date de Contact
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Kairos Design își rezervă dreptul de a actualiza sau revizui prezentele condiții pentru a reflecta modificări legislative sau îmbunătățiri ale serviciilor oferite. Orice modificare va fi publicată pe această pagină cu menționarea datei ultimei revizuiri.
            </p>

            <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#9cc5a1]/60 font-mono mb-1">
                  Întrebări sau solicitări contractuale:
                </div>
                <div className="text-sm text-[#f3f7f4] font-medium">
                  Echipa juridică și comercială Kairos
                </div>
              </div>
              <a
                href="mailto:office@kairosdesign.ro"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#49a078] text-[#1f2421] font-semibold text-xs hover:bg-[#9cc5a1] transition-colors self-start sm:self-auto"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>office@kairosdesign.ro</span>
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* Shared Global Footer */}
      <Footer />
    </main>
  );
}
