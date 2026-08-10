'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Flame,
  Laptop,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import { track, trackCustom } from '@/lib/meta-pixel';

const checkoutUrl =
  process.env.NEXT_PUBLIC_BOOTCAMP_CHECKOUT_URL ||
  'https://pay.hotmart.com/S106940094Q?off=m8p9f7g6&checkoutMode=10';

const eventPayload = {
  content_name: 'De Cero a Infoproductor',
  content_category: 'Bootcamp',
  content_type: 'product',
  currency: 'MXN',
  value: 487,
};

const bannerIncludes = [
  '3 dias de entrenamiento en vivo para convertir tu conocimiento en una oferta',
  'Metodo para detectar el problema que puedes resolver',
  'Estructura para organizar y presentar tu metodo',
  'Una propuesta educativa clara y lista para validar',
];

const bannerOutcomes = [
  'Detecta el problema',
  'Organiza tu metodo',
  'Define una promesa',
  'Prepara tu propuesta para validar',
];

function handleCheckoutClick(location) {
  track('InitiateCheckout', {
    ...eventPayload,
    num_items: 1,
  });

  trackCustom('BootcampCheckoutClick', {
    ...eventPayload,
    location,
    checkout_url: checkoutUrl,
    event_date: '12, 13 y 14 de agosto de 2026, 1:00 PM CDMX',
  });
}

