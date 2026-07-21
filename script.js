const pages = document.querySelectorAll('.page');
const dots  = document.querySelectorAll('.nav-dot');

function goTo(i) {
  pages[i].scrollIntoView({ behavior: 'smooth' });
}

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const i = [...pages].indexOf(e.target);
      dots.forEach(d => d.classList.remove('active'));
      if (dots[i]) dots[i].classList.add('active');
    }
  });
}, { threshold: 0.5 });

pages.forEach(p => io.observe(p));
