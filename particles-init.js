particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#7c3aed' },
    shape: { type: 'circle' },
    opacity: { value: 0.4, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 160, color: '#22d3ee', opacity: 0.3, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 120 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});
