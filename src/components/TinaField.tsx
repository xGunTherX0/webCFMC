"use client";

import { tinaField } from "tinacms/dist/react";
import type { ReactNode } from "react";

/**
 * Envuelve un bloque de contenido con el atributo `data-tina-field`
 * para habilitar la edición visual contextual de TinaCMS.
 */
export function TinaField<T extends Record<string, unknown>>({
  data,
  field,
  children,
  className,
}: {
  data: T;
  field?: keyof Omit<NonNullable<T>, "__typename" | "_sys">;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-tina-field={tinaField(data, field)} className={className}>
      {children}
    </div>
  );
}
