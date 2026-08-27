import fs from "node:fs";
import path from "node:path";

const PAGE_MAP: Record<string, string> = {
  "index.html": "/",
  "index-2.html": "/",
  "index-3.html": "/",
  "about.html": "/about-us",
  "services.html": "/services",
  "service-single.html": "/services/personalized-health-coaching",
  "blog.html": "/blog",
  "blog-single.html": "/blog/5-simple-morning-habits-to-boost-your-energy-all-day",
  "case-study.html": "/casestudy",
  "case-study-single.html": "/casestudy/achieving-fitness-goals-naturally",
  "team.html": "/our-team",
  "team-single.html": "/our-team/dr-emily-carter",
  "pricing.html": "/pricing-plan",
  "testimonials.html": "/testimonials",
  "image-gallery.html": "/image-gallery",
  "video-gallery.html": "/video-gallery",
  "faqs.html": "/faqs",
  "ai-coach.html": "/ai-coach",
  "contact.html": "/contact-us",
  "404.html": "/404",
  "form-process.php": "/api/contact",
};

function rewriteUrl(url: string) {
  const trimmed = url.trim();
  if (!trimmed || /^(https?:|mailto:|tel:|#|javascript:|data:)/i.test(trimmed)) return trimmed;
  const clean = trimmed.replace(/^\.\//, "").replace(/^\//, "");
  if (!clean || clean === "index.html") return "/";
  if (PAGE_MAP[clean]) return PAGE_MAP[clean];
  return `/${clean}`;
}

const FOOTER_TRUST_BADGES = `
        <div class="footer-trust-strip">
            <div class="container">
                <div class="footer-trust-badges">
                    <div class="footer-trust-badge">
                        <img src="images/badge-usa-pharmacy.png" alt="Compounded by licensed pharmacies in the USA">
                    </div>
                    <div class="footer-trust-badge">
                        <img src="images/badge-hipaa.png" alt="HIPAA compliant — data protected">
                    </div>
                </div>
            </div>
        </div>
`;

export function getTemplateBody(file: string) {
  const html = fs.readFileSync(path.join(process.cwd(), "vendor", "healthio", file), "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const withoutScripts = body.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  const withFooterBadges = withoutScripts.replace(
    "<!-- Footer Copyright End -->",
    `<!-- Footer Copyright End -->${FOOTER_TRUST_BADGES}`,
  );
  return withFooterBadges.replace(
    /\s(src|href|poster|data-src)=["']([^"']+)["']/gi,
    (_full, attr: string, url: string) => ` ${attr}="${rewriteUrl(url)}"`,
  );
}
