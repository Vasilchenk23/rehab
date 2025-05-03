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
    <Link href={`/blog/${slug}`} className="block overflow-hidden rounded-t-xl">
    <div className="relative" style={{ backgroundColor: labelColor || "#FF4E8A", borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
      <div className="text-center text-white text-lg font-bold uppercase px-4 pt-4 pb-2 min-h-[80px]">
        <div>{label}</div>
        <div className="text-xl normal-case font-medium">{excerpt}</div>
      </div>
      <div className="relative px-5 w-full h-[240px]">
        <Image
          src={cover}
          alt={title}
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
    <div className="text-center mt-20 px-4 py-4">
      <p className="text-base font-bold uppercase text-gray-800 leading-snug">{label}</p>
      <p className="text-xl normal-case text-black">{excerpt}</p>
    </div>
  </Link>
  
  );
}
