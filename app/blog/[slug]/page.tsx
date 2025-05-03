import { posts } from "@/app/data/blog";
import Image from "next/image";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center text-red-500">Пост не знайдено</p>;
  }

  return (
    <main className="bg-[#FFF1F3] py-16 px-4 min-h-screen">
      <div className="max-w-[630px] mx-auto rounded-t-xl overflow-hidden">
        <div
          className="relative"
          style={{
            backgroundColor: post.labelColor || "#5DD3D3",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          <div className="text-white text-center text-sm font-bold uppercase px-4 pt-6 pb-3 min-h-[80px]">
            <div>{post.label}</div>
            <div className="">{post.excerpt}</div>
          </div>

          <div className="relative w-[600px] h-[600px] mx-auto overflow-hidden">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
         
        </div>
        <div
          className="text-gray-800 leading-7 px-4 sm:px-6 pb-10 pt-6 prose prose-li:marker:text-[#5DD3D3]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
