"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Github, Youtube, ExternalLink, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const publications: Publication[] = [
  {
    id: 1,
    title: "AlphaEvolve: A Coding Agent for Algorithm Discovery",
    authors: "DeepMind Research Team",
    venue: "Nature, 2025",
    type: "paper",
    description: "Novel evolutionary coding agent that discovers faster matrix multiplication algorithms, recovering 0.7% of Google's global compute resources.",
    link: "#",
    tags: ["Evolutionary Algorithms", "Matrix Multiplication"],
  },
  {
    id: 2,
    title: "OpenEvolve: Open-Source Framework for Neural Architecture Search",
    authors: "UC Berkeley Sky Computing Lab",
    venue: "ICML 2025",
    type: "paper",
    description: "Open-source evolutionary coding framework demonstrating 5× speedups on systems research problems through automated algorithm discovery.",
    link: "#",
    tags: ["NAS", "Open Source", "Systems"],
  },
  {
    id: 3,
    title: "tig-evolve",
    authors: "TIG Foundation",
    venue: "GitHub Repository",
    type: "repository",
    description: "Hub for genetic coding agents for evolving and optimizing algorithms for The Innovation Game",
    link: "https://github.com",
    stats: { stars: 234, forks: 45 },
    tags: ["Rust", "Python", "LLM"],
  },
  {
    id: 4,
    title: "tig-evolve-benchmarks",
    authors: "TIG Foundation",
    venue: "GitHub Repository",
    type: "repository",
    description: "Comprehensive benchmark suite for evaluating evolutionary coding agents across matrix operations, sorting, and graph algorithms.",
    link: "https://github.com",
    stats: { stars: 128, forks: 23 },
    tags: ["Benchmarks", "Evaluation"],
  },
  {
    id: 5,
    title: "Introduction to Algorithm Mining",
    authors: "TIG Foundation",
    venue: "YouTube",
    type: "video",
    description: "Overview of algorithm mining concepts, evolutionary coding agents, and the TIG protocol for decentralized verification.",
    link: "#",
    duration: "45:32",
    views: "12.5K",
    tags: ["Tutorial", "Overview"],
  },
  {
    id: 6,
    title: "Technical Deep Dive: LLM Ensemble Strategies",
    authors: "Dr. Sarah Chen",
    venue: "YouTube",
    type: "video",
    description: "Advanced techniques for combining multiple language models in evolutionary loops to improve code generation quality.",
    link: "#",
    duration: "1:12:45",
    views: "8.2K",
    tags: ["Technical", "LLM"],
  },
];

type PublicationType = "paper" | "repository" | "video";

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  type: PublicationType;
  description: string;
  link: string;
  tags: string[];
  stats?: { stars: number; forks: number };
  duration?: string;
  views?: string;
}

const typeConfig: Record<PublicationType, {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}> = {
  paper: {
    icon: FileText,
    label: "Research Paper",
    color: "blue",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    borderColor: "border-blue-500/20",
  },
  repository: {
    icon: Github,
    label: "GitHub Repo",
    color: "slate",
    bgColor: "bg-slate-500/10",
    textColor: "text-slate-700",
    borderColor: "border-slate-500/20",
  },
  video: {
    icon: Youtube,
    label: "Video",
    color: "rose",
    bgColor: "bg-rose-500/10",
    textColor: "text-rose-600",
    borderColor: "border-rose-500/20",
  },
};

export function PublicationsSection() {
  return (
    <section id="publications" className="py-16 md:py-20 lg:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
            Publications & Resources
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto font-normal">
            Research papers, open-source repositories, and educational content from our team and collaborators.
          </p>
        </FadeIn>

        {/* Type Legend */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(typeConfig).map(([key, config]) => (
              <div
                key={key}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${config.bgColor} border ${config.borderColor}`}
              >
                <config.icon className={`h-4 w-4 ${config.textColor}`} />
                <span className={`text-sm font-normal ${config.textColor}`}>{config.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Publications Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((item) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            return (
              <StaggerItem key={item.id}>
                <Card className="border border-stone-200 shadow-none hover:border-stone-300 hover:shadow-sm transition-all duration-300 h-full bg-white group">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full ${config.bgColor}`}>
                        <Icon className={`h-3.5 w-3.5 ${config.textColor}`} />
                        <span className={`text-xs font-normal ${config.textColor}`}>{config.label}</span>
                      </div>
                      {item.type === "repository" && item.stats && (
                        <div className="flex items-center gap-3 text-xs text-stone-500">
                          <span>★ {item.stats.stars}</span>
                          <span>⑂ {item.stats.forks}</span>
                        </div>
                      )}
                      {item.type === "video" && (
                        <div className="text-xs text-stone-500">
                          {item.duration}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-normal text-stone-900 leading-snug mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>

                    {/* Authors/Venue */}
                    <p className="text-sm text-stone-500 mb-3 font-normal">
                      {item.authors} • {item.venue}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-stone-600 mb-4 line-clamp-2 font-normal flex-grow">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-stone-100 text-stone-600 rounded-full font-normal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-normal text-emerald-700 hover:text-emerald-800 transition-colors mt-auto"
                    >
                      {item.type === "paper" && "Read Paper"}
                      {item.type === "repository" && "View Repository"}
                      {item.type === "video" && "Watch Video"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Button */}
        <FadeIn delay={0.3} className="text-center mt-10">
          <Button
            variant="outline"
            className="rounded-full px-8 py-5 text-sm font-normal border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-colors"
          >
            View All Publications
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
