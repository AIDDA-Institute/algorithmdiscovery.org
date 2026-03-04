"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const insights = [
  {
    title: "OpenEvolve powers AI-Driven Research for Systems at UC Berkeley",
    description: "Berkeley's Sky Computing Lab uses evolutionary coding agents to discover algorithms that outperform human-designed solutions across multiple systems domainsc.",
    date: "October 2025",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "AlphaEvolve breaks 56-year matrix multiplication record",
    description: "DeepMind's evolutionary coding agent discovers faster algorithms for matrix multiplication and recovers 0.7% of Google's global compute resources.",
    date: "May 2025",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Hiverge’s AI Algorithm Discovery wins Airbus’ planning challenge",
    description: "using its Hive discovery engine, Hiverge automatically evolved a planning algorithm that outperformed state‑of‑the‑art methods, winning Airbus’s competitions.",
    date: "November 2025",
    gradient: "from-violet-400 to-purple-500",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mb-12 md:mb-16">
            Related Insights
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {insights.map((insight) => (
            <StaggerItem key={insight.title}>
              <Card className="border-0 shadow-none bg-transparent cursor-pointer group">
                {/* img placeholder with gradient */}
                <div className={`aspect-video rounded-lg bg-gradient-to-br ${insight.gradient} mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm" />
                  </div>
                </div>
                
                <CardContent className="px-0 pt-0">
                  <h3 className="text-lg font-normal text-stone-900 leading-snug mb-2 group-hover:text-stone-700 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-stone-600 mb-3 line-clamp-2 font-normal">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-normal">
                    <span>Research</span>
                    <span className="w-1 h-1 rounded-full bg-stone-400" />
                    <span>{insight.date}</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <Button
            variant="outline"
            className="rounded-full px-8 py-5 text-sm font-normal border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
