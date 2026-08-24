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
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
            {step}
          </div>
        </div>
      </TiltCard>

      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed max-w-[200px]">{description}</p>

      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-border via-primary/20 to-border" />
      )}
    </div>
  );
}
