import React from "react";
import { MapPin, Compass, Globe2, Church } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function JourneyTimeline() {
  const { journey } = ministryContent;

  return (
    <section
      id="journey"
      className="py-16 md:py-24 bg-rhema-ivory border-b border-rhema-gold/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header & Cross-Continental Bridge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            <Compass className="w-4 h-4 text-rhema-gold" />
            <span>Professional &amp; Ministry Journey</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            Two Continents, One Unwavering Calling
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/80 mt-3 leading-relaxed">
            From Nelson’s 1997 conversion in an informal settlement in Kenya to
            ordained ministry and nursing leadership in Portland, Oregon, every
            season has prepared them to serve.
          </p>
          <div className="w-24 h-1 bg-rhema-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {journey.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-rhema-gold/35 shadow-sm hover:shadow-lg hover:border-rhema-green/40 transition relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rhema-green via-rhema-gold to-rhema-burgundy" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rhema-burgundy">
                  <Church className="w-3.5 h-3.5 text-rhema-gold" />
                  {step.period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rhema-green bg-rhema-green/10 px-3 py-1 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-rhema-burgundy" />
                  {step.location}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-rhema-green group-hover:text-rhema-burgundy transition">
                {step.title}
              </h3>

              <p className="text-sm text-rhema-ink/85 leading-relaxed mt-3">
                {step.description}
              </p>

              <div className="mt-5 pt-3 border-t border-rhema-gold/20 flex items-center justify-between text-[11px] font-semibold text-rhema-ink/60 uppercase tracking-wider">
                <span>Chapter 0{index + 1}</span>
                <span className="inline-flex items-center gap-1 text-rhema-green">
                  <Globe2 className="w-3.5 h-3.5 text-rhema-gold" />
                  Kingdom Legacy
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}