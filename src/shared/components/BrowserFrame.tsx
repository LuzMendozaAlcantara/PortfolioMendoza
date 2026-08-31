import { useState } from "react";
import styles from "@/shared/components/BrowserFrame.module.css";

interface BrowserFrameProps {
  /** Texto que se muestra en la barra de direcciones, ej: "vitalink.app" */
  url: string;
  /** Ruta de la imagen del screenshot. Puede no existir todavía. */
  imageSrc: string;
  /** Texto alternativo de la imagen */
  imageAlt: string;
}

/**
 * Enmarca el screenshot de un proyecto como si fuera una ventana de
 * navegador: un guiño al mundo frontend. Si la imagen todavía no fue
 * agregada, muestra un placeholder prolijo en su lugar.
 */
export default function BrowserFrame({ url, imageSrc, imageAlt }: BrowserFrameProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={styles.frame}>
      <div className={styles.bar}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.url}>{url}</div>
      </div>

      <div className={styles.screen}>
        {!imageFailed ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={styles.placeholder}>
            <span>Vista previa próximamente</span>
          </div>
        )}
      </div>
    </div>
  );
}
