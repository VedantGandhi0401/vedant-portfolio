interface SectionHeadingProps {
  label: string;
}

export function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        {label}
      </span>
      <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800 max-w-xs" />
    </div>
  );
}
