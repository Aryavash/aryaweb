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
  badge?: string;
  tagline?: string;
  cta: string;
  items: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter Website",
    price: "€1.000",
    countTarget: 1000,
    countPrefix: "€",
    cta: "Vrijblijvend aanvragen",
    items: [
      "Een professionele uitstraling vanaf dag één",
      "Perfect leesbaar op elke smartphone",
      "Klanten bereiken u vlot via formulier en WhatsApp",
      "Eenvoudig te vinden dankzij Google Maps",
      "Een sterke basis om gevonden te worden in Google",
      "Online binnen twee weken",
    ],
  },
  {
    name: "Premium Website",
    price: "€2.500",
    countTarget: 2500,
    countPrefix: "€",
    badge: "Meest gekozen",
    cta: "Vrijblijvend aanvragen",
    items: [
      "Alles uit Starter Website",
      "Een uniek ontwerp dat vertrouwen wekt",
      "Ruimte om uw volledige aanbod te tonen",
      "Beter gevonden worden in Google",
      "Een snelle site die bezoekers vasthoudt",
      "Persoonlijke uitleg zodat u zelf verder kunt",
    ],
  },
  {
    name: "Maatwerk",
    price: "Op aanvraag",
    tagline: "Voor wie geen concessies doet.",
    cta: "Vraag een voorstel",
    items: [
      "Volledig op maat van uw ambitie",
      "Webshop of complexe koppelingen",
      "Gericht op meer aanvragen en omzet",
      "Persoonlijke opvolging op lange termijn",
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
        <p className="price-assurance" data-reveal="1">
          Geen verborgen kosten. Eén vaste prijs. Persoonlijke begeleiding van
          begin tot eind.
        </p>
        <div className="price-grid">
          {tiers.map((tier, i) => (
            <article
              className={`price-card ${i === 1 ? "featured" : ""}`}
              data-reveal="1"
              data-index={i}
              key={tier.name}
            >
              {tier.badge ? (
                <span className="price-badge">{tier.badge}</span>
              ) : null}
              <p className="section-kicker">0{i + 1}</p>
              <h3>{tier.name}</h3>
              <span
                className="amount"
                data-count-target={tier.countTarget}
                data-count-prefix={tier.countPrefix}
              >
                {tier.price}
              </span>
              {tier.tagline ? (
                <p className="price-tagline">{tier.tagline}</p>
              ) : null}
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button" href="/contact">
                {tier.cta} <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
        <p className="price-note" data-reveal="1">
          Hosting, domeinnaam en onderhoud lopen via een transparant jaartarief.
          We bespreken dit vooraf, zodat u nooit voor verrassingen komt te staan.
        </p>
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
