"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "./data";

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
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Back to Team
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white">
          Team
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          The people behind Smiley Films. Image, name, designation, bio and links.
        </p>

        <div className="mt-16 space-y-24">
          {teamMembers.map((member) => (
            <div
              key={member.slug}
              id={member.slug}
              ref={(el) => {
                refs.current[member.slug] = el;
              }}
              className="scroll-mt-28"
            >
              <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
                <div className="md:col-span-2 flex-shrink-0">
                  <div className="aspect-square max-w-sm rounded-2xl overflow-hidden relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
                    {member.name}
                  </h2>
                  <p className="text-[var(--accent)] font-medium">
                    {member.designation}
                  </p>
                  <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {member.imdb && (
                      <a
                        href={member.imdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--accent)] hover:underline"
                      >
                        IMDb
                      </a>
                    )}
                    {member.socialLinks?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--accent)] hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
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
