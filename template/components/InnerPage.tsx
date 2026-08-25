import { PageHero } from "@/components/PageHero";

export function InnerPage({
  title,
  crumb,
  children,
  flush,
}: {
  title: string;
  crumb?: string;
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <main>
      <PageHero title={title} crumb={crumb} />
      {flush ? children : <section className="section"><div className="container">{children}</div></section>}
    </main>
  );
}
