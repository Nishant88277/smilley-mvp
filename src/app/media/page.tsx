import Link from "next/link";

const mediaLinks = [
  { href: "/media/press", label: "Press", description: "News and coverage" },
  { href: "/media/awards", label: "Awards", description: "Recognition and accolades" },
  { href: "/media/gallery", label: "Gallery", description: "Photos and stills" },
];

export default function MediaPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase">
          Media
        </span>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
          Press, Awards & Gallery
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          Sub-menus: browse press coverage, awards, and our visual gallery.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {mediaLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-card rounded-2xl p-8 card-lift block group"
            >
              <h2 className="text-xl font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                {item.label}
              </h2>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium">
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
