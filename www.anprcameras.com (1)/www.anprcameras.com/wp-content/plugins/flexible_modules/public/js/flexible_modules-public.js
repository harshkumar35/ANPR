jQuery(document).ready(function($) {

    /**
     *	Accordian Module Functionality		
     */
    $('.question').click(function() {
        var state = $(this).find('i').hasClass('fa-plus');

        console.log(state);

        if (state) {
            $(this).find('i').removeClass('fa-plus');
            $(this).find('i').addClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus');
            $(this).find('i').addClass('fa-plus');
        }

        $(this).closest('.accordian-wrapper').find('.answer').slideToggle();
    });

});