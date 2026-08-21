"use client";

import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import developersLogo from "../images/developers_logo_icon.svg";

const categories = ["All", "Software", "AI / ML", "Mobile", "Web Platform", "IoT / AI"];

const projects = [
  { title: "Enterprise SaaS Platform", category: "Software", description: "A comprehensive business management platform with real-time analytics, team collaboration, and automated reporting.", tags: ["React", "Node.js", "PostgreSQL"], color: "bg-gradient-to-br from-indigo-950/90 via-blue-950/80 to-slate-950/90" },
  { title: "AI-Powered Analytics Dashboard", category: "AI / ML", description: "Intelligent data visualization platform with predictive insights and natural language query capabilities.", tags: ["Python", "TensorFlow", "D3.js"], color: "bg-gradient-to-br from-violet-950/90 via-purple-950/80 to-slate-950/90" },
  { title: "E-Commerce Mobile App", category: "Mobile", description: "Feature-rich shopping experience with personalized recommendations, secure payments, and real-time inventory.", tags: ["React Native", "Firebase", "Stripe"], color: "bg-gradient-to-br from-emerald-950/90 via-teal-950/80 to-slate-950/90" },
  { title: "Healthcare Management System", category: "Web Platform", description: "Secure patient management, appointment scheduling, and electronic health records with HIPAA compliance.", tags: ["Next.js", "TypeScript", "AWS"], color: "bg-gradient-to-br from-cyan-950/90 via-sky-950/80 to-slate-950/90" },
  { title: "Fintech Payment Gateway", category: "Software", description: "Secure payment processing infrastructure with multi-currency support, fraud detection, and instant settlements.", tags: ["Go", "Redis", "Kubernetes"], color: "bg-gradient-to-br from-amber-950/90 via-orange-950/80 to-slate-950/90" },
  { title: "Smart IoT Dashboard", category: "IoT / AI", description: "Real-time device monitoring, predictive maintenance alerts, and energy optimization for industrial operations.", tags: ["MQTT", "React", "InfluxDB"], color: "bg-gradient-to-br from-rose-950/90 via-red-950/80 to-slate-950/90" },
  { title: "Real Estate Marketplace", category: "Web Platform", description: "Property listing platform with advanced search, virtual tours, and mortgage calculator integration.", tags: ["Next.js", "Prisma", "Mapbox"], color: "bg-gradient-to-br from-sky-950/90 via-blue-950/80 to-slate-950/90" },
  { title: "EdTech Learning Platform", category: "Software", description: "Interactive learning management system with video courses, quizzes, progress tracking, and certification.", tags: ["React", "Django", "AWS"], color: "bg-gradient-to-br from-violet-950/90 via-purple-950/80 to-slate-950/90" },
  { title: "Social Media Analytics Tool", category: "AI / ML", description: "AI-driven social media monitoring with sentiment analysis, trend detection, and automated reporting.", tags: ["Python", "NLP", "React"], color: "bg-gradient-to-br from-fuchsia-950/90 via-pink-950/80 to-slate-950/90" },
];

function Sumix3DObject() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - offsetY) * 24,
      y: (offsetX - 0.5) * 28,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex h-[360px] w-full items-center justify-center perspective-[1400px]"
    >
      <div className="absolute inset-8 rounded-full bg-primary/10 blur-[120px]" />
      <div
        className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.y * 0.2}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_rgba(255,255,255,0.02)_30%,_rgba(2,6,23,0.75)_70%)] shadow-[0_30px_120px_rgba(15,23,42,0.8)]" style={{ transform: "translateZ(55px)" }} />
        <div className="absolute inset-4 rounded-[28px] border border-primary/20 bg-slate-950/75" style={{ transform: "translateZ(30px)" }} />
        <div className="absolute inset-10 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" style={{ transform: "translateZ(80px)" }} />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3" style={{ transform: "translateZ(110px)" }}>
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_15px_35px_rgba(59,130,246,0.18)] sm:h-20 sm:w-20">
            <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
          </div>
          <div className="text-3xl font-black tracking-[-0.08em] text-white sm:text-5xl">SUMIX</div>
        </div>

        <div className="absolute -left-6 top-10 h-12 w-12 rounded-full border border-primary/40 bg-primary/10 blur-[2px]" style={{ transform: "translateZ(90px)" }} />
        <div className="absolute -right-4 bottom-12 h-10 w-10 rounded-full border border-secondary/40 bg-secondary/10 blur-[2px]" style={{ transform: "translateZ(90px)" }} />
        <div className="absolute inset-0 rounded-[32px] border border-white/10" style={{ transform: "rotateX(70deg) translateZ(-60px)" }} />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen relative">
      <ParticleField />
      <Navbar />

      <section className="pt-28 pb-20 sm:pt-32 sm:pb-24 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ScrollReveal direction="up" distance={30}>
              <div className="max-w-3xl">
                <span className="text-sm font-medium text-primary uppercase tracking-[0.15em] mb-6 block">Portfolio</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                  Our<span className="text-gradient"> Latest Work</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted leading-[1.8]">
                  A selection of projects we have built across industries and technologies.
                  Each one represents a unique challenge and a tailored solution.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={30} delay={0.08}>
              <Sumix3DObject />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 bg-surface border-y border-white/[0.04] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-wrap items-center gap-3 mb-16">
              <Filter className="w-4 h-4 text-muted mr-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-white text-background shadow-lg shadow-primary/15"
                      : "bg-white/[0.04] text-muted hover:text-white hover:bg-white/10 border border-white/[0.06]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.title} direction="up" distance={25} delay={i * 0.06}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        subtitle="We would love to hear about it. Every great product starts with a conversation."
        buttonText="Start a Project"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
