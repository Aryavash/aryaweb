import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over mij",
  description:
    "Maak kennis met Aryaweb: persoonlijke, professionele webdesign voor lokale ondernemingen in België.",
};

export default function About() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          OVER MIJ / 04
        </p>
        <h1 data-reveal="1">
          Persoonlijk werk.
          <br />
          <em>Grote zorg.</em>
        </h1>
        <p data-reveal="1">
          Met Aryaweb help ik lokale ondernemingen aan meer klanten met websites
          die helder, snel en betrouwbaar zijn.
        </p>
      </section>
      <section
        className="about-banner"
        aria-label="Welkom bij Aryaweb"
        data-reveal="1"
      >
        <span>WELKOM</span>
      </section>
      <section className="about-copy section-pad">
        <p data-reveal="1">
          Een goede website is niet alleen mooi. Ze maakt duidelijk waarom
          klanten voor úw zaak kiezen — en zet bezoekers om in aanvragen.
        </p>
        <aside data-reveal="1">
          <p className="section-kicker">ZO WERK IK</p>
          <p>
            U werkt rechtstreeks met mij samen: eerlijk advies, een duidelijk
            proces, geen tussenpersonen. Ik zorg dat u altijd weet waar we staan.
          </p>
          <Link className="text-link line-link" href="/contact">
            Werk met mij samen →
          </Link>
        </aside>
      </section>
      <section className="statement section-pad">
        <p className="section-kicker" data-reveal="1">
          MIJN BELOFTE
        </p>
        <h2 data-reveal="1">
          Uw zaak.
          <br />
          <em>Mijn volle aandacht.</em>
        </h2>
        <p data-reveal="1">
          Voor lokale ondernemers maakt een sterke eerste indruk het verschil.
          Ik breng overzicht, vakmanschap en aandacht voor detail naar elk
          project.
        </p>
      </section>
    </>
  );
}
