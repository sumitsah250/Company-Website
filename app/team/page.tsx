"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

import ceoImage from "../images/sumit_profile_image.jpg";
import cfoImage from "../images/jay_profile_image.jpg";
import cofounder1Image from "../images/gaurav_raj_profile_image.jpg";
import cofounder2Image from "../images/dipak_sharma_profile_image.jpg";

const leadership = [
  {
    name: "Sumit Sah",
    title: "Founder & CEO",
    bio: "Building products with clarity, conviction, and long-term vision.",
    image: ceoImage,
    portfolioUrl: "https://sahsumit.com.np",
  },
  {
    name: "Jay Yadav",
    title: "Founder & CFO",
    bio: "Shaping strategy, product direction, and the company’s long-term vision.",
    image: cfoImage,
    portfolioUrl: "https://sumixdevelopers.com",
  },
  {
    name: "Gaurav Raj",
    title: "Co-Founder",
    bio: "Designing systems that are resilient, scalable, and beautifully engineered.",
    image: cofounder1Image,
    portfolioUrl: "https://sumixdevelopers.com",
  },
  {
    name: "Dipak Sharma",
    title: "Co-Founder",
    bio: "Bringing strategy, polish, and customer insight into every build.",
    image:cofounder2Image,
    portfolioUrl: "https://sumixdevelopers.com",
  },
];

function TeamMemberCard({
  member,
}: {
  member: (typeof leadership)[number];
}) {
  return (
    <div className="group relative">
      <div
        className="
          overflow-hidden
          border border-white/10
          bg-[#0b0c10]
          transition-all duration-700
          hover:border-white/20
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* IMAGE FRAME */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#08090c]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={member.name === "Sumit Sah"}
            className="
              object-contain
              grayscale
              transition-transform duration-700 ease-out
              group-hover:scale-[1.03]
              group-hover:grayscale-0
            "
          />

          {/* Dark cinematic gradient */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-black via-black/20 to-transparent
            "
          />

          {/* Subtle hover glow */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              opacity-0
              transition-opacity duration-700
              group-hover:opacity-100
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02), rgba(255,255,255,0.08))",
            }}
          />

          {/* Portfolio Button */}
          <Link
            href={member.portfolioUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${member.name} portfolio website`}
            className="
              absolute right-4 top-4
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/15
              bg-black/35
              text-white/90
              backdrop-blur-md
              transition-all duration-300
              hover:scale-105
              hover:border-white/30
              hover:bg-black/60
            "
          >
            <Globe className="h-4 w-4" />
          </Link>

          {/* MEMBER INFORMATION */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              px-5 pb-5 pt-20
              text-center
            "
          >
            <h3
              className="
                text-2xl
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              {member.name}
            </h3>

            <p
              className="
                mt-1
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-zinc-300
              "
            >
              {member.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <ParticleField />

      <Navbar variant="light" />

      {/* HERO */}
      <section className="relative px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className="
              text-3xl
              font-black
              tracking-[-0.06em]
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Meet the Visionaries
          </h1>

          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-xs
              font-medium
              leading-5
              text-zinc-300
              sm:text-sm
            "
          >
            We&apos;re a group of curious minds, creative souls, and passionate
            builders who genuinely love what we do.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* FOUNDERS */}
            <div className="grid gap-4 md:grid-cols-2">
              {leadership.slice(0, 2).map((member) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                />
              ))}
            </div>

            {/* SECTION LABEL */}
            <div className="pt-2 text-center">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.34em]
                  text-zinc-300
                  sm:text-xs
                "
              >
                Organizing Members
              </p>
            </div>

            {/* ORGANIZING MEMBERS */}
            <div className="grid gap-4 md:grid-cols-2">
              {leadership.slice(2).map((member) => (
                <TeamMemberCard
                  key={member.name}
                  member={member}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        className="
          border-t
          border-white/10
          bg-[#090b0f]
          px-4
          py-20
          sm:px-6
          lg:px-8
          lg:py-24
        "
      >
        <div className="mx-auto max-w-3xl text-center sm:text-left">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.32em]
              text-zinc-400
            "
          >
            Our Approach
          </p>

          <h2
            className="
              mt-6
              text-3xl
              font-semibold
              tracking-[-0.05em]
              text-white
              sm:text-4xl
            "
          >
            Thoughtful people. Precise execution. Meaningful outcomes.
          </h2>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              href="https://sumixdevelopers.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Sumix Developers portfolio website"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-white/15
                bg-white/5
                text-white/90
                transition-all duration-300
                hover:scale-105
                hover:border-white/30
                hover:bg-white/10
              "
            >
              <Globe className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </main>
  );
}