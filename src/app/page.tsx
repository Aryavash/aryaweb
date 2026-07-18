import Link from "next/link";
import { ArrowUpRight } from "../components/icons";

const projects = [
  {
    name: "Cut Barbershop",
    type: "Website voor barbershop",
    color: "peach",
    mark: "C",
  },
  {
    name: "Bella Bakkerij",
    type: "Website voor lokale bakkerij",
    color: "lime",
    mark: "B",
  },
  {
    name: "Volt Elektriciteit",
    type: "Website voor elektricien",
    color: "lavender",
    mark: "V",
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
              Ik ontwerp en ontwikkel moderne websites voor kappers,
              restaurants, bakkers, elektriciens, loodgieters, fitnesszaken en
              andere lokale ondernemingen.
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
            <span>VOOR LOKALE ZAKEN DIE WILLEN GROEIEN</span>
            <b>ONTWERP</b>
            <b>ONTWIKKELING</b>
            <b>RESULTAAT</b>
            <span>VOOR LOKALE ZAKEN DIE WILLEN GROEIEN</span>
            <b>ONTWERP</b>
            <b>ONTWIKKELING</b>
            <b>RESULTAAT</b>
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
            Uw website is vaak het eerste contact met een nieuwe klant. Daarom
            combineer ik heldere strategie, overtuigend ontwerp en degelijke
            techniek tot een online visitekaartje dat vertrouwen wekt.
          </p>
        </div>
        <Link className="text-link line-link" data-reveal="1" href="/services">
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
              <div className="project-visual">
                <span className="project-number">0{index + 1}</span>
                <span className="project-mark">{project.mark}</span>
                <span className="project-shape" />
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
          Geen ingewikkelde processen of onnodige lagen. U werkt rechtstreeks
          met mij samen, van eerste idee tot een website waar u trots op mag
          zijn.
        </p>
        <Link
          className="button button-cream"
          data-reveal="1"
          data-magnet="pill"
          href="/about"
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
