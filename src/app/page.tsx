"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PurposeSection } from "@/components/PurposeSection";
import { MeetingScheduleSection } from "@/components/MeetingScheduleSection";
import { CommitteeSection } from "@/components/CommitteeSection";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const signupRequested = searchParams.get("signup") === "1";

  const closeSignup = () => {
    setIsSignupOpen(false);
    if (!signupRequested) return;

    const next = new URLSearchParams(searchParams.toString());
    next.delete("signup");
    const query = next.toString();
    router.replace(query ? `/?${query}` : "/", { scroll: false });
  };

  return (
    <main className="page-shell min-h-screen">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />
      <HeroSection onOpenSignup={() => setIsSignupOpen(true)} />
      <PurposeSection onOpenSignup={() => setIsSignupOpen(true)} />
      {/* <ProgramTracksSection /> */}
      {/* <PublicationsSection /> */}
      <MeetingScheduleSection onOpenSignup={() => setIsSignupOpen(true)} />
      {/* <InsightsSection /> */}
      <CommitteeSection />
      {/* <ApplyCTASection /> */}
      <Footer onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Global Signup Popup */}
      <SignupPopup isOpen={isSignupOpen || signupRequested} onClose={closeSignup} />
    </main>
  );
}
