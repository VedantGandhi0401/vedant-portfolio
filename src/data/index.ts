export const siteConfig = {
  name: "Vedant Gandhi",
  role: "Software Engineer",
  location: "Mumbai, India",
  email: "vedantgandhi@example.com", // update with real email
  github: "https://github.com/vedantgandhi", // update with real URL
  linkedin: "https://linkedin.com/in/vedantgandhi", // update with real URL
  tagline: "Software Engineer building scalable products and AI-powered applications.",
  description:
    "Software engineer experienced in full-stack development, cloud technologies, and Generative AI. Currently building digital products and AI-powered solutions at Axis Mutual Fund.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Axis Mutual Fund",
    role: "Software Engineer / Management Trainee – Digital Technology",
    period: "June 2025 – Present",
    bullets: [
      "Full-stack development with Next.js and React",
      "REST API integrations and performance optimization",
      "Analytics instrumentation with GA4",
      "AI-powered investment research and report generation",
      "Cloud collaboration on AWS infrastructure",
    ],
  },
  {
    company: "Wizzer Advisor",
    role: "Software Engineer Intern",
    period: "June 2024 – August 2024",
    bullets: [
      "Built backend services with Fastify and Redis",
      "Reduced database load by 30% through caching and query optimization",
      "Achieved response times consistently under 200 ms",
    ],
  },
  {
    company: "NPCI",
    role: "Data Science Intern",
    period: "June 2024 – August 2024",
    bullets: [
      "Developed fraud and AML detection models",
      "Feature engineering with SQL across large transaction datasets",
      "Implemented Actor-Critic reinforcement learning model",
      "Achieved F1 score of 0.82 on fraud detection",
    ],
  },
  {
    company: "Techligence",
    role: "Software Development Engineer Intern",
    period: "November 2023 – February 2024",
    bullets: [
      "Built interactive UI components with React and Blockly",
      "State management with Redux",
      "Contributed to the LogicBlocks visual programming product",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Investment Research Report Generator",
    description:
      "An AI-powered RAG platform that retrieves information from private financial documents and generates structured, citation-backed investment reports.",
    tags: [
      "AWS Bedrock",
      "RAG",
      "Amazon S3",
      "S3 Vectors",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Next.js",
      "React",
    ],
    featured: true,
  },
  {
    title: "Policy Tracker",
    description:
      "An AI-powered platform that monitors subscribed policies and regulatory documents, detects changes, and generates concise summaries explaining what changed.",
    tags: ["Next.js", "Python", "Playwright", "Apify", "LLMs", "RAG", "AWS"],
    inProgress: true,
  },
  {
    title: "GoCLEAN",
    description:
      "A full-stack web application connecting users with verified waste management and sanitation services, streamlining booking and service tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C/C++"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Fastify", "Express", "REST APIs"],
  },
  {
    category: "AI",
    skills: ["RAG", "LLMs", "Generative AI", "Amazon Bedrock"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "S3", "Lambda", "API Gateway", "DynamoDB"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Redis"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Bitbucket", "Linux"],
  },
];
