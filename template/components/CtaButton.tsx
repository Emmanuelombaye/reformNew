import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export function CtaButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={light ? "btn btn-light" : "btn"} href={href}>
      <span>{children}</span>
      <span className="icon">
        <ArrowIcon />
      </span>
    </Link>
  );
}
