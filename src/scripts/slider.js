$(document).ready(function () {
    let swiper = new Swiper('.slider', {
        navigation: {
            nextEl: '.slider__button_right, .slider__preview',
            prevEl: '.slider__button_left',
        },
        effect: 'fade'
    });
    swiper.on('slideChangeTransitionEnd', function () {
        sliderPreviewGetImage();
    });

    let sliderPreview = $('.slider__preview');

    function sliderPreviewGetImage() {
        let swiperSlideNext = $('.swiper-slide-next');
        let nextImg = swiperSlideNext.find('.slider_img');
        sliderPreview.css('backgroundImage', nextImg.css("background-image"));
    }

    sliderPreviewGetImage();
});
