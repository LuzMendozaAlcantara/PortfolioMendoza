import SectionHeading from "@/shared/components/SectionHeading";
import type { ContactLink } from "@/features/contact/types";
import styles from "@/features/contact/Contact.module.css";

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "luzmmalcantara@gmail.com",
    href: "mailto:luzmmalcantara@gmail.com",
  },
  {
    label: "Teléfono",
    value: "+5492212202723",
    href: "tel:+5492212202723",
  },
  {
    label: "GitHub",
    value: "github.com/luzmendoza",
    href: "https://github.com/LuzMendozaAlcantara",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luzmendoza",
    href: "https://www.linkedin.com/in/luzmmendozaalc%C3%A1ntara/",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <SectionHeading eyebrow="Trabajemos juntos" title="Contacto" />

      <div className={`glass ${styles.card}`}>
        <p className={styles.intro}>
          Disponible para nuevos proyectos y oportunidades laborales.
        </p>

        <ul className={styles.list}>
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <span className={styles.label}>{link.label}</span>
              <a href={link.href} className={styles.value}>
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
