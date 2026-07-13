# MUV Vital — Web

Sitio web de **MUV Vital**, club privado de salud y rendimiento en Roquetas de Mar.

Hecho con **React 19 + TypeScript + Vite + Tailwind CSS**. Se compila a
HTML/CSS/JS estáticos, listos para subir a cualquier alojamiento (Hostinger,
etc.).

## 🚀 Publicar en Hostinger

La web ya está compilada en la carpeta **`dist/`**. Solo tienes que subir su
contenido a `public_html` en Hostinger.

👉 **Guía paso a paso:** [`DESPLIEGUE-HOSTINGER.md`](./DESPLIEGUE-HOSTINGER.md)

> Usa **HashRouter** (rutas con `#`), por lo que funciona en hosting estático
> sin configuración especial del servidor.

## 🛠️ Desarrollo local

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo → http://localhost:3000
npm run build   # compilar a dist/
npm run preview # previsualizar el build → http://localhost:4173
```

## 📁 Estructura

```
index.html            Punto de entrada
src/
  main.tsx            Arranque de React (HashRouter)
  App.tsx             Rutas y layout
  sections/           Secciones de la home (Hero, Método, Pilares…)
  pages/              Páginas legales (aviso legal, privacidad, cookies)
  components/         UI, layout y canvas (three.js)
  constants/          Todo el contenido/textos del sitio
public/
  .htaccess           Config Apache para Hostinger (GZIP, caché, HTTPS)
  favicon.svg
dist/                 Web compilada lista para subir (generada por build)
```

## ✍️ Antes de publicar

Rellena los marcadores `«PENDIENTE:...»` en `src/constants/index.ts`
(teléfono, email, dirección, horario…) y los datos legales en
`src/pages/`. Luego ejecuta `npm run build` y vuelve a subir `dist/`.
El formulario de contacto es todavía una maqueta; consulta la guía de
despliegue para conectarlo a un servicio de envío real.
