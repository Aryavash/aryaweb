import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../../components/icons";

export const metadata: Metadata = {
  title: "SEO",
  description:
    "Een sterke technische SEO-basis zodat lokale klanten uw zaak beter vinden in Google.",
};

const deliverables = [
  [
    "01",
    "Technische SEO-basis",
    "Een correcte opbouw die zoekmachines helpt om uw website goed te begrijpen.",
  ],
  [
    "02",
    "Lokale vindbaarheid",
    "Afgestemd op klanten uit uw buurt die net op zoek zijn naar uw diensten.",
  ],
  [
    "03",
    "Snelle laadtijden",
    "Een vlotte website scoort beter in Google en houdt bezoekers langer vast.",
  ],
  [
    "04",
    "Heldere structuur",
    "Duidelijke titels, teksten en links zodat elke pagina goed gevonden wordt.",
  ],
];

export default function Seo() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          DIENSTEN / SEO
        </p>
        <h1 data-reveal="1">
          Beter gevonden
          <br />
          in <em>Google.</em>
        </h1>
        <p data-reveal="1">
          Een mooie website heeft weinig zin als niemand ze vindt. Ik leg de
          technische basis zodat lokale klanten u vinden wanneer het telt.
        </p>
        <Link className="text-link line-link" data-reveal="1" href="/diensten">
          ← Terug naar diensten
        </Link>
      </section>
      <section className="section-pad list-section">
        <div className="service-list">
          {deliverables.map(([no, title, text], i) => (
            <article
              className="service-row"
              data-reveal="1"
              data-index={i}
              key={no}
            >
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="statement section-pad">
        <p className="section-kicker" data-reveal="1">
          MIJN AANPAK
        </p>
        <h2 data-reveal="1">
          Gevonden worden.
          <br />
          <em>Door de juiste mensen.</em>
        </h2>
        <p data-reveal="1">
          SEO draait niet om trucjes, maar om een snelle, heldere en betrouwbare
          site. Die basis bouw ik in vanaf dag één, zodat u ook op lange termijn
          scoort.
        </p>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Klaar om beter gevonden te worden?</p>
        <h2 data-reveal="1">
          We pakken het
          <br />
          <em>samen aan.</em>
        </h2>
        <Link
          className="button button-dark"
          data-reveal="1"
          data-magnet="pill"
          href="/contact"
        >
          Gratis kennismaking <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
