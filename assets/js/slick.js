$(document).ready((function(){$(".center").slick({arrows:false,centerPadding:"60px",slidesToShow:3,responsive:[{breakpoint:768,settings:{arrows:false,centerPadding:"40px",slidesToShow:3}},{breakpoint:480,settings:{arrows:false,centerMode:true,centerPadding:"40px",slidesToShow:1}}]});$("#prev-slide").click((function(){$(".center").slick("slickPrev")}));$("#next-slide").click((function(){$(".center").slick("slickNext")}));$(".center").on("afterChange",(function(event,slick,currentSlide){var totalSlides=slick.slideCount;var slidesToShow=slick.options.slidesToShow;var currentPage=Math.ceil((currentSlide+1)/slidesToShow);var totalPages=Math.ceil(totalSlides/slidesToShow);$("#page-number").text(currentPage+" / "+totalPages)}));$(".center").on("init",(function(event,slick){var totalSlides=slick.slideCount;var slidesToShow=slick.options.slidesToShow;var totalPages=Math.ceil(totalSlides/slidesToShow);$("#page-number").text("1 / "+totalPages)}));function equalHeight(){let maxHeight=0;$(".slick-slide").each((function(){let thisHeight=$(this).outerHeight();if(thisHeight>maxHeight){maxHeight=thisHeight}}));$(".slick-slide").css("height",maxHeight+"px")}$(document).ready((function(){$(".center").on("setPosition",(function(){equalHeight()}))}))}));