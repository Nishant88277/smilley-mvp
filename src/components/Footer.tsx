"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/smileyfilms",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.993 2.013 9.337 2 11.97 2h.06c.013 0 .065 0 .123.002zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@smileyfilms",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/smileyfilms",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CONTACT_EMAIL = "info@smileyfilms.in";
const CONTACT_PHONE = "+91 22 4578 1660";
const ADDRESS =
  "1410, Parinee I, Shah Industrial Estate, Off Veera Desai Road, Andheri West, Mumbai 400053";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Parinee+I+Shah+Industrial+Estate+Veera+Desai+Road+Andheri+West+Mumbai+400053&output=embed";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Featured Work", href: "/#featured-work" },
  { label: "About Us", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Press", href: "/#press" },
  { label: "Awards", href: "/#awards" },
  { label: "Gallery", href: "/media/gallery" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as any },
  },
};

export default function Footer() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setFormState("done");
    } catch {
      setFormState("error");
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

      {/* Main contact section */}
      <div className="py-20 md:py-28 relative bg-[var(--bg)]">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="gradient-orb gradient-orb-1 opacity-20" />
          <div className="gradient-orb gradient-orb-3 opacity-15" />
          <div className="absolute inset-0 mesh-gradient opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          {/* Section label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <span className="section-label justify-center">Contact</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Let&apos;s <span className="text-gradient">Create</span> Together
            </h2>
            <p className="mt-4 text-[var(--fg-muted)] max-w-md mx-auto text-sm">
              Have a project in mind? We&apos;d love to hear from you. Reach out
              and let&apos;s make something extraordinary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info + form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Contact details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 mb-10">
                {[
                  {
                    label: "Email",
                    value: CONTACT_EMAIL,
                    href: `mailto:${CONTACT_EMAIL}`,
                    Icon: Mail,
                  },
                  {
                    label: "Phone",
                    value: CONTACT_PHONE,
                    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
                    Icon: Phone,
                  },
                  {
                    label: "Address",
                    value: ADDRESS,
                    href: null,
                    Icon: MapPin,
                  },
                ].map((item) => {
                  const Icon = item.Icon;
                  return (
                    <div key={item.label} className="flex gap-4 items-start">
                      <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--fg-dim)] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-[var(--fg-muted)] hover:text-white transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[var(--accent)]/30 to-transparent mb-8" />

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="footer-name"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-dim)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="footer-name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="footer-email"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-dim)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="footer-message"
                    className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-dim)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-sm text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30 resize-none transition-colors duration-200"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {formState === "done" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-[var(--accent)] flex items-center gap-2"
                  >
                    <span>✓</span> Thank you! We&apos;ll get back to you soon.
                  </motion.p>
                )}
                {formState === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <div className="flex justify-end">
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
                      "Message Sent ✓"
                    ) : (
                      <>
                        Send Message
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
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.1,
              }}
              className="flex flex-col gap-6"
            >
              <div className="flex-1 min-h-[320px] lg:min-h-[440px] overflow-hidden border border-[var(--border)] relative group">
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 z-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-[var(--accent)]" />
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-[var(--accent)]" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 z-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent)]" />
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-[var(--accent)]" />
                </div>
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "320px",
                    filter:
                      "invert(90%) hue-rotate(180deg) saturate(0.3) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smiley Films location"
                  className="w-full h-full min-h-[320px] lg:min-h-[440px]"
                />
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)]/40 group-hover:bg-[var(--accent)] transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-6">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex h-9 w-20 flex-shrink-0">
              <div className="relative w-full h-full mix-blend-screen bg-black overflow-hidden rounded-sm">
                <Image
                  src="/images/logo.svg"
                  alt="Smiley Films"
                  fill
                  className="object-contain object-left [filter:invert(1)_hue-rotate(180deg)]"
                  sizes="80px"
                />
              </div>
            </span>
          </Link>

          <p className="text-xs text-[var(--fg-dim)] order-last md:order-none text-center">
            © {new Date().getFullYear()} Smiley Films. All rights reserved.
            Mumbai, India.
          </p>

          <nav className="flex items-center gap-4" aria-label="Social media">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all duration-200 hover:scale-110"
                title={s.label}
              >
                <span className="sr-only">{s.label}</span>
                {s.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
