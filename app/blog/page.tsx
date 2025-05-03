import { posts } from "../data/blog";
import { BlogCard } from "../components/BlogCard";

export default function BlogPage() {
  return (
    <main className="p-6 lg:p-12 bg-[#FFF1F3] min-h-screen">
      <div className="w-full max-w-[1351px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            excerpt={p.excerpt}
            cover={p.cover}
            label={p.label}
            labelColor={p.labelColor}
          />
        ))}
      </div>
    </main>
  );
}
