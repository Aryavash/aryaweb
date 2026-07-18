import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Lees hoe Aryaweb omgaat met uw persoonsgegevens: welke gegevens we verzamelen, waarom, en wat uw rechten zijn.",
};

const sections = [
  [
    "Welke gegevens verzamelen we?",
    "Wanneer u het contactformulier invult, vraagt Aryaweb enkel de gegevens die nodig zijn om uw aanvraag te beantwoorden: uw naam, e-mailadres, en optioneel uw bedrijfsnaam, locatie, telefoonnummer en contactvoorkeur, samen met uw bericht. We verzamelen geen gegevens via cookies of trackers voor advertentiedoeleinden.",
  ],
  [
    "Waarvoor gebruiken we uw gegevens?",
    "Uw gegevens worden uitsluitend gebruikt om contact met u op te nemen over uw offerteaanvraag of vraag. Ze worden nooit verkocht of gedeeld met derden voor marketing.",
  ],
  [
    "Hoe worden uw gegevens verwerkt?",
    "Het contactformulier wordt technisch verwerkt via FormSubmit, een dienst die uw bericht als e-mail aflevert bij Aryaweb. Uw gegevens komen daarna enkel terecht in de mailbox van Aryaweb en worden niet in een aparte databank opgeslagen.",
  ],
  [
    "Hoe lang bewaren we uw gegevens?",
    "We bewaren uw aanvraag zolang dat nodig is om ze op te volgen. Wordt er geen samenwerking gestart, dan verwijderen we uw gegevens op eenvoudig verzoek.",
  ],
  [
    "Wat zijn uw rechten?",
    "U hebt op elk moment het recht om uw gegevens in te kijken, te laten corrigeren of te laten verwijderen. Eén mailtje volstaat. U kunt ook een klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be) als u vindt dat uw gegevens onjuist behandeld worden.",
  ],
];

export default function Privacy() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          PRIVACY
        </p>
        <h1 data-reveal="1">
          Uw gegevens.
          <br />
          <em>Veilig en helder.</em>
        </h1>
        <p data-reveal="1">
          Aryaweb gaat zorgvuldig om met uw persoonsgegevens. Op deze pagina
          leest u in duidelijke taal welke gegevens we verzamelen, waarom we dat
          doen en welke rechten u hebt.
        </p>
      </section>
      <section className="section-pad legal-section">
        {sections.map(([title, text], i) => (
          <article className="legal-block" data-reveal="1" data-index={i} key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
        <article className="legal-block" data-reveal="1">
          <h2>Vragen over uw privacy?</h2>
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
