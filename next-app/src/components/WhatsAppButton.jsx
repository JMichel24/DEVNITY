"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton - Componente de botón flotante profesional para contacto directo.
 * 
 * Especificaciones:
 * - Posición: Fija en la esquina inferior derecha.
 * - Estilos: Verde WhatsApp (#25D366) con efectos de hover.
 * - Accesibilidad: Incluye rel="noopener noreferrer" para seguridad.
 */
const WhatsAppButton = () => {
  const phoneNumber = "525631799645";
  const message = "Hola DEVNITY, vengo de la página web y me gustaría cotizar un proyecto.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
