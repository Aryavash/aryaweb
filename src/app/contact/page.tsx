import type { Metadata } from "next";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Aryaweb voor een gratis kennismaking of een offerte voor uw website.",
};

export default function Contact() {
  return (
    <section className="contact-wrap section-pad">
      <div data-reveal="1">
        <p className="section-kicker">CONTACT / 05</p>
        <h1>
          Vertel mij wat
          <br />u wilt <em>bouwen.</em>
        </h1>
        <div className="contact-details">
          <p>Liever rechtstreeks contact?</p>
          <a href="mailto:hello@aryaweb.be">hello@aryaweb.be</a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
