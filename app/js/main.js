$(function(){
$('.catalog-content__filter-btn').on('click', function(){
 $('.catalog-content__filter-btn').removeClass('.catalog-content__filter-btn--active');
 $(this).addClass('.catalog-content__filter-btn--active');
});

$('.button-list').on('click', function(){
  $('.product-card').addClass('product-card--list');
  $('.pagination').addClass('pagination--list');
});

$('.button-grid').on('click', function(){
  $('.product-card').removeClass('product-card--list');
  $('.pagination').removeClass('pagination--list');
});

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

$(".star").rateYo({
  readOnly: true,
  starWidth: "12px",
  normalFill: "#d6d6d6",
  ratedFill:"#ffcc00",
});

  $('.top-slider__inner').slick({
     arrows: false,
     dots: true,
  });


  var mixer = mixitup('.products__grid');
  var mixer = mixitup('.design__grid');
});