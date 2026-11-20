/* Shared helpers: saved language, footer year and reveal animations */
const Lang = {
  key: 'guillem-lang',
  get() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) { /* storage not available */ }
    return 'es'; // Spanish is the default language
  },
  set(language) {
    try { localStorage.setItem(this.key, language); } catch (e) { /* ignore */ }
  }
};

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Subtle fade-up when sections enter the viewport */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);
