"use client";

import { Box, ArrowRight, Sparkles, Shield, Zap, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import Floating3D from "@/components/Floating3D";
import ParticleField from "@/components/ParticleField";
import ProductCube3D from "@/components/ProductCube3D";

const products = [
  { name: "Sumix Analytics", tagline: "AI-Powered Business Intelligence", description: "A comprehensive analytics platform that transforms raw data into actionable insights. Features predictive modeling, automated reporting, and real-time dashboards.", status: "In Development", features: ["Real-time data visualization", "Predictive analytics engine", "Custom report builder", "API integrations", "Team collaboration tools"], icon: Sparkles, color: "from-white/[0.04] to-white/[0.02]" },
  { name: "Sumix Cloud", tagline: "Managed Cloud Infrastructure", description: "Enterprise-grade cloud hosting and infrastructure management with automated scaling, security monitoring, and 24/7 support.", status: "In Development", features: ["Auto-scaling infrastructure", "DDoS protection", "Automated backups", "Performance monitoring", "Multi-region deployment"], icon: Zap, color: "from-white/[0.03] to-white/[0.02]" },
  { name: "Sumix Secure", tagline: "Security & Compliance Suite", description: "End-to-end security solution for applications and infrastructure. Includes vulnerability scanning, compliance reporting, and threat detection.", status: "In Development", features: ["Vulnerability scanning", "Compliance automation", "Threat detection", "Access management", "Security audits"], icon: Shield, color: "from-white/[0.03] to-white/[0.02]" },
  { name: "Sumix Automate", tagline: "Workflow Automation Platform", description: "No-code workflow automation that connects your tools and automates repetitive tasks. Build complex automations with a visual drag-and-drop interface.", status: "Coming Soon", features: ["Visual workflow builder", "100+ integrations", "Conditional logic", "Scheduled tasks", "Audit logs"], icon: Clock, color: "from-white/[0.04] to-white/[0.03]" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleField />
      <Navbar />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="up" distance={30}>
              <div>
                <span className="text-sm font-medium text-white/90 uppercase tracking-[0.15em] mb-6 block">Products</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                  Tools We<span className="text-gradient"> Build & Sell</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted leading-[1.8]">
                  In addition to custom client work, we develop our own products to solve common business challenges. These tools represent our commitment to innovation and our expertise in action.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={40} delay={0.2}>
              <div className="hidden lg:flex items-center justify-center">
                <Floating3D speed={0.7} amplitude={10}>
                  <ProductCube3D />
                </Floating3D>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 bg-surface border-y border-white/[0.04] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} direction="up" distance={25} delay={i * 0.1}>
                <TiltCard intensity={6}>
                  <div className="group relative p-8 sm:p-10 rounded-2xl bg-background border border-white/[0.06] hover:border-white/15 transition-all duration-700 h-full glow-subtle hover:glow-subtle">
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        product.status === "Available"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : product.status === "In Development"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : "bg-white/5 text-white/60 border-white/10"
                      }`}>
                        {product.status}
                      </span>
                    </div>

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                      <product.icon className="w-7 h-7 text-white/80" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/70 text-sm font-medium mb-4">{product.tagline}</p>
                    <p className="text-muted leading-[1.8] mb-6">{product.description}</p>

                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        product.status === "Available"
                          ? "bg-white text-background hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02]"
                          : "bg-white/[0.04] text-muted border border-white/[0.06] cursor-not-allowed"
                      }`}
                      disabled={product.status !== "Available"}
                    >
                      {product.status === "Available" ? "Learn More" : "Coming Soon"}
                      {product.status === "Available" && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale" distance={0}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Have a Product Idea?</h2>
              <p className="text-muted leading-[1.8] mb-8">
                We partner with companies to co-build products from concept to market. Whether you need a technical co-founder or a development team, we can help bring your vision to life.
              </p>
              <Link href="/contact" className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-background font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02]">
                <span className="relative z-10">Discuss Your Idea</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Ready to Explore Our Products?"
        subtitle="Get in touch to learn more about our product roadmap, early access programs, and partnership opportunities."
        buttonText="Contact Us"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
