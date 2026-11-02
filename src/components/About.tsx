import { SectionHeading } from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" />

        <div className="max-w-2xl mt-8">
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a software engineer with a B.Tech in Information Technology from VJTI, Mumbai.
            I build scalable backend systems and AI-powered applications, with a focus on Java/Spring Boot,
            cloud-native architecture, and retrieval-augmented generation. Currently at Axis Mutual Fund,
            I ship production Java APIs powering investor-facing wealth management features, drive
            performance improvements across B2B and B2C investment platforms, and build enterprise RAG
            pipelines that put proprietary research in analysts&apos; hands in seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
