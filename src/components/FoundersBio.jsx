import React, { useState } from "react";
import { ShieldCheck, Heart, Stethoscope, Award } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function FoundersBio() {
  const { founders } = ministryContent;
  const [activeTab, setActiveTab] = useState("stewardship");

  return (
    <section
      id="leadership"
      className="py-16 md:py-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-rhema-burgundy">
            About Us • Leadership &amp; Accountability
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-rhema-green mt-2 leading-tight">
            Trusted Clinical &amp; Ministerial Stewardship
          </h2>
          <p className="text-base text-rhema-ink/80 mt-3 leading-relaxed">
            Every medical camp, relief drive, and discipleship initiative is
            stewarded by licensed healthcare professionals and ordained leaders
            accountable to both local communities and international partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Portrait Card (Clean — Bottom Bar Removed) */}
          <div className="lg:col-span-5">
            <div className="bg-rhema-ivory p-3.5 rounded-3xl border border-rhema-gold/30 shadow-md">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={founders.portraitPath}
                  alt={founders.names}
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-rhema-gold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Co-Founders &amp; Field Directors</span>
                  </div>
                  <p className="font-serif text-lg font-bold">
                    {founders.names}
                  </p>
                  <p className="text-xs text-white/80 mt-0.5">
                    {founders.titles}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Tabbed Stewardship Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Pill Tabs */}
            <div className="inline-flex flex-wrap gap-2 bg-rhema-ivory p-1.5 rounded-full border border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab("stewardship")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition ${
                  activeTab === "stewardship"
                    ? "bg-rhema-green text-white shadow"
                    : "text-rhema-ink/75 hover:text-rhema-green"
                }`}
              >
                Mission Stewardship
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("clinical")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition ${
                  activeTab === "clinical"
                    ? "bg-rhema-green text-white shadow"
                    : "text-rhema-ink/75 hover:text-rhema-green"
                }`}
              >
                Healthcare &amp; Systems
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("family")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition ${
                  activeTab === "family"
                    ? "bg-rhema-green text-white shadow"
                    : "text-rhema-ink/75 hover:text-rhema-green"
                }`}
              >
                Family &amp; Values
              </button>
            </div>

            {activeTab === "stewardship" && (
              <div className="space-y-4 bg-rhema-ivory/60 rounded-3xl p-7 border border-gray-100">
                {founders.overview.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base text-rhema-ink/90 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-rhema-green shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-bold text-rhema-ink">
                        Registered Nurses
                      </span>
                      <span className="text-xs text-rhema-ink/70">
                        Clinical oversight for every medical outreach camp
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                    <Award className="w-5 h-5 text-rhema-burgundy shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-sm font-bold text-rhema-ink">
                        Ordained Ministers
                      </span>
                      <span className="text-xs text-rhema-ink/70">
                        Pastoral accountability in Portland &amp; Kenya
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "clinical" && (
              <div className="space-y-4 bg-rhema-ivory/60 rounded-3xl p-7 border border-gray-100">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-rhema-burgundy">
                  {founders.perisSpotlight.credentials}
                </span>
                <h3 className="font-serif text-xl font-bold text-rhema-green">
                  {founders.perisSpotlight.name}
                </h3>
                <p className="text-base text-rhema-ink/90 leading-relaxed">
                  {founders.perisSpotlight.bio}
                </p>
              </div>
            )}

            {activeTab === "family" && (
              <div className="space-y-4 bg-rhema-ivory/60 rounded-3xl p-7 border border-gray-100">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rhema-burgundy">
                  <Heart className="w-4 h-4 text-rhema-gold" />
                  <span>{founders.family.marriageYears}</span>
                </div>
                <p className="text-base text-rhema-ink/90 leading-relaxed">
                  {founders.family.summary}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}