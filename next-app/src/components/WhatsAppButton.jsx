"use client";

import React, { useEffect, useState } from 'react';

/**
 * WhatsAppButton - Shielded Mode (Phase 1 & 2)
 * Eliminates all external dependencies and forces visibility with maximum zIndex.
 */
const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("SYNC_OK_" + Date.now());
  }, []);

  if (!mounted) return null;

  const shieldStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    width: '65px',
    height: '65px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2147483647, // Maximum possible zIndex
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <a 
      href="https://wa.me/525631799645" 
      target="_blank" 
      rel="noopener noreferrer"
      style={shieldStyle}
      id="whatsapp-shielded-button"
    >
      WA
    </a>
  );
};

export default WhatsAppButton;
