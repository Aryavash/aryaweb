import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Webdesign, websiteontwikkeling, SEO, hosting en onderhoud voor lokale ondernemingen in Brugge en heel België.",
};

type Service = {
  no: string;
  title: string;
  text: string;
  href?: string;
};

const services: Service[] = [
  {
    no: "01",
    title: "Webdesign",
    text: "Een uniek en professioneel ontwerp dat past bij uw zaak en meteen vertrouwen uitstraalt.",
    href: "/diensten/webdesign",
  },
  {
    no: "02",
    title: "Websiteontwikkeling",
    text: "Een snelle, veilige en gebruiksvriendelijke website die op elk scherm perfect werkt.",
    href: "/diensten/websiteontwikkeling",
  },
  {
    no: "03",
    title: "SEO",
    text: "Een sterke technische basis zodat lokale klanten u beter vinden in Google.",
    href: "/diensten/seo",
  },
  {
    no: "04",
    title: "Hosting",
    text: "Betrouwbare hosting en een veilige basis, zonder dat u er zelf naar hoeft om te kijken.",
  },
  {
    no: "05",
    title: "Onderhoud",
    text: "Updates, kleine aanpassingen en ondersteuning nadat uw website online staat.",
  },
  {
    no: "06",
    title: "Snelle laadtijden",
    text: "Een vlotte website houdt bezoekers langer vast en helpt u beter scoren in zoekmachines.",
  },
  {
    no: "07",
    title: "Mobielvriendelijk",
    text: "Uw website ziet er even goed uit en werkt even vlot op smartphone, tablet en computer.",
  },
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
          Uw beste verkoper en eerste indruk — de plek waar klanten beslissen
          contact op te nemen. Ik bouw sites die dat waarmaken.
        </p>
      </section>
      <section className="section-pad list-section">
        <div className="service-list">
          {services.map(({ no, title, text, href }, i) =>
            href ? (
              <Link
                className="service-row"
                data-reveal="1"
                data-index={i}
                href={href}
                key={no}
              >
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight />
              </Link>
            ) : (
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
            ),
          )}
        </div>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Weet u niet meteen wat u nodig hebt?</p>
        <h2 data-reveal="1">
          We bekijken het
          <br />
          <em>samen.</em>
        </h2>
        <div className="cta-actions">
          <Link
            className="button button-dark"
            data-reveal="1"
            data-magnet="pill"
            href="/contact"
          >
            Gratis kennismaking <ArrowUpRight />
          </Link>
          <Link className="text-link" data-reveal="1" href="/tarieven">
            Bekijk tarieven →
          </Link>
        </div>
      </section>
    </>
  );
}
