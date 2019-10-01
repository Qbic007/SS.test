$(document).ready(function () {
    let asideLinkMenu = $('.aside__link_menu');
    let asideLinkCross = $('.aside__link_cross');
    let mainMenu = $('.main-menu');
    let overlayContainer = $('.overlay__container');
    asideLinkMenu.on('click', function () {
        let self = $(this);
        self.hide();
        asideLinkCross.show();
        overlayContainer.show();
        mainMenu.show();
        mainMenu.animate({opacity: 1}, 300);
    });
    asideLinkCross.on('click', function () {
        let self = $(this);
        self.hide();
        asideLinkMenu.show();
        mainMenu.animate({opacity: 0}, 300, function () {
            mainMenu.hide();
            overlayContainer.hide();
        });
    });

    let asideLinkScrollup = $('.aside__link_scrollup');
    asideLinkScrollup.click(function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
