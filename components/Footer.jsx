import Link from 'next/link';
import { Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/clase-gratis', label: 'Clase gratis' },
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/sistema-cobos', label: 'Sistema Cobos' },
  { href: '/agencia', label: 'Agencia' },
];

const legalLinks = [
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
  { href: '/terminos-y-condiciones', label: 'Términos y condiciones' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/alfredocobosmx/',
    label: 'Instagram',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/channel/UCcVhSDZCYZBqDyskJia8dOA',
    label: 'YouTube',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/alfredo.cobos.5/?locale=es_LA',
    label: 'Facebook',
  },
];

export default function Footer() {
  return (
    <footer className="bg-cefin-dark text-white">
      {/* Main footer */}
      <div className="page-container py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Alfredo <span className="text-cefin-red">Cobos</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-400">
              Ayudo a personas a convertir su conocimiento en un negocio real
              con estructura, estrategia y dirección.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cefin-red hover:bg-cefin-red"
                >
                  <social.icon className="h-[18px] w-[18px] text-neutral-400 transition-colors duration-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1 lg:col-span-3 lg:col-start-7">
            <h4 className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Navegación
            </h4>

            <ul className="space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm sm:text-base text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="ml-1.5 h-4 w-4 translate-x-0 translate-y-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Legal
            </h4>

            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-container py-5 sm:py-6">
          <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="text-xs sm:text-sm text-neutral-500">
              © {new Date().getFullYear()} Alfredo Cobos. Todos los derechos reservados.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600">
              Diseñado para transformar conocimiento en negocio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}