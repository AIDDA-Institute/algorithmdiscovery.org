"use client";

import { Button } from "@/components/ui/button";
import { Github, MessageCircle, FileText } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ParticleAnimation } from "@/components/ParticleAnimation";

interface HeroSectionProps {
  onOpenSignup: () => void;
}

export function HeroSection({ onOpenSignup }: HeroSectionProps) {
  return (
    <section id="overview" className="relative min-h-screen pt-16 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Left content */}
        <div className="flex items-center px-4 sm:px-6 lg:px-8 xl:px-16 py-12 lg:py-0">
          <div className="space-y-8 max-w-xl">
            <FadeIn delay={0.1} duration={0.7}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-stone-900 tracking-tight leading-[1.1]">
                Institute for <span className="font-light text-stone-400">Algorithm Mining</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2} duration={0.6}>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal">
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
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full px-6 py-6 text-base font-normal border-stone-300 text-stone-700 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                >
                  <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Algorithm Mining: The Economics of Automated Algorithm Discovery</span>
                    <span className="sm:hidden">Whitepaper</span>
                  </a>
                </Button>
              </div>
            </FadeIn>
            
            {/* <FadeIn delay={0.4} duration={0.6}>
              <div className="pt-6">
                <p className="text-xs font-normal tracking-widest text-stone-500 uppercase mb-4">
                  Connect with us
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-stone-400 hover:text-stone-700 transition-colors"
                    aria-label="Discord"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </FadeIn> */}
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
