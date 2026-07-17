"use client";

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { track } from "@/lib/meta-pixel";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function GraciasPage() {
  const whatsappUrl = "https://chat.whatsapp.com/EPMecVkKKKH5Ac5INEBIkj";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("registro") !== "clase-gratis") return;

    const eventId = sessionStorage.getItem("pending_class_registration_id");
    if (!eventId) return;

    const sentKey = `meta_complete_registration_sent_${eventId}`;
    if (sessionStorage.getItem(sentKey)) return;

    let attempts = 0;
    const sendConversion = () => {
      attempts += 1;
      const sent = track(
        "CompleteRegistration",
        {
          content_name: "Clase Gratis - Monetiza tu Conocimiento",
          content_category: "Clase gratuita",
          content_type: "event",
          status: "completed",
          value: 0,
          currency: "MXN",
        },
        { eventID: eventId },
      );

      if (sent) {
        sessionStorage.setItem(sentKey, "true");
        sessionStorage.removeItem("pending_class_registration_id");
      }
      return sent;
    };

    if (sendConversion()) return;

    const interval = window.setInterval(() => {
      if (sendConversion() || attempts >= 20) window.clearInterval(interval);
    }, 250);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="page-container relative flex min-h-screen items-center py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-400/30 sm:h-20 sm:w-20">
              <CheckCircle2 className="h-8 w-8 text-green-400 sm:h-10 sm:w-10" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-[11px] font-bold uppercase text-white sm:text-sm">
              <ShieldCheck className="h-4 w-4" />
              Registro recibido correctamente
            </div>

            <div className="mx-auto mb-7 max-w-xl">
              <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold">
                <span className="text-white/70">Tu registro está al 80%</span>
                <span className="text-amber-400">80%</span>
              </div>
              <div
                className="h-2.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-label="Progreso del registro"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="80"
              >
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-red-600 to-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.35)]" />
              </div>
              <p className="mt-2 text-left text-xs text-white/45">
                Entra al grupo de WhatsApp para completar el último paso.
              </p>
            </div>

            <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
              Tu lugar está casi listo
            </h1>

            <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
              Entra ahora al grupo de WhatsApp para recibir el enlace de acceso,
              materiales y recordatorios de la clase.
            </p>

            <div className="mx-auto mb-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex min-h-[80px] items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <CalendarDays className="h-5 w-5 text-amber-400" />
                <div className="text-left">
                  <p className="text-xs uppercase text-white/50">Día</p>
                  <p className="font-bold">Jueves</p>
                </div>
              </div>
              <div className="flex min-h-[80px] items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <CalendarDays className="h-5 w-5 text-red-400" />
                <div className="text-left">
                  <p className="text-xs uppercase text-white/50">Fecha</p>
                  <p className="font-bold">30 de julio de 2026</p>
                </div>
              </div>
              <div className="flex min-h-[80px] items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                <Clock className="h-5 w-5 text-sky-400" />
                <div className="text-left">
                  <p className="text-xs uppercase text-white/50">Hora</p>
                  <p className="font-bold">11:00 a. m. CDMX</p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <MessageCircle className="mx-auto mb-3 h-8 w-8 text-green-400" />
              <p className="mb-5 text-sm font-semibold text-white sm:text-base">
                Este último paso es necesario para recibir todos los avisos.
              </p>
              <CTAButton
                href={whatsappUrl}
                variant="primary"
                size="lg"
                showArrow
                fullWidth
              >
                Entrar al grupo de WhatsApp ahora
              </CTAButton>

              <p className="mt-3 text-xs text-white/45 sm:text-sm">
                Acceso gratuito. Ábrelo desde tu teléfono para continuar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
