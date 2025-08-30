
import { BlogPost } from "@/types/blog";
import fs from "fs/promises";
import path from "path";

// Fetch all blog posts from local JSON
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), "public", "sample-blogs.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// Fetch single blog post by slug
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
