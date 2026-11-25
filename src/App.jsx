import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoundersBio from "./components/FoundersBio";
import JourneyTimeline from "./components/JourneyTimeline";
import MinistryPillars from "./components/MinistryPillars";
import PartnershipForm from "./components/PartnershipForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-rhema-ivory text-rhema-ink font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FoundersBio />
        <JourneyTimeline />
        <MinistryPillars />
        <PartnershipForm />
      </main>
      <Footer />
    </div>
  );
}