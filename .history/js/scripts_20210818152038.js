$( document ).ready(function() {
    $('.shop_group .top_line').click(function(){
        $(this).closest('.shop_group').toggleClass('active');
    })

    var agrotem_cookies = localStorage.getItem('agrotem_cookies');

    if (agrotem_cookies != 'checked') {
        $(".cookies_wrap").addClass('active');
    }

    $('.cookies_wrap .ok').click(function(){
        $(this).closest('.cookies_wrap').removeClass('active');
        localStorage.setItem('agrotem_cookies', 'checked')
    })

    if($('.counter_number').length){
        $('.counter_number').appear(function () {
            $('.counter_number').countTo();
        });
    }

    $('.call_modal').click(function(){
        var id = $(this).attr('data-id');
        $('.modal_overlay').addClass('active');
        $('body').addClass('no_scroll');
        $('.modal').each(function(){
            if ( $(this).attr('id') == id ) {
                $(this).addClass('active');
            }
        })
    });

    $('.modal_overlay .close, .modal_overlay .color_btn').click(function(){
        $(this).closest('.modal_overlay').removeClass('active');
        $(this).closest('.modal').removeClass('active');
        $('body').removeClass('no_scroll');
    });

    $(".input_wrap input").click(function(){
        $(this).removeClass('invalid, filled');
    })

    $(".input_wrap input").blur(function(){
        $(this).removeClass('invalid');
        if( $(this).val() == '' || $(this).is(":invalid")) {
          $(this).addClass('invalid');
        } else if ( $(this).val() != '' ) {
            $(this).addClass('filled');
        }
    });

    if ( $('.partners_carousel') ) {
        $(".partners_carousel.owl-carousel").owlCarousel({
            items: 7,
            loop: true,
            margin: 75,

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.strategy_gallery') ) {
        $(".strategy_gallery.owl-carousel").owlCarousel({
            items: 4,
            margin: 18,
            nav: true,
            navText: ['', ''],

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.products_carousel') ) {
        $(".products_carousel.owl-carousel").owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['', ''],

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.year_partners_carousel') ) {
        $(".year_partners_carousel.owl-carousel").owlCarousel({
            items: 3,
            margin: 60,
            nav: true,
            navText: ['', ''],

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    $('.call_mob_menu').click(function(){
        $('.mob_menu').toggleClass('active');
        $('body').toggleClass('no_scroll');
        $('.product_menu').removeClass('active');

        if ( $('body.no_scroll') ) {
            $('body').removeClass('no_scroll');
        }
    })

    $('.one_year').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })

    $('.most_popular .line').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })

    $('input, textarea').focus(function(){
        $(this).addClass('filled');
    })

    $('input, textarea').blur(function(){
        if ($(this).val() != '') {
            $(this).addClass('filled');
        } else {
            $(this).removeClass('filled');
        }
    })
});