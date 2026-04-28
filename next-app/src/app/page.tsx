import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';
import { Bot, Code2, LineChart, Globe, Zap, Languages, Stethoscope } from 'lucide-react';
import styles from '../styles/Page.module.css';
import imgMaui from '../img/MAUI/MAUI.webp';
import imgPolyglot from '../img/Polyglot/Polyglot.webp';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Elementos Decorativos del Fondo */}
      <div className={styles.decorBg}>
          <div className={styles.gridBg}></div>
          <div className={styles.blobTop}></div>
          <div className={styles.blobBottom}></div>
      </div>

      <main className={styles.main}>
        
        {/* --- HERO SECTION --- */}
        <section id="inicio" className={styles.heroSection}>
          <div className={styles.heroContainer}>
              
              <div className={styles.heroBadge}>
                  <span className={styles.badgeDotContainer}>
                    <span className={styles.badgeDotPing}></span>
                    <span className={styles.badgeDotStatic}></span>
                  </span>
                  <span className={styles.badgeText}>El futuro del desarrollo</span>
              </div>

              <h1 className={styles.heroTitle}>
                  Calidad web, <br />
                  <span className="text-gradient font-black italic pr-3">accesible para todos</span>
              </h1>

              <p className={styles.heroSubtitle}>
                  Soluciones disruptivas desde Querétaro, México para el mundo
              </p>

               <div className={styles.quickNavContainer}>
                   <a href="#maui" className={styles.quickCard}>
                       <span className={styles.quickCardTitle}>MAUI</span>
                       <span className={styles.quickCardDesc}>IA para Veterinarias</span>
                   </a>

                   <a href="#polyglot" className={styles.quickCard}>
                       <span className={styles.quickCardTitle}>Polyglot AI</span>
                       <span className={styles.quickCardDesc}>Aprendizaje de Idiomas con IA</span>
                   </a>

                   <a href="#servicios" className={styles.quickCard}>
                       <span className={styles.quickCardTitle}>Web Design</span>
                       <span className={styles.quickCardDesc}>Diseño Web de Alto Impacto</span>
                   </a>
               </div>

               <div className="pt-8">
                  <a href="#contacto" className={styles.btnWrapper}>
                      <div className={styles.btnPrimary}>
                          Cotizar Web Directo
                      </div>
                  </a>
               </div>

          </div>
        </section>

        {/* --- STATS / SOCIAL PROOF SECTION --- */}
        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statIconWrapper}>
                  <Stethoscope className={styles.statIconMaui} />
                </div>
                <h4 className={styles.statNumber}>+1,500</h4>
                <p className={styles.statLabel}>Vacunas Gestionadas (MAUI)</p>
              </div>
              <div className={styles.statItemBordered}>
                <div className={styles.statIconWrapper}>
                  <Languages className={styles.statIconPolyglot} />
                </div>
                <h4 className={styles.statNumber}>+500</h4>
                <p className={styles.statLabel}>Horas de Tutoría Generadas</p>
              </div>
              <div className={styles.statItemBordered}>
                <div className={styles.statIconWrapper}>
                  <LineChart className={styles.statIconWeb} />
                </div>
                <h4 className={styles.statNumber}>99.9%</h4>
                <p className={styles.statLabel}>Uptime en Proyectos Web</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- AI SOLUTIONS (MAUI & POLYGLOT) --- */}
        <section id="proyectos" className={styles.solutionsSection}>
            <div className={styles.solutionsBgLine}></div>
            <div className={styles.solutionsContainer}>
                
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Nuestras Soluciones de IA
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Transformando industrias a través de algoritmos inteligentes
                    </p>
                    <div className={styles.sectionLine}></div>
                </div>

                <div className={styles.solutionsGrid}>
                    {/* MAUI */}
                    <div id="maui" className={styles.solutionCard}>
                        <img 
                            src={imgMaui.src} 
                            alt="MAUI Project" 
                            loading="lazy" 
                            className="w-full object-cover aspect-[16/9] rounded-t-3xl" 
                        />
                        <div className={styles.solutionContent}>
                            <div className={styles.solutionHeader}>
                                <div className={styles.solutionIconBox}>
                                    <Bot className={styles.statIconMaui} />
                                </div>
                                <span className={styles.solutionBadge}>
                                    Vertical AI
                                </span>
                            </div>
                            <div className={styles.solutionBody}>
                                <h3 className={styles.solutionTitle}>MAUI</h3>
                                <h4 className={styles.solutionSub}>Para Clínicas Veterinarias</h4>
                                <p className={styles.solutionDesc}>
                                    La primera IA vertical diseñada para revolucionar la gestión veterinaria. Automatiza inventarios mediante <strong className="text-white">visión artificial</strong> y optimiza la agenda con asistentes de voz inteligentes. Detén la fuga de capital y recupera el control total de tu clínica.
                                </p>
                            </div>
                            <div className={styles.solutionFooter}>
                                <a href="#contacto" className={styles.btnWrapper}>
                                    <div className={styles.btnPrimary}>
                                        Pedir Informes
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Polyglot AI */}
                    <div id="polyglot" className={styles.solutionCard}>
                        <img 
                            src={imgPolyglot.src} 
                            alt="Polyglot AI Project" 
                            loading="lazy" 
                            className="w-full object-cover aspect-[16/9] rounded-t-3xl" 
                        />
                        <div className={styles.solutionContent}>
                            <div className={styles.solutionHeader}>
                                <div className={styles.solutionIconBox}>
                                    <Languages className="w-8 h-8 text-white group-hover:text-electricturquoise transition-colors" />
                                </div>
                                <span className={styles.solutionBadgePolyglot}>
                                    EdTech
                                </span>
                            </div>
                            <div className={styles.solutionBody}>
                                <h3 className={styles.solutionTitle}>Polyglot AI</h3>
                                <h4 className={styles.solutionSub}>Language Learning Revolution</h4>
                                <p className={styles.solutionDesc}>
                                    La revolución del aprendizaje de idiomas. Tutoría impulsada por <strong className="text-white">modelos generativos</strong> que adaptan el currículo en tiempo real al progreso del estudiante. Habla con fluidez y rompe las fronteras del lenguaje con IA adaptativa.
                                </p>
                            </div>
                            <div className={styles.solutionFooter}>
                                <a href="#contacto" className={styles.btnWrapper}>
                                    <div className={styles.btnPrimary}>
                                        Pedir Informes
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- WEB SERVICES SECTION --- */}
        <section id="servicios" className={styles.servicesSection}>
            <div className="absolute inset-0 bg-neural-network mix-blend-screen opacity-70 pointer-events-none"></div>
            
            <div className={styles.servicesContainer}>
                <div className={styles.servicesTextCol}>
                    <span className={styles.servicesOverline}>Ecosistema Moderno</span>
                    <h2 className={styles.servicesTitle}>
                        Desarrollo <span className={styles.servicesTitleAccent}>Web</span> High-End
                    </h2>
                    <div className={styles.servicesLine}></div>
                    <p className={styles.servicesDesc}>
                        Arquitecturas escalables, ultrarrápidas y con el mejor diseño UI/UX. Ya sea una Landing Page impactante o una Single Page Application completa en React/Next.js.
                    </p>
                    <div className={styles.priceBadge}>
                      <Zap className="w-8 h-8 text-yellow-400" />
                      <div>
                        <p className={styles.priceTitle}>Desde $4,999 MXN</p>
                        <p className={styles.priceSub}>*Cotizado según requerimientos</p>
                      </div>
                    </div>
                </div>
                
                <div className={styles.servicesGrid}>
                     <div className={styles.serviceBox}>
                        <Globe className="w-8 h-8 text-electricturquoise mb-4" />
                        <h4 className={styles.serviceBoxTitle}>Landing Pages</h4>
                     </div>
                     <div className={styles.serviceBox}>
                        <Code2 className="w-8 h-8 text-electricviolet mb-4" />
                        <h4 className={styles.serviceBoxTitle}>Web Apps SPA</h4>
                     </div>
                </div>
            </div>
        </section>

        {/* --- CONTACT / FORMSPREE SECTION --- */}
        <section id="contacto" className={styles.contactSection}>
            <div className={styles.contactContainer}>
               <div className={styles.sectionHeader}>
                    <span className={styles.servicesOverline}>Inicia tu Proyecto</span>
                    <h2 className={styles.servicesTitle}>
                        Hagamos equipo
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Contáctanos por correo o a través de WhatsApp para dar el primer paso hacia tu siguiente gran producto.
                    </p>
               </div>

               <ContactForm />
            </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
