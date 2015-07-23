$(document).ready(function() {

    $(".english").on('click', function() {
        $('.eng').css('display', 'block');
        $('.jp').css('display', 'none');
    });

    $(".japanese").on('click', function() {
        $('.jp').css('display', 'block');
        $('.eng').css('display', 'none');
    });
});
