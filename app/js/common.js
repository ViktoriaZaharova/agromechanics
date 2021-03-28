$('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});
