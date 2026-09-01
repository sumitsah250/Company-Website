"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Globe, Play } from "lucide-react";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  highlights?: string[];
  stats?: string[];
  links?: { playStore?: string; github?: string; website?: string };
}

export default function ProjectCard({ title, category, description, tags, image, highlights, stats, links }: ProjectCardProps) {
  const projectLink = links?.website || links?.playStore || links?.github;
  const projectType = links?.website ? "website" : links?.playStore ? "playStore" : links?.github ? "github" : null;
  const projectLabel = projectType === "website" ? "Website" : projectType === "playStore" ? "Play Store" : projectType === "github" ? "GitHub" : "Project Preview";

  const cardContent = (
    <>
      <div className="relative h-48 w-full overflow-hidden bg-[#F1EAE1] sm:h-56">
        {image && <Image src={image} alt={`${title} preview`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_22%),linear-gradient(to_top,rgba(24,22,18,0.12),transparent_58%)]" />
        <div className="pointer-events-none relative z-10 flex h-full items-center justify-center text-center">
          <div className="pointer-events-none mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D8CEC0] bg-[#FFFDF8]/90 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
            <ArrowUpRight className="h-8 w-8 text-[#211F1B]/90" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#211F1B]">
            {projectLabel}
          </span>
        </div>
      </div>

      <div className="relative flex-1 p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#211F1B]">
            {category}
          </span>
          {projectLink && (
            <div className="flex items-center gap-2 text-[#211F1B]">
              {projectType === "website" && <Globe className="h-4 w-4" />}
              {projectType === "playStore" && <Play className="h-4 w-4" />}
              {projectType === "github" && <Github className="h-4 w-4" />}
              {!projectType && <ArrowUpRight className="h-4 w-4" />}
            </div>
          )}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#211F1B] transition-colors duration-300">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#211F1B]">{description}</p>
        {stats && <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[#211F1B]">{stats.join("  |  ")}</p>}
        {highlights && <p className="mb-4 text-xs leading-relaxed text-[#211F1B]">{highlights.join("  |  ")}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D8CEC0] bg-[#FFFFFF] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#211F1B]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const cardClasses = "group relative z-20 flex h-full w-full cursor-pointer pointer-events-auto flex-col overflow-hidden rounded-[1.5rem] border border-[#D8CEC0] bg-[#FFFDF8] text-left no-underline transition-all duration-500 hover:-translate-y-1 hover:border-[#C8BAA9]";

  if (!projectLink) {
    return (
      <TiltCard intensity={6} className="h-full">
        <div className={cardClasses}>
          {cardContent}
        </div>
      </TiltCard>
    );
  }

  return (
    <TiltCard intensity={6} className="h-full">
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} (${projectLabel})`}
        onClick={(event) => {
          event.preventDefault();
          const popup = window.open(projectLink, "_blank", "noopener,noreferrer");

          if (popup) {
            popup.opener = null;
            return;
          }

          window.location.href = projectLink;
        }}
        className={`${cardClasses} relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-[#211F1B]/20`}
        style={{ pointerEvents: "auto" }}
      >
        {cardContent}
      </a>
    </TiltCard>
  );
}
