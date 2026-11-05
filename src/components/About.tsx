import { SectionHeading } from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" />

        <div className="max-w-2xl mt-8">
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a data scientist and ML engineer with a B.Tech in Information Technology from VJTI, Mumbai.
            I specialise in Generative AI, retrieval-augmented generation, and deep learning — with hands-on
            experience building RAG platforms, LLM-powered document intelligence pipelines, and computer vision
            systems. Currently at Axis Mutual Fund, I build enterprise AI tooling that turns large unstructured
            financial corpora into actionable analyst intelligence, and instrument behavioral analytics to drive
            data-informed product decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
