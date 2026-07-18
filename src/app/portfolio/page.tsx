import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk voorbeeldprojecten van Aryaweb voor lokale kappers en barbershops die willen opvallen en meer klanten aantrekken.",
};

type Work = {
  name: string;
  description: string;
  color: string;
  mark: string;
  image?: string;
};

const work: Work[] = [
  {
    name: "Cut Barbershop",
    description: "Een stijlvolle website die afspraken en nieuwe klanten aantrekt.",
    color: "peach",
    mark: "C",
    image: "/portfolio/cut-barbershop.avif",
  },
  {
    name: "The Fade Room",
    description: "Een strakke boekingservaring voor een drukbezochte barbershop.",
    color: "lime",
    mark: "F",
  },
  {
    name: "Old School Barbers",
    description:
      "Een tijdloze website met een vintage uitstraling en online afspraken.",
    color: "lavender",
    mark: "O",
    image: "/portfolio/old-school-barbers.jpg",
  },
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
          {work.map(({ name, description, color, mark, image }, i) => (
            <article
              className={`project-card project-${color}`}
              data-reveal="1"
              data-index={i}
              data-magnet="card"
              key={name}
            >
              <div className={`project-visual${image ? " has-photo" : ""}`}>
                {image ? (
                  <Image
                    className="project-photo"
                    src={image}
                    alt={`Website voor ${name}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <>
                    <span className="project-mark">{mark}</span>
                    <span className="project-shape" />
                  </>
                )}
                <span className="project-number">0{i + 1}</span>
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
