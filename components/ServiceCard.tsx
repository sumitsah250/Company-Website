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
      <div className="group relative h-full rounded-[1.5rem] border border-[#D8CEC0] bg-[#FFFDF8] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C8BAA9] sm:p-8">
        <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(24,22,18,0.04),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D8CEC0] bg-[#EDE6DA] transition-all duration-500 group-hover:border-[#C8BAA9]">
          <Icon className="h-6 w-6 text-[#211F1B]" />
        </div>

        <div className="relative">
          <h3 className="mb-3 text-lg font-semibold text-[#211F1B] transition-colors duration-300">{title}</h3>
          <p className="mb-6 text-sm leading-relaxed text-[#211F1B]">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D8CEC0] bg-[#FFFFFF] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#211F1B] transition-all duration-300"
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
