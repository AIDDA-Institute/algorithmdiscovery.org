"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, Network, Users2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ParticleAnimation } from "@/components/ParticleAnimation";
import { siX } from "simple-icons";

interface HeroSectionProps {
  onOpenSignup: () => void;
}

const metrics = [
  { icon: Network, label: "Open frameworks", value: "AlphaEvolve to OpenEvolve" },
  { icon: CalendarDays, label: "Programming", value: "Reading groups, speaker events, workshops" },
  { icon: Users2, label: "Community", value: "Researchers, engineers, and institutions" },
];

export function HeroSection({ onOpenSignup }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden border-b border-stone-200/70 pt-24 md:pt-32"
    >
      <div className="absolute inset-0">
        <ParticleAnimation />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(255,255,255,0.74),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(47,91,115,0.08),transparent_28%),linear-gradient(180deg,rgba(251,252,253,0.34)_0%,rgba(247,249,251,0.42)_44%,rgba(251,252,253,0.68)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/55 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="min-h-[calc(100svh-7rem)] flex items-center">
          <div className="w-full max-w-4xl">
            <FadeIn delay={0.05}>
              <span className="section-eyebrow mb-6">
                Institutional Initiative
              </span>
            </FadeIn>

            <FadeIn delay={0.12} duration={0.7}>
              <h1 className="institution-heading max-w-4xl text-4xl font-medium leading-[1.01] sm:text-5xl lg:text-6xl xl:text-[5rem]">
                Institute for
                <span className="block text-stone-500 font-light">
                  AI-Driven Discovery
                </span>
                <span className="block text-stone-500 font-light">
                  of Algorithms
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18} duration={0.65}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                A professional home for open research on automated algorithm discovery,
                connecting frontier frameworks, technical discussion, and institutions
                building serious capability in the field.
              </p>
            </FadeIn>

            <FadeIn delay={0.24} duration={0.6}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={onOpenSignup}
                  className="rounded-full bg-stone-900 px-7 py-6 text-base font-normal text-white hover:bg-stone-800"
                >
                  Join the Institute
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-stone-300 bg-white/86 px-6 py-6 text-base font-normal text-stone-800 hover:bg-stone-50"
                >
                  <a href="#schedule">
                    View Events
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.6rem] border border-white/58 bg-white/58 p-5 shadow-[0_20px_50px_rgba(24,33,47,0.08)] backdrop-blur-md"
                  >
                    <metric.icon className="mb-4 h-4 w-4 text-[#2f5b73]" />
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.36}>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
                  Follow
                </span>
                <a
                  href="https://x.com/AIDDA_Institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 transition-colors hover:text-stone-800"
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
                  className="text-stone-400 transition-colors hover:text-stone-800"
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
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
