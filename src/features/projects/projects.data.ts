import type { Project } from "@/features/projects/types";

export const PROJECTS: Project[] = [
  {
    id: "vitalink",
    title: "Página web VITALINK",
    description:
      "Proyecto grupal de desarrollo web sobre primeros auxilios, presentado a empresas de la red de la Fundación Forge. Mi trabajo fue la gestión de la base de datos de cada caso de emergencia mediante Postman, el diseño y maquetado de las cards en la página principal, y la creación de vistas individuales interactivas para cada caso, garantizando una experiencia de usuario sencilla y de fácil acceso, con un diseño visual consistente.",
    tags: ["Trabajo en equipo", "Postman", "UI/UX"],
    previewUrl: "vitalink.app",
    imageSrc: "public/projects/vitalink.png",
    githubUrl: "https://github.com/LuzMendozaAlcantara/Vitalink",
    demoUrl: "https://grupo4-proyecto-final-client.vercel.app/",
  },
  {
    id: "rosa-bakery",
    title: "Rosa Bakery",
    description:
      "Desarrollé una página web dinámica y atractiva para un emprendimiento real de pastelería. El objetivo principal fue crear una experiencia súper amigable para que los clientes pudieran tentarse con los postres y armar su pedido de forma rápida y sencilla, sin que la página se trabe o tenga que recargar.",
    tags: ["Página dinámica", "E-commerce", "Diseño responsive"],
    previewUrl: "rosabakery.com",
    imageSrc: "public/rosa-bakery.png",
    githubUrl: "https://github.com/LuzMendozaAlcantara/RosaBakery",
    demoUrl: "https://rosa-bakery.vercel.app/",
  },
];
