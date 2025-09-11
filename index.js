document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav || !header) return;

  const setState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('open', open);
    header.classList.toggle('menu-open', open); // oculta el fade cuando el menú está abierto
  };

  // Alternar menú
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setState(open);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setState(false);
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    const clickFuera = !nav.contains(e.target) && !toggle.contains(e.target);
    if (clickFuera) setState(false);
  });

  // Cerrar al seleccionar una opción del menú
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) setState(false);
  });

  // Cerrar al cambiar a viewport de escritorio
  const mq = window.matchMedia('(min-width: 769px)');
  const onResize = () => { if (mq.matches) setState(false); };
  mq.addEventListener ? mq.addEventListener('change', onResize) : mq.addListener(onResize);
});

// Carrusel (nuevo)
(function initCarousels(){
  const root = document.querySelector('#portafolio');
  if (!root) return;

  const track = root.querySelector('.car-track');
  const slides = Array.from(root.querySelectorAll('.car-slide'));
  const prev = root.querySelector('.car-btn.prev');
  const next = root.querySelector('.car-btn.next');
  const dotsWrap = root.querySelector('.car-dots');

  let index = 0;
  let auto = null;
  const delay = 5000;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Crear dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = 'car-dot';
    b.setAttribute('role','tab');
    b.setAttribute('aria-label', `Ir a la diapositiva ${i+1}`);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.querySelectorAll('.car-dot'));

  function goTo(i, user = false){
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((s, si) => {
      s.classList.toggle('is-active', si === index);
      s.setAttribute('aria-label', `${index+1} de ${slides.length}`);
    });
    dots.forEach((d, di) => d.setAttribute('aria-selected', di === index ? 'true' : 'false'));

    if (user) restartAuto();
  }

  function nextSlide(){ goTo(index + 1); }
  function prevSlide(){ goTo(index - 1); }

  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);

  // Teclado
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  // Auto-play
  function startAuto(){
    if (reduced) return;
    stopAuto();
    auto = setInterval(nextSlide, delay);
  }
  function stopAuto(){ if (auto) clearInterval(auto); auto = null; }
  function restartAuto(){ stopAuto(); startAuto(); }

  // Pausar en hover o foco
  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);
  root.addEventListener('focusin', stopAuto);
  root.addEventListener('focusout', startAuto);

  // Pausar si no es visible
  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(en => en.isIntersecting ? startAuto() : stopAuto());
      }, { threshold: 0.2 })
    : null;
  io && io.observe(root);

  // Swipe táctil
  let startX = 0, dx = 0, touching = false;
  const viewport = root.querySelector('.car-viewport');
  viewport.addEventListener('touchstart', (e) => {
    touching = true;
    startX = e.touches[0].clientX;
    dx = 0;
    stopAuto();
  }, {passive:true});
  viewport.addEventListener('touchmove', (e) => {
    if (!touching) return;
    dx = e.touches[0].clientX - startX;
  }, {passive:true});
  viewport.addEventListener('touchend', () => {
    if (!touching) return;
    touching = false;
    const threshold = 50; // px
    if (dx > threshold) prevSlide();
    else if (dx < -threshold) nextSlide();
    startAuto();
  });

  // Iniciar
  goTo(0);
  startAuto();

})();

// Navegación por anclas desde el header (robusto)
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const map = {
    ofertas: '#catalogo',
    promociones: '#promociones',
    promocion: '#promociones',
    promoción: '#promociones',
    promo: '#promociones',
    imagenes: '#portafolio',
    imágenes: '#portafolio',
    'proyectos recientes': '#portafolio',
    proyectos: '#portafolio',
    catalogo: '#catalogo',
    catálogo: '#catalogo',
    contacto: '#contacto'
  };

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      const key = normalize(a.textContent || '');
      const sel = map[key];
      if (!sel) return; // deja pasar enlaces con href real
      e.preventDefault();
      const target = document.querySelector(sel);
      if (!target) return;
      const headerHeight = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 8);
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});

// =========================
// Countdown Promoción (nuevo)
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const promo = document.querySelector('#promociones');
  if (!promo) return;

  const daysEl  = promo.querySelector('[data-cc="days"]');
  const hoursEl = promo.querySelector('[data-cc="hours"]');
  const minsEl  = promo.querySelector('[data-cc="mins"]');
  const secsEl  = promo.querySelector('[data-cc="secs"]');

  // Configura aquí la duración de la promo (ej. 10 días desde ahora)
  const deadline = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  const pad = (n) => String(n).padStart(2,'0');

  function tick(){
    const now = new Date();
    let diff = deadline - now;
    if (diff < 0) diff = 0;

    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / (1000*60)) % 60;
    const hr  = Math.floor(diff / (1000*60*60)) % 24;
    const day = Math.floor(diff / (1000*60*60*24));

    if (daysEl)  daysEl.textContent  = pad(day);
    if (hoursEl) hoursEl.textContent = pad(hr);
    if (minsEl)  minsEl.textContent  = pad(min);
    if (secsEl)  secsEl.textContent  = pad(sec);
  }

  tick();
  const timer = setInterval(() => {
    tick();
    if (new Date() >= deadline) clearInterval(timer);
  }, 1000);
});