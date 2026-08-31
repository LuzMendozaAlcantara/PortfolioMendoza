import SectionHeading from "@/shared/components/SectionHeading";
import ProjectCard from "@/features/projects/ProjectCard";
import { PROJECTS } from "@/features/projects/projects.data";
import styles from "@/features/projects/Projects.module.css";

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <SectionHeading eyebrow="Portfolio" title="Mis proyectos" />

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
