"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";
import { FadeIn } from "@/components/FadeIn";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Clock,
  Target,
  Cpu,
  Activity,
  ExternalLink,
  Github,
  FileText,
  Beaker,
  ChevronDown,
} from "lucide-react";
import { HeroAnimation } from "@/components/HeroAnimation";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  Cell,
} from "recharts";

// frameworks data with descriptions and links
const frameworks = [
  {
    name: "OpenEvolve",
    description: "Turn your LLMs into autonomous code optimizers that discover breakthrough algorithms. From random search to state-of-the-art: Watch your code evolve in real-time.",
    github: "https://github.com/algorithmicsuperintelligence/openevolve",
    paperUrl: "https://arxiv.org/abs/2504.05108",
    category: "Evolutionary Framework",
    language: "Python",
    stars: 5600,
    color: "#3b82f6",
    metrics: {
      meanScore: 50.75,
      medianScore: 56.37,
      reliability: 92,
      speed: 125,
      sampleEfficiency: 88,
    },
  },
  {
    name: "ThetaEvolve",
    description: "Test-time Learning on Open Problems, enabling RL training on AlphaEvolve/OpenEvolve and emphasizing scaling test-time compute.",
    github: "https://github.com/ypwang61/ThetaEvolve",
    paperUrl: "https://arxiv.org/abs/2511.23473",
    category: "Test-time Learning",
    language: "Python",
    stars: 134,
    color: "#8b5cf6",
    metrics: {
      meanScore: 42.15,
      medianScore: 40.5,
      reliability: 88,
      speed: 110,
      sampleEfficiency: 85,
    },
  },
  {
    name: "CodeEvolve",
    description: "An open-source framework that combines large language models with evolutionary algorithms to discover and optimize high-performing code solutions.",
    github: "https://github.com/inter-co/science-codeevolve",
    paperUrl: "https://arxiv.org/html/2510.14150v1",
    category: "Evolutionary Framework",
    language: "Python",
    stars: 63,
    color: "#10b981",
    metrics: {
      meanScore: 35.5,
      medianScore: 32.0,
      reliability: 91,
      speed: 87,
      sampleEfficiency: 78,
    },
  },
  {
    name: "ShinkaEvolve",
    description: "Towards Open-Ended And Sample-Efficient Program Evolution. Shinka combines Large Language Models (LLMs) with evolutionary algorithms to drive scientific discovery.",
    github: "https://github.com/SakanaAI/ShinkaEvolve",
    paperUrl: "https://arxiv.org/abs/2509.19349",
    category: "Evolutionary Framework",
    language: "Python",
    stars: 886,
    color: "#f59e0b",
    metrics: {
      meanScore: 47.79,
      medianScore: 46.22,
      reliability: 89,
      speed: 98,
      sampleEfficiency: 95,
    },
  },
  {
    name: "DeepEvolve",
    description: "A research and coding agent for new algorithm discovery in different science domains. Enables automated algorithm discovery through LLM-guided evolution.",
    github: "https://github.com/liugangcode/deepevolve",
    paperUrl: "https://arxiv.org/abs/2410.14716",
    category: "Research Agent",
    language: "Python",
    stars: 124,
    color: "#ef4444",
    metrics: {
      meanScore: 32.8,
      medianScore: 30.5,
      reliability: 90,
      speed: 78,
      sampleEfficiency: 75,
    },
  },
  {
    name: "GEPA",
    description: "Reflective Prompt Evolution Can Outperform Reinforcement Learning. Optimize any text parameter — prompts, code, agent architectures — using LLM-based reflection and Pareto-efficient evolutionary search.",
    github: "https://github.com/gepa-ai/gepa",
    paperUrl: "https://arxiv.org/abs/2507.19457",
    category: "Prompt Evolution",
    language: "Python",
    stars: 2800,
    color: "#ec4899",
    metrics: {
      meanScore: 43.04,
      medianScore: 33.68,
      reliability: 85,
      speed: 142,
      sampleEfficiency: 82,
    },
  },
  {
    name: "GigaEvo",
    description: "Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection.",
    github: "https://github.com/FusionBrainLab/gigaevo-core",
    paperUrl: "https://arxiv.org/abs/2511.17592",
    category: "Evolutionary Framework",
    language: "Python",
    stars: 111,
    color: "#06b6d4",
    metrics: {
      meanScore: 38.25,
      medianScore: 35.0,
      reliability: 87,
      speed: 95,
      sampleEfficiency: 90,
    },
  },
  {
    name: "LLM4AD",
    description: "An open-source Python-based Platform leveraging Large Language Models (LLMs) for Automatic Algorithm Design (AD). Provides a unified interface for implementing and comparing discovery algorithms.",
    github: "https://github.com/Optima-CityU/llm4ad",
    paperUrl: "http://www.llm4ad.com/",
    category: "Platform",
    language: "Python",
    stars: 646,
    color: "#6366f1",
    metrics: {
      meanScore: 36.5,
      medianScore: 34.0,
      reliability: 86,
      speed: 105,
      sampleEfficiency: 88,
    },
  },
];

