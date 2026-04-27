"use client";

import React, { useEffect, useState } from 'react';

/**
 * WhatsAppButton - Blind Rescue Mode (Pure Inline CSS)
 */
const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a 
      href="https://wa.me/525631799645" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none'
      }}
    >
      W
    </a>
  );
};

export default WhatsAppButton;
