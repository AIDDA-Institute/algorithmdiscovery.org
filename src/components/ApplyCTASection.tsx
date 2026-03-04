"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

export function ApplyCTASection() {
  return (
    <section id="apply" className="py-16 md:py-20 bg-stone-100 border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 tracking-tight mb-4">
            Join the Institute for Algorithm Mining
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto font-normal">
            Applications are open for the 2026 cohort. Help shape the future of efficient machine learning.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-8 py-6 text-base font-normal transition-colors"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-normal border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-colors"
            >
              Become a Sponsor
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
