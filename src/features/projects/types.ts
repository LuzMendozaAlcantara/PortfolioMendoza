export interface Project {
  id: string;
  title: string;
  description: string;
  /** Etiquetas cortas que describen el aporte o el tipo de proyecto */
  tags: string[];
  /** Texto mostrado en la barra de direcciones del BrowserFrame */
  previewUrl: string;
  /** Ruta de la imagen del screenshot (agregala en /public/projects) */
  imageSrc: string;
  githubUrl: string;
  demoUrl: string;
}
