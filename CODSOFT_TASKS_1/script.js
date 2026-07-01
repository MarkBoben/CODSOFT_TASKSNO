// Fill each sauce's heat gauge to a width proportional to its real SHU rating,
// once the card scrolls into view.

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.sauce-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const shu = parseFloat(card.dataset.shu);
        const max = parseFloat(card.dataset.max);
        const fill = card.querySelector('.gauge-fill');
        const pct = Math.min(100, (shu / max) * 100);

        // slight delay so the fill animation is visible on entry
        requestAnimationFrame(() => {
          setTimeout(() => {
            fill.style.width = pct + '%';
          }, 100);
        });

        observer.unobserve(card);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach((card) => observer.observe(card));
});
