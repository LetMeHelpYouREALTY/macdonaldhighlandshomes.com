"use client";

import { useEffect } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

/**
 * Loads Calendly popup CSS only after idle / first interaction so it does not
 * block first paint (mobile PageSpeed).
 */
export default function CalendlyAssets() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;

    let loaded = false;
    const inject = () => {
      if (loaded) return;
      loaded = true;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    };

    const onInteract = () => inject();
    window.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    window.addEventListener("keydown", onInteract, { once: true });

    let idleId: number | undefined;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => inject(), { timeout: 4000 });
    } else {
      idleId = window.setTimeout(inject, 2500) as unknown as number;
    }

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      if ("cancelIdleCallback" in window && typeof idleId === "number") {
        window.cancelIdleCallback(idleId);
      } else if (typeof idleId === "number") {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return null;
}
