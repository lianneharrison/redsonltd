(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() >= 120) {
                $('#navigation').addClass('active').fadeIn(1000);
            } else {
                $('#navigation').removeClass('active').fadeOut(500);
            }
        });
    });
})(jQuery);