"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { siX } from "simple-icons";

interface FooterProps {
  onOpenSignup: () => void;
}

export function Footer({ onOpenSignup }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Brand */}
          <FadeIn direction="left">
            <div>
              <div className="mb-4">
                <span className="text-2xl font-normal tracking-tight">
                  AIDDA
                </span>
                <span className="text-2xl font-light text-stone-400 ml-1">
                  Institute
                </span>
              </div>
              <p className="text-stone-400 text-sm font-normal">
                Coordinating research, knowledge sharing, and networking around AI-driven algorithm discovery.
              </p>
            </div>
          </FadeIn>

          {/* Get Involved */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <h3 className="text-base font-normal mb-2">Get Involved</h3>
              <p className="text-stone-400 text-sm mb-4 font-normal">
                Join our community and stay updated on events, research, and opportunities.
              </p>
              <Button
                onClick={onOpenSignup}
                className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-lg px-6 font-normal transition-colors"
              >
                Get Involved
              </Button>
            </div>
          </FadeIn>
        </div>

        <Separator className="my-10 bg-stone-800" />

        {/* Bottom row */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 font-normal">
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
                  className="h-5 w-5 fill-current"
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
