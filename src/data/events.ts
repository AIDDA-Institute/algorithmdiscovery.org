import {
  Users,
  BookOpen,
  Mic,
  Code,
  type LucideIcon,
} from "lucide-react";

export interface Event {
  id: number;
  title: string;
  type: string;
  description: string;
  longDescription?: string;
  date: string;
  time: string;
  iconName: string;
  icon: LucideIcon;
  color: string;
  status: "upcoming" | "past";
  notionUrl?: string;
  calendarUrl?: string;
  location?: string;
  speakers?: string[];
  agenda?: string[];
  tags?: string[];
}

// Icon mapping for serialization
export const iconMap: Record<string, LucideIcon> = {
  Users,
  BookOpen,
  Mic,
  Code,
};

export const colorMap: Record<
  string,
  { bg: string; text: string; border: string; lightBg: string }
> = {
  emerald: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    lightBg: "bg-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
    lightBg: "bg-blue-500/10",
  },
  violet: {
    bg: "bg-violet-500/20",
    text: "text-violet-400",
    border: "border-violet-500/30",
    lightBg: "bg-violet-500/10",
  },
  amber: {
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    border: "border-amber-500/30",
    lightBg: "bg-amber-500/10",
  },
  rose: {
    bg: "bg-rose-500/20",
    text: "text-rose-400",
    border: "border-rose-500/30",
    lightBg: "bg-rose-500/10",
  },
};

export const events: Event[] = [
  {
    id: 1,
    title: "Remote Conference",
    type: "Conference",
    description:
      "A half-day of curated talks from the people defining this field. Speakers announced soon.",
    longDescription:
      "Join us for a half-day of curated talks from the people defining the field of algorithm mining. This remote conference brings together researchers, practitioners, and enthusiasts to share insights, discoveries, and visions for the future of AI-driven algorithm discovery. You'll hear from leading experts about breakthrough techniques, real-world applications, and the theoretical foundations that are pushing this field forward. Stay tuned for speaker announcements and the detailed agenda.",
    date: "[TBD]",
    time: "[TBD]",
    iconName: "Users",
    icon: Users,
    color: "emerald",
    status: "upcoming",
    notionUrl: "https://notion.so",
    location: "Remote (Zoom)",
    speakers: ["Speakers TBA"],
    agenda: [
      "Opening remarks",
      "Keynote presentations",
      "Panel discussion",
      "Networking session",
      "Closing remarks",
    ],
    tags: ["Conference", "Remote", "Networking"],
  },
];

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

export function getAllEvents(): Event[] {
  return events;
}

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => e.status === "upcoming");
}

export function getPastEvents(): Event[] {
  return events.filter((e) => e.status === "past");
}
