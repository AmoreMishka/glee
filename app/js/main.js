$(function () {
  $('.product-related__slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });


  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-item__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });


  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('.catalog-content__filter-btn--active');
    $(this).addClass('.catalog-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
    $('.pagination').addClass('pagination--list');
  });

  $('.button-grid').on('click', function () {
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
    ratedFill: "#ffcc00",
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });


  var mixer = mixitup('.products__grid');
  var mixer = mixitup('.design__grid');
});
