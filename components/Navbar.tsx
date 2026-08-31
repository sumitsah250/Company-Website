"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import developersLogo from "@/app/images/developers_logo_icon.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
            </div>
            <span className="text-sm font-medium tracking-[0.12em] whitespace-nowrap uppercase text-[#f5f1ea]">
              Sumix Developers
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#f5f1ea]"
                    : "text-[#b6b1aa] hover:text-[#f5f1ea]"
                }`}
              >
                {pathname === link.href && (
                  <span className="absolute inset-0 rounded-lg bg-white/[0.03] border border-white/10" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.02] text-[#f5f1ea] text-[11px] font-medium uppercase tracking-[0.18em] overflow-hidden transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <span className="relative z-10">Start a Project</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-muted hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/30 mt-2 glass-strong rounded-b-2xl -mx-4 px-4">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white bg-white/5 border border-white/15"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 px-4 py-3 rounded-xl bg-white text-background text-sm font-semibold text-center hover:bg-white/90 transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
