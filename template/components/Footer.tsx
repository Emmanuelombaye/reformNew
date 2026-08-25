import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/">
            <img src="/images/logo-white.svg" alt="Healthio" className="footer-logo" />
          </Link>
          <p>
            We are dedicated to helping you achieve a healthier, happier life through personalized coaching, expert
            guidance, and sustainable wellness strategies. Our mission is to empower you to build lasting habits and
            transform your overall well-being.
          </p>
          <SocialIcons />
        </div>
        <ul className="footer-links">
          {[
            ["/", "Home"],
            ["/about-us", "About Us"],
            ["/services", "Services"],
            ["/casestudy", "Case Study"],
            ["/blog", "Blog"],
            ["/contact-us", "Contact Us"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container copyright">Copyright © 2026 Healthio. All rights reserved.</div>
    </footer>
  );
}
