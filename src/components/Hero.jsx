import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero({ customSlides }) {
  const slides =
    customSlides && customSlides.length > 0
      ? customSlides
      : ministryContent.heroSlides;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeIndex] || slides[0];

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A2218] text-white"
    >
      {/* Full-Bleed Crisp Background Artwork with Smooth Ken Burns Motion */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.bgImage || "/images/hero-bg.jpeg"}
            alt={slide.titleTop}
            className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
              idx === activeIndex ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Directional Gradient Scrim (Keeps Left Text Readable While Leaving Right Picture Vivid & Sharp) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081F15]/95 via-[#0B291D]/75 to-[#0B291D]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081F15]/85 via-transparent to-[#081F15]/50" />

      {/* Main Content Container with Animated Slide Transitions */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div
          key={current.id}
          className="max-w-2xl space-y-6 animate-[fadeIn_0.7s_ease-out]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-rhema-gold animate-pulse" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-rhema-goldLight drop-shadow">
              {current.badge}
            </p>
          </div>

          {/* Bold Two-Tone Display Headline */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-[1.06] drop-shadow-md">
            <span className="block text-white">{current.titleTop}</span>
            <span className="block bg-gradient-to-r from-[#F4C95D] via-[#D99B26] to-[#F4C95D] bg-clip-text text-transparent mt-1">
              {current.titleHighlight}
            </span>
          </h1>

          {/* Mission Summary */}
          <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed font-normal drop-shadow">
            {current.subtitle}
          </p>

          {/* Two Rounded Pill CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#vision-mission"
              className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-400 text-rhema-ink font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-black/25 transition transform hover:-translate-y-0.5"
            >
              <span>Vision &amp; Mission</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#missions"
              className="inline-flex items-center justify-center bg-rhema-green/90 hover:bg-rhema-greenLight border border-white/30 backdrop-blur-sm text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>Our Missions</span>
            </a>
          </div>

          {/* Scripture Focus Strip */}
          <div className="pt-8 sm:pt-10 max-w-xl">
            <div className="border-l-2 border-rhema-gold pl-4 sm:pl-5 space-y-1.5">
              <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-rhema-goldLight">
                SCRIPTURE FOCUS
              </span>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-sm">
                <strong className="text-white font-bold">
                  {current.scriptureRef}
                </strong>{" "}
                — {current.scriptureSummary}
              </p>
            </div>

            {/* Slide Indicators + Prev/Next Controls */}
            <div className="flex items-center justify-between pt-6 max-w-md">
              <div className="flex items-center gap-2.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-10 bg-rhema-gold"
                        : "w-6 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 rounded-full border border-white/25 bg-black/25 hover:bg-white/20 flex items-center justify-center text-white transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 rounded-full border border-white/25 bg-black/25 hover:bg-white/20 flex items-center justify-center text-white transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}