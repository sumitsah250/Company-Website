"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Code2, Smartphone, Globe, Brain, Megaphone, Palette,
  FileText, Lightbulb, Server, Search, Map, PenTool,
  Hammer, Rocket, TrendingUp, CheckCircle2, ArrowRight,
  Zap, Shield, Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import ProcessStep from "@/components/ProcessStep";
import ParticleField from "@/components/ParticleField";
import FadeIn from "@/components/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import ParallaxWrapper from "@/components/ParallaxWrapper";

const services = [
  { icon: Code2, title: "Software Development", description: "Custom software solutions built with modern architecture, clean code, and scalable infrastructure to solve complex business problems.", tags: ["Web Apps", "Enterprise", "APIs", "Cloud"] },
  { icon: Globe, title: "Web Development", description: "High-performance websites and web applications using cutting-edge frameworks, optimized for speed, SEO, and user experience.", tags: ["React", "Next.js", "Node.js", "Full-Stack"] },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile applications designed for iOS and Android with intuitive interfaces and robust functionality.", tags: ["iOS", "Android", "React Native", "Flutter"] },
  { icon: Brain, title: "AI & Machine Learning", description: "Intelligent systems that automate processes, extract insights from data, and create predictive models to drive decision-making.", tags: ["NLP", "Computer Vision", "Predictive", "Automation"] },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven marketing strategies that increase visibility, engage audiences, and convert leads into loyal customers.", tags: ["SEO", "PPC", "Social", "Analytics"] },
  { icon: Palette, title: "Creative & Media", description: "Stunning visual design, brand identity, and multimedia content that captures attention and communicates your story effectively.", tags: ["Branding", "UI/UX", "Motion", "Video"] },
  { icon: FileText, title: "Content & Copywriting", description: "Compelling content strategies and copy that resonates with your audience, builds trust, and drives meaningful engagement.", tags: ["Strategy", "SEO Copy", "Blogs", "Technical"] },
  { icon: Lightbulb, title: "IT Consulting", description: "Strategic technology consulting to align your IT infrastructure with business goals, optimize operations, and plan for growth.", tags: ["Strategy", "Architecture", "Audit", "Roadmap"] },
  { icon: Server, title: "Server & Hosting", description: "Reliable, secure, and scalable hosting solutions with 24/7 monitoring, automated backups, and performance optimization.", tags: ["Cloud", "DevOps", "Security", "Monitoring"] },
];

const projects = [
  { title: "Enterprise SaaS Platform", category: "Software", description: "A comprehensive business management platform with real-time analytics, team collaboration, and automated reporting.", tags: ["React", "Node.js", "PostgreSQL"], color: "bg-gradient-to-br from-indigo-950/90 via-blue-950/80 to-slate-950/90" },
  { title: "AI-Powered Analytics Dashboard", category: "AI / ML", description: "Intelligent data visualization platform with predictive insights and natural language query capabilities.", tags: ["Python", "TensorFlow", "D3.js"], color: "bg-gradient-to-br from-violet-950/90 via-purple-950/80 to-slate-950/90" },
  { title: "E-Commerce Mobile App", category: "Mobile", description: "Feature-rich shopping experience with personalized recommendations, secure payments, and real-time inventory.", tags: ["React Native", "Firebase", "Stripe"], color: "bg-gradient-to-br from-emerald-950/90 via-teal-950/80 to-slate-950/90" },
  { title: "Healthcare Management System", category: "Web Platform", description: "Secure patient management, appointment scheduling, and electronic health records with HIPAA compliance.", tags: ["Next.js", "TypeScript", "AWS"], color: "bg-gradient-to-br from-cyan-950/90 via-sky-950/80 to-slate-950/90" },
  { title: "Fintech Payment Gateway", category: "Software", description: "Secure payment processing infrastructure with multi-currency support, fraud detection, and instant settlements.", tags: ["Go", "Redis", "Kubernetes"], color: "bg-gradient-to-br from-amber-950/90 via-orange-950/80 to-slate-950/90" },
  { title: "Smart IoT Dashboard", category: "IoT / AI", description: "Real-time device monitoring, predictive maintenance alerts, and energy optimization for industrial operations.", tags: ["MQTT", "React", "InfluxDB"], color: "bg-gradient-to-br from-rose-950/90 via-red-950/80 to-slate-950/90" },
];

