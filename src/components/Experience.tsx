import { experiences } from "@/data";
import { SectionHeading } from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Experience" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-100 dark:bg-zinc-800 hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="sm:pl-8 relative group">
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors hidden sm:block" />

                <div className="p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0 sm:text-right mt-0.5">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-3 flex flex-col gap-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
