$(function(){

$('.filters__price-input').ionRangeSlider({
  type: "double",
})



  $('.top-slider__inner').slick({
     arrows: false,
     dots: true,
  });


  var mixer = mixitup('.products__grid');
  var mixer = mixitup('.design__grid');
});