'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyCs7gnOIlsffAGg_IY6XwrjPZaSwm9Opi051DosZXRgfJY-28jmfdPL_pKVS8TwgzN/exec';

const sections = [
  {
    title: 'Datos iniciales',
    color: 'text-cefin-red',
    fields: [
      { name: 'nombre', label: 'Nombre', type: 'text', required: true },
      { name: 'correo', label: 'Correo', type: 'email', required: true },
      { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
      {
        name: 'redes',
        label: 'Redes sociales',
        type: 'text',
        required: false,
        placeholder: '@usuario o enlace',
      },
    ],
  },
  {
    title: '1. Sobre tu conocimiento',
    color: 'text-red-500',
    fields: [
      {
        name: 'p1',
        label: '1. ¿Qué sabes hacer o enseñar que otras personas podrían necesitar aprender?',
      },
      {
        name: 'p2',
        label: '2. ¿Cómo aprendiste eso que hoy sabes (experiencia, trabajo, estudio, negocio, etc.)?',
      },
      {
        name: 'p3',
        label: '3. Si tuvieras que enseñar eso a alguien desde cero, ¿cómo lo explicarías en pocas palabras?',
      },
    ],
  },
  {
    title: '2. Problema y resultado',
    color: 'text-amber-500',
    fields: [
      {
        name: 'p4',
        label: '4. ¿Qué problema específico le ayudas a resolver a alguien con lo que sabes?',
      },
      {
        name: 'p5',
        label: '5. ¿Qué resultado concreto obtiene una persona después de aprender contigo?',
      },
      {
        name: 'p6',
        label: '6. ¿En cuánto tiempo crees que alguien podría ver resultados con lo que tú enseñas?',
      },
    ],
  },
  {
    title: '3. Mercado y validación',
    color: 'text-blue-500',
    fields: [
      {
        name: 'p7',
        label: '7. ¿Alguien te ha pedido ayuda sobre este tema anteriormente? ¿Cómo fue esa experiencia?',
      },
      {
        name: 'p8',
        label: '8. ¿Alguna vez has cobrado por enseñar o ayudar con esto? ¿Qué hiciste exactamente?',
      },
      {
        name: 'p9',
        label: '9. ¿Por qué crees que alguien sí pagaría por aprender esto contigo?',
      },
    ],
  },
  {
    title: '4. Cliente ideal',
    color: 'text-green-500',
    fields: [
      {
        name: 'p10',
        label: '10. ¿Quién es la persona que más necesita lo que tú sabes (edad, profesión, situación)?',
      },
      {
        name: 'p11',
        label: '11. ¿Qué problema urgente está viviendo esa persona hoy?',
      },
      {
        name: 'p12',
        label: '12. ¿Qué pasaría si esa persona NO resuelve ese problema?',
      },
    ],
  },
  {
    title: '5. Estructura y digitalización',
    color: 'text-fuchsia-500',
    fields: [
      {
        name: 'p13',
        label: '13. Si tuvieras que dividir tu conocimiento en pasos, ¿cuáles serían?',
      },
      {
        name: 'p14',
        label: '14. ¿Qué es lo primero que alguien debería aprender contigo para empezar?',
      },
    ],
  },
  {
    title: '6. Ejecución y compromiso',
    color: 'text-neutral-900',
    fields: [
      {
        name: 'p15',
        label: '15. ¿Cuánto tiempo a la semana estás dispuesto a dedicar para construir este proyecto?',
      },
      {
        name: 'p16',
        label: '16. ¿Qué tan urgente es para ti empezar a generar ingresos con tu conocimiento?',
      },
      {
        name: 'p17',
        label: '17. ¿Qué estarías dispuesto a hacer, aunque no te sientas listo, para lograrlo?',
      },
    ],
  },
  {
    title: '7. Bloqueo principal',
    color: 'text-neutral-900',
    fields: [
      {
        name: 'p18',
        label: '18. ¿Qué es lo que más te ha detenido hasta ahora para monetizar tu conocimiento?',
      },
      {
        name: 'p19',
        label: '19. ¿Qué es lo que más te preocupa o te genera duda al pensar en vender lo que sabes?',
      },
    ],
  },
  {
    title: '8. Visión',
    color: 'text-cefin-red',
    fields: [
      {
        name: 'p20',
        label: '20. Si esto funcionara, ¿cómo cambiaría tu vida en los próximos 6 a 12 meses?',
      },
      {
        name: 'p21',
        label: '21. ¿Hay algo más que quieras contarnos sobre tu situación actual o lo que buscas construir?',
      },
    ],
  },
];

const initialForm = {
  nombre: '',
  correo: '',
  whatsapp: '',
  redes: '',
  p1: '',
  p2: '',
  p3: '',
  p4: '',
  p5: '',
  p6: '',
  p7: '',
  p8: '',
  p9: '',
  p10: '',
  p11: '',
  p12: '',
  p13: '',
  p14: '',
  p15: '',
  p16: '',
  p17: '',
  p18: '',
  p19: '',
  p20: '',
  p21: '',
};

export default function DiagnosticoPage() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const validateRequired = () => {
  if (!formData.nombre) return 'El nombre es obligatorio'
  if (!formData.correo) return 'El correo es obligatorio'
  if (!formData.whatsapp) return 'El WhatsApp es obligatorio'
  if (!formData.redes) return 'Las redes sociales son obligatorias'

  for (let i = 1; i <= 21; i++) {
    if (!formData[`p${i}`]) {
      return `Debes responder la pregunta ${i}`
    }
  }

  return null
}

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage('');

const validationError = validateRequired()

if (validationError) {
  setErrorMessage(validationError)
  return
}

  try {
    setLoading(true);

    const response = await fetch('/api/diagnostico', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'No se pudo enviar el diagnóstico.');
    }

    window.location.href = '/gracias';
  } catch (error) {
    console.error(error);
    setErrorMessage(
      'Hubo un problema al enviar tu diagnóstico. Inténtalo de nuevo en unos minutos.'
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="page-container relative py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-cefin-red px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Diagnóstico
            </span>

            <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Monetiza tu conocimiento
            </h1>

            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-300">
              Responde con total honestidad. Este diagnóstico nos ayudará a entender
              si tu conocimiento puede convertirse en un negocio digital real y en qué punto estás hoy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="page-container">
          <div className="mx-auto max-w-4xl rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 xl:p-10 shadow-xl border border-neutral-100">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Completa tu diagnóstico
              </h2>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-neutral-600">
                Tómate unos minutos. Entre más claro respondas, mejor podremos entender tu situación.
              </p>
            </div>

<form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
                  {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-neutral-100 bg-neutral-50/70 p-4 sm:p-5 lg:p-6"
                >
                  <h3 className={`mb-5 text-lg sm:text-xl font-bold ${section.color}`}>
                    {section.title}
                  </h3>

                  <div className="space-y-5">
                    {section.fields.map((field) => {
                      const isShortField =
                        ['nombre', 'correo', 'whatsapp', 'redes'].includes(field.name);

                      return (
                        <div key={field.name}>
                          <label
                            htmlFor={field.name}
                            className="mb-2 block text-sm sm:text-base font-medium text-neutral-800"
                          >
                            {field.label}
                          </label>

                          {isShortField ? (
                            <input
                              id={field.name}
                              name={field.name}
                              type={field.type || 'text'}
                              value={formData[field.name]}
                              onChange={handleChange}
                              required={field.required}
                              placeholder={field.placeholder || ''}
                              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm sm:text-base text-neutral-900 outline-none transition focus:border-cefin-red focus:ring-2 focus:ring-cefin-red/20"
                            />
                          ) : (
                            <textarea
                              id={field.name}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              rows={5}
                              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm sm:text-base text-neutral-900 outline-none transition focus:border-cefin-red focus:ring-2 focus:ring-cefin-red/20 resize-y"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {errorMessage && (
                <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm sm:text-base">{errorMessage}</p>
                </div>
              )}

              <div className="rounded-2xl bg-cefin-dark p-5 sm:p-6 lg:p-8 text-white">
                <div className="mb-5 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cefin-red" />
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-300">
                    Este diagnóstico nos permitirá entender en qué punto estás y cómo ayudarte a avanzar de forma real.
                  </p>
                </div>

            <button
  type="submit"
  disabled={loading}
  className="inline-flex w-full items-center justify-center rounded-full bg-cefin-red px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition hover:bg-cefin-red-dark disabled:opacity-70"
>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando diagnóstico...
                    </>
                  ) : (
                    'Enviar diagnóstico'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}