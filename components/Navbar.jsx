'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/clase-gratis', label: 'Clase gratis' },
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/diagnostico', label: 'Diagnóstico' },
  { href: '/sistema-cobos', label: 'Sistema Cobos' },
  { href: '/agencia', label: 'Agencia' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-neutral-200/70 bg-white/92 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.18)] backdrop-blur-xl'
            : 'border-b border-transparent bg-white/75 backdrop-blur-md'
        }`}
      >
        <div className="page-container">
          <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 text-lg font-bold tracking-tight text-neutral-900 sm:text-xl lg:text-2xl"
              aria-label="Ir al inicio"
            >
              Alfredo <span className="text-cefin-red">Cobos</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 xl:px-5 ${
                      active
                        ? 'bg-neutral-900 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/clase-gratis">
                <Button className="h-11 rounded-full bg-cefin-red px-5 text-sm font-semibold text-white shadow-lg shadow-cefin-red/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cefin-red-dark hover:shadow-xl hover:shadow-cefin-red/25 xl:px-6">
                  Quiero registrarme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 transition hover:bg-neutral-50 lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-16 z-50 border-t border-neutral-200 bg-white shadow-2xl transition-all duration-300 lg:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 pointer-events-none opacity-0'
        }`}
      >
        <div className="page-container py-5">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    active
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-5 border-t border-neutral-200 pt-5">
            <Link href="/clase-gratis" onClick={() => setIsOpen(false)}>
              <Button className="h-12 w-full rounded-full bg-cefin-red text-base font-semibold text-white shadow-lg shadow-cefin-red/20 transition-all duration-300 hover:bg-cefin-red-dark">
                Quiero registrarme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}