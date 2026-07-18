import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk voorbeeldprojecten van Aryaweb voor lokale kappers en barbershops die willen opvallen en meer klanten aantrekken.",
};

const work = [
  [
    "Cut Barbershop",
    "Een stijlvolle website die afspraken en nieuwe klanten aantrekt.",
    "peach",
    "C",
  ],
  [
    "Bella Bakkerij",
    "Een warme online etalage voor een ambachtelijke lokale bakkerij.",
    "lime",
    "B",
  ],
  [
    "Volt Elektriciteit",
    "Een heldere website voor een elektricien die vertrouwen wil opbouwen.",
    "lavender",
    "V",
  ],
  [
    "The Fade Room",
    "Een strakke boekingservaring voor een drukbezochte barbershop.",
    "cream",
    "F",
  ],
  [
    "Old School Barbers",
    "Een tijdloze website met een vintage uitstraling en online afspraken.",
    "peach",
    "O",
  ],
  [
    "Kingpin Barbershop",
    "Een gedurfde website die de sfeer van de zaak direct laat voelen.",
    "lime",
    "K",
  ],
  [
    "Blade & Co.",
    "Een verfijnde online presentatie voor een premium herenkapsalon.",
    "lavender",
    "B",
  ],
  [
    "De Barbier",
    "Een klassieke website voor een barbier met oog voor traditie.",
    "cream",
    "D",
  ],
];

export default function Portfolio() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          PORTFOLIO / 02
        </p>
        <h1 data-reveal="1">
          Websites die
          <br />
          <em>bijblijven.</em>
        </h1>
        <p data-reveal="1">
          Een selectie van conceptprojecten voor lokale ondernemers. Elk ontwerp
          is gemaakt om helder te communiceren, vertrouwen op te bouwen en
          bezoekers in klanten te veranderen.
        </p>
      </section>
      <section className="work-section section-pad">
        <div className="portfolio-grid">
          {work.map(([name, description, color, mark], i) => (
            <article
              className={`project-card project-${color}`}
              data-reveal="1"
              data-index={i}
              data-magnet="card"
              key={name}
            >
              <div className="project-visual">
                <span className="project-number">0{i + 1}</span>
                <span className="project-mark">{mark}</span>
                <span className="project-shape" />
              </div>
              <div className="project-meta">
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Uw zaak kan de volgende zijn.</p>
        <h2 data-reveal="1">
          Klaar om online
          <br />
          <em>te groeien?</em>
        </h2>
        <Link
          className="button button-dark"
          data-reveal="1"
          data-magnet="pill"
          href="/contact"
        >
          Vraag een offerte aan <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
