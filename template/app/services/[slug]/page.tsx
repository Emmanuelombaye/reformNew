import { notFound } from "next/navigation";
import { TemplatePage } from "@/components/TemplatePage";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export default async function ServiceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!services.some((item) => item.slug === slug)) notFound();
  return <TemplatePage file="service-single.html" />;
}
