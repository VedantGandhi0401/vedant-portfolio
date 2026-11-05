// ─── Shared site config ──────────────────────────────────────────────────────

export const siteConfig = {
  name: "Vedant Gandhi",
  location: "Mumbai, India",
  email: "vagandhi04@gmail.com",
  github: "https://github.com/VedantGandhi04",
  linkedin: "https://www.linkedin.com/in/vedant-gandhi-496308229/",
};

// ─── Types ────────────────────────────────────────────────────────────────────

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

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

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type ProfileData = {
  role: string;
  tagline: string;
  description: string;
  resumePdf: string;
  experiences: Experience[];
  projects: Project[];
  skillGroups: SkillGroup[];
  about: string;
};

// ─── Data Scientist profile ───────────────────────────────────────────────────

export const dataScientistProfile: ProfileData = {
  role: "Data Scientist",
  tagline: "Data Scientist building LLM pipelines and AI-powered applications.",
  description:
    "Data scientist and ML engineer with a focus on Generative AI, retrieval-augmented generation, and deep learning. Currently at Axis Mutual Fund, building enterprise RAG platforms and LLM-powered document intelligence pipelines for investment research.",
  resumePdf: "/resumeV8.pdf",
  about:
    "I'm a data scientist and ML engineer with a B.Tech in Information Technology from VJTI, Mumbai. I specialise in Generative AI, retrieval-augmented generation, and deep learning — with hands-on experience building RAG platforms, LLM-powered document intelligence pipelines, and computer vision systems. Currently at Axis Mutual Fund, I build enterprise AI tooling that turns large unstructured financial corpora into actionable analyst intelligence, and instrument behavioral analytics to drive data-informed product decisions.",
  experiences: [
    {
      company: "Axis Mutual Fund",
      role: "Data Scientist",
      period: "Jun 2025 – Present",
      location: "Mumbai, India",
      bullets: [
        "Built an enterprise RAG platform (LlamaIndex, GPT-4o/Claude, Qdrant, Redis) enabling investment analysts to query and synthesize proprietary research documents, with metadata-based access control and reranking to improve retrieval precision.",
        "Instrumented 200+ GA4 and Google Tag Manager events across investor journeys, applying behavioral analytics to expose funnel drop-off patterns and inform product decisions directly from data.",
        "Designed and deployed LLM-powered document intelligence pipelines over large unstructured financial corpora, cutting analyst research turnaround from days to minutes.",
        "Collaborated with Product and Business stakeholders to translate analytical requirements into production implementations, operating end-to-end from data instrumentation to model serving.",
      ],
    },
  ],
  projects: [
    {
      title: "Investment Research Report Generator",
      description:
        "Cut analyst report-generation time from 2–3 days to under 30 minutes by building an end-to-end LLM pipeline (Amazon Bedrock, LlamaIndex, Qdrant) that ingests annual reports, earnings call transcripts, and financial data to auto-generate research reports and answer ad-hoc questions. Designed the RAG architecture end-to-end — document ingestion, chunking, vector indexing, reranking, and LLM generation — supporting structured report output and free-form Q&A over the same corpus. Solo-built on FastAPI and a serverless AWS stack.",
      tags: [
        "Python",
        "FastAPI",
        "LlamaIndex",
        "Qdrant",
        "Amazon Bedrock",
        "AWS Lambda",
        "S3",
        "API Gateway",
        "DynamoDB",
      ],
      period: "Jul 2025 – Dec 2025",
      featured: true,
    },
    {
      title: "CBASNet – Satellite Change Detection",
      description:
        "Achieved 98.53% classification accuracy on the LEVIR-CD+ satellite imagery dataset by designing a Siamese U-Net enhanced with CBAM attention and ASPP multi-scale pooling for bi-temporal urban change detection. Improved detection of small-scale urban infrastructure changes by combining spatial and channel attention with multi-scale context aggregation — evaluated using Accuracy, Precision, Recall, F1-Score, and IoU.",
      tags: ["PyTorch", "TorchVision", "OpenCV", "NumPy", "Scikit-Learn", "Matplotlib"],
      period: "Jan 2025 – Apr 2025",
    },
  ],
  skillGroups: [
    {
      category: "Languages",
      skills: ["Python", "SQL", "C++"],
    },
    {
      category: "ML / DL",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "LightGBM", "NumPy", "Pandas", "Matplotlib"],
    },
    {
      category: "Generative AI",
      skills: ["LLMs (OpenAI, open-source)", "LlamaIndex", "RAG Pipelines", "Prompt Engineering", "Qdrant"],
    },
    {
      category: "Graph AI",
      skills: ["PyTorch Geometric", "GNN", "GCN", "GAT"],
    },
    {
      category: "Data Engineering",
      skills: ["Apache Spark", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "MLOps / Infra",
      skills: ["Docker", "AWS Bedrock", "S3", "Lambda", "DynamoDB", "Git", "Linux"],
    },
    {
      category: "Concepts",
      skills: ["Feature Engineering", "Imbalanced Learning", "Model Evaluation", "Distributed Systems"],
    },
  ],
};

