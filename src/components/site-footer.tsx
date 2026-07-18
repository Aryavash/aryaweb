import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div>
        <Link className="logo" href="/">
          <span>AW</span> ARYAWEB
        </Link>
        <p>
          Professionele websites voor
          <br />
          lokale ondernemingen in België.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/services">Diensten</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/pricing">Tarieven</Link>
        <Link href="/about">Over mij</Link>
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
