import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "../components/icons";

type Project = {
  name: string;
  type: string;
  color: string;
  mark: string;
  image?: string;
};

const projects: Project[] = [
  {
    name: "Cut Barbershop",
    type: "Website voor barbershop",
    color: "peach",
    mark: "C",
    image: "/portfolio/cut-barbershop.avif",
  },
  {
    name: "The Fade Room",
    type: "Website voor barbershop",
    color: "lime",
    mark: "F",
    image: "/portfolio/the-fade-room.jpg",
  },
  {
    name: "Old School Barbers",
    type: "Website voor barbershop",
    color: "lavender",
    mark: "O",
    image: "/portfolio/old-school-barbers.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-shell section-pad">
        <p className="section-kicker">✦ PROFESSIONELE WEBDESIGNSTUDIO</p>
        <div className="hero-grid">
          <div data-reveal="1">
            <h1>
              Professionele websites
              <br />
              die uw bedrijf <em>laten groeien.</em>
            </h1>
            <p className="hero-copy">
              Ik ontwerp en ontwikkel moderne websites voor lokale
              ondernemingen in Brugge en heel België — van kappers tot
              restaurants en bakkers.
            </p>
            <div className="button-row">
              <Link
                className="button button-dark"
                data-magnet="pill"
                href="/contact"
              >
                Gratis kennismaking <ArrowUpRight />
              </Link>
              <Link className="text-link" href="/portfolio">
                Bekijk portfolio →
              </Link>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstracte illustratie over webdesign"
          >
            <div className="art-card art-one">
              <span>01</span>
              <b>
                Maak het
                <br />
                sterk.
              </b>
            </div>
            <div className="art-orb" />
            <div className="art-card art-two">
              <i>✦</i>
              <strong>
                Ontwerp
                <br />
                met
                <br />
                doel.
              </strong>
            </div>
            <div className="scribble">
              sterke
              <br />
              ideeën
            </div>
          </div>
        </div>
        <div className="trust-row">
          <div className="trust-track">
            {[0, 1].map((half) => (
              <div className="trust-half" key={half} aria-hidden={half === 1}>
                {Array.from({ length: 4 }).map((_, i) => (
                  <span className="trust-group" key={i}>
                    <span>VOOR LOKALE ZAKEN DIE WILLEN GROEIEN</span>
                    <b>ONTWERP</b>
                    <b>ONTWIKKELING</b>
                    <b>RESULTAAT</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad intro-section">
        <p className="section-kicker" data-reveal="1">
          01 / WAT IK DOE
        </p>
        <div className="split-heading">
          <h2 data-reveal="1">
            Een sterke zaak
            <br />
            verdient een <em>sterke site.</em>
          </h2>
          <p data-reveal="1">
            Uw website is vaak de eerste indruk. Ik combineer sterk ontwerp en
            degelijke techniek tot een site die meteen vertrouwen wekt.
          </p>
        </div>
        <Link className="text-link line-link" data-reveal="1" href="/diensten">
          Ontdek mijn diensten →
        </Link>
      </section>
      <section className="work-section section-pad">
        <div className="section-heading">
          <p className="section-kicker" data-reveal="1">
            02 / RECENT WERK
          </p>
          <Link className="text-link" href="/portfolio">
            Bekijk alle projecten →
          </Link>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-${project.color}`}
              data-reveal="1"
              data-index={index}
              data-magnet="card"
              key={project.name}
            >
              <div
                className={`project-visual${project.image ? " has-photo" : ""}`}
              >
                {project.image ? (
                  <Image
                    className="project-photo"
                    src={project.image}
                    alt={`Website voor ${project.name}`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <>
                    <span className="project-mark">{project.mark}</span>
                    <span className="project-shape" />
                  </>
                )}
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="statement section-pad">
        <p className="section-kicker" data-reveal="1">
          03 / MIJN AANPAK
        </p>
        <h2 data-reveal="1">
          Minder ruis.
          <br />
          <em>Meer resultaat.</em>
        </h2>
        <p data-reveal="1">
          Geen omwegen. U werkt rechtstreeks met mij samen, van eerste idee tot
          een site waar u trots op bent.
        </p>
        <Link
          className="button button-cream"
          data-reveal="1"
          data-magnet="pill"
          href="/over-mij"
        >
          Meer over mij <ArrowUpRight />
        </Link>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Klaar om online sterker te staan?</p>
        <h2 data-reveal="1">
          Maak uw zaak
          <br />
          <em>onmisbaar.</em>
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
