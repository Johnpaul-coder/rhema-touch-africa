import React from "react";
import {
  Stethoscope,
  HandHeart,
  BookOpen,
  Baby,
  Sprout,
  Globe,
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
  const { pillars } = ministryContent;

  return (
    <section id="pillars" className="py-16 md:py-24 bg-white border-b border-rhema-gold/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-rhema-burgundy">
            Our Shared Calling &amp; Vision
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-rhema-green mt-2">
            Six Pillars of Practical Ministry
          </h2>
          <p className="text-sm md:text-base text-rhema-ink/80 mt-3 leading-relaxed">
            Every gift, regardless of size, becomes a powerful instrument in God’s
            hands when offered with love, faith, and a willing heart.
          </p>
          <div className="w-20 h-1 bg-rhema-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillarIcons[pillar.id] || Globe;
            return (
              <div
                key={pillar.id}
                className="bg-rhema-ivory p-6 rounded-xl border border-rhema-gold/35 shadow-sm hover:shadow-md hover:border-rhema-green/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-rhema-green text-rhema-gold flex items-center justify-center mb-4 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-rhema-green mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-rhema-ink/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-rhema-gold/20 text-[11px] font-semibold uppercase tracking-wider text-rhema-burgundy">
                  Rhema Touch Africa Initiative
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}