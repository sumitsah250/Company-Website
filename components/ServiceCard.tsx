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
      <div className="group relative h-full rounded-[1.5rem] border border-[#202020] bg-[#0C0C0C] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#292929] sm:p-8">
        <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#202020] bg-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 group-hover:border-[#292929]">
          <Icon className="h-6 w-6 text-[#F2EFE9]" />
        </div>

        <div className="relative">
          <h3 className="mb-3 text-lg font-semibold text-[#F2EFE9] transition-colors duration-300">{title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-[#9B9892]">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#202020] bg-[#111111] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#9B9892] transition-all duration-300"
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
