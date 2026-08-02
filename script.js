document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------
  // 1. Lógica de Dark / Light Mode (Inicio por defecto: DARK)
  // --------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('.theme-icon');

  // Si hay un tema guardado en localStorage, usa ese. Si no, usa 'dark' por defecto.
  const savedTheme = localStorage.getItem('portfolio-theme');
  const initialTheme = savedTheme || 'dark'; // <--- AQUÍ ESTÁ EL CAMBIO

  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
  // --------------------------------------------------
  // 2. Lógica del Menú Hamburguesa Responsive
  // --------------------------------------------------
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  // Abrir / Cerrar menú
  menuToggleBtn.addEventListener('click', () => {
    menuToggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic en cualquier enlace
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggleBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });


  const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-on-scroll');
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .specialization-card, .project-card, .experience-card, .education-card').forEach(el => {
  el.classList.add('hide-before-scroll');
  observer.observe(el);
});
});