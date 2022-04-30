$(function(){

$('.filters__price-input').ionRangeSlider({
  type: "double",
  prefix: "$",
  onStart: function (data) {
    $('.filters__price-from').text(`$ ${data.from}`);
    $('.filters__price-to').text(`$ ${data.to}`);
},
  onChange: function (data) {
    $('.filters__price-from').text(`$ ${data.from}`);
    $('.filters__price-to').text(`$ ${data.to}`);
},
})



  $('.top-slider__inner').slick({
     arrows: false,
     dots: true,
  });


  var mixer = mixitup('.products__grid');
  var mixer = mixitup('.design__grid');
});