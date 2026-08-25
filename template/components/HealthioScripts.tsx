"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const HEALTHIO_LIBS = [
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

type HealthioThemeApi = {
  init: () => void;
  destroy: () => void;
  hidePreloader: () => void;
  isInitialized?: () => boolean;
};

type HealthioCursorApi = {
  init: () => unknown;
  destroy: () => void;
};

declare global {
  interface Window {
    HealthioTheme?: HealthioThemeApi;
    HealthioCursor?: HealthioCursorApi;
    jQuery?: (sel: string) => { fadeOut: (ms: number) => void };
    ScrollTrigger?: { refresh: () => void; getAll: () => Array<{ kill: () => void }> };
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"], script[data-healthio-src="${src}"]`,
    );
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.healthioSrc = src;
    script.onload = () => {
      script.dataset.loaded = "1";
      resolve();
    };
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

function hidePreloaderFallback() {
  if (window.HealthioTheme?.hidePreloader) {
    window.HealthioTheme.hidePreloader();
    return;
  }
  if (window.jQuery) {
    window.jQuery(".preloader").fadeOut(600);
    return;
  }
  document.querySelectorAll<HTMLElement>(".preloader").forEach((el) => {
    el.style.display = "none";
  });
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

async function waitForTheme(timeoutMs = 4000) {
  const start = Date.now();
  while (!window.HealthioTheme && Date.now() - start < timeoutMs) {
    await new Promise((r) => setTimeout(r, 20));
  }
}

function ensureCursor() {
  // Re-mount after React hydration so the cursor isn't wiped from <body>
  window.HealthioCursor?.destroy?.();
  window.HealthioCursor?.init?.();
}

export function HealthioScripts() {
  const pathname = usePathname();
  const firstLoad = useRef(true);
  const runId = useRef(0);

  useEffect(() => {
    const id = ++runId.current;
    let cancelled = false;
    const failsafe = window.setTimeout(hidePreloaderFallback, 4000);

    (async () => {
      try {
        for (const src of HEALTHIO_LIBS) {
          if (cancelled || id !== runId.current) return;
          await loadScript(src);
        }
        await waitForTheme();
        if (cancelled || id !== runId.current) return;
        await waitForPaint();
        if (cancelled || id !== runId.current) return;

        if (firstLoad.current) {
          firstLoad.current = false;
          if (!window.HealthioTheme?.isInitialized?.()) {
            window.HealthioTheme?.init?.();
          } else {
            // Theme already booted from DOMContentLoaded; cursor may have been
            // removed by hydration — remount it now.
            ensureCursor();
          }
        } else {
          window.HealthioTheme?.destroy?.();
          window.HealthioTheme?.init?.();
        }

        // Always re-assert cursor after paint (exact hover / pointer states)
        ensureCursor();
        window.ScrollTrigger?.refresh?.();
        hidePreloaderFallback();
      } finally {
        window.clearTimeout(failsafe);
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
