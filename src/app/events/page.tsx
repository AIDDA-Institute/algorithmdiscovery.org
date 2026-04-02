import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Users, BookOpen, Mic } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { getUpcomingEvents, getPastEvents, colorMap } from "@/data/events";
import { EventsGrid } from "@/components/EventsGrid";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Join our conference, reading groups, technical discussions, speaker events, and community gatherings at the AIDDA Institute.",
};

export default function EventsPage() {
  const upcomingCount = getUpcomingEvents().length;
  const pastCount = getPastEvents().length;

  // Event type legend data
  const legendItems = [
    { label: "Conference", color: "emerald", icon: Users },
    { label: "Reading Group", color: "blue", icon: BookOpen },
    // { label: "Technical Discussion", color: "violet" },
    { label: "Speaker Event", color: "amber", icon: Mic },
    // { label: "Community Event", color: "rose" },
  ];

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
                researchers and practitioners in AI Driven Discovery of Algorithms.
              </p>
              <p className="text-lg sm:text-xl text-stone-400 font-normal leading-relaxed">
                To add your event to the calendar, please reach out to us at{" "}
                <a
                  href="mailto:events@algorithmdiscovery.org"
                  className="text-stone-900 underline underline-offset-2 hover:text-stone-700 text-white"
                >
                  events@algorithmdiscovery.org
                </a>
                .
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
              {legendItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colorMap[item.color].lightBg} border ${colorMap[item.color].border}`}
                  >
                    {Icon && <Icon className={`h-3.5 w-3.5 ${colorMap[item.color].text}`} />}
                    <span
                      className={`text-xs font-normal ${colorMap[item.color].text}`}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
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
                ({upcomingCount})
              </span>
            </h2>
          </FadeIn>

          {upcomingCount > 0 ? (
            <EventsGrid section="upcoming" />
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
      {pastCount > 0 && (
        <section className="pb-16 md:pb-24 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <FadeIn>
              <h2 className="text-2xl font-normal text-stone-300 mb-8 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-500" />
                Past Events
                <span className="text-sm text-stone-500 font-normal ml-2">
                  ({pastCount})
                </span>
              </h2>
            </FadeIn>
            <EventsGrid section="past" />
          </div>
        </section>
      )}

      {/* Footer CTA */}
      {/* <section className="pb-16 md:pb-24">
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
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* Simple Footer */}
      <footer className="border-t border-stone-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-stone-500">
              &copy; 2026 AIDDA Institute
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