const processSteps = [
  { icon: Search, title: "Discover", description: "Deep dive into your business, users, and objectives to understand the real problem." },
  { icon: Map, title: "Plan", description: "Define scope, architecture, and roadmap with clear milestones and deliverables." },
  { icon: PenTool, title: "Design", description: "Create intuitive, beautiful interfaces and robust system architecture." },
  { icon: Hammer, title: "Build", description: "Develop with clean code, modern frameworks, and continuous integration." },
  { icon: Rocket, title: "Launch", description: "Deploy with confidence using automated testing and staged rollouts." },
  { icon: TrendingUp, title: "Grow", description: "Monitor, optimize, and iterate based on real user data and feedback." },
];

const pillars = [
  { icon: Code2, title: "Software", description: "Robust, scalable applications built with modern engineering practices and clean architecture." },
  { icon: Brain, title: "AI & Automation", description: "Intelligent systems that learn, adapt, and automate to unlock new efficiencies and insights." },
  { icon: Zap, title: "Digital Experiences", description: "User-centric designs and seamless interactions that delight and convert at every touchpoint." },
];

const whySumix = [
  { icon: CheckCircle2, title: "Engineering Excellence", description: "Clean code, modern architecture, and best practices in every project we deliver." },
  { icon: Users, title: "Collaborative Partnership", description: "We work alongside you as an extension of your team, not just another vendor." },
  { icon: Shield, title: "Security First", description: "Enterprise-grade security practices embedded from day one, not bolted on later." },
  { icon: Zap, title: "Rapid Iteration", description: "Agile methodologies with continuous delivery to get value in your hands quickly." },
];

// Scroll progress bar component
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary origin-left z-[60]"
      style={{ scaleX }}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <ParticleField />
      <Navbar />
      <Hero />

      {/* Short About */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0}>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Who We Are</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Technology Partners for <span className="text-gradient">Ambitious Companies</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted leading-relaxed">
                Sumix Developers is a technology company that builds software, AI systems, and digital products for organizations ready to transform their operations and customer experiences.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 sm:py-32 bg-surface border-y border-border/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Core Disciplines</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What We Do Best</h2>
            <p className="text-muted max-w-2xl mx-auto">Three core disciplines that drive everything we build.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="group p-8 rounded-2xl bg-background border border-border/40 hover:border-primary/30 transition-all duration-500 h-full glow-subtle hover:glow-primary">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-500">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-muted leading-relaxed">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">End-to-End Digital Solutions</h2>
            <p className="text-muted max-w-2xl mx-auto">From concept to deployment and beyond, we provide comprehensive services to build, launch, and grow your digital products.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <ServiceCard {...service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured AI Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn delay={0}>
                <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">AI & Machine Learning</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Intelligence That <span className="text-gradient">Works for You</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted leading-relaxed mb-8">
                  We build AI systems that go beyond hype — practical, production-ready solutions that automate workflows, extract insights from data, and create competitive advantages.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {["Natural Language Processing & Chatbots", "Predictive Analytics & Forecasting", "Computer Vision & Image Recognition", "Process Automation & RPA", "Recommendation Systems"].map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <ParallaxWrapper speed={0.3} className="flex items-center justify-center">
              <div className="aspect-square max-w-md w-full rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent border border-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
                <motion.div 
                  className="text-center p-8 relative z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 border border-primary/20">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
                  <p className="text-sm text-muted max-w-sm">Custom machine learning models and intelligent automation tailored to your business needs.</p>
                </motion.div>
                <div className="absolute inset-4 rounded-xl border border-primary/10" />
                <div className="absolute inset-8 rounded-lg border border-secondary/10" />
              </div>
            </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Projects/Portfolio */}
      <section className="py-24 sm:py-32 bg-surface border-y border-border/30 relative" id="projects">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Our Work</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-2 mt-4 sm:mt-0 text-primary hover:text-secondary transition-colors">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">How We Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Our Development Process</h2>
            <p className="text-muted max-w-2xl mx-auto">A proven methodology that ensures transparency, quality, and on-time delivery.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4" staggerDelay={0.12}>
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title}>
                <ProcessStep icon={step.icon} title={step.title} description={step.description} step={index + 1} isLast={index === processSteps.length - 1} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Sumix */}
      <section className="py-24 sm:py-32 bg-surface border-y border-border/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn delay={0}>
                <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Why Sumix</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                  Built Different.<br /><span className="text-gradient">Built Better.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted leading-relaxed mb-8">
                  We do not cut corners. Every line of code, every design decision, and every strategic recommendation is made with your long-term success in mind.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link href="/about" className="group inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.12}>
              {whySumix.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-6 rounded-2xl bg-background border border-border/40 hover:border-primary/30 transition-all duration-500 h-full glow-subtle hover:glow-primary">
                    <item.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Great?"
        subtitle="Let us discuss your next project. We will help you define the scope, choose the right technology, and build a product that stands out."
        buttonText="Start a Project"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
