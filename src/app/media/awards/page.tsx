import Link from "next/link";

const awards = [
  { year: "2017", title: "Second Best Film (Golden Knight)", event: "Golden Knight International Film Festival", location: "Russia" },
  { year: "2017", title: "Second Best Film (Golden Elephant)", event: "ICFFI", location: "Hyderabad" },
  { year: "2016", title: "Best Debutant Director", event: "South Asia International Film Festival", location: "New York" },
  { year: "2016", title: "Best Debutant Director", event: "Dadasaheb Phalke International Film Festival", location: "New Delhi" },
  { year: "2016", title: "Best Film", event: "Smile International Film Festival", location: "New Delhi" },
];

export default function AwardsPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/media"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Media
        </Link>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
          Awards
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          Awards won for film Chidiya. Visuals will be added.
        </p>

        <div className="mt-16 space-y-6">
          {awards.map((award, i) => (
            <div
              key={`${award.event}-${award.title}-${i}`}
              className="glass-card p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Placeholder for award visual — replace with real image when available */}
              <div className="flex-shrink-0 w-full sm:w-32 h-32 bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center text-[var(--fg-dim)] text-sm">
                Visual
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-[var(--accent)] text-sm font-medium">
                  <span>{award.year}</span>
                  <span>·</span>
                  <span>{award.location}</span>
                </div>
                <h2 className="mt-2 text-lg font-medium text-[var(--fg)]">
                  {award.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">
                  {award.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
