"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteLogo from "./site-logo";

export default function SiteFooter() {
  const pathname = usePathname();

  // On the home page the logo links to the route we're already on, so no
  // navigation happens. Scroll back to the top instead. Elsewhere the link
  // navigates home, which already lands at the top.
  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer>
      <div>
        <Link className="logo" href="/" onClick={handleLogoClick}>
          <SiteLogo />
        </Link>
        <p>
          Professionele websites voor
          <br />
          lokale ondernemingen in België.
        </p>
      </div>
      <nav className="footer-nav" aria-label="Footer">
        <div className="footer-col">
          <span className="footer-col-label">Menu</span>
          <Link href="/">Home</Link>
          <Link href="/diensten">Diensten</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/tarieven">Tarieven</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/over-mij">Over mij</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/voorwaarden">Algemene voorwaarden</Link>
        </div>
        <div className="footer-col">
          <span className="footer-col-label">Diensten</span>
          <Link href="/diensten/webdesign">Webdesign</Link>
          <Link href="/diensten/websiteontwikkeling">Websiteontwikkeling</Link>
          <Link href="/diensten/seo">SEO</Link>
        </div>
      </nav>
      <div className="footer-bottom">
        <span>© 2026 Aryaweb</span>
        {/* Vervang door uw officiële BTW-nummer zodra u geregistreerd bent. */}
        <span>[BTW-nummer]</span>
        <span>Met zorg gemaakt in België.</span>
      </div>
    </footer>
  );
}
