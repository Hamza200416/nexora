import { cn } from "@/lib/utils";

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
        "bg-brand-500/10 text-brand-400 border border-brand-500/20 font-mono",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
      {children}
    </span>
  );
}
