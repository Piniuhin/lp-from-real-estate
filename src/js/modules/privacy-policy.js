export default function privacypolicy() {
  // Находим все кнопки для открытия и закрытия
  const openButtons = document.querySelectorAll('.js-open');
  const closeButtons = document.querySelectorAll('.js-close');

  // Функция для установки обработчиков событий
  function setupToggle(button, infoSpan) {
    button.addEventListener('click', event => {
      event.preventDefault(); // Предотвращение действия по умолчанию
      infoSpan.classList.toggle('hidden');
      button.classList.toggle('hidden');
    });
  }

  // Проходим по всем кнопкам открытия и устанавливаем обработчики
  openButtons.forEach(openButton => {
    const infoSpan = openButton.nextElementSibling;
    if (infoSpan) {
      setupToggle(openButton, infoSpan);
    }
  });

  // Проходим по всем кнопкам закрытия и устанавливаем обработчики
  closeButtons.forEach(closeButton => {
    const infoSpan = closeButton.parentElement;
    if (infoSpan) {
      closeButton.addEventListener('click', event => {
        event.preventDefault(); // Предотвращение действия по умолчанию
        infoSpan.classList.add('hidden');
        const openButton = infoSpan.previousElementSibling;
        if (openButton && openButton.classList.contains('js-open')) {
          openButton.classList.remove('hidden');
        }
      });
    }
  });
}
