"use client";

import { LucideIcon } from "lucide-react";
import TiltCard from "./TiltCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({ icon: Icon, title, description, tags }: ServiceCardProps) {
  return (
    <TiltCard intensity={8} className="h-full">
      <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-surface-elevated border border-border/40 hover:border-primary/30 transition-all duration-500 glow-subtle hover:glow-primary">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative card-3d-icon w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-500">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Content */}
        <div className="relative card-3d-content">
          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted leading-relaxed mb-6">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] text-subtle border border-border/30 group-hover:border-primary/20 group-hover:text-muted transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
