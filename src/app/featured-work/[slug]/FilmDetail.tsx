import SafeImage from "@/components/SafeImage";
import Link from "next/link";
import { featuredFilms } from "../data";
import type { Film } from "../data";

const labelClass =
  "text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2 block";
const valueClass = "text-white text-sm md:text-base leading-relaxed";

/** Convert any YouTube URL (youtu.be, watch, embed) to embed URL for iframes. */
function youtubeEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1).split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return url;
      const v = u.searchParams.get("v");
      return v ? `https://www.youtube.com/embed/${v}` : url;
    }
  } catch {
    // invalid URL
  }
  return url;
}

export default function FilmDetail({ film }: { film: Film }) {
  const otherFilms = featuredFilms.filter((f) => f.slug !== film.slug);

  return (
    <div className="min-h-screen">
      <div className="px-6 md:px-12 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Back link - matches press page style */}
          <div className="mb-8 md:mb-10">
            <Link
              href="/#featured-work"
              className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm transition-colors"
              aria-label="Back to Featured Work"
            >
              ← Back to home
            </Link>
          </div>

          <h1 className="sr-only">{film.title}</h1>

          {/* Two columns: portrait poster left, details right — same height */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-stretch">
            {/* Left: portrait poster — height aligns with right text block */}
            <div className="relative w-full h-full min-h-[420px] lg:min-h-0 max-w-md mx-auto lg:mx-0 lg:max-w-none overflow-hidden">
              <SafeImage
                src={film.posterPortrait || "/images/placeholder-poster.svg"}
                alt={film.title}
                fill
                className="object-contain object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>

            {/* Right: Synopsis, Release Date, Duration, Cast, Crew, Platform */}
            <div className="flex flex-col space-y-8">
              {film.year && (
                <div>
                  <span className={labelClass}>Release Date</span>
                  <p className={valueClass}>{film.year}</p>
                </div>
              )}
              {film.synopsis && (
                <div>
                  <span className={labelClass}>Synopsis</span>
                  <p className={valueClass}>{film.synopsis}</p>
                </div>
              )}
              {film.cast && film.cast.length > 0 && (
                <div>
                  <span className={labelClass}>Cast</span>
                  <p className={valueClass}>
                    {film.cast.length > 0 ? film.cast.join(", ") : "—"}
                  </p>
                </div>
              )}

              {"crew" in film && film.crew && (
                <div>
                  <span className={labelClass}>Director</span>
                  <p className={valueClass}>{film.crew}</p>
                </div>
              )}

              {film.platform && film.platform !== "—" && (
                <div>
                  <span className={labelClass}>Watch it</span>
                  <p className={valueClass}>
                    {film.platform}{" "}
                    {(film.watchLink || film.trailerUrl) && (
                      <a
                        href={film.watchLink || film.trailerUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline"
                      >
                        Watch Now
                      </a>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trailer - only when YouTube link is available */}
      {film.trailerUrl && (
        <section className="px-6 md:px-12 pb-12 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-6">
              Video
            </h2>
            <div className="aspect-video w-full overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]">
              <iframe
                src={youtubeEmbedUrl(film.trailerUrl)}
                title={`${film.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Other Movies */}
      {otherFilms.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-white font-serif text-3xl md:text-4xl font-light uppercase text-center">
              Other Works
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
                    <SafeImage
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
