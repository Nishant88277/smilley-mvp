"use client";

import { motion } from "framer-motion";

const sections = [
  {
    id: "company",
    title: "The Company",
    content:
      "Born in Mumbai, Smiley Films is a production house engaged in Feature Films, Short Films and Web Content. We bring together strong industry alliances, in-house production, and end-to-end post-production facilities to deliver cinematic excellence. Since 2017, we have built a creative portfolio that is as diverse as it is immersive, earning the trust of clients and collaborators across the industry.",
    icon: "◆",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "To be the creative force that brings India's diverse stories to a global stage.",
    icon: "◇",
  },
  {
    id: "mission",
    title: "Mission",
    content:
      "To produce culturally rooted content across Film and Digital, delivering creative excellence through strong collaborations and a cost-efficient approach.",
    icon: "▸",
  },
  {
    id: "culture",
    title: "Culture",
    content:
      "At Smiley Films, we believe the best stories are born when varied voices, bold ideas, and driven people come together as one.",
    icon: "★",
  },
];

const stats = [
  { value: "30+", label: "Projects delivered" },
  { value: "15+", label: "Years of experience" },
  { value: "10+", label: "Awards won" },
  { value: "20+", label: "Industry trust" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[var(--accent-dark)] opacity-[0.05] blur-[100px]" />
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-4"
          >
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <span className="h-px w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
              <span className="text-[var(--accent)] text-sm font-medium tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight"
            >
              <span className="block">About</span>
              <span className="block text-gradient-warm mt-1">
                Us
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[var(--fg-muted)] text-lg leading-relaxed"
            >
              The company behind the stories. Our vision, mission, culture and
              the numbers that drive us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative pb-16 md:pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-0"
          >
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="group relative py-12 md:py-16 border-b border-[var(--border)] last:border-0"
              >
                <div className="flex gap-6 md:gap-10">
                  <span className="flex-shrink-0 w-10 h-10 border border-[var(--border-accent)] flex items-center justify-center text-[var(--accent)] text-sm font-light opacity-80 group-hover:opacity-100 group-hover:border-[var(--accent)] transition-all duration-300">
                    {section.icon}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats — film-strip style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative text-center"
                >
                  <div className="inline-block glass-card px-8 py-8 card-lift min-w-[140px]">
                    <span className="block text-4xl md:text-5xl font-serif font-light text-[var(--accent)] tabular-nums">
                      {stat.value}
                    </span>
                    <p className="mt-2 text-sm text-[var(--fg-muted)] font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* Team slider */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-[0.2em] uppercase">
              People
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light text-white">
              Meet the team
            </h2>
            <p className="mt-4 text-[var(--fg-muted)] max-w-xl">
              The people behind Smiley Films. Click any member to view full
              profile.
            </p>
          </motion.div>
          <TeamSlider />
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../team/data";

function TeamSlider() {
  return (
    <div
      className="flex gap-6 overflow-x-auto slider-track pb-4 -mx-2 px-2 snap-x snap-mandatory"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {teamMembers.map((member) => (
        <Link
          key={member.slug}
          href={`/team#${member.slug}`}
          className="group flex-shrink-0 w-56 snap-center"
        >
          <div className="aspect-square overflow-hidden image-hover-zoom relative">
            <Image
              src={member.image}
              alt={member.name}
              width={224}
              height={224}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-lg font-light text-white">
                {member.name}
              </h3>
              <p className="text-xs text-[var(--accent)] mt-0.5">
                {member.designation}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
