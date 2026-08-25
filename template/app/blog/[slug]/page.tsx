import { notFound } from "next/navigation";
import { TemplatePage } from "@/components/TemplatePage";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((item) => ({ slug: item.slug }));
}

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!posts.some((item) => item.slug === slug)) notFound();
  return <TemplatePage file="blog-single.html" />;
}
