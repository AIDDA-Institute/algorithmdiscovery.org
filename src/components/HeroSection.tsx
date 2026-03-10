"use client";

import { Button } from "@/components/ui/button";
import { Github, MessageCircle, FileText, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ParticleAnimation } from "@/components/ParticleAnimation";
import { siX } from "simple-icons";

interface HeroSectionProps {
  onOpenSignup: () => void;
}

export function HeroSection({ onOpenSignup }: HeroSectionProps) {
  return (
    <section id="overview" className="relative min-h-screen pt-24 md:pt-32 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left content */}
        <div className="flex items-center px-4 sm:px-6 lg:px-8 xl:px-16 pt-12 pb-12 sm:pt-24 lg:py-0 relative z-10">
          <div className="space-y-8 w-full max-w-xl flex flex-col items-center sm:items-start">
            <FadeIn delay={0.1} duration={0.7}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1] text-center sm:text-left">
                Institute for <br />
                <span className="font-light text-stone-400">AI Driven <span className="whitespace-nowrap">Discovery of</span><br />Algorithms</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2} duration={0.6}>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal text-center sm:text-left">
                Coordinating research, knowledge sharing, and networking around AI-driven algorithm discovery.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} duration={0.6}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  onClick={onOpenSignup}
                  className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-8 py-6 text-base font-normal transition-colors"
                >
                  Get Involved
                </Button>
                {/* <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 py-6 text-base font-normal border-stone-300 text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                >
                  <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">AI Driven Discovery of Algorithms: The Economics of Automated Algorithm Discovery</span>
                    <span className="sm:hidden">Whitepaper</span>
                  </a>
                </Button> */}
              </div>
            </FadeIn>

            <FadeIn delay={0.4} duration={0.6}>
              <div className="pt-6 pb-12 flex flex-col items-center sm:items-start">
                <p className="text-xs font-normal tracking-widest text-stone-500 uppercase mb-4">
                  Connect with us
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://x.com/AIDDA_Institute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-700 transition-colors flex items-center justify-center w-6 h-6"
                    aria-label="X"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={siX.path} />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/aidda-institute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-700 transition-colors flex items-center justify-center w-6 h-6"
                    aria-label="LinkedIn"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right visual - three.js particle animation */}
        <FadeIn delay={0.3} duration={0.8} direction="right" className="relative h-[400px] lg:h-auto">
          <ParticleAnimation />
        </FadeIn>
      </div>
    </section>
  );
}
