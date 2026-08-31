/**
 * Hace scroll suave hacia una sección de la página por su id,
 * sin necesidad de un router.
 */
export function scrollToSection(sectionId: string): void {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}
