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

// Modal functions
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageSrc;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
