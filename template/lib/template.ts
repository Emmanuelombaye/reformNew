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

export function getTemplateBody(file: string) {
  const html = fs.readFileSync(path.join(process.cwd(), "vendor", "healthio", file), "utf8");
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const withoutScripts = body.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  return withoutScripts.replace(
    /\s(src|href|poster|data-src)=["']([^"']+)["']/gi,
    (_full, attr: string, url: string) => ` ${attr}="${rewriteUrl(url)}"`,
  );
}
