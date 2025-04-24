import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
};

export function BlogCard({ slug, title, excerpt, cover }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
}
