"use client";

import { useState } from "react";
import { TinaField } from "./TinaField";
import type { SettingsQuery } from "@/tina/__generated__/types";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Header({
  siteName,
  logo,
  settings,
}: {
  siteName: string;
  logo?: string | null;
  settings: SettingsQuery["settings"];
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <TinaField data={settings} field="siteName">
          <a href="#inicio" className="flex items-center gap-2">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo}
                alt={siteName}
                className="h-8 w-auto max-w-[120px] object-contain"
              />
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">
                C
              </span>
            )}
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              {siteName}
            </span>
          </a>
        </TinaField>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Conversemos
          </a>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-gray-700 hover:text-emerald-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
