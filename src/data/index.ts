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
      "Developed end-to-end features across frontend and backend for Axis Mutual Fund's B2B and B2C investment platforms using Next.js, React.js and Spring Boot APIs.",
      "Refactored the Add-to-Cart investment journey by decoupling it from the QuickPay flow, improving modularity and enabling independent feature development.",
      "Optimized application performance through SSR, Critical CSS, dynamic imports, lazy loading and Akamai CDN caching, improving Lighthouse scores from 20–30 to 70–80.",
      "Collaborated with Product Managers, QA and Business teams throughout sprint planning, implementation and production release cycles.",
    ],
  },
  {
    company: "Wizzer Advisor Pvt. Ltd.",
    role: "Software Engineer Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Mumbai, India",
    bullets: [
      "Developed production features for an investment advisory platform using Vue.js, Node.js, Redis and Fastify within a small Agile engineering team.",
      "Improved backend performance by integrating Redis caching and migrating selected APIs from Express to Fastify for faster request handling.",
      "Implemented frontend and backend enhancements across investor-facing workflows while collaborating closely with developers during feature releases.",
      "Contributed to production software development using Git-based workflows, debugging and iterative feature delivery.",
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
      "Built an end-to-end LLM-powered pipeline that ingests annual reports, earnings call transcripts, and historical financial data to auto-generate analyst reports and answer ad-hoc research questions. Reduced analyst report-generation time from 2–3 days to under 30 minutes.",
    tags: [
      "Next.js",
      "FastAPI",
      "Python",
      "AWS Bedrock",
      "S3",
      "Lambda",
      "API Gateway",
      "DynamoDB",
    ],
    period: "Jul 2025 - Dec 2025",
    featured: true,
  },
  {
    title: "CBASNet – Satellite Change Detection",
    description:
      "Designed and implemented an end-to-end deep learning pipeline for urban change detection using PyTorch, OpenCV and TorchVision. Built modular preprocessing, training, evaluation and visualization pipelines enabling reproducible experimentation across the LEVIR-CD+ dataset.",
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
    skills: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Fastify", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "S3", "Lambda", "API Gateway", "DynamoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
  {
    category: "Concepts",
    skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "System Design"],
  },
];
