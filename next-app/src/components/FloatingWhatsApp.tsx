"use client";

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const phoneNumber = '525500000000';
  const message = 'Hola Jorge, vi la página de DEVNITY y quiero cotizar un proyecto';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingWhatsApp}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Link>
  );
}
