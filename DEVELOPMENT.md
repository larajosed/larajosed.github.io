# Development Guide / Guía de Desarrollo

This document explains how to work with this portfolio project and how to see your changes both locally and on the live site.

Este documento explica cómo trabajar con este proyecto de portafolio y cómo ver tus cambios tanto localmente como en el sitio en vivo.

---

## English Version

### Understanding the Project Structure

This is a Vue.js 3 portfolio built with Vite. Here's how it works:

- **`src/`** - Source code (your Vue components, styles, etc.)
- **`dist/`** - Production build output (auto-generated, not in git)
- **`docs/`** - Deployment folder for GitHub Pages (must be committed to git)
- **`public/`** - Static assets (images, fonts, etc.)

### Development Workflow

#### 1. **Local Development** (Seeing Changes While You Work)

When you want to develop and see changes instantly:

```bash
# Install dependencies (only needed once or when package.json changes)
npm install

# Start the development server
npm run dev
```

This will:
- Start a local server at `http://localhost:5173`
- Watch for file changes
- Automatically reload the browser when you save changes
- Serve files directly from the `src/` folder

**Your changes will appear immediately!** No build step needed.

#### 2. **Production Build** (Deploying to GitHub Pages)

When you're ready to deploy your changes to the live site:

```bash
# Build the production version
npm run build

# Copy the build to the docs folder
npm run cpdir

# Or use the combined command
npm run build-and-deploy
```

This will:
- Create optimized, minified files in the `dist/` folder
- Copy everything from `dist/` to `docs/`
- The `docs/` folder is what GitHub Pages serves

**Important:** You must commit and push the changes to the `docs/` folder:

```bash
git add docs/
git commit -m "Update production build"
git push
```

After pushing, wait a few minutes for GitHub Pages to update.

#### 3. **Preview Production Build Locally**

To test the production build before deploying:

```bash
npm run preview
```

This serves the `dist/` folder at `http://localhost:4173`

### Common Questions

**Q: I made changes but don't see them on the live site**
- A: You need to run `npm run build-and-deploy` and then commit and push the `docs/` folder.

**Q: My changes appear in dev mode but not in production**
- A: The development server (`npm run dev`) serves from `src/`, while GitHub Pages serves from `docs/`. You need to rebuild and redeploy.

**Q: Where do I see my changes locally?**
- A: Run `npm run dev` and open `http://localhost:5173`. Changes appear instantly without rebuilding.

---

## Versión en Español

### Entendiendo la Estructura del Proyecto

Este es un portafolio de Vue.js 3 construido con Vite. Así es como funciona:

- **`src/`** - Código fuente (tus componentes Vue, estilos, etc.)
- **`dist/`** - Salida de construcción de producción (auto-generado, no está en git)
- **`docs/`** - Carpeta de despliegue para GitHub Pages (debe ser commiteada en git)
- **`public/`** - Recursos estáticos (imágenes, fuentes, etc.)

### Flujo de Trabajo de Desarrollo

#### 1. **Desarrollo Local** (Ver Cambios Mientras Trabajas)

Cuando quieras desarrollar y ver cambios instantáneamente:

```bash
# Instalar dependencias (solo necesario una vez o cuando package.json cambia)
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

Esto:
- Inicia un servidor local en `http://localhost:5173`
- Observa los cambios en los archivos
- Recarga automáticamente el navegador cuando guardas cambios
- Sirve archivos directamente de la carpeta `src/`

**¡Tus cambios aparecerán inmediatamente!** No se necesita paso de construcción.

#### 2. **Construcción de Producción** (Desplegar a GitHub Pages)

Cuando estés listo para desplegar tus cambios al sitio en vivo:

```bash
# Construir la versión de producción
npm run build

# Copiar la construcción a la carpeta docs
npm run cpdir

# O usar el comando combinado
npm run build-and-deploy
```

Esto:
- Crea archivos optimizados y minificados en la carpeta `dist/`
- Copia todo de `dist/` a `docs/`
- La carpeta `docs/` es lo que GitHub Pages sirve

**Importante:** Debes hacer commit y push de los cambios a la carpeta `docs/`:

```bash
git add docs/
git commit -m "Actualizar construcción de producción"
git push
```

Después del push, espera unos minutos para que GitHub Pages se actualice.

#### 3. **Vista Previa de la Construcción de Producción Localmente**

Para probar la construcción de producción antes de desplegar:

```bash
npm run preview
```

Esto sirve la carpeta `dist/` en `http://localhost:4173`

### Preguntas Comunes

**P: Hice cambios pero no los veo en el sitio en vivo**
- R: Necesitas ejecutar `npm run build-and-deploy` y luego hacer commit y push de la carpeta `docs/`.

**P: Mis cambios aparecen en modo desarrollo pero no en producción**
- R: El servidor de desarrollo (`npm run dev`) sirve desde `src/`, mientras que GitHub Pages sirve desde `docs/`. Necesitas reconstruir y redesplegar.

**P: ¿Dónde veo mis cambios localmente?**
- R: Ejecuta `npm run dev` y abre `http://localhost:5173`. Los cambios aparecen instantáneamente sin reconstruir.

---

## Quick Reference / Referencia Rápida

| Command / Comando | Purpose / Propósito |
|-------------------|---------------------|
| `npm install` | Install dependencies / Instalar dependencias |
| `npm run dev` | Start dev server (hot reload) / Iniciar servidor de desarrollo (recarga en caliente) |
| `npm run build` | Build for production / Construir para producción |
| `npm run cpdir` | Copy dist/ to docs/ / Copiar dist/ a docs/ |
| `npm run build-and-deploy` | Build + copy (combined) / Construir + copiar (combinado) |
| `npm run preview` | Preview production build / Vista previa de construcción de producción |
| `npm run lint` | Check code quality / Revisar calidad del código |
