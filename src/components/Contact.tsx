"use client";

import { TinaField } from "./TinaField";
import { ContactForm } from "./ContactForm";
import type { ContactQuery } from "@/tina/__generated__/types";

const infoIcons: Record<string, React.ReactNode> = {
  address: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  ),
  phone: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  ),
  email: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  ),
  schedule: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  ),
};

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string | null;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden>
          {infoIcons[icon]}
        </svg>
      </span>
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="mt-0.5 text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export function ContactSection({ contact }: { contact: ContactQuery["contact"] }) {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Contacto
            </span>
            <TinaField data={contact} field="heading" className="mt-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {contact.heading}
              </h2>
            </TinaField>
            {contact.intro ? (
              <TinaField data={contact} field="intro" className="mt-5">
                <p className="leading-relaxed text-gray-600">{contact.intro}</p>
              </TinaField>
            ) : null}

            <div className="mt-10 space-y-6">
              {contact.address ? (
                <TinaField data={contact} field="address">
                  <InfoItem
                    icon="address"
                    label="Dirección"
                    value={`${contact.address}${contact.city ? ` — ${contact.city}` : ""}`}
                  />
                </TinaField>
              ) : null}
              {contact.phone ? (
                <TinaField data={contact} field="phone">
                  <InfoItem icon="phone" label="Teléfono" value={contact.phone} />
                </TinaField>
              ) : null}
              {contact.email ? (
                <TinaField data={contact} field="email">
                  <InfoItem icon="email" label="Correo" value={contact.email} />
                </TinaField>
              ) : null}
              {contact.schedule ? (
                <TinaField data={contact} field="schedule">
                  <InfoItem icon="schedule" label="Horario" value={contact.schedule} />
                </TinaField>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <ContactForm successMessage={contact.formSuccessMessage ?? undefined} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
