import { notFound } from "next/navigation";
import { TemplatePage } from "@/components/TemplatePage";
import { team } from "@/lib/data";

export function generateStaticParams() {
  return team.map((item) => ({ slug: item.slug }));
}

export default async function TeamDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!team.some((item) => item.slug === slug)) notFound();
  return <TemplatePage file="team-single.html" />;
}
