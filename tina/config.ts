import { defineConfig } from "tinacms";

const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "settings",
        label: "Configuración general",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nombre de la empresa",
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Eslogan",
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "metaTitle",
            label: "Título SEO",
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Descripción SEO",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "footerText",
            label: "Texto del pie de página",
          },
          {
            type: "object",
            name: "social",
            label: "Redes sociales",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Red social" }),
            },
            fields: [
              { type: "string", name: "label", label: "Nombre" },
              { type: "string", name: "url", label: "URL" },
            ],
          },
        ],
      },
      {
        name: "home",
        label: "Inicio (Hero)",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "badge",
            label: "Insignia superior",
          },
          {
            type: "string",
            name: "title",
            label: "Título principal",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "highlight",
            label: "Palabra destacada",
            description: "Texto del título que aparecerá en color cian.",
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Botón principal",
            fields: [
              { type: "string", name: "label", label: "Texto" },
              { type: "string", name: "href", label: "Enlace" },
            ],
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Botón secundario",
            fields: [
              { type: "string", name: "label", label: "Texto" },
              { type: "string", name: "href", label: "Enlace" },
            ],
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen / banner del hero",
          },
          {
            type: "object",
            name: "stats",
            label: "Estadísticas",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Estadística" }),
            },
            fields: [
              { type: "string", name: "value", label: "Valor" },
              { type: "string", name: "label", label: "Etiqueta" },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "Servicios",
        path: "content/services",
        format: "json",
        defaultItem: () => ({
          title: "Nuevo servicio",
          icon: "code",
          featured: false,
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icono",
            options: [
              { label: "Código", value: "code" },
              { label: "Globo / Web", value: "globe" },
              { label: "Móvil", value: "mobile" },
              { label: "Gráfico", value: "chart" },
              { label: "Escudo / Seguridad", value: "shield" },
              { label: "Rayo / Rendimiento", value: "bolt" },
              { label: "Nube", value: "cloud" },
              { label: "Engranaje / Consultoría", value: "cog" },
            ],
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "features",
            label: "Características",
            list: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Destacado",
          },
          {
            type: "number",
            name: "order",
            label: "Orden",
          },
        ],
      },
      {
        name: "about",
        label: "Sobre Nosotros",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Título de la sección",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Introducción",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "mission",
            label: "Misión",
            fields: [
              { type: "string", name: "title", label: "Título" },
              {
                type: "string",
                name: "text",
                label: "Texto",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "vision",
            label: "Visión",
            fields: [
              { type: "string", name: "title", label: "Título" },
              {
                type: "string",
                name: "text",
                label: "Texto",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "values",
            label: "Valores",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Valor" }),
            },
            fields: [
              { type: "string", name: "title", label: "Título" },
              {
                type: "string",
                name: "text",
                label: "Descripción",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Imagen de la sección",
          },
        ],
      },
      {
        name: "contact",
        label: "Contacto",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Título de la sección",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Texto introductorio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "address",
            label: "Dirección",
          },
          {
            type: "string",
            name: "city",
            label: "Ciudad / Región",
          },
          {
            type: "string",
            name: "phone",
            label: "Teléfono",
          },
          {
            type: "string",
            name: "email",
            label: "Correo electrónico",
          },
          {
            type: "string",
            name: "schedule",
            label: "Horario de atención",
          },
          {
            type: "string",
            name: "formSuccessMessage",
            label: "Mensaje de éxito del formulario",
          },
        ],
      },
    ],
  },
});
