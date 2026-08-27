import type { NextConfig } from "next";

const htmlRedirects = [
  ["index.html", "/"],
  ["index-2.html", "/home-version-2"],
  ["index-3.html", "/home-version-3"],
  ["about.html", "/about-us"],
  ["services.html", "/services"],
  ["service-single.html", "/services/personalized-health-coaching"],
  ["blog.html", "/blog"],
  ["blog-single.html", "/blog/5-simple-morning-habits-to-boost-your-energy-all-day"],
  ["case-study.html", "/casestudy"],
  ["case-study-single.html", "/casestudy/achieving-fitness-goals-naturally"],
  ["team.html", "/our-team"],
  ["team-single.html", "/our-team/dr-emily-carter"],
  ["pricing.html", "/pricing-plan"],
  ["testimonials.html", "/testimonials"],
  ["image-gallery.html", "/image-gallery"],
  ["video-gallery.html", "/video-gallery"],
  ["faqs.html", "/faqs"],
  ["ai-coach.html", "/ai-coach"],
  ["contact.html", "/contact-us"],
  ["404.html", "/404"],
] as const;

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return htmlRedirects.map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
