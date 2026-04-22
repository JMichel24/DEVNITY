"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton - Componente de contacto directo optimizado.
 * 
 * Estándar de Ingeniería:
 * - Estética: Botón circular de 64px (w-16 h-16) con centrado perfecto.
 * - Posicionamiento: Elevado (z-[9999]) en la esquina inferior derecha.
 * - Feedback táctil: Escalamiento en hover y compresión en active.
 */
const WhatsAppButton = () => {
  const phoneNumber = "525631799645";
  const message = "Hola DEVNITY, necesito una cotización.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[9999] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
