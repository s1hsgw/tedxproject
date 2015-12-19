(function($) {
    "use strict";
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
    $('nav a.page-scroll').click(function() {
        $('.navbar-toggle:visible').click();
    });
    $('#mainNav').affix({
        offset: {
            top: 300
        }
    })
    new WOW().init();
})(jQuery);
