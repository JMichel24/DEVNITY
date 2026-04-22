import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";

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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

