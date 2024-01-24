export default function initSwiper() {
  new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next-ph',
      prevEl: '.swiper-button-prev-ph',
    },
  });
}
