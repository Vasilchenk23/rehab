import { posts } from "@/app/data/blog";

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
      <div className="max-w-[800px] mx-auto bg-white rounded-xl overflow-hidden shadow-xl">
        {/* Верхняя плашка */}
        <div
          className="text-white text-center px-4 py-6 uppercase font-bold text-xl leading-tight"
          style={{
            backgroundColor: post.labelColor || "#5DD3D3",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          <p>{post.label}</p>
          <p className="text-base font-semibold mt-1">{post.excerpt}</p>
        </div>

        {/* Картинка */}
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-auto"
        />

        {/* Контент */}
        <div
          className="text-gray-800 leading-7 px-6 pb-10 pt-6 prose prose-li:marker:text-[#5DD3D3]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
