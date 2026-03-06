"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { pressItems, type PressItem } from "@/app/media/press/data";
import { ArrowUpDownIcon } from "lucide-react";

const ITEMS_PER_PAGE = 9;

function SortByControl({
  value,
  onChange,
}: {
  value: "newest" | "oldest";
  onChange: (v: "newest" | "oldest") => void;
}) {
  const isNewest = value === "newest";
  const label = isNewest ? "Newest to Oldest" : "Oldest to Newest";

  return (
    <button
      type="button"
      onClick={() => onChange(isNewest ? "oldest" : "newest")}
      className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-white text-sm transition-colors"
      aria-label={`Sort: ${label}. Click to switch to ${isNewest ? "Oldest to Newest" : "Newest to Oldest"}.`}
    >
      <ArrowUpDownIcon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}

function sortedItems(
  items: PressItem[],
  sort: "newest" | "oldest",
): PressItem[] {
  if (sort === "oldest") return [...items].reverse();
  return items;
}

export default function PressPage() {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(1);

  const ordered = useMemo(() => sortedItems(pressItems, sort), [sort]);
  const totalPages = Math.ceil(ordered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const pageItems = ordered.slice(start, start + ITEMS_PER_PAGE);

  const setSortAndResetPage = (v: "newest" | "oldest") => {
    setSort(v);
    setPage(1);
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#press"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Back to Press
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h1 className="text-[var(--accent)] text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Press
          </h1>
          <SortByControl value={sort} onChange={setSortAndResetPage} />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pageItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-square w-full overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] mb-3">
                  <div className="w-full h-full bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--fg-muted)] text-sm">
                    {/* Image/video placeholder – replace with real thumb when available */}
                    <span className="sr-only">Article</span>
                  </div>
                </div>
                <p className="text-[var(--fg-muted)] text-sm md:text-base leading-snug underline decoration-[var(--border)] decoration-1 underline-offset-2 group-hover:text-[var(--accent)] group-hover:decoration-[var(--accent)] transition-colors line-clamp-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </a>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav
            className="mt-16 flex justify-center items-center gap-2"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/40 transition-colors"
              aria-label="Previous page"
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
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`flex h-10 min-w-[2.5rem] items-center justify-center border px-3 text-sm font-medium transition-colors ${
                    page === n
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                      : "border-[var(--border)] bg-[var(--bg-card)] text-white hover:bg-white/5 hover:border-[var(--border)]"
                  }`}
                  aria-label={`Page ${n}`}
                  aria-current={page === n ? "page" : undefined}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]/40 transition-colors"
              aria-label="Next page"
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
          </nav>
        )}
      </div>
    </section>
  );
}
