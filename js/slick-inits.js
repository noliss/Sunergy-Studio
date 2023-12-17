$(document).ready(function(){
  $('.studio-slider').slick({
    prevArrow: "<img class='slick__arrow--left' src='../icons/arrow-left.svg' />",
    nextArrow: "<img class='slick__arrow--right' src='../icons/arrow-right.svg' />",
    arrows: false,
    dots: true,
  });
  $('.slider-four__slider').slick({
    prevArrow: "<img class='slick__arrow--left' src='../icons/arrow-left.svg' />",
    nextArrow: "<img class='slick__arrow--right' src='../icons/arrow-right.svg' />",
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });
  $('.interview-slider').slick({
    prevArrow: "<img class='slick__arrow--left' src='../icons/arrow-left.svg' />",
    nextArrow: "<img class='slick__arrow--right' src='../icons/arrow-right.svg' />",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1256,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 867,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    // centerMode: true,
    // centerPadding: '40px',
  });
  $('.reels-examples__slider').slick({
    prevArrow: "<img class='slick__arrow--left' src='../icons/arrow-left.svg' />",
    nextArrow: "<img class='slick__arrow--right' src='../icons/arrow-right.svg' />",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1256,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 867,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  })
});