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
            ["/ai-coach", "AI Coach"],
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
      <div className="container copyright">Copyright © 2026 novimid. All rights reserved.</div>
      <div className="footer-trust-strip">
        <div className="container">
          <div className="footer-trust-badges">
            <img src="/images/badge-usa-pharmacy.png" alt="Compounded by licensed pharmacies in the USA" />
            <img src="/images/badge-hipaa.png" alt="HIPAA compliant — data protected" />
          </div>
        </div>
      </div>
    </footer>
  );
}
