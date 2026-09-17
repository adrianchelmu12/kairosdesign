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

  // Trigger typing when section enters viewport
  useEffect(() => {
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

  // Typing effect loop
  useEffect(() => {
    if (!hasStarted) return;
    if (charCount >= TOTAL_CHARS) return;

    const interval = setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, 22);

    return () => clearTimeout(interval);
  }, [hasStarted, charCount]);

  const isDone = charCount >= TOTAL_CHARS;

  // Compute currently revealed slices per segment
  const renderTypedContent = () => {
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
      className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-40 md:pb-48 bg-[#1f2421] overflow-hidden border-t border-[#216869]/30"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#216869] opacity-15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 -translate-y-6 sm:-translate-y-10 md:-translate-y-12">
        {/* Big Monumental Statement filling the screen with Typewriter effect */}
        <div className="min-h-[180px] sm:min-h-[240px] md:min-h-[300px]">
          <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-bold tracking-tight leading-[1.18] pb-2">
            {renderTypedContent()}

            {/* Blinking Studio Cursor */}
            <span
              className={`inline-block w-[3px] sm:w-[4px] md:w-[6px] h-[0.82em] ml-2 align-baseline bg-[#49a078] rounded-sm transition-opacity ${
                isDone ? "animate-pulse opacity-70" : "animate-pulse opacity-100 shadow-[0_0_12px_#49a078]"
              }`}
            />
          </blockquote>
        </div>
      </div>
    </section>
  );
}
