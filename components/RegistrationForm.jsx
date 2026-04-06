'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function RegistrationForm({ 
  buttonText = 'Quiero mi lugar',
  variant = 'default' // 'default' | 'dark'
}) {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    correo: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se conectaría con el backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`text-center p-8 rounded-xl ${variant === 'dark' ? 'bg-neutral-800' : 'bg-neutral-50'}`}>
        <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${variant === 'dark' ? 'text-green-400' : 'text-green-500'}`} />
        <h3 className={`text-2xl font-bold mb-2 ${variant === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
          ¡Registro exitoso!
        </h3>
        <p className={variant === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}>
          Revisa tu correo para más información.
        </p>
      </div>
    );
  }

  const inputStyles = variant === 'dark' 
    ? 'bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400' 
    : 'bg-white border-neutral-200';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="nombre" className={variant === 'dark' ? 'text-white' : 'text-neutral-700'}>
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
          className={`mt-1 h-12 ${inputStyles}`}
        />
      </div>
      <div>
        <Label htmlFor="whatsapp" className={variant === 'dark' ? 'text-white' : 'text-neutral-700'}>
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
          className={`mt-1 h-12 ${inputStyles}`}
        />
      </div>
      <div>
        <Label htmlFor="correo" className={variant === 'dark' ? 'text-white' : 'text-neutral-700'}>
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
          className={`mt-1 h-12 ${inputStyles}`}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full h-12 bg-cefin-red hover:bg-cefin-red/90 text-white font-semibold text-lg"
      >
        {buttonText}
      </Button>
    </form>
  );
}
