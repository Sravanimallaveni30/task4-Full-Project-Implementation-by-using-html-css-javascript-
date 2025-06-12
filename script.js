document.addEventListener('DOMContentLoaded', () => {
  /* Dynamic year in footer */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* Mobile nav toggle */
  const toggleBtn = document.querySelector('.toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});
