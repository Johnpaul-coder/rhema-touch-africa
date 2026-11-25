import React from "react";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Hero() {
  const { organization, founders, scriptures } = ministryContent;

  return (
    <section className="relative bg-gradient-to-b from-rhema-ivory via-white to-rhema-ivory border-b border-rhema-gold/30">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rhema-green/10 border border-rhema-green/20 text-rhema-green text-xs font-semibold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-rhema-burgundy" />
            <span>Serving Kenya &amp; Communities Across Africa</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rhema-green leading-tight">
            {organization.tagline}
          </h1>

          <p className="font-serif italic text-lg text-rhema-burgundy font-medium">
            “{organization.motto}”
          </p>

          <p className="text-base md:text-lg text-rhema-ink/85 leading-relaxed max-w-2xl">
            Co-founded by{" "}
            <strong className="text-rhema-green font-semibold">
              {founders.names}
            </strong>{" "}
            ({founders.titles}), Rhema Touch Africa bridges spiritual
            transformation with practical medical care, benevolence, and
            community empowerment.
          </p>

          {/* Guiding Scripture Callout */}
          <div className="bg-rhema-ivory border-l-4 border-rhema-gold p-4 rounded-r-lg shadow-sm max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rhema-burgundy mb-1">
              <BookOpen className="w-4 h-4 text-rhema-gold" />
              <span>Guiding Scripture — {scriptures.primary.reference}</span>
            </div>
            <p className="text-sm text-rhema-ink/90 leading-relaxed">
              {scriptures.primary.summary}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#founders"
              className="inline-flex items-center gap-2 bg-rhema-green hover:bg-rhema-greenLight text-white font-semibold px-6 py-3 rounded-md shadow transition"
            >
              <span>Meet the Founders</span>
              <ArrowRight className="w-4 h-4 text-rhema-gold" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 bg-white hover:bg-rhema-goldLight/30 text-rhema-green border border-rhema-green/30 font-semibold px-6 py-3 rounded-md transition"
            >
              <span>Explore Our Work</span>
            </a>
          </div>
        </div>

        {/* Right Portrait Frame */}
        <div className="lg:col-span-5">
          <div className="relative bg-white p-3 rounded-2xl shadow-lg border border-rhema-gold/40">
            <img
              src={founders.portraitPath}
              alt={founders.names}
              className="w-full h-[420px] object-cover object-top rounded-xl"
            />
            <div className="mt-3 px-2 py-2 flex items-center justify-between border-t border-rhema-gold/20">
              <div>
                <p className="font-serif font-bold text-rhema-green text-base">
                  {founders.names}
                </p>
                <p className="text-xs text-rhema-ink/75">
                  Ordained Ministers &amp; Registered Nurses
                </p>
              </div>
              <img
                src={organization.logoPath}
                alt="Emblem"
                className="w-11 h-11 rounded-full object-cover border border-rhema-gold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}