"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Abordare", href: "#abordare" },
    { name: "Servicii", href: "#servicii" },
    { name: "Tehnologii", href: "#tehnologii" },
    { name: "Proces", href: "#proces" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-[#1f2421]/85 backdrop-blur-xl border border-[#9cc5a1]/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#1f2421]/40 backdrop-blur-md border border-[#9cc5a1]/10"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-28 sm:w-32 flex items-center">
            <Image
              src="/logo.svg"
              alt="Kairos Agency"
              width={140}
              height={50}
              priority
              style={{ width: "auto", height: "auto" }}
              className="max-h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-[#9cc5a1]/80 hover:text-[#49a078] transition-colors duration-200 relative group font-medium"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#49a078] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Availability Badge & CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#216869] to-[#49a078] text-[#1f2421] font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(73,160,120,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-[#f3f7f4] group-hover:text-white transition-colors">Hai să vorbim</span>
            <ArrowUpRight className="w-4 h-4 text-[#f3f7f4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger - minimum 44px touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-xl text-[#9cc5a1] hover:text-[#49a078] hover:bg-[#216869]/20 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
          aria-label="Comută meniul de navigare"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-[#1f2421]/95 backdrop-blur-2xl border border-[#9cc5a1]/20 p-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#f3f7f4] hover:text-[#49a078] hover:bg-[#216869]/20 px-4 py-3 rounded-xl transition-all font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#49a078]/60" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#216869] to-[#49a078] text-[#f3f7f4] font-semibold text-sm shadow-[0_0_20px_rgba(73,160,120,0.3)] active:scale-[0.98] transition-all"
            >
              <span>Hai să vorbim</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

