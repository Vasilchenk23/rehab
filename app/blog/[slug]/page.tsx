import { posts } from "@/app/data/blog";
import Image from "next/image";

type BlogPageProps = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <p className="text-center text-red-500">Пост не знайдено</p>;
  }

  return (
    <main className="bg-[#FFF1F3] py-16 px-4 min-h-screen">
      <div className="max-w-[630px] mx-auto rounded-t-xl overflow-hidden ">
        <div
          className="relative py-6 px-4"
          style={{
            backgroundColor: post.labelColor || "#5DD3D3",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          <div className="text-white text-center text-sm font-bold uppercase px-4 pb-3 min-h-[80px]">
            <div>{post.label}</div>
            <div className="text-xs normal-case font-medium mt-1">{post.excerpt}</div>
          </div>
          <div className="relative w-full h-[240px]">
            <Image
              src={post.cover}
              alt={post.title}
              width={600}
              height={100}
            />
          </div>
        </div>
        <div
          className="text-gray-800 leading-7 px-6 pb-10 pt-120 prose prose-li:marker:text-[#5DD3D3]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
