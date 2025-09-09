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