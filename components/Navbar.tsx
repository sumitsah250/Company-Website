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
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-[#202020]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#202020] bg-[#0C0C0C] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-[#292929]">
              <Image src={developersLogo} alt="Sumix Developers logo" fill className="object-cover" />
            </div>
            <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.14em] text-[#F2EFE9]">
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
                    ? "text-[#F2EFE9]"
                    : "text-[#9B9892] hover:text-[#F2EFE9]"
                }`}
              >
                {pathname === link.href && (
                  <span className="absolute inset-0 rounded-xl border border-[#202020] bg-[#0C0C0C] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center overflow-hidden rounded-xl border border-[#292929] bg-[#0C0C0C]/80 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#F2EFE9] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3A3A3A] hover:bg-[#111111]"
            >
              <span className="relative z-10">Start a Project</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-[#202020] bg-[#0C0C0C]/80 p-2 text-[#9B9892] transition-colors hover:text-[#F2EFE9] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="-mx-4 mt-2 rounded-b-2xl border-t border-[#202020] bg-[#050505]/90 px-4 pb-4 md:hidden backdrop-blur-xl">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "border border-[#202020] bg-[#0C0C0C] text-[#F2EFE9]"
                      : "text-[#9B9892] hover:bg-[#0C0C0C] hover:text-[#F2EFE9]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-xl border border-[#292929] bg-[#F2EFE9] px-4 py-3 text-center text-sm font-semibold text-[#050505] transition-transform duration-300 hover:translate-y-[-1px]"
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
