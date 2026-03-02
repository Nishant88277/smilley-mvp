"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", anchor: "home" },
  { href: "/#featured-work", label: "Featured Work", anchor: "featured-work" },
  { href: "/#services", label: "Services", anchor: "services" },
  { href: "/#about", label: "About Us", anchor: "about" },
  { href: "/#team", label: "Team", anchor: "team" },
  {
    label: "Media",
    children: [
      { href: "/#press", label: "Press", anchor: "press" },
      { href: "/#awards", label: "Awards", anchor: "awards" },
      { href: "/media/gallery", label: "Gallery", anchor: null },
    ],
  },
];

const SECTION_IDS = [
  "home",
  "featured-work",
  "awards",
  "about",
  "team",
  "services",
  "press",
  "contact",
];
const HEADER_OFFSET = 120;

function getActiveSection(): string {
  if (typeof document === "undefined") return "home";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= HEADER_OFFSET && rect.bottom > HEADER_OFFSET) return id;
  }
  // Between sections: pick the one closest to viewport top (smallest top that is > HEADER_OFFSET, or last with top < HEADER_OFFSET)
  let best = "home";
  let bestTop = Infinity;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top >= HEADER_OFFSET && rect.top < bestTop) {
      bestTop = rect.top;
      best = id;
    } else if (rect.top < HEADER_OFFSET && rect.bottom > 0) {
      best = id;
      break;
    }
  }
  return best;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => setActiveSection(getActiveSection());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const isActive = (href: string, anchor: string | null) => {
    if (pathname !== "/") {
      if (href === "/") return pathname === "/";
      if (pathname === "/team" && href === "/#team") return true;
      if (pathname === "/press" && href === "/#press") return true;
      return false;
    }
    if (href === "/" && anchor === "home") return activeSection === "home";
    return anchor != null && activeSection === anchor;
  };

  const isMediaChildActive = (childHref: string, anchor: string | null) => {
    if (pathname === "/press" && childHref === "/#press") return true;
    if (pathname === "/") return anchor != null && activeSection === anchor;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-12 ${
        scrolled ? "bg-[var(--bg)]/80 backdrop-blur-md py-3" : "bg-transparent"
      }`}
    >
      <Link href="/" className="relative z-10 flex items-center gap-3">
        <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center md:h-16 md:w-16">
          <Image
            src="/images/logo.svg"
            alt="Smiley Films"
            fill
            className="object-contain"
            sizes="64px"
            priority
          />
        </span>
      </Link>

      <nav className="hidden gap-8 lg:flex items-center">
        {navLinks.map((item) =>
          "children" in item ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button
                className={`relative text-[13px] font-light tracking-wide transition-all duration-300 group flex items-center gap-1 ${
                  pathname.startsWith("/media") ||
                  pathname === "/press" ||
                  (pathname === "/" &&
                    (activeSection === "press" || activeSection === "awards"))
                    ? "text-[var(--accent)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${mediaOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mediaOpen && item.children && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="glass rounded-xl py-2 min-w-[160px] border border-[var(--glass-border)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-[13px] transition-colors ${
                          isMediaChildActive(child.href, child.anchor)
                            ? "text-[var(--accent)]"
                            : "text-[var(--fg-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-hover)]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[13px] font-light tracking-wide transition-all duration-300 hover:text-[var(--accent)] group ${
                isActive(item.href, item.anchor)
                  ? "text-white"
                  : "text-[var(--fg-muted)]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  isActive(item.href, item.anchor)
                    ? "w-full bg-white"
                    : "w-0 bg-[var(--accent)] group-hover:w-full"
                }`}
              />
            </Link>
          ),
        )}
      </nav>

      <Link
        href="/#contact"
        className="hidden lg:inline-block btn-primary !text-white px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest rounded-full"
      >
        Start a conversation
      </Link>

      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="relative z-10 flex flex-col gap-1.5 lg:hidden p-2"
        aria-label="Menu"
      >
        <span
          className={`h-px w-6 bg-white transition-all duration-300 ${
            menuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-px w-6 bg-white transition-all duration-300 ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[var(--bg)]/95 backdrop-blur-xl lg:hidden pt-20"
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3"
              >
                <span className="font-serif text-2xl font-light text-[var(--fg-muted)]">
                  {item.label}
                </span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`font-serif text-xl font-light ${
                      isMediaChildActive(child.href, child.anchor)
                        ? "text-white"
                        : "text-[var(--fg)]"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif text-3xl font-light ${
                  isActive(item.href, item.anchor)
                    ? "text-white"
                    : "text-[var(--fg)]"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/#contact"
            className="btn-primary px-8 py-4 text-[12px] font-semibold uppercase tracking-widest rounded-full mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Start a conversation
          </Link>
        </div>
      )}
    </header>
  );
}
