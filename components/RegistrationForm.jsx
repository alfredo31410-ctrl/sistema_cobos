'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

export default function RegistrationForm({ 
  buttonText = 'Quiero mi lugar',
  variant = 'default'
}) {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    correo: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center p-10 rounded-3xl ${
        variant === 'dark' ? 'bg-neutral-800/50' : 'bg-green-50'
      }`}>
        <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
          variant === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
        }`}>
          <CheckCircle className={`w-10 h-10 ${variant === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
        </div>
        <h3 className={`text-2xl font-bold mb-3 ${variant === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
          ¡Registro exitoso!
        </h3>
        <p className={variant === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}>
          Revisa tu correo para más información.
        </p>
      </div>
    );
  }

  const inputBase = 'h-14 rounded-xl text-base px-5 transition-all duration-200 focus:ring-2 focus:ring-offset-2';
  const inputStyles = variant === 'dark' 
    ? `${inputBase} bg-white/10 border-white/10 text-white placeholder:text-neutral-400 focus:bg-white/15 focus:border-white/20 focus:ring-cefin-red` 
    : `${inputBase} bg-white border-neutral-200 focus:border-cefin-red focus:ring-cefin-red/20`;

  const labelStyles = variant === 'dark' ? 'text-neutral-200 font-medium' : 'text-neutral-700 font-medium';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full h-14 bg-cefin-red hover:bg-cefin-red-dark text-white font-semibold text-lg rounded-xl shadow-lg shadow-cefin-red/25 hover:shadow-xl hover:shadow-cefin-red/30 transition-all duration-300 mt-6"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
}
