import { posts } from "../data/blog";
import { BlogCard } from "../components/BlogCard";

export default function BlogPage() {
  return (
    <main className="p-6 lg:p-12 bg-pink-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-cyan-900 mb-12">
        Наш блог
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            excerpt={p.excerpt}
            cover={p.cover}
          />
        ))}
      </div>
    </main>
  );
}
