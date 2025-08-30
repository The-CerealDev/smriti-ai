
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Footer from "@/components/Footer";

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();
  return (
    <section className="relative max-w-7xl mx-auto pb-32 px-6">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {/* Glow effect centered behind all cards */}
        <div className="absolute left-1/2 top-1/2 w-[180px] h-[180px] bg-primary opacity-80 blur-[200px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-[color-mix(in_oklab,var(--color-white)_10%,transparent)] shadow-lg backdrop-blur-lg transition-transform duration-150 hover:scale-[1.03] flex flex-col overflow-hidden text-center bg-[color-mix(in_oklab,var(--color-white)_5%,transparent)]"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "var(--color-white)",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              borderRadius: "var(--radius-2xl)",
            }}
          >
            <div className="w-full h-44 flex items-center justify-center bg-gradient-to-tr from-[oklch(93.2%_0.032_255.585)] via-[oklch(94.6%_0.033_307.174)] to-[oklch(94.8%_0.028_342.258)] text-gray-500 text-5xl font-extrabold">
              {post.author?.[0] || "📝"}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-white)" }}>
                <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-400 text-xs mb-2 font-medium">
                By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
              </p>
              <p className="mb-4 flex-1 text-gray-200 text-base leading-relaxed">
                {post.summary}
              </p>
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-block self-center px-4 py-2 rounded-lg bg-[oklch(62.3%_0.214_259.815)] text-white font-semibold shadow hover:bg-[oklch(54.6%_0.245_262.881)] transition-colors duration-200 mt-auto"
                style={{
                  fontWeight: "var(--font-weight-semibold)",
                  borderRadius: "var(--radius-2xl)",
                }}
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Footer />
    </section>
  );
}
