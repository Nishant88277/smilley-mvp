"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredFilms } from "./data";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturedWorkPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
              Portfolio
            </span>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Featured Work
            </h1>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
              Select a project for full details — release date, synopsis, cast &
              crew.
            </p>
          </motion.div>

          {/* Landscape poster slider */}
          <div className="relative">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors -translate-x-2"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 glass flex items-center justify-center text-white hover:bg-[var(--accent)]/20 transition-colors translate-x-2"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            <div
              ref={scrollRef}
              className="slider-track flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {featuredFilms.map((film) => (
                <Link
                  key={film.slug}
                  href={`/featured-work/${film.slug}`}
                  className="group flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[55vw] lg:w-[45vw] snap-center"
                >
                  <div className="aspect-[16/10] overflow-hidden image-hover-zoom relative border border-[var(--border)]">
                    <Image
                      src={film.poster}
                      alt={film.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 border-t border-[var(--accent)]/40">
                      <h2 className="font-serif text-2xl md:text-3xl font-light text-white group-hover:text-[var(--accent)] transition-colors">
                        {film.title}
                      </h2>
                      <div className="mt-3 flex flex-wrap items-center gap-x-0 gap-y-1 text-sm text-[var(--fg-muted)]">
                        <span>{film.category}</span>
                        <span className="mx-2 text-[var(--accent)]" aria-hidden>
                          |
                        </span>
                        <span>{film.runtime}</span>
                        <span className="mx-2 text-[var(--accent)]" aria-hidden>
                          |
                        </span>
                        <span>{film.platform ?? "—"}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
