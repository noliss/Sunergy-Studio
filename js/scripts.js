$('.faq__block').on('click', '.faq__item', function() {
  var answer = $(this).find('.faq__answer');
  $(this).siblings().find('.faq__answer').slideUp();
  answer.slideToggle();
  $(this).toggleClass('faq__item--active');
  $(this).siblings().removeClass('faq__item--active');
});

// Бургер
$('.header-menu__mobile-burger').click(function() {
  console.log('123');
  $('.header-menu__mobile-burger').toggleClass('open-menu');
  $('.header-menu__mobile-nav').toggleClass('header-menu__mobile-nav--hidden');
});

// 
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});