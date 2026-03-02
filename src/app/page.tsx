"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredFilms } from "@/app/featured-work/data";
import { teamMembers } from "@/app/team/data";
import { pressItems } from "@/app/media/press/data";

const TAGLINE = "Touching Emotional Chords Since 2017";
const DESCRIPTION =
  "Smiley Films is a Mumbai-based production house delivering heartfelt, world-class films and web shows. We tell stories that leave a lasting impact.";

const aboutSections = [
  {
    id: "company",
    title: "The Company",
    content:
      "Born in Mumbai, Smiley Films is a production house engaged in Feature Films, Short Films and Web Content. We bring together strong industry alliances, in-house production, and end-to-end post-production facilities to deliver cinematic excellence. Since 2017, we have built a creative portfolio that is as diverse as it is immersive, earning the trust of clients and collaborators across the industry.",
    icon: "company",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "To be the creative force that brings India's diverse stories to a global stage.",
    icon: "vision",
  },
  {
    id: "mission",
    title: "Mission",
    content:
      "To produce culturally rooted content across Film and Digital, delivering creative excellence through strong collaborations and a cost-efficient approach.",
    icon: "mission",
  },
  {
    id: "culture",
    title: "Culture",
    content:
      "At Smiley Films, we believe the best stories are born when varied voices, bold ideas, and driven people come together as one.",
    icon: "culture",
  },
];

const stats = [
  { value: "30+", label: "Projects delivered" },
  { value: "15+", label: "Years of experience" },
  { value: "10+", label: "Awards won" },
  { value: "20+", label: "Industry trust" },
];

const awards = [
  {
    year: "2017",
    title: "Second Best Film (Golden Knight)",
    event: "Golden Knight International Film Festival",
    location: "Russia",
  },
  {
    year: "2017",
    title: "Second Best Film (Golden Elephant)",
    event: "ICFFI",
    location: "Hyderabad",
  },
  {
    year: "2016",
    title: "Best Debutant Director",
    event: "South Asia International Film Festival",
    location: "New York",
  },
  {
    year: "2016",
    title: "Best Debutant Director",
    event: "Dadasaheb Phalke International Film Festival",
    location: "New Delhi",
  },
  {
    year: "2016",
    title: "Best Film",
    event: "Smile International Film Festival",
    location: "New Delhi",
  },
];

