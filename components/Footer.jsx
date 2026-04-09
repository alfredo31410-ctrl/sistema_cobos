import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/clase-gratis', label: 'Clase gratis' },
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/sistema-cobos', label: 'Sistema Cobos' },
  { href: '/agencia', label: 'Agencia' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/alfredocobosmx/', label: 'Instagram' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCcVhSDZCYZBqDyskJia8dOA', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/alfredo.cobos.5/?locale=es_LA', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-cefin-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl lg:text-3xl font-bold tracking-tight">
                Alfredo <span className="text-cefin-red">Cobos</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md mb-8">
              Ayudo a personas a convertir su conocimiento en un negocio real 
              con estructura, estrategia y dirección.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cefin-red hover:border-cefin-red transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Alfredo Cobos. Todos los derechos reservados.
            </p>
            <p className="text-neutral-600 text-sm">
              Diseñado para transformar conocimiento en negocio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
