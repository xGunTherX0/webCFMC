"use client";

import { TinaField } from "./TinaField";
import type { SettingsQuery } from "@/tina/__generated__/types";

export function Footer({ settings }: { settings: SettingsQuery["settings"] }) {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <TinaField data={settings} field="footerText">
          <p className="text-sm text-gray-500">
            {settings.footerText ??
              `© ${new Date().getFullYear()} ${settings.siteName}`}
          </p>
        </TinaField>

        {settings.social && settings.social.length > 0 ? (
          <ul className="flex items-center gap-5">
            {settings.social.map((item, i) =>
              item?.url ? (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 transition-colors hover:text-emerald-600"
                  >
                    {item.label}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        ) : null}
      </div>
    </footer>
  );
}
