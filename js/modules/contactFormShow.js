export default function contactFormShow() {
  const formContainer = document.querySelector('.form-container');
  const openBtn = document.getElementById('open-form');
  const closeBtn = document.getElementById('close-form');

  function toggleFormVisibility(isOpening) {
    formContainer.classList.toggle('translate-x-0', isOpening);
    formContainer.classList.toggle('-translate-x-full', !isOpening);
    openBtn.classList.toggle('hidden', isOpening);
    closeBtn.classList.toggle('hidden', !isOpening);
  }

  function handleOutsideClick(event) {
    if (!formContainer.contains(event.target) && !openBtn.contains(event.target)) {
      toggleFormVisibility(false);
    }
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      toggleFormVisibility(false);
    }
  }

  openBtn.addEventListener('click', () => toggleFormVisibility(true));
  closeBtn.addEventListener('click', () => toggleFormVisibility(false));

  document.addEventListener('click', handleOutsideClick);
  window.addEventListener('keydown', handleEscapeKey);
}
