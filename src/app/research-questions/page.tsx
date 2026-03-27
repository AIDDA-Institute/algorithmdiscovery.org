"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";
import { FadeIn } from "@/components/FadeIn";
import { HeroAnimation } from "@/components/HeroAnimation";
import {
  researchQuestions,
  questionCategories,
  progressStatuses,
  type ResearchQuestion
} from "@/data/research-questions";
import {
  ArrowRight,
  HelpCircle,
  BookOpen,
  Mail,
  Target,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Search,
  Zap,
  Beaker,
  Clock,
  Users,
  FileText,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

function ProgressBadge({ status }: { status: ResearchQuestion["progressStatus"] }) {
  const statusMap: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
    "exploratory": { 
      color: "bg-amber-100 text-amber-700", 
      icon: <Lightbulb className="h-3 w-3" />,
      label: "Exploratory"
    },
    "active": { 
      color: "bg-emerald-100 text-emerald-700", 
      icon: <Beaker className="h-3 w-3" />,
      label: "Active Research"
    },
    "advanced": { 
      color: "bg-blue-100 text-blue-700", 
      icon: <Zap className="h-3 w-3" />,
      label: "Advanced"
    },
    "nearing-resolution": { 
      color: "bg-violet-100 text-violet-700", 
      icon: <Target className="h-3 w-3" />,
      label: "Nearing Resolution"
    },
  };

  const config = statusMap[status];

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
      config.color
    )}>
      {config.icon}
      {config.label}
    </span>
  );
}

function ImpactBadge({ impact }: { impact: string }) {
  const colorMap: Record<string, string> = {
    "High": "bg-emerald-100 text-emerald-700",
    "Critical": "bg-rose-100 text-rose-700",
    "Industry": "bg-blue-100 text-blue-700",
    "Emerging": "bg-amber-100 text-amber-700",
    "Safety": "bg-red-100 text-red-700",
  };

  const iconMap: Record<string, React.ReactNode> = {
    "High": <Zap className="h-3 w-3" />,
    "Critical": <Target className="h-3 w-3" />,
    "Emerging": <Lightbulb className="h-3 w-3" />,
    "Industry": <Beaker className="h-3 w-3" />,
    "Safety": <Target className="h-3 w-3" />,
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
      colorMap[impact] || "bg-stone-100 text-stone-700"
    )}>
      {iconMap[impact]}
      {impact}
    </span>
  );
}

