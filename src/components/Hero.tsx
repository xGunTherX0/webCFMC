"use client";

import { TinaField } from "./TinaField";
import type { HomeQuery } from "@/tina/__generated__/types";

export function Hero({ home }: { home: HomeQuery["home"] }) {
  const title = home.title ?? "";
  const highlight = home.highlight?.trim();

  let titleNode: React.ReactNode = title;
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight);
    titleNode = (
      <>
        {before}
        <span className="text-emerald-600">{highlight}</span>
        {after}
      </>
    );
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {home.badge ? (
            <TinaField data={home} field="badge">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {home.badge}
              </span>
            </TinaField>
          ) : null}

          <TinaField data={home} field="title" className="mt-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {titleNode}
            </h1>
          </TinaField>

          {home.description ? (
            <TinaField data={home} field="description" className="mt-6">
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                {home.description}
              </p>
            </TinaField>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {home.ctaPrimary?.label ? (
              <TinaField data={home} field="ctaPrimary">
                <a
                  href={home.ctaPrimary.href ?? "#contacto"}
                  className="rounded-lg bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-700/25"
                >
                  {home.ctaPrimary.label}
                </a>
              </TinaField>
            ) : null}
            {home.ctaSecondary?.label ? (
              <TinaField data={home} field="ctaSecondary">
                <a
                  href={home.ctaSecondary.href ?? "#servicios"}
                  className="rounded-lg border border-gray-300 px-7 py-3.5 text-base font-semibold text-gray-700 transition-colors hover:border-emerald-500 hover:text-emerald-600"
                >
                  {home.ctaSecondary.label}
                </a>
              </TinaField>
            ) : null}
          </div>

          {home.stats && home.stats.length > 0 ? (
            <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {home.stats.map((stat, i) =>
                stat ? (
                  <TinaField key={i} data={home} field="stats">
                    <div className="rounded-xl border border-gray-200 bg-white p-6">
                      <dt className="text-sm text-gray-500">{stat.label}</dt>
                      <dd className="mt-1 text-3xl font-bold text-emerald-600">
                        {stat.value}
                      </dd>
                    </div>
                  </TinaField>
                ) : null
              )}
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
