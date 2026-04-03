"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/FadeIn";
import { siX } from "simple-icons";

interface FooterProps {
  onOpenSignup: () => void;
}

export function Footer({ onOpenSignup }: FooterProps) {
  return (
    <footer className="bg-[#101722] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
          {/* Left column - Brand */}
          <FadeIn direction="left">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-normal tracking-tight">
                  AIDDA
                </span>
                <span className="text-2xl font-light text-slate-400 ml-1">
                  Institute
                </span>
              </div>
              <p className="max-w-xl text-slate-300 text-sm font-normal leading-7">
                Coordinating research, knowledge sharing, and networking around AI-driven algorithm discovery.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>Research network</span>
                <span>Open-source ecosystem</span>
                <span>Institutional programming</span>
              </div>
            </div>
          </FadeIn>

          {/* Get Involved */}
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-base font-normal mb-2">Get Involved</h3>
              <p className="text-slate-300 text-sm mb-4 font-normal leading-7">
                Join our community and stay updated on events, research, and opportunities.
              </p>
              <Button
                onClick={onOpenSignup}
                className="rounded-full bg-white px-6 font-normal text-stone-900 transition-colors hover:bg-slate-100"
              >
                Get Involved
              </Button>
            </div>
          </FadeIn>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* Bottom row */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-normal">
              <span>&copy; 2026 AIDDA Institute</span>
              <a href="#" className="hover:text-stone-300 underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-stone-300 underline underline-offset-2">
                Policies
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://x.com/AIDDA_Institute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
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
                className="text-stone-400 hover:text-white transition-colors"
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
    </footer>
  );
}