const services = [
  {
    title: "Film Productions",
    description:
      "Full-scale feature film production from script to screen with world-class crew.",
  },
  {
    title: "Web Series",
    description:
      "Binge-worthy episodic content crafted for modern streaming platforms.",
  },
  {
    title: "Short Films",
    description:
      "Powerful storytelling in compact format for festivals and digital release.",
  },
  {
    title: "Music Videos",
    description:
      "Visual storytelling that amplifies the soul of every musical composition.",
  },
  {
    title: "Branded Content",
    description:
      "Premium content that weaves brand narratives into compelling stories.",
  },
  {
    title: "Corporate Films",
    description:
      "Professional productions that elevate your business communication.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const pressScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeftF, setCanScrollLeftF] = useState(false);
  const [canScrollRightF, setCanScrollRightF] = useState(true);
  const [canScrollLeftP, setCanScrollLeftP] = useState(false);
  const [canScrollRightP, setCanScrollRightP] = useState(true);

  const updateScrollState = (
    ref: React.RefObject<HTMLDivElement | null>,
    setLeft: (v: boolean) => void,
    setRight: (v: boolean) => void,
  ) => {
    const el = ref.current;
    if (!el) return;
    setLeft(el.scrollLeft > 0);
    setRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const run = () => {
      updateScrollState(
        featuredScrollRef,
        setCanScrollLeftF,
        setCanScrollRightF,
      );
      updateScrollState(pressScrollRef, setCanScrollLeftP, setCanScrollRightP);
    };
    run();
    featuredScrollRef.current?.addEventListener("scroll", run);
    pressScrollRef.current?.addEventListener("scroll", run);
    window.addEventListener("resize", run);
    return () => {
      featuredScrollRef.current?.removeEventListener("scroll", run);
      pressScrollRef.current?.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
    };
  }, []);

  const scrollSlider = (
    ref: React.RefObject<HTMLDivElement | null>,
    dir: "left" | "right",
  ) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -el.clientWidth * 0.6 : el.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ——— HERO ——— */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="gradient-orb gradient-orb-1 animate-pulse-glow" />
          <div className="gradient-orb gradient-orb-2 animate-pulse-glow" />
          <div className="gradient-orb gradient-orb-3 animate-pulse-glow" />
          <div className="gradient-orb gradient-orb-4 animate-pulse-glow" />
        </div>
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/chidiya-1920x1080.webp"
              alt="Smiley Films"
              fill
              className="object-cover object-center opacity-25"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)]/50" />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-glow mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[12px] uppercase tracking-widest text-[var(--accent)]">
              {TAGLINE}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-2xl mx-auto text-lg text-[var(--fg-muted)] leading-relaxed md:text-xl"
          >
            {DESCRIPTION}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#featured-work"
              className="btn-primary px-10 py-4 text-[12px] font-semibold uppercase tracking-widest rounded-full"
            >
              Featured Work
            </a>
            <a
              href="#contact"
              className="btn-outline px-10 py-4 text-[12px] font-medium uppercase tracking-widest rounded-full"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <a href="#featured-work" className="flex flex-col items-center gap-3">
            <div className="w-6 h-10 rounded-full border border-[var(--accent)]/50 flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-[var(--accent)] animate-bounce" />
            </div>
          </a>
        </motion.div>
      </section>

      {/* ——— FEATURED WORK ——— */}
      <section
        id="featured-work"
        className="py-24 md:py-32 px-6 md:px-12 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Featured Work
            </h2>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              Select a project for full details — release date, synopsis, cast &
              crew.
            </p>
          </motion.div>

          <div className="relative">
            {canScrollLeftF && (
              <button
                type="button"
                onClick={() => scrollSlider(featuredScrollRef, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors -translate-x-2"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {canScrollRightF && (
              <button
                type="button"
                onClick={() => scrollSlider(featuredScrollRef, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors translate-x-2"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            <div
              ref={featuredScrollRef}
              className="slider-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {featuredFilms.map((film) => (
                <Link
                  key={film.slug}
                  href={`/featured-work/${film.slug}`}
                  className="group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw] snap-center"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl image-hover-zoom relative">
                    <Image
                      src={film.poster}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white group-hover:text-[var(--accent)] transition-colors">
                        {film.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--fg-muted)]">
                        <span>{film.category}</span>
                        <span>{film.runtime}</span>
                        <span>{"platform" in film ? film.platform : ""}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— AWARDS ——— */}
      <section
        id="awards"
        className="py-24 md:py-32 px-6 md:px-12 bg-[var(--bg-elevated)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              Recognition
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
              Awards
            </h2>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              Awards won for film Chidiya. Visuals will be added.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={`${award.event}-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0 w-full sm:w-28 h-28 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--fg-dim)] text-xs">
                  Visual
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-[var(--accent)] text-sm font-medium">
                    <span>{award.year}</span>
                    <span>·</span>
                    <span>{award.location}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-[var(--fg)]">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">
                    {award.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— ABOUT US ——— */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 scroll-mt-24">
        <div className="mx-auto max-w-4xl">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase"
          >
            Who We Are
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.05 }}
            className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white"
          >
            About Us
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-xl text-[var(--fg-muted)]"
          >
            The company behind the stories. Our vision, mission, culture and
            stats.
          </motion.p>

          <div className="mt-16 grid gap-6 sm:gap-8">
            {aboutSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/60 p-6 sm:p-8 md:p-10 card-lift hover:border-[var(--accent)]/30 transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent)] to-[var(--accent-dark)] opacity-80 rounded-l-2xl" />
                <div className="pl-5 sm:pl-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] ring-1 ring-[var(--accent)]/20 transition-colors duration-300 group-hover:bg-[var(--accent)]/25">
                      {section.icon === "company" && (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008V18Zm0 0h.008v.008h-.008V18Z"
                          />
                        </svg>
                      )}
                      {section.icon === "vision" && (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                      {section.icon === "mission" && (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                          />
                        </svg>
                      )}
                      {section.icon === "culture" && (
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                          />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-[var(--fg-muted)] leading-relaxed text-base md:text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center card-lift"
              >
                <span className="text-3xl md:text-4xl font-serif font-light text-[var(--accent)]">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ——— TEAM ——— */}
      <section
        id="team"
        className="py-24 md:py-32 px-6 md:px-12 bg-[var(--bg-elevated)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              People
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
              Team
            </h2>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              Meet the people behind Smiley Films. Click any member to view full
              profile.
            </p>
          </motion.div>

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
                <div className="aspect-square rounded-2xl overflow-hidden image-hover-zoom relative">
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
        </div>
      </section>

      {/* ——— SERVICES ——— */}
      <section
        id="services"
        className="py-24 md:py-32 px-6 md:px-12 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              What We Create
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Services
            </h2>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              End-to-end production across features, series, shorts, and branded
              content.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-2xl overflow-hidden card-lift"
              >
                <div className="aspect-video bg-[var(--bg-card)] border-b border-[var(--border)] flex items-center justify-center text-[var(--fg-dim)] text-sm">
                  Visual
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-[var(--fg)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[var(--fg-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ——— PRESS ——— */}
      <section
        id="press"
        className="py-24 md:py-32 px-6 md:px-12 bg-[var(--bg-elevated)] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              Coverage
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
              Press
            </h2>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              News and coverage about Smiley Films. Click an article or View
              More to read on our Press page.
            </p>
          </motion.div>

          <div className="relative">
            {canScrollLeftP && (
              <button
                type="button"
                onClick={() => scrollSlider(pressScrollRef, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors -translate-x-2"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {canScrollRightP && (
              <button
                type="button"
                onClick={() => scrollSlider(pressScrollRef, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors translate-x-2"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            <div
              ref={pressScrollRef}
              className="slider-track flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {pressItems.slice(0, 8).map((item) => (
                <Link
                  key={item.id}
                  href="/press"
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] snap-center text-left block"
                >
                  <div className="glass-card rounded-2xl p-6 md:p-8 h-full min-h-[200px] card-lift hover:border-[var(--accent)]/30 transition-colors">
                    <p className="text-[var(--fg)] leading-relaxed line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className="mt-4 text-sm text-[var(--accent)] font-medium">
                      {item.source}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/press"
              className="btn-outline px-10 py-4 text-[12px] font-medium uppercase tracking-widest rounded-full"
            >
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
