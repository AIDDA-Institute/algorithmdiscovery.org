import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ExternalLink,
  FileText,
  ArrowRight,
  Tag,
  CheckCircle,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import {
  getEventById,
  getAllEvents,
  colorMap,
} from "@/data/events";

interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(parseInt(id));

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = getEventById(parseInt(id));

  if (!event) {
    notFound();
  }

  const colors = colorMap[event.color];
  const Icon = event.icon;
  const isTBD =
    event.date.includes("[TBC]") ||
    event.date.includes("TBD") ||
    event.time.includes("[TBC]") ||
    event.time.includes("TBD");

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm font-normal">All Events</span>
              </Link>
              <span className="text-stone-600">/</span>
              <span className="text-sm text-stone-500">{event.type}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            {/* Event Type Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.lightBg} border ${colors.border} mb-6`}
            >
              <Icon className={`h-4 w-4 ${colors.text}`} />
              <span className={`text-sm font-normal ${colors.text}`}>
                {event.type}
              </span>
              {event.status === "upcoming" && (
                <>
                  <span className="text-stone-600 mx-1">|</span>
                  <span className="text-xs text-emerald-400 font-normal">
                    Upcoming
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-6">
              {event.title}
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 font-normal leading-relaxed">
              {event.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Event Details */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.15}>
            <Card className="bg-slate-800/50 border-stone-700/50">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-stone-800/50">
                      <Calendar className="h-5 w-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 mb-1">Date</p>
                      <p className="text-white font-normal">{event.date}</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-stone-800/50">
                      <Clock className="h-5 w-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 mb-1">Time</p>
                      <p className="text-white font-normal">{event.time}</p>
                    </div>
                  </div>

                  {/* Location */}
                  {event.location && (
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-stone-800/50">
                        <MapPin className="h-5 w-5 text-stone-400" />
                      </div>
                      <div>
                        <p className="text-sm text-stone-500 mb-1">Location</p>
                        <p className="text-white font-normal">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Status */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-stone-800/50">
                      <CheckCircle className="h-5 w-5 text-stone-400" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 mb-1">Status</p>
                      <p
                        className={`font-normal ${event.status === "upcoming"
                            ? "text-emerald-400"
                            : "text-stone-400"
                          }`}
                      >
                        {event.status === "upcoming"
                          ? "Registration Open"
                          : "Event Completed"}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6 bg-stone-700/50" />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {!isTBD && event.calendarUrl && (
                    <Button
                      variant="outline"
                      asChild
                      className="rounded-full border-stone-600 bg-transparent text-white hover:bg-stone-800 hover:text-white transition-colors font-normal"
                    >
                      <a
                        href={event.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Add to Calendar
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}

                  {event.notionUrl && (
                    <Button
                      variant="outline"
                      asChild
                      className="rounded-full border-stone-600 bg-transparent text-white hover:bg-stone-800 hover:text-white transition-colors font-normal"
                    >
                      <a
                        href={event.notionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        View on Notion
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}

                  <Link href="/" className="sm:ml-auto">
                    <Button className="bg-emerald-100/80 hover:bg-emerald-200/80 text-emerald-900 border-0 rounded-full px-6 font-normal transition-colors w-full sm:w-auto">
                      Get Involved
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Long Description */}
      {event.longDescription && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-normal text-white mb-6">
                About This Event
              </h2>
              <div className="prose prose-invert prose-stone max-w-none">
                <p className="text-stone-400 leading-relaxed whitespace-pre-line">
                  {event.longDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Speakers */}
      {event.speakers && event.speakers.length > 0 && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.25}>
              <h2 className="text-2xl font-normal text-white mb-6 flex items-center gap-3">
                <Users className="h-5 w-5 text-stone-400" />
                Speakers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.speakers.map((speaker, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/30 border-stone-700/30"
                  >
                    <CardContent className="p-4">
                      <p className="text-white font-normal">{speaker}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Agenda */}
      {event.agenda && event.agenda.length > 0 && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-normal text-white mb-6">Agenda</h2>
              <div className="space-y-3">
                {event.agenda.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-stone-700/30"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-sm text-emerald-400 font-normal">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-stone-300 pt-1 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.35}>
              <h2 className="text-2xl font-normal text-white mb-6 flex items-center gap-3">
                <Tag className="h-5 w-5 text-stone-400" />
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-stone-800/50 text-stone-400 text-sm font-normal border border-stone-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Back to Events Navigation */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.4}>
            <Separator className="mb-8 bg-stone-800" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="font-normal">Back to All Events</span>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="rounded-full border-stone-600 bg-transparent text-white hover:bg-stone-800 hover:text-white transition-colors font-normal"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
