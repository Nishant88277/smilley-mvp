"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const films = [
  {
    duration: "157 MIN",
    rating: "7.9",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
  },
  {
    duration: "120 MIN",
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  },
  {
    duration: "120 MIN",
    rating: "8.2",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
  },
  {
    duration: "120 MIN",
    rating: "8.2",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80",
  },
];

const services = [
  {
    title: "Film Productions",
    desc: "Filmmaking involves a number of complex and discrete stages, starting with an initial story, idea, or commission.",
  },
  {
    title: "Web Series Production",
    desc: "Creating compelling episodic content that captivates audiences across digital platforms.",
  },
  {
    title: "Short Films Production",
    desc: "Crafting powerful narratives in concise formats that leave lasting impressions.",
  },
  {
    title: "Music Videos Production",
    desc: "Visual storytelling that elevates music and creates unforgettable artistic experiences.",
  },
  {
    title: "Branded Content Production",
    desc: "Authentic storytelling that connects brands with audiences through meaningful narratives.",
  },
  {
    title: "Promotional & Corporate Films",
    desc: "Professional productions that communicate your message with impact and polish.",
  },
];

const testimonials = [
  {
    quote:
      "Odio sed placerat ac suspendisse dignissim leo ridiculus tellus egestas. Cras aenean adipiscing vivamus finibus letius.",
    name: "Tantowi",
    role: "Producer",
  },
  {
    quote:
      "Mattis finibus quam primis in suscipit est placerat. Eu ipsum pharetra ultricies est vestibulum fringilla nisi curabitur.",
    name: "Marini",
    role: "Director",
  },
];

const team = [
  {
    name: "Faqhrul Husaini",
    role: "Partner",
    bio: "Over 15 years of experience in production and filmmaking. Worked across journalism, documentaries, television and films with major production houses. Commerce post graduate with interest in politics and modern history.",
  },
  {
    name: "Mehran Amrohi",
    role: "Partner",
    bio: "Multiple international film award winning producer/director with 15+ years experience. Developed TV/web shows and films. Directorial debut 'Chidiya' has won many awards globally. Engineering from Jamia University, renowned Ghazal Shaayar.",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Connect" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[var(--background)]/95 backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-12">
          <a href="#" className="flex items-center">
            <Image
              src="https://smileyfilms.in/wp-content/uploads/sites/36/elementor/thumbs/logo-small.png"
              alt="Smiley Films"
              width={130}
              height={34}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-zinc-400 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center gap-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-xl font-light text-zinc-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-20">
        <div className="absolute inset-0 bg-[var(--background)]" />

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            Mumbai-based Production House · Since 2017
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-light leading-[1.2] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl"
          >
            SMILEY, TOUCHING
            <br />
            EMOTIONAL CHORDS
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-lg text-base text-zinc-500"
          >
            We are thrilled to announce the commencement of production on our
            next feature film.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="mt-12 mb-20 inline-block border border-zinc-600 px-8 py-3 text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-100"
          >
            Connect
          </motion.a>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-zinc-600"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                About Us
              </span>
              <h2 className="mt-3 font-display text-3xl font-light text-zinc-100 sm:text-4xl md:text-5xl">
                Filming experience
                <br />
                just got better
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-zinc-400">
                Smiley Films is a Mumbai based Production House, engaged with
                Feature Films, Short Films, Digital Content and Advertisement /
                Promotional Films with strong industry alliances, in-house
                production and post-production facilities.
              </p>
              <p className="text-base leading-relaxed text-zinc-400">
                It has been delivering international quality content since 2017
                across various domains of entertainment business.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 hover:gap-3"
              >
                Discover More
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-zinc-800/60 bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-3"
          >
            <div>
              <h3 className="font-display text-xl font-light text-zinc-200">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                To become diverse and innovative content creation production
                company.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-light text-zinc-200">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                To create high quality content originating from our diverse
                culture, languages and regions in cost efficient approach.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-light text-zinc-200">
                Our Motto
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Talent with diligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Make It Happen */}
      <section className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl px-6 text-center lg:px-12"
        >
          <p className="font-display text-4xl font-light tracking-tight text-zinc-300 sm:text-5xl md:text-6xl lg:text-7xl">
            WE MAKE IT HAPPEN
          </p>
        </motion.div>
      </section>

      {/* Our Works */}
      <section id="works" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-zinc-100 sm:text-4xl">
              Our Works
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {films.map((film, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative aspect-[3/4] overflow-hidden bg-[var(--surface-elevated)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{
                    backgroundImage: `url(${film.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span>{film.duration}</span>
                    <span>{film.rating} Rating</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="#contact"
              className="inline-block border border-zinc-600 px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-300"
            >
              See More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="border-t border-zinc-800/60 bg-[var(--surface)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              What We Offer
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-zinc-100 sm:text-4xl">
              Our Services
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-zinc-800/60 bg-[var(--background)] p-6 transition-colors hover:border-zinc-700/60"
              >
                <h3 className="font-display text-lg font-light text-zinc-200">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-block text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-400"
                >
                  Enquire →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              What Our Clients Say
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-zinc-100 sm:text-4xl">
              Testimonials
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-2"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border-l border-zinc-700 bg-[var(--surface)] p-6"
              >
                <p className="font-display text-lg font-light italic text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-zinc-400">
                    {t.name}
                  </span>
                  <span className="ml-2 text-sm text-zinc-500">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="border-t border-zinc-800/60 bg-[var(--surface)] py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Our Founders
            </span>
            <h2 className="mt-3 font-display text-3xl font-light text-zinc-100 sm:text-4xl">
              Team
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-2"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col gap-6 md:flex-row"
              >
                <div className="h-40 w-full shrink-0 bg-[var(--surface-elevated)] md:h-52 md:w-40" />
                <div>
                  <h3 className="font-display text-xl font-light text-zinc-200">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer
        id="contact"
        className="border-t border-zinc-800/60 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-10 md:flex-row"
          >
            <div>
              <h3 className="font-display text-xl font-light text-zinc-300">
                Smiley Films LLP
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Mumbai-based Production House · Since 2017
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#contact"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Connect
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Award
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Press
              </a>
              <a
                href="#works"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Works
              </a>
              <a
                href="#services"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-zinc-500 transition-colors hover:text-zinc-300"
              >
                About
              </a>
            </nav>
          </motion.div>
          <div className="mt-12 border-t border-zinc-800/60 pt-6 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Smiley Films LLP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
