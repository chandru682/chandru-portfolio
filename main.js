// Motion One animations
const { animate } = window.motion;

document.querySelectorAll("[data-animate='fade-up']").forEach((el) => {
  const delay = parseFloat(el.getAttribute("data-delay") || "0");
  el.style.opacity = 0;
  el.style.transform = "translateY(12px)";
  animate(el, { opacity: 1, transform: 'translateY(0px)' }, { delay, duration: 0.6, easing: 'ease-out' });
});

// Tilt effect
document.querySelectorAll('.tilt, .project-card').forEach(card => {
  let rect;
  card.addEventListener('pointermove', (e) => {
    rect = rect || card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = 'rotateX(0) rotateY(0)');
});

// Skill bars
document.querySelectorAll('.bar span').forEach((span) => {
  const pct = parseInt(span.dataset.skill || "0", 10);
  animate(span, { width: pct + "%" }, { duration: 1.2, easing: 'ease-out' });
});

// Contact form -> mailto
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const message = encodeURIComponent(data.get('message'));
    const subject = encodeURIComponent('Portfolio Contact from ' + name);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:chandramohan3472@gmail.com?subject=${subject}&body=${body}`;
  });
}
