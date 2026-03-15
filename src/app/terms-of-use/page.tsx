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

export default function TermsOfUsePage() {
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
              Terms of Use — Smiley Films LLP
            </h1>
            <p className="mt-2 text-[var(--fg-muted)] text-sm">
              Last updated: March 2026
            </p>
          </div>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            By accessing or using the website www.smileyfilms.in, you agree to
            comply with and be bound by the following Terms of Use.
          </p>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            If you do not agree with these terms, you should discontinue use of
            the website.
          </p>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Use of Website
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                This website is intended to provide information about Smiley
                Films LLP, its projects, and related activities in film and
                media production.
              </span>
              <span className="block">
                Users agree to use the website only for lawful purposes and in a
                manner that does not damage, disrupt, or interfere with the
                operation of the site.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Intellectual Property
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                All materials on this website, including text, images,
                graphics, logos, and project information, are owned by Smiley
                Films LLP unless otherwise indicated.
              </span>
              <span className="block">
                These materials may not be reproduced, copied, modified, or
                distributed without prior written permission.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              External Links
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              The website may include links to third-party websites. These
              links are provided for informational purposes only, and Smiley
              Films LLP does not endorse or assume responsibility for external
              content.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Website Availability
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              While we strive to ensure the website remains accessible, Smiley
              Films LLP does not guarantee uninterrupted access or error-free
              operation of the site.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Changes to Terms
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              Smiley Films LLP reserves the right to update or modify these
              Terms of Use at any time without prior notice. Continued use of the
              website following updates constitutes acceptance of the revised
              terms.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Contact
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed mb-2">
              For any questions regarding these Terms of Use, please contact:
            </p>
            <a
              href="mailto:info@smileyfilms.in"
              className="text-[var(--accent)] hover:underline font-medium"
            >
              info@smileyfilms.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
