"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const variants = {
  primary:
    "bg-gradient-to-r from-brand-500 to-accent-dark text-white btn-glow hover:from-brand-400 hover:to-accent",
  secondary:
    "bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border)] hover:border-brand-500/50 hover:bg-brand-500/5",
  ghost:
    "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5",
  outline:
    "bg-transparent border border-brand-500/50 text-brand-400 hover:bg-brand-500/10 hover:border-brand-400",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  disabled,
  type = "button",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none font-body";

  const content = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={cn(base, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
