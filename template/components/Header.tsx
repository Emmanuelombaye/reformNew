"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { CtaButton } from "./CtaButton";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const inner = pathname !== "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={inner ? "site-header inner" : "site-header"}>
      <div className="nav-shell">
        <Link href="/" className="logo">
          <img src="/images/logo.svg" alt="Healthio" />
        </Link>
        <nav className={open ? "nav open" : "nav"}>
          {navLinks.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.children ? (
                <>
                  <Link href={item.href} className="has-caret">
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                      <path d="M1 1.2 5 5l4-3.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </Link>
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href + child.label} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </div>
          ))}
        </nav>
        <CtaButton href="/contact-us">Contact Us</CtaButton>
        <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
