"use client";

import React, { useState, useEffect, useRef } from "react";

interface TextSegment {
  text: string;
  className: string;
}

const SEGMENTS: TextSegment[] = [
  {
    text: "Momentul oportun pentru ",
    className: "text-[#f3f7f4]",
  },
  {
    text: "saltul afacerii tale. ",
    className: "text-gradient-kairos font-extrabold",
  },
  {
    text: "De la identitate de brand la cod de ultimă generație, construim pentru ",
    className: "text-[#f3f7f4]",
  },
  {
    text: "performanță maximă.",
    className: "text-gradient-kairos font-extrabold",
  },
];

const TOTAL_CHARS = SEGMENTS.reduce((acc, seg) => acc + seg.text.length, 0);

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (mobile) {
      // Pe mobil afișăm direct textul pentru încărcare instantanee și zero lag
      setHasStarted(true);
      setCharCount(TOTAL_CHARS);
      return;
    }

    // Pe desktop activăm animația cinematică typewriter la scroll în secțiune
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isMobile) return;
    if (charCount >= TOTAL_CHARS) return;

    const interval = setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, 34);

    return () => clearTimeout(interval);
  }, [hasStarted, charCount, isMobile]);

  const isDone = charCount >= TOTAL_CHARS;

  const renderContent = () => {
    if (isMobile) {
      return (
        <>
          <span className="text-[#f3f7f4]">Momentul oportun pentru </span>
          <span className="text-gradient-kairos font-extrabold">saltul afacerii tale. </span>
          <span className="text-[#f3f7f4]">De la identitate de brand la cod de ultimă generație, construim pentru </span>
          <span className="text-gradient-kairos font-extrabold">performanță maximă.</span>
        </>
      );
    }

    let remaining = charCount;
    return SEGMENTS.map((seg, i) => {
      if (remaining <= 0) return null;
      const take = Math.min(remaining, seg.text.length);
      remaining -= take;
      const slice = seg.text.slice(0, take);

      return (
        <span key={i} className={seg.className}>
          {slice}
        </span>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[55vh] sm:min-h-[70vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-36 md:pb-40 bg-[#1f2421] border-t border-[#216869]/30 overflow-hidden"
    >
      {/* Background Ambience & Lighting - zero-cost radial gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(33, 104, 105, 0.25) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 w-full z-10 text-left">
        {/* Big Monumental Statement */}
        <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[260px] flex items-center justify-start text-left">
          <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-bold tracking-tight leading-[1.18] pb-2 text-left">
            {renderContent()}

            {/* Blinking Studio Cursor */}
            <span
              className={`inline-block w-[3px] sm:w-[4px] md:w-[6px] h-[0.82em] ml-2.5 align-baseline bg-[#49a078] rounded-sm transition-opacity ${
                isDone ? "animate-pulse opacity-75 shadow-[0_0_8px_#49a078]" : "animate-pulse opacity-100 shadow-[0_0_14px_#49a078]"
              }`}
            />
          </blockquote>
        </div>
      </div>
    </section>
  );
}
