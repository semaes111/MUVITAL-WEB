# 🚀 Cómo subir MUV Vital a Hostinger (paso a paso)

Esta web está hecha con **React + Vite**. Hostinger (alojamiento web compartido)
sirve archivos **HTML/CSS/JS estáticos**, así que solo hay que subir la carpeta
**`dist/`** ya compilada. No necesitas Node ni instalar nada en el servidor.

> La web usa **HashRouter** (rutas con `#`, p. ej. `tudominio.com/#/legal/aviso-legal`),
> por lo que funciona en cualquier hosting estático **sin configuración de servidor**.

---

## Opción A — Subir la carpeta ya compilada (la más rápida)

La carpeta **`dist/`** de este repositorio ya contiene la web lista para producción.

1. Entra en **hPanel de Hostinger** → **Sitios web** → tu dominio → **Administrar**.
2. Abre el **Administrador de archivos** (File Manager).
3. Entra en la carpeta **`public_html`**.
   - Si hay archivos de ejemplo (`default.php`, `index.html` por defecto), bórralos.
4. Sube **TODO el contenido de `dist/`** (no la carpeta `dist` en sí, sino lo que hay
   dentro: `index.html`, la carpeta `assets/`, `.htaccess`, etc.).
   - Puedes arrastrar los archivos, o subir un `.zip` y luego **Extraer** dentro de `public_html`.
5. Visita tu dominio en el navegador. ¡Listo! ✅

### Vía FTP (alternativa a File Manager)
- Host/usuario/contraseña FTP: hPanel → **Archivos** → **Cuentas FTP**.
- Con FileZilla, conecta y copia el **contenido de `dist/`** dentro de `public_html`.

---

## Opción B — Compilar tú mismo antes de subir

Si cambias el contenido del sitio y quieres regenerar la carpeta `dist/`:

```bash
npm install      # solo la primera vez
npm run build    # genera la carpeta dist/ actualizada
```

Después sube el contenido de `dist/` como en la Opción A.

Para previsualizar en local antes de subir:

```bash
npm run preview  # abre http://localhost:4173
```

---

## ✅ Checklist antes de publicar

Revisa el archivo `src/constants/index.ts`: hay marcadores `«PENDIENTE:...»`
que debes rellenar con los datos reales del club **antes** de compilar:

- [ ] Teléfono y WhatsApp
- [ ] Email de contacto
- [ ] Dirección del club
- [ ] Horario
- [ ] Datos legales (razón social, NIF) en `src/pages/AvisoLegal.tsx`

### ⚠️ Formulario de contacto
El formulario de la sección **Acceso** ahora mismo es una **maqueta** (simula el
envío, no manda ningún email). Para que funcione en Hostinger tienes dos opciones:

1. **Formspree / Web3Forms** (gratis, sin backend): crea un formulario, copia tu
   endpoint y conéctalo en `src/sections/Acceso.tsx` (`handleSubmit`).
2. **Email PHP de Hostinger**: crear un `contacto.php` en `public_html` y apuntar
   el formulario a ese archivo.

Si necesitas que lo deje conectado, indícame qué servicio prefieres.

---

## 🔒 HTTPS y dominio
- En hPanel activa el **certificado SSL gratuito** (normalmente automático).
- Fuerza HTTPS en hPanel → **Avanzado** → **Forzar HTTPS**.

---

## 📁 Qué contiene `dist/`
- `index.html` — punto de entrada de la web.
- `assets/` — JS y CSS compilados y optimizados (con hash para caché).
- `.htaccess` — compresión GZIP y caché para servidores Apache de Hostinger.
