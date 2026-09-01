"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import developersLogo from "@/app/images/developers_logo_icon.svg";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Software Development" },
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "Mobile Apps" },
    { href: "/services", label: "AI & ML" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export default function Footer({ variant = "default" }: { variant?: "default" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <footer className={`relative border-t ${isDark ? "border-white/10 bg-[#0b0d10]" : "border-[#D8CEC0] bg-[#F7F3EB]"}`}>
      <div className={`absolute left-0 top-0 h-px w-full ${isDark ? "bg-gradient-to-r from-transparent via-white/20 to-transparent" : "bg-gradient-to-r from-transparent via-[#C8BAA9] to-transparent"}`} />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-6 flex items-center gap-2.5">
              <div className={`relative h-9 w-9 overflow-hidden rounded-xl border ${isDark ? "border-white/15 bg-white/5" : "border-[#D8CEC0] bg-[#FFFDF8]"}`}>
                <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
              </div>
              <span className={`text-base font-medium uppercase tracking-[0.12em] ${isDark ? "text-white" : "text-[#211F1B]"}`}>Sumix Developers</span>
            </Link>
            <p className={`mb-6 text-sm leading-relaxed ${isDark ? "text-zinc-300" : "text-[#211F1B]"}`}>
              Building modern software, AI solutions, and digital products that move businesses forward.
            </p>
            <a href="mailto:sumixdevelopers@gmail.com" className={`flex items-center gap-3 text-sm transition-colors ${isDark ? "text-zinc-300 hover:text-white" : "text-[#211F1B] hover:text-[#211F1B]"}`}>
              <Mail className="h-4 w-4" />
              sumixdevelopers@gmail.com
            </a>
          </div>

          <div>
            <h4 className={`mb-6 text-[11px] font-medium uppercase tracking-[0.2em] ${isDark ? "text-zinc-300" : "text-[#211F1B]"}`}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`text-sm transition-colors ${isDark ? "text-zinc-300 hover:text-white" : "text-[#211F1B] hover:text-[#211F1B]"}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`mb-6 text-[11px] font-medium uppercase tracking-[0.2em] ${isDark ? "text-zinc-300" : "text-[#211F1B]"}`}>Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`text-sm transition-colors ${isDark ? "text-zinc-300 hover:text-white" : "text-[#211F1B] hover:text-[#211F1B]"}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`mb-6 text-[11px] font-medium uppercase tracking-[0.2em] ${isDark ? "text-zinc-300" : "text-[#211F1B]"}`}>Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={`text-sm transition-colors ${isDark ? "text-zinc-300 hover:text-white" : "text-[#211F1B] hover:text-[#211F1B]"}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row ${isDark ? "border-white/10" : "border-[#D8CEC0]"}`}>
          <p className={`text-sm ${isDark ? "text-zinc-400" : "text-[#211F1B]"}`}>&copy; {new Date().getFullYear()} Sumix Developers. All rights reserved.</p>
          <p className={`text-sm ${isDark ? "text-zinc-400" : "text-[#211F1B]"}`}>Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
