import { notFound } from "next/navigation";
import { TemplatePage } from "@/components/TemplatePage";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!caseStudies.some((item) => item.slug === slug)) notFound();
  return <TemplatePage file="case-study-single.html" />;
}
