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
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
