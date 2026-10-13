"use client";

import { TinaField } from "./TinaField";
import type { AboutQuery } from "@/tina/__generated__/types";

export function AboutSection({ about }: { about: AboutQuery["about"] }) {
  return (
    <section
      id="sobre-nosotros"
      className="border-y border-gray-100 bg-gray-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Quiénes somos
            </span>
            <TinaField data={about} field="heading" className="mt-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {about.heading}
              </h2>
            </TinaField>
            {about.intro ? (
              <TinaField data={about} field="intro" className="mt-6">
                <p className="text-lg leading-relaxed text-gray-600">
                  {about.intro}
                </p>
              </TinaField>
            ) : null}

            <div className="mt-10 space-y-6">
              {about.mission ? (
                <TinaField data={about} field="mission">
                  <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-emerald-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                      </span>
                      {about.mission.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {about.mission.text}
                    </p>
                  </div>
                </TinaField>
              ) : null}
              {about.vision ? (
                <TinaField data={about} field="vision">
                  <div className="rounded-xl border border-gray-200 bg-white p-6">
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-emerald-700">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </span>
                      {about.vision.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {about.vision.text}
                    </p>
                  </div>
                </TinaField>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Nuestros valores
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.values?.map((value, i) =>
                value ? (
                  <TinaField key={i} data={about} field="values">
                    <div className="h-full rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-emerald-200">
                      <h4 className="font-semibold text-emerald-600">
                        {value.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {value.text}
                      </p>
                    </div>
                  </TinaField>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
