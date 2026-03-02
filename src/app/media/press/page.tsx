"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { pressItems } from "./data";

export default function PressPage() {
  const allArticlesRef = useRef<HTMLDivElement>(null);

  const scrollToAll = () => {
    allArticlesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Media
        </Link>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
          Press
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          News and coverage about Smiley Films. Click an article or View More to read on this page.
        </p>

        {/* Slider — no external links; click scrolls to full list */}
        <div className="mt-14">
          <div
            className="slider-track flex gap-6 overflow-x-auto pb-4 -mx-2 px-2 snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {pressItems.slice(0, 8).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={scrollToAll}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[400px] snap-center text-left"
              >
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full min-h-[200px] card-lift hover:border-[var(--accent)]/30 transition-colors">
                  <p className="text-[var(--fg)] leading-relaxed line-clamp-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm text-[var(--accent)] font-medium">
                    {item.source}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={scrollToAll}
              className="btn-outline px-10 py-4 text-[12px] font-medium uppercase tracking-widest rounded-full"
            >
              View More
            </button>
          </div>
        </div>

        {/* Full list — same page, with external links */}
        <div ref={allArticlesRef} className="mt-24 scroll-mt-28">
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
