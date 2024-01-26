// export default function contactFormDhow() {
//   const formContainer = document.querySelector('.form-container');
//   const openBtn = document.getElementById('open-form');
//   const closeBtn = document.getElementById('close-form');

//   openBtn.addEventListener('click', function () {
//     formContainer.classList.remove('-translate-x-full');
//     formContainer.classList.add('translate-x-0');
//     openBtn.classList.add('hidden');
//     closeBtn.classList.remove('hidden');
//   });

//   closeBtn.addEventListener('click', function () {
//     formContainer.classList.remove('translate-x-0');
//     formContainer.classList.add('-translate-x-full');
//     openBtn.classList.remove('hidden');
//     closeBtn.classList.add('hidden');
//   });
// }

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

  openBtn.addEventListener('click', () => toggleFormVisibility(true));
  closeBtn.addEventListener('click', () => toggleFormVisibility(false));
}
