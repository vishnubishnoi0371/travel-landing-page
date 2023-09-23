// section3
$('.slick-slider-section3').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
        {
            breakpoint: 1265,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
