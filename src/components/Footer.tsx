"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Social links – to be updated by Smiley Team
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
// Map: paste the iframe src from Google Maps (Share → Embed a map). Example query-based URL below.
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Parinee+I+Shah+Industrial+Estate+Veera+Desai+Road+Andheri+West+Mumbai+400053&output=embed";

export default function Footer() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "done" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    // Replace with your form endpoint (e.g. API route or third-party service)
    try {
      await new Promise((r) => setTimeout(r, 800));
      setFormState("done");
    } catch {
      setFormState("error");
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="py-16 md:py-24 relative">
        <div className="absolute inset-0">
          <div className="gradient-orb gradient-orb-1 opacity-30" />
          <div className="gradient-orb gradient-orb-3 opacity-20" />
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact: ID (email), Number, Form */}
            <div>
              <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
                Contact
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light text-white">
                Get in touch
              </h2>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--fg-muted)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-white hover:text-[var(--accent)] transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--fg-muted)]">
                    Number
                  </p>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                    className="mt-1 block text-white hover:text-[var(--accent)] transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--fg-muted)]">
                    Address
                  </p>
                  <p className="mt-1 text-[var(--fg-muted)]">{ADDRESS}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div>
                  <label
                    htmlFor="footer-name"
                    className="block text-sm font-medium text-[var(--fg-muted)] mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="footer-email"
                    className="block text-sm font-medium text-[var(--fg-muted)] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="footer-message"
                    className="block text-sm font-medium text-[var(--fg-muted)] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 text-white placeholder-[var(--fg-dim)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] resize-none"
                    placeholder="Your message"
                  />
                </div>
                {formState === "done" && (
                  <p className="text-sm text-[var(--accent)]">
                    Thanks! We&apos;ll get back to you soon.
                  </p>
                )}
                {formState === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email us.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn-primary px-6 py-3 text-xs font-semibold uppercase tracking-widest disabled:opacity-60"
                >
                  {formState === "sending" ? "Sending…" : "Send"}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="min-h-[320px] lg:min-h-[400px] overflow-hidden border border-[var(--border)]">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smiley Films location"
                className="w-full h-full min-h-[320px] lg:min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex h-20 w-20 flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Smiley Films"
                fill
                className="object-contain transition-opacity group-hover:opacity-90"
                sizes="40px"
              />
            </span>
          </Link>
          <p className="text-sm text-[var(--fg-muted)] order-last md:order-none">
            © {new Date().getFullYear()} All rights reserved. Mumbai
          </p>
          <nav className="flex items-center gap-6" aria-label="Social media">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
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
