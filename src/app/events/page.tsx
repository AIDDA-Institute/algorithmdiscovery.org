import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  FileText,
  ChevronLeft,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import {
  events,
  colorMap,
  getUpcomingEvents,
  getPastEvents,
} from "@/data/events";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Join our conference, reading groups, technical discussions, speaker events, and community gatherings at the Institute for Algorithm Mining.",
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors mb-8"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm font-normal">Back to Home</span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-6">
                Events Calendar
              </h1>
              <p className="text-lg sm:text-xl text-stone-400 font-normal leading-relaxed">
                Join our conference, reading groups, technical discussions,
                speaker events, and community gatherings. Connect with
                researchers and practitioners in algorithm mining.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Event Type Legend */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <h2 className="text-2xl font-normal text-white mb-8 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Upcoming Events
              <span className="text-sm text-stone-500 font-normal ml-2">
                ({upcomingEvents.length})
              </span>
            </h2>
          </FadeIn>

          {upcomingEvents.length > 0 ? (
            <StaggerContainer
              staggerDelay={0.1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    <Card className="bg-slate-800/50 border-stone-700/50 hover:border-stone-500 transition-all duration-300 h-full flex flex-col">
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
                          <span className="text-xs text-emerald-400 font-normal">
                            Upcoming
                          </span>
                        </div>

                        {/* Title */}
                        <Link href={`/events/${event.id}`}>
                          <h3 className="text-xl font-normal text-white mb-3 hover:text-emerald-400 transition-colors cursor-pointer">
                            {event.title}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="text-sm text-stone-400 mb-4 line-clamp-3 font-normal flex-grow">
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
                          <Link href={`/events/${event.id}`} className="w-full">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full rounded-full border-stone-600 bg-transparent text-white hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
                            >
                              View Details
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </Link>

                          {event.notionUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full rounded-full border-stone-600 bg-transparent text-stone-300 hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
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

                          {!isTBD && event.calendarUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full rounded-full border-stone-600 bg-transparent text-stone-300 hover:bg-stone-800 hover:text-white transition-colors text-xs font-normal"
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
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn delay={0.25}>
              <div className="text-center py-16 bg-slate-800/30 rounded-xl border border-stone-700/30">
                <Calendar className="h-12 w-12 text-stone-600 mx-auto mb-4" />
                <h3 className="text-lg font-normal text-stone-300 mb-2">
                  No upcoming events
                </h3>
                <p className="text-sm text-stone-500">
                  Check back soon for new events or subscribe to our calendar.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="pb-16 md:pb-24 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <FadeIn>
              <h2 className="text-2xl font-normal text-stone-300 mb-8 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-500" />
                Past Events
                <span className="text-sm text-stone-500 font-normal ml-2">
                  ({pastEvents.length})
                </span>
              </h2>
            </FadeIn>

            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {pastEvents.map((event) => {
                const colors = colorMap[event.color];
                const Icon = event.icon;
                return (
                  <StaggerItem key={event.id} className="h-full">
                    <Card className="bg-slate-800/30 border-stone-700/30 h-full hover:border-stone-600/50 transition-all duration-300 opacity-70 hover:opacity-100">
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
                          <h3 className="text-lg font-normal text-stone-300 mb-2 hover:text-emerald-400 transition-colors cursor-pointer">
                            {event.title}
                          </h3>
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
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-gradient-to-r from-emerald-900/30 to-slate-800/30 rounded-2xl p-8 md:p-12 border border-emerald-500/20">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
                  Want to stay updated?
                </h2>
                <p className="text-stone-400 mb-6 font-normal">
                  Join our community to receive notifications about upcoming
                  events, new research, and opportunities to get involved.
                </p>
                <Link href="/">
                  <Button className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-8 py-5 text-sm font-normal transition-colors">
                    Get Involved
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-stone-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-stone-500">
              &copy; 2026 Institute for Algorithm Mining
            </div>
            <Link
              href="/"
              className="text-sm text-stone-400 hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
