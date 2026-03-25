const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const reservationForm = document.getElementById('reservationForm');
const formMessage = document.querySelector('.form-message');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

reservationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(reservationForm);
  const name = data.get('name');

  formMessage.textContent = `Thank you, ${name}! Your request has been received. We'll email confirmation shortly.`;
  reservationForm.reset();
});
