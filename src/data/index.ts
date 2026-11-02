export const siteConfig = {
  name: "Vedant Gandhi",
  role: "Software Development Engineer",
  location: "Mumbai, India",
  email: "vagandhi04@gmail.com",
  github: "https://github.com/VedantGandhi04",
  linkedin: "https://www.linkedin.com/in/vedant-gandhi-496308229/",
  tagline: "Software Engineer building scalable products and AI-powered applications.",
  description:
    "Software engineer experienced in full-stack development, cloud technologies, and Generative AI. Currently building digital products and AI-powered solutions at Axis Mutual Fund.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Axis Mutual Fund",
    role: "Software Development Engineer",
    period: "Jun 2025 – Present",
    location: "Mumbai, India",
    bullets: [
      "Engineered production Java/Spring Boot APIs powering investor-facing wealth management features across SIP, Lump Sum and Goal Planning workflows on a regulated fintech platform at scale.",
      "Improved Lighthouse scores from 20–30 to 70–80 by applying SSR, Critical CSS, Akamai CDN caching and lazy loading — diagnosing and resolving production performance bottlenecks across B2B and B2C investment platforms.",
      "Built an enterprise RAG platform (LlamaIndex, GPT-4o/Claude, Qdrant, Redis) enabling investment analysts to securely query proprietary research documents, with metadata-based access control preventing document leakage.",
      "Collaborated directly with Product, QA, and Business teams across sprint planning and production release cycles to deliver financial features in an Agile environment.",
    ],
  },
  {
    company: "Wizzer Advisor Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Mumbai, India",
    bullets: [
      "Reduced API response times by integrating Redis caching for high-frequency investment data queries and migrating hot endpoints from Express to Fastify, cutting redundant database roundtrips.",
      "Built and optimised Node.js backend services for an investment advisory platform, delivering production enhancements within a small Agile team.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  period?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    title: "Investment Research Report Generator",
    description:
      "Cut analyst report-generation time from 2–3 days to under 30 minutes by building an end-to-end LLM pipeline (Amazon Bedrock, LlamaIndex, Qdrant) that ingests annual reports, concall transcripts and financial data to auto-generate research reports and answer ad-hoc questions. Architected the full system solo on FastAPI and a serverless AWS stack (Lambda, API Gateway, S3, DynamoDB), applying Redis caching and metadata-based access control to ensure performant and secure document retrieval.",
    tags: [
      "Next.js",
      "FastAPI",
      "Python",
      "AWS Bedrock",
      "S3",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "LlamaIndex",
      "Qdrant",
      "Redis",
    ],
    period: "Jul 2025 – Dec 2025",
    featured: true,
  },
  {
    title: "CBASNet – Satellite Change Detection",
    description:
      "Achieved 98.53% classification accuracy on the LEVIR-CD+ satellite imagery dataset by designing a Siamese U-Net enhanced with CBAM attention and ASPP multi-scale pooling for urban change detection. Built modular, reproducible preprocessing, training, evaluation and visualization pipelines using PyTorch, OpenCV and NumPy, enabling reliable experimentation at scale.",
    tags: [
      "PyTorch",
      "TorchVision",
      "OpenCV",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
    ],
    period: "Jan 2025 – Apr 2025",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Node.js", "Express.js", "Fastify", "REST APIs", "Microservices"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"],
  },
  {
    category: "Messaging",
    skills: ["Apache Kafka"],
  },
  {
    category: "DevOps",
    skills: ["Linux", "Nginx", "Docker", "Jenkins", "GitHub", "CI/CD"],
  },
  {
    category: "Concepts",
    skills: ["System Design", "OOP", "Agile", "Production Support", "Distributed Systems"],
  },
];
