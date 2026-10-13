"use client";

import { useEffect } from "react";

export function PrivacyPolicyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-gray-900">
            Política de Privacidad
          </h2>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6 px-6 py-6 text-sm leading-relaxed text-gray-700">
          <p>
            CFMC WebCompany SpA reconoce la importancia de proteger la
            privacidad de la información que podamos obtener de nuestros
            visitantes &ldquo;on-line&rdquo;. Por esta razón, nos comprometemos
            a respetar la privacidad de los usuarios y garantizar el tratamiento
            lícito de sus datos personales, todo esto en conformidad con la Ley
            N° 21.719 sobre Protección de Datos Personales. A continuación
            explicamos de qué forma manejamos la información que obtenemos sobre
            usted en su visita a nuestra página web.
          </p>

          <div>
            <h3 className="font-semibold text-gray-900">1. Datos Colectivos</h3>
            <p className="mt-2">
              Algunas páginas web de CFMC WebCompany almacenan ciertas partes de
              información denominadas &ldquo;cookies&rdquo; en el PC del
              visitante. Estas &ldquo;cookies&rdquo; se remiten solamente a la
              página web que las almacenó cuando el usuario vuelve a acceder a
              esa página web. Las &ldquo;cookies&rdquo; pueden decirnos cómo y
              cuándo son visitadas las páginas web y por cuánta gente. Esta
              tecnología no almacena información personal identificable; la
              información se obtiene de forma agregada, no identificable. Con la
              información que obtenemos mediante esta tecnología, esperamos
              mejorar nuestras páginas web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              2. Información Personal Identificable
            </h3>
            <p className="mt-2">
              CFMC WebCompany almacena información personal identificable, como
              nombre, organización, dirección de correo electrónico y similar,
              solo con el consentimiento libre, específico e informado del
              visitante a la página web. Los datos recopilados mediante
              nuestros formularios de contacto se tratarán exclusivamente para
              responder a sus consultas y requerimientos, salvo que el usuario
              haya consentido de forma expresa y voluntaria la recepción de
              comunicaciones técnicas o novedades institucionales.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              3. Enlaces con otras Páginas Web
            </h3>
            <p className="mt-2">
              Como servicio de valor añadido a nuestros visitantes, CFMC
              WebCompany ofrece enlaces con otras páginas web. Intentamos
              seleccionar cuidadosamente las páginas web que creemos son útiles
              y cumplen nuestros altos estándares. Sin embargo, debido a que las
              páginas web cambian muy rápidamente, no podemos garantizar estos
              estándares en todos los enlaces a páginas web que proporcionamos,
              ni aceptar responsabilidad alguna del contenido de las páginas web
              externas a CFMC WebCompany.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">4. Cambios</h3>
            <p className="mt-2">
              Cualquier cambio en esta política de privacidad será comunicado
              oportunamente en esta misma página web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              5. Derechos de los Usuarios
            </h3>
            <ul className="mt-2 space-y-3">
              <li>
                <strong>Acceso:</strong> Solicitar información sobre los datos
                relativos a su persona, su procedencia y destinatario, el
                propósito del tratamiento y la individualización de las personas
                u organismos a los cuales sus datos son transmitidos
                regularmente.
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la modificación o
                rectificación de sus datos personales cuando ellos sean
                erróneos, inexactos, equívocos o incompletos.
              </li>
              <li>
                <strong>Supresión:</strong> Solicitar la eliminación o
                cancelación de sus datos personales cuando su almacenamiento
                carezca de fundamento legal o se encuentren caducos, salvo que
                concurra alguna excepción legal.
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse a que sus datos personales
                sean utilizados para fines de publicidad, investigación de
                mercado o comunicaciones institucionales.
              </li>
              <li>
                <strong>Plazo de atención:</strong> Las solicitudes de
                ejercicio de derechos serán gestionadas y respondidas en un
                plazo máximo de 15 días hábiles a través de nuestros canales
                oficiales de contacto.
              </li>
            </ul>
          </div>
        </div>

        <div className="sticky bottom-0 border-t border-gray-200 bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
