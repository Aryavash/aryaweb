import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "../../components/icons";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Een website die meer klanten aantrekt. Kies het pakket dat bij uw onderneming past: Landing Page, Starter, Premium of volledig Maatwerk.",
};

type Tier = {
  name: string;
  from?: string;
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
    name: "Landing Page",
    from: "Vanaf",
    price: "€750",
    countTarget: 750,
    countPrefix: "€",
    tagline: "Perfect voor zelfstandigen, starters en kleine ondernemingen.",
    cta: "Start uw project",
    items: [
      "Een professionele one-page website",
      "Perfect leesbaar op elke smartphone",
      "Klanten bereiken u vlot via het contactformulier",
      "Meteen zichtbaar via Google Maps en WhatsApp",
      "Een sterke basis om gevonden te worden in Google",
      "Online binnen één week",
    ],
  },
  {
    name: "Starter Website",
    from: "Vanaf",
    price: "€1.000",
    countTarget: 1000,
    countPrefix: "€",
    tagline: "Voor ondernemingen die professioneel online zichtbaar willen zijn.",
    cta: "Vraag een offerte aan",
    items: [
      "Ruimte voor uw volledige aanbod, tot vijf pagina's",
      "Een professioneel ontwerp op maat van uw zaak",
      "Klanten bereiken u vlot via het contactformulier",
      "Eenvoudig te vinden dankzij Google Maps",
      "Een sterke basis om gevonden te worden in Google",
      "Online binnen twee weken",
    ],
  },
  {
    name: "Premium Website",
    from: "Vanaf",
    price: "€2.500",
    countTarget: 2500,
    countPrefix: "€",
    badge: "Meest gekozen",
    tagline: "Voor bedrijven die meer klanten willen aantrekken en willen groeien.",
    cta: "Plan een kennismaking",
    items: [
      "Alles uit de Starter Website",
      "Een uniek premium ontwerp dat opvalt",
      "Meer vertrouwen bij elke bezoeker",
      "Beter gevonden worden in Google",
      "Meer offerteaanvragen en boekingen",
      "Persoonlijke begeleiding van begin tot eind",
    ],
  },
  {
    name: "Maatwerk",
    price: "Op aanvraag",
    tagline: "Voor bedrijven met specifieke wensen.",
    cta: "Bespreek uw project",
    items: [
      "Webshops die dag en nacht verkopen",
      "Boekings- en reservatiesystemen",
      "Koppelingen met uw bestaande software",
      "Automatiseringen die u tijd besparen",
      "Volledig op maat ontwikkeld",
      "Schaalbaar voor toekomstige groei",
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
          Een website die meer klanten aantrekt.
          <br />
          <em>Kies het pakket dat bij uw onderneming past.</em>
        </h1>
        <p data-reveal="1">
          Van een professionele landing page tot een volledig maatwerkplatform.
          Elke website wordt gebouwd om vertrouwen te creëren, beter gevonden te
          worden in Google en meer aanvragen te genereren.
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
              className={`price-card ${tier.badge ? "featured" : ""}`}
              data-reveal="1"
              data-index={i}
              key={tier.name}
            >
              {tier.badge ? (
                <span className="price-badge">{tier.badge}</span>
              ) : null}
              <p className="section-kicker">0{i + 1}</p>
              <h3>{tier.name}</h3>
              {tier.from ? <span className="price-from">{tier.from}</span> : null}
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
          Alle prijzen zijn vanafprijzen. De uiteindelijke prijs hangt af van de
          gewenste functionaliteiten en de omvang van het project.
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
