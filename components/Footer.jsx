import Link from 'next/link';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/clase-gratis', label: 'Clase gratis' },
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/sistema-cobos', label: 'Sistema Cobos' },
  { href: '/agencia', label: 'Agencia' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alfredo Cobos</h3>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              Ayudo a personas a convertir su conocimiento en un negocio real 
              con estructura, estrategia y dirección.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-cefin-red transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-neutral-400">
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-neutral-400">
              Legal
            </h4>
            <ul className="space-y-3">
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

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <p className="text-neutral-500 text-sm text-center">
            © {new Date().getFullYear()} Alfredo Cobos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
