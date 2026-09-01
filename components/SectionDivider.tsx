"use client";

interface SectionDividerProps {
  label?: string;
  className?: string;
}

export default function SectionDivider({ label, className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border/50" />
      {label && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#211F1B]">
          {label}
        </span>
      )}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border/50" />
    </div>
  );
}
