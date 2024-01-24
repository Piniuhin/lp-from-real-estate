export default function backToTop() {
  const backToTopBtn = document.querySelector('#backToTop');

  backToTopBtn.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
