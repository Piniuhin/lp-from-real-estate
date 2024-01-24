export default function initSwiper() {
  const swiper = new Swiper('.mySwiper', {
    navigation: {
      nextEl: '.swiper-button-next-ph',
      prevEl: '.swiper-button-prev-ph',
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  swiper.on('slideChange', function () {
    if (swiper.isEnd) {
      swiper.autoplay.stop();
    }
  });
}
