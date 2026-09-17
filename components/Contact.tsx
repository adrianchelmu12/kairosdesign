"use client";

import React, { useState } from "react";
import { Send, Check, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "A apărut o problemă. Te rugăm să încerci din nou."
        );
      }

      setFormSubmitted(true);
      trackEvent("generate_lead", {
        category: "contact",
        label: "contact_form_success",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : "A apărut o eroare la trimiterea mesajului.";
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-32 bg-[#1f2421] text-[#f3f7f4] overflow-hidden">
      {/* Background ambient lighting - zero-cost radial gradients */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(73, 160, 120, 0.16) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Clean, Grounded Pitch & Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f7f4] leading-[1.16]">
                Hai să construim{" "}
                <span className="text-gradient-kairos pb-2 inline-block">
                  ceva remarcabil.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#9cc5a1]/85 font-light leading-relaxed">
                Ai un proiect în minte sau vrei să afli cum putem colabora? Lasă-ne un mesaj și revenim cu un răspuns clar în maximum 24 de ore.
              </p>

              {/* Direct Contact Details */}
              <div className="mt-10 sm:mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#216869]/20 border border-[#49a078]/30 flex items-center justify-center text-[#49a078] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#9cc5a1]/60">Email Direct</div>
                    <a
                      href="mailto:office@kairosdesign.ro"
                      className="text-base font-semibold text-[#f3f7f4] hover:text-[#49a078] transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>office@kairosdesign.ro</span>
                      <ArrowUpRight className="w-4 h-4 text-[#49a078] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#216869]/20 border border-[#49a078]/30 flex items-center justify-center text-[#49a078] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#9cc5a1]/60">Timp de Răspuns</div>
                    <div className="text-sm font-medium text-[#f3f7f4]">
                      Sub 24 de ore lucrătoare
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#216869]/20 border border-[#49a078]/30 flex items-center justify-center text-[#49a078] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#9cc5a1]/60">Locație & Disponibilitate</div>
                    <div className="text-sm font-medium text-[#f3f7f4]">
                      Iași &bull; Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Simple, Frictionless Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-8 sm:p-10 bg-[#1f2421]/90 border border-[#49a078]/25 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
              {/* Subtle top laser glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#49a078] to-transparent" />

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#49a078]/20 border border-[#49a078] flex items-center justify-center text-[#49a078] mb-6 animate-pulse">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f3f7f4] mb-2">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-sm text-[#9cc5a1]/85 max-w-md font-light leading-relaxed">
                    Îți mulțumim. Am recepționat mesajul tău și îți vom răspunde în cel mai scurt timp posibil.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-8 px-6 py-2.5 rounded-xl border border-[#49a078]/40 bg-[#216869]/10 text-xs font-semibold text-[#49a078] hover:border-[#49a078] hover:text-white transition-all"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#9cc5a1] mb-2">
                        Numele tău / Numele companiei
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Popa sau Nume Companie"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1f2421] border border-[#49a078]/25 text-[#f3f7f4] placeholder-[#9cc5a1]/40 text-base sm:text-sm focus:outline-none focus:border-[#49a078] focus:ring-1 focus:ring-[#49a078] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#9cc5a1] mb-2">
                        Adresă de Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@companie.ro"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1f2421] border border-[#49a078]/25 text-[#f3f7f4] placeholder-[#9cc5a1]/40 text-base sm:text-sm focus:outline-none focus:border-[#49a078] focus:ring-1 focus:ring-[#49a078] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9cc5a1] mb-2">
                      Mesajul tău
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrie pe scurt proiectul, obiectivele sau întrebările tale..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1f2421] border border-[#49a078]/25 text-[#f3f7f4] placeholder-[#9cc5a1]/40 text-base sm:text-sm focus:outline-none focus:border-[#49a078] focus:ring-1 focus:ring-[#49a078] transition-all resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-red-200 leading-relaxed font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#216869] via-[#49a078] to-[#49a078] text-[#1f2421] font-bold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(73,160,120,0.45)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span className="text-[#f3f7f4] font-bold">
                      {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                    </span>
                    <Send className="w-4 h-4 text-[#f3f7f4]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
