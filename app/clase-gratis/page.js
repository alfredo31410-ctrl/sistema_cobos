"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import ActiveCampaignForm from "@/components/ActiveCampaignForm";
import RegisterModal from "@/components/RegisterModal";
import { track, trackCustom } from "@/lib/meta-pixel";
import {
  Check,
  X,
  Clock,
  Users,
  Video,
  DollarSign,
  BookOpen,
  Sparkles,
} from "lucide-react";

const bullets = [
  "Por qué saber mucho no significa ganar dinero",
  "El error que mantiene a la mayoría sin monetizar lo que sabe",
  "Cómo estructurar tu conocimiento para que se pueda vender",
  "Qué necesitas realmente para convertirlo en un negocio",
];

const problems = [
  "Sabes hacer algo, pero no lo monetizas",
  "Has intentado vender, pero no funciona",
  "No sabes qué vender exactamente",
  "No tienes una estructura clara",
];

const classContent = [
  "Cómo dejar de improvisar y empezar a estructurar",
  "Qué diferencia a quien enseña de quien construye negocio",
  "Cómo convertir tu conocimiento en una oferta clara",
  "El primer paso real para empezar",
];

const notForYou = [
  "Si buscas dinero rápido sin hacer nada",
  "Si no estás dispuesto a aplicar",
  "Si solo quieres consumir contenido",
];

const forYou = [
  "Si sabes hacer algo y quieres monetizarlo",
  "Si ya enseñas pero no vendes",
  "Si quieres construir algo serio",
  "Si quieres dejar de improvisar",
];

const authorityItems = [
  {
    icon: DollarSign,
    text: "Millones de pesos generados en educación digital",
  },
  { icon: Users, text: "Miles de alumnos formados" },
  { icon: BookOpen, text: "Programas enfocados en resultados reales" },
];