function ResearchQuestionCard({ question, index }: { question: ResearchQuestion; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FadeIn delay={0.1 + index * 0.08}>
      <div className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-blue-700 transition-colors leading-snug">
                {question.question}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">{question.shortDescription}</p>
            </div>
          </div>
          
          {/* Progress & Impact - Commented Out */}
          {/* <div className="flex flex-wrap gap-2 mb-3">
            <ProgressBadge status={question.progressStatus} />
            {question.impact.map((imp) => (
              <ImpactBadge key={imp} impact={imp} />
            ))}
          </div> */}
          
          {/* Related Areas - Commented Out */}
          {/* <div className="flex flex-wrap gap-1.5 line-clamp-2">
            {question.relatedAreas.map((area) => (
              <span
                key={area}
                className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600"
              >
                {area}
              </span>
            ))}
          </div> */}
        </div>

        {/* Quick Info - Commented Out */}
        {/* <div className="px-6 py-4 bg-stone-50/50 border-b border-stone-100">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-stone-600">
              <BookOpen className="h-4 w-4 text-stone-400" />
              <span>{question.publications.length} papers</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <Users className="h-4 w-4 text-stone-400" />
              <span>{question.workingGroups.length} working groups</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <Clock className="h-4 w-4 text-stone-400" />
              <span className="capitalize">{question.progressStatus.replace("-", " ")}</span>
            </div>
          </div>
        </div> */}

        {/* Expandable Content */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out border-b border-stone-100",
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            {/* Combined Description and Motivation */}
            <div className="p-6">
              <h4 className="text-sm font-medium text-stone-900 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                About This Question
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">{question.fullDescription}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{question.motivation}</p>
            </div>

            {/* Key Challenges - Commented Out */}
            {/* <div className="p-6 border-t border-stone-100">
              <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-600" />
                Key Challenges
              </h4>
              <ul className="space-y-2">
                {question.keyChallenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Publications - Commented Out */}
            {/* <div className="p-6 border-t border-stone-100">
              <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-violet-600" />
                Related Publications
              </h4>
              <div className="space-y-3">
                {question.publications.map((pub) => (
                  <div key={pub.title} className="text-sm">
                    <p className="text-stone-700 line-clamp-2 group-hover:text-blue-700 transition-colors">
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {pub.title}
                      </a>
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      {pub.venue} • {pub.year}
                    </p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Working Groups - Commented Out */}
            {/* <div className="p-6 bg-stone-50 border-t border-stone-100">
              <h4 className="text-sm font-medium text-stone-900 mb-3">Contributing Working Groups</h4>
              <div className="flex flex-wrap gap-2">
                {question.workingGroups.map((wg) => (
                  <span 
                    key={wg}
                    className="text-xs px-3 py-1.5 rounded-full bg-white text-stone-700 border border-stone-200"
                  >
                    {wg}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-3 flex items-center justify-center gap-2 text-sm text-stone-500 hover:text-stone-700 hover:bg-stone-50 transition-colors border-t border-stone-100"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show more details
            </>
          )}
        </button>
      </div>
    </FadeIn>
  );
}

export default function ResearchQuestionsPage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-40">
          <HeroAnimation />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm mb-8"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to Home</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1] mb-6">
                Open Research Questions
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal max-w-2xl mb-8">
                Fundamental questions that AIDDA is working to answer. If you&apos;re interested in these questions, we&apos;d love to hear from you.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-wrap items-center gap-6">
                {/* <div className="flex items-center gap-2 text-sm text-stone-500">
                  <HelpCircle className="h-4 w-4" />
                  <span>{researchQuestions.length} open questions</span>
                </div> */}
                {/* <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Beaker className="h-4 w-4" />
                  <span>{researchQuestions.filter(q => q.progressStatus === "active").length} actively researched</span>
                </div> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Research Questions Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-violet-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Active Research Questions
              </h2>
            </div>
            <p className="text-stone-500 mb-12 ml-[52px]">Click on any question to explore details and related work</p>
          </FadeIn>

          {/* Categories & Progress Status - Commented Out */}
          {/* <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-10">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-medium text-stone-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Research Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {questionCategories.map((category) => (
                      <span 
                        key={category.label}
                        className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-default"
                      >
                        {category.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-stone-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Research Progress
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {progressStatuses.map((status) => (
                      <span 
                        key={status.label}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full",
                          status.color === "amber" && "bg-amber-100 text-amber-700",
                          status.color === "emerald" && "bg-emerald-100 text-emerald-700",
                          status.color === "blue" && "bg-blue-100 text-blue-700",
                          status.color === "violet" && "bg-violet-100 text-violet-700"
                        )}
                      >
                        {status.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn> */}

          {/* Research Questions Grid */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {researchQuestions.map((question, index) => (
              <ResearchQuestionCard key={question.id} question={question} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-violet-50 via-blue-50 to-emerald-50 border border-stone-200 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm mb-6">
                <Mail className="h-6 w-6 text-violet-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
                Contribute to These Questions
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
                Interested in working on these open research questions? Join our working groups 
                or reach out to collaborate with researchers exploring these fundamental challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-5 border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-colors"
                  asChild
                >
                  <a href="mailto:research@aidda.org">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Research Team
                  </a>
                </Button>
                <Button 
                  className="rounded-full px-8 py-5 bg-stone-900 hover:bg-stone-800 text-white transition-colors"
                  asChild
                >
                  <Link href="/working-groups">
                    <Users className="h-4 w-4 mr-2" />
                    Explore Working Groups
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      <Footer onOpenSignup={() => setIsSignupOpen(true)} />
      <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
