"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import MouseSpotlight from "@/components/MouseSpotlight";
import ParticleField from "@/components/ParticleField";
import ContactOrb3D from "@/components/ContactOrb3D";
import Floating3D from "@/components/Floating3D";

const services = [
  "Software Development", "Web Development", "Mobile App Development",
  "AI & Machine Learning", "Digital Marketing", "Creative & Media",
  "Content & Copywriting", "IT Consulting", "Server & Hosting", "Other",
];

const budgets = [
  "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000",
  "$50,000 - $100,000", "$100,000+", "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", budget: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Unable to send message");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
      }, 3000);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen relative">
      <ParticleField />
      <Navbar />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Contact</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Let us Start a<span className="text-gradient"> Conversation</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                Have a project in mind or just want to explore possibilities? Fill out the form below and we will get back to you within 24 hours.
              </p>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <Floating3D speed={0.6} amplitude={8}>
                <ContactOrb3D />
              </Floating3D>
            </div>
          </div>
        </div>
      </section>

      <MouseSpotlight>
        <section className="py-24 sm:py-32 bg-surface border-y border-border/30 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted leading-relaxed mb-10">
                  Whether you have a detailed project brief or just a rough idea, we are here to help. Reach out and let us discuss how we can work together.
                </p>

                <div className="space-y-6">
                  <a href="mailto:sumixdevelopers@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Email</h3>
                      <p className="text-muted group-hover:text-white transition-colors">sumixdevelopers@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Location</h3>
                      <p className="text-muted">Remote-first team</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1">Response Time</h3>
                      <p className="text-muted">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="p-8 rounded-2xl bg-background border border-border/40 glow-subtle hover:border-primary/30 transition-colors duration-300">
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                        <p className="text-muted">Thank you for reaching out. We will get back to you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {formError && (
                          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                            {formError}
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white placeholder:text-subtle/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white placeholder:text-subtle/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              placeholder="you@company.com" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white placeholder:text-subtle/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="Your company name" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                              <option value="" className="bg-surface-elevated">Select a service</option>
                              {services.map((s) => <option key={s} value={s} className="bg-surface-elevated">{s}</option>)}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                              <option value="" className="bg-surface-elevated">Select budget</option>
                              {budgets.map((b) => <option key={b} value={b} className="bg-surface-elevated">{b}</option>)}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border/50 text-white placeholder:text-subtle/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                            placeholder="Tell us about your project, goals, and timeline..." />
                        </div>

                        <button type="submit"
                          className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-background font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]">
                          <span className="relative z-10">Send Message</span>
                          <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </section>
      </MouseSpotlight>

      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Common Questions</h2>
            <p className="text-muted">Quick answers to questions we often receive.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "What is your typical project timeline?", a: "Timelines vary based on scope and complexity. A typical MVP takes 8-12 weeks, while larger enterprise projects may span 3-6 months. We provide detailed timelines during our discovery phase." },
              { q: "Do you work with startups or only enterprises?", a: "We work with companies of all sizes — from early-stage startups to established enterprises. Our approach adapts to your stage, budget, and goals." },
              { q: "What technologies do you specialize in?", a: "Our core stack includes React, Next.js, Node.js, Python, TypeScript, and cloud platforms (AWS, Google Cloud, Azure). For AI/ML, we use TensorFlow, PyTorch, and various NLP frameworks." },
              { q: "How do you handle project communication?", a: "We use a structured communication plan with weekly standups, bi-weekly demos, and a shared project dashboard. You will have direct access to your dedicated project team throughout the engagement." },
            ].map((faq) => (
              <TiltCard key={faq.q} intensity={4}>
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border/40 glow-subtle">
                  <h3 className="text-base font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
