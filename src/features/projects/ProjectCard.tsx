import BrowserFrame from "@/shared/components/BrowserFrame";
import type { Project } from "@/features/projects/types";
import styles from "@/features/projects/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`glass ${styles.card}`}>
      <div className={styles.info}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className={styles.tags} aria-label="Aspectos destacados">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <BrowserFrame
        url={project.previewUrl}
        imageSrc={project.imageSrc}
        imageAlt={`Captura de pantalla del proyecto ${project.title}`}
      />

      <div className={styles.actions}>
        <a
          className="btn btn-glass"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="btn btn-primary"
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </div>
    </article>
  );
}
