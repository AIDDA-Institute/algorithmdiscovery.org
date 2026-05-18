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
  lumaUrl?: string;
  calendarUrl?: string;
  location?: string;
  speakers?: {
    name: string;
    topic?: string;
    link?: string;
  }[];
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
    title: "AIDDA 2026",
    type: "Conference",
    description:
      "AIDDA 2026 is a two-day virtual technical conference focused on AI-driven algorithm discovery.",
    longDescription:
      "AIDDA 2026 is a two-day virtual technical conference focused on AI-driven algorithm discovery.\n\nThe event brings together researchers and builders working on LLM-guided evolutionary systems, automated algorithm design, test-time discovery, coding agents, verifiers, benchmarks, and autonomous science systems.\n\nDay 1\n\nOri Press - AlgoTune\n\nHenrique Assumpção - CodeEvolve\n\nQingfu Zhang - LLM4AD\n\nRobert Lange - Sakana AI\n\nAsankhaya Sharma - OpenEvolve\n\nPanel discussion\n\nDay 2\n\nFederico Bianchi - TTT-Discover\n\nShu Liu, Mert Cemri, and Shubham Agarwal - SkyDiscover\n\nElliot Cowen - Autoscience\n\nKerry He - Hiverge\n\nAlex Goldie - DiscoGen\n\nPanel discussion\n\nLive automated experiment:\n\nDuring the event, we will run a live automated discovery experiment in the background. Participants are invited to join an optimization swarm aimed at discovering new algorithms for operations research problems.",
    date: "June 9, 2026 - June 10, 2026",
    time: "9:30 PM GMT +5:30",
    iconName: "Users",
    icon: Users,
    color: "emerald",
    status: "upcoming",
    lumaUrl: "https://luma.com/AIDDA2026",
    location: "Virtual",
    speakers: [
      { name: "Ori Press", topic: "AlgoTune" },
      { name: "Henrique Assumpção", topic: "CodeEvolve" },
      { name: "Qingfu Zhang", topic: "LLM4AD" },
      { name: "Robert Lange", topic: "Sakana AI" },
      { name: "Asankhaya Sharma", topic: "OpenEvolve" },
      { name: "Federico Bianchi", topic: "TTT-Discover" },
      { name: "Shu Liu, Mert Cemri, and Shubham Agarwal", topic: "SkyDiscover" },
      { name: "Elliot Cowen", topic: "Autoscience" },
      { name: "Kerry He", topic: "Hiverge" },
      { name: "Alex Goldie", topic: "DiscoGen" }
    ],
    tags: ["Conference", "Remote", "Networking"],
  },
  {
    id: 2,
    title: "Automated Discovery at Scale",
    type: "Speaker Event",
    description:
      "Frontier AI models have produced novel insights in mathematics, physics, and other domains. How do we expand these trickles of insight into a firehose?",
    longDescription:
      "Join researchers and builders at AGI House SF for an afternoon of talks and discussion on coordinating autonomous researchers at scale to solve the hardest scientific and engineering problems. Frontier AI models have produced novel insights in mathematics, physics, and other domains. How do we expand these trickles of insight into a firehose?",
    date: "Saturday, April 18, 2026",
    time: "1:00 PM - 7:00 PM PDT",
    iconName: "Mic",
    icon: Mic,
    color: "amber",
    status: "past",
    lumaUrl: "https://luma.com/automateddiscovery",
    location: "AGI House SF: 170 St. Germain Ave. San Francisco CA 94114",
    speakers: [
      { name: "Steven Diamond", topic: "An AlphaGo Moment for Numerical Methods" },
      { name: "Henrique Assumpcao", topic: "Evolutionary Agents for Scientific Discovery" },
      { name: "SkyDiscover Team", topic: "A Flexible Framework for AI-Driven Scientific and Algorithmic Discovery", link: "https://skydiscover-ai.github.io/" },
      { name: "John Fletcher", topic: "The Amazing Economics of AI-Assisted Algorithm Discovery" },
      { name: "Additional speakers to be announced" },
    ],
    agenda: [
      "1:00 PM Doors open",
      "1:30 PM Talks begin",
      "5:00 PM Open discussion",
      "5:30 PM Dinner and networking",
      "7:00 PM Close",
    ],
    tags: ["Speaker Event", "San Francisco", "AI Research"],
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