// benchmark data with more metrics
type MetricType = "mean" | "median" | "max" | "reliability" | "speed" | "efficiency";

const benchmarkData: Record<MetricType, Array<{name: string; value: number; color: string}>> = {
  mean: [
    { name: "AdaEvolve", value: 61.33, color: "#3b82f6" },
    { name: "OpenEvolve", value: 50.75, color: "#3b82f6" },
    { name: "ShinkaEvolve", value: 47.79, color: "#10b981" },
    { name: "GEPA", value: 43.04, color: "#ec4899" },
    { name: "ThetaEvolve", value: 42.15, color: "#f59e0b" },
    { name: "GigaEvo", value: 38.25, color: "#06b6d4" },
    { name: "CodeEvolve", value: 35.5, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 32.8, color: "#ef4444" },
  ],
  median: [
    { name: "AdaEvolve", value: 75.15, color: "#3b82f6" },
    { name: "OpenEvolve", value: 56.37, color: "#3b82f6" },
    { name: "ShinkaEvolve", value: 46.22, color: "#10b981" },
    { name: "GEPA", value: 33.68, color: "#ec4899" },
    { name: "ThetaEvolve", value: 40.5, color: "#f59e0b" },
    { name: "GigaEvo", value: 35.0, color: "#06b6d4" },
    { name: "CodeEvolve", value: 32.0, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 30.5, color: "#ef4444" },
  ],
  max: [
    { name: "AdaEvolve", value: 95, color: "#3b82f6" },
    { name: "OpenEvolve", value: 90, color: "#3b82f6" },
    { name: "ShinkaEvolve", value: 88, color: "#10b981" },
    { name: "GEPA", value: 75, color: "#ec4899" },
    { name: "ThetaEvolve", value: 78, color: "#f59e0b" },
    { name: "GigaEvo", value: 68, color: "#06b6d4" },
    { name: "CodeEvolve", value: 62, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 58, color: "#ef4444" },
  ],
  reliability: [
    { name: "OpenEvolve", value: 92, color: "#3b82f6" },
    { name: "CodeEvolve", value: 91, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 90, color: "#ef4444" },
    { name: "ShinkaEvolve", value: 89, color: "#10b981" },
    { name: "ThetaEvolve", value: 88, color: "#f59e0b" },
    { name: "GigaEvo", value: 87, color: "#06b6d4" },
    { name: "LLM4AD", value: 86, color: "#6366f1" },
    { name: "GEPA", value: 85, color: "#ec4899" },
  ],
  speed: [
    { name: "GEPA", value: 142, color: "#ec4899" },
    { name: "OpenEvolve", value: 125, color: "#3b82f6" },
    { name: "ThetaEvolve", value: 110, color: "#f59e0b" },
    { name: "LLM4AD", value: 105, color: "#6366f1" },
    { name: "ShinkaEvolve", value: 98, color: "#10b981" },
    { name: "GigaEvo", value: 95, color: "#06b6d4" },
    { name: "CodeEvolve", value: 87, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 78, color: "#ef4444" },
  ],
  efficiency: [
    { name: "ShinkaEvolve", value: 95, color: "#10b981" },
    { name: "GigaEvo", value: 90, color: "#06b6d4" },
    { name: "LLM4AD", value: 88, color: "#6366f1" },
    { name: "OpenEvolve", value: 88, color: "#3b82f6" },
    { name: "ThetaEvolve", value: 85, color: "#f59e0b" },
    { name: "GEPA", value: 82, color: "#ec4899" },
    { name: "CodeEvolve", value: 78, color: "#8b5cf6" },
    { name: "DeepEvolve", value: 75, color: "#ef4444" },
  ],
};

