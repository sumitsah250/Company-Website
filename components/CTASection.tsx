"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.06em] mb-6 text-[#f5f1ea]">
          {title}
        </h2>
        <p className="text-lg text-[#b6b1aa] leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/[0.02] text-[#f5f1ea] text-[11px] font-medium uppercase tracking-[0.22em] overflow-hidden transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
        >
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
