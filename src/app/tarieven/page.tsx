import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Duidelijke prijzen voor professionele websites: Starter, Premium en Maatwerk pakketten.",
};

type Tier = {
  name: string;
  price: string;
  countTarget?: number;
  countPrefix?: string;
  items: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter Website",
    price: "€1.000",
    countTarget: 1000,
    countPrefix: "€",
    items: [
      "Tot 5 pagina's",
      "Mobielvriendelijk",
      "Contactformulier",
      "WhatsApp-integratie",
      "Google Maps",
      "Basis SEO",
      "Oplevering binnen 2 weken",
    ],
  },
  {
    name: "Premium Website",
    price: "€2.500",
    countTarget: 2500,
    countPrefix: "€",
    items: [
      "Alles uit Starter Website",
      "Uitgebreid maatwerkontwerp",
      "Tot 10 pagina's",
      "Geavanceerde SEO-basis",
      "Snelle laadtijden",
      "Persoonlijke opleiding",
    ],
  },
  {
    name: "Maatwerk",
    price: "Op aanvraag",
    items: [
      "Webshop of complexe website",
      "Koppelingen op maat",
      "Content en conversie",
      "Doorlopende ondersteuning",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          TARIEVEN / 03
        </p>
        <h1 data-reveal="1">
          Duidelijke keuzes.
          <br />
          <em>Echte waarde.</em>
        </h1>
        <p data-reveal="1">
          Elke zaak is anders. Deze pakketten geven u een helder vertrekpunt
          voor een professionele website die meegroeit met uw onderneming.
        </p>
      </section>
      <section className="pricing section-pad">
        <div className="price-grid">
          {tiers.map((tier, i) => (
            <article
              className={`price-card ${i === 1 ? "featured" : ""}`}
              data-reveal="1"
              data-index={i}
              key={tier.name}
            >
              <p className="section-kicker">0{i + 1}</p>
              <h3>{tier.name}</h3>
              <span
                className="amount"
                data-count-target={tier.countTarget}
                data-count-prefix={tier.countPrefix}
              >
                {tier.price}
              </span>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button" href="/contact">
                Kies {tier.name} <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-section section-pad">
        <p data-reveal="1">Heeft uw zaak iets anders nodig?</p>
        <h2 data-reveal="1">
          Een goed gesprek is
          <br />
          <em>het begin.</em>
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
