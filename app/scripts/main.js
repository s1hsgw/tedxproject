$(document).ready(function($) {

    var content = $('.header-content');
    var inner = $('.header-content-inner');

    setTimeout(function() {
        inner.addClass('animated fadeIn').show();
    }, 1000);

    setTimeout(function() {
        content.css('background', 'rgba(0, 0, 0, 0.6)');
    }, 2000);


});
