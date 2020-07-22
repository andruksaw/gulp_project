var swiper = new Swiper('.header-slider', {
  scrollbar: {
    el: '.header-slider_scrollbar',
    hide: true
  },
  slidesPerView: 1
});
var mySwiper = new Swiper('.header-slider', {
  autoplay: {
    delay: 5000
  },
  reverseDirection: true
});