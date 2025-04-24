import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "@/app/data/blog";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="prose prose-lg lg:prose-xl mx-auto py-12">
      <h1 className="text-cyan-900">{post.title}</h1>
      <div className="relative w-full h-64 lg:h-96 my-6">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover rounded-2xl shadow-md"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
