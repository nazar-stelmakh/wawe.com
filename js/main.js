$(function(){
  
  $(".menu a, .footer__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  
  Fancybox.bind("[data-fancybox]", {});
  
  $('.slider-blog__items').slick({
    dots: true,
  });
  
  $('.menu__btn, .menu a').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });
  
  var mixer = mixitup('.gallery__items');
});