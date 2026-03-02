"use client";

import Link from "next/link";
import { pressItems } from "@/app/media/press/data";

export default function PressPage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#press"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Back to Press
        </Link>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
          Press
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          All articles and coverage. Click through to read on the source site.
        </p>

        <div className="mt-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
            All articles
          </h2>
          <ul className="space-y-6">
            {pressItems.map((item) => (
              <li
                key={item.id}
                className="glass-card rounded-2xl p-6 md:p-8 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
              >
                <p className="text-[var(--fg)] leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm text-[var(--fg-muted)]">
                  {item.source}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                >
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
