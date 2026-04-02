export interface TeamMember {
  name: string;
  role: string;
  institution: string;
  avatar?: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  link?: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

export interface OpenPosition {
  title: string;
  description: string;
  skills: string[];
  commitment: string;
}

export interface WorkingGroup {
  id: string;
  name: string;
  description: string;
  researchAreas: string[];
  impact: string[];
  team: TeamMember[];
  publications: Publication[];
  githubRepos: GitHubRepo[];
  projects: string[];
  openResearchQuestions: string[];
  openPositions: OpenPosition[];
  contact: {
    email: string;
    slack?: string;
    website?: string;
  };
  meetingSchedule: string;
  isRecruiting: boolean;
}

export interface Partner {
  name: string;
  type: "university" | "research" | "industry";
  location: string;
  logo?: string;
}

export const workingGroups: WorkingGroup[] = [
  {
    id: "neural-symbolic",
    name: "Neural-Symbolic Integration",
    description: "Exploring the intersection of neural networks and symbolic reasoning to create more interpretable and robust AI systems for algorithm discovery.",
    researchAreas: ["Neural Networks", "Symbolic AI", "Interpretability", "Reasoning"],
    impact: ["High"],
    team: [
      { name: "Dr. Sarah Chen", role: "Lead Researcher", institution: "MIT" },
      { name: "Prof. Michael Rodriguez", role: "Principal Investigator", institution: "Stanford" },
      { name: "Dr. Aisha Patel", role: "Senior Researcher", institution: "UC Berkeley" },
      { name: "James Liu", role: "PhD Student", institution: "CMU" },
    ],
    publications: [
      {
        title: "NeuroSymbolic Program Synthesis: A Survey",
        authors: ["S. Chen", "M. Rodriguez", "A. Patel"],
        venue: "Journal of Machine Learning Research",
        year: 2025,
        link: "#"
      },
      {
        title: "Bridging the Gap: Differentiable Logic for Neural Networks",
        authors: ["S. Chen", "J. Liu"],
        venue: "NeurIPS 2024",
        year: 2024,
        link: "#"
      },
    ],
    githubRepos: [
      {
        name: "neuro-symbolic-solver",
        description: "A framework for neural-symbolic integration",
        url: "https://github.com/aidda/neuro-symbolic-solver",
        stars: 342,
        language: "Python"
      },
      {
        name: "logic-bert",
        description: "BERT with logical reasoning capabilities",
        url: "https://github.com/aidda/logic-bert",
        stars: 128,
        language: "PyTorch"
      },
    ],
    projects: [
      "AutoFormal: Automatic formalization of mathematical proofs",
      "LogicSynth: Neural-guided logic synthesis for hardware design",
      "RuleLearner: Discovering symbolic rules from neural representations"
    ],
    openResearchQuestions: [
      "How can we effectively combine gradient-based learning with symbolic reasoning?",
      "What are the theoretical limits of neural-symbolic systems?",
      "Can we develop unified frameworks that seamlessly integrate both paradigms?"
    ],
    openPositions: [
      {
        title: "Research Engineer",
        description: "Work on implementing neural-symbolic architectures",
        skills: ["PyTorch", "Symbolic Logic", "Python"],
        commitment: "20 hours/week"
      }
    ],
    contact: {
      email: "neural-symbolic@aidda.org",
      slack: "#neural-symbolic",
      website: "https://neural-symbolic.aidda.org"
    },
    meetingSchedule: "Bi-weekly on Tuesdays at 2 PM EST",
    isRecruiting: true,
  },
  {
    id: "algorithm-discovery",
    name: "Algorithm Discovery & Synthesis",
    description: "Developing AI systems that can autonomously discover novel algorithms for computational problems, from sorting to graph algorithms.",
    researchAreas: ["Program Synthesis", "Reinforcement Learning", "Search Algorithms", "Optimization"],
    impact: ["High", "Industry"],
    team: [
      { name: "Prof. David Kim", role: "Group Lead", institution: "CMU" },
      { name: "Dr. Elena Vasquez", role: "Senior Researcher", institution: "Google Research" },
      { name: "Tom Anderson", role: "Research Engineer", institution: "DeepMind" },
      { name: "Dr. Priya Sharma", role: "Postdoc", institution: "ETH Zurich" },
    ],
    publications: [
      {
        title: "AlphaSort: Deep Reinforcement Learning for Sorting",
        authors: ["D. Kim", "E. Vasquez", "T. Anderson"],
        venue: "Nature",
        year: 2025,
        link: "#"
      },
      {
        title: "Learning to Optimize: A Survey",
        authors: ["E. Vasquez", "P. Sharma"],
        venue: "ICML 2024",
        year: 2024,
        link: "#"
      },
    ],
    githubRepos: [
      {
        name: "algo-synth",
        description: "Neural algorithm synthesis toolkit",
        url: "https://github.com/aidda/algo-synth",
        stars: 892,
        language: "Python"
      },
      {
        name: "opt-net",
        description: "Neural networks for combinatorial optimization",
        url: "https://github.com/aidda/opt-net",
        stars: 567,
        language: "JAX"
      },
    ],
    projects: [
      "AutoSort: Automatically discovering optimal sorting algorithms",
      "GraphSynth: Neural synthesis of graph algorithms",
      "MatrixOps: Learning efficient matrix multiplication patterns"
    ],
    openResearchQuestions: [
      "Can AI systems discover algorithms that humans haven't thought of?",
      "How do we verify the correctness of AI-discovered algorithms?",
      "What is the computational complexity of learning algorithms?"
    ],
    openPositions: [
      {
        title: "PhD Student",
        description: "Research on neural program synthesis",
        skills: ["Deep Learning", "Algorithms", "Python"],
        commitment: "Full-time"
      },
      {
        title: "Research Intern",
        description: "Summer internship on algorithm discovery",
        skills: ["Machine Learning", "Programming"],
        commitment: "3 months"
      }
    ],
    contact: {
      email: "algo-discovery@aidda.org",
      slack: "#algorithm-discovery",
      website: "https://algo-discovery.aidda.org"
    },
    meetingSchedule: "Weekly on Thursdays at 11 AM EST",
    isRecruiting: true,
  },
  {
    id: "verification-safety",
    name: "Verification & Safety",
    description: "Ensuring the safety and correctness of AI-discovered algorithms through formal verification, testing, and robustness analysis.",
    researchAreas: ["Formal Verification", "Safety", "Robustness", "Testing"],
    impact: ["Critical", "Safety"],
    team: [
      { name: "Prof. Anna Schmidt", role: "Group Lead", institution: "ETH Zurich" },
      { name: "Dr. Robert Chang", role: "Senior Researcher", institution: "Microsoft Research" },
      { name: "Lisa Müller", role: "PhD Student", institution: "MPI" },
    ],
    publications: [
      {
        title: "Verified Neural Networks: A Practical Approach",
        authors: ["A. Schmidt", "R. Chang"],
        venue: "CAV 2024",
        year: 2024,
        link: "#"
      },
    ],
    githubRepos: [
      {
        name: "neural-verify",
        description: "Formal verification for neural networks",
        url: "https://github.com/aidda/neural-verify",
        stars: 234,
        language: "Coq"
      },
    ],
    projects: [
      "SafeAlgo: Verified algorithm discovery",
      "RobustCheck: Robustness testing for AI systems",
      "Certify: Certified adversarial robustness"
    ],
    openResearchQuestions: [
      "How can we formally verify properties of neural network-generated algorithms?",
      "What safety guarantees can we provide for AI-discovered code?",
      "How do we balance expressivity with verifiability?"
    ],
    openPositions: [],
    contact: {
      email: "verification@aidda.org",
      slack: "#verification-safety",
      website: "https://verification.aidda.org"
    },
    meetingSchedule: "Bi-weekly on Wednesdays at 9 AM EST",
    isRecruiting: false,
  },
  {
    id: "distributed-systems",
    name: "Distributed Systems & Cloud",
    description: "Applying AI to optimize distributed systems, cloud infrastructure, and large-scale computing problems.",
    researchAreas: ["Distributed Systems", "Cloud Computing", "Scheduling", "Resource Optimization"],
    impact: ["Industry", "Scalability"],
    team: [
      { name: "Dr. Mark Johnson", role: "Lead", institution: "Google" },
      { name: "Dr. Yuki Tanaka", role: "Researcher", institution: "AWS" },
      { name: "Carlos Martinez", role: "PhD Student", institution: "Stanford" },
    ],
    publications: [
      {
        title: "Learned Scheduling for Data Centers",
        authors: ["M. Johnson", "Y. Tanaka"],
        venue: "OSDI 2024",
        year: 2024,
        link: "#"
      },
    ],
    githubRepos: [
      {
        name: "smart-scheduler",
        description: "ML-based job scheduling",
        url: "https://github.com/aidda/smart-scheduler",
        stars: 445,
        language: "Go"
      },
    ],
    projects: [
      "SmartCluster: AI-optimized cluster management",
      "LoadBalancer: Neural load balancing",
      "AutoScale: Predictive auto-scaling"
    ],
    openResearchQuestions: [
      "How can AI improve resource allocation in data centers?",
      "What are the limits of learned scheduling policies?",
      "Can we predict workload patterns for better provisioning?"
    ],
    openPositions: [
      {
        title: "Systems Engineer",
        description: "Build ML infrastructure for distributed systems",
        skills: ["Go", "Kubernetes", "ML"],
        commitment: "Full-time"
      }
    ],
    contact: {
      email: "distributed@aidda.org",
      slack: "#distributed-systems",
      website: "https://distributed.aidda.org"
    },
    meetingSchedule: "Weekly on Mondays at 3 PM EST",
    isRecruiting: true,
  },
  {
    id: "quantum-algorithms",
    name: "Quantum-Classical Interface",
    description: "Bridging classical algorithm discovery with quantum computing, exploring how AI can help design quantum algorithms.",
    researchAreas: ["Quantum Computing", "Hybrid Algorithms", "Quantum ML"],
    impact: ["Emerging", "High"],
    team: [
      { name: "Prof. Quantum Xiao", role: "Lead", institution: "Caltech" },
      { name: "Dr. Emma Wilson", role: "Researcher", institution: "IBM Quantum" },
    ],
    publications: [
      {
        title: "Neural Quantum Circuit Design",
        authors: ["Q. Xiao", "E. Wilson"],
        venue: "Quantum",
        year: 2025,
        link: "#"
      },
    ],
    githubRepos: [
      {
        name: "quantum-learn",
        description: "ML for quantum algorithm design",
        url: "https://github.com/aidda/quantum-learn",
        stars: 156,
        language: "Python"
      },
    ],
    projects: [
      "Q-Synth: Quantum circuit synthesis",
      "HybridOptimizer: Classical-quantum hybrid algorithms",
      "QuantumML: Machine learning on quantum computers"
    ],
    openResearchQuestions: [
      "Can AI help design better quantum algorithms?",
      "What classical problems benefit from quantum acceleration?",
      "How do we bridge the quantum-classical gap?"
    ],
    openPositions: [
      {
        title: "Quantum Researcher",
        description: "Research on quantum-classical algorithms",
        skills: ["Quantum Computing", "Python", "ML"],
        commitment: "Part-time"
      }
    ],
    contact: {
      email: "quantum@aidda.org",
      slack: "#quantum",
      website: "https://quantum.aidda.org"
    },
    meetingSchedule: "Monthly on Fridays at 10 AM EST",
    isRecruiting: true,
  },
];

export const partners: Partner[] = [
  { name: "MIT", type: "university", location: "Cambridge, USA" },
  { name: "Stanford University", type: "university", location: "Stanford, USA" },
  { name: "UC Berkeley", type: "university", location: "Berkeley, USA" },
  { name: "CMU", type: "university", location: "Pittsburgh, USA" },
  { name: "ETH Zurich", type: "university", location: "Zurich, Switzerland" },
  { name: "Google Research", type: "research", location: "Mountain View, USA" },
  { name: "DeepMind", type: "research", location: "London, UK" },
  { name: "Microsoft Research", type: "research", location: "Redmond, USA" },
  { name: "OpenAI", type: "research", location: "San Francisco, USA" },
  { name: "IBM Research", type: "research", location: "Yorktown Heights, USA" },
  { name: "MPI", type: "research", location: "Saarbrücken, Germany" },
  { name: "Caltech", type: "university", location: "Pasadena, USA" },
];

export const researchAreas = [
  "Neural Networks",
  "Symbolic AI",
  "Program Synthesis",
  "Formal Verification",
  "Distributed Systems",
  "Quantum Computing",
  "Reinforcement Learning",
  "Optimization",
  "Interpretability",
  "Safety",
];

export const impactTags = [
  { label: "High Impact", color: "emerald", description: "Transformative potential" },
  { label: "Critical", color: "rose", description: "Safety-critical research" },
  { label: "Industry", color: "blue", description: "Industry applications" },
  { label: "Emerging", color: "amber", description: "Cutting-edge research" },
  { label: "Scalability", color: "violet", description: "Large-scale systems" },
  { label: "Safety", color: "red", description: "Safety and reliability" },
];
