$(document).ready(function () {
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
});