function PurchaseButton({ className = '', location = 'unknown' }) {
  return (
    <Link
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => handleCheckoutClick(location)}
      className={`group inline-flex items-center justify-center rounded-full bg-[#ff4d12] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_18px_40px_rgba(255,77,18,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#ff5e29] sm:text-base ${className}`}
    >
      Convierte lo que sabes en una oferta
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export default function BootcampPage() {
  useEffect(() => {
    track('ViewContent', eventPayload);
    trackCustom('BootcampView', {
      ...eventPayload,
      price_label: '$487 MXN',
      event_date: '12, 13 y 14 de agosto de 2026, 1:00 PM CDMX',
    });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#070403] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,90,54,0.22),transparent_28%),radial-gradient(circle_at_78%_14%,rgba(255,110,28,0.18),transparent_24%),radial-gradient(circle_at_68%_60%,rgba(255,122,0,0.10),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(11,6,5,0.92)_34%,rgba(18,10,8,0.78)_56%,rgba(8,4,3,0.94)_100%)]" />
        <div className="absolute inset-0 opacity-[0.10]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.32) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="absolute left-[-6%] top-[20%] h-40 w-[55%] rounded-full bg-[#dc2f02]/18 blur-3xl sm:h-52 lg:h-72" />
        <div className="absolute bottom-[8%] right-[-10%] h-44 w-[60%] rounded-full bg-[#ff7b00]/10 blur-3xl sm:h-56 lg:h-80" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(255,120,0,0.05)_45%,rgba(0,0,0,0.4)_100%)]" />

        <div className="page-container relative z-10 py-10 sm:py-14 lg:py-16 xl:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-6 xl:gap-12">
            <div className="relative max-w-[680px]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff6b4a]/25 bg-[#42120e]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffb29d] shadow-[0_0_40px_rgba(255,84,48,0.12)] sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Programa en vivo
              </div>

              <h1 className="max-w-[620px] text-[2.6rem] font-black uppercase leading-[0.88] tracking-[-0.04em] text-white sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5.2rem]">
                <span className="block text-[#ff7b72] [text-shadow:0_0_20px_rgba(255,89,72,0.5)]">
                  De cero a
                </span>
                <span className="block">infoproductor</span>
                <span className="block text-[#ff6250] [text-shadow:0_0_28px_rgba(255,80,64,0.6)]">
                  en 3 días
                </span>
              </h1>

              <p className="mt-5 max-w-[640px] text-lg font-semibold italic leading-tight text-white sm:text-[1.5rem] lg:text-[1.9rem]">
                Convierte lo que ya sabes en una propuesta educativa clara y
                lista para validar.
              </p>

              <div className="mt-7 max-w-[620px] rounded-[1.9rem] bg-[linear-gradient(90deg,#a1221f_0%,#a94f2d_55%,#9b6036_100%)] px-5 py-4 shadow-[0_18px_45px_rgba(119,27,17,0.35)] sm:px-7 sm:py-5">
                <p className="text-center text-lg font-black italic text-white sm:text-[1.9rem]">
                  12, 13 y 14 de agosto · 1:00 p.m. CDMX
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
                <div className="inline-flex w-fit items-center gap-3 rounded-[1.7rem] bg-[#ff4d12] px-5 py-4 text-white shadow-[0_20px_42px_rgba(255,77,18,0.35)] sm:px-6">
                  <Flame className="h-10 w-10 shrink-0 text-[#ffb347] sm:h-12 sm:w-12" />
                  <div className="leading-none">
                    <p className="text-[0.95rem] font-black uppercase tracking-[0.08em] sm:text-[1.05rem]">
                      A sólo
                    </p>
                    <p className="mt-1 text-[2rem] font-black sm:text-[2.4rem]">
                      $487
                    </p>
                    <p className="mt-1 text-lg font-black sm:text-xl">pesos.</p>
                  </div>
                </div>

                <PurchaseButton className="w-full sm:w-auto" location="hero" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-white/78 sm:text-base">
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4 text-[#ff7c26]" />
                  3 dias en vivo
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-[#ff7c26]" />
                  Método paso a paso
                </div>
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="h-4 w-4 text-[#ff7c26]" />
                  Listo para validar
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[500px] items-end justify-center lg:max-w-[560px] xl:max-w-[620px]">
              <div className="absolute inset-x-[12%] bottom-[9%] h-10 rounded-full bg-[#ff6b1a]/35 blur-3xl sm:h-14" />
              <div className="absolute right-[16%] top-[10%] h-44 w-44 rounded-full bg-[#ff6f1e]/22 blur-3xl sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
              <div className="absolute bottom-[18%] left-[18%] h-20 w-20 rounded-full bg-[#b72018]/18 blur-2xl" />

              <Image
                src="/images/alfredo-sistema-cobos.png"
                alt="Alfredo Cobos con laptop y micrófono"
                width={439}
                height={561}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.75)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#120908] py-10 text-white sm:py-12">
        <div className="page-container">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#ff8f6b]">
                Lo que incluye
              </p>

              <div className="grid gap-4">
                {bannerIncludes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/20 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6f3c]" />
                    <p className="text-sm leading-relaxed text-white/86 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#ff6c47]/15 bg-[radial-gradient(circle_at_top,rgba(255,118,64,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:p-8">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-[#ff8f6b]">
                Al finalizar tendrás
              </p>

              <div className="space-y-4">
                {bannerOutcomes.map((item) => (
                  <div key={item} className="rounded-2xl bg-black/20 px-4 py-4">
                    <p className="text-sm font-semibold leading-relaxed text-white/88 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[1.6rem] bg-[linear-gradient(90deg,rgba(255,77,18,0.16),rgba(255,145,56,0.08))] px-5 py-5">
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                  Una propuesta educativa clara, estructurada y lista para
                  validar con personas reales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#090504] py-12 text-white sm:py-14 lg:py-16">
        <div className="page-container">
          <div className="mx-auto max-w-5xl rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 lg:px-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff8f6b]">
                  Oferta especial
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Convierte lo que sabes en una oferta
                  <span className="block text-[#ff6655]">lista para validar</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/74 sm:text-base lg:text-lg">
              En 3 días en vivo vas a detectar el problema, organizar tu método,
              definir una promesa y preparar tu propuesta.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <PurchaseButton location="footer" />
              <p className="text-sm font-semibold text-white/58">
                Precio especial: $487 MXN
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
