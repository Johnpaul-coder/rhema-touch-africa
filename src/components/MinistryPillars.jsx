import React, { useState } from "react";
import {
  Stethoscope,
  HandHeart,
  BookOpen,
  Baby,
  Sprout,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { ministryContent } from "../data/ministryContent";

const pillarIcons = {
  medical: Stethoscope,
  humanitarian: HandHeart,
  evangelism: BookOpen,
  children: Baby,
  empowerment: Sprout,
  mobilization: Globe,
};

export default function MinistryPillars() {
  const { pillars, scriptures } = ministryContent;
  const [selectedPillar, setSelectedPillar] = useState(pillars[0]);

  return (
    <section
      id="pillars"
      className="py-16 md:py-24 bg-white border-b border-rhema-gold/30"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            Our Shared Calling &amp; Vision
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            Six Pillars of Practical Transformation
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/80 mt-3 leading-relaxed">
            Every gift, regardless of size, becomes a powerful instrument in God’s
            hands when offered with love, faith, and a willing heart.
          </p>
          <div className="w-24 h-1 bg-rhema-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Interactive 6-Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar, index) => {
            const IconComponent = pillarIcons[pillar.id] || Globe;
            const isSelected = selectedPillar.id === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-rhema-green text-white border-rhema-gold shadow-xl -translate-y-1"
                    : "bg-rhema-ivory text-rhema-ink border-rhema-gold/35 hover:border-rhema-green/50 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                        isSelected
                          ? "bg-rhema-gold text-rhema-ink"
                          : "bg-rhema-green text-rhema-gold"
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-serif text-sm font-bold ${
                        isSelected ? "text-rhema-gold" : "text-rhema-burgundy/60"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-lg font-bold mb-2.5 ${
                      isSelected ? "text-white" : "text-rhema-green"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      isSelected ? "text-white/90" : "text-rhema-ink/85"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-3.5 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider ${
                    isSelected
                      ? "border-white/15 text-rhema-gold"
                      : "border-rhema-gold/25 text-rhema-burgundy"
                  }`}
                >
                  <span>Support This Pillar</span>
                  <a
                    href="#partner"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 underline"
                  >
                    <span>Partner</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Monumental Scripture Banner (Romans 1:16) */}
        <div className="bg-gradient-to-r from-rhema-burgundy via-[#631015] to-rhema-green text-white rounded-2xl p-8 md:p-10 shadow-lg border border-rhema-gold/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-rhema-gold">
              Gospel Anchor — {scriptures.secondary.reference}
            </span>
            <p className="font-serif text-xl md:text-2xl font-bold leading-snug">
              {scriptures.secondary.summary}
            </p>
          </div>
          <a
            href="#partner"
            className="shrink-0 bg-rhema-gold hover:bg-amber-500 text-rhema-ink font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition"
          >
            Join the Mission
          </a>
        </div>
      </div>
    </section>
  );
}