import type { Metadata } from "next";
import { HealthioScripts } from "@/components/HealthioScripts";

export const metadata: Metadata = {
  title: "Healthio - Health and Lifestyle Coach HTML Template",
  description:
    "Start your journey to better health today with personalized coaching, wellness programs, and lasting lifestyle change.",
  icons: { icon: "/images/favicon.svg" },
};

const stylesheets = [
  "https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap",
  "/css/bootstrap.min.css",
  "/css/slicknav.min.css",
  "/css/swiper-bundle.min.css",
  "/css/all.min.css",
  "/css/animate.css",
  "/css/magnific-popup.css",
  "/css/mousecursor.css",
  "/css/custom.css",
];

const themeScripts = [
  "/js/jquery-3.7.1.min.js",
  "/js/bootstrap.min.js",
  "/js/validator.min.js",
  "/js/jquery.slicknav.js",
  "/js/swiper-bundle.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.counterup.min.js",
  "/js/jquery.magnific-popup.min.js",
  "/js/SmoothScroll.js",
  "/js/parallaxie.js",
  "/js/gsap.min.js",
  "/js/magiccursor.js",
  "/js/SplitText.min.js",
  "/js/ScrollTrigger.min.js",
  "/js/jquery.mb.YTPlayer.min.js",
  "/js/wow.min.js",
  "/js/function.js",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zxx" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>
        {children}
        {themeScripts.map((src) => (
          <script key={src} src={src} async={false} />
        ))}
        <HealthioScripts />
      </body>
    </html>
  );
}
