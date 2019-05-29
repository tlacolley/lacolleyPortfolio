//   <!--  Script for slider For header  -->
// ------------------------------------


var topSwiper = new Swiper('.swiper-background-header', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    autoplayDisableOnInteraction: true,
    speed: 2500,
    loop:true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
  });