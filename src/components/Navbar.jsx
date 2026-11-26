import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  Menu,
  X,
  Lock,
} from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Navbar({ onOpenDashboard }) {
  const { organization } = ministryContent;
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between">
        {/* Left Brand Mark */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={organization.logoPath}
            alt={organization.name}
            className="w-11 h-11 rounded-full object-cover border-2 border-rhema-gold shadow-md bg-white"
          />
          <div className="leading-tight">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rhema-goldLight">
              {organization.shortName}
            </span>
            <span className="block font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
              {organization.subtitle}
            </span>
          </div>
        </a>

        {/* Center Floating White Pill Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-2 rounded-full shadow-xl border border-white/40">
          <a
            href="#top"
            className="px-4 py-1.5 rounded-full bg-rhema-green text-white text-sm font-semibold transition"
          >
            Home
          </a>

          {/* About Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setAboutOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium text-rhema-ink hover:text-rhema-green hover:bg-rhema-ivory transition"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 mt-3 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2.5 px-2 space-y-1 z-50">
                <a
                  href="#vision-mission"
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-rhema-ink hover:bg-rhema-ivory hover:text-rhema-green transition"
                >
                  Vision &amp; Mission
                </a>
                <a
                  href="#programs"
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-rhema-ink hover:bg-rhema-ivory hover:text-rhema-green transition"
                >
                  Core Programs
                </a>
                <a
                  href="#leadership"
                  onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-rhema-ink hover:bg-rhema-ivory hover:text-rhema-green transition"
                >
                  Leadership &amp; Story
                </a>
              </div>
            )}
          </div>

          <a
            href="#missions"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-rhema-ink hover:text-rhema-green hover:bg-rhema-ivory transition"
          >
            Missions
          </a>
          <a
            href="#programs"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-rhema-ink hover:text-rhema-green hover:bg-rhema-ivory transition"
          >
            Programs
          </a>
          <a
            href="#partner"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-rhema-ink hover:text-rhema-green hover:bg-rhema-ivory transition"
          >
            Volunteer
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-rhema-ink hover:text-rhema-green hover:bg-rhema-ivory transition"
          >
            Contact
          </a>
        </nav>

        {/* Right Phone Circle + Gold CTA Pill + Admin Lock (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${organization.phone}`}
            title={`Call ${organization.phone}`}
            className="w-10 h-10 rounded-full border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDashboard}
            title="Ministry Team Dashboard"
            className="w-10 h-10 rounded-full border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition"
          >
            <Lock className="w-4 h-4 text-rhema-gold" />
          </button>

          <a
            href="#partner"
            className="inline-flex items-center gap-2 bg-rhema-gold hover:bg-amber-400 text-rhema-ink font-bold text-sm px-5 py-2.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
          >
            <span>Partner / Give</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button (Matches Phone Screenshot) */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/15 transition"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Full-Width Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 space-y-2">
          <a
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl bg-rhema-green text-white font-semibold text-sm"
          >
            Home
          </a>
          <a
            href="#vision-mission"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-rhema-ink hover:bg-rhema-ivory font-medium text-sm"
          >
            Vision &amp; Mission
          </a>
          <a
            href="#missions"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-rhema-ink hover:bg-rhema-ivory font-medium text-sm"
          >
            Our Missions
          </a>
          <a
            href="#programs"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-rhema-ink hover:bg-rhema-ivory font-medium text-sm"
          >
            Programs &amp; Outreach
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-rhema-ink hover:bg-rhema-ivory font-medium text-sm"
          >
            Leadership &amp; Story
          </a>
          <a
            href="#partner"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-rhema-ink hover:bg-rhema-ivory font-medium text-sm"
          >
            Volunteer &amp; Partner
          </a>

          <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
            <a
              href="#partner"
              onClick={() => setMobileOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-rhema-gold text-rhema-ink font-bold text-sm py-3 rounded-full shadow"
            >
              <span>Partner / Give</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenDashboard();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-rhema-green text-white text-xs font-bold"
            >
              <Lock className="w-3.5 h-3.5 text-rhema-gold" />
              <span>Dashboard</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}