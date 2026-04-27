"use client";

import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * WhatsAppButton - Rescue Mode (Brute Force CSS)
 */
const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("🚀 Botón de WhatsApp montado correctamente (CSS Brute Force)");
  }, []);

  const buttonStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    zIndex: 999999,
    textDecoration: 'none'
  };

  if (!mounted) return null;

  return (
    <a 
      href='https://wa.me/525631799645' 
      target='_blank' 
      rel='noopener noreferrer'
      style={buttonStyle}
      id="whatsapp-brute-force"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <FaWhatsapp size={35} />
        <span style={{ 
          fontSize: '10px', 
          position: 'absolute', 
          bottom: '-12px', 
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>WA</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
