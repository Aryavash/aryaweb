import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over prijzen, timing, wat er inbegrepen is, revisies, hosting en eigendom van uw website.",
};

const faqs = [
  [
    "Wat kost een website?",
    "Dat hangt af van de omvang en de gewenste functionaliteiten. De pakketten op de tarievenpagina zijn vanafprijzen en een helder vertrekpunt. Na een korte kennismaking krijgt u een duidelijke offerte op maat, zonder verborgen kosten.",
  ],
  [
    "Hoe lang duurt het voor mijn website online staat?",
    "Een eenvoudige one-page website kan er binnen één week staan, een uitgebreidere site doorgaans binnen twee tot enkele weken. De timing hangt vooral af van hoe snel teksten en beeldmateriaal worden aangeleverd. U krijgt vooraf een realistische planning.",
  ],
  [
    "Wat is er inbegrepen?",
    "Elke website is mobielvriendelijk, snel en gebouwd om gevonden te worden in Google. Afhankelijk van uw pakket horen daar zaken bij zoals een contactformulier, Google Maps- en WhatsApp-integratie en een basis SEO-opzet. Wat precies inbegrepen is, staat altijd zwart op wit in uw offerte.",
  ],
  [
    "Hoeveel aanpassingen zijn mogelijk?",
    "Tijdens het traject werken we in afgesproken revisierondes zodat het resultaat echt bij uw zaak past. Het aantal rondes staat in uw offerte. Grote wijzigingen na goedkeuring zijn uiteraard mogelijk en worden dan als apart werk besproken.",
  ],
  [
    "Regelen jullie hosting en domeinnaam?",
    "Ja, hosting en domeinnaam kunnen volledig geregeld worden. Deze lopen via een transparant jaartarief dat we vooraf bespreken, zodat u nooit voor verrassingen komt te staan. U kunt ook een bestaand domein of hosting blijven gebruiken.",
  ],
  [
    "Van wie is de website na de lancering?",
    "De website is van u. Na volledige betaling krijgt u het gebruiksrecht op het eindresultaat, inclusief uw teksten en beeldmateriaal. U blijft dus niet vastzitten: uw domein en inhoud zijn en blijven van u.",
  ],
];

export default function Faq() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          VEELGESTELDE VRAGEN
        </p>
        <h1 data-reveal="1">
          Uw vragen.
          <br />
          <em>Helder beantwoord.</em>
        </h1>
        <p data-reveal="1">
          De meest gestelde vragen over prijzen, timing en samenwerking. Staat
          uw vraag er niet bij? Stel ze gerust, u krijgt snel een eerlijk
          antwoord.
        </p>
      </section>
      <section className="section-pad legal-section">
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <details className="faq-item" data-reveal="1" data-index={i} key={question}>
              <summary>
                <span>{question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <article className="legal-block" data-reveal="1">
          <h2>Nog een vraag?</h2>
          <p>
            Neem gerust contact op via{" "}
            <a className="line-link" href="mailto:hello@aryaweb.be">
              hello@aryaweb.be
            </a>{" "}
            of via de <Link className="line-link" href="/contact">contactpagina</Link>.
          </p>
        </article>
      </section>
    </>
  );
}
