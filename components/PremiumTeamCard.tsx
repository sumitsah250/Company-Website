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
      <div className="relative overflow-hidden rounded-2xl bg-[#FFFDF8] border border-[#D8CEC0] hover:border-[#C8BAA9] transition-all duration-700">
        {/* Top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8BAA9]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
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
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#FFFDF8]/80 border border-[#D8CEC0] backdrop-blur-sm">
              <Crown className="w-3.5 h-3.5 text-[#211F1B]/80" />
            </div>
          )}

          {/* Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-24 h-24 rounded-full bg-gradient-to-br ${accentColor} border-2 border-[#D8CEC0] flex items-center justify-center backdrop-blur-sm transition-all duration-700 group-hover:scale-110 group-hover:border-[#C8BAA9] group-hover:shadow-xl group-hover:shadow-[rgba(60,45,30,0.08)]`}
            >
              <span className="text-2xl font-bold text-[#211F1B]/90 tracking-wider">
                {initials}
              </span>
            </div>
          </div>

          {/* Shine */}
          <div className="absolute inset-0 team-card-shine pointer-events-none" />
        </div>

        {/* Info */}
        <div className="p-5 text-center relative">
          <h3 className="text-lg font-semibold text-[#211F1B] group-hover:text-[#211F1B] transition-colors duration-500">
            {name}
          </h3>
          <p className="text-sm text-[#211F1B] mt-1 group-hover:text-[#211F1B] transition-colors duration-500">
            {title}
          </p>

          {/* Social links - appear on hover */}
          <div className="flex items-center justify-center gap-3 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <button className="p-2 rounded-lg bg-[#F7F3EB] hover:bg-[#EEE5D8] border border-[#D8CEC0] hover:border-[#C8BAA9] transition-all">
              <Linkedin className="w-3.5 h-3.5 text-[#211F1B] hover:text-[#211F1B] transition-colors" />
            </button>
            <button className="p-2 rounded-lg bg-[#F7F3EB] hover:bg-[#EEE5D8] border border-[#D8CEC0] hover:border-[#C8BAA9] transition-all">
              <Twitter className="w-3.5 h-3.5 text-[#211F1B] hover:text-[#211F1B] transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8BAA9]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </div>
  );
}
