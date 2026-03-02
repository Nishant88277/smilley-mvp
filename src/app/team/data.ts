// Professional portrait photos from Unsplash (cropped for team cards)
const unsplash = (id: string, w = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${w}&fit=crop&crop=face`;

export const teamMembers: {
  slug: string;
  name: string;
  designation: string;
  image: string;
  description: string;
  imdb: string;
  socialLinks: { href: string; label: string }[];
}[] = [
  {
    slug: "mehran-amrohi",
    name: "Mehran Amrohi",
    designation: "Producer",
    image: unsplash("1560250097-0b93528c311a"),
    description:
      "Leads the creative vision of Smiley Films, overseeing story, scripting, production quality, edit, and music. He also guides the company's financial direction, ensuring sustainable and meaningful growth.",
    imdb: "https://www.imdb.com/name/nm7428633/",
    socialLinks: [],
  },
  {
    slug: "sumit-khurana",
    name: "Sumit Khurana",
    designation: "Head of Business Development & Strategic Partnerships",
    image: unsplash("1507003211169-0a1dd7228f2d"),
    description:
      "Drives growth strategy, partnerships, platform relations, and expansion opportunities. Aligns creative ambition with commercial scalability.",
    imdb: "https://www.imdb.com/name/nm11863918/",
    socialLinks: [],
  },
  {
    slug: "faqhrul-husaini",
    name: "Faqhrul Husaini",
    designation: "Head of Operations",
    image: unsplash("1500648767791-00dcc994a43e"),
    description:
      "Oversees company-wide operations, process systems, vendor relations, and execution frameworks to ensure smooth functioning across projects.",
    imdb: "https://www.imdb.com/name/nm3566255/",
    socialLinks: [],
  },
  {
    slug: "afnan-amrohi",
    name: "Afnan Amrohi",
    designation: "Head of Production",
    image: unsplash("1472099645785-5658abf4ff4e"),
    description:
      "Leads production planning and execution. Responsible for budgeting, scheduling, crew coordination, and ensuring projects are delivered efficiently and on time.",
    imdb: "https://www.imdb.com/name/nm9078414/",
    socialLinks: [],
  },
  {
    slug: "vinit-vyas",
    name: "Vinit Vyas",
    designation: "Head of Content & Development",
    image: unsplash("1519345182560-3f2917c472ef"),
    description:
      "Leads content strategy, concept development, script evaluation, and narrative pipeline for upcoming projects.",
    imdb: "https://www.imdb.com/name/nm2793535/",
    socialLinks: [],
  },
];

export type TeamMember = (typeof teamMembers)[number];
