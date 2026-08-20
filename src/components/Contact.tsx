import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { siteConfig } from "@/data";
import { SectionHeading } from "./SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    display: siteConfig.email,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: siteConfig.github,
    display: "github.com/vedantgandhi",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: siteConfig.linkedin,
    display: "linkedin.com/in/vedantgandhi",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Contact" />

        <div className="mt-12 max-w-md">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Let&apos;s connect.
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            Open to new opportunities, collaborations, or just a good conversation.
          </p>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-950 transition-all"
                >
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">{link.label}</p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                      {link.display}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
