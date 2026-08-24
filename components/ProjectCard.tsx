"use client";

import { ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
}

export default function ProjectCard({ title, category, description, tags, color }: ProjectCardProps) {
  return (
    <TiltCard intensity={6} className="h-full">
      <div className="group relative h-full rounded-2xl bg-surface-elevated border border-border/40 hover:border-primary/30 transition-all duration-500 overflow-hidden glow-subtle hover:glow-primary">
        {/* Image Placeholder with 3D depth */}
        <div className={`h-48 sm:h-56 w-full ${color} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/80 to-transparent" />
          <div className="relative text-center card-3d-content">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
              <ArrowUpRight className="w-8 h-8 text-white/90" />
            </div>
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
              Project Preview
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 card-3d-content">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] text-subtle border border-border/30"
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
