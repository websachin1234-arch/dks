import { notFound } from "next/navigation";
import BlogDetail from "@/components/BlogDetails/BlogDetail";
import { getAllPosts, getPostBySlug } from "@/utils/helper";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | DKS Upholstery`,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogDetail post={post} />;
}
