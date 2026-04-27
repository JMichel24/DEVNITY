"use client";

import React, { useEffect, useState } from 'react';

/**
 * WhatsAppButton - Override Mode (Final Force)
 */
const WhatsAppButton = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("PRODUCTION_HASH: " + Math.random());
  }, []);

  if (!mounted) return null;

  const overrideStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    width: '65px',
    height: '65px',
    backgroundColor: '#25D366',
    zIndex: '2147483647',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <a 
      href="https://wa.me/525631799645" 
      target="_blank" 
      rel="noopener noreferrer"
      style={overrideStyle}
      id="whatsapp-override-button"
    >
      WA
    </a>
  );
};

export default WhatsAppButton;
