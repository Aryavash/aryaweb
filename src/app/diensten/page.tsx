import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Webdesign, websiteontwikkeling, SEO, hosting en onderhoud voor lokale ondernemingen in België.",
};

const services = [
  [
    "01",
    "Webdesign",
    "Een uniek en professioneel ontwerp dat past bij uw zaak en meteen vertrouwen uitstraalt.",
  ],
  [
    "02",
    "Websiteontwikkeling",
    "Een snelle, veilige en gebruiksvriendelijke website die op elk scherm perfect werkt.",
  ],
  [
    "03",
    "SEO",
    "Een sterke technische basis zodat lokale klanten u beter vinden in Google.",
  ],
  [
    "04",
    "Hosting",
    "Betrouwbare hosting en een veilige basis, zonder dat u er zelf naar hoeft om te kijken.",
  ],
  [
    "05",
    "Onderhoud",
    "Updates, kleine aanpassingen en ondersteuning nadat uw website online staat.",
  ],
  [
    "06",
    "Snelle laadtijden",
    "Een vlotte website houdt bezoekers langer vast en helpt u beter scoren in zoekmachines.",
  ],
  [
    "07",
    "Mobielvriendelijk",
    "Uw website ziet er even goed uit en werkt even vlot op smartphone, tablet en computer.",
  ],
];

export default function Services() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          DIENSTEN / 01
        </p>
        <h1 data-reveal="1">
          Uw website is
          <br />
          meer dan een <em>mooie pagina.</em>
        </h1>
        <p data-reveal="1">
          Het is uw beste verkoper, uw eerste indruk en de plek waar nieuwe
          klanten beslissen om contact op te nemen. Ik bouw websites die dat
          waarmaken.
        </p>
      </section>
      <section className="section-pad list-section">
        <div className="service-list">
          {services.map(([no, title, text], i) => (
            <article
              className="service-row"
              data-reveal="1"
              data-index={i}
              key={no}
            >
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight />
            </article>
          ))}
        </div>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Weet u niet meteen wat u nodig hebt?</p>
        <h2 data-reveal="1">
          We bekijken het
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
