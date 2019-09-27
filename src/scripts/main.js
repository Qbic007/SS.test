$(document).ready(function () {
    let swiper = new Swiper('.slider', {
        navigation: {
            nextEl: '.slider__button_right',
            prevEl: '.slider__button_left',
        },
        effect: 'fade'
    });
    
    let accoTitleContainer = $('.acco__title-container');
    
    accoTitleContainer.on('click', function () {
        let self = $(this);
        let accoItem = self.closest('.acco__item');

        accoItem.toggleClass('active');
    })
});
