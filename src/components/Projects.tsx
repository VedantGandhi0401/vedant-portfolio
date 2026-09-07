import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/data";
import { SectionHeading } from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Projects" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative flex flex-col p-6 rounded-xl border bg-white dark:bg-zinc-950 transition-all hover:shadow-sm ${
                project.featured
                  ? "border-zinc-200 dark:border-zinc-700 md:col-span-2"
                  : "border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700"
              }`}
            >
              {/* Badges row */}
              <div className="flex items-center gap-2 mb-4">
                {project.featured && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
                    Featured
                  </span>
                )}
                {project.inProgress && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    In Progress
                  </span>
                )}
              </div>

              {/* Title + links */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {project.period}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
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
