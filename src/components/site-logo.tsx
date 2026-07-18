// Brand logo: an overlapping two-square mark next to the ARYAWEB wordmark.
// Rendered inside the header and footer <Link>s. Colors and type come from the
// site tokens (--text, --orange, DM Sans) so the mark stays on-brand.
export default function SiteLogo() {
  return (
    <>
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="logo-word">
        ARYA<span>WEB</span>
      </span>
    </>
  );
}
