jQuery(document).ready(function($) {

    $('.policies ul.tabs li').click(function() {
        var id = $(this).data('id');
        $('.policies ul.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.policies .content').hide();
        $('.policies .content[data-id="' + id + '"]').fadeIn();
    });

    $('.iqx-cards .row').slick({
        slidesToShow: 1.25,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 99999,
                settings: "unslick",

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],
    });

    $('.rapier-range-models .row').slick({
        slidesToShow: 1.25,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 99999,
                settings: "unslick",

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ],
    });

    $('.sidebar .exit').click(function() {
        $('.sidebar').removeClass('active');
    });

    /**
     * Contact page scroll to enquire
     */
    $('.scroll-to-enquire').click(function(e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#enquire").offset().top - 100
        }, 800);
    });

    /**
     * Tawk To Popup
     */
    $('.live-chat').click(function() {
        Tawk_API.toggle();
    });

    /**
     * Rapier Range Slick
     */
    $('.rapier-range-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    /**
     * Login
     */
    $('a.register_user').click(function(e) {
        e.preventDefault();
        $('.user-login').hide();
        $('.register-user').fadeIn();
    });

    $('a.user_login').click(function(e) {
        e.preventDefault();
        $('.register-user').hide();
        $('.user-login').fadeIn();
    });

    /**
     * Part Numbers
     */
    $('.part-numbers-content .search-wrapper input').on('keyup', function() {
        var val = $(this).val();
        if (val != "") {
            $('.part-numbers-content .greybg span:nth-child(1)').each(function() {
                var span = $(this).html();
                if (span.toUpperCase().includes(val.toUpperCase())) {
                    $(this).closest('.wrapper').show();
                } else {
                    var model = $(this).closest('div').find('span:nth-child(2)').html();
                    if (model.toUpperCase().includes(val.toUpperCase())) {
                        $(this).closest('.wrapper').show();
                    } else {
                        $(this).closest('.wrapper').hide();
                    }
                }
            });
        } else {
            $('.part-numbers-content .greybg .wrapper').show();
        }
    });

    /** 
     * ANPR Definitions
     */
    $('.definitions-content .search-wrapper input').on('keyup', function() {
        var val = $(this).val();
        if (val != "") {
            $('.definitions-content .greybg span').each(function() {
                var span = $(this).html();

                if (span.toUpperCase().includes(val.toUpperCase())) {
                    $(this).closest('.wrapper').show();
                } else {
                    $(this).closest('.wrapper').hide();
                }
            });
        } else {
            $('.definitions-content .greybg .wrapper').show();
        }
    });

    /**
     * MAV Technology
     */
    $('.mav-technology-dropdowns .greybg .top').click(function() {
        $(this).find('i').toggleClass('fa-angle-down fa-times');
        $(this).closest('.greybg').find('.bottom').slideToggle();
    });

    /** 
     * Homepage / about-us wheel
     */
    $('.about-us .node_hover').click(function() {
        var id = $(this).attr('id');
        var val = id.replace('node_', '');
        $('.about-us .node_hover').removeClass('active');
        $(this).addClass('active');
        $('#mav_node_circle').fadeOut();
        $('.information_node').fadeOut();
        $('.information_node[data-id="' + val + '"]').fadeIn();
    });

    /**
     * Sidebar enquiry
     */
    $('.sidebar .enquire-btn').click(function() {
        $('.sidebar').toggleClass('active');
    });

    /**
     * Display Enquiry Success
     */
    if ($('.gform_confirmation_message').length > 0) {
        $('.sidebar').toggleClass('active');
        var html = $('.notification-enquiry').html();
        $('.sidebar .whitebg').html(html);
    }

    /**
     * Enable Rellax
     */
    $(window).ready(function() {
        var rellax = new Rellax('.rellax', {
            center: true,
        });
    });

    /**
     * REmove me later
     * This is the mark up hashtags within footer menus
     * to alert bradley whats missing
     */
    $('.site-footer a[href="#"]').css('color', '#0DD0FF');

    /**
     * @faqs
     */
    $('.faqs-accordian .question').click(function() {
        $(this).closest('.faqs-accordian').find('.answer').slideToggle();
        $(this).closest('.faqs-accordian').toggleClass('active');
    });

    /**
     * who-are-we
     * Team Member Popup
     */
    $('.team_member').click(function() {

        $img = $(this).find('img').attr('src');
        $name = $(this).find('.name').html();
        $role = $(this).find('.role').html();
        $content = $(this).find('.bio').val();
        $qna = $(this).find('.qna').html();

        $('.blackout-team img').attr('src', $img);
        $('.blackout-team .name').html($name);
        $('.blackout-team .role').html($role);
        $('.blackout-team .content').html($content);
        $('.blackout-team .repeater').html($qna);

        $('.blackout-team').fadeIn();
    });

    $('.blackout-team .exit').click(function() {
        $('.blackout-team').fadeOut();
    });

    $('.blackout-team i').click(function() {
        $('.blackout-team i').toggleClass('fa-minus fa-plus');
        $('.blackout-team .repeater').toggle();
        $('.blackout-team .content').toggle();
    });


    //counter speed
    var speed = 40;

    //set elements in order
    var one = $('.image-capture');
    var two = $('.lane-coverage');
    var three = $('.view-distance');

    var oneEnd = $('.image-capture').html();
    var twoEnd = $('.lane-coverage').html();
    var threeEnd = $('.view-distance').html();

    var a = 0;
    var b = 0;
    var c = 0;

    $('.image-capture').html('');
    $('.lane-coverage').html('');
    $('.view-distance').html('');

    jQuery(window).scroll(function() {

        /**
         *	Product Sum Rollers
         *  Animate the numbers counting up	
         *  @disp content-iq-range-page.php
         */
        if ($('.product-sums').length > 0) {
            var sumSection = $('.product-sums').offset().top;
        }

        if ($(window).scrollTop() > sumSection - 550) {

            var timer1 = setInterval(function() {
                if (a < oneEnd) {
                    a++;
                    one.html(a);
                } else {
                    clearInterval(timer1);
                }
            }, 1000);

            var timer2 = setInterval(function() {
                if (b < twoEnd) {
                    b++;
                    two.html(b);
                } else {
                    clearInterval(timer2);
                }
            }, 1000);

            var timer3 = setInterval(function() {
                if (c < threeEnd) {
                    c++;
                    three.html(c + ' million');
                } else {
                    clearInterval(timer3);
                }
            }, 1000);

        }

    }); // End window.scroll

    /*
     * Customize Product
     */
    function customise_product() {

        var t = this;

        t.body = $('body');

        t.params = {};

        t.init = function() {

            t.show_form();
            t.close();

            t.params.title = t.body.find('.customize-product h1').html();

            if (t.params.title == 'Unsure about which ANPR camera is best for your solution?') {
                t.get_rapier_customisation(); //Additional Fields
                t.get_iqx_customisation(); //Include this as same fields
                t.find_your_camera();
                return;
            }

            if (t.params.title == 'Rapier Range') {
                t.get_rapier_customisation(); //Additional Fields
                t.get_iqx_customisation(); //Include this as same fields
                return;
            }

            if (t.params.title == 'IQX Range' || t.params.title == 'IQ Range') {
                t.get_iqx_customisation();
                return;
            }
        }

        t.find_your_camera = function() {
            t.body.on('click', '.find-your-camera', function() {

                var $html = '';
                if (typeof t.params.finish == "undefined") {
                    alert('Please select your finish');
                    return;
                }

                if (typeof t.params.fov == "undefined") {
                    alert('Please select your FoV');
                    return;
                }

                if (typeof t.params.distance == "undefined") {
                    alert('Please select your distance');
                    return;
                }

                if (typeof t.params.router == "undefined") {
                    alert('Please select if you require a router');
                    return;
                }

                if (typeof t.params.storage == "undefined") {
                    alert('Please select if your require Internal Storage');
                    return;
                }

                if (t.params.title != 'Unsure about which ANPR camera is best for your solution?') {
                    $html = 'Camera: ' + t.params.title + "\n";
                }

                $html += 'Finish: ' + t.params.finish + "\n";
                $html += 'Field of View: ' + t.params.fov + "\n";
                $html += 'Distance: ' + t.params.distance + "\n";
                $html += 'Router: ' + t.params.router + "\n";
                $html += 'Internal Data Storage: ' + t.params.storage + "\n";

                if (t.params.title == 'Rapier Range' || t.params.title == 'Unsure about which ANPR camera is best for your solution?') {

                    if (typeof t.params.housing == "undefined") {
                        alert('Please select your compact housing');
                        return;
                    }

                    if (typeof t.params.type == "undefined") {
                        alert('Please select your camera type');
                        return;
                    }

                    $html += 'Compact Housing: ' + t.params.housing + "\n";
                    $html += 'Camera Type: ' + t.params.type + "\n";

                }

                t.body.find('.blackout-customize').fadeIn();
                t.body.find('#gform_5 #input_5_6').val($html);

            });
        }

        t.get_rapier_customisation = function() {

            t.body.on('click', '.camera_type .inner-option', function() {
                $('.camera_type .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.type = $(this).find('span').html();
                t.body.find('.overview .camera_type').html(t.params.type);
            });

            t.body.on('click', '.camera_type .skip', function() {
                $('.camera_type .inner-option').removeClass('active');
                t.params.type = 'Skipped';
                t.body.find('.overview .camera_type').html(t.params.type);
            });

            t.body.on('click', '.compact_housing .inner-option', function() {
                $('.compact_housing .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.housing = $(this).find('span').html();
                t.body.find('.overview .compact_housing').html(t.params.housing);
            });

            t.body.on('click', '.compact_housing .skip', function() {
                $('.compact_housing .inner-option').removeClass('active');
                t.params.housing = 'Skipped';
                t.body.find('.overview .compact_housing').html(t.params.housing);
            });

        }

        t.show_form = function() {
            var $html = '';
            t.body.on('click', '.submit-customize', function() {

                if (typeof t.params.finish == "undefined") {
                    alert('Please select your finish');
                    return;
                }

                if (typeof t.params.fov == "undefined") {
                    alert('Please select your FoV');
                    return;
                }

                if (typeof t.params.distance == "undefined") {
                    alert('Please select your distance');
                    return;
                }

                if (typeof t.params.router == "undefined") {
                    alert('Please select if you require a router');
                    return;
                }

                if (typeof t.params.storage == "undefined") {
                    alert('Please select if your require Internal Storage');
                    return;
                }

                $html = 'Camera: ' + t.params.title + "\n";
                $html += 'Finish: ' + t.params.finish + "\n";
                $html += 'Field of View: ' + t.params.fov + "\n";
                $html += 'Distance: ' + t.params.distance + "\n";
                $html += 'Router: ' + t.params.router + "\n";
                $html += 'Internal Data Storage: ' + t.params.storage + "\n";

                if (t.params.title == 'Rapier Range') {

                    if (typeof t.params.housing == "undefined") {
                        alert('Please select your compact housing');
                        return;
                    }

                    if (typeof t.params.type == "undefined") {
                        alert('Please select your camera type');
                        return;
                    }

                    $html += 'Camera Type: ' + t.params.type + "\n";
                    $html += 'Compact Housing: ' + t.params.housing + "\n";

                }


                t.body.find('.blackout-customize').fadeIn();
                t.body.find('#gform_5 #input_5_6').val($html);
            });
        }

        t.close = function() {
            t.body.on('click', '.blackout-customize .exit', function() {
                t.body.find('.blackout-customize').fadeOut();
            });
        }

        t.get_iqx_customisation = function() {

            // Finish
            t.body.on('click', '.choose_finish .inner-option', function() {
                $('.choose_finish .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.finish = $(this).find('span').html();
                t.body.find('.overview .finish').html(t.params.finish);

                switch (t.params.finish) {
                    case 'Brushed Steel':
                        $('.brushed_steel').show();
                        $('.jet_black').hide();
                        break;
                    case 'Jet Black':
                        $('.brushed_steel').hide();
                        $('.jet_black').show();
                        break;
                }
            });

            //Finish Skip
            t.body.on('click', '.choose_finish .skip', function() {
                $('.choose_finish .inner-option').removeClass('active');
                t.params.finish = 'Skipped';
                t.body.find('.overview .finish').html(t.params.finish);
            });

            //Field of View
            t.body.on('click', '.field_of_view .inner-option', function() {
                $('.field_of_view .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.fov = $(this).find('span').html();
                t.body.find('.overview .fov').html(t.params.fov);
            });

            //FOV SKIP
            t.body.on('click', '.field_of_view .skip', function() {
                $('.field_of_view .inner-option').removeClass('active');
                t.params.fov = 'Skipped';
                t.body.find('.overview .fov').html(t.params.fov);
            });

            t.body.on('click', '.distance .inner-option', function() {
                $('.distance .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.distance = $(this).find('span').html();
                t.body.find('.overview .distance').html(t.params.distance);
            });

            //DISTANCE SKIP
            t.body.on('click', '.distance .skip', function() {
                $('.distance .inner-option').removeClass('active');
                t.params.distance = 'Skipped';
                t.body.find('.overview .distance').html(t.params.distance);
            });

            t.body.on('click', '.router_required .inner-option', function() {
                $('.router_required .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.router = $(this).find('span').html();
                t.body.find('.overview .router').html(t.params.router);
            });

            //ROUTER SKIP
            t.body.on('click', '.router_required .skip', function() {
                $('.router_required .inner-option').removeClass('active');
                t.params.router = 'Skipped';
                t.body.find('.overview .router').html(t.params.router);
            });

            t.body.on('click', '.internal_storage .inner-option', function() {
                $('.internal_storage .inner-option').removeClass('active');
                $(this).addClass('active');
                t.params.storage = $(this).find('span').html();
                t.body.find('.overview .data_storage').html(t.params.storage);
            });

            t.body.on('click', '.internal_storage .skip', function() {
                $('.internal_storage .inner-option').removeClass('active');
                t.params.storage = 'Skipped';
                t.body.find('.overview .data_storage').html(t.params.storage);
            });

        }

    }
    var customise = new customise_product();
    customise.init();

    /**
     * Worldwide Accordian
     */
    $('.accordian-inner .question').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().find('.answer').slideToggle();
    });

    /**
     *	Tabbed content on Product Page
     *  @disp content-iq-range-page.php
     */
    $('.tab').click(function() {
        var id = $(this).attr('data-id');

        hideAllContents();
        $('.supporting-image img[data-id="image_' + id + '"]').fadeIn(1200);
        $('#content_' + id).fadeIn(1200);

        $(this).addClass('active');
    });

    function hideAllContents() {
        $('.tab').removeClass('active');
        $('.tabbed-content .content').hide();
        $('.supporting-image img').hide();
    }

    /**
     *	Camera Range on Homepage		
     */
    $('#camera-range-slick').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 3,
        arrows: false,
        draggable: false,
    });

    var slickHeight = $('#camera-range-slick .slick-track').height();
    $('#camera-range-slick .slick-slide').css('height', slickHeight + 'px');

    $('.one-camera img').click(function() {
        $('#camera-range-slick').slick('slickGoTo', 1);
        $('.two-camera-content').fadeOut(200);
        $('.three-camera-content').fadeOut(200);
        $('.one-camera-content').fadeIn(600);
    });

    $('.two-camera img').click(function() {
        $('#camera-range-slick').slick('slickGoTo', 3);
        $('.one-camera-content').fadeOut(200);
        $('.three-camera-content').fadeOut(200);
        $('.two-camera-content').fadeIn(600);
    });

    $('.three-camera img').click(function() {
        $('.one-camera-content').fadeOut(200);
        $('.two-camera-content').fadeOut(200);
        $('.three-camera-content').fadeIn(600);
        $('#camera-range-slick').slick('slickGoTo', 5);
    });

    /**
     *	Homepage Accordian - about-us section		
     */
    $('.accordian-wrapper').click(function() {
        var state = $(this).find('.question .arrow i').hasClass('fa-plus');

        if (state) {
            $(this).find('.question .arrow i').removeClass('fa-plus');
            $(this).find('.question .arrow i').addClass('fa-minus');
            $(this).find('.answer').slideDown();
        } else {
            $(this).find('.question .arrow i').removeClass('fa-minus');
            $(this).find('.question .arrow i').addClass('fa-plus');
        }

        $(this).toggleClass('active');
    });

    $('.accordian-wrapper').find('.question').append('<span class="arrow"><i class="fa fa-plus" aria-hidden="true"></i></span>');

    /**
     *	Add Class to Gravity Form 1		
     */
    $('#gform_1 input[type="submit"]').addClass('gradient-border-btn');

    /*
     *
     *	@name	Contact us Google Maps
     *	@desc	Snazzy Map Styling
     * 
     */
    mapStyle = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];

    if ($('#kentMap').length > 0) {
        const map = new google.maps.Map(document.getElementById('kentMap'), {
            zoom: 15,
            center: {
                lat: 51.3613233,
                lng: 0.1934996
            },
            styles: mapStyle,
            disableDefaultUI: true,
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(51.3613233, 0.1934996),
            map: map,
            title: 'MAV Systems - Kent',
        });
    }

    /**
     *	Latest News ON HOVER effect
     */
    if ($(window).width() > 600) {
        var height = $('.latest-news .shadow').height() + 25;
        $('.latest-news .shadow').css('height', height);

        $('.latest-news .shadow').mouseenter(function() {
            var height = $(this).find('.content').height();
            $(this).find('.pad').css('margin-top', -height);
            $(this).find('.content').fadeIn();

        }).mouseleave(function() {
            var height = $(this).find('.content').height();
            $(this).find('.pad').css('margin-top', 0);
            $(this).find('.content').fadeOut();
        });
    }

    /**
     *	Create slider for latest-news		
     */
    $('#latest-news-slider').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.latest-news .right-arrow'),
        prevArrow: $('.latest-news .left-arrow'),
        infinite: false,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    /**
     *	Complete Features Overview Accordian		
     */
    $('.icon-overview-wrapper').click(function() {
        var count = 0;
        var id = $(this).attr('data-id');
        $('.icon-overview-wrapper').removeClass('active');
        $(this).addClass('active');

        $('.overview-content-block').each(function() {
            $(this).hide();
            count++;
        });

        if (count == $('.overview-content-block').length) {
            $('.overview-content-block[data-id="' + id + '"]').fadeIn(1000);
        }
    });

    /**
     * Product Child Image Slider
     */
    $('.product-gallery-images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button class="next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button class="prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    });

    $(window).load(function() {
        var stHeight = $('.product-gallery-images .slick-track').height();
        $('.product-gallery-images .slick-slide').css('height', stHeight + 'px');
    });

    /**
     * Product Child Overview Buttons
     */
    $('.nav-buttons .button').click(function() {
        var id = $(this).attr('data-id');

        $('.nav-buttons .button').removeClass('active');
        $(this).addClass('active');

        $('.nav-content .tabbed-content').hide();
        $('.nav-content').find('.' + id).fadeIn();
    });

    /**
     * Product Child Popup Gallery
     */
    $('.product-gallery-images .image-wrapper img').click(function() {
        var url = $(this).attr('src');
        $('.product-child img').attr('src', url);
        $('.product-banner-thumbnail').html('<img src="' + url + '">');
    });

    $('.exit').click(function() {
        $('.popup').fadeOut();
    });

    /**
     * Scroll to form
     */
    $('.contact-scroll').click(function() {
        $('html,body').animate({
            scrollTop: $("#gform_2").offset().top - 230
        });
    });

    $('#tab-2').click(function() {
        $('#tab-content-1').css("display", "none");
        $('#tab-content-3').css("display", "none");
        $('#tab-content-2').fadeIn();
        $(this).css("border-bottom", "2px solid #1C1C1C");
        $("#tab-1").css("border-bottom", "1px solid #989898");
        $("#tab-3").css("border-bottom", "1px solid #989898");
    });
    $('#tab-1').click(function() {
        $('#tab-content-2').css("display", "none");
        $('#tab-content-3').css("display", "none");
        $('#tab-content-1').fadeIn();
        $(this).css("border-bottom", "2px solid #1C1C1C");
        $("#tab-2").css("border-bottom", "1px solid #989898");
        $("#tab-3").css("border-bottom", "1px solid #989898");
    });
    $('#tab-3').click(function() {
        $('#tab-content-2').css("display", "none");
        $('#tab-content-1').css("display", "none");
        $('#tab-content-3').fadeIn();
        $(this).css("border-bottom", "2px solid #1C1C1C");
        $("#tab-2").css("border-bottom", "1px solid #989898");
        $("#tab-1").css("border-bottom", "1px solid #989898");
    });
});