import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaPixelScript from '@/components/meta-pixel-script';

export const metadata = {
  title: 'Alfredo Cobos | Monetiza tu Conocimiento',
  description:
    'Aprende a estructurar, vender y escalar lo que sabes con un sistema claro y enfocado en resultados. Sistema Cobos™ para negocios basados en conocimiento.',
  keywords: [
    'monetizar conocimiento',
    'negocio digital',
    'sistema cobos',
    'educación online',
    'emprendimiento digital',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="facebook-domain-verification"
          content="njvp5g2nwoz5jr3g7s1691iimhesyj"
        />
      </head>
      <body>
        <MetaPixelScript />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}