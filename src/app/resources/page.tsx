"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Wrench,
  FileText,
  Video,
  Users,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  ArrowUpRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /youtube\.com\/watch\?.*v=([^&\s]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Publications & Articles
const publications = [
  {
    kind: "article" as const,
    title: "OpenEvolve: An Open Source Implementation of Google DeepMind's AlphaEvolve",
    tag: "ARTICLE",
    date: "2025",
    description: "Harnessing LLMs for Evolutionary Algorithm Discovery - A comprehensive implementation guide and exploration of using large language models to drive evolutionary algorithm discovery.",
    url: "https://huggingface.co/blog/codelion/openevolve",
    image: "/openevolve.png",
  },
  {
    kind: "paper" as const,
    title: "ThetaEvolve: Test-time Learning on Open Problems",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2511.23473",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "CodeEvolve: An open source evolutionary coding agent for algorithm discovery and optimization",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/html/2510.14150v1",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2509.19349",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "Scientific Algorithm Discovery by Augmenting AlphaEvolve with Deep Research",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2510.06056",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "AdaEvolve: Adaptive LLM Driven Zeroth-Order Optimization",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/html/2602.20133v1",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "Mathematical exploration and discovery at scale",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2511.02864",
    type: "arxiv",
  },
  {
    kind: "article" as const,
    title: "Mathematical discoveries from program search with large language models",
    tag: "RESEARCH",
    date: "2023",
    description: "Published research on using large language models for mathematical discovery through program search, demonstrating new capabilities in automated theorem proving and mathematical exploration.",
    url: "https://www.nature.com/articles/s41586-023-06924-6",
  },
  {
    kind: "paper" as const,
    title: "Algorithm Discovery With LLMs: Evolutionary Search Meets Reinforcement Learning",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2504.05108",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "PACEvolve: Enabling Long-Horizon Progress-Aware Consistent Evolution",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/abs/2601.10657",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "DeltaEvolve: Accelerating Scientific Discovery through Momentum-Driven Evolution",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/abs/2602.02919",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "GigaEvo: An Open Source Optimization Framework Powered By LLMs And Evolution Algorithms",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2511.17592",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "ImprovEvolve: Ask AlphaEvolve to Improve the Input Solution and Then Improvise",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/abs/2602.10233",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model",
    venue: "arXiv",
    year: "2024",
    url: "https://arxiv.org/abs/2401.02051",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "GPU Kernel Scientist: An LLM-Driven Framework for Iterative Kernel Optimization",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2506.20807",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "Magellan: Autonomous Discovery of Novel Compiler Optimization Heuristics with AlphaEvolve",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/pdf/2601.21096",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "AlgoTune: Can Language Models Speed Up General-Purpose Numerical Programs?",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/abs/2507.15887",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "K-Search: LLM Kernel Generation via Co-Evolving Intrinsic World Model",
    venue: "arXiv",
    year: "2026",
    url: "https://arxiv.org/abs/2602.19128",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "A Systematic Survey on Large Language Models for Algorithm Design",
    venue: "arXiv",
    year: "2024",
    url: "https://arxiv.org/abs/2410.14716",
    type: "arxiv",
  },
  {
    kind: "paper" as const,
    title: "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning",
    venue: "arXiv",
    year: "2025",
    url: "https://arxiv.org/abs/2507.19457",
    type: "arxiv",
  },


];

// Guides
const guides = [
  {
    type: "youtube" as const,
    title: "OpenEvolve: Towards Open Evolutionary AI Agents",
    channelName: "John Snow Labs",
    date: "October 2025",
    videoUrl: "https://www.youtube.com/watch?v=mWBT-szUutI",
  },
  {
    type: "youtube" as const,
    title: "FH #277 Open Evolve: Towards Open Evolutionary Agents",
    channelName: "NUS Hackers",
    date: "August 2025",
    videoUrl: "https://www.youtube.com/watch?v=uRPXxNuTv3M",
  },
  {
    type: "website" as const,
    title: "EvoVisual",
    description: "Dive into the fascinating world of evolutionary computation. EvoVisual helps you visualize and understand key algorithms and concepts.",
    url: "https://evovisual-advanced-evolutionary-concepts-577160257370.us-west1.run.app/",
    image: "/evovisual.png",
    date: "Documentation",
  },
];

// Tools
const tools = [
  {
    name: "ThetaEvolve: Test-time Learning on Open Problems",
    description: " ThetaEvolve: Test-time Learning on Open Problems, enabling RL training on AlphaEvolve/OpenEvolve and emphasizing scaling test-time compute.",
    url: "https://github.com/ypwang61/ThetaEvolve",
    github: "https://github.com/ypwang61/ThetaEvolve",
    category: "Framework",
    stars: "134",
    language: "Python",
    tags: [],
  },
  {
    name: "OpenEvolve",
    description: "Turn your LLMs into autonomous code optimizers that discover breakthrough algorithms. From random search to state-of-the-art: Watch your code evolve in real-time.",
    url: "https://github.com/algorithmicsuperintelligence/openevolve",
    github: "https://github.com/algorithmicsuperintelligence/openevolve",
    category: "Framework",
    stars: "5.6k",
    language: "Python",
    tags: ["genetic-algorithm", "discovery ", "evolutionary-algorithms"],
  },
  {
    name: "CodeEvolve",
    description: "An open-source framework that combines large language models with evolutionary algorithms to discover and optimize high-performing code solutions.",
    url: "https://github.com/inter-co/science-codeevolve",
    github: "https://github.com/inter-co/science-codeevolve",
    category: "Framework",
    stars: "63",
    language: "Python",
    tags: ["genetic-algorithm", "evolutionary-algorithms", "coding-agents"],
  },
  {
    name: "ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution",
    description: "Shinka is a framework that combines Large Language Models (LLMs) with evolutionary algorithms to drive scientific discovery.",
    url: "https://github.com/SakanaAI/ShinkaEvolve",
    github: "https://github.com/SakanaAI/ShinkaEvolve",
    category: "Framework",
    stars: "886",
    language: "Python",
    tags: [],
  },
  {
    name: "DeepEvolve",
    description: "DeepEvolve is a research and coding agent for new algorithm discovery in different science domains.",
    url: "https://github.com/liugangcode/deepevolve",
    github: "https://github.com/liugangcode/deepevolve",
    category: "Framework",
    stars: "10k",
    language: "Python",
    tags: ["coding-agent ", "llm", "multi-agent "],
  },
  {
    name: "SkyDiscover",
    description: "SkyDiscover is a modular framework for AI-driven scientific and algorithmic discovery, providing a unified interface for implementing, running, and fairly comparing discovery algorithms across 200+ optimization tasks.",
    url: "https://github.com/skydiscover-ai/skydiscover",
    github: "https://github.com/skydiscover-ai/skydiscover",
    category: "Framework",
    stars: "246",
    language: "Python",
    tags: [],
  },
  {
    name: "TTT-Discover",
    description: "TTT-Discover performs reinforcement learning at test time, allowing the LLM to continue training with experience specific to the problem at hand.",
    url: "https://test-time-training.github.io/discover/",
    github: "https://github.com/test-time-training/discover",
    category: "Framework",
    stars: "496",
    language: "Python",
    tags: [],
  },
  {
    name: "Mathematical Problem Repository for AlphaEvolve",
    description: "Mathematical Problem Repository for AlphaEvolve. It currently contains 67 mathematical problems whose descriptions are available in the problems directory.",
    url: "https://github.com/google-deepmind/alphaevolve_repository_of_problems",
    github: "https://github.com/google-deepmind/alphaevolve_repository_of_problems",
    category: "Collection",
    stars: "203",
    language: "Python",
    tags: ["jupyter-notebook"],
  },
  {
    name: "GigaEvo",
    description: "Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection.",
    url: "https://github.com/FusionBrainLab/gigaevo-core",
    github: "https://github.com/FusionBrainLab/gigaevo-core",
    category: "Framework",
    stars: "111",
    language: "Python",
    tags: ["evolution", "language-model", "llm"],
  },
  {
    name: "K-Search",
    description: " LLM-Driven GPU Kernel Optimization with Co-Evolving Intrinsic World Model.",
    url: "https://github.com/caoshiyi/K-Search",
    github: "https://github.com/caoshiyi/K-Search",
    category: "Framework",
    stars: "80",
    language: "Python",
    tags: [],
  },
  {
    name: "AlgoTune",
    description: "AlgoTune is a NeurIPS 2025 benchmark made up of 154 math, physics, and computer science problems. The goal is write code that solves each problem, and is faster than existing implementations.",
    url: "https://github.com/oripress/AlgoTune",
    github: "https://github.com/oripress/AlgoTune",
    category: "Framework",
    stars: "94",
    language: "Python",
    tags: ["code-generation", "code-optimization", "llm-agent"],
  },
  {
    name: "LLM4AD",
    description: "LLM4AD is an open-source Python-based Platform leveraging Large Language Models (LLMs) for Automatic Algorithm Design (AD).",
    url: "http://www.llm4ad.com/",
    github: "https://github.com/Optima-CityU/llm4ad",
    category: "Framework",
    stars: "646",
    language: "Python",
    tags: [],
  },
  {
    name: "GEPA",
    description: "Optimize any text parameter — prompts, code, agent architectures, configurations — using LLM-based reflection and Pareto-efficient evolutionary search.",
    url: "https://gepa-ai.github.io/gepa/",
    github: "https://github.com/gepa-ai/gepa",
    category: "Framework",
    stars: "2.8k",
    language: "Python",
    tags: [],
  },
];

// News
const newsItems = [
  {
    title: "New Benchmark Released for Neural Algorithm Discovery",
    tag: "NEWS",
    date: "March 10, 2026",
    summary: "AIDDA Institute releases comprehensive benchmark for evaluating neural algorithm discovery systems, enabling fair comparison across approaches.",
    url: "#",
    image: "/openevolve.png",
  },
  {
    title: "Workshop on AI-Driven Discovery of Algorithms Announced",
    tag: "EVENT",
    date: "February 19, 2026",
    summary: "Join us for our annual workshop bringing together researchers from academia and industry to share latest advances.",
    url: "#",
    image: "/openevolve.png",
  },
  {
    title: "Breakthrough in Automated Sorting Algorithm Discovery",
    tag: "RESEARCH",
    date: "February 12, 2026",
    summary: "Researchers discover new sorting algorithm with improved cache efficiency using deep learning and evolutionary search.",
    url: "#",
    image: "/openevolve.png",
  },
];

// Community Resources
const communityResources = [
  {
    title: "AIDDA Reading Group",
    description: "Weekly discussions on latest papers in AI-driven algorithm discovery.",
    icon: BookOpen,
    url: "/events",
  },
  {
    title: "Discord Community",
    description: "Join our Discord server to connect with researchers and practitioners.",
    icon: Users,
    url: "#",
  },
  {
    title: "YouTube Channel",
    description: "Recorded talks, tutorials, and workshop presentations.",
    icon: Video,
    url: "#",
  },
];

export default function ResourcesPage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span>Back to Home</span>
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1]">
                  Resources
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal max-w-xl">
                  Curated collection of research papers, guides, tools, and community 
                  resources for AI-driven algorithm discovery and automated reasoning.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 py-5 text-sm font-normal transition-colors"
                  >
                    Get Involved
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right side - decorative */}
            {/* <FadeIn delay={0.3} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full aspect-square rounded-2xl bg-blue-100 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="w-full aspect-square rounded-2xl bg-emerald-100 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-emerald-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="w-full aspect-square rounded-2xl bg-violet-100 flex items-center justify-center">
                      <Wrench className="h-12 w-12 text-violet-600" />
                    </div>
                    <div className="w-full aspect-square rounded-2xl bg-amber-100 flex items-center justify-center">
                      <Newspaper className="h-12 w-12 text-amber-600" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>

      {/* Publications & Articles */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Publications & Articles
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {(showAllPublications ? publications : publications.slice(0, 6)).map((item, index) => (
              <FadeIn key={item.title} delay={0.1 + index * 0.08}>
                <div className="group border-t border-stone-300 hover:border-blue-400 transition-colors">
                  <div className="flex gap-5 py-6">
                    {/* Left - Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        {item.kind === "paper" ? (
                          <>
                            <span className="text-xs font-normal text-stone-500 uppercase tracking-wider">
                              {item.venue}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                            <span className="text-xs text-stone-500 uppercase tracking-wider">
                              {item.year}
                            </span>
                            {"award" in item && (item as { award?: string }).award && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                                <span className="text-xs text-amber-600">{(item as { award?: string }).award}</span>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-normal text-stone-500 uppercase tracking-wider">
                              {item.tag}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                            <span className="text-xs text-stone-500 uppercase tracking-wider">
                              {item.date}
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-lg font-normal text-stone-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </h3>
                      {item.kind === "article" && item.description && (
                        <p className="text-sm text-stone-600 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    {/* Right - Image (only for articles) */}
                    {item.kind === "article" && item.image && (
                      <div className="relative w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* Show More Button */}
          {publications.length > 6 && (
            <FadeIn delay={0.3}>
              <div className="flex justify-center mt-10">
                <Button
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  variant="outline"
                  className="rounded-full px-8 py-5 border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                >
                  {showAllPublications ? "Show less" : "Show more"}
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Guides & Tutorials */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Video className="h-5 w-5 text-emerald-400" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Guides & Tutorials
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-2">
            {guides.map((guide) => (
              <StaggerItem key={guide.title}>
                <div className="group">
                  {guide.type === "youtube" ? (
                    <>
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4">
                        <iframe
                          src={`https://www.youtube.com/embed/${getYouTubeVideoId(guide.videoUrl!)}`}
                          title={guide.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-slate-400" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-normal text-stone-100 mb-1 group-hover:text-emerald-400 transition-colors leading-snug">
                            <a href={guide.videoUrl} target="_blank" rel="noopener noreferrer">
                              {guide.title}
                            </a>
                          </h3>
                          <p className="text-sm text-stone-400 mb-1">
                            {guide.channelName}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider">
                            <span>{guide.date}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4">
                        <Image
                          src={guide.image!}
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1.5">
                          <span>Website</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-5 w-5 text-emerald-400" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-normal text-stone-100 mb-1 group-hover:text-emerald-400 transition-colors leading-snug">
                            <a href={guide.url} target="_blank" rel="noopener noreferrer">
                              {guide.title}
                            </a>
                          </h3>
                          <p className="text-sm text-stone-400 mb-1 line-clamp-2">
                            {guide.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider">
                            <span>{guide.date}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Tools & Frameworks */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-violet-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Tools & Frameworks
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(showAllTools ? tools : tools.slice(0, 6)).map((tool, index) => (
              <FadeIn key={tool.name} delay={0.05 * (index % 6)}>
                <div className="bg-white border border-stone-200 hover:border-violet-300 transition-all rounded-xl p-6 h-full group shadow-sm">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 text-xs font-normal bg-violet-100 text-violet-700 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-stone-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {tool.github && (
                        <a
                          href={tool.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-400 hover:text-stone-700 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-normal text-stone-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {tool.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-stone-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-stone-100 text-stone-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center gap-4 text-xs text-stone-500 pt-4 border-t border-stone-200">
                    {tool.stars && (
                      <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{tool.stars}</span>
                      </div>
                    )}
                    {tool.language && (
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>{tool.language}</span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* Show More Button */}
          {tools.length > 6 && (
            <FadeIn delay={0.3}>
              <div className="flex justify-center mt-10">
                <Button
                  onClick={() => setShowAllTools(!showAllTools)}
                  variant="outline"
                  className="rounded-full px-8 py-5 border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900 hover:border-violet-300 transition-colors"
                >
                  {showAllTools ? "Show less" : "Show more"}
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Latest News */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-amber-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Latest News
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            {newsItems.map((news, index) => (
              <FadeIn key={news.title} delay={0.1 + index * 0.08}>
                <div className="group border-t border-stone-200 hover:border-amber-300 transition-colors">
                  <div className="flex gap-5 py-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-normal text-amber-600 uppercase tracking-wider">
                          {news.tag}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                        <span className="text-xs text-stone-500 uppercase tracking-wider">
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-normal text-stone-900 mb-2 group-hover:text-amber-700 transition-colors leading-snug">
                        <a href={news.url}>
                          {news.title}
                        </a>
                      </h3>
                      <p className="text-sm text-stone-600 leading-relaxed line-clamp-2">
                        {news.summary}
                      </p>
                    </div>
                    <div className="relative w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* Community Resources Section - White Background */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-rose-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Community Resources
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid gap-6 sm:grid-cols-3">
            {communityResources.map((resource) => (
              <StaggerItem key={resource.title}>
                <div className="bg-white border border-stone-200 hover:border-rose-300 transition-colors rounded-xl p-6 h-full group shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mb-4">
                    <resource.icon className="h-5 w-5 text-rose-700" />
                  </div>
                  <h3 className="text-lg font-normal text-stone-900 mb-2 group-hover:text-rose-700 transition-colors">
                    <a href={resource.url} className="flex items-center gap-2">
                      {resource.title}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </a>
                  </h3>
                  <p className="text-sm text-stone-600">{resource.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* CTA Section - White Background */}
      {/* <section className="py-16 md:py-20 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-200">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4">
                  Have a resource to share?
                </h2>
                <p className="text-stone-600 mb-6 font-normal">
                  We are always looking for valuable resources to add to our collection. 
                  If you have a paper, tool, or guide that would benefit the community, let us know.
                </p>
                <Button 
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-8 py-5 text-sm font-normal transition-colors"
                >
                  Submit Resource
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      <Footer onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Global Signup Popup */}
      <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
