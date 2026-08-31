import { useEffect, useState } from "react";
import { scrollToSection } from "@/shared/lib/scrollTo";
import type { NavItem } from "@/shared/components/types";
import styles from "@/shared/components/Navbar.module.css";

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", sectionId: "inicio" },
  { label: "Proyectos", sectionId: "proyectos" },
  { label: "Contacto", sectionId: "contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú mobile al cambiar el tamaño de pantalla a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className={styles.wrap}>
      <nav className={`glass ${styles.navbar}`} aria-label="Navegación principal">
        <button
          className={styles.brand}
          onClick={() => handleNavClick("inicio")}
          aria-label="Ir al inicio"
        >
          LMMA<span className={styles.brandDot}>.</span>
        </button>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.sectionId}>
              <button onClick={() => handleNavClick(item.sectionId)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {isOpen && (
        <ul className={`glass ${styles.mobileMenu}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.sectionId}>
              <button onClick={() => handleNavClick(item.sectionId)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
