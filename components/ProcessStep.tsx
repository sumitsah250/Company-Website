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
        <div className="relative w-16 h-16 rounded-[1.2rem] border border-border/60 bg-[#FFFDF8] flex items-center justify-center transition-all duration-300 shadow-sm">
          <Icon className="w-7 h-7 text-[#211F1B]" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#211F1B] text-background text-[10px] font-semibold flex items-center justify-center shadow-[0_0_25px_rgba(23,23,23,0.15)]">
            {step}
          </div>
        </div>
      </TiltCard>

      <h3 className="text-base font-semibold mb-2 text-[#211F1B]">{title}</h3>
      <p className="text-sm text-[#211F1B] leading-relaxed max-w-[200px]">{description}</p>

      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-border via-border/80 to-border" />
      )}
    </div>
  );
}
