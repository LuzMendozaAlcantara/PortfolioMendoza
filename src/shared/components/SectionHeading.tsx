import styles from "@/shared/components/SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? styles.center : styles.left;

  return (
    <div className={`${styles.heading} ${alignClass}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
