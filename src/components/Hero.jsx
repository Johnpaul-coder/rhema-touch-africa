import React from "react";
import { ArrowRight, BookOpen, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero() {
  const { organization, founders, scriptures } = ministryContent;

  return (
    <section className="relative overflow-hidden bg-white text-rhema-ink border-b-4 border-rhema-gold">
      {/* Uncropped Artwork Image with Direct Edge-Feathering (Eliminates Hard Left/Right Corners) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src={organization.heroBgPath}
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-none object-contain select-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rhema-green text-rhema-goldLight text-xs font-semibold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-rhema-gold" />
            <span>Faith • Hope • Impact — Across Kenya &amp; Africa</span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-5xl lg:text-[50px] font-bold text-rhema-green leading-[1.15] tracking-tight"
            style={{
              textShadow:
                "0 0 18px rgba(255,255,255,1), 0 0 8px rgba(255,255,255,1), 0 1px 2px rgba(255,255,255,1)",
            }}
          >
            {organization.tagline}
          </h1>

          <p className="font-serif italic text-xl text-rhema-burgundy font-bold inline-block bg-white/85 px-3 py-1 rounded-lg">
            “{organization.motto}”
          </p>

          {/* Clean Editorial Lead + Credential Badges */}
          <div className="space-y-3.5 max-w-2xl">
            <p
              className="text-base md:text-lg text-rhema-ink leading-relaxed font-semibold"
              style={{
                textShadow:
                  "0 0 16px rgba(255,255,255,1), 0 0 6px rgba(255,255,255,1)",
              }}
            >
              Led by{" "}
              <span className="text-rhema-green font-extrabold">
                {founders.names}
              </span>
              , Rhema Touch Africa turns Christian compassion into practical
              healing, dignity, and lasting community transformation.
            </p>

            {/* Crisp Credential Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {["Husband & Wife", "Ordained Ministers", "Registered Nurses"].map(
                (role) => (
                  <span
                    key={role}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-rhema-green border border-rhema-gold/50 shadow-sm"
                  >
                    {role}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
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
          <div className="pt-2">
            <div className="bg-white/95 backdrop-blur-sm border-l-4 border-rhema-gold px-5 py-4 rounded-r-xl shadow-md max-w-xl">
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