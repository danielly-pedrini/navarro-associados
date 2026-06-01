const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () =>
  navbar.classList.toggle('scrolled', scrollY > 60)
);
const observer = new IntersectionObserver(
  entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
