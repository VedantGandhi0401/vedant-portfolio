import { skillGroups } from "@/data";
import { SectionHeading } from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Skills" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
