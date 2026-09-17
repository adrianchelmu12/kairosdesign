"use client";

import React from "react";

export default function Statement() {
  return (
    <section
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

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 w-full z-10 text-left sm:text-center">
        {/* Big Monumental Statement */}
        <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-bold tracking-tight leading-[1.18] pb-2">
          <span className="text-[#f3f7f4]">Momentul oportun pentru </span>
          <span className="text-gradient-kairos font-extrabold">saltul afacerii tale. </span>
          <span className="text-[#f3f7f4]">De la identitate de brand la cod de ultimă generație, construim pentru </span>
          <span className="text-gradient-kairos font-extrabold">performanță maximă.</span>
          <span className="inline-block w-[3px] sm:w-[4px] md:w-[6px] h-[0.82em] ml-2.5 align-baseline bg-[#49a078] rounded-sm animate-pulse opacity-85 shadow-[0_0_12px_#49a078]" />
        </blockquote>
      </div>
    </section>
  );
}
