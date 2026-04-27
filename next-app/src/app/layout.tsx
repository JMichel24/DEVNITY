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
        <style dangerouslySetInnerHTML={{ __html: `
          #wa-button-fixed {
            position: fixed !important;
            bottom: 25px !important;
            right: 25px !important;
            width: 65px !important;
            height: 65px !important;
            background-color: #25D366 !important;
            border-radius: 50% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 2147483647 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.6) !important;
            cursor: pointer !important;
            text-decoration: none !important;
            color: white !important;
            font-family: Arial, sans-serif !important;
            font-weight: bold !important;
            font-size: 20px !important;
          }
        `}} />
        <a id="wa-button-fixed" href="https://wa.me/525631799645" target="_blank" rel="noopener">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style={{ width: '35px', height: '35px', display: 'block' }} alt="WhatsApp" />
        </a>
        {children}
      </body>
    </html>
  );
}

