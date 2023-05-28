jQuery(document).ready(function($) {

    $('.menu-toggle').click(function() {
        $('.mobilemenu').fadeIn();
        $('.mobilemenu .inner').addClass('active');
    });

    $('.mobilemenu .exit').click(function() {
        if ($(this).hasClass('active')) {
            $('.mobilemenu span').html('Menu /');
            $('#mobile-menu .sub-menu').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.mobilemenu').fadeOut();
            $('.mobilemenu .inner').removeClass('active');
        }
    });

    $('#mobile-menu .menu-item-has-children').append('<div class="arrow"><i class="fa fa-chevron-right"></i></div>');

    $('body').on('click', '#mobile-menu li', function() {
        var title = $(this).closest('li').find('a').html();
        $('.mobilemenu span').html('Menu / ' + title);
        $('.mobilemenu .exit').addClass('active');
        $(this).closest('li').find('> .sub-menu').addClass('active');
    });

    $('.menu li').mouseenter(function() {
        var pos = $(this).position();
        var width = $(this).width();
        $('.site-header .underline').css('width', pos.left + width - 10);
    }).mouseleave(function() {
        $('.site-header .underline').css('width', '0px');
    });

    $('#menu-item-4584 a').click(function(e) {
        e.preventDefault();
        $('.megamenu').slideToggle();
    });

    $(document).click(function(event) {
        var $target = $(event.target);
        if ($target.parent().attr('id') != 'menu-item-4584') {
            $('.megamenu').slideUp();
        }
    });

});