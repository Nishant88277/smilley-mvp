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

export default function CookiePolicyPage() {
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
              Cookie Policy — Smiley Films LLP
            </h1>
            <p className="mt-2 text-[var(--fg-muted)] text-sm">
              Last updated: March 2026
            </p>
          </div>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            This Cookie Policy explains how Smiley Films LLP uses cookies and
            similar technologies on its website www.smileyfilms.in.
          </p>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              What Are Cookies
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              Cookies are small text files that are placed on a visitor&apos;s
              device when they access a website. These files help websites
              function properly and provide information about how visitors
              interact with the site.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              How We Use Cookies
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed mb-3">
              Our website may use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--fg)] text-sm md:text-base leading-relaxed">
              <li>To ensure the website functions correctly</li>
              <li>To understand how visitors navigate and use the website</li>
              <li>To improve overall website performance and user experience</li>
              <li>
                To enable certain third-party services such as analytics or
                embedded media
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Third-Party Cookies
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Some cookies may be placed by third-party services integrated
                into the website. These may include services such as analytics
                tools, social media platforms, or video players.
              </span>
              <span className="block">
                These third parties have their own privacy and cookie policies
                which govern how they handle data.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Managing Cookies
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Visitors can choose to accept or decline cookies through their
                browser settings. Most web browsers allow users to control
                cookie preferences or delete cookies entirely.
              </span>
              <span className="block">
                Disabling cookies may affect certain features of the website.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Updates to This Policy
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              Smiley Films LLP may update this Cookie Policy periodically to
              reflect changes in website functionality or legal requirements.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed mb-2">
              For any questions regarding this Cookie Policy, please contact:
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
