// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Configuraci\xF3n general",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nombre de la empresa",
            required: true
          },
          {
            type: "string",
            name: "tagline",
            label: "Eslogan"
          },
          {
            type: "image",
            name: "logo",
            label: "Logo"
          },
          {
            type: "string",
            name: "metaTitle",
            label: "T\xEDtulo SEO"
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Descripci\xF3n SEO",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "footerText",
            label: "Texto del pie de p\xE1gina"
          },
          {
            type: "object",
            name: "social",
            label: "Redes sociales",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Red social" })
            },
            fields: [
              { type: "string", name: "label", label: "Nombre" },
              { type: "string", name: "url", label: "URL" }
            ]
          }
        ]
      },
      {
        name: "home",
        label: "Inicio (Hero)",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "badge",
            label: "Insignia superior"
          },
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo principal",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "highlight",
            label: "Palabra destacada",
            description: "Texto del t\xEDtulo que aparecer\xE1 en color cian."
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "ctaPrimary",
            label: "Bot\xF3n principal",
            fields: [
              { type: "string", name: "label", label: "Texto" },
              { type: "string", name: "href", label: "Enlace" }
            ]
          },
          {
            type: "object",
            name: "ctaSecondary",
            label: "Bot\xF3n secundario",
            fields: [
              { type: "string", name: "label", label: "Texto" },
              { type: "string", name: "href", label: "Enlace" }
            ]
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen / banner del hero"
          },
          {
            type: "object",
            name: "stats",
            label: "Estad\xEDsticas",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.label || "Estad\xEDstica" })
            },
            fields: [
              { type: "string", name: "value", label: "Valor" },
              { type: "string", name: "label", label: "Etiqueta" }
            ]
          }
        ]
      },
      {
        name: "services",
        label: "Servicios",
        path: "content/services",
        format: "json",
        defaultItem: () => ({
          title: "Nuevo servicio",
          icon: "code",
          featured: false
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo",
            required: true,
            isTitle: true
          },
          {
            type: "string",
            name: "icon",
            label: "Icono",
            options: [
              { label: "C\xF3digo", value: "code" },
              { label: "Globo / Web", value: "globe" },
              { label: "M\xF3vil", value: "mobile" },
              { label: "Gr\xE1fico", value: "chart" },
              { label: "Escudo / Seguridad", value: "shield" },
              { label: "Rayo / Rendimiento", value: "bolt" },
              { label: "Nube", value: "cloud" },
              { label: "Engranaje / Consultor\xEDa", value: "cog" }
            ]
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "features",
            label: "Caracter\xEDsticas",
            list: true
          },
          {
            type: "boolean",
            name: "featured",
            label: "Destacado"
          },
          {
            type: "number",
            name: "order",
            label: "Orden"
          }
        ]
      },
      {
        name: "about",
        label: "Sobre Nosotros",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "T\xEDtulo de la secci\xF3n",
            required: true
          },
          {
            type: "string",
            name: "intro",
            label: "Introducci\xF3n",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "mission",
            label: "Misi\xF3n",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              {
                type: "string",
                name: "text",
                label: "Texto",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "vision",
            label: "Visi\xF3n",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              {
                type: "string",
                name: "text",
                label: "Texto",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "values",
            label: "Valores",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Valor" })
            },
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              {
                type: "string",
                name: "text",
                label: "Descripci\xF3n",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "image",
            name: "image",
            label: "Imagen de la secci\xF3n"
          }
        ]
      },
      {
        name: "contact",
        label: "Contacto",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "heading",
            label: "T\xEDtulo de la secci\xF3n",
            required: true
          },
          {
            type: "string",
            name: "intro",
            label: "Texto introductorio",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "address",
            label: "Direcci\xF3n"
          },
          {
            type: "string",
            name: "city",
            label: "Ciudad / Regi\xF3n"
          },
          {
            type: "string",
            name: "phone",
            label: "Tel\xE9fono"
          },
          {
            type: "string",
            name: "email",
            label: "Correo electr\xF3nico"
          },
          {
            type: "string",
            name: "schedule",
            label: "Horario de atenci\xF3n"
          },
          {
            type: "string",
            name: "formSuccessMessage",
            label: "Mensaje de \xE9xito del formulario"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
