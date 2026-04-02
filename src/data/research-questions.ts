export interface ResearchQuestion {
  id: string;
  question: string;
  shortDescription: string;
  fullDescription: string;
  motivation: string;
  keyChallenges: string[];
  relatedAreas: string[];
  impact: string[];
  progressStatus: "exploratory" | "active" | "advanced" | "nearing-resolution";
  publications: {
    title: string;
    authors: string[];
    venue: string;
    year: number;
    link?: string;
  }[];
  workingGroups: string[];
}

export const researchQuestions: ResearchQuestion[] = [
  {
    id: "robustness-problem-types",
    question: "Can these frameworks produce algorithms which are robust to a range of problem types?",
    shortDescription: "Investigating the capabilities of AI-discovered algorithms across diverse problem domains.",
    fullDescription: "This research question explores whether current frameworks can produce algorithms that maintain performance across varying problem sizes, structures, and constraints without requiring retraining or significant modification.",
    motivation: "For AI-discovered algorithms to be practically useful, must they demonstrate to work reliably across a wide range of inputs and scenarios?",
    keyChallenges: [
      "Defining appropriate robustness metrics for algorithmic performance",
      "Creating diverse benchmark suites that span problem types",
      "Developing training curricula that encourage generalization",
      "Understanding the theoretical limits of algorithmic transfer learning"
    ],
    relatedAreas: ["Generalization", "Robustness", "Benchmarking", "Transfer Learning"],
    impact: ["High", "Industry"],
    progressStatus: "active",
    publications: [
      {
        title: "Generalization in Neural Algorithmic Reasoning",
        authors: ["J. Smith", "A. Kumar", "L. Chen"],
        venue: "ICML 2024",
        year: 2024,
        link: "#"
      },
      {
        title: "Robustness of Learned Algorithms: A Theoretical Analysis",
        authors: ["M. Johnson", "R. Patel"],
        venue: "NeurIPS 2024",
        year: 2024,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Verification & Safety"]
  },
  {
    id: "overfitting-training-data",
    question: "Do the algorithms these frameworks produce overfit to training data?",
    shortDescription: "Examining whether AI-discovered algorithms memorize training instances rather than learning generalizable principles.",
    fullDescription: "Overfitting is a well-known problem in machine learning. When an AI system discovers an algorithm, it might encode specific patterns from the training distribution rather than discovering the underlying algorithmic principle. This research investigates detection methods, mitigation strategies, and the fundamental tension between training on specific instances and discovering general algorithms.",
    motivation: "If AI-discovered algorithms merely memorize training patterns, they will fail on novel inputs and lack the reliability required for production systems. Understanding and preventing overfitting is essential for trustworthy algorithm discovery.",
    keyChallenges: [
      "Distinguishing between valid algorithmic patterns and training set artifacts",
      "Developing out-of-distribution detection for algorithmic outputs",
      "Creating training regimes that encourage principle discovery over memorization",
      "Measuring algorithmic complexity to detect overfitting"
    ],
    relatedAreas: ["Overfitting", "Generalization", "Algorithmic Complexity", "OOD Detection"],
    impact: ["Critical", "Safety"],
    progressStatus: "active",
    publications: [
      {
        title: "Detecting Overfitting in Neural Program Synthesis",
        authors: ["A. Zhang", "B. Lee", "C. Wang"],
        venue: "ICLR 2024",
        year: 2024,
        link: "#"
      },
      {
        title: "Algorithmic Memorization vs. Discovery: An Empirical Study",
        authors: ["D. Kim", "E. Singh"],
        venue: "AAAI 2025",
        year: 2025,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Verification & Safety"]
  },
  {
    id: "algorithm-mining",
    question: "How far are we from the scenario of 'algorithm mining' where entities with no domain knowledge effectively turn compute into algorithm search?",
    shortDescription: "Exploring the democratization of algorithm discovery and the compute-knowledge tradeoff in AI-driven research.",
    fullDescription: "The vision of 'algorithm mining' represents a paradigm shift where computational resources can substitute for deep domain expertise in discovering novel algorithms. See Richard Suttons: The Bitter Lesson. This research question examines how close we are to this reality, what barriers remain, and what implications it has for research democratization, industry competition, and the future of computer science. It explores the compute-knowledge frontier and whether we're approaching a world where anyone with sufficient compute can discover state-of-the-art algorithms.",
    motivation: "Understanding this trajectory is crucial for anticipating how AI will transform research and industry. It raises important questions about access, equity, and the changing nature of expertise in algorithmic innovation.",
    keyChallenges: [
      "Quantifying the compute-knowledge tradeoff in algorithm discovery",
      "Measuring progress toward fully automated algorithm mining",
      "Understanding the minimum expertise required to guide AI systems effectively",
      "Assessing the democratization potential and access barriers"
    ],
    relatedAreas: ["Democratization", "Compute Scaling", "AutoML", "Research Automation"],
    impact: ["High", "Industry", "Emerging"],
    progressStatus: "exploratory",
    publications: [
      {
        title: "The Compute-Knowledge Frontier in Algorithm Discovery",
        authors: ["J. Anderson", "M. Roberts"],
        venue: "Nature Machine Intelligence",
        year: 2025,
        link: "#"
      },
      {
        title: "Toward Democratized Algorithm Discovery: Progress and Challenges",
        authors: ["L. Chen", "S. Kumar", "R. Patel"],
        venue: "CACM",
        year: 2024,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Neural-Symbolic Integration"]
  },
  {
    id: "novelty-vs-optimization",
    question: "How should we think about novelty of algorithmic method vs. optimization of known methods?",
    shortDescription: "Investigating the balance between discovering fundamentally new algorithmic approaches and optimizing existing ones.",
    fullDescription: "This research question addresses a fundamental tension in algorithm discovery: should we prioritize discovering entirely novel algorithmic paradigms, or focus on optimizing well-understood methods and what entity (if any) should be attributed with the novel idea that led to the new method? Novel approaches may unlock breakthroughs but carry higher risk and verification burden, while optimization of known methods offers more predictable improvements but may hit diminishing returns. This question explores evaluation frameworks, resource allocation strategies, and the criteria for judging progress in algorithmic innovation.",

    motivation: "As AI systems become more capable of both optimization and discovery, we need frameworks to guide research priorities and evaluate contributions. This question is central to defining what constitutes meaningful progress in algorithmic innovation.",
    keyChallenges: [
      "Developing evaluation frameworks that fairly compare novel and optimized methods",
      "Understanding the risk-reward tradeoffs of novel vs. incremental research",
      "Creating benchmarks that reward genuine novelty without sacrificing practicality",
      "Defining criteria for algorithmic innovation"
    ],
    relatedAreas: ["Novelty Detection", "Optimization", "Research Evaluation", "Benchmarking"],
    impact: ["High", "Emerging"],
    progressStatus: "active",
    publications: [
      {
        title: "Novelty vs. Optimization: A Framework for Algorithmic Innovation",
        authors: ["P. Johnson", "A. Williams"],
        venue: "Science",
        year: 2025,
        link: "#"
      },
      {
        title: "Evaluating Progress in AI-Driven Algorithm Discovery",
        authors: ["M. Brown", "K. Lee", "S. Davis"],
        venue: "JACM",
        year: 2024,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Verification & Safety"]
  },
  {
    id: "real-world-applicability",
    question: "How applicable are these frameworks to real world problems, expanding beyond benchmark settings?",
    shortDescription: "Assessing the practical utility of AI-discovered algorithms in production environments and real-world constraints.",
    fullDescription: "While AI-driven algorithm discovery has shown impressive results on standardized benchmarks, the transition to real-world applications presents unique challenges. Real problems often involve messy data, changing requirements, resource constraints, interpretable coding. This research question evaluates how well current frameworks handle these complexities, identifies gaps between benchmark performance and practical utility, and develops methodologies for testing algorithms in realistic conditions.",
    motivation: "For AI-discovered algorithms to achieve widespread adoption, they must demonstrate value in real production environments, not just controlled benchmarks. Understanding the barriers to real-world deployment is essential for directing future research. Companies are springing up that aim to offer AI-discovered algorithms as commercial products, and we will be interacting with them.",
    keyChallenges: [
      "Designing evaluation protocols that reflect real-world complexity",
      "Handling dynamic and changing problem constraints",
      "Integrating with existing systems and infrastructure",
      "Addressing robustness requirements for production environments"
    ],
    relatedAreas: ["Real-World Deployment", "Production Systems", "Benchmarking", "Robustness"],
    impact: ["Critical", "Industry"],
    progressStatus: "active",
    publications: [
      {
        title: "From Benchmarks to Production: Bridging the Gap in Algorithm Discovery",
        authors: ["R. Garcia", "T. Martinez", "L. Johnson"],
        venue: "OSDI 2025",
        year: 2025,
        link: "#"
      },
      {
        title: "Real-World Constraints in AI-Driven Algorithm Design",
        authors: ["S. Lee", "A. Kumar"],
        venue: "HotOS 2024",
        year: 2024,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Distributed Systems & Cloud"]
  },
  {
    id: "opensource-llm-frameworks",
    question: "Is it important to develop frameworks which work well when confined to cheaper opensource LLMs? If so, what are the best practices to make this possible?",
    shortDescription: "Exploring the feasibility and best practices for algorithm discovery using open-source and cost-effective language models.",
    fullDescription: "As large language models become central to algorithm discovery frameworks, there is growing concern about reliance on expensive proprietary APIs. This research question investigates whether effective algorithm discovery is possible using smaller, open-source models, and what techniques can bridge the capability gap. It explores distillation methods, specialized fine-tuning approaches, multi-model ensembles, and architectural innovations that can make open-source alternatives viable for algorithm discovery tasks.",
    motivation: "Democratizing algorithm discovery requires reducing dependence on expensive proprietary models. If open-source alternatives can be made effective, it would enable broader participation in AI-driven research and reduce barriers for academic and independent researchers.",
    keyChallenges: [
      "Quantifying the performance gap between proprietary and open-source models",
      "Developing efficient distillation techniques for algorithmic reasoning",
      "Creating specialized training curricula for smaller models",
      "Designing multi-model architectures that combine open-source models effectively"
    ],
    relatedAreas: ["Open Source", "Model Efficiency", "Distillation", "Democratization"],
    impact: ["High", "Emerging"],
    progressStatus: "exploratory",
    publications: [
      {
        title: "Algorithm Discovery with Open-Source LLMs: A Comparative Study",
        authors: ["M. Zhang", "K. Liu", "J. Wang"],
        venue: "ACL 2025",
        year: 2025,
        link: "#"
      },
      {
        title: "Distilling Algorithmic Reasoning into Smaller Language Models",
        authors: ["A. Patel", "R. Singh", "S. Kumar"],
        venue: "NeurIPS 2024",
        year: 2024,
        link: "#"
      }
    ],
    workingGroups: ["Algorithm Discovery & Synthesis", "Neural-Symbolic Integration"]
  }
];

export const questionCategories = [
  { label: "Robustness & Generalization", color: "emerald", description: "Questions about algorithm reliability across domains" },
  { label: "Real-World Impact", color: "blue", description: "Practical applicability and deployment" },
  { label: "Fundamental Theory", color: "violet", description: "Core theoretical questions" },
  { label: "Democratization", color: "amber", description: "Access and open-source considerations" },
  { label: "Evaluation", color: "rose", description: "How we measure progress and success" },
];

export const progressStatuses = [
  { label: "Exploratory", color: "amber", description: "Early stage, defining the problem space" },
  { label: "Active Research", color: "emerald", description: "Ongoing investigations and experiments" },
  { label: "Advanced", color: "blue", description: "Significant progress, refining solutions" },
  { label: "Nearing Resolution", color: "violet", description: "Approaching consensus or solution" },
];
