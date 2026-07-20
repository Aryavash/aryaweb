import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../../components/icons";

export const metadata: Metadata = {
  title: "Webdesign",
  description:
    "Uniek en professioneel webdesign op maat van uw lokale zaak: een ontwerp dat vertrouwen wekt en bezoekers overtuigt.",
};

const deliverables = [
  [
    "01",
    "Ontwerp op maat",
    "Geen sjabloon, maar een uniek ontwerp dat past bij het karakter van uw zaak.",
  ],
  [
    "02",
    "Heldere structuur",
    "Een logische opbouw die bezoekers moeiteloos naar de juiste informatie leidt.",
  ],
  [
    "03",
    "Sterke merkbeleving",
    "Kleur, typografie en beeld die uw zaak meteen herkenbaar en betrouwbaar maken.",
  ],
  [
    "04",
    "Ontworpen om te overtuigen",
    "Elk detail is gericht op één doel: van bezoeker naar nieuwe klant.",
  ],
];

export default function Webdesign() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          DIENSTEN / WEBDESIGN
        </p>
        <h1 data-reveal="1">
          Een ontwerp dat
          <br />
          meteen <em>vertrouwen wekt.</em>
        </h1>
        <p data-reveal="1">
          Uw website is vaak de eerste indruk. Ik ontwerp een professionele,
          herkenbare uitstraling die aanvoelt als een verlengstuk van uw zaak.
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
          Mooi is niet genoeg.
          <br />
          <em>Het moet werken.</em>
        </h2>
        <p data-reveal="1">
          Goed ontwerp is niet alleen mooi — het maakt duidelijk waarom klanten
          voor úw zaak kiezen. Ik vertrek van uw verhaal, niet van een sjabloon.
        </p>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Klaar voor een sterke eerste indruk?</p>
        <h2 data-reveal="1">
          We ontwerpen het
          <br />
          <em>samen.</em>
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
