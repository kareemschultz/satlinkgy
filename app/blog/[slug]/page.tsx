import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/sections/NavBar";
import { Footer } from "@/components/sections/Footer";
import { BlogPostContent } from "@/components/sections/BlogPostContent";
import { blogPosts } from "@/lib/data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Satlinkgy Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return (
    <main>
      <NavBar />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  );
}
