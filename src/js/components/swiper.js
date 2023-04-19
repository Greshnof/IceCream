import Swiper, { Navigation, Pagination, Autoplay, EffectFlip, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFlip, EffectFade]);

const swiper = new Swiper('.how__swiper', {
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },
  effect: 'fade',
  speed: 3000,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },
});

const swiper2 = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 3,
  }
});
