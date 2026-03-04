"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mic, Users, Building2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

interface PurposeSectionProps {
  onOpenSignup: () => void;
}

const communityFeatures = [
  {
    icon: Mic,
    title: "Speaker events",
    description: "Featuring leading researchers and organizations at the cutting edge of AI-driven discovery.",
  },
  {
    icon: Users,
    title: "Focused working groups",
    description: "Addressing research questions and/or developing tooling.",
  },
  {
    icon: Building2,
    title: "Industry connections",
    description: "Enabling companies to turn AI-driven algorithm discoveries into tangible results.",
  },
];

export function PurposeSection({ onOpenSignup }: PurposeSectionProps) {
  return (
    <section id="purpose" className="py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Purpose Column */}
          <FadeIn direction="left" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Our Purpose
            </h2>
            <Separator className="bg-stone-300" />
            <div className="space-y-6 pt-4">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Recent breakthroughs in AI-driven algorithm discovery - including AlphaEvolve, CodeEvolve, OpenEvolve, and ShinkaEvolve - have shown that AI systems can outperform decades of human effort. From breaking a 56-year-old record in matrix multiplication to achieving 5× speedups on systems research problems, these advances signal a future where AI-driven methods will be a key part of algorithmic discovery.
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                The Institute for Algorithm Mining accelerates this transition by building a global community that fosters collaboration and knowledge sharing:
              </p>
            </div>

            {/* Community Features */}
            <div className="pt-6">
              <StaggerContainer staggerDelay={0.1} className="space-y-5">
                {communityFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-stone-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-stone-600 font-normal">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Who should join */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Who should join
            </h2>
            <Separator className="bg-stone-300" />
            <div className="pt-4 space-y-6">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Anyone interested in exploring the frontier of AI-driven algorithm discovery, whether researchers, engineers, industry practitioners, or enthusiasts.
              </p>
              <Button
                onClick={onOpenSignup}
                className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 py-5 font-normal transition-colors"
              >
                Get Involved
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
