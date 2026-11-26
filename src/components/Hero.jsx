import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero({ customSlides }) {
  const slides =
    customSlides && customSlides.length > 0
      ? customSlides
      : ministryContent.heroSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[activeIndex] || slides[0];
  // Use clean smooth dark gradient on Slide 1 (no blurry graphic), and sharp photo on subsequent slides
  const showPhoto = activeIndex > 0 && current.bgImage;

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1A211E] via-[#262B29] to-[#343836] text-white"
    >
      {/* Sharp, Unblurred Outreach Photo on Slides 2 & 3 */}
      {showPhoto && (
        <>
          <img
            src={current.bgImage}
            alt={current.titleTop}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-black/55" />
        </>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-2xl space-y-6">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-rhema-goldLight/90">
            {current.badge}
          </p>

          {/* Bold Two-Tone Display Headline */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06]">
            <span className="block text-white">{current.titleTop}</span>
            <span className="block text-rhema-gold mt-1">
              {current.titleHighlight}
            </span>
          </h1>

          {/* Mission Summary */}
          <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed font-normal">
            {current.subtitle}
          </p>

          {/* Two Rounded Pill CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#vision-mission"
              className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-400 text-rhema-ink font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>Vision &amp; Mission</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#missions"
              className="inline-flex items-center justify-center bg-rhema-green hover:bg-rhema-greenLight text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>Our Missions</span>
            </a>
          </div>

          {/* Clean Scripture Focus Strip (Vertical Line Only — No Floating Box) */}
          <div className="pt-8 sm:pt-10 max-w-xl">
            <div className="border-l-2 border-white/30 pl-4 sm:pl-5 space-y-1.5">
              <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                SCRIPTURE FOCUS
              </span>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                <strong className="text-white font-bold">
                  {current.scriptureRef}
                </strong>{" "}
                — {current.scriptureSummary}
              </p>
            </div>

            {/* Horizontal Slide Indicators */}
            <div className="flex items-center gap-2.5 pt-6">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View slide ${idx + 1}`}
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