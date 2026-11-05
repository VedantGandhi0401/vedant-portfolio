export const siteConfig = {
  name: "Vedant Gandhi",
  role: "Data Scientist",
  location: "Mumbai, India",
  email: "vagandhi04@gmail.com",
  github: "https://github.com/VedantGandhi04",
  linkedin: "https://www.linkedin.com/in/vedant-gandhi-496308229/",
  tagline: "Data Scientist building LLM pipelines and AI-powered applications.",
  description:
    "Data scientist and ML engineer with a focus on Generative AI, retrieval-augmented generation, and deep learning. Currently at Axis Mutual Fund, building enterprise RAG platforms and LLM-powered document intelligence pipelines for investment research.",
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
];
