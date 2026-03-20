"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SignupPopup } from "@/components/SignupPopup";
import { FadeIn } from "@/components/FadeIn";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { 
  workingGroups, 
  partners, 
  researchAreas, 
  impactTags,
  type WorkingGroup 
} from "@/data/working-groups";
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  GitBranch, 
  Mail, 
  Calendar, 
  Target,
  HelpCircle,
  Briefcase,
  ExternalLink,
  MessageSquare,
  Globe,
  Search,
  Zap,
  Shield,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Building2,
  GraduationCap,
  Code2,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";

function ImpactBadge({ impact }: { impact: string }) {
  const colorMap: Record<string, string> = {
    "High": "bg-emerald-100 text-emerald-700",
    "Critical": "bg-rose-100 text-rose-700",
    "Industry": "bg-blue-100 text-blue-700",
    "Emerging": "bg-amber-100 text-amber-700",
    "Scalability": "bg-violet-100 text-violet-700",
    "Safety": "bg-red-100 text-red-700",
  };

  const iconMap: Record<string, React.ReactNode> = {
    "High": <Zap className="h-3 w-3" />,
    "Critical": <Shield className="h-3 w-3" />,
    "Emerging": <Sparkles className="h-3 w-3" />,
    "Industry": <Building2 className="h-3 w-3" />,
    "Scalability": <Code2 className="h-3 w-3" />,
    "Safety": <Shield className="h-3 w-3" />,
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

function WorkingGroupCard({ group, index }: { group: WorkingGroup; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <FadeIn delay={0.1 + index * 0.08}>
      <div className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-stone-300 hover:shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="p-6 border-b border-stone-100">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-stone-900 mb-2 group-hover:text-blue-700 transition-colors">
                {group.name}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">{group.description}</p>
            </div>
            {group.isRecruiting && (
              <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                <Users className="h-3 w-3" />
                Recruiting
              </span>
            )}
          </div>
          
          {/* Impact & Research Areas */}
          <div className="flex flex-wrap gap-2 mb-3">
            {group.impact.map((imp) => (
              <ImpactBadge key={imp} impact={imp} />
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {group.researchAreas.map((area) => (
              <span 
                key={area}
                className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div className="px-6 py-4 bg-stone-50/50 border-b border-stone-100">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-stone-600">
              <Users className="h-4 w-4 text-stone-400" />
              <span>{group.team.length} members</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <GitBranch className="h-4 w-4 text-stone-400" />
              <span>{group.githubRepos.length} repos</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <BookOpen className="h-4 w-4 text-stone-400" />
              <span>{group.publications.length} papers</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <Calendar className="h-4 w-4 text-stone-400" />
              <span className="truncate max-w-[200px]">{group.meetingSchedule}</span>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-b border-stone-100">
            {/* Team Section */}
            <div className="p-6 border-b border-stone-100">
              <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" />
                Team Members
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.team.map((member) => (
                  <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg bg-stone-50">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center text-xs font-medium text-stone-700">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 truncate">{member.name}</p>
                      <p className="text-xs text-stone-500 truncate">{member.role}</p>
                      <p className="text-xs text-stone-400 truncate">{member.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="p-6 border-b border-stone-100">
              <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                <Target className="h-4 w-4 text-emerald-600" />
                Current Projects
              </h4>
              <ul className="space-y-2">
                {group.projects.map((project) => (
                  <li key={project} className="flex items-start gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    {project}
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications & GitHub */}
            <div className="p-6 border-b border-stone-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-violet-600" />
                    Recent Publications
                  </h4>
                  <div className="space-y-3">
                    {group.publications.map((pub) => (
                      <div key={pub.title} className="text-sm">
                        <p className="text-stone-700 line-clamp-2 group-hover:text-blue-700 transition-colors">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            {pub.title}
                          </a>
                        </p>
                        <p className="text-xs text-stone-400 mt-1">
                          {pub.venue} • {pub.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-stone-600" />
                    GitHub Repositories
                  </h4>
                  <div className="space-y-3">
                    {group.githubRepos.map((repo) => (
                      <a 
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors"
                      >
                        <span className="font-medium">{repo.name}</span>
                        <span className="text-xs text-stone-400">★ {repo.stars}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-stone-100 text-stone-500">{repo.language}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Open Research Questions */}
            {group.openResearchQuestions.length > 0 && (
              <div className="p-6 border-b border-stone-100">
                <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-amber-600" />
                  Open Research Questions
                </h4>
                <ul className="space-y-2">
                  {group.openResearchQuestions.map((question) => (
                    <li key={question} className="flex items-start gap-2 text-sm text-stone-600">
                      <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Open Positions */}
            {group.openPositions.length > 0 && (
              <div className="p-6 border-b border-stone-100">
                <h4 className="text-sm font-medium text-stone-900 mb-4 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-emerald-600" />
                  Open Positions
                </h4>
                <div className="space-y-3">
                  {group.openPositions.map((position) => (
                    <div key={position.title} className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-emerald-800">{position.title}</span>
                        <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">{position.commitment}</span>
                      </div>
                      <p className="text-xs text-emerald-700/70 mb-2">{position.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {position.skills.map((skill) => (
                          <span key={skill} className="text-xs px-1.5 py-0.5 rounded bg-white text-emerald-700 border border-emerald-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="p-6 bg-stone-50">
              <h4 className="text-sm font-medium text-stone-900 mb-3">Get in Touch</h4>
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={`mailto:${group.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {group.contact.email}
                </a>
                {group.contact.slack && (
                  <span className="inline-flex items-center gap-2 text-sm text-stone-600">
                    <MessageSquare className="h-4 w-4" />
                    {group.contact.slack}
                  </span>
                )}
                {group.contact.website && (
                  <a 
                    href={group.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

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

export default function WorkingGroupsPage() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenSignup={() => setIsSignupOpen(true)} />

      {/* Hero Section with Partners */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="max-w-3xl mb-16">
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
                Working Groups
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-normal max-w-2xl mb-8">
                Join specialized research groups pushing the boundaries of AI-driven 
                algorithm discovery. Collaborate with leading researchers and contribute 
                to cutting-edge projects.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{workingGroups.filter(g => g.isRecruiting).length} groups recruiting</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Users className="h-4 w-4" />
                  <span>{workingGroups.length} active groups</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Partners Carousel in Hero */}
          <FadeIn delay={0.3}>
            <div className="border-t border-stone-200 pt-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-medium text-stone-900">Our Partners & Collaborators</h2>
                  <p className="text-sm text-stone-500">Working alongside world-class institutions</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-stone-400">
                  <GraduationCap className="h-4 w-4" />
                  <span>{partners.length} partners</span>
                </div>
              </div>
              <PartnersCarousel partners={partners} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Working Groups Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-violet-700" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                Active Working Groups
              </h2>
            </div>
            <p className="text-stone-500 mb-12 ml-[52px]">Click on any group to see full details</p>
          </FadeIn>

          {/* Research Areas & Impact Tags - Under Working Groups */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-10">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Research Areas */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Research Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {researchAreas.map((area) => (
                      <span 
                        key={area}
                        className="text-sm px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors cursor-default"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Categories */}
                <div>
                  <h3 className="text-sm font-medium text-stone-500 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Impact Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {impactTags.map((tag) => (
                      <span 
                        key={tag.label}
                        className={cn(
                          "inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full",
                          tag.color === "emerald" && "bg-emerald-100 text-emerald-700",
                          tag.color === "rose" && "bg-rose-100 text-rose-700",
                          tag.color === "blue" && "bg-blue-100 text-blue-700",
                          tag.color === "amber" && "bg-amber-100 text-amber-700",
                          tag.color === "violet" && "bg-violet-100 text-violet-700",
                          tag.color === "red" && "bg-red-100 text-red-700"
                        )}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Working Groups Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {workingGroups.map((group, index) => (
              <WorkingGroupCard key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-blue-50 via-violet-50 to-emerald-50 border border-stone-200 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm mb-6">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
                How to Get Involved
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
                Interested in joining a working group? Browse the groups above to find 
                one that matches your interests. Each group lists open positions, 
                contact information, and meeting schedules.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-5 border-stone-300 text-stone-700 hover:bg-white hover:border-stone-400 transition-colors"
                  asChild
                >
                  <a href="mailto:working-groups@aidda.org">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                </Button>
                <Button 
                  className="rounded-full px-8 py-5 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  onClick={() => setIsSignupOpen(true)}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Join AIDDA
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer onOpenSignup={() => setIsSignupOpen(true)} />
      <SignupPopup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </main>
  );
}
