import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVNITY | Inteligencia Artificial y Calidad Web",
  description: "Calidad web, accesible para todos. Soluciones disruptivas desde Querétaro, México para el mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-electricturquoise selection:text-deepviolet`}
      >
        <Script id="deployment-version">
          {`console.log("Versión de despliegue: " + new Date().getTime());`}
        </Script>
        <Script id="whatsapp-injection" strategy="afterInteractive">
          {`
            (function() {
              const wa = document.createElement('a');
              wa.href = 'https://wa.me/525631799645';
              wa.target = '_blank';
              wa.rel = 'noopener noreferrer';
              wa.style.cssText = 'position: fixed !important; bottom: 25px !important; right: 25px !important; width: 65px !important; height: 65px !important; background-color: #25D366 !important; border-radius: 50% !important; z-index: 2147483647 !important; display: flex !important; align-items: center !important; justify-content: center !important; box-shadow: 0 4px 15px rgba(0,0,0,0.5) !important; text-decoration: none !important; color: white !important;';
              wa.innerHTML = '<span style="font-weight: bold !important; font-family: sans-serif !important; font-size: 20px !important;">WA</span>';
              document.body.appendChild(wa);
              console.log("🚀 WhatsApp Button Inyectado Directamente en el DOM");
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

