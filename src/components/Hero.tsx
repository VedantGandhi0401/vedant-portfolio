"use client";

import { FileText, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { siteConfig } from "@/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Subtle top label */}
        <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-6">
          Mumbai, India
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mb-6 max-w-2xl">
          {siteConfig.tagline}
        </p>

        {/* Description */}
        <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-10">
          {siteConfig.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            <FileText size={15} />
            View Resume
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <GithubIcon size={15} />
            GitHub
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
