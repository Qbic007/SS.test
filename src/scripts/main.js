$(document).ready(function () {
    let swiper = new Swiper('.slider', {
        navigation: {
            nextEl: '.slider__button_right',
            prevEl: '.slider__button_left',
        },
        effect: 'fade'
    });

    let tabs = new Swiper('.tabs', {
        effect: 'fade'
    });

    let popularTab = $('.popular__tab');

    popularTab.on('click', function () {
        let self = $(this);
        popularTab.removeClass('popular__tab_active');
        self.addClass('popular__tab_active');
        tabs.slideTo(self.data('page'));
    });

    let accoTitleContainer = $('.acco__title-container');

    accoTitleContainer.on('click', function () {
        let self = $(this);
        let accoItem = self.closest('.acco__item');

        accoItem.toggleClass('active');
    })
});
