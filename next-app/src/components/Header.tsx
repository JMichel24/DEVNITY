"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'MAUI', href: '#maui' },
    { name: 'Polyglot AI', href: '#polyglot' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cotizar', href: '#contacto' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerInit}`}>
      <div className={styles.headerContainer}>
        
        <Link href="#inicio" className={styles.logoLink}>
          <div className="relative w-12 h-12">
            <Image 
              src="/devnity-logo.png" 
              alt="DEVNITY Logo" 
              fill
              className={styles.logoImage}
            />
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.navLink}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileMenuBtnContainer}>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuBtn}
            aria-label="Menú de Navegación"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenuWrapper} ${isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}>
        <div className={styles.mobileMenuContainer}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
