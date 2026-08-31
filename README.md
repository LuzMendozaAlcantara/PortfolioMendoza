# Portfolio · Luz Milagros Mendoza Alcantara

React + TypeScript + Vite. Diseño glassmorphic en tonos rosa / celeste / lila.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí el link que te muestra la terminal (por defecto http://localhost:5173).

## Estructura (feature-first)

Cada componente tiene su propio archivo `.module.css` al lado: los estilos
quedan encapsulados por componente (sin colisión de nombres de clase) usando
[CSS Modules](https://vitejs.dev/guide/features.html#css-modules), que Vite
soporta de forma nativa. Lo único que vive en `index.css` son los **tokens
globales del sistema de diseño** (colores, fuentes, fondo animado) y un puñado
de **clases utilitarias reusables** (`.glass`, `.btn`, `.eyebrow`) que varios
componentes comparten — igual que harías con Tailwind o cualquier design
system, esa parte tiene sentido que sea global.

```
src/
  app/
    App.tsx               # arma la página uniendo navbar + secciones
    App.module.css
  features/
    hero/
      Hero.tsx             # nombre, bio y stack técnico
      Hero.module.css
      types.ts
    projects/
      Projects.tsx         # sección "Mis proyectos"
      Projects.module.css
      ProjectCard.tsx       # card individual (browser frame + botones)
      ProjectCard.module.css
      projects.data.ts     # 👉 ACÁ se edita el contenido de cada proyecto
      types.ts
    contact/
      Contact.tsx           # sección de contacto
      Contact.module.css
      types.ts              # 👉 ACÁ se editan mail / teléfono / redes
  shared/
    components/
      Navbar.tsx            # barra de navegación flotante
      Navbar.module.css
      BrowserFrame.tsx      # marco tipo "ventana de navegador" para screenshots
      BrowserFrame.module.css
      SectionHeading.tsx
      SectionHeading.module.css
    lib/
      scrollTo.ts           # scroll suave entre secciones
  index.css                # tokens globales + utilidades glassmorphic compartidas
  vite-env.d.ts             # tipado de Vite (incluye *.module.css)
```

## Qué te falta completar

1. **Imágenes de los proyectos**: agregalas en `public/projects/` con los
   nombres `vitalink.png` y `rosa-bakery.png` (o cambiá la ruta en
   `projects.data.ts` → `imageSrc`). Mientras no estén, se muestra un
   placeholder prolijo automáticamente.
2. **Links de GitHub y Demo**: reemplazá los `"#"` en
   `src/features/projects/projects.data.ts`.
3. **Datos de contacto reales**: editá el array `CONTACT_LINKS` en
   `src/features/contact/Contact.tsx` (ahí están el mail y teléfono
   ficticios que pediste).
4. Si sumás un tercer proyecto, agregalo como un nuevo objeto en el array
   `PROJECTS` de `projects.data.ts` — la grilla se acomoda sola.

## Tipografías

- **Outfit** para títulos (display)
- **Plus Jakarta Sans** para texto
- **JetBrains Mono** para pills de tecnologías y etiquetas
