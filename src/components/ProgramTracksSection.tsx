"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, Search } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const tracks = [
  {
    icon: Zap,
    title: "Evolutionary Algorithm Discovery",
    description:
      "Develop, extend, and benchmark evolutionary coding agents — including prompt design, population management, LLM ensemble strategies, and evaluation frameworks — to improve the rate and quality of automated algorithm discovery across domains.",
  },
  {
    icon: Cpu,
    title: "Applied Experiments",
    description:
      "Explore applying evolutionary coding agents across different research questions hosted on The Innovation Game platform — connecting automated discovery pipelines with TIG's decentralised protocol.",
  },
  {
    icon: Search,
    title: "Search & Optimization",
    description:
      "Explore neural architecture search, hyperparameter optimization, and automated machine learning techniques that discover efficient model configurations with minimal human intervention.",
  },
];

export function ProgramTracksSection() {
  return (
    <section id="program" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
            Program Tracks
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto font-normal">
            Three research tracks designed to advance automated algorithm discovery and its integration with open incentive systems.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track) => (
            <StaggerItem key={track.title}>
              <Card className="border border-stone-200 shadow-none hover:border-stone-300 transition-colors bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4">
                    <track.icon className="h-6 w-6 text-stone-700" />
                  </div>
                  <CardTitle className="text-xl font-normal text-stone-900">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 leading-relaxed font-normal">
                    {track.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
