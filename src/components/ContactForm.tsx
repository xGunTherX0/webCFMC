"use client";

import { useState } from "react";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const FALLBACK_EMAIL = "contactowebcfmcweb@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

function buildMailtoUrl(name: string, email: string, message: string) {
  const params = new URLSearchParams({
    subject: `Mensaje desde la web — ${name}`,
    body: `${message}\n\n—\nNombre: ${name}\nEmail: ${email}`,
  });
  return `mailto:${FALLBACK_EMAIL}?${params.toString()}`;
}

export function ContactForm({ successMessage }: { successMessage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!acceptedPolicy) {
      setError("Debes aceptar la Política de Privacidad para continuar.");
      return;
    }
    setError("");
    setStatus("sending");

    if (!FORMSPREE_ID) {
      window.location.href = buildMailtoUrl(name, email, message);
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          acceptMarketing: acceptMarketing ? "Sí" : "No",
        }),
      });

      if (!res.ok) throw new Error("Formspree respondió con error");
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        `No pudimos enviar tu mensaje. Intenta nuevamente o escríbenos directamente a ${FALLBACK_EMAIL}.`
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-auto h-12 w-12 text-emerald-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="mt-4 text-lg font-semibold text-emerald-800">
          {successMessage ?? "¡Mensaje enviado con éxito!"}
        </p>
        <p className="mt-2 text-sm text-emerald-700">
          Te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="tu@email.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
            placeholder="Cuéntanos sobre tu proyecto..."
          />
        </div>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="acceptedPolicy"
              checked={acceptedPolicy}
              onChange={(e) => {
                setAcceptedPolicy(e.target.checked);
                if (e.target.checked) setError("");
              }}
              className="mt-0.5 h-4 w-4 flex-none rounded border-gray-300 text-emerald-600 focus:ring-emerald-500/20"
            />
            <span className="text-sm text-gray-700">
              He leído y acepto la{" "}
              <button
                type="button"
                onClick={() => setShowPolicy(true)}
                className="font-medium text-emerald-600 underline hover:text-emerald-700"
              >
                Política de Privacidad
              </button>{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="acceptMarketing"
              checked={acceptMarketing}
              onChange={(e) => setAcceptMarketing(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-none rounded border-gray-300 text-emerald-600 focus:ring-emerald-500/20"
            />
            <span className="text-sm text-gray-700">
              Deseo recibir información técnica y comunicaciones de CFMC
              WebCompany (Opcional)
            </span>
          </label>

          {error ? (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {showPolicy ? (
        <PrivacyPolicyModal onClose={() => setShowPolicy(false)} />
      ) : null}
    </>
  );
}
