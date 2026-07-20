import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../../components/icons";

export const metadata: Metadata = {
  title: "Websiteontwikkeling",
  description:
    "Snelle, veilige en gebruiksvriendelijke websiteontwikkeling die op elk scherm perfect werkt voor lokale ondernemingen.",
};

const deliverables = [
  [
    "01",
    "Snelle, moderne code",
    "Een website die vlot laadt en meteen aanvoelt als professioneel en verzorgd.",
  ],
  [
    "02",
    "Werkt op elk scherm",
    "Even goed op smartphone, tablet en computer, zonder compromissen.",
  ],
  [
    "03",
    "Veilig en betrouwbaar",
    "Een stevige technische basis zodat uw website blijft draaien zoals het hoort.",
  ],
  [
    "04",
    "Onderhoudsvriendelijk",
    "Netjes opgebouwd, zodat aanpassingen later eenvoudig en snel gebeuren.",
  ],
];

export default function Websiteontwikkeling() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          DIENSTEN / ONTWIKKELING
        </p>
        <h1 data-reveal="1">
          Techniek die
          <br />
          <em>gewoon werkt.</em>
        </h1>
        <p data-reveal="1">
          Een mooi ontwerp telt pas als het technisch klopt. Ik bouw uw site
          snel, veilig en gebruiksvriendelijk, zodat bezoekers vlot vinden wat
          ze zoeken.
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
          Minder ruis.
          <br />
          <em>Meer snelheid.</em>
        </h2>
        <p data-reveal="1">
          Geen zware plugins of onnodige lagen. Ik houd uw site licht en snel,
          zodat ze betrouwbaar blijft en makkelijk meegroeit.
        </p>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Klaar voor een website die vlot werkt?</p>
        <h2 data-reveal="1">
          We bouwen het
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
