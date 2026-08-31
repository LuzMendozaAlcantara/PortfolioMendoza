import { scrollToSection } from "@/shared/lib/scrollTo";
import type { TechStackItem } from "@/features/hero/types";
import styles from "@/features/hero/Hero.module.css";

const TECH_STACK: TechStackItem[] = [
  { label: "React" },
  { label: "TypeScript" },
  { label: "JavaScript" },
  { label: "Context API" },
  { label: "REST APIs" },
];

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`glass ${styles.card}`}>

        <h1>Luz Milagros Mendoza Alcantara</h1>

        <span className="eyebrow">Frontend Developer</span>
        <p className={styles.bio}>
          <b>Desarrolladora Frontend</b> especializada en construir{" "}
            Single Page Applications escalables con{" "}
            React y TypeScript, sobre bases sólidas
            de JavaScript (ES6+), HTML5 y CSS3. Trabajo con Context API y Custom
            Hooks para un manejo de estado prolijo, consumo servicios REST con
            control preciso de estados de carga y error, y priorizo siempre el Clean
            Code: componentes reutilizables, mantenibles y versionados con
            Git/GitHub. Integro herramientas de IA en mi flujo de trabajo para
            optimizar código y documentación, y disfruto seguir sumando herramientas
            que eleven la calidad de lo que construyo.
        </p>

        <ul className={styles.stack} aria-label="Tecnologías principales">
          {TECH_STACK.map((tech) => (
            <li key={tech.label}>{tech.label}</li>
          ))}
        </ul>

        <button
          className="btn btn-primary"
          onClick={() => scrollToSection("proyectos")}
        >
          Ver proyectos
        </button>
      </div>
    </section>
  );
}
