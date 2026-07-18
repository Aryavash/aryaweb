"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

// Uses FormSubmit (https://formsubmit.co) so the quote request actually
// reaches an inbox without needing a custom backend or API keys. The first
// submission after deploying will trigger a one-time "activation" email to
// hello@aryaweb.be that must be confirmed before messages start arriving.
const ENDPOINT = "https://formsubmit.co/ajax/hello@aryaweb.be";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: if this hidden field is filled in, it's almost certainly a bot.
    if (data.get("_honey")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-status form-status-success" role="status">
        <h2>Bedankt!</h2>
        <p>
          Uw aanvraag is verstuurd. Ik neem zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Vraag uw offerte aan.</h2>
      <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Nieuwe offerteaanvraag via Aryaweb.be" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="form-section">
        <h3>Informatie</h3>
        <div className="field-row">
          <label className="field">
            <span>NAAM</span>
            <input name="name" autoComplete="name" placeholder="Uw naam" required />
          </label>
          <label className="field">
            <span>BEDRIJF</span>
            <input
              name="company"
              autoComplete="organization"
              placeholder="Naam van uw bedrijf"
            />
          </label>
        </div>
        <div className="field-row">
          <label className="field">
            <span>LOCATIE</span>
            <input name="location" autoComplete="address-level2" placeholder="Stad of gemeente" />
          </label>
          <label className="field">
            <span>TELEFOONNUMMER</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+32 ..."
            />
          </label>
        </div>
        <label className="field">
          <span>E-MAILADRES</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="uwnaam@bedrijf.be"
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h3>Aanvraag</h3>
        <label className="field field-select">
          <span>DIENST</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Kies een dienst
            </option>
            <option value="Webdesign">Webdesign</option>
            <option value="Websiteontwikkeling">Websiteontwikkeling</option>
            <option value="SEO">SEO</option>
            <option value="Hosting">Hosting</option>
            <option value="Onderhoud">Onderhoud</option>
            <option value="Iets anders">Iets anders</option>
          </select>
        </label>
        <label className="field">
          <span>BERICHT</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Vertel kort wat u nodig hebt."
            required
          />
        </label>
      </div>

      <div className="form-section">
        <h3>Praktisch</h3>
        <label className="field field-select">
          <span>HOE MOGEN WE U CONTACTEREN?</span>
          <select name="preferredContact" defaultValue="" required>
            <option value="" disabled>
              Kies een voorkeur
            </option>
            <option value="E-mail">E-mail</option>
            <option value="Telefoon">Telefoon</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </label>
        <label className="field field-select">
          <span>HOE HEBT U ONS GEVONDEN?</span>
          <select name="referralSource" defaultValue="">
            <option value="" disabled>
              Kies een optie
            </option>
            <option value="Google">Google</option>
            <option value="Sociale media">Sociale media</option>
            <option value="Aanbeveling">Aanbeveling</option>
            <option value="Iets anders">Iets anders</option>
          </select>
        </label>
        <label className="checkbox-field">
          <input type="checkbox" name="privacyAccepted" value="Ja" required />
          <span>
            Ik ga akkoord dat Aryaweb mijn gegevens gebruikt om contact met mij
            op te nemen.
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="form-error" role="alert">
          Er ging iets mis bij het verzenden. Probeer het opnieuw, of mail
          rechtstreeks naar hello@aryaweb.be.
        </p>
      )}
      <button
        className="button button-dark contact-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Bezig met verzenden..."
          : "Vraag vandaag nog een vrijblijvende offerte aan"}{" "}
        <ArrowUpRight />
      </button>
    </form>
  );
}
