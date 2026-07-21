"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "./icons";
import SiteLogo from "./site-logo";

const links = [
  ["Home", "/"],
  ["Diensten", "/diensten"],
  ["Portfolio", "/portfolio"],
  ["Tarieven", "/tarieven"],
  ["FAQ", "/faq"],
  ["Over mij", "/over-mij"],
];

// A top-level link is active on its own route and on any nested route beneath
// it, so "Diensten" stays lit on /diensten/webdesign and its siblings.
function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(path);
  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu whenever the route changes (e.g. back/forward
  // navigation). Adjusting state during render, per React's guidance,
  // instead of in an effect.
  if (path !== prevPath) {
    setPrevPath(path);
    setOpen(false);
  }

  useEffect(() => {
    function updateIndicator() {
      const navEl = navRef.current;
      const indicatorEl = indicatorRef.current;
      if (!navEl || !indicatorEl) return;
      const active = navEl.querySelector<HTMLElement>('[data-active="true"]');
      if (!active) {
        indicatorEl.style.opacity = "0";
        return;
      }
      const navRect = navEl.getBoundingClientRect();
      const rect = active.getBoundingClientRect();
      indicatorEl.style.opacity = "1";
      indicatorEl.style.left = `${rect.left - navRect.left}px`;
      indicatorEl.style.width = `${rect.width}px`;
    }
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [path]);

  return (
    <header className="site-header-bar">
      <div className="site-header">
        <Link className="logo" href="/" onClick={() => setOpen(false)}>
          <SiteLogo />
        </Link>
        <nav id="site-nav" ref={navRef} className={open ? "nav-open" : ""}>
          {links.map(([label, href]) => {
            const active = isActive(path, href);
            return (
              <Link
                className={active ? "active" : ""}
                data-active={active}
                href={href}
                key={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            className={`nav-contact-link ${path === "/contact" ? "active" : ""}`}
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact ↗
          </Link>
          <div ref={indicatorRef} className="nav-indicator" aria-hidden="true" />
        </nav>
        <Link className="header-contact" href="/contact">
          Contact <span>↗</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
