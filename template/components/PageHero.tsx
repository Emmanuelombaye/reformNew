import Link from "next/link";

export function PageHero({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p className="crumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          {crumb || title}
        </p>
      </div>
    </section>
  );
}
