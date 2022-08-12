$( document ).ready(function() {
    $('.shop_group .top_line').click(function(){
        $(this).closest('.shop_group').toggleClass('active');
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
            loop: true,
            margin: 75,

            responsive:{
                0:{
                    items: 2
                },
                700:{
                    items: 3
                },
                1000:{
                    items: 5
                },
                1300:{
                    items: 7
                }
            }
        });
    }

    if ( $('.strategy_gallery') ) {
        $(".strategy_gallery.owl-carousel").owlCarousel({
            
            responsive:{
                0:{
                    items: 1,
                    nav: false,
                    dots: false,
                    margin: 0
                },
                700:{
                    items: 2,
                    nav: true,
                    dots: true,
                    navText: ['', ''],
                    margin: 18,
                },
                1000:{
                    items: 3
                },
                1300:{
                    items: 4
                }
            }
        });
    }

    if ( $('.products_carousel') ) {
        $(".products_carousel.owl-carousel").owlCarousel({
            margin: 0,
            loop: true,
            nav: true,
            navText: ['', ''],

            onTranslate: translatedFunc,

            responsive:{
                0:{
                },
                600:{
                },
                1300:{
                    items: 3
                }
            }
        });
    }

    function translatedFunc() {
        $('.products_carousel').toggleClass('translated');
    }

    if ( $('.private_carousel') ) {
        $(".private_carousel.owl-carousel").owlCarousel({
            
            margin: 0,
            loop: true,
            nav: true,
            navText: ['', ''],

            responsive:{
                0:{
                    items: 1,
                },
                600:{
                    items: 3,
                },
                1000:{
                }
            }
        });
    }

    if ( $('.year_partners_carousel') ) {
        $(".year_partners_carousel.owl-carousel").owlCarousel({
            navText: ['', ''],

            responsive:{
                0:{
                    dots: false,
                    items: 1,
                    nav: false,
                    margin: 0,
                },
                600:{
                    dots: true,
                    items: 3,
                    nav: true,
                    margin: 60,
                },
                1000:{
                }
            }
        });
    }

    if ($('.small_picture_box') && $('.small_picture_box .img').length > 2) {
        $(".small_picture_box.owl-carousel").owlCarousel({
            items: 2,
            margin: 10,
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

    if ($('.main_top_carousel')) {
        $(".main_top_carousel.owl-carousel").owlCarousel({
            items: 1,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true
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

    $('.desctop_burger').click(function(){
        $(this).toggleClass('active');
        $('menu').toggleClass('active');
        $('body').toggleClass('no_scroll');
        
    })
    
    if ( $('.phone') ){
        $('.phone').mask('+38 000 000 00 00');
    }

    $('.filter_wrap .line').click(function(){
        $(this).toggleClass('active');
    })

    // particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    //     console.log('callback - particles.js config loaded');
    // });

    $('.product, .our_products.menu').mouseover(function(){
        $('.our_products.menu, .product').addClass('active');
    })

    $('.product, .our_products.menu').mouseout(function(){
        $('.our_products.menu, .product').removeClass('active');
    })
});