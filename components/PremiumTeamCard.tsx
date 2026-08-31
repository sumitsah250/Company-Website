"use client";

import { Crown, Linkedin, Twitter } from "lucide-react";

interface PremiumTeamCardProps {
  name: string;
  title: string;
  initials: string;
  color: string;
  accentColor: string;
  isLead?: boolean;
}

export default function PremiumTeamCard({
  name,
  title,
  initials,
  color,
  accentColor,
  isLead = false,
}: PremiumTeamCardProps) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-elevated border border-border/30 hover:border-white/20 transition-all duration-700">
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Image area */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Base gradient — grayscale */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b ${color} transition-all duration-700 group-hover:scale-105`}
            style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.9)" }}
          />

          {/* Color reveal */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b ${color} opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105`}
          />

          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          {/* Lead badge */}
          {isLead && (
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 text-white/70" />
            </div>
          )}

          {/* Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-24 h-24 rounded-full bg-gradient-to-br ${accentColor} border-2 border-white/10 flex items-center justify-center backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:border-white/20 group-hover:shadow-xl group-hover:shadow-white/5`}
            >
              <span className="text-2xl font-bold text-white/90 tracking-wider">
                {initials}
              </span>
            </div>
          </div>

          {/* Shine */}
          <div className="absolute inset-0 team-card-shine pointer-events-none" />
        </div>

        {/* Info */}
        <div className="p-5 text-center relative">
          <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors duration-500">
            {name}
          </h3>
          <p className="text-sm text-muted mt-1 group-hover:text-foreground/80 transition-colors duration-500">
            {title}
          </p>

          {/* Social links - appear on hover */}
          <div className="flex items-center justify-center gap-3 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border/30 hover:border-white/20 transition-all">
              <Linkedin className="w-3.5 h-3.5 text-muted hover:text-white/80 transition-colors" />
            </button>
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-border/30 hover:border-white/20 transition-all">
              <Twitter className="w-3.5 h-3.5 text-muted hover:text-white/80 transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700\" />
      </div>
    </div>
  );
}
