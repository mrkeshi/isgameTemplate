import Swiper from 'swiper';
// import Swiper styles

const swiper = new Swiper('#swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '#prevslide',
      prevEl: '#nextslide',
    },

    // And if we need scrollbar

  });

  const swiper2 = new Swiper('#swiper2', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
      el: '#swiper-pagination2',
    },

    // Navigation arrows
    navigation: {
      nextEl: '#prevslide2',
      prevEl: '#nextslide2',
    },

    // And if we need scrollbar

  });
