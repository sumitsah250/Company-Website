"use client";

import { LucideIcon } from "lucide-react";
import TiltCard from "./TiltCard";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

export default function ProcessStep({ icon: Icon, title, description, step, isLast }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <TiltCard intensity={10} className="mb-6">
        <div className="relative w-16 h-16 rounded-[1.2rem] border border-white/10 bg-white/[0.02] flex items-center justify-center transition-all duration-300">
          <Icon className="w-7 h-7 text-[#f5f1ea]" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#f5f1ea] text-[#05070a] text-[10px] font-semibold flex items-center justify-center shadow-[0_0_25px_rgba(245,241,234,0.15)]">
            {step}
          </div>
        </div>
      </TiltCard>

      <h3 className="text-base font-semibold mb-2 text-[#f5f1ea]">{title}</h3>
      <p className="text-sm text-[#b6b1aa] leading-relaxed max-w-[200px]">{description}</p>

      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
      )}
    </div>
  );
}
