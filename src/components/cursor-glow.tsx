"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (elRef.current) elRef.current.style.opacity = "1";
    }

    function loop() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (elRef.current) {
        elRef.current.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={elRef} className="cursor-glow" aria-hidden="true" />;
}
