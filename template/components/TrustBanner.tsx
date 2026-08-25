import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export function TrustBanner({
  href = "/contact-us",
  linkLabel = "Contact Us Now",
}: {
  href?: string;
  linkLabel?: string;
}) {
  return (
    <section className="trust-banner">
      <div className="container trust-inner">
        <p>
          Learn More About Our Services, Approach, and Client Support. –{" "}
          <Link href={href}>
            <u>{linkLabel}</u>
          </Link>
        </p>
        <div className="trust-meta">
          <div className="avatars">
            <img src="/images/author-1.jpg" alt="" />
            <img src="/images/author-2.jpg" alt="" />
            <img src="/images/author-3.jpg" alt="" />
            <img src="/images/author-4.jpg" alt="" />
          </div>
          <div>
            <strong>Trusted By 58,900+ Users</strong>
            <span>4.9/5</span>
          </div>
          <CtaButton href="/contact-us">Contact Us</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function ViewAll({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <p className="view-all">
      Learn More About Our Services, Approach, and Client Support. –{" "}
      <Link href={href}>
        <strong>
          <u>{label}</u>
        </strong>
      </Link>
    </p>
  );
}
