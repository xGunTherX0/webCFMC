"use client";

import { TinaField } from "./TinaField";
import type { ServiceNode } from "@/lib/tina";

const icons: Record<string, React.ReactNode> = {
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    />
  ),
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m-9 9h18"
    />
  ),
  mobile: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  ),
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  ),
  bolt: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  ),
  cloud: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
    />
  ),
  cog: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
    />
  ),
};

function ServiceIcon({ name }: { name?: string | null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
      aria-hidden
    >
      {icons[name ?? "code"] ?? icons.code}
    </svg>
  );
}

export function ServicesSection({ services }: { services: ServiceNode[] }) {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Qué ofrecemos?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones tecnológicas integrales para llevar tu empresa al
            siguiente nivel.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            if (!service) return null;
            return (
              <TinaField
                key={service.id}
                data={service}
                className="h-full"
              >
                <article
                  className={`group relative flex h-full flex-col rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    service.featured
                      ? "border-emerald-200 bg-gradient-to-b from-emerald-50 to-white shadow-lg shadow-emerald-600/5"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {service.featured ? (
                    <span className="absolute right-5 top-5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                      Destacado
                    </span>
                  ) : null}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  {service.description ? (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  ) : null}
                  {service.features && service.features.length > 0 ? (
                    <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5">
                      {service.features.map((feature, i) =>
                        feature ? (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mt-0.5 h-4 w-4 flex-none text-emerald-500"
                              aria-hidden
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ) : null
                      )}
                    </ul>
                  ) : null}
                </article>
              </TinaField>
            );
          })}
        </div>
      </div>
    </section>
  );
}
