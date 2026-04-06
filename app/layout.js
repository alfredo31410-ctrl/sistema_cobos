import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Alfredo Cobos | Monetiza tu Conocimiento',
  description: 'Aprende a estructurar, vender y escalar lo que sabes con un sistema claro y enfocado en resultados.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
