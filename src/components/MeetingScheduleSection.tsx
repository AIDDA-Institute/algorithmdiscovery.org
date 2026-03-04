"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Video, Users, BookOpen, Mic, Code, ArrowRight, Clock, ExternalLink, FileText } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

interface Event {
  id: number;
  title: string;
  type: string;
  description: string;
  date: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  status: string;
  notionUrl?: string;
  calendarUrl?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Remote Conference",
    type: "Conference",
    description: "A half-day of curated talks from the people defining this field. Speakers announced soon.",
    date: "[TBD]",
    time: "[TBD]",
    icon: Users,
    color: "emerald",
    status: "upcoming",
    notionUrl: "https://notion.so",
  },
  // {
  //   id: 2,
  //   title: "Evolutionary Algorithms Reading Group",
  //   type: "Reading Group",
  //   description: "Discussing recent papers on neuroevolution, quality diversity, and open-endedness in algorithm discovery.",
  //   date: "Tuesday, March 10, 2026",
  //   time: "14:00 – 15:30 Pacific Time",
  //   icon: BookOpen,
  //   color: "blue",
  //   status: "upcoming",
  // },
  // {
  //   id: 3,
  //   title: "Technical Discussion: LLM Ensemble Strategies",
  //   type: "Technical Discussion",
  //   description: "Deep dive into prompt engineering techniques and ensemble methods for improving evolutionary coding agents.",
  //   date: "Friday, March 13, 2026",
  //   time: "10:00 – 11:30 Pacific Time",
  //   icon: Code,
  //   color: "violet",
  //   status: "upcoming",
  // },
  // {
  //   id: 4,
  //   title: "Guest Speaker: Dr. Jane Smith",
  //   type: "Speaker Event",
  //   description: "Presentation on 'The Future of Automated Discovery' followed by Q&A session with leading researcher from DeepMind.",
  //   date: "Wednesday, March 18, 2026",
  //   time: "16:00 – 17:30 Pacific Time",
  //   icon: Mic,
  //   color: "amber",
  //   status: "upcoming",
  // },
  // {
  //   id: 5,
  //   title: "Community Hackathon Kickoff",
  //   type: "Community Event",
  //   description: "Launch of the quarterly algorithm mining hackathon. Form teams, pick challenges, and start building.",
  //   date: "Monday, March 23, 2026",
  //   time: "09:00 – 10:00 Pacific Time",
  //   icon: Users,
  //   color: "rose",
  //   status: "upcoming",
  // },
  // {
  //   id: 6,
  //   title: "AlphaEvolve Paper Discussion",
  //   type: "Reading Group",
  //   description: "Analysis of DeepMind's AlphaEvolve paper and its implications for evolutionary coding agents.",
  //   date: "February 20, 2026",
  //   time: "14:00 – 15:30 Pacific Time",
  //   icon: BookOpen,
  //   color: "blue",
  //   status: "past",
  // },
];

const colorMap: Record<string, { bg: string; text: string; border: string; lightBg: string }> = {
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30", lightBg: "bg-emerald-500/10" },
  blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30", lightBg: "bg-blue-500/10" },
  violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/30", lightBg: "bg-violet-500/10" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30", lightBg: "bg-amber-500/10" },
  rose: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30", lightBg: "bg-rose-500/10" },
};

