import React from "react";
import { ArrowRight, BookOpen, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero() {
  const { organization, founders, scriptures } = ministryContent;

  return (
    <section className="relative overflow-hidden bg-white text-rhema-ink border-b-4 border-rhema-gold">
      {/* Custom Ministry Artwork Background - Crisp & Vibrant */}
      <div
        className="absolute inset-0 bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${organization.heroBgPath}')` }}
      />
      {/* Light, Targeted Readability Veil (Leaves Cross, Africa & Bible Vivid) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rhema-green text-rhema-goldLight text-xs font-semibold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-rhema-gold" />
            <span>Faith • Hope • Impact — Across Kenya &amp; Africa</span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-rhema-green leading-[1.15] tracking-tight"
            style={{ textShadow: "0 2px 14px rgba(255,255,255,0.95), 0 1px 3px rgba(255,255,255,1)" }}
          >
            {organization.tagline}
          </h1>

          <p
            className="font-serif italic text-xl text-rhema-burgundy font-bold"
            style={{ textShadow: "0 1px 10px rgba(255,255,255,0.95)" }}
          >
            “{organization.motto}”
          </p>

          <p className="text-base md:text-lg text-rhema-ink leading-relaxed max-w-2xl font-semibold bg-white/75 backdrop-blur-[2px] p-4 rounded-xl border border-white/80 shadow-sm">
            Led by{" "}
            <span className="text-rhema-green font-bold underline decoration-rhema-gold decoration-2 underline-offset-4">
              {founders.names}
            </span>
            —husband and wife, Ordained Ministers, and Registered Nurses—Rhema
            Touch Africa turns Christian compassion into practical healing,
            dignity, and lasting community transformation.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#partner"
              className="inline-flex items-center gap-2.5 bg-rhema-green hover:bg-rhema-greenLight text-white font-bold px-7 py-3.5 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-5 h-5 text-rhema-gold" />
              <span>Partner With the Mission</span>
              <ArrowRight className="w-4 h-4 text-rhema-gold" />
            </a>
            <a
              href="#founders"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-rhema-green border-2 border-rhema-green/40 font-bold px-6 py-3.5 rounded-lg shadow-md transition"
            >
              <span>Read Our Story</span>
            </a>
          </div>

          {/* Guiding Scripture Strip */}
          <div className="pt-3">
            <div className="bg-white/90 backdrop-blur-sm border-l-4 border-rhema-gold px-5 py-4 rounded-r-xl shadow-md max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rhema-burgundy mb-1">
                <BookOpen className="w-4 h-4 text-rhema-gold" />
                <span>{scriptures.primary.reference}</span>
              </div>
              <p className="text-sm text-rhema-ink/90 leading-relaxed font-medium">
                {scriptures.primary.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Right Portrait Showcase */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Decorative Gold Offset Frame */}
            <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-rhema-gold via-rhema-green to-rhema-gold opacity-80 blur-[1px]" />

            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={founders.portraitPath}
                  alt={founders.names}
                  className="w-full h-[440px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-rhema-gold font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Co-Founders • Kenya &amp; Across Africa</span>
                  </div>
                  <p className="font-serif text-lg font-bold leading-snug">
                    {founders.names}
                  </p>
                  <p className="text-xs text-white/85 mt-0.5">
                    Ordained Ministers • Registered Nurses • 19 Years of Marriage
                  </p>
                </div>
              </div>

              {/* Bottom Emblem Bar */}
              <div className="mt-3 px-2 py-1.5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={organization.logoPath}
                    alt={organization.name}
                    className="w-10 h-10 rounded-full object-cover border border-rhema-gold"
                  />
                  <div>
                    <span className="block font-serif font-bold text-rhema-green text-sm leading-none">
                      {organization.name}
                    </span>
                    <span className="block text-[11px] text-rhema-burgundy font-semibold mt-0.5">
                      Christian Nonprofit Ministry
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rhema-green bg-rhema-green/10 px-2.5 py-1 rounded-full">
                  Faith • Hope • Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}