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

window.onscroll = function () {
  var scrrollElem = document.getElementById('scrollTop');

  if (document.body.scrollTop > document.documentElement.clientHeight) {
    scrrollElem.style.opacity = '0';
  } else {
    scrrollElem.style.opacity = '1';
  }
};

var timeOut;

function goUp() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout('goUp()', 20);
  } else {
    clearTimeout(timeOut);
  }
}