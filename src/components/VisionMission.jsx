import React from "react";
import { Compass, Target, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function VisionMission({ customSites }) {
  const { visionMission, organization } = ministryContent;
  const sites =
    customSites && customSites.length > 0
      ? customSites
      : ministryContent.missionSites;

  return (
    <>
      {/* SECTION 1: CORE VISION & MISSION */}
      <section
        id="vision-mission"
        className="py-16 md:py-24 bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-rhema-burgundy">
              Purpose &amp; Mandate
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-rhema-green mt-2 leading-tight">
              Driven by Vision. Anchored in Action.
            </h2>
            <p className="text-base sm:text-lg text-rhema-ink/80 mt-3 leading-relaxed">
              {organization.tagline} — “{organization.motto}”
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-rhema-ivory rounded-3xl p-8 sm:p-10 border border-rhema-gold/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rhema-green text-rhema-gold flex items-center justify-center shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
                  {visionMission.vision.highlight}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rhema-green">
                  {visionMission.vision.title}
                </h3>
                <p className="text-base sm:text-lg text-rhema-ink/90 leading-relaxed">
                  {visionMission.vision.statement}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-rhema-gold/20 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rhema-green">
                <CheckCircle2 className="w-4 h-4 text-rhema-gold" />
                <span>Kenya &amp; Across Africa</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-rhema-green text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-rhema-gold text-rhema-ink flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-rhema-goldLight">
                  {visionMission.mission.highlight}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {visionMission.mission.title}
                </h3>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  {visionMission.mission.statement}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-rhema-gold">
                  1 John 3:18 • Love in Action
                </span>
                <a
                  href="#partner"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:text-rhema-gold transition"
                >
                  <span>Join the Mission</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION SITES ("Where We Go and Who We Serve") */}
      <section id="missions" className="py-16 md:py-24 bg-rhema-ivory">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-rhema-green/70">
                MISSION SITES
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-rhema-green mt-2 leading-tight">
                Where we go and who we serve
              </h2>
            </div>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 self-start md:self-auto bg-rhema-green hover:bg-rhema-greenLight text-white text-sm font-bold px-6 py-3 rounded-full shadow transition"
            >
              <span>Sponsor an Outreach Camp</span>
              <ArrowUpRight className="w-4 h-4 text-rhema-gold" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {sites.map((site) => (
              <div
                key={site.id}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rhema-burgundy bg-rhema-burgundy/10 px-3 py-1 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{site.region}</span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rhema-green bg-rhema-green/10 px-2.5 py-1 rounded-full">
                      {site.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-rhema-ink">
                    {site.siteName}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-rhema-gold">
                    {site.focus}
                  </p>

                  <p className="text-sm text-rhema-ink/80 leading-relaxed">
                    {site.summary}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100">
                  <a
                    href="#partner"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-rhema-green hover:text-rhema-burgundy transition"
                  >
                    <span>Support this mission site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
