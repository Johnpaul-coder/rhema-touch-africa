import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero({ customSlides }) {
  const slides =
    customSlides && customSlides.length > 0
      ? customSlides
      : ministryContent.heroSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate ONLY the Scripture Focus strip every 7 seconds (main headline stays fixed)
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const primary = slides[0];
  const currentScripture = slides[activeIndex] || primary;

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#072A1C] via-[#0D4A30] to-[#16382E] text-white"
    >
      {/* Warm Gold & Crimson Sunrise Ambient Glows (Gives Depth & Life Without Blur/Clutter) */}
      <div className="pointer-events-none absolute -top-24 right-[-6%] w-[520px] h-[520px] rounded-full bg-rhema-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[12%] w-[420px] h-[420px] rounded-full bg-rhema-burgundy/25 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-[-10%] w-[360px] h-[360px] rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Subtle Architectural Cross-Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F4C95D 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-rhema-gold animate-pulse" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-rhema-goldLight">
              {primary.badge}
            </p>
          </div>

          {/* Bold Two-Tone Display Headline */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06]">
            <span className="block text-white">{primary.titleTop}</span>
            <span className="block bg-gradient-to-r from-[#F4C95D] via-[#D99B26] to-[#F4C95D] bg-clip-text text-transparent mt-1">
              {primary.titleHighlight}
            </span>
          </h1>

          {/* Mission Summary */}
          <p className="text-base sm:text-lg text-emerald-50/90 max-w-xl leading-relaxed font-normal">
            {primary.subtitle}
          </p>

          {/* Two Rounded Pill CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#vision-mission"
              className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-400 text-rhema-ink font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-black/20 transition transform hover:-translate-y-0.5"
            >
              <span>Vision &amp; Mission</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#missions"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>Our Missions</span>
            </a>
          </div>

          {/* Scripture Focus Strip */}
          <div className="pt-8 sm:pt-10 max-w-xl">
            <div className="border-l-2 border-rhema-gold pl-4 sm:pl-5 space-y-1.5 min-h-[84px] transition-all duration-500">
              <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-rhema-goldLight/85">
                SCRIPTURE FOCUS
              </span>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed">
                <strong className="text-white font-bold">
                  {currentScripture.scriptureRef}
                </strong>{" "}
                — {currentScripture.scriptureSummary}
              </p>
            </div>

            {/* Horizontal Slide Indicators */}
            <div className="flex items-center gap-2.5 pt-6">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View scripture ${idx + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-10 bg-rhema-gold"
                      : "w-6 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}