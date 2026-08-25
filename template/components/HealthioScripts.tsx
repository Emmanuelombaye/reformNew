"use client";

import { useEffect } from "react";

const HEALTHIO_SCRIPTS = [
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

let booted = false;

export function HealthioScripts() {
  useEffect(() => {
    if (booted) return;
    booted = true;

    const load = (src: string) =>
      new Promise<void>((resolve) => {
        if (document.querySelector(`script[data-healthio-src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.dataset.healthioSrc = src;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });

    const hidePreloader = () => {
      const jq = (window as unknown as { jQuery?: (sel: string) => { fadeOut: (ms: number) => void } }).jQuery;
      if (jq) {
        jq(".preloader").fadeOut(600);
      } else {
        document.querySelectorAll<HTMLElement>(".preloader").forEach((el) => {
          el.style.display = "none";
        });
      }
    };

    const failsafe = window.setTimeout(hidePreloader, 2500);

    (async () => {
      for (const src of HEALTHIO_SCRIPTS) {
        await load(src);
      }
      window.clearTimeout(failsafe);
      hidePreloader();
      window.dispatchEvent(new Event("load"));
    })();
  }, []);

  return null;
}
