"use client";

import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { EventCard } from "@/components/EventCard";
import { getUpcomingEvents, getPastEvents } from "@/data/events";

interface EventsGridProps {
    section: "upcoming" | "past";
}

export function EventsGrid({ section }: EventsGridProps) {
    const events = section === "upcoming" ? getUpcomingEvents() : getPastEvents();

    return (
        <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {events.map((event) => (
                <StaggerItem key={event.id} className="h-full">
                    <EventCard event={event} isPast={section === "past"} />
                </StaggerItem>
            ))}
        </StaggerContainer>
    );
}
