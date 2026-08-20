import { SectionHeading } from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" />

        <div className="max-w-2xl mt-8">
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a software engineer with a B.Tech in Information Technology from VJTI, Mumbai.
            I build full-stack web applications and cloud-native systems, with a growing focus on
            Generative AI and retrieval-augmented generation. Currently at Axis Mutual Fund, I work
            across the full stack — from React and Next.js frontends to AWS infrastructure — shipping
            production-ready features and AI-powered tools for investment research.
          </p>
        </div>
      </div>
    </section>
  );
}
