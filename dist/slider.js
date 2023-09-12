import Swiper from 'swiper';
import { Pagination,Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


if(document.getElementById('shop_slider')){
  const swiper = new Swiper('#swiper', {
    // Optional parameters
    modules: [Navigation],
    loop: false,

    // If we need pagination
  

    // Navigation arrows
    navigation: {
      nextEl: '#prevslide',
      prevEl: '#nextslide',
    },

    // And if we need scrollbar

  });

}else{
  const swiper = new Swiper('#swiper', {
    // Optional parameters
    modules: [ Pagination,Navigation],
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
    modules: [ Pagination,Navigation],
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
}