export default function ClaseGratisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    trackCustom("ViewContent", { 
      content_name: "Clase Gratis - Monetiza tu Conocimiento",
      content_category: "Landing Page",
      content_type: "event",
    });
  }, []);

  const handleOpenModal = (location) => {
    trackCustom("OpenRegisterModal", { 
      location,
      page: "monetiza-tu-conocimiento", 
    });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* HERO LANDING */}
      <section className="relative overflow-hidden bg-[#07152f] text-white">
        {/* Fondo base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.06),_transparent_26%)]" />
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

        {/* Fondo mobile con imagen */}
        <div className="absolute inset-0 z-0 overflow-hidden lg:hidden">
          <Image
            src="/images/monetiza-conocimiento.jpg"
            alt="Fondo clase gratuita"
            fill
            priority
            className="object-cover object-center opacity-[0.24]"
          />

          {/* Capa oscura para mantener legibilidad */}
          <div className="absolute inset-0 bg-[#07152f]/72" />

          {/* Degradado superior e inferior para integrar mejor la imagen */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07152f]/55 via-transparent to-[#07152f]" />

          {/* Fade más fuerte al final para que no se vea cortada */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#07152f]/75 to-[#07152f]" />
        </div>

        <div className="page-container relative z-10 py-10 sm:py-14 lg:py-16 xl:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            {/* Imagen desktop */}
            <div className="order-2 hidden lg:order-1 lg:col-span-5 lg:block">
              <div className="relative mx-auto max-w-sm lg:max-w-md lg:top-[-4px] xl:top-[-8px]">
                <div className="absolute inset-x-10 bottom-3 h-20 rounded-full bg-red-600/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl">
                  <Image
                    src="/images/monetiza-conocimiento.jpg"
                    alt="Clase gratuita sobre monetizar tu conocimiento"
                    width={900}
                    height={1100}
                    priority
                    className="h-auto w-full object-contain object-top"
                  />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white shadow-lg shadow-red-900/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-extrabold tracking-wide sm:text-sm">
                  ¡CLASE GRATUITA EN VIVO!
                </span>
              </div>

              <h1 className="max-w-4xl text-[2.5rem] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[5rem]">
                Monetiza tu
                <span className="block text-[#fbbf24]">conocimiento</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-[1.65rem]">
                Descubre cómo convertir lo que ya sabes en una oferta clara,
                vendible y con estructura de negocio real.
              </p>

              {/* CTA principal */}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => handleOpenModal("hero")}
                  className="inline-flex min-h-[60px] w-full max-w-[420px] items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-base font-black uppercase text-white shadow-[0_18px_45px_rgba(220,38,38,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-red-500 sm:px-8 sm:py-5 sm:text-lg"
                >
                  ¡Registrarme gratis ahora!
                </button>
              </div>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-white/75">
                <span className="rounded-full border border-white/15 px-3 py-1.5">
                  Clase gratuita
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">
                  100% en vivo
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1.5">
                  Cupo limitado
                </span>
              </div>

              {/* Refuerzo */}
              <div className="mt-7 inline-block rounded-xl bg-[#2563eb] px-5 py-3 shadow-lg shadow-blue-950/20">
                <p className="text-sm font-black uppercase tracking-wide sm:text-base">
                  Sesión 100% en vivo // cupo limitado
                </p>
              </div>

              {/* Fecha y hora */}
              <div className="mt-7">
                <h2 className="text-3xl font-black uppercase italic leading-none text-red-500 sm:text-4xl lg:text-5xl xl:text-6xl">
                  Miércoles 29 de abril
                </h2>

                <p className="mt-3 flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
                  11:00 AM - (CDMX)
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.9)]" />
                </p>
              </div>

              {/* CTA secundario */}
              <div className="mt-6">
                <a
                  href="#contenido-clase"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-white/85 backdrop-blur-sm transition hover:bg-white/10"
                >
                  Ver lo que aprenderé
                </a>
              </div>

              {/* Bullets */}
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-8">
                <h3 className="mb-5 text-lg font-bold text-white sm:text-xl">
                  En esta clase vas a entender:
                </h3>

                <div className="grid gap-4">
                  {bullets.map((bullet, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-600/15">
                        <Check className="h-4 w-4 text-red-400" />
                      </div>

                      <p className="pt-0.5 text-sm text-white/85 sm:text-base lg:text-lg">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY STRIP */}
      <section className="bg-red-600 py-4 sm:py-5">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-5 text-white sm:gap-6 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                Cupo limitado
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                Acceso en vivo
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                No se repite constantemente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO TEACHES */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Imagen */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-[260px] sm:max-w-sm lg:max-w-lg">
                <div className="absolute -inset-2 -rotate-3 rounded-[1.5rem] bg-gradient-to-br from-red-600/10 to-transparent sm:-inset-3 sm:rounded-[1.75rem]" />
                <div className="relative overflow-hidden rounded-[1.25rem] shadow-2xl sm:rounded-[1.5rem]">
                  <Image
                    src="/images/sentado.jpg"
                    alt="Alfredo Cobos"
                    width={800}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="mt-4 lg:mt-0">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
                Tu instructor
              </span>

              <h2 className="headline-md mb-6 text-neutral-900 sm:mb-8">
                Soy Alfredo Cobos
              </h2>

              <div className="mb-8 space-y-4 text-sm leading-relaxed text-neutral-600 sm:mb-10 sm:text-base lg:text-lg">
                <p>
                  Durante años enseñé, compartí conocimiento y generé valor…
                  pero sin convertirlo en un negocio real.
                </p>
                <p>
                  Hasta que entendí algo:{" "}
                  <strong className="text-neutral-900">
                    el conocimiento no se vende solo… necesita estructura.
                  </strong>
                </p>
                <p>Hoy ayudo a personas a hacer exactamente eso.</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {authorityItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 sm:h-12 sm:w-12">
                      <item.icon className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 sm:text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="El problema"
            title="Esto es lo que probablemente te está pasando"
            size="large"
          />

          <div className="mx-auto max-w-4xl">
            <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-neutral-100 bg-white p-5 transition-all duration-300 hover:shadow-xl sm:p-6 lg:p-7"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 transition-colors group-hover:bg-red-500 sm:h-12 sm:w-12">
                    <X className="h-4 w-4 text-red-500 transition-colors group-hover:text-white sm:h-5 sm:w-5" />
                  </div>
                  <p className="pt-1 text-sm text-neutral-700 sm:text-base lg:text-lg">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-neutral-900 sm:text-xl lg:text-2xl">
                No es falta de conocimiento…{" "}
                <span className="text-red-600">es falta de sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW TRUTH */}
      <section className="relative overflow-hidden bg-[#0d1b39] py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="page-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl lg:mb-6 lg:text-5xl">
              No necesitas más información
            </h2>
            <p className="text-base text-neutral-300 sm:text-lg lg:text-2xl">
              Necesitas entender cómo estructurar lo que ya sabes para
              convertirlo en algo vendible.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL SEE */}
      <section id="contenido-clase" className="section-padding bg-white">
        <div className="page-container">
          <SectionTitle
            eyebrow="Contenido"
            title="Lo que verás en la clase"
            size="large"
          />

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:gap-5">
              {classContent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-xl sm:gap-5 sm:p-5 lg:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 shadow-lg shadow-red-600/20 sm:h-14 sm:w-14">
                    <span className="text-lg font-bold text-white sm:text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-neutral-700 sm:text-base lg:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="page-container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-xl sm:rounded-3xl sm:p-6 lg:p-8 xl:p-10">
              <h3 className="mb-6 text-xl font-bold text-neutral-900 sm:mb-8 sm:text-2xl">
                Para quién NO es
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <p className="pt-0.5 text-sm text-neutral-600 sm:text-base lg:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0f1d3d] p-5 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8 xl:p-10">
              <h3 className="mb-6 text-xl font-bold text-white sm:mb-8 sm:text-2xl">
                Para quién SÍ es
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="pt-0.5 text-sm text-neutral-300 sm:text-base lg:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
              Última oportunidad
            </span>

            <h2 className="headline-md mb-4 text-neutral-900">
              Si hoy sabes algo… ya tienes lo más importante
            </h2>

            <p className="mb-8 text-base text-neutral-500 sm:mb-12 sm:text-lg lg:text-xl">
              Lo que sigue no es aprender más… es estructurarlo.
            </p>

            <div className="rounded-2xl bg-[#0f1d3d] p-5 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8 xl:p-10">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                Reserva tu lugar ahora
              </h3>
              <p className="mb-6 text-sm text-neutral-400 sm:mb-8 sm:text-base">
                Cupo limitado para esta edición
              </p>

              <button
                type="button"
                onClick={() => handleOpenModal("final-cta")}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-500"
              >
                Reservar lugar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL REMINDER */}
      <section className="bg-red-600 py-4 sm:py-6">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-5 text-white sm:gap-6 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                Acceso en vivo
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                Cupo limitado
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                No se repite constantemente
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FORM */}
      <RegisterModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reserva tu lugar gratis"
      >
        <ActiveCampaignForm />
      </RegisterModal>
    </>
  );
}
