# CV - Portfolio de Sergio Márquez - cv.sergiomarquez.dev

<div align="center">
  <img src="https://img.shields.io/badge/Astro-5.13.5-orange" alt="Astro">
  <img src="https://img.shields.io/badge/TypeScript-5.9.2-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bun-1.2.21-black" alt="Bun">
  <img src="https://img.shields.io/badge/Biome-2.2.2-60A5FA" alt="Biome">
  <br>
  <br>
  <strong>
    <a href="https://cv.sergiomarquez.dev" target="_blank">Visitar Portfolio ↗</a>
  </strong>
</div>

## 🎯 Descripción

CV - Portfolio personal moderno y optimizado, construido con **Astro** y **Tailwind CSS**. Muestra mi experiencia como Desarrollador Full Stack e IA/ML, proyectos y habilidades, con foco en rendimiento y experiencia de usuario.

## ✨ Características Principales

- **Rendimiento Optimizado:** Carga ultra rápida con Astro, optimización de imágenes y Lighthouse >95.
- **Diseño Profesional:** Interfaz minimalista, responsive (Mobile-first) con Tailwind CSS y animaciones CSS.
- **Experiencia de Usuario Mejorada:** Animaciones de entrada, resaltado de navegación y transiciones suaves.
- **Gestión de Datos y SEO:** CV en JSON, TypeScript, sitemap automático y metadatos optimizados.
- **Toolchain Moderno:** Bun para velocidad 17x superior, Biome para linting/formatting unificado.
- **Compatibilidad Dual:** Desarrollo optimizado con Bun, deployment confiable con npm.
- **CI/CD:** Despliegue automático con GitHub Actions a VPS con Nginx y compatibilidad con Cloudflare Pages.

## 🛠️ Stack Tecnológico Principal

- **Core:** Astro (v5.13.5), TypeScript (v5.9.2), Tailwind CSS (v3.4.17)
- **Herramientas:** Bun (v1.2.21), Biome (v2.2.2) 
- **Integraciones Astro:** Tailwind CSS, Partytown, Sitemap, Check
- **Optimización:** LightningCSS, Terser

## 🚀 Inicio Rápido

### Desarrollo Local (Recomendado - con Bun)

1. **Clonar:** `git clone https://github.com/sergiomarquezdev/cv-portfolio-dev.git && cd cv-portfolio-dev`
2. **Instalar Bun:** [Instrucciones oficiales](https://bun.sh/)
3. **Instalar dependencias:** `bun install` (17x más rápido que npm)
4. **Desarrollo:** `bun dev` (Visita `http://localhost:4321`)

### Alternativa con npm/Node.js

1. **Clonar:** `git clone https://github.com/sergiomarquezdev/cv-portfolio-dev.git && cd cv-portfolio-dev`
2. **Instalar:** `npm install`
3. **Desarrollo:** `npm run dev` (Visita `http://localhost:4321`)

## 📦 Scripts Disponibles

### Con Bun (Recomendado)
| Comando           | Descripción                            |
| ----------------- | -------------------------------------- |
| `bun dev`         | Inicia servidor de desarrollo.         |
| `bun run build`   | Compila el proyecto para producción.   |
| `bun run preview` | Previsualiza la build de producción.   |
| `bun run lint`    | Verifica calidad de código con Biome.  |
| `bun run format`  | Formatea código con Biome.             |
| `bun run validate`| Ejecuta check + lint + build.          |

### Con npm (Compatibilidad)
| Comando           | Descripción                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo.         |
| `npm run build`   | Compila el proyecto para producción.   |
| `npm run preview` | Previsualiza la build de producción.   |
| `npm run lint`    | Verifica calidad de código con Biome.  |
| `npm run format`  | Formatea código con Biome.             |

## 🌐 Despliegue en Cloudflare Pages

Este proyecto está optimizado para Cloudflare Pages con los siguientes archivos de configuración:

- **`.nvmrc`**: Especifica Node.js v22.18.0
- **`package-lock.json`**: Garantiza versiones consistentes de dependencias
- **`wrangler.toml`**: Configuración de build para Cloudflare
- **`public/_headers`**: Headers de seguridad y cache optimizado

### Configuración en Cloudflare Pages:
1. **Build command:** `npm run build`
2. **Build output directory:** `dist`
3. **Node.js version:** Se detecta automáticamente desde `.nvmrc`

## 🧹 Mantenimiento del Proyecto

### Scripts de Limpieza
| Comando             | Descripción                                 |
| ------------------- | ------------------------------------------- |
| `bun run clean`     | Limpia directorios de build (dist, .astro) |
| `bun run clean:cache` | Limpia cache de dependencias y Vite      |
| `bun run clean:all` | Limpieza completa + eliminación node_modules |
| `bun run reset`     | Limpieza completa + reinstalación dependencias |

### Herramientas de Desarrollo
- **Biome:** Reemplaza ESLint + Prettier con configuración unificada
- **Husky:** Pre-commit hooks para calidad de código automática
- **TypeScript:** Verificación de tipos estricta con Astro Check
- **Scripts Nativos:** Comandos de limpieza sin dependencias externas (sin rimraf)

## 🔧 Beneficios del Stack Moderno

- **Bun:** Instalación de dependencias 17x más rápida que npm
- **Biome:** Linting y formatting unificado, reemplaza ESLint + Prettier
- **Compatibilidad:** Funciona tanto con Bun (desarrollo) como npm (CI/CD)

## 📝 Licencia

Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 📬 Contacto

Sergio Márquez - [@sergiomzdev](https://x.com/sergiomzdev) - contacto@sergiomarquez.dev

Enlace del proyecto: [https://github.com/sergiomarquezdev/cv-portfolio-dev](https://github.com/sergiomarquezdev/cv-portfolio-dev)

---

<div align="center">
  <sub>Hecho con ❤️ por <a href="https://sergiomarquez.dev">Sergio Márquez</a></sub>
</div>
