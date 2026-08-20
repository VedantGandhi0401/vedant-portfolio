import { siteConfig } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          © {year} {siteConfig.name}
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