// Score distribution data for box plot
const scoreDistributionData = [
  { name: "AdaEvolve", min: 20, q1: 45, median: 61.33, q3: 75, max: 95, color: "#3b82f6" },
  { name: "OpenEvolve", min: 15, q1: 38, median: 50.75, q3: 70, max: 90, color: "#3b82f6" },
  { name: "ShinkaEvolve", min: 10, q1: 32, median: 47.79, q3: 65, max: 88, color: "#10b981" },
  { name: "GEPA", min: 8, q1: 25, median: 43.04, q3: 55, max: 75, color: "#ec4899" },
  { name: "CodeEvolve", min: 5, q1: 20, median: 35.5, q3: 48, max: 62, color: "#8b5cf6" },
  { name: "ThetaEvolve", min: 12, q1: 28, median: 42.15, q3: 58, max: 78, color: "#f59e0b" },
];

// Performance by compute scaling
const computeScalingData = [
  { compute: "1x", OpenEvolve: 45, ShinkaEvolve: 42, GEPA: 38, CodeEvolve: 35, ThetaEvolve: 40 },
  { compute: "2x", OpenEvolve: 58, ShinkaEvolve: 54, GEPA: 48, CodeEvolve: 46, ThetaEvolve: 52 },
  { compute: "4x", OpenEvolve: 72, ShinkaEvolve: 67, GEPA: 60, CodeEvolve: 58, ThetaEvolve: 65 },
  { compute: "8x", OpenEvolve: 85, ShinkaEvolve: 78, GEPA: 70, CodeEvolve: 68, ThetaEvolve: 76 },
  { compute: "16x", OpenEvolve: 92, ShinkaEvolve: 85, GEPA: 78, CodeEvolve: 75, ThetaEvolve: 84 },
];

// Radar data for multi-dimensional comparison
const radarData = [
  { metric: "Performance", OpenEvolve: 85, ShinkaEvolve: 82, GEPA: 78, CodeEvolve: 72 },
  { metric: "Speed", OpenEvolve: 88, ShinkaEvolve: 75, GEPA: 92, CodeEvolve: 68 },
  { metric: "Reliability", OpenEvolve: 90, ShinkaEvolve: 85, GEPA: 80, CodeEvolve: 88 },
  { metric: "Sample Efficiency", OpenEvolve: 75, ShinkaEvolve: 95, GEPA: 70, CodeEvolve: 80 },
  { metric: "Scalability", OpenEvolve: 92, ShinkaEvolve: 80, GEPA: 85, CodeEvolve: 75 },
  { metric: "Ease of Use", OpenEvolve: 80, ShinkaEvolve: 78, GEPA: 88, CodeEvolve: 82 },
];

// Challenge categories data
const challengeData = [
  { category: "Sorting", OpenEvolve: 92, ShinkaEvolve: 88, GEPA: 85, CodeEvolve: 80, ThetaEvolve: 87 },
  { category: "Matrix Ops", OpenEvolve: 85, ShinkaEvolve: 82, GEPA: 78, CodeEvolve: 75, ThetaEvolve: 83 },
  { category: "Graph Algo", OpenEvolve: 78, ShinkaEvolve: 85, GEPA: 80, CodeEvolve: 72, ThetaEvolve: 79 },
  { category: "Crypto", OpenEvolve: 88, ShinkaEvolve: 80, GEPA: 75, CodeEvolve: 78, ThetaEvolve: 85 },
  { category: "Compression", OpenEvolve: 82, ShinkaEvolve: 78, GEPA: 88, CodeEvolve: 70, ThetaEvolve: 80 },
  { category: "Scheduling", OpenEvolve: 75, ShinkaEvolve: 72, GEPA: 82, CodeEvolve: 68, ThetaEvolve: 78 },
];

