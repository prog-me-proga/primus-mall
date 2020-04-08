// animated menu btn
$(document).ready(function() {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function() {
    $(this).toggleClass("open");
  });
});
// sidenavbar
$(function() {
  $("#nav-icon1").click(function() {
    $(".header__menu_sm").toggleClass("active");
    $(console.log("hey"));
  });

  $(window).resize(function() {
    if ($(window).width() < 992) {
      $(".header__menu_sm").removeClass("active");
    }
  });
});
// slick slider
$(".header__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  focusOnSelect: false,
  adaptiveHeight: true
});
$(".header__sliderbg").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  focusOnSelect: false,
  adaptiveHeight: true
});
// slider for cloothes
$(".clothes__slider").slick({
  lazyLoad: "ondemand",
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow' label='<'><i class='fas fa- chevron - circle - left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow' label='>'><i class='fas fa- chevron - circle - right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// slider for shoes
$(".shoes__slider").slick({
  lazyLoad: "ondemand",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  prevArrow:
    "<button type='button' class='slick-prev slick-arrow' label='<'><i class='fas fa- chevron - circle - left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next slick-arrow' label='>'><i class='fas fa- chevron - circle - right'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slider for brand centered mode
$('.brand__slider').slick({
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  slidesToShow: 5,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});