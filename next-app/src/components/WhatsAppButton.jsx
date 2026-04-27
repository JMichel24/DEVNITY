"use client";

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton - Componente de contacto directo con Prioridad Absoluta.
 * 
 * Modificaciones de Rescate:
 * - Estilos Inline para sobrepasar restricciones de CSS.
 * - Fallback de texto "WA" por si falla la librería de iconos.
 * - Log de depuración para verificar montaje en Vercel.
 */
const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    console.log("🚀 Botón de WhatsApp montado correctamente");
  }, []);

  const phoneNumber = "525631799645";
  const message = "Hola DEVNITY, necesito una cotización.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Estilos Inline para asegurar visibilidad absoluta
  const buttonStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    zIndex: 999999,
    width: '64px',
    height: '64px',
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  if (!mounted) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      className="hover:scale-110 active:scale-95"
      aria-label="WhatsApp"
      id="whatsapp-rescue-button"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <FaWhatsapp size={35} style={{ position: 'absolute' }} />
        {/* Fallback visible solo si el icono falla o como respaldo */}
        <span style={{ fontSize: '12px', opacity: 0.8, marginTop: '20px' }}>WA</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
