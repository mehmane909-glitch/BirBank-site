const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  loop: true,
  speed: 600,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev'
  }
});
