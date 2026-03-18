document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav || !header) return;

  const setState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('open', open);
    header.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setState(open);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setState(false);
  });

  document.addEventListener('click', (e) => {
    const clickFuera = !nav.contains(e.target) && !toggle.contains(e.target);
    if (clickFuera) setState(false);
  });

  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) setState(false);
  });

  const mq = window.matchMedia('(min-width: 769px)');
  const onResize = () => { if (mq.matches) setState(false); };
  mq.addEventListener ? mq.addEventListener('change', onResize) : mq.addListener(onResize);
});

// Carrusel
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

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  function startAuto(){
    if (reduced) return;
    stopAuto();
    auto = setInterval(nextSlide, delay);
  }
  function stopAuto(){ if (auto) clearInterval(auto); auto = null; }
  function restartAuto(){ stopAuto(); startAuto(); }

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);
  root.addEventListener('focusin', stopAuto);
  root.addEventListener('focusout', startAuto);

  const io = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(en => en.isIntersecting ? startAuto() : stopAuto());
      }, { threshold: 0.2 })
    : null;
  io && io.observe(root);

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
    const threshold = 50;
    if (dx > threshold) prevSlide();
    else if (dx < -threshold) nextSlide();
    startAuto();
  });

  goTo(0);
  startAuto();
})();

// Navegación por anclas desde el header
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
      if (!sel) return;
      e.preventDefault();
      const target = document.querySelector(sel);
      if (!target) return;
      const headerHeight = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 8);
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});

// Countdown Promoción (Octubre)
document.addEventListener('DOMContentLoaded', () => {
  const promo = document.querySelector('#promociones');
  if (!promo) return;

  const daysEl  = promo.querySelector('[data-cc="days"]');
  const hoursEl = promo.querySelector('[data-cc="hours"]');
  const minsEl  = promo.querySelector('[data-cc="mins"]');
  const secsEl  = promo.querySelector('[data-cc="secs"]');
  const labelEl = promo.querySelector('.promo-deadline');

  const pad = (n) => String(n).padStart(2,'0');

  function getPeriodDates(now){
    const year = now.getFullYear();
    const start = new Date(year, 9, 1, 0, 0, 0, 0);       // 1 Oct 00:00
    const end   = new Date(year, 10, 0, 23, 59, 59, 999); // 31 Oct 23:59:59.999
    return { start, end };
  }

  function tick(){
    const now = new Date();
    const { start, end } = getPeriodDates(now);

    if (now < start){
      if (labelEl) labelEl.textContent = 'Inicia en';
      update(start - now);
      return;
    }
    if (now <= end){
      if (labelEl) labelEl.textContent = 'Termina en';
      update(end - now);
      return;
    }
    if (labelEl) labelEl.textContent = 'Finalizó';
    update(0);
  }

  function update(diff){
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / (1000*60)) % 60;
    const hr  = Math.floor(diff / (1000*60*60)) % 24;
    const day = Math.floor(diff / (1000*60*60*24));
    daysEl.textContent  = pad(day);
    hoursEl.textContent = pad(hr);
    minsEl.textContent  = pad(min);
    secsEl.textContent  = pad(sec);
  }

  tick();
  setInterval(tick, 1000);
});

// Footer: año dinámico
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Contacto: envío real con FormSubmit (AJAX) usando tu ID seguro
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contacto-form');
  const status = document.querySelector('.contact-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const fd = new FormData(form);

    // Validación mínima
    const required = ['nombre', 'email', 'asunto', 'mensaje'];
    for (const key of required){
      if (!String(fd.get(key) || '').trim()){
        status && (status.textContent = 'Por favor completa todos los campos.');
        return;
      }
    }

    status && (status.textContent = '');
    if (btn){ btn.disabled = true; btn.textContent = 'Enviando...'; }

    try{
      const res = await fetch('https://formsubmit.co/ajax/f6968b2386693a97173231174e4a3939', {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok){
        form.reset();
        status && (status.textContent = '¡Mensaje enviado! Te contactaremos pronto.');
      }else{
        status && (status.textContent = 'No pudimos enviar el mensaje. Intenta de nuevo.');
      }
    }catch(err){
      status && (status.textContent = 'Error de red. Intenta nuevamente.');
    }finally{
      if (btn){ btn.disabled = false; btn.textContent = 'Enviar mensaje'; }
      setTimeout(() => { status && (status.textContent = '') }, 5000);
    }
  });
});