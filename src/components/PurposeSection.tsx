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
    <section id="purpose" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <FadeIn>
            <span className="section-eyebrow">Mission and Community</span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Purpose Column */}
          <FadeIn direction="left" className="institution-card rounded-[2rem] p-8 md:p-10 space-y-6">
            <h2 className="institution-heading text-3xl sm:text-4xl lg:text-5xl font-normal">
              Our Purpose
            </h2>
            <Separator className="bg-stone-200" />
            <div className="space-y-6 pt-4">
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                Recent breakthroughs in AI-driven algorithm discovery - including AlphaEvolve, CodeEvolve, OpenEvolve, and ShinkaEvolve - have shown that AI systems can outperform decades of human effort. From breaking a 56-year-old record in matrix multiplication to achieving 5× speedups on systems research problems, these advances signal a future where AI-driven methods will be a key part of algorithmic discovery.
              </p>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                The AIDDA Institute accelerates this transition by building a global community that fosters collaboration and knowledge sharing:
              </p>
            </div>

            {/* Community Features */}
            <div className="pt-6">
              <StaggerContainer staggerDelay={0.08} className="grid gap-4">
                {communityFeatures.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="rounded-2xl border border-stone-200 bg-white/72 p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#e6eef2] flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 text-[#2f5b73]" />
                        </div>
                        <div>
                          <h3 className="text-base font-normal text-stone-900 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-stone-600 font-normal leading-6">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Who should join */}
          <FadeIn direction="right" delay={0.1} className="space-y-6">
            <div className="institution-card rounded-[2rem] p-8 md:p-10">
              <h2 className="institution-heading text-3xl sm:text-4xl lg:text-5xl font-normal">
                Who Should Join
              </h2>
              <Separator className="my-6 bg-stone-200" />
              <div className="space-y-6">
                <p className="text-base md:text-lg text-stone-700 leading-relaxed font-normal">
                  Researchers, engineers, open-source maintainers, technical program leads,
                  and institutions exploring AI-assisted algorithm design, evaluation, and deployment.
                </p>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/90 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                    Why participate
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-700">
                    The institute is designed to turn scattered interest into a serious field-facing
                    network, with regular programming and a clearer path from research questions to
                    working collaboration.
                  </p>
                </div>
                <Button
                  onClick={onOpenSignup}
                  className="rounded-full bg-stone-900 px-6 py-5 font-normal text-white hover:bg-stone-800"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
