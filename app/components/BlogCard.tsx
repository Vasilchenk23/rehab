import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  label?: string;
  labelColor?: string;
};

export function BlogCard({ slug, title, excerpt, cover, label, labelColor }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
    >
      {label && (
        <div
          className="w-full px-4 py-3 text-center text-white text-sm font-bold uppercase"
          style={{ backgroundColor: labelColor || "#FF4E8A" }}
        >
          {label}
        </div>
      )}

      <div className="relative w-full h-[240px]">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>

      <div className="text-center px-4 py-4">
        <p className="text-base font-bold uppercase text-gray-800 leading-snug">
          {title}
        </p>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </Link>
  );
}
