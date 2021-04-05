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

// активная ссылка меню
$('.submenu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

new WOW().init();

$('[name="phone"]').mask('+7 (999) 999-99-99');
