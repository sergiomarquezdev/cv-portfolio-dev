# Portfolio de Sergio Márquez - sergiomarquez.dev

![Astro](https://img.shields.io/badge/Astro-5.3.1-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)
![Partytown](https://img.shields.io/badge/Partytown-2.1.3-green)
![Sitemap](https://img.shields.io/badge/Sitemap-3.2.1-brightgreen)
[![Deployment Status](https://github.com/sergiomarquezdev/portfolio-dev/actions/workflows/deploy.yml/badge.svg)](https://github.com/sergiomarquezdev/portfolio-dev/actions/workflows/deploy.yml)

## 🎯 Descripción

Portfolio personal moderno y optimizado para desarrolladores, construido con **Astro**. Diseñado para mostrar mi experiencia como Desarrollador Full Stack, proyectos destacados y habilidades técnicas con un enfoque en rendimiento y SEO.

🌐 [Visitar Portfolio](https://sergiomarquez.dev)

## ✨ Características Principales

- **Rendimiento Optimizado**
  - Construido con Astro 5.3.1 para una carga ultra rápida (<0.5s FCP)
  - Optimización automática de imágenes y recursos estáticos
  - Puntuación perfecta en Lighthouse (Performance, Accessibility, SEO)
  - Uso de Partytown para scripts de terceros sin bloqueo

- **Diseño Profesional**
  - Interfaz minimalista y moderna
  - Diseño totalmente responsive (Mobile-first)
  - Animaciones sutiles con CSS nativo
  - Navegación intuitiva con secciones bien definidas

- **Gestión de Datos**
  - CV estructurado en formato JSON para mantenimiento sencillo
  - Tipado estricto con TypeScript para mayor robustez
  - Interfaces bien definidas para todas las secciones

- **SEO Optimizado**
  - Generación automática de sitemap
  - Metadatos Open Graph y Twitter Cards
  - Schema.org con JSON-LD
  - Rutas semánticas y contenido accesible

- **CI/CD y DevOps**
  - Despliegue automático con GitHub Actions
  - Comprobación de tipos TypeScript en build
  - Optimización de assets durante la compilación
  - Configuración avanzada para minificación CSS con esbuild

- **Accesibilidad**
  - Configuración para pruebas de accesibilidad (WCAG 2.0 AA)
  - Atributos ARIA correctamente implementados
  - Estructura semántica HTML5

## 🛠️ Stack Tecnológico

### Core
- **[Astro](https://astro.build/)** v5.3.1 - Framework web para sitios estáticos de alto rendimiento
- **[TypeScript](https://www.typescriptlang.org/)** v5.7.3 - Superset de JavaScript tipado

### Integraciones
- **[@astrojs/partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/)** v2.1.3 - Para optimización de scripts de terceros
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** v3.2.1 - Generación automática de sitemap
- **[@astrojs/check](https://docs.astro.build/en/guides/typescript/)** v0.9.4 - Comprobación de tipos TypeScript

### DevOps
- **GitHub Actions** - CI/CD para despliegue automático
- **VPS propio con Nginx** - Hosting del sitio

### Herramientas de Calidad
- **ESLint** v9.21.0 - Linting de código
- **Prettier** v3.5.2 - Formateo de código
- **Terser** v5.39.0 - Minificación avanzada de JavaScript
- **LightningCSS/esbuild** - Minificación CSS

## 📂 Estructura del Proyecto

```
portfolio-dev/
├── .github/
│   └── workflows/         # Configuraciones de CI/CD (deploy.yml)
├── public/
│   ├── img/              # Imágenes y recursos estáticos
│   ├── robots.txt        # Configuración para crawlers
│   └── favicon.ico       # Icono del sitio
├── src/
│   ├── components/       # Componentes reutilizables
│   │   └── sections/     # Secciones principales del portfolio
│   ├── layouts/          # Plantillas de página (Layout.astro)
│   ├── pages/            # Páginas de la aplicación (index.astro)
│   ├── icons/            # Iconos SVG optimizados
│   ├── cv.d.ts           # Tipos para datos del CV
│   ├── env.d.ts          # Tipos de variables de entorno
│   └── types.d.ts        # Definiciones de tipos globales
├── cv.json               # Datos estructurados del CV
├── accessibility.config.js # Configuración para pruebas de accesibilidad
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## 🚀 Inicio Rápido

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/sergiomarquezdev/portfolio-dev.git
   cd portfolio-dev
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar entorno de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir navegador:**
   Visita `http://localhost:4321`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build` | Comprueba tipos y construye el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run check` | Ejecuta la comprobación de tipos de TypeScript |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código |
| `npm run lint-fix` | Corrige automáticamente problemas detectados por ESLint |
| `npm run format` | Formatea el código usando Prettier |

## 🔄 Flujo de Despliegue

El proyecto implementa Integración y Despliegue Continuo (CI/CD):

1. Los cambios en la rama `main` activan automáticamente el workflow de GitHub Actions
2. El proceso de CI/CD:
   - Comprueba la integridad del código con TypeScript
   - Construye la aplicación para producción
   - Prepara el servidor para el despliegue
   - Transfiere los archivos generados al VPS
   - Reinicia Nginx para aplicar los cambios
   - Verifica que el despliegue se ha completado correctamente
3. El sitio queda disponible en [sergiomarquez.dev](https://sergiomarquez.dev)

## 📊 Optimizaciones de Rendimiento

Este portfolio incorpora múltiples optimizaciones para garantizar la mejor experiencia:

- **HTML minificado** mediante la opción `compressHTML` de Astro
- **CSS minificado** usando esbuild o LightningCSS
- **JavaScript optimizado** con Terser, eliminando console.logs y optimizando tamaño
- **División de chunks** inteligente con Rollup
- **Precarga de fuentes** para evitar parpadeos de texto
- **Scripts de terceros** ejecutados con Partytown para no bloquear el renderizado

## 🔍 SEO y Accesibilidad

El proyecto está optimizado para motores de búsqueda y accesibilidad:

- **Meta tags** completos para SEO
- **Open Graph** y Twitter Cards para compartir en redes sociales
- **Schema.org** con JSON-LD para datos estructurados
- **Etiquetas ARIA** para mejorar la navegación con lectores de pantalla
- **Configuración de accesibilidad** para pruebas automatizadas según WCAG 2.0 AA

## 🎨 Personalización

Para personalizar este portfolio para tu uso:

1. Actualiza el archivo `cv.json` con tu información personal y profesional
2. Reemplaza las imágenes en `/public/img/`
3. Modifica los colores y estilos en los componentes
4. Actualiza la configuración en `astro.config.mjs`
5. Adapta las pruebas de accesibilidad en `accessibility.config.js`

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📧 Contacto

Sergio Márquez

- Twitter/X: [@smarquezdev](https://twitter.com/smarquezdev)
- Email: sergiomarquezdev@gmail.com
- Web: [sergiomarquez.dev](https://sergiomarquez.dev)
- LinkedIn: [Sergio Márquez Pérez](https://www.linkedin.com/in/sergio-marquez-perez/)
- GitHub: [sergiomarquezdev](https://github.com/sergiomarquezdev/)

---

Desarrollado con ❤️ por [Sergio Márquez](https://github.com/sergiomarquezdev)
