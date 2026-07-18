import Link from "next/link";
import SiteLogo from "./site-logo";

export default function SiteFooter() {
  return (
    <footer>
      <div>
        <Link className="logo" href="/">
          <SiteLogo />
        </Link>
        <p>
          Professionele websites voor
          <br />
          lokale ondernemingen in België.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/diensten">Diensten</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/tarieven">Tarieven</Link>
        <Link href="/over-mij">Over mij</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aryaweb</span>
        <span>Met zorg gemaakt in België.</span>
      </div>
    </footer>
  );
}
