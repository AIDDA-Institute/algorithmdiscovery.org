"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { Event, colorMap } from "@/data/events";

interface EventCardProps {
    event: Event;
    isPast?: boolean;
    onOpenSignup?: () => void;
}

export function EventCard({ event, isPast = false, onOpenSignup }: EventCardProps) {
    const colors = colorMap[event.color];
    const Icon = event.icon;
    const isTBD =
        event.date.includes("[TBC]") ||
        event.date.includes("TBD") ||
        event.time.includes("[TBC]") ||
        event.time.includes("TBD");

    return (
        <Card
            className={`h-full flex flex-col border-white/10 bg-white/[0.05] shadow-none transition-all duration-300 ${isPast ? "opacity-70 hover:opacity-100 hover:border-white/16 bg-white/[0.03]" : "hover:border-white/18 hover:bg-white/[0.07]"
                }`}
        >
            <CardContent className="p-6 flex flex-col h-full">
                {/* Event Type Badge */}
                <div className="flex items-center justify-between mb-4">
                    <div
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.lightBg} border ${colors.border}`}
                    >
                        <Icon className={`h-3.5 w-3.5 ${colors.text}`} />
                        <span className={`text-xs font-normal ${colors.text}`}>
                            {event.type}
                        </span>
                    </div>
                    <span className={`text-xs font-normal ${isPast ? "text-stone-500" : "text-emerald-300"}`}>
                        {isPast ? "Completed" : "Upcoming"}
                    </span>
                </div>

                {/* Title */}
                <Link href={`/events/${event.id}`}>
                    <h3 className={`font-normal mb-2 underline-offset-4 hover:underline hover:text-emerald-300 transition-colors cursor-pointer ${isPast ? "text-lg text-stone-300" : "text-xl text-white mb-3"}`}>
                        {event.title}
                    </h3>
                </Link>

                {/* Description */}
                <p className={`text-sm font-normal mb-4 flex-grow ${isPast ? "text-stone-500" : "text-stone-400"}`}>
                    {event.description}
                </p>

                {/* Date & Time */}
                <div className={`space-y-2 pt-4 border-t ${isPast ? "border-stone-700/30" : "border-stone-700/50 mb-4"}`}>
                    <div className={`flex items-center gap-2 text-sm ${isPast ? "text-stone-400" : "text-stone-300"}`}>
                        <Calendar className={`h-4 w-4 ${isPast ? "text-stone-600" : "text-stone-500"}`} />
                        <span className="font-normal">{event.date}</span>
                    </div>
                    {!isPast && (
                        <div className="flex items-center gap-2 text-sm text-stone-400">
                            <Clock className="h-4 w-4 text-stone-500" />
                            <span className="font-normal">{event.time}</span>
                        </div>
                    )}
                </div>

                {/* Action Buttons (Only for Upcoming) */}
                {!isPast && (
                    <div className="flex flex-col gap-2 mt-auto">
                        {event.lumaUrl ? (
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="w-full rounded-full border-emerald-500 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-xs font-normal"
                            >
                                <a
                                    href={event.lumaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Register
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </Button>
                        ) : (
                            onOpenSignup ? (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={onOpenSignup}
                                    className="w-full rounded-full border-white/16 bg-transparent text-white hover:bg-white/8 hover:text-white transition-colors text-xs font-normal"
                                >
                                    Get Notified When Registration Opens
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                </Button>
                            ) : (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full rounded-full border-white/16 bg-transparent text-white hover:bg-white/8 hover:text-white transition-colors text-xs font-normal"
                                >
                                    <Link href="/?signup=1">
                                        Get Notified When Registration Opens
                                        <ArrowRight className="h-3 w-3 ml-1" />
                                    </Link>
                                </Button>
                            )
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
                                className="w-full rounded-full border-white/16 bg-transparent text-white hover:bg-white/8 hover:text-white transition-colors text-xs font-normal"
                            >
                                <a href={event.calendarUrl} target="_blank" rel="noopener noreferrer">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    Add to Calendar
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                            </Button>
                        ) : null}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
