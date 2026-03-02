"use client";

import Image from "next/image";
import Link from "next/link";
import type { Film } from "../data";

export default function FilmDetail({ film }: { film: Film }) {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#featured-work"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Back to Featured Work
        </Link>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
              <Image
                src={"posterPortrait" in film && film.posterPortrait ? film.posterPortrait : film.poster}
                alt={film.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <p className="mt-4 text-[var(--fg-muted)] text-sm">
              {film.category} · {film.runtime}
              {film.platform ? ` · ${film.platform}` : ""} · {film.year}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-10">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-white">
              {film.title}
            </h1>

            <div>
              <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                Release date
              </h2>
              <p className="text-[var(--fg)]">{film.year}</p>
            </div>

            <div>
              <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                Synopsis
              </h2>
              <p className="text-[var(--fg)] text-lg leading-relaxed">
                {film.synopsis}
              </p>
            </div>

            <div>
              <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                Cast
              </h2>
              <ul className="flex flex-wrap gap-3">
                {film.cast.map((name) => (
                  <li
                    key={name}
                    className="px-4 py-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--fg)] transition-colors"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            {"crew" in film && Array.isArray((film as { crew?: string[] }).crew) && (film as { crew: string[] }).crew.length > 0 && (
              <div>
                <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                  Crew
                </h2>
                <ul className="flex flex-wrap gap-3">
                  {(film as { crew: string[] }).crew.map((name) => (
                    <li
                      key={name}
                      className="px-4 py-2 rounded-full border border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--fg)] transition-colors"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-3">
                Trailer
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]">
                <iframe
                  src={film.trailerUrl}
                  title={`${film.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
