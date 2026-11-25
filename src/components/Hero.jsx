import React from "react";
import { ArrowRight, BookOpen, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero() {
  const { organization, founders, scriptures } = ministryContent;

  return (
    <section className="relative overflow-hidden bg-rhema-green text-white border-b-4 border-rhema-gold">
      {/* Subtle Decorative Radial Glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D49A2A 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 w-[440px] h-[440px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #7A151B 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-rhema-gold/40 text-rhema-goldLight text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-rhema-gold" />
            <span>Faith • Hope • Impact — Across Kenya &amp; Africa</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.15] tracking-tight">
            {organization.tagline}
          </h1>

          <p className="font-serif italic text-xl text-rhema-gold font-medium">
            “{organization.motto}”
          </p>

          <p className="text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
            Led by{" "}
            <span className="text-white font-semibold underline decoration-rhema-gold decoration-2 underline-offset-4">
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
              className="inline-flex items-center gap-2.5 bg-rhema-gold hover:bg-amber-500 text-rhema-ink font-bold px-7 py-3.5 rounded-lg shadow-lg shadow-black/25 transition transform hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-5 h-5 text-rhema-burgundy" />
              <span>Partner With the Mission</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#founders"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-6 py-3.5 rounded-lg backdrop-blur-sm transition"
            >
              <span>Read Our Story</span>
            </a>
          </div>

          {/* Guiding Scripture Strip */}
          <div className="pt-4">
            <div className="bg-black/25 border-l-4 border-rhema-gold px-5 py-4 rounded-r-xl backdrop-blur-sm max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rhema-gold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>{scriptures.primary.reference}</span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                {scriptures.primary.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Right Portrait Showcase */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Decorative Gold Offset Frame */}
            <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-rhema-gold via-rhema-burgundy to-rhema-gold opacity-75 blur-[1px]" />

            <div className="relative bg-rhema-ivory p-3 rounded-2xl shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={founders.portraitPath}
                  alt={founders.names}
                  className="w-full h-[440px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-rhema-gold font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Co-Founders • Portland &amp; Nairobi</span>
                  </div>
                  <p className="font-serif text-lg font-bold leading-snug">
                    {founders.names}
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
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
                  Est. Faith Legacy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}