"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PurposeSection } from "@/components/PurposeSection";
import { ProgramTracksSection } from "@/components/ProgramTracksSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { MeetingScheduleSection } from "@/components/MeetingScheduleSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CommitteeSection } from "@/components/CommitteeSection";
import { ApplyCTASection } from "@/components/ApplyCTASection";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />
      <HeroSection onOpenSignup={() => setIsSignupOpen(true)} />
      <PurposeSection onOpenSignup={() => setIsSignupOpen(true)} />
      {/* <ProgramTracksSection /> */}
      {/* <PublicationsSection /> */}
      <MeetingScheduleSection />
      {/* <InsightsSection /> */}
      <CommitteeSection />
      {/* <ApplyCTASection /> */}
      <Footer onOpenSignup={() => setIsSignupOpen(true)} />
      
      {/* Global Signup Popup */}
      <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