// ─── Software Engineer profile ────────────────────────────────────────────────

export const softwareEngineerProfile: ProfileData = {
  role: "Software Development Engineer",
  tagline: "Software Engineer building scalable backend systems and AI-powered applications.",
  description:
    "Software engineer experienced in Java/Spring Boot, cloud-native architecture, and Generative AI. Currently at Axis Mutual Fund, shipping production APIs for investor-facing wealth management features and building enterprise RAG pipelines for investment research.",
  resumePdf: "/resumeV7.pdf",
  about:
    "I'm a software engineer with a B.Tech in Information Technology from VJTI, Mumbai. I build scalable backend systems and AI-powered applications, with a focus on Java/Spring Boot, cloud-native architecture, and retrieval-augmented generation. Currently at Axis Mutual Fund, I ship production Java APIs powering investor-facing wealth management features, drive performance improvements across B2B and B2C investment platforms, and build enterprise RAG pipelines that put proprietary research in analysts' hands in seconds.",
  experiences: [
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
  ],
  projects: [
    {
      title: "Investment Research Report Generator",
      description:
        "Cut analyst report-generation time from 2–3 days to under 30 minutes by building an end-to-end LLM pipeline (Amazon Bedrock, LlamaIndex, Qdrant) that ingests annual reports, concall transcripts and financial data to auto-generate research reports and answer ad-hoc questions. Architected the full system solo on FastAPI and a serverless AWS stack (Lambda, API Gateway, S3, DynamoDB), applying Redis caching and metadata-based access control to ensure performant and secure document retrieval.",
      tags: ["Next.js", "FastAPI", "Python", "AWS Bedrock", "S3", "Lambda", "API Gateway", "DynamoDB", "LlamaIndex", "Qdrant", "Redis"],
      period: "Jul 2025 – Dec 2025",
      featured: true,
    },
    {
      title: "CBASNet – Satellite Change Detection",
      description:
        "Achieved 98.53% classification accuracy on the LEVIR-CD+ satellite imagery dataset by designing a Siamese U-Net enhanced with CBAM attention and ASPP multi-scale pooling for urban change detection. Built modular, reproducible preprocessing, training, evaluation and visualization pipelines using PyTorch, OpenCV and NumPy, enabling reliable experimentation at scale.",
      tags: ["PyTorch", "TorchVision", "OpenCV", "NumPy", "Scikit-Learn", "Matplotlib"],
      period: "Jan 2025 – Apr 2025",
    },
  ],
  skillGroups: [
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
  ],
};

// ─── Legacy named exports (used by existing components on the / route) ─────────
// These re-export from the DS profile so the main page keeps working
// without touching every component import.
export const { experiences, projects, skillGroups } = dataScientistProfile;
