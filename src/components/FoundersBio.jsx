import React, { useState } from "react";
import {
  Heart,
  Users,
  Stethoscope,
  Award,
  Sparkles,
  FileText,
  X,
} from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function FoundersBio() {
  const { founders } = ministryContent;
  const [activeTab, setActiveTab] = useState("calling");
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);

  const tabs = [
    { id: "calling", label: "Shared Calling & Credentials" },
    { id: "peris", label: "Minister Peris Spotlight" },
    { id: "family", label: "19 Years of Family & Legacy" },
  ];

  return (
    <section
      id="founders"
      className="py-16 md:py-24 bg-rhema-ivory border-b border-rhema-gold/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            <Sparkles className="w-3.5 h-3.5 text-rhema-gold" />
            <span>Meet the Co-Founders</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            {founders.names}
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/75 mt-2 font-medium">
            {founders.titles}
          </p>
          <div className="w-24 h-1 bg-rhema-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive Story Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-sm ${
                  isActive
                    ? "bg-rhema-green text-white border border-rhema-green"
                    : "bg-white text-rhema-ink hover:bg-rhema-goldLight/40 border border-rhema-gold/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Shared Calling & Credentials */}
        {activeTab === "calling" && (
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-rhema-gold/40 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-rhema-ink/90 leading-relaxed text-base">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
                Faith in Action
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-rhema-green">
                Bridging Clinical Healing &amp; Gospel Transformation
              </h3>
              {founders.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-rhema-ivory border-l-4 border-rhema-green shadow-sm">
                <div className="flex items-center gap-2.5 text-rhema-green font-serif font-bold text-base mb-1.5">
                  <Stethoscope className="w-5 h-5 text-rhema-burgundy" />
                  <span>Registered Nurses &amp; Leaders</span>
                </div>
                <p className="text-sm text-rhema-ink/80 leading-relaxed">
                  Hands-on clinical nursing, healthcare management, and patient
                  advocacy dedicated to restoring human dignity in underserved
                  communities.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-rhema-ivory border-l-4 border-rhema-burgundy shadow-sm">
                <div className="flex items-center gap-2.5 text-rhema-green font-serif font-bold text-base mb-1.5">
                  <Award className="w-5 h-5 text-rhema-gold" />
                  <span>Ordained Christian Ministers</span>
                </div>
                <p className="text-sm text-rhema-ink/80 leading-relaxed">
                  Serving faithfully across Kenya and the United States—currently
                  ministering at Fountain Gateway Church in Portland, Oregon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Minister Peris Wanjiku Kahoro Spotlight */}
        {activeTab === "peris" && (
          <div className="bg-rhema-green text-white rounded-2xl p-6 md:p-10 shadow-lg border border-rhema-gold/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-rhema-gold">
                Co-Founder Profile
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                {founders.perisSpotlight.name}
              </h3>
              <p className="text-sm text-rhema-goldLight font-semibold">
                {founders.perisSpotlight.role} •{" "}
                {founders.perisSpotlight.credentials}
              </p>
              <p className="text-white/90 leading-relaxed text-base">
                {founders.perisSpotlight.bio}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setFlyerModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-500 text-rhema-ink font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg shadow transition"
                >
                  <FileText className="w-4 h-4 text-rhema-burgundy" />
                  <span>Open Full Official Profile Flyer</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setFlyerModalOpen(true)}
                className="cursor-pointer group relative bg-white/10 p-3 rounded-2xl border border-rhema-gold/50 max-w-sm shadow-xl"
              >
                <img
                  src={founders.perisFlyerPath}
                  alt={founders.perisSpotlight.name}
                  className="w-full h-72 object-cover rounded-xl group-hover:opacity-95 transition"
                />
                <span className="mt-2.5 block text-center text-xs text-rhema-goldLight font-medium">
                  Click image to view full biography flyer
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Family & Personal Life */}
        {activeTab === "family" && (
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-rhema-gold/40 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-rhema-burgundy font-bold text-xs uppercase tracking-widest">
                <Heart className="w-4 h-4 fill-rhema-burgundy" />
                <span>Covenant Marriage &amp; Family</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-rhema-green">
                {founders.family.marriageYears}
              </h3>
              <p className="text-base text-rhema-ink/90 leading-relaxed">
                {founders.family.summary}
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-rhema-green">
                <span className="inline-flex items-center gap-1.5 bg-rhema-ivory px-3.5 py-2 rounded-full border border-rhema-gold/40">
                  <Users className="w-4 h-4 text-rhema-gold" />
                  Proud Parents of Three Boys
                </span>
                <span className="inline-flex items-center gap-1.5 bg-rhema-ivory px-3.5 py-2 rounded-full border border-rhema-gold/40">
                  <Heart className="w-4 h-4 text-rhema-burgundy" />
                  Raising a Daughter from a Distance
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-rhema-ivory p-3 rounded-2xl border border-rhema-gold/40 shadow-sm">
                <img
                  src={founders.portraitPath}
                  alt={founders.names}
                  className="w-full h-72 object-cover object-top rounded-xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Official Profile Flyer */}
      {flyerModalOpen && (
        <div
          onClick={() => setFlyerModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white rounded-2xl p-3 shadow-2xl border-2 border-rhema-gold"
          >
            <button
              type="button"
              onClick={() => setFlyerModalOpen(false)}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-rhema-burgundy text-white flex items-center justify-center shadow-lg hover:bg-rhema-green transition"
              aria-label="Close Flyer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={founders.perisFlyerPath}
              alt="Minister Peris Wanjiku Kahoro Official Flyer"
              className="w-full max-h-[82vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}