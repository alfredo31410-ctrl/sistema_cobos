import CTAButton from '@/components/CTAButton';
import { ArrowDown, ArrowUpRight, Check, Mail, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Gracias por tu registro | Sistema Cobos',
  description: 'Confirma tu registro y recibe la Guía De 0 a Infoproductor.',
};

export default function AgradecimientosPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f7f7f4] text-neutral-900">
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-cefin-red/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

      <section className="page-container flex min-h-[calc(100vh-5rem)] items-center py-14 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cefin-red/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cefin-red shadow-sm">
              <Check className="h-4 w-4" />
              Registro confirmado
            </div>

            <h1 className="mb-6 max-w-2xl text-5xl font-black leading-[0.94] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              ¡Gracias por tu registro!
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              Revisa tu correo, ahí encontrarás la{' '}
              <span className="font-bold text-neutral-900">
                Guía De 0 a Infoproductor
              </span>
              .
            </p>

            <CTAButton href="/" variant="primary" size="lg" showArrow>
              Ir al inicio
            </CTAButton>

            <div className="mt-10 flex items-center gap-3 text-sm text-neutral-500">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                <ArrowDown className="h-4 w-4 text-cefin-red" />
              </div>
              <span>Tu siguiente paso empieza en tu bandeja de entrada.</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-cefin-red/10" />
            <div className="absolute -inset-4 -rotate-3 rounded-[2rem] border border-neutral-200/80" />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-neutral-950 p-6 text-white shadow-2xl shadow-neutral-900/20 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cefin-red/30 blur-2xl" />
              <div className="relative mb-12 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cefin-red shadow-lg shadow-cefin-red/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white/80">Sistema Cobos™</span>
                </div>
                <ArrowUpRight className="h-6 w-6 text-white/40" />
              </div>

              <div className="relative mb-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-7 flex items-center justify-between">
                  <Sparkles className="h-5 w-5 text-amber-300" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Guía digital</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cefin-red-light">De 0 a</p>
                <p className="mt-1 text-3xl font-black leading-none tracking-tight">Infoproductor</p>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45">Revisa tu bandeja de entrada</p>
              <h2 className="mb-5 max-w-xs text-3xl font-bold leading-tight sm:text-4xl">El conocimiento también puede venderse.</h2>
              <div className="h-px w-full bg-white/15" />
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                Si no la ves en unos minutos, revisa también la carpeta de promociones o spam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
