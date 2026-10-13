# CFMC WebCompany SpA — Sitio web

Sitio corporativo de **CFMC WebCompany SpA** (Talca, Chile): desarrollo de software a medida, sitios web, aplicaciones móviles y consultoría tecnológica.

Landing page de una sola página (Inicio, Servicios, Sobre Nosotros, Contacto) construida con Next.js y administrada con **TinaCMS**, para que el contenido se edite desde `/admin` sin tocar código.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router, React 19) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| CMS | [TinaCMS](https://tina.io) (contenido en JSON versionado en git) |
| Lenguaje | TypeScript (modo estricto) |
| Formulario | [Formspree](https://formspree.io) |

## Requisitos

- Node.js 18.18 o superior
- npm 9 o superior

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). TinaCMS levanta además su datalayer en el puerto `9000`.

> El panel de edición queda en [http://localhost:3000/admin](http://localhost:3000/admin).

## Scripts disponibles

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Desarrollo con TinaCMS + Next.js |
| `npm run build` | Build de producción (incluye la compilación de TinaCMS) |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint sobre el código del proyecto |
| `npm run typecheck` | Chequeo de tipos sin generar archivos |

## Estructura del proyecto

```
├── content/                  # Contenido administrable (TinaCMS)
│   ├── about/index.json      # Sección Sobre Nosotros
│   ├── contact/index.json    # Sección Contacto
│   ├── home/index.json       # Hero / Inicio
│   ├── services/*.json       # Un archivo por servicio
│   └── settings/index.json   # Nombre, logo, SEO, redes sociales
├── public/
│   └── admin/                # Build del panel de TinaCMS (generado)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raíz, fuentes y metadata SEO
│   │   ├── page.tsx          # Única página; consulta TinaCMS en servidor
│   │   └── globals.css       # Tailwind y estilos globales
│   ├── components/
│   │   ├── Header.tsx        # Navegación fija (desktop + móvil)
│   │   ├── Hero.tsx          # Sección de inicio
│   │   ├── Services.tsx      # Grilla de servicios
│   │   ├── About.tsx         # Misión, visión y valores
│   │   ├── Contact.tsx       # Datos de contacto + formulario
│   │   ├── ContactForm.tsx   # Formulario (Formspree)
│   │   ├── Footer.tsx        # Pie de página
│   │   ├── PrivacyPolicyModal.tsx
│   │   ├── TinaField.tsx     # Helper para edición contextual
│   │   └── HomePage.tsx      # Composición de secciones (cliente)
│   └── lib/
│       └── tina.ts           # Consultas y tipos del CMS
└── tina/
    ├── config.ts             # Esquema de colecciones del CMS
    └── __generated__/        # Código generado por TinaCMS
```

## Formulario de contacto

Los mensajes llegan al correo **contactowebcfmcweb@gmail.com** a través de [Formspree](https://formspree.io).

1. Creá una cuenta gratis en Formspree usando ese correo.
2. Creá un formulario nuevo; Formspree te da un ID (aparece en la URL: `https://formspree.io/f/ABC123xyz`).
3. Creá un archivo `.env` en la raíz (usá `.env.example` como plantilla) y definí:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=ABC123xyz
   ```

4. Reiniciá el servidor de desarrollo.

Mientras esa variable no esté definida, el formulario abre el cliente de correo del visitante con destino a `contactowebcfmcweb@gmail.com` (funciona como respaldo, sin configuración).

> Nota: el plan gratuito de Formspree envía copias de cada envío para activar el formulario. La primera vez que llegue un mensaje hay que confirmar el correo.

## Edición de contenido (TinaCMS)

- **En desarrollo**: `npm run dev` y entrá a `/admin`.
- **En producción**: conectá el repositorio a [app.tinacms.org](https://app.tinacms.org). Los valores `NEXT_PUBLIC_TINA_CLIENT_ID` y `TINA_TOKEN` los genera TinaCMS al vincular el proyecto; van en las variables de entorno del hosting (ver `.env.example`).

El contenido vive en `content/` como JSON: cada cambio editado desde el CMS queda como commit en git, así que el texto del sitio está versionado junto al código.

## Campos reservados en el CMS

Estos campos existen en el esquema (`tina/config.ts`) pero hoy no se renderizan en la página. Están pensados para usarlos más adelante sin tocar el código:

- `home.heroImage` — imagen/banner del hero.
- `about.image` — imagen de la sección Sobre Nosotros.

## Deploy

Compatible con Vercel, Netlify o cualquier hosting que ejecute Next.js.

- **Build**: `npm run build`
- **Start**: `npm start`
- Variables de entorno requeridas en producción: las de `.env.example`.
- Definí la rama principal como `main` (TinaCMS la toma por defecto vía `TINA_BRANCH`).

## Licencia

Todos los derechos reservados — © CFMC WebCompany SpA.