export function MeetingScheduleSection() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <section id="schedule" className="bg-slate-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Events Calendar
              </h2>
              <p className="mt-4 text-lg text-stone-400 max-w-2xl font-normal">
                Join our conference, reading groups, technical discussions, speaker events, and community gatherings.
              </p>
            </div>
            <Button
              variant="outline"
              disabled
              className="w-fit rounded-full px-6 py-5 text-sm font-normal border-stone-700 bg-stone-800/50 text-stone-500 cursor-not-allowed"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Subscribe to Calendar
            </Button>
          </div>
        </FadeIn>

        {/* Event Type Legend */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { label: "Conference", color: "emerald" },
              { label: "Reading Group", color: "blue" },
              { label: "Technical Discussion", color: "violet" },
              { label: "Speaker Event", color: "amber" },
              { label: "Community Event", color: "rose" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colorMap[item.color].lightBg} border ${colorMap[item.color].border}`}
              >
                <div className={`w-2 h-2 rounded-full ${colorMap[item.color].text.replace("text-", "bg-")}`} />
                <span className={`text-xs font-normal ${colorMap[item.color].text}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Upcoming Events Grid */}
        <FadeIn delay={0.15}>
          <h3 className="text-xl font-normal text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Upcoming Events
          </h3>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event) => {
            const colors = colorMap[event.color];
            const Icon = event.icon;
            return (
              <StaggerItem key={event.id} className="h-full">
                <Card className="bg-slate-800/50 border-stone-700/50 hover:border-stone-600 transition-all duration-300 h-full group cursor-pointer flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Event Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.lightBg} border ${colors.border}`}>
                        <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
                        <span className={`text-xs font-normal ${colors.text}`}>{event.type}</span>
                      </div>
                      <span className="text-xs text-stone-500 font-normal">{event.status === "upcoming" ? "Upcoming" : "Past"}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-normal text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {event.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-stone-400 mb-4 line-clamp-2 font-normal">
                      {event.description}
                    </p>

                    {/* Date & Time */}
                    <div className="space-y-2 pt-4 border-t border-stone-700/50 mb-4">
                      <div className="flex items-center gap-2 text-sm text-stone-300">
                        <Calendar className="h-4 w-4 text-stone-500" />
                        <span className="font-normal">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-400">
                        <Clock className="h-4 w-4 text-stone-500" />
                        <span className="font-normal">{event.time}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 mt-auto">
                      {/* if date/time is TBD */}
                      {(() => {
                        const isTBD = event.date.includes("[TBC]") || event.date.includes("TBD") || 
                                      event.time.includes("[TBC]") || event.time.includes("TBD");
                        
                        return (
                          <>
                            {/* Notion Link Button */}
                            {event.notionUrl ? (
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="w-full rounded-full border-stone-600 text-black hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                              >
                                <a href={event.notionUrl} target="_blank" rel="noopener noreferrer">
                                  <FileText className="h-3 w-3 mr-1" />
                                  View on Notion
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            ) : null}
                            
                            {/* Calendar Button */}
                            {isTBD ? (
                              <Button
                                variant="outline"
                                size="sm"
                                disabled
                                className="w-full rounded-full border-stone-700 bg-stone-800/50 text-stone-500 cursor-not-allowed text-xs font-normal"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                Date TBD
                              </Button>
                            ) : event.calendarUrl ? (
                              <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="w-full rounded-full border-stone-600 text-black hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                              >
                                <a href={event.calendarUrl} target="_blank" rel="noopener noreferrer">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Add to Calendar
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full rounded-full border-stone-600 text-black hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                Add to Calendar
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Button>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <>
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-normal text-stone-400 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-stone-500" />
                Recent Events
              </h3>
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
              {pastEvents.map((event) => {
                const colors = colorMap[event.color];
                const Icon = event.icon;
                return (
                  <StaggerItem key={event.id}>
                    <Card className="bg-slate-800/30 border-stone-700/30 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.lightBg} border ${colors.border}`}>
                            <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
                            <span className={`text-xs font-normal ${colors.text}`}>{event.type}</span>
                          </div>
                          <span className="text-xs text-stone-500 font-normal">Completed</span>
                        </div>

                        <h4 className="text-lg font-normal text-stone-300 mb-2">
                          {event.title}
                        </h4>

                        <p className="text-sm text-stone-500 mb-4 line-clamp-2 font-normal">
                          {event.description}
                        </p>

                        <div className="space-y-2 pt-4 border-t border-stone-700/30">
                          <div className="flex items-center gap-2 text-sm text-stone-400">
                            <Calendar className="h-4 w-4 text-stone-600" />
                            <span className="font-normal">{event.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </>
        )}
      </div>
    </section>
  );
}
