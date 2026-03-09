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

export function MeetingScheduleSection() {
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
                speaker events, and community gatherings.
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
          {upcomingEvents.map((event) => {
            const colors = colorMap[event.color];
            const Icon = event.icon;
            const isTBD =
              event.date.includes("[TBC]") ||
              event.date.includes("TBD") ||
              event.time.includes("[TBC]") ||
              event.time.includes("TBD");

            return (
              <StaggerItem key={event.id} className="h-full">
                <Card className="bg-slate-800/50 border-stone-700/50 hover:border-stone-600 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Event Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.lightBg} border ${colors.border}`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
                        <span
                          className={`text-xs font-normal ${colors.text}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 font-normal">
                        {event.status === "upcoming" ? "Upcoming" : "Past"}
                      </span>
                    </div>

                    {/* Title - Clickable Link */}
                    <Link href={`/events/${event.id}`}>
                      <h4 className="text-lg font-normal text-white mb-2 hover:text-emerald-400 transition-colors cursor-pointer">
                        {event.title}
                      </h4>
                    </Link>

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
                      {/* View Details Button */}
                      <Link href={`/events/${event.id}`} className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-full border-stone-600 text-black hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                        >
                          View Details
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>

                      {/* Notion Link Button */}
                      {event.notionUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full rounded-full border-stone-600 text-black hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                        >
                          <a
                            href={event.notionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="h-3 w-3 mr-1" />
                            View on Notion
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      )}

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
                          <a
                            href={event.calendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            Add to Calendar
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      ) : null}
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

            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60"
            >
              {pastEvents.map((event) => {
                const colors = colorMap[event.color];
                const Icon = event.icon;
                return (
                  <StaggerItem key={event.id}>
                    <Card className="bg-slate-800/30 border-stone-700/30 h-full hover:border-stone-600/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.lightBg} border ${colors.border}`}
                          >
                            <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
                            <span
                              className={`text-xs font-normal ${colors.text}`}
                            >
                              {event.type}
                            </span>
                          </div>
                          <span className="text-xs text-stone-500 font-normal">
                            Completed
                          </span>
                        </div>

                        <Link href={`/events/${event.id}`}>
                          <h4 className="text-lg font-normal text-stone-300 mb-2 hover:text-emerald-400 transition-colors cursor-pointer">
                            {event.title}
                          </h4>
                        </Link>

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
