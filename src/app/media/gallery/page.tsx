import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/images/chidiya-1920x1080.webp", alt: "Chidiya" },
  { src: "/images/tdp-1920x1080.webp", alt: "Teen Do Paanch" },
  { src: "/images/meethi-eid-1920x1080.webp", alt: "Meethi Eid" },
  { src: "/images/rmtht-1920x1080.webp", alt: "Rishtey Mein Toh Hum Tumhare" },
  { src: "/images/tara-bhaiya-zindabad-1920x1080.webp", alt: "Tara Bhaiya Zindabad" },
  { src: "/images/honeymoon-trip-options-3---1920x1080.webp", alt: "Honeymoon Trip" },
  { src: "/images/happy-anniversary-1920x1080.webp", alt: "Happy Anniversary" },
  { src: "/images/papakascooter-1920x1080.webp", alt: "Papakascooter" },
  { src: "/images/chidiya-1000x1500.webp", alt: "Chidiya still" },
];

export default function GalleryPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#press"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm mb-10 transition-colors"
        >
          ← Media
        </Link>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl font-light text-white">
          Gallery
        </h1>
        <p className="mt-4 max-w-xl text-[var(--fg-muted)]">
          Photos and stills from our productions.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.alt}
              className="aspect-[4/3] relative overflow-hidden image-hover-zoom"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
