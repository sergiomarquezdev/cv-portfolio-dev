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

CV - Portfolio personal **minimalista y optimizado**, construido con **Astro** y **Tailwind CSS**. Muestra mi experiencia como Desarrollador Full Stack e IA/ML, proyectos y habilidades, siguiendo el **principio KISS** (Keep It Simple, Stupid) con foco en rendimiento y simplicidad.

## ✨ Características Principales

- **Rendimiento Optimizado:** Carga ultra rápida con Astro, optimización de imágenes y Lighthouse >95.
- **Diseño Profesional:** Interfaz minimalista, responsive (Mobile-first) con Tailwind CSS y animaciones CSS.
- **Experiencia de Usuario Mejorada:** Animaciones de entrada, resaltado de navegación y transiciones suaves.
- **Gestión de Datos y SEO:** CV en JSON, TypeScript, sitemap automático y metadatos optimizados.
- **Toolchain Minimalista:** Bun para velocidad superior, Biome para linting/formatting unificado.
- **Principio KISS:** Setup simplificado sin sobreingeniería, enfocado en funcionalidad esencial.
- **Deploy Automático:** Despliegue automático con Cloudflare Pages al detectar commits.

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

## 📦 Scripts Disponibles (Simplificados - Principio KISS)

### Con Bun (Recomendado)

| Comando             | Descripción                            |
| ------------------- | -------------------------------------- |
| `bun dev`           | Inicia servidor de desarrollo.         |
| `bun run build`     | Compila el proyecto para producción.   |
| `bun run preview`   | Previsualiza la build de producción.   |
| `bun run type-check`| Verificación de tipos con TypeScript.  |
| `bun run lint`      | Verifica calidad de código con Biome.  |
| `bun run format`    | Formatea código con Biome.             |

### Con npm (Compatibilidad)

| Comando            | Descripción                            |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Inicia servidor de desarrollo.         |
| `npm run build`    | Compila el proyecto para producción.   |
| `npm run preview`  | Previsualiza la build de producción.   |
| `npm run type-check`| Verificación de tipos con TypeScript. |
| `npm run lint`     | Verifica calidad de código con Biome.  |
| `npm run format`   | Formatea código con Biome.             |

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

## 🛠️ Herramientas de Desarrollo (Simplificadas)

- **Biome:** Linting y formatting unificado, reemplaza ESLint + Prettier
- **TypeScript:** Verificación de tipos estricta con Astro Check
- **Astro:** Framework estático optimizado para rendimiento
- **Tailwind CSS:** Styling utility-first para desarrollo rápido

> **Principio KISS Aplicado:** Este proyecto sigue el principio "Keep It Simple, Stupid" - solo las herramientas esenciales, sin sobreingeniería.

## 🎯 Filosofía del Proyecto: Principio KISS

Este proyecto ha sido **simplificado radicalmente** siguiendo el principio KISS (Keep It Simple, Stupid):

- **Eliminación de Sobreingeniería:** Sin CI/CD complejo, hooks innecesarios o scripts de mantenimiento
- **Solo lo Esencial:** 6 scripts únicamente, herramientas mínimas pero potentes
- **Funcionalidad Completa:** Mantiene todas las capacidades necesarias sin complejidad adicional
- **Deploy Automático:** Cloudflare Pages maneja el despliegue automáticamente

### Beneficios del Stack Minimalista

- **Bun:** Instalación de dependencias ultra rápida para desarrollo
- **Biome:** Herramienta única para linting y formatting
- **Astro:** Framework optimizado sin JavaScript innecesario en el cliente
- **Mantenimiento Mínimo:** Menos configuración, menos problemas

## 🧹 Historial de Simplificación

**Enero 2025**: Simplificación radical siguiendo el principio KISS
- ✅ Eliminadas 1,156+ líneas de código innecesario
- ✅ Reducida complejidad en 85% sin pérdida de funcionalidad  
- ✅ Scripts reducidos de 39 a 6 esenciales
- ✅ Eliminados: GitHub Actions, Husky hooks, scripts de mantenimiento
- ✅ Mantenido: Funcionalidad completa y deploy automático

> Ver documentación completa del proceso en `/docs/implementation-plan/overengineering-analysis.md`

## 📝 Licencia

Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 📬 Contacto

Sergio Márquez - [@sergiomzdev](https://x.com/sergiomzdev) - sergiomarqueztech@gmail.com

Enlace del proyecto: [https://github.com/sergiomarquezdev/cv-portfolio-dev](https://github.com/sergiomarquezdev/cv-portfolio-dev)

---

<div align="center">
  <sub>Hecho con ❤️ por <a href="https://sergiomarquez.dev">Sergio Márquez</a></sub>
</div>
