import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Alfredo Cobos | Monetiza tu Conocimiento',
  description: 'Aprende a estructurar, vender y escalar lo que sabes con un sistema claro y enfocado en resultados. Sistema Cobos™ para negocios basados en conocimiento.',
  keywords: 'monetizar conocimiento, negocio digital, sistema cobos, educación online, emprendimiento digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
