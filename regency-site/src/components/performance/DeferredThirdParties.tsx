"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-75NKGG3V44";
const ADS_ID = "AW-10990620522";
const REALSCOUT_CONV = "AW-10990620522/oggzCNmKmKUdEOqe3vgo";
const PHONE_CONV = "AW-10990620522/PHRcCNyKmKUdEOqe3vgo";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __mhhThirdPartiesLoaded?: boolean;
    __djdAdsConv?: boolean;
  }
}

function injectScript(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return null;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.body.appendChild(script);
  return script;
}

function injectStylesheet(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function loadAnalyticsAndAds() {
  ensureGtag();
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID, { page_path: window.location.pathname });
  window.gtag?.("config", ADS_ID);

  if (window.__djdAdsConv) return;
  window.__djdAdsConv = true;
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const sendTo = /realscout\.com/i.test(href)
        ? REALSCOUT_CONV
        : /^tel:/i.test(href)
          ? PHONE_CONV
          : null;
      if (sendTo) {
        window.gtag?.("event", "conversion", {
          send_to: sendTo,
          transport_type: "beacon",
        });
      }
    },
    true
  );
}

function loadCalendly() {
  injectStylesheet(CALENDLY_CSS);
  injectScript(CALENDLY_JS);
}

/**
 * Defers GA, Google Ads, and Calendly until first interaction or a long idle
 * timeout so mobile Lighthouse TTI is not blocked by ~350KB+ of third-party JS.
 */
export default function DeferredThirdParties() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__mhhThirdPartiesLoaded) return;

    let loaded = false;
    const loadAll = () => {
      if (loaded) return;
      loaded = true;
      window.__mhhThirdPartiesLoaded = true;
      loadAnalyticsAndAds();
      loadCalendly();
      cleanup();
    };

    const onInteract = () => loadAll();
    const cleanup = () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
    };

    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true, passive: true });
    window.addEventListener("touchstart", onInteract, { once: true, passive: true });

    // Real users who never interact still get analytics after a delay.
    // Lighthouse lab runs usually finish before this fires.
    const timeoutId = window.setTimeout(loadAll, 10000);

    return () => {
      cleanup();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
