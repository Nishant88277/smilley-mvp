"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

const inputClass =
  "w-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-200";
const labelClass =
  "block text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-dim)] mb-2";

export default function CareersPage() {
  const router = useRouter();
  const [formState, setFormState] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setFormState("done");
      setTimeout(() => router.push("/"), 1500);
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-2xl">
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
          className="mb-12"
        >
          <h1 className="text-[var(--accent)] text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Work with us
          </h1>
          <p className="mt-3 text-[var(--fg-muted)] text-sm leading-relaxed">
            Interested in joining Smiley Films? Tell us about yourself and the
            role you&apos;re looking for.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="career-name" className={labelClass}>
                Name
              </label>
              <input
                id="career-name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="career-number" className={labelClass}>
                Number
              </label>
              <input
                id="career-number"
                name="number"
                type="tel"
                required
                className={inputClass}
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="career-email" className={labelClass}>
                Email
              </label>
              <input
                id="career-email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="career-location" className={labelClass}>
                Location
              </label>
              <input
                id="career-location"
                name="location"
                type="text"
                required
                className={inputClass}
                placeholder="City, Country"
              />
            </div>
          </div>

          <div>
            <label htmlFor="career-role" className={labelClass}>
              Role
            </label>
            <input
              id="career-role"
              name="role"
              type="text"
              required
              className={inputClass}
              placeholder="e.g. Director, Editor, Cinematographer"
            />
          </div>

          <div>
            <label htmlFor="career-message" className={labelClass}>
              Message
            </label>
            <textarea
              id="career-message"
              name="message"
              rows={5}
              required
              className={`${inputClass} resize-none`}
              placeholder="Tell us about your experience and why you'd like to work with us..."
            />
          </div>

          {formState === "done" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-[var(--accent)] flex items-center gap-2"
            >
              <span>✓</span> Thank you! We&apos;ll be in touch soon.
            </motion.p>
          )}
          {formState === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={formState === "sending" || formState === "done"}
              className="btn-primary w-auto min-w-[200px] px-10 py-4 text-xs font-semibold uppercase tracking-widest disabled:opacity-60 flex items-center justify-center gap-3"
            >
              {formState === "sending" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending…
                </>
              ) : formState === "done" ? (
                "Submitted ✓"
              ) : (
                <>
                  Submit
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
