import { Download, Eye } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Resume" />

        <div className="mt-12 p-8 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 max-w-lg">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Want to know more?
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
            View my resume for my complete experience, education and achievements.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
            >
              <Download size={15} />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
            >
              <Eye size={15} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
