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
    <footer className="relative border-t border-[#202020] bg-[#080808]">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#292929] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="group mb-6 flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#202020] bg-[#0C0C0C]">
                <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
              </div>
              <span className="text-base font-medium uppercase tracking-[0.12em] text-[#F2EFE9]">Sumix Developers</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-[#9B9892]">
              Building modern software, AI solutions, and digital products that move businesses forward.
            </p>
            <a href="mailto:sumixdevelopers@gmail.com" className="flex items-center gap-3 text-sm text-[#9B9892] transition-colors hover:text-[#F2EFE9]">
              <Mail className="h-4 w-4" />
              sumixdevelopers@gmail.com
            </a>
          </div>

          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F2EFE9]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#9B9892] transition-colors hover:text-[#F2EFE9]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F2EFE9]">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#9B9892] transition-colors hover:text-[#F2EFE9]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F2EFE9]">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#9B9892] transition-colors hover:text-[#F2EFE9]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#202020] pt-8 sm:flex-row">
          <p className="text-sm text-[#9B9892]">&copy; {new Date().getFullYear()} Sumix Developers. All rights reserved.</p>
          <p className="text-sm text-[#9B9892]">Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
