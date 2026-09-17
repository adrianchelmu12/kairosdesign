import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Shield,
  Lock,
  Cookie,
  Mail,
  Building,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politică de Confidențialitate & Cookie-uri — Kairos Design",
  description:
    "Află cum colectează, utilizează și protejează URBANSELL SRL (Kairos Design) datele tale cu caracter personal, în conformitate cu GDPR (Regulamentul UE 2016/679).",
};

export default function PoliticaConfidentialitate() {
  const sections = [
    { id: "cine-suntem", title: "1. Cine suntem" },
    { id: "date-colectate", title: "2. Ce date colectăm" },
    { id: "cum-colectam", title: "3. Cum colectăm datele" },
    { id: "scopul-colectarii", title: "4. Scopul colectării" },
    { id: "temei-juridic", title: "5. Temeiul juridic" },
    { id: "pastrarea-datelor", title: "6. Păstrarea datelor" },
    { id: "drepturile-tale", title: "7. Drepturile tale" },
    { id: "divulgare-terti", title: "8. Divulgarea către terți" },
    { id: "cookie-uri", title: "9. Cookie-uri" },
    { id: "ce-sunt-cookie", title: "10. Ce sunt cookie-urile" },
    { id: "tipuri-cookie", title: "11. Tipuri de cookie-uri" },
    { id: "cookie-terti", title: "12. Cookie-uri de la terți" },
    { id: "consimtamant-cookie", title: "13. Consimțământul tău" },
    { id: "control-cookie", title: "14. Controlul cookie-urilor" },
    { id: "securitate", title: "15. Securitatea datelor" },
    { id: "actualizari", title: "16. Actualizări ale politicii" },
    { id: "contact", title: "17. Contact & Asistență" },
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

      {/* Policy Hero Header */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#216869]/20 border border-[#49a078]/30 text-xs font-mono uppercase tracking-wider text-[#49a078] mb-6">
            <Shield className="w-3.5 h-3.5 text-[#49a078]" />
            <span>Conformitate GDPR &bull; Regulamentul (UE) 2016/679</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f7f4] leading-[1.14]">
            Politică de Confidențialitate{" "}
            <span className="text-gradient-kairos block mt-1">
              și Module Cookie
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#9cc5a1]/75">
            <span className="px-3 py-1 rounded-md bg-[#262c28] border border-[#216869]/40">
              Ultima actualizare: <strong>19.01.2026</strong>
            </span>
            <span>&bull;</span>
            <span>Operator: <strong>SC URBANSELL SRL (Kairos Design)</strong></span>
          </div>

          <p className="mt-8 text-base sm:text-lg text-[#9cc5a1]/90 font-light leading-relaxed">
            Prezenta Politică de Confidențialitate descrie modul în care{" "}
            <strong className="text-[#f3f7f4] font-semibold">URBANSELL SRL (Kairos Design)</strong>{" "}
            („noi”, „nouă”, „site-ul”) colectează, utilizează și protejează datele cu caracter
            personal ale utilizatorilor care accesează site-ul web{" "}
            <strong className="text-[#49a078] font-mono">https://kairosdesign.ro</strong>, în
            conformitate cu Regulamentul (UE) 2016/679 (GDPR).
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

      {/* Main Policy Content Articles */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">

          {/* 1. Cine suntem */}
          <article id="cine-suntem" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Cine suntem
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Platforma online și serviciile asociate sunt administrate de către:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Denumire societate</div>
                <div className="font-semibold text-[#f3f7f4]">SC URBANSELL SRL</div>
                <div className="text-xs text-[#49a078] mt-1">(Kairos Design)</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Sediul social</div>
                <div className="font-semibold text-[#f3f7f4]">Iași, România</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Adresă de Email</div>
                <a
                  href="mailto:office@kairosdesign.ro"
                  className="font-semibold text-[#49a078] hover:underline"
                >
                  office@kairosdesign.ro
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="text-xs text-[#9cc5a1]/60 uppercase mb-1">Date Fiscale (CUI / CIF)</div>
                <div className="font-semibold text-[#f3f7f4]">50951134 / RO51344602</div>
              </div>
            </div>
          </article>

          {/* 2. Ce date colectăm */}
          <article id="date-colectate" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                02
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Ce date colectăm
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              Putem colecta următoarele categorii de date cu caracter personal:
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-[#f3f7f4] font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Nume și prenume / Numele companiei</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Adresă de email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Număr de telefon (dacă este furnizat voluntar)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Informații furnizate prin formularele de contact (detalii proiect, mesaje transmise)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Date tehnice (adresă IP, tipul browserului, versiunea sistemului de operare)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Date privind utilizarea site-ului (exclusiv dacă instrumentele de analiză/analytics sunt activate)</span>
              </li>
            </ul>
          </article>

          {/* 3. Cum colectăm datele */}
          <article id="cum-colectam" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                03
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Cum colectăm datele
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              Datele sunt colectate prin următoarele mijloace:
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-[#f3f7f4] font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Formulare de contact integrate pe site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Abonare la newsletter (în cazul în care este disponibilă)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Fișiere de tip cookie și tehnologii similare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49a078] mt-2 shrink-0" />
                <span>Interacțiuni directe cu utilizatorii (corespondență prin email, apeluri telefonice)</span>
              </li>
            </ul>
          </article>

          {/* 4. Scopul colectării datelor */}
          <article id="scopul-colectarii" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                04
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Scopul colectării datelor
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              Datele tale cu caracter personal sunt utilizate exclusiv pentru:
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-[#f3f7f4] font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Furnizarea serviciilor solicitate (proiectare web, branding, dezvoltare)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Comunicarea eficientă cu utilizatorii și răspunsul prompt la solicitări</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Îmbunătățirea continuă a experienței de navigare pe site</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Transmiterea de informații comerciale (exclusiv în baza consimțământului tău prealabil)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Conformarea cu obligațiile legale și de raportare financiar-contabilă aplicabile</span>
              </li>
            </ul>
          </article>

          {/* 5. Temeiul juridic al prelucrării */}
          <article id="temei-juridic" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                05
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Temeiul juridic al prelucrării
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              Prelucrăm datele tale în conformitate cu articolul 6 din GDPR, pe baza următoarelor temeiuri juridice:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light">
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="font-semibold text-[#49a078] font-mono text-xs uppercase mb-1">Consimțământ explicit</div>
                <p className="text-[#9cc5a1]/80">Acordat voluntar la trimiterea formularelor sau la acceptarea modulelor cookie.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="font-semibold text-[#49a078] font-mono text-xs uppercase mb-1">Executarea contractului</div>
                <p className="text-[#9cc5a1]/80">Pentru demersurile precontractuale și furnizarea serviciilor de design sau dezvoltare.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="font-semibold text-[#49a078] font-mono text-xs uppercase mb-1">Obligații legale</div>
                <p className="text-[#9cc5a1]/80">Pentru respectarea legislației fiscale, contabile și a normelor aplicabile în România.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="font-semibold text-[#49a078] font-mono text-xs uppercase mb-1">Interes legitim</div>
                <p className="text-[#9cc5a1]/80">Pentru securitatea platformei, prevenirea fraudelor și optimizarea tehnică a site-ului.</p>
              </div>
            </div>
          </article>

          {/* 6. Păstrarea datelor */}
          <article id="pastrarea-datelor" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                06
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Păstrarea datelor
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Datele sunt stocate doar pentru perioada strict necesară îndeplinirii scopurilor
              pentru care au fost colectate sau pe durata impusă de obligațiile legale aplicabile
              (cum ar fi cerințele de arhivare financiar-contabilă). Când perioada expiră sau la cererea
              ta legitimă, datele sunt șterse sau anonimizate în mod securizat.
            </p>
          </article>

          {/* 7. Drepturile tale */}
          <article id="drepturile-tale" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                07
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Drepturile tale conform GDPR
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              În calitate de persoană vizată, beneficiezi de următoarele drepturi garantate de GDPR:
            </p>

            <div className="space-y-3 text-sm sm:text-base font-light text-[#f3f7f4]">
              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">a.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul de acces:</strong> Poți solicita confirmarea dacă prelucrăm datele tale și o copie a acestora.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">b.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul la rectificare:</strong> Poți cere corectarea fără întârzieri nejustificate a datelor inexacte sau incomplete.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">c.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul la ștergerea datelor („dreptul de a fi uitat”):</strong> Poți solicita ștergerea datelor în condițiile prevăzute de art. 17 GDPR.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">d.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul la restricționarea prelucrării:</strong> Poți obține limitarea prelucrării pe durata verificării exactității datelor sau în caz de opoziție.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">e.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul la portabilitatea datelor:</strong> Poți primi datele furnizate într-un format structurat, utilizat în mod curent și lizibil automat.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">f.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul la opoziție:</strong> Te poți opune în orice moment prelucrării datelor bazate pe interesul legitim.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">g.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul de a retrage consimțământul:</strong> În orice moment, fără a afecta legalitatea prelucrării efectuate anterior retragerii.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/20 flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#49a078] mt-0.5">h.</span>
                <div>
                  <strong className="text-[#f3f7f4]">Dreptul de a depune plângere:</strong> La Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (<strong className="text-[#9cc5a1]">ANSPDCP</strong>, B-dul G-ral. Gheorghe Magheru 28-30, București, <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#49a078] hover:underline">www.dataprotection.ro</a>).
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#216869]/15 border border-[#49a078]/30 flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs sm:text-sm text-[#9cc5a1]">
                Pentru a-ți exercita oricare dintre aceste drepturi, ne poți contacta oricând:
              </div>
              <a
                href="mailto:office@kairosdesign.ro"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#49a078] text-[#1f2421] font-bold text-xs uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>office@kairosdesign.ro</span>
              </a>
            </div>
          </article>

          {/* 8. Divulgarea datelor către terți */}
          <article id="divulgare-terti" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                08
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Divulgarea datelor către terți
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              <strong className="text-[#f3f7f4] font-semibold">Nu vindem și nu închiriem niciodată datele tale cu caracter personal.</strong>{" "}
              Putem partaja date doar cu furnizori de servicii de încredere (de exemplu, furnizori
              de găzduire cloud, infrastructură tehnică sau servicii de e-mail necesare operării
              site-ului), strict pentru buna funcționare a platformei și exclusiv în baza unor
              acorduri de prelucrare conforme cu standardele GDPR.
            </p>
          </article>

          {/* 9. Cookie-uri */}
          <article id="cookie-uri" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                09
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Cookie-uri
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Site-ul utilizează module cookie pentru a asigura o funcționare optimă, stabilă
              și pentru a îmbunătăți experiența utilizatorilor. Detaliile complete privind modul
              în care sunt utilizate se regăsesc în secțiunile următoare.
            </p>
          </article>

          {/* 10. Ce sunt cookie-urile */}
          <article id="ce-sunt-cookie" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                10
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Ce sunt cookie-urile
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul tău
              (computer, tabletă, telefon mobil) atunci când vizitezi un site web. Acestea permit
              recunoașterea dispozitivului la vizitele ulterioare și oferă o navigare mai fluidă,
              reținând de pildă sesiunea curentă sau preferințele tale.
            </p>
          </article>

          {/* 11. Tipuri de cookie-uri utilizate */}
          <article id="tipuri-cookie" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                11
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Tipuri de cookie-uri utilizate
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base font-light">
              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="flex items-center gap-2 font-semibold text-[#f3f7f4] mb-1">
                  <span className="font-mono text-xs text-[#49a078] font-bold">a.</span>
                  <span>Cookie-uri strict necesare</span>
                </div>
                <p className="text-[#9cc5a1]/80 text-sm">
                  Acestea sunt esențiale pentru buna funcționare tehnică a site-ului și nu pot fi dezactivate în sistemele noastre.
                  Exemple: cookie-uri de sesiune, securitate, prevenirea atacurilor CSRF.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="flex items-center gap-2 font-semibold text-[#f3f7f4] mb-1">
                  <span className="font-mono text-xs text-[#49a078] font-bold">b.</span>
                  <span>Cookie-uri de performanță și analiză</span>
                </div>
                <p className="text-[#9cc5a1]/80 text-sm">
                  Ne ajută să înțelegem cum interacționează vizitatorii cu paginile noastre, pentru a optimiza structura și viteza de încărcare.
                  Exemple: Google Analytics (cu date agregate și IP-uri anonimizate).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="flex items-center gap-2 font-semibold text-[#f3f7f4] mb-1">
                  <span className="font-mono text-xs text-[#49a078] font-bold">c.</span>
                  <span>Cookie-uri de funcționalitate</span>
                </div>
                <p className="text-[#9cc5a1]/80 text-sm">
                  Permit platformei să memoreze alegerile tale anterioare (cum ar fi limba preferată sau setările de afișare) pentru a oferi funcționalități îmbunătățite.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1f2421] border border-[#216869]/25">
                <div className="flex items-center gap-2 font-semibold text-[#f3f7f4] mb-1">
                  <span className="font-mono text-xs text-[#49a078] font-bold">d.</span>
                  <span>Cookie-uri de marketing (neutilizate în prezent)</span>
                </div>
                <p className="text-[#9cc5a1]/80 text-sm">
                  Sunt destinate publicității personalizate și măsurării eficienței campaniilor promoționale. Astfel de cookie-uri sunt rulate exclusiv pe baza consimțământului tău explicit.
                </p>
              </div>
            </div>
          </article>

          {/* 12. Cookie-uri plasate de terți */}
          <article id="cookie-terti" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                12
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Cookie-uri plasate de terți
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Site-ul poate utiliza servicii externe furnizate de parteneri de încredere (de exemplu,
              instrumente analitice sau integrare cu platforme de social media). Aceste servicii pot
              plasa propriile module cookie pe dispozitivul tău, utilizarea acestora fiind guvernată
              de politicile specifice ale furnizorilor respectivi.
            </p>
          </article>

          {/* 13. Consimțământul privind cookie-urile */}
          <article id="consimtamant-cookie" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                13
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Consimțământul privind cookie-urile
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-4">
              La prima accesare a site-ului, ești întâmpinat de o notificare informativă prin intermediul căreia poți:
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-[#f3f7f4] font-light mb-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Accepta toate modulele cookie</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Refuza cookie-urile opționale</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#49a078] mt-1 shrink-0" />
                <span>Personaliza preferințele în mod granular</span>
              </li>
            </ul>

            <p className="text-xs sm:text-sm text-[#9cc5a1]/80 font-mono">
              Îți poți modifica sau retrage consimțământul în orice moment din setările browserului tău.
            </p>
          </article>

          {/* 14. Cum poți controla cookie-urile */}
          <article id="control-cookie" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                14
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Cum poți controla cookie-urile
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Poți șterge sau bloca oricând modulele cookie direct din setările browserului tău web.
              Reține că dezactivarea anumitor cookie-uri esențiale poate afecta funcționalitatea sau
              aspectul anumitor secțiuni din site. Ghidurile oficiale pentru cele mai populare navigatoare:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/30 hover:border-[#49a078] text-[#f3f7f4] hover:text-[#49a078] flex items-center justify-between transition-all group"
              >
                <span>Google Chrome &bull; Setări Cookie</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9cc5a1]/60 group-hover:text-[#49a078]" />
              </a>

              <a
                href="https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/30 hover:border-[#49a078] text-[#f3f7f4] hover:text-[#49a078] flex items-center justify-between transition-all group"
              >
                <span>Mozilla Firefox &bull; Setări Cookie</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9cc5a1]/60 group-hover:text-[#49a078]" />
              </a>

              <a
                href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/30 hover:border-[#49a078] text-[#f3f7f4] hover:text-[#49a078] flex items-center justify-between transition-all group"
              >
                <span>Apple Safari &bull; Setări Cookie</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9cc5a1]/60 group-hover:text-[#49a078]" />
              </a>

              <a
                href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-modulelor-cookie-în-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/30 hover:border-[#49a078] text-[#f3f7f4] hover:text-[#49a078] flex items-center justify-between transition-all group"
              >
                <span>Microsoft Edge &bull; Setări Cookie</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9cc5a1]/60 group-hover:text-[#49a078]" />
              </a>

              <a
                href="https://support.microsoft.com/ro-ro/windows/ștergerea-și-gestionarea-modulelor-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#1f2421] border border-[#216869]/30 hover:border-[#49a078] text-[#f3f7f4] hover:text-[#49a078] flex items-center justify-between transition-all group sm:col-span-2"
              >
                <span>Internet Explorer &bull; Setări Cookie</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9cc5a1]/60 group-hover:text-[#49a078]" />
              </a>
            </div>
          </article>

          {/* 15. Securitatea datelor */}
          <article id="securitate" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                15
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Securitatea datelor
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor
              tale cu caracter personal împotriva accesului neautorizat, distrugerii accidentale,
              pierderii, alterării sau divulgării ilicite (conexiuni securizate SSL/HTTPS, protocoale
              stricte de acces și criptare pe server).
            </p>
          </article>

          {/* 16. Actualizări ale politicii */}
          <article id="actualizari" className="rounded-2xl p-6 sm:p-8 bg-[#262c28]/50 border border-[#216869]/30 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                16
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Actualizări ale politicii
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed">
              Ne rezervăm dreptul de a actualiza periodic prezenta Politică de Confidențialitate
              și Cookie-uri pentru a reflecta eventuale modificări legislative sau ajustări în
              funcționarea site-ului. Orice modificare va fi publicată direct pe această pagină,
              împreună cu data actualizată.
            </p>
          </article>

          {/* 17. Contact */}
          <article id="contact" className="rounded-2xl p-6 sm:p-8 bg-[#262c28] border border-[#49a078]/35 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent" />
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-lg bg-[#216869]/30 border border-[#49a078]/30 flex items-center justify-center font-mono text-xs font-bold text-[#49a078]">
                17
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f3f7f4]">
                Contact &amp; Asistență
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#9cc5a1]/85 font-light leading-relaxed mb-6">
              Pentru orice întrebare, solicitare de exercitare a drepturilor tale GDPR sau
              clarificări privind această politică, ne poți contacta oricând:
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:office@kairosdesign.ro"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#216869] to-[#49a078] text-[#1f2421] font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(73,160,120,0.4)] flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#f3f7f4]" />
                <span className="text-[#f3f7f4]">office@kairosdesign.ro</span>
              </a>

              <div className="text-xs font-mono text-[#9cc5a1]/70">
                Timp estimat de răspuns: sub 24 de ore lucrătoare
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}

