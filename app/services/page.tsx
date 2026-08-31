"use client";

import { Code2, Globe, Smartphone, Brain, Megaphone, Palette, FileText, Lightbulb, Server, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import MouseSpotlight from "@/components/MouseSpotlight";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import HexGrid3D from "@/components/HexGrid3D";

const services = [
  { icon: Code2, title: "Software Development", description: "Custom software solutions built with modern architecture, clean code, and scalable infrastructure to solve complex business problems.", tags: ["Web Apps", "Enterprise", "APIs", "Cloud"], features: ["Custom web & desktop applications", "API design & development", "Database architecture", "Third-party integrations", "Legacy system modernization"] },
  { icon: Globe, title: "Web Development", description: "High-performance websites and web applications using cutting-edge frameworks, optimized for speed, SEO, and user experience.", tags: ["React", "Next.js", "Node.js", "Full-Stack"], features: ["Responsive web design", "Progressive Web Apps (PWA)", "E-commerce platforms", "CMS development", "Performance optimization"] },
  { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile applications designed for iOS and Android with intuitive interfaces and robust functionality.", tags: ["iOS", "Android", "React Native", "Flutter"], features: ["Native iOS & Android apps", "Cross-platform development", "UI/UX design for mobile", "App store optimization", "Push notifications & analytics"] },
  { icon: Brain, title: "AI & Machine Learning", description: "Intelligent systems that automate processes, extract insights from data, and create predictive models to drive decision-making.", tags: ["NLP", "Computer Vision", "Predictive", "Automation"], features: ["Natural Language Processing", "Computer Vision solutions", "Predictive analytics", "Recommendation engines", "Process automation & RPA"] },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven marketing strategies that increase visibility, engage audiences, and convert leads into loyal customers.", tags: ["SEO", "PPC", "Social", "Analytics"], features: ["Search engine optimization", "Pay-per-click advertising", "Social media management", "Content marketing strategy", "Conversion rate optimization"] },
  { icon: Palette, title: "Creative & Media", description: "Stunning visual design, brand identity, and multimedia content that captures attention and communicates your story effectively.", tags: ["Branding", "UI/UX", "Motion", "Video"], features: ["Brand identity design", "UI/UX design systems", "Motion graphics & animation", "Video production", "Photography & illustration"] },
  { icon: FileText, title: "Content & Copywriting", description: "Compelling content strategies and copy that resonates with your audience, builds trust, and drives meaningful engagement.", tags: ["Strategy", "SEO Copy", "Blogs", "Technical"], features: ["Content strategy & planning", "SEO-optimized copywriting", "Technical documentation", "Blog & article writing", "Email & social copy"] },
  { icon: Lightbulb, title: "IT Consulting", description: "Strategic technology consulting to align your IT infrastructure with business goals, optimize operations, and plan for growth.", tags: ["Strategy", "Architecture", "Audit", "Roadmap"], features: ["Technology strategy", "System architecture review", "Digital transformation", "Tech stack recommendations", "Project rescue & audit"] },
  { icon: Server, title: "Server & Hosting", description: "Reliable, secure, and scalable hosting solutions with 24/7 monitoring, automated backups, and performance optimization.", tags: ["Cloud", "DevOps", "Security", "Monitoring"], features: ["Cloud infrastructure setup", "DevOps & CI/CD pipelines", "Server monitoring & alerts", "Automated backups", "Security hardening"] },
];

export default function ServicesPage() {
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
                <span className="text-sm font-medium text-white/90 uppercase tracking-[0.15em] mb-6 block">Services</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
                  End-to-End<span className="text-gradient"> Digital Solutions</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted leading-[1.8]">
                  From strategy and design to development and deployment, we provide comprehensive services to build, launch, and scale your digital products.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" distance={40} delay={0.2}>
              <div className="hidden lg:flex items-center justify-center">
                <HexGrid3D />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 bg-surface border-y border-white/[0.04] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} direction="up" distance={25} delay={i * 0.05}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MouseSpotlight>
        <section className="py-28 sm:py-36 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" distance={20}>
              <div className="text-center mb-20">
                <span className="text-sm font-medium text-white/90 uppercase tracking-[0.15em] mb-4 block">Capabilities</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What You Get</h2>
                <p className="text-muted max-w-2xl mx-auto">Every engagement includes our commitment to quality, transparency, and results.</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <ScrollReveal key={service.title} direction="up" distance={25} delay={i * 0.06}>
                  <TiltCard intensity={6}>
                    <div className="p-8 sm:p-10 rounded-2xl bg-surface-elevated border border-white/[0.06] h-full glow-subtle hover:glow-subtle transition-all duration-700">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white/80" />
                        </div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </MouseSpotlight>

      <CTASection
        title="Not Sure What You Need?"
        subtitle="Let us help you define the right approach. We offer free consultations to discuss your project and recommend the best path forward."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
