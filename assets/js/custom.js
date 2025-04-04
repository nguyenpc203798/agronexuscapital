(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#js-preloader").addClass("loaded");
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var carouselElement = $(".carouselcustom");
    if (carouselElement.length) {
      var carouselOffset = carouselElement.offset().top;
      if (scroll > carouselOffset) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    }
  });
  $(".owl-banner").owlCarousel({
    center: !0,
    items: 1,
    loop: !0,
    nav: !0,
    dots: !0,
    autoplay: !0,
    autoplayTimeout: 10000,
    autoplayHoverPause: !0,
    smartSpeed: 800,
    slideTransition: "linear",
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: { 992: { items: 1 }, 1200: { items: 1 } },
  });
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }
  $(window).on("load", function () {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1",
      });
    }
    $("#preloader").animate({ opacity: "0" }, 600, function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  });
  new WOW().init();
})(window.jQuery);
