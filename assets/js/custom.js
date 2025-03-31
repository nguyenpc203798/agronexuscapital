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
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    margin: 30,
    responsive: { 992: { items: 1 }, 1200: { items: 1 } },
  });
//   var width = $(window).width();
//   $(window).resize(function () {
//     if (width > 767 && $(window).width() < 767) {
//       location.reload();
//     } else if (width < 767 && $(window).width() > 767) {
//       location.reload();
//     }
//   });
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }
  $(".scroll-to-section a[href*=\\#]:not([href=\\#])").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        var width = $(window).width();
        if (width < 1100) {
          $(".menu-trigger").removeClass("active");
          $(".header-area .nav").slideUp(200);
        }
        $("html,body").animate({ scrollTop: target.offset().top - 80 }, 700);
        return !1;
      }
    }
  });
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
