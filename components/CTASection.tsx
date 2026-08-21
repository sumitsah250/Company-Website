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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-background font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
        >
          <span className="relative z-10">{buttonText}</span>
          <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
        </Link>
      </div>
    </section>
  );
}
