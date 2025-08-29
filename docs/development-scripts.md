# 🔧 Development Scripts Documentation

Este proyecto incluye un conjunto completo de scripts de desarrollo para mejorar la experiencia del desarrollador y automatizar tareas comunes.

## 🚀 Scripts Principales

### Desarrollo Básico

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye el proyecto para producción
npm run preview      # Previsualiza la build localmente
```

### Validación y Calidad

```bash
npm run validate     # Validación completa (type-check + lint + build)
npm run type-check   # Verifica tipos de TypeScript
npm run lint         # Ejecuta ESLint y Prettier
npm run lint:fix     # Corrige automáticamente issues de linting
npm run format       # Formatea el código con Prettier
```

### Pre-commit y Git

```bash
npm run pre-commit   # Ejecuta validaciones pre-commit manualmente
npm run commit       # Ejecuta pre-commit y hace commit
npm run hooks:install # Reinstala los hooks de Husky
npm run hooks:test   # Prueba los hooks pre-commit
```

## 🔍 Scripts de Análisis Avanzado

### Análisis de Proyecto

```bash
npm run dev:analyze  # Análisis completo del proyecto
npm run dev:deps     # Análisis de dependencias y seguridad
npm run dev:size     # Análisis del tamaño del bundle
npm run dev:health   # Verificación de salud del proyecto
npm run dev:help     # Ayuda de scripts de desarrollo
```

### Debugging y Diagnóstico

```bash
npm run debug:build     # Build con información detallada
npm run debug:deps      # Lista dependencias instaladas
npm run debug:outdated  # Verifica paquetes desactualizados
npm run debug:audit     # Auditoría de seguridad
npm run debug:cache     # Verifica el cache de npm
```

### Limpieza y Mantenimiento

```bash
npm run clean           # Limpia dist y .astro
npm run clean:cache     # Limpia cache de Vite y Astro
npm run clean:all       # Limpia todo incluyendo node_modules
npm run reset           # Reset completo + reinstalación
npm run optimize        # Limpia cache y hace build optimizado
```

## 🛡️ Pre-commit Hooks

Los hooks de pre-commit se ejecutan automáticamente antes de cada commit y validan:

- ✅ **ESLint**: Verifica calidad del código en archivos `.astro`, `.ts`, `.js`
- ✅ **Prettier**: Verifica formato en archivos de código y documentación
- ✅ **TypeScript**: Verifica tipos solo si hay archivos TS/Astro modificados
- ✅ **Formato de mensaje**: Valida que sigan el formato convencional

### Formato de Mensajes de Commit

Los mensajes deben seguir el formato:

```
<type>[optional scope]: <description>

Tipos válidos: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
```

**Ejemplos:**

```bash
feat: add new contact form
fix(ui): resolve button alignment issue
docs: update README with installation steps
chore: update dependencies
```

## 📊 Script de Análisis del Proyecto

El script `dev-helper.js` proporciona análisis detallado:

### `npm run dev:analyze`

- Estadísticas de archivos del proyecto
- Estado de Git (branch, commits, cambios pendientes)
- Información del package.json

### `npm run dev:deps`

- Paquetes desactualizados
- Auditoría de seguridad con conteo de vulnerabilidades
- Recomendaciones de actualización

### `npm run dev:size`

- Tamaño total del build
- Lista de archivos más grandes
- Análisis de optimización del bundle

### `npm run dev:health`

- Verificación completa de salud del proyecto
- Tests de TypeScript, ESLint, Prettier y Build
- Reporte de estado con acciones recomendadas

## 🔧 Configuración

### Husky (Pre-commit Hooks)

- **Ubicación**: `.husky/`
- **Configuración**: Automática con `npm install`
- **Reinstalar**: `npm run hooks:install`

### ESLint

- **Configuración**: `eslint.config.js` (Flat Config)
- **Soporte**: TypeScript, Astro, JavaScript
- **Auto-fix**: `npm run lint:fix`

### Prettier

- **Configuración**: `.prettierrc.cjs`
- **Plugin Astro**: Incluido
- **Formato**: `npm run format`

## 🚨 Troubleshooting

### Hooks no funcionan

```bash
npm run hooks:install
```

### Errores de linting

```bash
npm run lint:fix
```

### Errores de TypeScript

```bash
npm run type-check
```

### Build falla

```bash
npm run debug:build
npm run clean:cache
npm run build
```

### Cache corrupto

```bash
npm run clean:all
npm install
```

## 📈 Métricas de Performance

Los scripts están optimizados para:

- **Pre-commit**: < 30 segundos
- **Validación completa**: < 2 minutos
- **Análisis de proyecto**: < 10 segundos
- **Health check**: < 1 minuto

## 🎯 Objetivos de Desarrollo

- ✅ **Zero-config**: Funciona inmediatamente después de `npm install`
- ✅ **Fast feedback**: Validaciones rápidas en desarrollo
- ✅ **Self-documenting**: Scripts explicativos y con help
- ✅ **Cross-platform**: Compatible con Windows, macOS, Linux
- ✅ **CI/CD ready**: Integración perfecta con GitHub Actions
