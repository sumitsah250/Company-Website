"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

  const cardContent = (
    <>
      <div className="relative h-48 w-full overflow-hidden bg-[#050505] sm:h-56">
        {image && <Image src={image} alt={`${title} preview`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(to_top,rgba(5,5,5,0.88),transparent_58%)]" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div
            role="link"
            tabIndex={projectLink ? 0 : -1}
            onClick={(event) => {
              if (!projectLink) return;
              event.stopPropagation();
              window.location.assign(projectLink);
            }}
            onKeyDown={(event) => {
              if (!projectLink) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                event.stopPropagation();
                window.location.assign(projectLink);
              }
            }}
            className={`card-3d-content ${projectLink ? "cursor-pointer" : ""}`}
          >
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#202020] bg-[#111111]/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <ArrowUpRight className="h-8 w-8 text-[#F2EFE9]/90" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9B9892]">
              Project Preview
            </span>
          </div>
        </div>
      </div>

      <div className="relative p-6 card-3d-content">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#F2EFE9]/80">
            {category}
          </span>
          {projectLink && (
            <span
              onClick={(event) => {
                event.stopPropagation();
                window.open(projectLink, "_blank", "noopener,noreferrer");
              }}
              aria-label={`Open ${title}`}
              className="inline-flex cursor-pointer text-[#9B9892] transition-colors hover:text-[#F2EFE9]"
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-[#F2EFE9] transition-colors duration-300">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-[#9B9892]">{description}</p>
        {stats && <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-[#F2EFE9]/80">{stats.join("  |  ")}</p>}
        {highlights && <p className="mb-4 text-xs leading-relaxed text-[#686662]">{highlights.join("  |  ")}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#202020] bg-[#111111] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#9B9892]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (!projectLink) {
    return (
      <TiltCard intensity={6} className="h-full">
        <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#202020] bg-[#0C0C0C] transition-all duration-500 hover:-translate-y-1 hover:border-[#292929]">
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
        rel="noreferrer noopener"
        className="group block h-full overflow-hidden rounded-[1.5rem] border border-[#202020] bg-[#0C0C0C] transition-all duration-500 hover:-translate-y-1 hover:border-[#292929]"
      >
        {cardContent}
      </a>
    </TiltCard>
  );
}
