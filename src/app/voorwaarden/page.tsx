import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "De algemene voorwaarden van Aryaweb: afspraken over offertes, betaling, aansprakelijkheid, intellectuele eigendom en beëindiging.",
};

// ⚠️ PLACEHOLDER — JURIDISCH NAZICHT VEREIST
// Dit is standaard boilerplate voor een Belgische freelance webdesigner en is
// GEEN juridisch advies. Laat deze tekst nakijken door een jurist of boekhouder
// voordat u ze publiceert, en vul de plaatshouders in ([BTW-nummer],
// [ondernemingsnummer], [betaaltermijn], enz.).

const sections = [
  [
    "1. Toepassing",
    "Deze algemene voorwaarden zijn van toepassing op elke offerte, opdracht en overeenkomst tussen Aryaweb ([ondernemingsnummer], [BTW-nummer]) en de klant. Door een offerte te aanvaarden, verklaart de klant zich akkoord met deze voorwaarden. Afwijkingen gelden enkel wanneer ze schriftelijk zijn overeengekomen.",
  ],
  [
    "2. Offertes en opdrachten",
    "Elke offerte is vrijblijvend en geldig gedurende [X] dagen, tenzij anders vermeld. Een opdracht komt tot stand zodra de klant de offerte schriftelijk of per e-mail bevestigt. De opdracht omvat enkel wat uitdrukkelijk in de offerte is beschreven; bijkomend werk wordt vooraf besproken en apart geoffreerd.",
  ],
  [
    "3. Prijzen en betaling",
    "Alle prijzen zijn uitgedrukt in euro. Zolang Aryaweb niet BTW-plichtig is, wordt geen BTW aangerekend ([BTW-nummer] / vrijstellingsregeling). Tenzij anders overeengekomen geldt een voorschot van [X]% bij de start van de opdracht; het saldo is betaalbaar bij oplevering. Facturen zijn betaalbaar binnen [betaaltermijn] dagen na factuurdatum. Bij laattijdige betaling kan van rechtswege en zonder ingebrekestelling een verwijlintrest en een forfaitaire schadevergoeding worden aangerekend conform de geldende wetgeving.",
  ],
  [
    "4. Medewerking van de klant",
    "De klant bezorgt tijdig alle teksten, beeldmateriaal en toegangen die nodig zijn om de opdracht uit te voeren, en staat in voor de juistheid ervan. Vertraging in het aanleveren van materiaal kan de opleverdatum verschuiven. De klant garandeert over de nodige rechten te beschikken op alle aangeleverde inhoud.",
  ],
  [
    "5. Oplevering en revisies",
    "Vermelde termijnen zijn richtinggevend en geen bindende einddatum, tenzij uitdrukkelijk anders overeengekomen. Het overeengekomen aantal revisierondes wordt in de offerte bepaald. Bijkomende wijzigingen na goedkeuring worden als meerwerk beschouwd en apart aangerekend.",
  ],
  [
    "6. Intellectuele eigendom",
    "Na volledige betaling verkrijgt de klant het gebruiksrecht op het opgeleverde eindresultaat voor het doel waarvoor het werd gemaakt. Aryaweb behoudt het recht om het werk te tonen in haar portfolio. Broncode, ontwerpbestanden en gebruikte componenten van derden blijven onderworpen aan hun respectieve licenties. Overdracht van bijkomende rechten gebeurt enkel indien dit schriftelijk is overeengekomen.",
  ],
  [
    "7. Aansprakelijkheid",
    "Aryaweb levert haar diensten naar best vermogen als een inspanningsverbintenis. Aryaweb is niet aansprakelijk voor onrechtstreekse schade, winstderving of gevolgschade. De totale aansprakelijkheid is in elk geval beperkt tot het bedrag van de betrokken opdracht. Aryaweb is niet verantwoordelijk voor storingen, dataverlies of onbeschikbaarheid veroorzaakt door derden zoals hosting-, domein- of e-mailproviders.",
  ],
  [
    "8. Hosting, domein en onderhoud",
    "Hosting, domeinnaam en onderhoud kunnen als aparte dienst worden aangeboden en worden dan afzonderlijk gefactureerd volgens de op dat moment geldende tarieven. Deze diensten zijn geen onderdeel van de eenmalige ontwikkelingsprijs tenzij uitdrukkelijk vermeld.",
  ],
  [
    "9. Beëindiging",
    "Elke partij kan de overeenkomst schriftelijk beëindigen bij een ernstige tekortkoming die niet binnen een redelijke termijn wordt rechtgezet. Bij annulering door de klant blijft het reeds uitgevoerde werk verschuldigd, samen met het betaalde voorschot. Reeds geleverde prestaties worden in elk geval aangerekend.",
  ],
  [
    "10. Toepasselijk recht",
    "Op deze voorwaarden is het Belgisch recht van toepassing. Bij een geschil zijn enkel de bevoegde rechtbanken van het arrondissement van Aryaweb bevoegd. Partijen streven eerst naar een minnelijke oplossing.",
  ],
];

export default function Voorwaarden() {
  return (
    <>
      <section className="page-hero section-pad">
        <p className="section-kicker" data-reveal="1">
          ALGEMENE VOORWAARDEN
        </p>
        <h1 data-reveal="1">
          Heldere afspraken.
          <br />
          <em>Van bij de start.</em>
        </h1>
        <p data-reveal="1">
          Deze voorwaarden beschrijven hoe we samenwerken: van offerte en
          betaling tot oplevering en nazorg. Zo weet u vooraf waar u aan toe
          bent.
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
          <h2>Vragen over deze voorwaarden?</h2>
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
