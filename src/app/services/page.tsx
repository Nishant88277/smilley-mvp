"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Film Productions",
    description:
      "Full-scale feature film production from script to screen with world-class crew.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
  },
  {
    title: "Web Series",
    description:
      "Binge-worthy episodic content crafted for modern streaming platforms.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent) 100%)",
  },
  {
    title: "Short Films",
    description:
      "Powerful storytelling in compact format for festivals and digital release.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--cinema-purple) 0%, var(--accent) 100%)",
  },
  {
    title: "Music Videos",
    description:
      "Visual storytelling that amplifies the soul of every musical composition.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--accent) 0%, var(--cinema-pink) 100%)",
  },
  {
    title: "Branded Content",
    description:
      "Premium content that weaves brand narratives into compelling stories.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--accent-light) 0%, var(--cinema-orange) 100%)",
  },
  {
    title: "Corporate Films",
    description:
      "Professional productions that elevate your business communication.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%)",
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[var(--accent)] opacity-[0.07] blur-[130px]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div className="flex items-center gap-4 mb-4" variants={fadeInUp}>
              <span className="h-px w-12 bg-gradient-to-r from-[var(--accent)] to-transparent rounded-full" />
              <span className="text-[var(--accent)] text-sm font-medium tracking-[0.2em] uppercase">
                What We Create
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight"
            >
              <span className="block">Services</span>
              <span className="block text-gradient-warm mt-1">that tell stories</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-[var(--fg-muted)] text-lg leading-relaxed"
            >
              End-to-end production across features, series, shorts, music videos,
              and branded content.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service cards */}
      <section className="relative pb-20 md:pb-28 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden card-lift"
              >
                <div className="absolute inset-0 glass-card" />
                <div className="relative p-8 md:p-10">
                  {/* Icon with gradient glow */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 text-white shadow-lg group-hover:shadow-[0_0_40px_var(--accent-glow)] transition-shadow duration-300"
                    style={{ background: service.gradient }}
                  >
                    {service.icon}
                  </div>
                  <h2 className="mt-6 text-xl md:text-2xl font-serif font-light text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[var(--fg-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="absolute top-6 right-6 text-[var(--fg-dim)] text-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
