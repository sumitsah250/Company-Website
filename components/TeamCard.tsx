"use client";

interface TeamCardProps {
  name: string;
  title: string;
  initials: string;
  color: string;
  accentColor?: string;
}

export default function TeamCard({ name, title, initials, color, accentColor = "from-primary/40 to-secondary/30" }: TeamCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/40 hover:border-primary/30 transition-all duration-700">
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Base gradient — grayscale by default */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b ${color} transition-all duration-700 group-hover:scale-105`}
          style={{ filter: "grayscale(100%) contrast(1.05)" }}
        />

        {/* Color reveal layer */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105`}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Avatar circle with initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`w-28 h-28 rounded-full bg-gradient-to-br ${accentColor} border-2 border-white/10 flex items-center justify-center backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20`}
          >
            <span className="text-2xl font-bold text-white/90 tracking-wide">
              {initials}
            </span>
          </div>
        </div>

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 team-card-shine pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-5 text-center relative z-10">
        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-500">
          {name}
        </h3>
        <p className="text-sm text-muted mt-1 group-hover:text-foreground transition-colors duration-500">
          {title}
        </p>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
