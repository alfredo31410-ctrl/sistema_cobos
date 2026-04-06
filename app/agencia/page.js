import PlaceholderSection from '@/components/PlaceholderSection';
import { Building2 } from 'lucide-react';

export default function AgenciaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-cefin-red/20 flex items-center justify-center mx-auto mb-8">
              <Building2 className="w-10 h-10 text-cefin-red" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Agencia: Lo Hacemos por Ti
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Deja que nuestro equipo construya tu negocio del conocimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-2 border-dashed border-neutral-300 rounded-3xl p-12 lg:p-16 text-center bg-neutral-50">
              <div className="w-24 h-24 rounded-full bg-neutral-200 flex items-center justify-center mx-auto mb-8">
                <Building2 className="w-12 h-12 text-neutral-400" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Muy pronto
              </h2>
              <p className="text-xl text-neutral-500 mb-8">
                Estamos preparando todos los detalles del servicio de Agencia.
                Pronto podrás solicitar que lo hagamos por ti.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cefin-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cefin-red"></span>
                </span>
                <span className="font-medium">Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-12 text-center">
              ¿Qué es la Agencia?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-cefin-red">1</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Consulta</h3>
                <p className="text-neutral-600">Analizamos tu conocimiento y definimos la estrategia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-cefin-red">2</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Construcción</h3>
                <p className="text-neutral-600">Creamos tu oferta, tu embudo y tu sistema</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-cefin-red">3</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Lanzamiento</h3>
                <p className="text-neutral-600">Ponemos todo en marcha para generar ventas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
