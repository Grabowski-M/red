import $ from 'jquery';

class Interactivity {
  constructor() {
    this.init();
  }

  init() {
    $(".js-header__arrow").click(function() {
      $('html, body').animate({
        scrollTop: $(".content").offset().top
      }, 1000);
    });
  }
}

export default Interactivity;