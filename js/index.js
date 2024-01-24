import mobileMenu from './modules/mobileMenu';
import initSwiper from './modules/swiper';
import { initAnimateElements } from './modules/animationElements';
import backToTop from './modules/backToTop';

import '../main.css';
require('fslightbox');
document.addEventListener('DOMContentLoaded', () => {
  mobileMenu();
  initSwiper();
  initAnimateElements();
  backToTop();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
