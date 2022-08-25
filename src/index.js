// import Swiper JS
import Swiper from 'swiper';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
