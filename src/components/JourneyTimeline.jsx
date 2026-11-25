import React from "react";
import { MapPin, Compass } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function JourneyTimeline() {
  const { journey } = ministryContent;

  return (
    <section id="journey" className="py-16 md:py-24 bg-rhema-ivory border-b border-rhema-gold/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            <Compass className="w-4 h-4 text-rhema-gold" />
            <span>Professional &amp; Ministry Journey</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            From Nairobi to Portland, Oregon
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/80 mt-3">
            A faithful walk shaped across churches and communities in Kenya and
            the United States since 1997.
          </p>
        </div>

        {/* Classic Vertical Timeline */}
        <div className="relative border-l-2 border-rhema-gold ml-4 md:ml-8 space-y-10">
          {journey.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Marker */}
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-rhema-green border-4 border-rhema-gold shadow" />

              <div className="bg-white p-6 rounded-xl border border-rhema-gold/30 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rhema-burgundy">
                    {step.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-rhema-green bg-rhema-green/10 px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {step.location}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-rhema-green">
                  {step.title}
                </h3>
                <p className="text-sm text-rhema-ink/85 leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}