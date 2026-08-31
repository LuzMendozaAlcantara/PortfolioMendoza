import Navbar from "@/shared/components/Navbar";
import Hero from "@/features/hero/Hero";
import Projects from "@/features/projects/Projects";
import Contact from "@/features/contact/Contact";
import styles from "@/app/App.module.css";

export default function App() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <p>
          Hecho por Luz Milagros Mendoza Alcantara · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
