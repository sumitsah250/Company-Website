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

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-surface/50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold">Sumix Developers</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Building modern software, AI solutions, and digital products that move businesses forward.
            </p>
            <a href="mailto:sumixdevelopers@gmail.com" className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              sumixdevelopers@gmail.com
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Sumix Developers. All rights reserved.</p>
          <p className="text-sm text-muted">Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
