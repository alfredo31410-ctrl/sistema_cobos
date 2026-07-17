"use client";

import Image from "next/image";
import { useEffect } from "react";
import ActiveCampaignForm from "@/components/ActiveCampaignForm";
import SectionTitle from "@/components/SectionTitle";
import { track, trackCustom } from "@/lib/meta-pixel";
import {
  ArrowRight,
  CalendarDays,
  Check,
  X,
  Clock,
  Users,
  Video,
  DollarSign,
  BookOpen,
  Sparkles,
} from "lucide-react";

const EVENT_DATE = "30 de julio de 2026";
const EVENT_TIME = "11:00 a. m. (hora de CDMX)";
const eventPayload = {
  content_name: "Clase Gratis - Monetiza tu Conocimiento",
  content_category: "Clase gratuita",
  content_type: "event",
};

function RegistrationButton({ location, className = "" }) {
  const handleClick = () => {
    trackCustom("FreeClassRegistrationClick", {
      ...eventPayload,
      event_date: "2026-07-30 11:00 CDMX",
      location,
    });
  };

  return (
    <a
      href="#registro"
      onClick={handleClick}
      className={`cta-energy group relative inline-flex min-h-[56px] items-center justify-center overflow-hidden rounded-xl bg-red-600 px-6 py-4 text-center text-base font-black uppercase text-white shadow-lg shadow-red-950/25 transition hover:-translate-y-0.5 hover:bg-red-700 ${className}`}
    >
      Registrarme ahora
      <ArrowRight className="ml-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

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
  useEffect(() => {
    track("ViewContent", eventPayload);

    const elements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="clase-gratis-page overflow-hidden">
      <section className="relative overflow-hidden bg-[#07152f] text-white">
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

        <div className="absolute inset-0 z-0 overflow-hidden lg:hidden">
          <Image
            src="/images/monetiza-conocimiento.jpg"
            alt="Fondo clase gratuita"
            fill
            priority
            className="object-cover object-center opacity-[0.24]"
          />
          <div className="absolute inset-0 bg-[#07152f]/72" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07152f]/55 via-transparent to-[#07152f]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#07152f]/75 to-[#07152f]" />
        </div>

        <div className="page-container relative z-10 py-10 sm:py-14 lg:py-16 xl:py-20">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="hero-visual order-2 hidden lg:order-1 lg:col-span-5 lg:block">
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

            <div className="order-1 lg:order-2 lg:col-span-7">
              <div className="hero-enter hero-delay-1 mb-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-white shadow-lg shadow-red-900/20">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-extrabold tracking-wide sm:text-sm">
                  CLASE GRATUITA EN VIVO
                </span>
              </div>

              <h1 className="hero-enter hero-delay-2 max-w-4xl text-[2.5rem] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[5rem]">
                Monetiza tu
                <span className="block text-[#fbbf24]">conocimiento</span>
              </h1>

              <p className="hero-enter hero-delay-3 mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-[1.65rem]">
                Descubre cómo convertir lo que ya sabes en una oferta clara,
                vendible y con estructura de negocio real.
              </p>

              <div className="hero-enter hero-delay-4 mt-7 max-w-2xl">
                <RegistrationButton
                  location="hero"
                  className="min-h-[68px] w-full px-8 text-lg sm:text-xl"
                />
              </div>

              <div className="hero-enter hero-delay-5 mt-4 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex min-h-[82px] items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 shrink-0 text-amber-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-white/55">Día</p>
                    <p className="font-bold text-white">Jueves</p>
                  </div>
                </div>
                <div className="flex min-h-[82px] items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 shrink-0 text-red-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-white/55">Fecha</p>
                    <p className="font-bold leading-tight text-white">{EVENT_DATE}</p>
                  </div>
                </div>
                <div className="flex min-h-[82px] items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Clock className="h-5 w-5 shrink-0 text-sky-400" />
                  <div>
                    <p className="text-xs font-semibold uppercase text-white/55">Hora</p>
                    <p className="font-bold leading-tight text-white">11:00 a. m. CDMX</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#contenido-clase"
                  className="inline-flex min-h-[58px] items-center justify-center rounded-xl bg-amber-400 px-6 py-4 text-base font-black text-[#07152f] shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Ver lo que aprenderás
                </a>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-8">
                <h3 className="mb-5 text-lg font-bold text-white sm:text-xl">
                  En esta clase vas a entender:
                </h3>

                <div className="grid gap-4">
                  {bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
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

      <section className="bg-red-600 py-4 sm:py-5">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-5 text-white sm:gap-6 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                {EVENT_DATE}
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                Formato en vivo
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                {EVENT_TIME}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
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

            <div className="mt-4 lg:mt-0">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
                Tu instructor
              </span>

              <h2 className="headline-md mb-6 text-neutral-900 sm:mb-8">
                Soy Alfredo Cobos
              </h2>

              <div className="mb-8 space-y-4 text-sm leading-relaxed text-neutral-600 sm:mb-10 sm:text-base lg:text-lg">
                <p>
                  Durante años enseñé, compartí conocimiento y generé valor,
                  pero sin convertirlo en un negocio real.
                </p>
                <p>
                  Hasta que entendí algo:{" "}
                  <strong className="text-neutral-900">
                    el conocimiento no se vende solo, necesita estructura.
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

      <section className="scroll-reveal bg-[#0f1d3d] py-8 text-white sm:py-10">
        <div className="page-container">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-bold uppercase text-amber-400">
                Clase gratuita en vivo
              </p>
              <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                Convierte lo que sabes en una oferta que puedas vender
              </h2>
            </div>
            <RegistrationButton
              location="instructor_problem"
              className="w-full shrink-0 sm:w-auto"
            />
          </div>
        </div>
      </section>

      <section className="scroll-reveal section-padding bg-gradient-to-b from-neutral-50 to-white">
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
                No es falta de conocimiento.{" "}
                <span className="text-red-600">Es falta de sistema.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal relative overflow-hidden bg-[#0d1b39] py-14 text-white sm:py-16 lg:py-20">
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

      <section id="contenido-clase" className="scroll-reveal section-padding bg-white">
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

            <div className="mt-10 text-center">
              <RegistrationButton
                location="class_content"
                className="w-full sm:w-auto sm:min-w-[320px]"
              />
              <p className="mt-3 text-sm text-neutral-500">
                Clase gratuita en vivo. Cupo limitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal section-padding bg-gradient-to-b from-neutral-50 to-white">
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

      <section id="registro" className="scroll-reveal section-padding bg-white">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-red-600 sm:text-sm">
              Inscripciones abiertas
            </span>

            <h2 className="headline-md mb-4 text-neutral-900">
              Si hoy sabes algo, ya tienes lo más importante
            </h2>

            <p className="mb-8 text-base text-neutral-500 sm:mb-12 sm:text-lg lg:text-xl">
              Lo que sigue no es aprender más. Es estructurarlo.
            </p>

            <div className="rounded-2xl bg-[#0f1d3d] p-5 shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8 xl:p-10">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                {EVENT_DATE}
              </h3>
              <p className="mb-6 text-sm text-neutral-400 sm:mb-8 sm:text-base">
                {EVENT_TIME}. Regístrate para recibir el acceso y los recordatorios.
              </p>

              <div className="overflow-hidden rounded-2xl bg-white text-left shadow-xl">
                <ActiveCampaignForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-red-600 py-4 sm:py-6">
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
                Cupo limitado por edición
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold sm:text-base">
                {EVENT_DATE}, {EVENT_TIME}
              </span>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes claseHeroUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes claseHeroDepth {
          from { opacity: 0; transform: perspective(1100px) rotateY(-7deg) translateY(30px); }
          to { opacity: 1; transform: perspective(1100px) rotateY(0) translateY(0); }
        }

        @keyframes claseFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes ctaSweep {
          0% { transform: translateX(-160%) skewX(-18deg); }
          55%, 100% { transform: translateX(260%) skewX(-18deg); }
        }

        .hero-enter { animation: claseHeroUp 0.75s cubic-bezier(.22,.8,.3,1) both; }
        .hero-delay-1 { animation-delay: .05s; }
        .hero-delay-2 { animation-delay: .13s; }
        .hero-delay-3 { animation-delay: .21s; }
        .hero-delay-4 { animation-delay: .29s; }
        .hero-delay-5 { animation-delay: .37s; }
        .hero-visual { animation: claseHeroDepth 1s cubic-bezier(.22,.8,.3,1) .25s both; }
        .hero-visual > div { animation: claseFloat 5s ease-in-out 1.25s infinite; }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.22,.8,.3,1);
        }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .cta-energy::before {
          content: "";
          position: absolute;
          inset: -30% auto -30% -20%;
          width: 24%;
          background: rgba(255,255,255,.32);
          filter: blur(2px);
          animation: ctaSweep 3.8s ease-in-out 1.2s infinite;
          pointer-events: none;
        }

        .clase-gratis-page a,
        .clase-gratis-page [class*="shadow"] {
          transition-duration: 300ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter, .hero-visual, .hero-visual > div, .cta-energy::before {
            animation: none !important;
          }
          .scroll-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </main>
  );
}
