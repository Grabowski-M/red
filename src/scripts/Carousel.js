import $ from 'jquery';
import 'slick-carousel';

class Carousel {
  constructor() {
    this.init();
  }

  init() {
    this.initCarousel();
  }

  initCarousel() {
    $('.section__work__carousel').slick({
      dots: true,
      infinity: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '',
      nextArrow: '',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

export default Carousel;