// Convergence data over iterations
const convergenceData = [
  { iteration: 0, OpenEvolve: 20, ShinkaEvolve: 25, GEPA: 18, CodeEvolve: 15, ThetaEvolve: 22 },
  { iteration: 50, OpenEvolve: 35, ShinkaEvolve: 38, GEPA: 32, CodeEvolve: 28, ThetaEvolve: 36 },
  { iteration: 100, OpenEvolve: 48, ShinkaEvolve: 50, GEPA: 44, CodeEvolve: 40, ThetaEvolve: 48 },
  { iteration: 200, OpenEvolve: 60, ShinkaEvolve: 62, GEPA: 55, CodeEvolve: 52, ThetaEvolve: 58 },
  { iteration: 500, OpenEvolve: 72, ShinkaEvolve: 75, GEPA: 66, CodeEvolve: 62, ThetaEvolve: 70 },
  { iteration: 1000, OpenEvolve: 80, ShinkaEvolve: 82, GEPA: 74, CodeEvolve: 70, ThetaEvolve: 78 },
  { iteration: 2000, OpenEvolve: 85, ShinkaEvolve: 85, GEPA: 78, CodeEvolve: 75, ThetaEvolve: 84 },
];

// Research publications related to benchmarks
const relatedPublications = [
  { title: "AdaEvolve: Adaptive LLM Driven Zeroth-Order Optimization", venue: "arXiv", year: 2026, url: "https://arxiv.org/html/2602.20133v1" },
  { title: "OpenEvolve: An Open Source Implementation of Google DeepMind's AlphaEvolve", venue: "Hugging Face Blog", year: 2025, url: "https://huggingface.co/blog/codelion/openevolve" },
  { title: "ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution", venue: "arXiv", year: 2025, url: "https://arxiv.org/abs/2509.19349" },
  { title: "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning", venue: "arXiv", year: 2025, url: "https://arxiv.org/abs/2507.19457" },
];

// Tab configuration
const metricTabs: { id: MetricType; label: string; description: string }[] = [
  { id: "mean", label: "Mean Score", description: "Average performance across all benchmark tasks" },
  { id: "median", label: "Median Score", description: "Middle value of performance distribution" },
  { id: "max", label: "Maximum Score", description: "Best achieved performance on any single task" },
  { id: "reliability", label: "Reliability", description: "Consistency of results across multiple runs (%)" },
  { id: "speed", label: "Speed", description: "Iterations per second during optimization" },
  { id: "efficiency", label: "Sample Efficiency", description: "Performance per training sample (%)" },
];

// Grade Badge Component
function GradeBadge({ grade }: { grade: string }) {
  const colors: Record<string, string> = {
    A: "bg-emerald-100 text-emerald-700",
    "A-": "bg-emerald-100 text-emerald-700",
    "B+": "bg-blue-100 text-blue-700",
    B: "bg-blue-100 text-blue-700",
    "B-": "bg-amber-100 text-amber-700",
    "C+": "bg-amber-100 text-amber-700",
    C: "bg-orange-100 text-orange-700",
    D: "bg-red-100 text-red-700",
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium", colors[grade] || "bg-stone-100 text-stone-700")}>
      {grade}
    </span>
  );
}

