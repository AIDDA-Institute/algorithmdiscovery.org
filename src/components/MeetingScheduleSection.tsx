"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  FileText,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import {
  events,
  colorMap,
  getUpcomingEvents,
  getPastEvents,
} from "@/data/events";
import { EventCard } from "@/components/EventCard";

interface MeetingScheduleSectionProps {
  onOpenSignup?: () => void;
}

export function MeetingScheduleSection({ onOpenSignup }: MeetingScheduleSectionProps) {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

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
                Join our conference, reading groups, technical discussions,
                speaker events, and community gatherings. To add your event to the calendar, please reach out to us at{" "}
                <a
                  href="mailto:events@algorithmdiscovery.org"
                  className="text-stone-900 underline underline-offset-2 hover:text-stone-700 text-white"
                >
                  events@algorithmdiscovery.org
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/events">
                <Button
                  variant="outline"
                  className="w-fit rounded-full px-6 py-5 text-sm font-normal border-stone-600 bg-transparent text-white hover:bg-stone-800 hover:text-white transition-colors"
                >
                  View All Events
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                disabled
                className="w-fit rounded-full px-6 py-5 text-sm font-normal border-stone-700 bg-stone-800/50 text-stone-500 cursor-not-allowed"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Subscribe to Calendar
              </Button>
            </div>
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
              { label: "Hackathon", color: "rose" },
              { label: "Community Event", color: "rose" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colorMap[item.color].lightBg} border ${colorMap[item.color].border}`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${colorMap[item.color].text.replace("text-", "bg-")}`}
                />
                <span
                  className={`text-xs font-normal ${colorMap[item.color].text}`}
                >
                  {item.label}
                </span>
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

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {upcomingEvents.map((event) => (
            <StaggerItem key={event.id} className="h-full">
              <EventCard event={event} onOpenSignup={onOpenSignup} />
            </StaggerItem>
          ))}
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

            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60"
            >
              {pastEvents.map((event) => (
                <StaggerItem key={event.id}>
                  <EventCard event={event} isPast />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </section>
  );
}
