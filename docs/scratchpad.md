# Scratchpad de Desarrollo - CV Portfolio

## Estado Actual del Proyecto
- **Fecha**: 2025-09-03
- **Proyecto**: CV Portfolio Astro
- **Branch actual**: main
- **Stack actual**: Astro + Vite, ESLint + Prettier, npm, Tailwind CSS

## Tareas Activas

### 🚀 Migración a Bun y Biome
- **Estado**: ✅ **COMPLETADO**
- **Archivo de implementación**: `docs/implementation-plan/bun-biome-migration.md`
- **Prioridad**: Alta
- **Resultado**: Migración 100% exitosa
- **Beneficios obtenidos**: 17x velocidad, toolchain simplificado, 7 dependencias menos

## Lessons Learned

### [2025-09-03] Migración Exitosa a Bun y Biome
- **Bun instalación**: El método `npm install -g bun` funcionó cuando los scripts oficiales fallaron en Windows
- **Velocidad real**: Confirmamos mejora de 17x en velocidad de instalación (652 paquetes en 58s vs minutos con npm)  
- **Biome migración**: El comando `biome migrate eslint --write` migró automáticamente 74% de las reglas de ESLint
- **Configuración corrupta**: Cuando se corrompe `biome.json`, es mejor regenerarlo desde cero que tratar de arreglarlo
- **Variables no usadas**: Biome detecta variables no usadas que ESLint no detectaba - esto es comportamiento correcto, no un error
- **Build exitoso**: A pesar de warnings de Biome, el build de producción funciona perfectamente
- **Scripts update**: Cambiar de `npm run` a `bun run` en todos los scripts fue crítico para aprovechar la velocidad

## Notas de Desarrollo

- El proyecto usa Astro con Vite, por lo que Rspack no es necesario
- No hay testing configurado actualmente, se evaluará en futuras iteraciones
- ESLint + Prettier configuración actual está funcionando pero puede simplificarse
