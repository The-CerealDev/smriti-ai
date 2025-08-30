import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Footer from "@/components/Footer";

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();
  return (
    <section className="max-w-7xl mx-auto pb-32 px-6">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {/* Glow effect centered behind all cards */}
        {/* GGRO */}
        <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] bg-primary opacity-80 blur-[200px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-4 flex flex-col md:flex-row gap-4"
          >
            <div>
              <h2 className="text-xl font-semibold">
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                By {post.author} •{" "}
                {new Date(post.publishDate).toLocaleDateString()}
              </p>
              <p className="mb-2">{post.summary}</p>
              <Link
                href={`/blogs/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
