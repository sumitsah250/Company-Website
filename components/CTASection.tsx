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
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F2EFE9]/[0.02] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-semibold tracking-[-0.06em] text-[#F2EFE9] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#9B9892]">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#292929] bg-[#F2EFE9] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3A3A3A]"
        >
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
