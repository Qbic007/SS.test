$(document).ready(function () {
    let accoTitleContainer = $('.acco__title-container');
    accoTitleContainer.on('click', function () {
        let self = $(this);
        let accoItem = self.closest('.acco__item');

        accoItem.toggleClass('active');
    });
});