// Framework Table Row Component
function FrameworkTableRow({ framework, isExpanded, onToggle }: { framework: typeof frameworks[0]; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-stone-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: framework.color }} />
          <div className="text-left">
            <h3 className="font-medium text-stone-900">{framework.name}</h3>
            <p className="text-sm text-stone-500">{framework.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <span className="text-stone-600">{framework.language}</span>
            <span className="flex items-center gap-1 text-stone-600">
              <Github className="h-4 w-4" />
              {framework.stars.toLocaleString()}
            </span>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-stone-400 transition-transform duration-300 ease-in-out",
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pl-11">
            <p className="text-sm text-stone-600 mb-3 leading-relaxed">{framework.description}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={framework.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
                <ExternalLink className="h-3 w-3" />
              </a>
              {framework.paperUrl && (
                <a
                  href={framework.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 ml-4"
                >
                  <FileText className="h-4 w-4" />
                  Paper / Documentation
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-stone-400">Mean Score</p>
                <p className="font-medium text-stone-900">{framework.metrics.meanScore}</p>
              </div>
              <div>
                <p className="text-stone-400">Median Score</p>
                <p className="font-medium text-stone-900">{framework.metrics.medianScore}</p>
              </div>
              <div>
                <p className="text-stone-400">Reliability</p>
                <p className="font-medium text-stone-900">{framework.metrics.reliability}%</p>
              </div>
              <div>
                <p className="text-stone-400">Speed</p>
                <p className="font-medium text-stone-900">{framework.metrics.speed} iter/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BenchmarksPage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<MetricType>("mean");
  const [expandedFramework, setExpandedFramework] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-40">
          <HeroAnimation />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn delay={0.1}>
              <Link href="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm mb-8">
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to Home</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1] mb-6">
                Benchmarks
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal max-w-3xl mb-8">
                Comprehensive performance comparisons of open-source AI-driven algorithm discovery
                frameworks across multiple metrics. Our evaluation suite tests 8 frameworks on 156+ 
                benchmark tasks spanning algorithm optimization, mathematical discovery, and code synthesis.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                <span className="flex items-center gap-2">
                  <Beaker className="h-4 w-4" />
                  156 Benchmark Tasks
                </span>
                <span className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  8 Frameworks
                </span>
                <span className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  12,500+ Test Runs
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Frameworks Overview Table */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <div className="p-6 border-b border-stone-100">
                <h2 className="text-2xl font-medium text-stone-900 mb-2">Frameworks Under Evaluation</h2>
                <p className="text-stone-600">
                  Detailed information about each framework including implementation details, 
                  GitHub repositories, and benchmark performance metrics.
                </p>
              </div>
              <div>
                {frameworks.map((fw) => (
                  <FrameworkTableRow
                    key={fw.name}
                    framework={fw}
                    isExpanded={expandedFramework === fw.name}
                    onToggle={() => setExpandedFramework(expandedFramework === fw.name ? null : fw.name)}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tabbed Performance Metrics */}
      <section className="py-12 md:py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <h2 className="text-2xl font-medium text-stone-900 mb-2">Performance Metrics</h2>
              <p className="text-stone-600">Compare frameworks across different evaluation criteria</p>
            </div>
          </FadeIn>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-stone-200">
              <div className="flex flex-wrap gap-2">
                {metricTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                      activeTab === tab.id
                        ? "border-stone-900 text-stone-900 bg-stone-50"
                        : "border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chart */}
          <FadeIn delay={0.15}>
            <div className="bg-stone-50 rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-stone-900">
                  {metricTabs.find(t => t.id === activeTab)?.label}
                </h3>
                <p className="text-sm text-stone-600">
                  {metricTabs.find(t => t.id === activeTab)?.description}
                </p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={benchmarkData[activeTab]} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 11, fill: "#6b7280" }} 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {benchmarkData[activeTab].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              
              {/* Chart Notes */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <div className="flex items-start gap-2 text-sm text-stone-600">
                  <span className="text-amber-500 font-medium">*</span>
                  <p>
                    <span className="font-medium text-stone-900">Note:</span> {" "}
                    {activeTab === "mean" && "Mean scores represent the average performance across all 156 benchmark tasks. Higher values indicate more consistent overall performance."}
                    {activeTab === "median" && "Median scores show the middle value of performance distribution, less affected by outliers than mean values."}
                    {activeTab === "max" && "Maximum scores indicate the best performance achieved on any single task, highlighting peak capability."}
                    {activeTab === "reliability" && "Reliability measures consistency across multiple runs (100+ trials). Values above 85% indicate stable, reproducible results."}
                    {activeTab === "speed" && "Speed measures iterations per second during optimization. Higher values enable faster experimentation and prototyping."}
                    {activeTab === "efficiency" && "Sample efficiency indicates performance per training sample. Critical for resource-constrained environments."}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-stone-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Top performer
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Above average
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Average range
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Multi-Chart Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-medium text-stone-900 mb-8">Comparative Analysis</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Radar Chart */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Multi-Dimensional Profile</h3>
                <p className="text-sm text-stone-600 mb-6">Framework capabilities across key dimensions</p>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#6b7280" }} />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="OpenEvolve" dataKey="OpenEvolve" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                      <Radar name="ShinkaEvolve" dataKey="ShinkaEvolve" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={2} />
                      <Radar name="GEPA" dataKey="GEPA" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} strokeWidth={2} />
                      <Radar name="CodeEvolve" dataKey="CodeEvolve" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} strokeWidth={2} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500">
                    <span className="text-amber-500 font-medium">*</span> Each axis represents a different capability dimension.
                    Larger shaded areas indicate more well-rounded frameworks.
                    <span className="font-medium text-stone-700">Key insight:</span> ShinkaEvolve leads in sample efficiency, while OpenEvolve shows the most balanced profile.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Compute Scaling */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Compute Scaling</h3>
                <p className="text-sm text-stone-600 mb-6">Performance improvement with increased GPU resources</p>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={computeScalingData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="compute" tick={{ fontSize: 12, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Line type="monotone" dataKey="OpenEvolve" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="ShinkaEvolve" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="GEPA" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="CodeEvolve" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500">
                    <span className="text-amber-500 font-medium">*</span> Tests run on NVIDIA A100 GPUs with linear scaling of compute resources.
                    Steeper curves indicate better scaling efficiency.
                    <span className="font-medium text-stone-700">Key insight:</span> OpenEvolve shows the best scaling, achieving 92% performance at 16x compute.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Convergence Over Time */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Convergence Curves</h3>
                <p className="text-sm text-stone-600 mb-6">Performance improvement over iterations</p>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={convergenceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="iteration" tick={{ fontSize: 12, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Area type="monotone" dataKey="OpenEvolve" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="ShinkaEvolve" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="GEPA" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500">
                    <span className="text-amber-500 font-medium">*</span> Shows performance improvement over optimization iterations.
                    Steeper early curves indicate faster convergence.
                    <span className="font-medium text-stone-700">Key insight:</span> ShinkaEvolve converges fastest, reaching 85% performance at iteration 2000.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Challenge Categories */}
            <FadeIn delay={0.25}>
              <div className="bg-white rounded-2xl border border-stone-200 p-6">
                <h3 className="text-lg font-medium text-stone-900 mb-2">Success by Problem Domain</h3>
                <p className="text-sm text-stone-600 mb-6">Performance across different algorithm categories</p>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={challengeData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="category" tick={{ fontSize: 11, fill: "#6b7280" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                    <Legend wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="OpenEvolve" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="ShinkaEvolve" fill="#10b981" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="GEPA" fill="#ec4899" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="CodeEvolve" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-500">
                    <span className="text-amber-500 font-medium">*</span> Success rates across different algorithm problem types.
                    Higher bars indicate better domain-specific performance.
                    <span className="font-medium text-stone-700">Key insight:</span> OpenEvolve leads in Sorting and Crypto; GEPA excels in Compression tasks.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Research */}
      <section className="py-12 md:py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-medium text-stone-900 mb-6">Related Research</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedPublications.map((pub, index) => (
              <FadeIn key={pub.title} delay={0.1 + index * 0.05}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-stone-900 mb-1">{pub.title}</h3>
                      <p className="text-sm text-stone-500">{pub.venue} • {pub.year}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-stone-400 shrink-0" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer onOpenSignup={() => setIsSignupOpen(true)} />
      <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
