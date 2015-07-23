'use strict';

$(document).ready(function() {

    $(".english").on('click', function() {
        $('.eng').css('display', 'block');
        $('.jp').css('display', 'none');
    });

    $(".japanese").on('click', function() {
        $('.jp').css('display', 'block');
        $('.eng').css('display', 'none');
    });

    $('.circle-icon-twitter').bind({
        'touchstart': function(e) {
            $(this).removeClass("tw-notouchstyle").addClass("tw-touchstyle");
        },
        'touchend': function(e) {
            $(this).removeClass("tw-notouchstyle").addClass("tw-touchstyle");
        }
    });

    $('.circle-icon-facebook').bind({
            'touchstart': function(e) {
                $(this).removeClass("fb-notouchstyle").addClass("fb-touchstyle");
            },
            'touchend': function(e) {
                $(this).removeClass("fb-notouchstyle").addClass("fb-touchstyle");
            }
    });
});
