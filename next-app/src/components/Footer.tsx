import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <svg className={styles.logoIcon} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className={styles.brandTitle}>DEVNITY</span>
            </div>
            <p className={styles.brandDesc}>
              Arquitectura de Software e Inteligencia Artificial al Infinito.
            </p>
          </div>

          <div>
             <h4 className={styles.colTitle}>Productos</h4>
             <ul className={styles.colList}>
               <li><a href="#maui" className={styles.listLink}>MAUI (IA para Clínicas)</a></li>
               <li><a href="#polyglot" className={styles.listLink}>Polyglot AI</a></li>
             </ul>
          </div>

          <div>
             <h4 className={styles.colTitle}>Servicios</h4>
             <ul className={styles.colList}>
               <li><a href="#web" className={styles.listLink}>Diseño y Desarrollo Web</a></li>
               <li><a href="#ia" className={styles.listLink}>Consultoría en IA</a></li>
             </ul>
          </div>

          <div>
             <h4 className={styles.colTitle}>Contacto</h4>
             <ul className={styles.colList}>
               <li className={styles.contactItem}>
                 <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 Querétaro, México (HQ)
               </li>
               <li>info@devnity.com</li>
             </ul>
          </div>
        </div>

        <div className={styles.copyrightSection}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} DEVNITY. Todos los derechos reservados.
          </p>
          <p className={styles.badgeCredits}>
            Creado por Jorge Michel | Ingeniería en Tecnologías Computacionales
          </p>
        </div>
      </div>
    </footer>
  );
}
