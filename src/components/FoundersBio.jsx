import React, { useState } from "react";
import { Heart, Users, Stethoscope, Award } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function FoundersBio() {
  const { founders } = ministryContent;
  const [showProfileFlyer, setShowProfileFlyer] = useState(false);

  return (
    <section id="founders" className="py-16 md:py-24 bg-white border-b border-rhema-gold/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            Founders’ Biography
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            {founders.names}
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/75 mt-2 font-medium">
            {founders.titles}
          </p>
          <div className="w-20 h-1 bg-rhema-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Joint Calling & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-rhema-ink/90 leading-relaxed text-base">
            {founders.overview.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Credential Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-rhema-ivory border border-rhema-gold/30">
                <Stethoscope className="w-5 h-5 text-rhema-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-rhema-green text-sm">
                    Healthcare &amp; Nursing Leadership
                  </h4>
                  <p className="text-xs text-rhema-ink/80 mt-1">
                    Both founders are Registered Nurses bringing clinical care,
                    patient advocacy, and management expertise to underserved communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-rhema-ivory border border-rhema-gold/30">
                <Award className="w-5 h-5 text-rhema-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-rhema-green text-sm">
                    Ordained Christian Ministry
                  </h4>
                  <p className="text-xs text-rhema-ink/80 mt-1">
                    Decades of pastoral fellowship, discipleship, benevolence, and
                    cross-continental mission leadership across Kenya and the U.S.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Family & Personal Life Card */}
          <div className="lg:col-span-5 bg-rhema-ivory rounded-xl p-6 md:p-8 border border-rhema-gold/40 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-rhema-burgundy font-semibold text-xs uppercase tracking-wider">
              <Heart className="w-4 h-4 fill-rhema-burgundy" />
              <span>Family &amp; Personal Life</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-rhema-green">
              {founders.family.marriageYears}
            </h3>
            <p className="text-sm text-rhema-ink/85 leading-relaxed">
              {founders.family.summary}
            </p>
            <div className="pt-3 border-t border-rhema-gold/30 flex items-center gap-3 text-xs text-rhema-green font-semibold">
              <Users className="w-4 h-4 text-rhema-gold" />
              <span>Three Boys • Raising a Daughter from a Distance • Family Ventures</span>
            </div>
          </div>
        </div>

        {/* Minister Peris Wanjiku Kahoro Dedicated Spotlight */}
        <div className="bg-rhema-green text-white rounded-2xl p-6 md:p-10 shadow-md border border-rhema-gold/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-rhema-gold">
                Co-Founder Spotlight
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                {founders.perisSpotlight.name}
              </h3>
              <p className="text-sm text-rhema-goldLight font-medium">
                {founders.perisSpotlight.role} • {founders.perisSpotlight.credentials}
              </p>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                {founders.perisSpotlight.bio}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowProfileFlyer(!showProfileFlyer)}
                  className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-500 text-rhema-ink font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition"
                >
                  {showProfileFlyer
                    ? "Hide Official Profile Flyer"
                    : "View Official Profile Flyer"}
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/10 p-2.5 rounded-xl border border-rhema-gold/40 max-w-xs">
                <img
                  src={founders.perisFlyerPath}
                  alt={founders.perisSpotlight.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Expandable Full Flyer View */}
          {showProfileFlyer && (
            <div className="mt-8 pt-8 border-t border-white/15 flex justify-center">
              <img
                src={founders.perisFlyerPath}
                alt="Minister Peris Wanjiku Kahoro Official Profile"
                className="max-w-2xl w-full rounded-xl shadow-2xl border-2 border-rhema-gold"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}