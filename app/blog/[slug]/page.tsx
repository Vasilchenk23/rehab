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
    <div className="max-w-[630px] mx-auto rounded-t-xl overflow-visible relative">
      <div
        className="relative z-10"
        style={{
          backgroundColor: post.labelColor || "#5DD3D3",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          height: "600px",
        }}
      >
        <div className="text-white text-center text-lg font-bold uppercase px-10 pt-6 pb-3">
          <div>{post.label}</div>
          <div className="text-xl normal-case font-medium">{post.excerpt}</div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[120px] w-[90%] h-[600px]  overflow-hidden z-20 shadow-lg">
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
      className="prose w-full max-w-[800px] mx-auto prose-p:my-4 prose-li:marker:text-[#5DD3D3] prose-ul:list-disc prose-ul:pl-5 text-gray-800 text-[18px] px-4 sm:px-6 pb-10 pt-[180px]"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  </main>
  
  );
}
