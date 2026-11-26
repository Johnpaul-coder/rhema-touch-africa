import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VisionMission from "./components/VisionMission";
import MinistryPillars from "./components/MinistryPillars";
import PartnershipForm from "./components/PartnershipForm";
import FoundersBio from "./components/FoundersBio";
import JourneyTimeline from "./components/JourneyTimeline";
import AdminDashboard from "./components/AdminDashboard";
import { ministryContent } from "./data/ministryContent";

export default function App() {
  const { organization } = ministryContent;

  const [dashboardOpen, setDashboardOpen] = useState(false);

  const [slides, setSlides] = useState(() => {
    const saved = localStorage.getItem("rta_hero_slides");
    return saved ? JSON.parse(saved) : ministryContent.heroSlides;
  });

  const [sites, setSites] = useState(() => {
    const saved = localStorage.getItem("rta_mission_sites");
    return saved ? JSON.parse(saved) : ministryContent.missionSites;
  });

  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem("rta_inquiries");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("rta_hero_slides", JSON.stringify(slides));
  }, [slides]);

  useEffect(() => {
    localStorage.setItem("rta_mission_sites", JSON.stringify(sites));
  }, [sites]);

  useEffect(() => {
    localStorage.setItem("rta_inquiries", JSON.stringify(inquiries));
  }, [inquiries]);

  const handleNewInquiry = (entry) => {
    setInquiries((prev) => [
      { ...entry, date: new Date().toLocaleDateString() },
      ...prev,
    ]);
  };

  const handleResetDefaults = () => {
    localStorage.removeItem("rta_hero_slides");
    localStorage.removeItem("rta_mission_sites");
    setSlides(ministryContent.heroSlides);
    setSites(ministryContent.missionSites);
  };

  return (
    <div className="min-h-screen bg-white text-rhema-ink font-sans selection:bg-rhema-gold selection:text-rhema-ink">
      {/* Floating Pill Navbar (Desktop) + Clean Hamburger Menu (Mobile) */}
      <Navbar onOpenDashboard={() => setDashboardOpen(true)} />

      {/* 1. Mission-First Full-Bleed Hero with Rotating Scripture Focus */}
      <main>
        <Hero customSlides={slides} />

        {/* 2. Core Vision, Mission & Active Field Mission Sites */}
        <VisionMission customSites={sites} />

        {/* 3. What We Deliver: 6 Core Ministry & Outreach Programs */}
        <div id="programs">
          <MinistryPillars />
        </div>

        {/* 4. Actionable Engagement: Partner, Give, or Volunteer */}
        <PartnershipForm onNewInquiry={handleNewInquiry} />

        {/* 5. About Us: Trusted Clinical & Ministerial Stewardship */}
        <FoundersBio />

        {/* 6. Track Record: Ministry Heritage & Journey */}
        <JourneyTimeline />
      </main>

      {/* Clean Footer */}
      <footer
        id="contact"
        className="bg-[#141E1A] text-white/85 py-12 border-t-4 border-rhema-gold"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={organization.logoPath}
              alt={organization.name}
              className="w-11 h-11 rounded-full border border-rhema-gold object-cover"
            />
            <div>
              <p className="font-serif font-bold text-white text-lg">
                {organization.name}
              </p>
              <p className="text-xs text-rhema-goldLight">
                {organization.regions}
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-center md:text-right space-y-1">
            <p>
              Email:{" "}
              <a
                href={`mailto:${organization.email}`}
                className="text-rhema-gold hover:underline"
              >
                {organization.email}
              </a>{" "}
              • Tel: {organization.phone}
            </p>
            <p className="text-white/55">
              © {new Date().getFullYear()} {organization.name}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Ministry Team Dashboard Modal */}
      <AdminDashboard
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        slides={slides}
        setSlides={setSlides}
        sites={sites}
        setSites={setSites}
        inquiries={inquiries}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}