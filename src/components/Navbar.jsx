import React, { useState } from "react";
import { Menu, X, Phone, Mail, HeartHandshake } from "lucide-react";
import { ministryContent } from "../data/ministryContent";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { organization } = ministryContent;

  const navLinks = [
    { label: "Founders", href: "#founders" },
    { label: "Ministry Journey", href: "#journey" },
    { label: "Our Mission", href: "#pillars" },
    { label: "Partner With Us", href: "#partner" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-rhema-ivory/95 backdrop-blur border-b border-rhema-gold/30 shadow-sm">
      {/* Top Official Contact Strip */}
      <div className="bg-rhema-green text-white text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="font-medium tracking-wide text-rhema-goldLight">
            {organization.regions}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${organization.email}`}
              className="flex items-center gap-1.5 hover:text-rhema-gold transition"
            >
              <Mail className="w-3.5 h-3.5 text-rhema-gold" />
              <span>{organization.email}</span>
            </a>
            <a
              href={`tel:${organization.phone}`}
              className="flex items-center gap-1.5 hover:text-rhema-gold transition"
            >
              <Phone className="w-3.5 h-3.5 text-rhema-gold" />
              <span>{organization.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Classic Navigation Bar */}
      <nav className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src={organization.logoPath}
            alt={organization.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-rhema-gold shadow-sm"
          />
          <div>
            <span className="block font-serif text-lg md:text-xl font-bold text-rhema-green tracking-tight leading-none">
              {organization.name}
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-rhema-burgundy font-semibold mt-1">
              Faith • Hope • Impact
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-rhema-ink hover:text-rhema-burgundy transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            className="inline-flex items-center gap-2 bg-rhema-burgundy hover:bg-rhema-green text-white text-sm font-semibold px-4 py-2.5 rounded-md shadow-sm transition"
          >
            <HeartHandshake className="w-4 h-4 text-rhema-goldLight" />
            <span>Support the Mission</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md text-rhema-green hover:bg-rhema-goldLight/40"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-rhema-ivory border-t border-rhema-gold/30 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-1.5 text-base font-medium text-rhema-ink hover:text-rhema-burgundy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-rhema-burgundy text-white text-sm font-semibold py-2.5 rounded-md"
          >
            Support the Mission
          </a>
        </div>
      )}
    </header>
  );
}