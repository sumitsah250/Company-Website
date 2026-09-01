"use client";

import { Code2, Target, Eye, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TiltCard from "@/components/TiltCard";
import MouseSpotlight from "@/components/MouseSpotlight";
import Floating3D from "@/components/Floating3D";
import ParticleField from "@/components/ParticleField";
import Pyramid3D from "@/components/Pyramid3D";

const values = [
  {
    icon: Target, title: "Purpose-Driven",
    description: "Every project starts with understanding the 'why.' We build technology that serves real business objectives, not just features for features' sake.",
  },
  {
    icon: Eye, title: "Transparency",
    description: "No hidden agendas, no surprise costs. We communicate clearly, document thoroughly, and keep you informed at every stage of development.",
  },
  {
    icon: Heart, title: "Craftsmanship",
    description: "We take pride in our work. Clean code, thoughtful architecture, and pixel-perfect design are non-negotiable standards we hold ourselves to.",
  },
  {
    icon: Code2, title: "Continuous Learning",
    description: "Technology evolves rapidly. We invest in staying ahead — experimenting with new frameworks, adopting best practices, and refining our processes.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleField />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#E9E1D5]/80 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-[#211F1B] uppercase tracking-wider mb-4 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[#211F1B]">
              We Build Technology<span className="text-gradient"> With Purpose</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#211F1B] leading-relaxed">
              Sumix Developers is a technology company focused on building software,
              AI solutions, and digital products that create real business impact. We
              partner with ambitious organizations to transform ideas into production-ready
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 bg-[#F7F3EB] border-y border-[#D8CEC0]/70 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#E7E0D7]/70 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-[#211F1B] uppercase tracking-wider mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#211F1B]">From Code to Impact</h2>
              <div className="space-y-4 text-[#211F1B] leading-relaxed">
                <p>Sumix Developers was founded with a simple belief: technology should solve real problems, not create new ones. In a landscape flooded with generic solutions and half-finished projects, we set out to build a company that prioritizes quality, transparency, and long-term partnerships.</p>
                <p>What started as a small team of engineers has grown into a full-service technology company serving clients across industries. We have built everything from enterprise SaaS platforms to AI-powered analytics dashboards, mobile applications to cloud infrastructure.</p>
                <p>Today, we continue to evolve — embracing new technologies, refining our processes, and expanding our capabilities — while staying true to our core mission: building digital products that move businesses forward.</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <Floating3D speed={0.5} amplitude={8}>
                <Pyramid3D />
              </Floating3D>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <MouseSpotlight>
        <section className="py-24 sm:py-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-[#211F1B] uppercase tracking-wider mb-4 block">Our Principles</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[#211F1B]">What We Stand For</h2>
              <p className="text-[#211F1B] max-w-2xl mx-auto">These core values guide every decision we make and every product we build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <TiltCard key={value.title} intensity={8}>
                  <div className="group p-8 rounded-2xl bg-[#FFFDF8] border border-border/40 hover:border-border/60 transition-all duration-500 h-full glow-subtle hover:glow-subtle">
                    <div className="w-12 h-12 rounded-xl bg-[#EDE6DA] flex items-center justify-center mb-6 border border-[#D8CEC0] transition-all duration-500">
                      <value.icon className="w-6 h-6 text-[#211F1B]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#211F1B] group-hover:text-[#211F1B] transition-colors">{value.title}</h3>
                    <p className="text-[#211F1B] leading-relaxed">{value.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </MouseSpotlight>

      {/* Team Link */}
      <section className="py-24 sm:py-32 bg-[#F7F3EB] border-y border-[#D8CEC0]/70 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D8CEC0] to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-medium text-[#211F1B] uppercase tracking-wider mb-4 block">The People</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#211F1B]">Meet the Minds Behind the Work</h2>
          <p className="text-[#211F1B] leading-relaxed mb-10 max-w-2xl mx-auto">
            Our team is our greatest asset. A collective of engineers, designers, and strategists who share a passion for building products that matter.
          </p>
          <Link 
            href="/team" 
            className="group inline-flex items-center gap-2 text-[#211F1B] hover:text-[#211F1B] transition-colors"
          >
            View the Full Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-medium text-[#211F1B] uppercase tracking-wider mb-4 block">Methodology</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#211F1B]">Our Approach</h2>
            <p className="text-[#211F1B] leading-relaxed">
              We do not believe in one-size-fits-all. Every engagement begins with understanding your unique challenges, goals, and constraints.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Strategic Thinking", description: "Before writing a single line of code, we align on business objectives, user needs, and success metrics." },
              { title: "Technical Excellence", description: "Modern frameworks, clean architecture, and rigorous testing ensure your product is built to last." },
              { title: "Continuous Partnership", description: "Launch is just the beginning. We provide ongoing support, optimization, and strategic guidance." },
            ].map((item, i) => (
              <TiltCard key={item.title} intensity={6}>
                <div className="p-8 rounded-2xl bg-[#FFFDF8] border border-border/40 text-center h-full glow-subtle">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#EDE6DA] border border-[#D8CEC0] flex items-center justify-center mb-4 text-[#211F1B] font-bold text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-[#211F1B]">{item.title}</h3>
                  <p className="text-sm text-[#211F1B] leading-relaxed">{item.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        subtitle="We are always looking for meaningful projects and long-term partnerships. Let us discuss how we can help."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
