"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "./data";

function ImdbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M 2 3 L 2 21 L 5 21 L 5 9 L 10 9 L 10 21 L 13 21 L 13 3 L 10 3 L 10 7 L 5 7 L 5 3 Z M 14 3 L 14 21 L 22 21 L 22 17 L 17.5 17 L 17.5 3 Z M 17.5 7 L 20.5 7 L 20.5 13 L 17.5 13 Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function TeamPage() {
  const [mounted, setMounted] = useState(false);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = refs.current[hash] ?? document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [mounted]);

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-8 transition-colors"
        >
          ← Back to Team
        </Link>

        <header className="text-center mb-16">
          <h1 className="text-[var(--accent)] text-3xl md:text-4xl font-semibold tracking-wide uppercase">
            Our Team
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-[var(--fg-muted)]">
            The people behind Smiley Films.
          </p>
        </header>

        <div className="space-y-20 md:space-y-28">
          {teamMembers.map((member) => (
            <div
              key={member.slug}
              id={member.slug}
              ref={(el) => {
                refs.current[member.slug] = el;
              }}
              className="scroll-mt-28"
            >
              <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-8 md:gap-14 items-start">
                <div className="flex justify-center md:justify-start">
                  <div className="aspect-[3/4] w-full max-w-[320px] overflow-hidden border border-[var(--border)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={320}
                      height={427}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                </div>
                <div className="min-w-0 space-y-5">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase tracking-wide">
                    {member.name}
                  </h2>
                  <p className="text-white font-medium">
                    {member.designation}
                  </p>
                  <p className="text-[var(--fg-muted)] leading-relaxed text-base md:text-lg">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-2 text-[var(--accent)]">
                    {(() => {
                      const links: { href: string; label: string }[] = [
                        ...(member.imdb ? [{ href: member.imdb, label: "IMDb" }] : []),
                        ...(member.socialLinks ?? []),
                      ];
                      return links.map((item, i) => (
                        <span key={item.href} className="inline-flex items-center gap-2">
                          {i > 0 && <span className="text-[var(--fg-muted)]" aria-hidden>|</span>}
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm hover:underline"
                          >
                            {item.label === "IMDb" && <ImdbIcon className="w-5 h-5" />}
                            {item.label.toLowerCase() === "linkedin" && <LinkedInIcon className="w-5 h-5" />}
                            {item.label.toLowerCase() === "instagram" && <InstagramIcon className="w-5 h-5" />}
                            <span>{item.label}</span>
                          </a>
                        </span>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
