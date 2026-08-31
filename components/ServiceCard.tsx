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
      <div className="group relative h-full p-6 sm:p-8 rounded-[1.5rem] bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
        <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative card-3d-icon w-12 h-12 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-500">
          <Icon className="w-6 h-6 text-[#f5f1ea]" />
        </div>

        <div className="relative card-3d-content">
          <h3 className="text-lg font-semibold mb-3 text-[#f5f1ea] transition-colors duration-300">{title}</h3>
          <p className="text-sm text-[#b6b1aa] leading-relaxed mb-6">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-[0.14em] bg-white/[0.02] text-[#8a867e] border border-white/10 transition-all duration-300"
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
