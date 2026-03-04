"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredFilms } from "../data";
import type { Film } from "../data";

export default function FilmDetail({ film }: { film: Film }) {
  const [activeTab, setActiveTab] = useState<"synopsis" | "cast" | "gallery">("synopsis");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const hasCrew =
    "crew" in film &&
    Array.isArray((film as { crew?: string[] }).crew) &&
    (film as { crew: string[] }).crew.length > 0;
  const otherFilms = featuredFilms.filter((f) => f.slug !== film.slug);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [otherFilms.length]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const titleWords = film.title.split(" ");
  const titleFirst = titleWords.slice(0, -1).join(" ");
  const titleLast = titleWords.length > 1 ? titleWords[titleWords.length - 1] : "";

  return (
    <div className="min-h-screen">
      {/* Back link - minimal */}
      <div className="px-6 md:px-12 pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#featured-work"
            className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm transition-colors"
          >
            ← Back to Featured Work
          </Link>
        </div>
      </div>

      {/* Full-width landscape hero with title overlay on right */}
      <div className="relative w-full aspect-[16/10] md:aspect-[21/9] mt-6 md:mt-8 overflow-hidden">
        <Image
          src={film.poster}
          alt={film.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end pr-6 md:pr-12 lg:pr-20">
          <div className="flex items-center gap-2 md:gap-3">
            {titleFirst && (
              <>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight">
                  {titleFirst}
                </h1>
                <div className="w-1 md:w-1.5 h-16 md:h-20 bg-[var(--accent)] shrink-0" />
              </>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight">
              {titleLast || film.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Release Date, Genre, Cast - visible on load (Red Chillies style) */}
      <div className="w-full bg-[var(--bg-elevated)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <div>
              <span className="text-[var(--fg-muted)] uppercase tracking-wider">Release date</span>
              <span className="ml-2 text-white">{film.year}</span>
            </div>
            <span className="text-[var(--accent)]" aria-hidden>|</span>
            <div>
              <span className="text-[var(--fg-muted)] uppercase tracking-wider">Genre</span>
              <span className="ml-2 text-white">{film.category}</span>
            </div>
            <span className="text-[var(--accent)]" aria-hidden>|</span>
            <div>
              <span className="text-[var(--fg-muted)] uppercase tracking-wider">Cast</span>
              <span className="ml-2 text-white">
                {film.cast.length > 0 ? film.cast.join(", ") : "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Red tab bar - no rounded corners */}
      <div className="w-full bg-[var(--accent)]">
        <div className="mx-auto max-w-7xl">
          <div className="flex">
            <button
              type="button"
              onClick={() => setActiveTab("synopsis")}
              className={`px-6 md:px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                activeTab === "synopsis"
                  ? "bg-[var(--fg-muted)] text-white"
                  : "text-white hover:bg-[var(--accent-dark)]"
              }`}
            >
              Synopsis
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cast")}
              className={`px-6 md:px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                activeTab === "cast"
                  ? "bg-[var(--fg-muted)] text-white"
                  : "text-white hover:bg-[var(--accent-dark)]"
              }`}
            >
              Cast & Crew
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("gallery")}
              className={`px-6 md:px-10 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                activeTab === "gallery"
                  ? "bg-[var(--fg-muted)] text-white"
                  : "text-white hover:bg-[var(--accent-dark)]"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Tab content - dark background, left-aligned text */}
      <section className="bg-[var(--bg)] py-12 md:py-16 px-6 md:px-12">
        <div className="mx-auto max-w-4xl">
          {activeTab === "synopsis" && (
            <div className="text-[var(--fg)] text-base md:text-lg leading-relaxed whitespace-pre-line">
              {film.synopsis}
            </div>
          )}
          {activeTab === "cast" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                  Release date
                </h2>
                <p className="text-[var(--fg)]">{film.year}</p>
              </div>
              <div>
                <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                  Genre
                </h2>
                <p className="text-[var(--fg)]">{film.category}</p>
              </div>
              <div>
                <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                  Cast & Crew
                </h2>
                {film.cast.length > 0 || hasCrew ? (
                  <ul className="flex flex-wrap gap-2">
                    {film.cast.map((name) => (
                      <li
                        key={name}
                        className="px-4 py-2 border border-[var(--border)] text-[var(--fg)] text-sm"
                      >
                        {name}
                      </li>
                    ))}
                    {hasCrew &&
                      (film as { crew: string[] }).crew.map((name) => (
                        <li
                          key={name}
                          className="px-4 py-2 border border-[var(--border)] text-[var(--fg)] text-sm"
                        >
                          {name}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-[var(--fg-muted)]">—</p>
                )}
              </div>
            </div>
          )}
          {activeTab === "gallery" && (
            <p className="text-[var(--fg-muted)]">Gallery coming soon.</p>
          )}
        </div>
      </section>

      {/* Trailer - full width landscape, no rounded corners */}
      <section className="px-6 md:px-12 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-4">
            Trailer
          </h2>
          <div className="aspect-video w-full overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]">
            <iframe
              src={film.trailerUrl}
              title={`${film.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Other Movies - portrait posters, title below, no rounded corners */}
      {otherFilms.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-white font-serif text-3xl md:text-4xl font-light uppercase text-center">
              Other Movies
            </h2>
            <div className="mt-2 flex justify-center">
              <div className="w-12 h-0.5 bg-[var(--accent)]" />
            </div>

            <div className="relative mt-12">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent-light)] text-sm font-medium transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Prev
                </button>
              )}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent-light)] text-sm font-medium transition-colors"
                  aria-label="Next"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <div
                ref={scrollRef}
                className="slider-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {otherFilms.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/featured-work/${f.slug}`}
                    className="flex-shrink-0 w-[140px] sm:w-[160px] snap-center group"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden border border-[var(--border)]">
                      <Image
                        src={"posterPortrait" in f && f.posterPortrait ? f.posterPortrait : f.poster}
                        alt={f.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="160px"
                      />
                    </div>
                    <p className="mt-3 text-white text-sm text-center group-hover:text-[var(--accent)] transition-colors">
                      {f.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
