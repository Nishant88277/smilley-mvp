import { notFound } from "next/navigation";
import FilmDetail from "./FilmDetail";
import { featuredFilms } from "../data";

export async function generateStaticParams() {
  return featuredFilms.map((f) => ({ slug: f.slug }));
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = featuredFilms.find((f) => f.slug === slug);
  if (!film) notFound();
  return <FilmDetail film={film} />;
}
