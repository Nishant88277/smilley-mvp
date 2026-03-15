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

export default function PrivacyPolicyPage() {
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
              Privacy Policy — Smiley Films LLP
            </h1>
            <p className="mt-2 text-[var(--fg-muted)] text-sm">
              Last updated: March 2026
            </p>
          </div>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            Smiley Films LLP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            respects your privacy and is committed to protecting any information
            that may be collected when you visit our website,
            www.smileyfilms.in.
          </p>

          <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
            This Privacy Policy explains how we collect, use, and safeguard
            information obtained through the website.
          </p>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Our website may automatically collect certain non-personal
                information when visitors browse the site. This may include
                information such as browser type, device information, IP
                address, pages visited, and general website usage data.
              </span>
              <span className="block">
                If you choose to contact us via email at info@smileyfilms.in, we
                may collect personal information such as your name, email
                address, and any information voluntarily included in your
                message.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              How We Use Information
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed mb-3">
              Information collected through the website may be used for the
              following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--fg)] text-sm md:text-base leading-relaxed mb-3">
              <li>To respond to inquiries or communication sent to us</li>
              <li>To improve the functionality and performance of our website</li>
              <li>To understand how visitors interact with our content</li>
              <li>To maintain website security and stability</li>
            </ul>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              We do not sell, rent, or trade personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Cookies and Analytics
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Our website may use cookies or similar technologies to enhance
                the browsing experience and analyze website traffic. Cookies are
                small files stored on a visitor&apos;s device that help websites
                function efficiently.
              </span>
              <span className="block">
                Visitors can control or disable cookies through their browser
                settings.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              External Links
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed space-y-3">
              <span className="block">
                Our website may contain links to external websites, including
                press coverage, social media platforms, or third-party services.
                Smiley Films LLP is not responsible for the privacy practices or
                content of external websites.
              </span>
              <span className="block">
                We encourage users to review the privacy policies of any
                third-party websites they visit.
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Data Security
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              We take reasonable measures to maintain the security of our
              website and any information submitted through it. However, no
              method of internet transmission or electronic storage is
              completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Children&apos;s Privacy
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              This website is not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed">
              Smiley Films LLP may update this Privacy Policy from time to time.
              Any changes will be reflected on this page with an updated
              revision date.
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <h2 className="text-white font-serif text-xl md:text-2xl font-semibold mb-3">
              Contact
            </h2>
            <p className="text-[var(--fg)] text-sm md:text-base leading-relaxed mb-2">
              If you have any questions regarding this Privacy Policy, you may
              contact us at:
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
