"use client";

import Link from "next/link";
import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { track } from "@/lib/meta-pixel";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function GraciasPage() {
  const whatsappUrl = "https://chat.whatsapp.com/BaOgaoB8evPDvTdJvOkkFS";

  useEffect(() => {
    track("Lead", {
      content_name: "Sistema Cobos | Registro (Lead)",
      content_category: "Registro",
    });

    track("CompleteRegistration", {
      content_name: "Sistema Cobos | Registro (CompleteRegistration)",
      content_category: "Registro",
    });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 text-white">
        <div className="page-container relative py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 sm:h-20 sm:w-20">
              <CheckCircle2 className="h-8 w-8 text-green-400 sm:h-10 sm:w-10" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
              <ShieldCheck className="h-4 w-4" />
              Registro recibido correctamente
            </div>

            <h1 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Estás a nada de entrar.
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-lg font-semibold text-green-400 sm:text-xl lg:text-2xl">
              Ya completaste el 90% de tu registro.
            </p>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Solo te falta un paso importante para recibir recordatorios,
              materiales y el enlace clave de acceso:
              <span className="font-semibold text-white">
                {" "}
                entrar al grupo de WhatsApp.
              </span>
            </p>

            <div className="mx-auto mb-6 max-w-2xl rounded-2xl border border-cefin-red/30 bg-white/5 p-4 sm:rounded-3xl sm:p-5">
              <p className="text-sm font-semibold text-white sm:text-base">
                ⚠️ Si no entras al grupo, podrías perder avisos importantes
                antes de la clase.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <CTAButton
                href={whatsappUrl}
                variant="primary"
                size="lg"
                showArrow
              >
                Entrar al grupo de WhatsApp ahora
              </CTAButton>

              <p className="text-xs text-neutral-400 sm:text-sm">
                Último paso para completar tu acceso
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-cefin-dark p-6 text-center shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Completa tu acceso ahora
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:text-lg">
              Da clic aquí y entra al grupo de WhatsApp para recibir todo lo
              necesario antes de la clase.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                href={whatsappUrl}
                variant="primary"
                size="lg"
                showArrow
              >
                Sí, quiero entrar al grupo
              </CTAButton>

              <CTAButton href="/" variant="outlineLight" size="lg">
                Volver al inicio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-3 text-xl font-bold text-neutral-900 sm:text-2xl">
              ¿No recibiste el correo?
            </h3>

            <p className="mb-6 text-sm text-neutral-600 sm:text-base lg:text-lg">
              Revisa spam, promociones o correo no deseado. Pero recuerda: la
              vía más importante para no perderte nada es entrar al grupo de
              WhatsApp.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cefin-red transition-colors hover:text-cefin-red-dark sm:text-base"
            >
              Ir al sitio principal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
