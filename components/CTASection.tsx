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
    <section className="relative overflow-hidden bg-[#F7F3EB] py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8BAA9]/[0.12] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-semibold tracking-[-0.06em] text-[#211F1B] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#211F1B]">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#181612] bg-[#181612] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#F7F3EB] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A2721]"
        >
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
