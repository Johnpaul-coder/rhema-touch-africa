import React from "react";
import { ministryContent } from "../data/ministryContent";

export default function Footer() {
  const { organization, scriptures, founders } = ministryContent;

  return (
    <footer className="bg-rhema-green text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/15">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={organization.logoPath}
              alt={organization.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-rhema-gold"
            />
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                {organization.name}
              </h3>
              <p className="text-xs text-rhema-gold font-semibold uppercase tracking-widest">
                Faith • Hope • Impact
              </p>
            </div>
          </div>
          <p className="text-sm text-white/85 leading-relaxed">
            {organization.tagline}
          </p>
          <p className="font-serif italic text-sm text-rhema-goldLight">
            “{organization.motto}”
          </p>
        </div>

        {/* Scripture Anchor */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-rhema-gold">
            Scriptural Foundation
          </h4>
          <div className="bg-white/5 p-4 rounded-lg border border-white/10 space-y-2 text-xs text-white/85">
            <p>
              <strong className="text-rhema-gold">
                {scriptures.primary.reference}:
              </strong>{" "}
              {scriptures.primary.summary}
            </p>
            <p>
              <strong className="text-rhema-gold">
                {scriptures.secondary.reference}:
              </strong>{" "}
              {scriptures.secondary.summary}
            </p>
          </div>
        </div>

        {/* Direct Links & Contact */}
        <div className="md:col-span-3 space-y-3 text-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-rhema-gold">
            Leadership &amp; Contact
          </h4>
          <p className="text-white/90 font-medium">{founders.names}</p>
          <p className="text-xs text-white/75">{organization.regions}</p>
          <div className="pt-2 space-y-1 text-xs text-rhema-goldLight">
            <p>{organization.email}</p>
            <p>Tel: {organization.phone}</p>
            <p>Fax: {organization.fax}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-white/70">
        <p>
          © {new Date().getFullYear()} {organization.name}. All rights reserved.
        </p>
        <p>Touching Lives • Transforming Communities</p>
      </div>
    </footer>
  );
}