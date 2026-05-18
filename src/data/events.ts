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
    abstract?: string;
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
      {
        name: "Ori Press",
        topic: "AlgoTune: Can Language Models Speed Up General-Purpose Numerical Programs?",
        abstract:
          "Can language models speed up math and physics functions from popular Python libraries, such as NumPy or SciPy? To answer this, we built AlgoTune, a benchmark of 154 math, physics, and computer science functions from widely-used Python repositories. We give language models a budget of one dollar to optimize each function. In this talk, we'll go over the benchmark setup and give insights about the interesting ways language models approach this task.",
      },
      {
        name: "Henrique Assumpção",
        topic: "Evolutionary Agents for Scientific Discovery",
        abstract:
          "This talk explores the emerging wave of LLM-driven scientific discovery, focusing on how OSS frameworks can democratize high-level algorithmic search. We will dive into some of the technical details of CodeEvolve, and discuss how open-weight models can match proprietary performance at a fraction of the cost. Finally, we discuss the need for standardized benchmarks to reliably measure progress as we transition toward a future of reproducible, agentic scientific research.",
      },
      {
        name: "Qingfu Zhang",
        topic: "Some Thoughts and Work on LLM4AD",
        abstract:
          "In this talk, I will explain our motivation for using LLM combined with iterative search, primarily evolutionary methods, for automated algorithm design. I will argue that algorithm design can be naturally modelled as an optimization problem in a language space, and that landscape analysis is very important for the development of LLM4AD. I will introduce some of our recent work, including multiobjective EoH for discovering sets of algorithms of different preferences; EoH-S for finding a set of complementary algorithms, whose basic idea is that algorithm design and problem analysis should be approached collaboratively; and multi-modal EoH for leveraging multi-modal information in algorithm development.",
      },
      {
        name: "Robert Tjarko Lange",
        topic: "ShinkaEvolve, Evolved: Faster, Cheaper, in Your Coding Agent",
        abstract:
          "In this talk, I'll share the story of ShinkaEvolve, our open-source framework for sample-efficient program evolution, and reflect on how it fits into a broader research trajectory toward LLM- and agent-driven scientific discovery. I'll start with the motivation: recent progress in scaling inference-time compute has made evolutionary agentic harnesses a surprisingly powerful tool for discovery, but existing systems are sample-inefficient and largely closed-source. I'll then walk through Shinka's core recipe: parent program sampling that balances exploration and exploitation, novelty-based rejection sampling, and bandit-driven LLM ensemble selection. These ingredients let Shinka discover a new state-of-the-art circle packing with just 150 samples, design strong mathematical reasoning harnesses, improve competitive programming solutions, and, most recently, help team Unagi win the 2025 ICFP Programming Contest by optimizing SAT encodings. In the second half, I'll focus on what's changed since Shinka's initial release: substantial throughput optimizations, a cost-aware model selection mechanism that makes ensembles economically sane, and a new CLI that slots Shinka directly into general-purpose coding agents like Claude Code and Codex, turning program evolution into something you can smoothly invoke during everyday development.",
      },
      { name: "Asankhaya Sharma", topic: "OpenEvolve" },
      {
        name: "Federico Bianchi",
        topic: "Learning to Discover at Test Time",
        abstract:
          "How can we use AI to discover a new state of the art for a scientific problem? Prior work in test-time scaling, such as AlphaEvolve, performs search by prompting a frozen LLM. We perform reinforcement learning at test time, so the LLM can continue to train, but now with experience specific to the test problem. This form of continual learning is quite special, because its goal is to produce one great solution rather than many good ones on average, and to solve this very problem rather than generalize to other problems. Therefore, our learning objective and search subroutine are designed to prioritize the most promising solutions. We call this method Test-Time Training to Discover (TTT-Discover). Following prior work, we focus on problems with continuous rewards. We report results for every problem we attempted, across mathematics, GPU kernel engineering, algorithm design, and biology. TTT-Discover sets the new state of the art in almost all of them: Erdős' minimum overlap problem and an autocorrelation inequality; a GPUMode kernel competition, up to 2x faster than prior art; past AtCoder algorithm competitions; and a denoising problem in single-cell analysis. Our solutions are reviewed by experts or the organizers. All our results are achieved with an open model, OpenAI gpt-oss-120b, and can be reproduced with our publicly available code, in contrast to previous best results that required closed frontier models. Our test-time training runs are performed using Tinker, an API by Thinking Machines, with a cost of only a few hundred dollars per problem.",
      },
      {
        name: "Shu Liu, Mert Cemri, and Shubham Agarwal",
        topic: "SkyDiscover: A Flexible Framework for AI-Driven Scientific and Algorithmic Discovery",
        abstract:
          "LLM-driven evolutionary search is emerging as a powerful approach for discovering algorithms and designs, but existing frameworks are difficult to reuse, extend, and compare. We present SkyDiscover, a flexible, adaptive framework for AI-driven scientific and algorithmic discovery. SkyDiscover decomposes the discovery loop into four reusable components: Context Builder, Solution Generator, Evaluator, and Solution Selector, while exposing the control logic above them as a programmable interface. This modular design enables rapid experimentation and even supports adaptive designs where AI can adapt or even optimize the optimization process itself during search. We demonstrate SkyDiscover across more than 200 optimization tasks spanning mathematical optimization, systems design, algorithmic programming, and constrained image generation. Under fixed budgets and shared models, the adaptive algorithms implemented on top of SkyDiscover achieve the strongest open-source performance compared to OpenEvolve, ShinkaEvolve, and GEPA, and match or exceed AlphaEvolve on many tasks. A live demo further showcases end-to-end discovery with real-time monitoring, human-in-the-loop steering, and meta-optimization of the search process.",
      },
      {
        name: "Eliot Cowan",
        topic: "Automated Algorithmic Discovery in Machine Learning",
        abstract:
          "Machine learning progress is increasingly bottlenecked not by compute or data, but by the human bandwidth required to read new papers, formulate hypotheses, run speculative experiments, and translate promising ideas into production systems. This talk argues that the next leap in ML will come from automated algorithmic discovery systems. Rather than treating research as a sequence of one off model improvements, I will describe a practical architecture for continuous discovery: agents that ingest and synthesize the literature, generate and prioritize algorithmic hypotheses, test them against application specific evaluation environments, and ship only the changes that verifiably improve real metrics. Drawing on lessons at Autoscience Institute, including systems that have produced peer reviewed research, won a Kaggle medal, and are now being used to improve production ML models, I will discuss what works, where these systems break, and how to design around failure modes such as hallucinated code, weak evaluation loops, and reward hacking. The goal is to build ML applications that improve themselves as the frontier moves, turning algorithmic discovery from a human bottleneck into a scalable engineering primitive.",
      },
      { name: "Kerry He", topic: "TBD", abstract: "TBD" },
      {
        name: "Alex Goldie",
        topic: "DiscoGen: Learning to Discover Learning Algorithms",
        abstract:
          "Automating the development of machine learning algorithms, or meta-learning, has the potential to unlock new frontiers in the field. However, our ability to learn to discover has been limited by a focus on small, static benchmarks. Motivated by how procedural generation unlocked generalist agents in reinforcement learning, this talk will explore how a similar approach can be applied to algorithm discovery in machine learning. Specifically, I will introduce DiscoGen, a new procedural generator of algorithm discovery tasks. Using DiscoGen, we demonstrate how agents used for algorithm discovery can themselves be optimised in a meta-meta-loop. DiscoGen further establishes principled task design for the field, in particular emphasising the need for meta-train and meta-test distinctions. Finally, the talk will discuss future research ideas enabled by DiscoGen, such as training algorithm world models or other means for optimising discovery agents.",
      }
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
