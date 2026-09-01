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

export default function Navbar({ variant = "default" }: { variant?: "default" | "light" }) {
  const isLight = variant === "light";
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
          ? isLight
            ? "border-b border-white/10 bg-[rgba(8,10,14,0.72)] backdrop-blur-xl"
            : "border-b border-[#D8CEC0] bg-[rgba(244,239,230,0.92)] backdrop-blur-xl"
          : isLight
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className={`relative h-9 w-9 overflow-hidden rounded-xl border transition-all duration-300 ${
              isLight ? "border-white/20 bg-white/5 group-hover:border-white/30" : "border-[#D8CEC0] bg-[#FFFDF8] group-hover:border-[#C8BAA9]"
            }`}>
              <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
            </div>
            <span className={`whitespace-nowrap text-sm font-medium uppercase tracking-[0.14em] ${
              isLight ? "text-white" : "text-[#211F1B]"
            }`}>
              Sumix Developers
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-xl px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  pathname === link.href
                    ? isLight
                      ? "text-white"
                      : "text-[#211F1B]"
                    : isLight
                      ? "text-white/75 hover:text-white"
                      : "text-[#6F685F] hover:text-[#211F1B]"
                }`}
              >
                {pathname === link.href && (
                  <span className={`absolute inset-0 rounded-xl border ${
                    isLight ? "border-white/15 bg-white/5" : "border-[#D8CEC0] bg-[#E9E1D5]"
                  }`} />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center overflow-hidden rounded-xl border border-[#181612] bg-[#181612] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F7F3EB] transition-all duration-300 hover:bg-[#2A2721]"
            >
              <span className="relative z-10">Start a Project</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-xl border p-2 transition-colors md:hidden ${
              isLight ? "border-white/20 bg-white/5 text-white hover:text-white" : "border-[#D8CEC0] bg-[#FFFDF8] text-[#6F685F] hover:text-[#211F1B]"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className={`-mx-4 mt-2 rounded-b-2xl border-t px-4 pb-4 md:hidden backdrop-blur-xl ${
            isLight ? "border-white/10 bg-[rgba(8,10,14,0.82)]" : "border-[#D8CEC0] bg-[rgba(244,239,230,0.96)]"
          }`}>
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? isLight
                        ? "border border-white/10 bg-white/5 text-white"
                        : "border border-[#D8CEC0] bg-[#E9E1D5] text-[#211F1B]"
                      : isLight
                        ? "text-white/75 hover:bg-white/5 hover:text-white"
                        : "text-[#6F685F] hover:bg-[#F1EAE1] hover:text-[#211F1B]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-xl border border-[#181612] bg-[#181612] px-4 py-3 text-center text-sm font-semibold text-[#F7F3EB] transition-transform duration-300 hover:bg-[#2A2721]"
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
