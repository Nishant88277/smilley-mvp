"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function DisclaimerPage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Back to home
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8"
        >
          <div>
            <h1 className="text-[var(--accent)] text-3xl md:text-4xl font-bold uppercase tracking-wide">
              Website Disclaimer — Smiley Films LLP
            </h1>
            <p className="mt-2 text-[var(--fg-muted)] text-sm">
              Last updated: March 2026
            </p>
          </div>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            The information provided on the website www.smileyfilms.in is for
            general informational purposes only.
          </p>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            All content published on this website, including information about
            projects, company activities, press mentions, and related material, is
            provided in good faith. While Smiley Films LLP strives to keep
            information accurate and up to date, we make no guarantees regarding
            completeness, reliability, or accuracy.
          </p>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              External Links
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                This website may contain links to external websites, including
                press articles, media coverage, and social media platforms. These
                links are provided for convenience and informational purposes.
              </span>
              <span className="block">
                Smiley Films LLP does not control or take responsibility for the
                content, policies, or practices of any third-party websites.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                All original content on this website, including text, graphics,
                branding elements, and visual material related to Smiley Films
                LLP, is the intellectual property of the company unless
                otherwise stated.
              </span>
              <span className="block">
                Unauthorized reproduction, distribution, or use of this material
                without permission may violate applicable copyright or trademark
                laws.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Under no circumstances shall Smiley Films LLP be liable for any
                losses or damages arising from the use of this website or
                reliance on information presented on it.
              </span>
              <span className="block">
                By using this website, you agree to this disclaimer and its
                terms.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
