"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredFilms } from "../data";
import type { Film } from "../data";

const labelClass =
  "text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2 block";
const valueClass = "text-white text-sm md:text-base leading-relaxed";

export default function FilmDetail({ film }: { film: Film }) {
  const otherFilms = featuredFilms.filter((f) => f.slug !== film.slug);

  return (
    <div className="min-h-screen">
      <div className="px-6 md:px-12 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Back button - circular, left (matches reference) */}
          <div className="mb-8 md:mb-10">
            <Link
              href="/#featured-work"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
              aria-label="Back to Featured Work"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
          </div>

          <h1 className="sr-only">{film.title}</h1>

          {/* Two columns: portrait poster left, details right — same height */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-stretch">
            {/* Left: portrait poster — height aligns with right text block */}
            <div className="relative w-full h-full min-h-[420px] lg:min-h-0 max-w-md mx-auto lg:mx-0 lg:max-w-none overflow-hidden border border-[var(--border)]">
              <Image
                src={film.posterPortrait}
                alt={film.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>

            {/* Right: Synopsis, Released Date, Cast & Crew, Platform (red labels, white text) */}
            <div className="flex flex-col space-y-8">
              <div>
                <span className={labelClass}>Synopsis</span>
                <p className={valueClass}>{film.synopsis}</p>
              </div>

              <div>
                <span className={labelClass}>Released Date</span>
                <p className={valueClass}>{film.year}</p>
              </div>

              <div>
                <span className={labelClass}>Cast & Crew</span>
                <p className={valueClass}>
                  {film.cast.length > 0 ? film.cast.join(", ") : "—"}
                </p>
              </div>

              {film.platform && (
                <div>
                  <span className={labelClass}>Platform</span>
                  <p className={valueClass}>{film.platform}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trailer - landscape below, full width */}
      <section className="px-6 md:px-12 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-6">
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

      {/* Other Movies */}
      {otherFilms.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-white font-serif text-3xl md:text-4xl font-light uppercase text-center">
              Other Movies
            </h2>
            <div className="mt-2 flex justify-center">
              <div className="w-12 h-0.5 bg-[var(--accent)]" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {otherFilms.map((f) => (
                <Link
                  key={f.slug}
                  href={`/featured-work/${f.slug}`}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] group"
                >
                  <div className="aspect-[3/4] relative overflow-hidden border border-[var(--border)]">
                    <Image
                      src={f.posterPortrait}
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
        </section>
      )}
    </div>
  );
}
