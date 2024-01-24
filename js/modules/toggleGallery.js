export default function toggleGallery() {
  const expandButton = document.getElementById('expandButton');
  const collapseButton = document.getElementById('collapseButton');
  const extraImages = document.getElementById('extraImages');

  expandButton.addEventListener('click', function () {
    extraImages.classList.remove('hidden');
    extraImages.classList.add('grid');
    this.classList.add('hidden');
    collapseButton.classList.remove('hidden');
  });

  collapseButton.addEventListener('click', function () {
    extraImages.classList.remove('grid');
    extraImages.classList.add('hidden');
    this.classList.add('hidden');
    expandButton.classList.remove('hidden');
  });
}
