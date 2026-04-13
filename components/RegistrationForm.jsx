'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function RegistrationForm({
  buttonText = 'Quiero mi lugar',
  variant = 'default',
}) {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    correo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      // Simulación temporal de envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);

      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setErrorMessage('Hubo un error al enviar tu registro. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className={`rounded-3xl p-6 sm:p-8 md:p-10 text-center ${
          variant === 'dark' ? 'bg-neutral-800/50' : 'bg-green-50'
        }`}
      >
        <div
          className={`mx-auto mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full ${
            variant === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
          }`}
        >
          <CheckCircle
            className={`h-8 w-8 sm:h-10 sm:w-10 ${
              variant === 'dark' ? 'text-green-400' : 'text-green-600'
            }`}
          />
        </div>

        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 ${
            variant === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}
        >
          ¡Registro exitoso!
        </h3>

        <p
          className={`text-sm sm:text-base leading-relaxed ${
            variant === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Revisa tu correo para más información.
        </p>
      </div>
    );
  }

  const inputBase =
    'h-12 sm:h-14 rounded-xl px-4 sm:px-5 text-sm sm:text-base transition-all duration-200 focus:ring-2 focus:ring-offset-2';

  const inputStyles =
    variant === 'dark'
      ? `${inputBase} bg-white/10 border-white/10 text-white placeholder:text-neutral-400 focus:bg-white/15 focus:border-white/20 focus:ring-cefin-red`
      : `${inputBase} bg-white border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-cefin-red focus:ring-cefin-red/20`;

  const labelStyles =
    variant === 'dark'
      ? 'text-sm sm:text-base font-medium text-neutral-200'
      : 'text-sm sm:text-base font-medium text-neutral-700';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <Label htmlFor="nombre" className={labelStyles}>
          Nombre
        </Label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
          className={`mt-2 ${inputStyles}`}
        />
      </div>

      <div>
        <Label htmlFor="whatsapp" className={labelStyles}>
          WhatsApp
        </Label>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="+52 123 456 7890"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          className={`mt-2 ${inputStyles}`}
        />
      </div>

      <div>
        <Label htmlFor="correo" className={labelStyles}>
          Correo electrónico
        </Label>
        <Input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@correo.com"
          value={formData.correo}
          onChange={handleChange}
          required
          className={`mt-2 ${inputStyles}`}
        />
      </div>

      {errorMessage && (
        <p className="text-sm leading-relaxed text-red-500">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="mt-2 sm:mt-4 h-12 sm:h-14 w-full rounded-xl bg-cefin-red text-sm sm:text-base lg:text-lg font-semibold text-white shadow-lg shadow-cefin-red/25 transition-all duration-300 hover:bg-cefin-red-dark hover:shadow-xl hover:shadow-cefin-red/30 disabled:opacity-70"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </>
        )}
      </Button>
    </form>
  );
}