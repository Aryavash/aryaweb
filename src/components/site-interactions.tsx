"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function countUp(el: HTMLElement, target: number, prefix: string) {
  const duration = 1000;
  const start = performance.now();
  function step(now: number) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * eased);
    el.textContent = prefix + val.toLocaleString("nl-BE");
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function makeMagnetic(el: HTMLElement, strength: number) {
  if (el.dataset.magnetBound) return;
  el.dataset.magnetBound = "1";
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const relX = e.clientX - r.left - r.width / 2;
    const relY = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${(relX / r.width) * strength}px, ${(relY / r.height) * strength}px)`;
  };
  const onLeave = () => {
    el.style.transform = "translate(0,0)";
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
}

// Runs the scroll-reveal, magnetic-hover, and count-up behaviors declared via
// data attributes in page markup. Re-scans on every route change since the
// App Router swaps in a fresh, unbound subtree of [data-reveal]/[data-magnet]
// elements each navigation.
export default function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = Number(el.dataset.index || 0);
          el.style.transitionDelay = `${idx * 80}ms`;
          requestAnimationFrame(() => el.classList.add("is-visible"));
          const target = el.dataset.countTarget;
          if (target) countUp(el, Number(target), el.dataset.countPrefix || "");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => observer.observe(el));

    document
      .querySelectorAll<HTMLElement>('[data-magnet="pill"]')
      .forEach((el) => makeMagnetic(el, 10));
    document
      .querySelectorAll<HTMLElement>('[data-magnet="card"]')
      .forEach((el) => makeMagnetic(el, 6));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
