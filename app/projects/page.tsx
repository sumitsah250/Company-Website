"use client";

import Image from "next/image";
import { Filter } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import developersLogo from "../images/developers_logo_icon.svg";

const categories = ["All", "Android", "ML/AI", "Freelance"];

const projects = [
  { title: "SEE All Books & Guides 2081", description: "A comprehensive study app for Class 10 students, providing essential resources and guides. Features intuitive UI design, powerful search functionality, and efficient data handling.", image: "/images/seeguideapp.png", category: "Android", tags: ["Java", "Firebase", "Android Studio", "Material Design"], stats: ["5K+ Active Users", "15K+ Downloads"], links: { playStore: "https://play.google.com/store/apps/details?id=com.boss.class10allguidemanual2081" } },
  { title: "Pustak Bazzar", description: "An innovative book resale application featuring comprehensive user profiles, advanced filtering options, and a robust admin panel for seamless management.", image: "/images/pustakbazzar.png", category: "Android", tags: ["Java", "Android Studio", "Firebase Auth", "Firestore", "MVVM"], highlights: ["MVVM Architecture Implementation", "Advanced Admin Panel", "Real-time Data Synchronization"], links: { playStore: "https://play.google.com/store/apps/details?id=com.boss.pustakbazzar" } },
  { title: "Paisa Expense Manager", description: "A smart expense manager app designed to track daily expenses, categorize spending, and provide insightful analytics for better financial management.", image: "/images/paisa.png", category: "Android", tags: ["Java", "Android Studio", "Realm", "Google Drive Backup"], highlights: ["Simple & Intuitive UI", "Realm Database Integration", "Google Drive Backup & Restore"], links: { playStore: "https://play.google.com/store/apps/details?id=com.paisa.expense_manager" } },
  { title: "Kuraakaani", description: "A modern chatting application designed for fast, secure, and real-time messaging with a clean UI and seamless user experience.", image: "/images/kurakani.png", category: "Android", tags: ["Java", "Android Studio", "Firebase Auth", "Firestore", "Glide"], highlights: ["Real-time Messaging", "User Authentication & Profiles", "Media Sharing Support"], links: { github: "https://github.com/sumitsah250/android-files/tree/master/KuraaKaani" } },
  { title: "Sign Language Detection ML Model", description: "A deep learning-based model for recognizing and translating sign language gestures into text in real-time, improving accessibility and communication.", image: "/images/Sign_language_detection.png", category: "ML/AI", tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"], highlights: ["Real-time Gesture Recognition", "Custom CNN/LSTM Architecture", "Improves Accessibility"], links: { github: "https://github.com/sumitsah250/sign-language" } },
  { title: "Forest Fire Detection System", description: "An IoT-powered system designed to detect forest fires at an early stage using sensors and real-time monitoring, helping prevent large-scale environmental damage.", image: "/images/Wild_fire_detection.png", category: "ML/AI", tags: ["Arduino", "ESP32", "IoT Sensors", "Firebase", "Android App"], highlights: ["Early Fire Detection with Sensors", "Real-time Alerts & Monitoring", "Mobile App Integration"], links: { github: "https://github.com/sumitsah250/OSMHackFest2024" } },
  { title: "Dishcovery - AI Recipe Recommendation System", description: "An intelligent recipe recommendation platform that uses YOLOv8 object detection and speech recognition to identify available ingredients and suggest personalized recipes.", image: "/images/dishcovery.jpg", category: "ML/AI", tags: ["Python", "YOLOv8", "FastAPI", "Whisper", "PyTorch", "OpenCV", "HTML", "CSS", "JavaScript"], highlights: ["YOLOv8 Ingredient Detection", "Voice-to-Recipe Recommendation", "Real-time AI-Powered Suggestions"], links: { github: "https://github.com/sumitsah250/Dishcovery" } },
  { id: 101, title: "MeaningBy.com", company: "Freelance Client", category: "Freelance", duration: "2025 – Present", description: "Developed and deployed a live educational platform focused on dictionary, translations, and writing resources. Handled full-cycle development including design, backend integration, and deployment.", image: "/images/meaningby.png", tags: ["React", "Node.js", "Firebase", "Tailwind CSS"], highlights: ["Designed and built complete platform from scratch", "Deployed and maintaining live production website", "Implemented translation and dictionary features", "Optimized performance and user experience"], links: { website: "https://meaningby.com/" } },
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
      <div className="absolute inset-8 rounded-full bg-white/[0.03] blur-[120px]" />
      <div
        className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.y * 0.2}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="absolute inset-0 rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02)_30%,_rgba(3,3,3,0.98)_72%)] shadow-[0_30px_120px_rgba(0,0,0,0.7)]" style={{ transform: "translateZ(55px)" }} />
        <div className="absolute inset-4 rounded-[28px] border border-white/10 bg-[#0a0a0a]/90" style={{ transform: "translateZ(30px)" }} />
        <div className="absolute inset-10 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_35%,transparent_70%)]" style={{ transform: "translateZ(80px)" }} />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3" style={{ transform: "translateZ(110px)" }}>
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.02] shadow-[0_15px_35px_rgba(245,241,234,0.08)] sm:h-20 sm:w-20">
            <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
          </div>
          <div className="text-3xl font-black tracking-[-0.08em] text-white sm:text-5xl">SUMIX</div>
        </div>

        <div className="absolute -left-6 top-10 h-12 w-12 rounded-full border border-white/20 bg-white/[0.03] blur-[2px]" style={{ transform: "translateZ(90px)" }} />
        <div className="absolute -right-4 bottom-12 h-10 w-10 rounded-full border border-white/15 bg-white/[0.02] blur-[2px]" style={{ transform: "translateZ(90px)" }} />
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

      <section className="relative pb-20 pt-28 sm:pb-24 sm:pt-32">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ScrollReveal direction="up" distance={30}>
              <div className="max-w-3xl">
                <span className="mb-6 block text-sm font-medium uppercase tracking-[0.15em] text-[#d9d5cf]/80">Portfolio</span>
                <h1 className="mb-8 text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-[#f5f1ea] sm:text-5xl md:text-6xl lg:text-7xl">
                  Our<span className="text-gradient"> Latest Work</span>
                </h1>
                <p className="text-lg leading-[1.8] text-[#b6b1aa] sm:text-xl">
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

      <section className="relative border-y border-white/[0.05] bg-[#070707] py-28 sm:py-36">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="mb-16 flex flex-wrap items-center gap-3">
              <Filter className="mr-2 h-4 w-4 text-[#b6b1aa]" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "border-white/15 bg-[#f5f1ea] text-[#050505]"
                      : "border-white/[0.08] bg-white/[0.02] text-[#b6b1aa] hover:border-white/15 hover:bg-white/[0.04] hover:text-white"
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
