// $(window).scroll(function() {
//     var headerHeight = $(".header").outerHeight();
//     // kiểm tra điều kiện > header thì mới addClass 
//     if ($(window).scrollTop() > headerHeight) {
//         $('.header').addClass('white-bg');
//         // $('.header').addClass('header-sticky');
//         $('.contacthotel').slideUp();
//         $('.header-middle').addClass('animated');
//     } else {
//         $('.header').removeClass('white-bg');
//         // $('.header').removeClass('header-sticky');
//         $('.contacthotel').slideDown();
//         $('.header-middle').removeClass('animated');
//     }
// });
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {

    // $('#dateto').datepicker();

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });
    $(".navbar-toggler").click(function() {
        $(this).toggleClass('show');
        $('.navbar-collapse.collapse').toggleClass('show');
    })

    $(".languages-dropdown .languages-value").click(function() {
        $(this).parents().children('.dropdown-menu').toggleClass('show');
    })
    $(document).mouseup(function(e) {
        var eti = $(".custom-select .nice-select");
        var vacancydropdown = $(".dropdown-menu");
        if (!eti.is(e.target) && eti.has(e.target).length === 0) {
            eti.removeClass('open');
        }
        if (!vacancydropdown.is(e.target) && vacancydropdown.has(e.target).length === 0) {
            vacancydropdown.removeClass('show');
        }
    });

    // $(".has-submenu").mouseover(function() {
    //     $(this).css("overflow", "visible");
    //     $(this).children('.sub-menu').slideUp().css("display", "block").css("visibility", "visible");
    // });
    // $(".has-submenu").mouseout(function() {
    //     $(this).css("overflow", "hidden");
    // });
    $(".has-submenu .header-nav-link").click(function() {
        $(this).toggleClass('submenu-open');
        $(this).parent('.has-submenu').children('.sub-menu').slideToggle();
    })

    $(".search-vacancy .dropdown-select .dropdown-toggle").click(function() {
        // $(this).parents().children('.dropdown-menu').toggleClass('show');
        if ($(this).parents().children('.dropdown-menu').hasClass('show')) {
            $(this).parents().children('.dropdown-menu').removeClass('show');
        } else(
            $(this).parents().children('.dropdown-menu').addClass('show')
        )
    })
    $(".search-vacancy .dropdown-select .dropdown-menu .dropdown-item").click(function() {
        var valueVacancy = $(this).html();

        $(this).parents().parents().children('.dropdown-toggle').children('.filter-option').children('.filter-inner').html(valueVacancy);

        $(this).parents().parents().children('.dropdown-menu').removeClass('show');
        // alert(valueVacancy);
    })


    //select filter
    $(".drop-searchbox input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".show-vacancy li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    //date range picker
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });

    $('input[name="daterangetour"]').daterangepicker({
        singleDatePicker: true,

    })

    $(".guests-picker").click(function() {
        $('.guests-dropdown').toggleClass('show');
    })


    $('.btn-plus').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        // fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).siblings('input').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $(this).siblings('input').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $(this).siblings('input').val(0);
        }

        var roomsRequired = parseInt($('.rooms-required').val()),
            adults = parseInt($('.guests-adults').val()),
            children = parseInt($('.guests-children').val()),
            guests = adults + children,
            roomSingular = $('.rooms-count').data('textSingular'),
            roomPlural = $('.rooms-count').data('textPlural'),
            guestSingular = $('.guests-count').data('textSingular'),
            guestPlural = $('.guests-count').data('textPlural'),
            roomsCount = '',
            guestsCount = '';
        if (roomsRequired == 1) {
            roomsCount = roomsRequired + ' ' + roomSingular;
        } else {
            roomsCount = roomsRequired + ' ' + roomPlural;
        }
        if (guests == 1) {
            guestsCount = guests + ' ' + guestSingular;
        } else {
            guestsCount = guests + ' ' + guestPlural;
        }
        $('.rooms-count').html(roomsCount);
        $('.guests-count').html(guestsCount);
    });
    $(".btn-minus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        // fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($(this).siblings('input').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $(this).siblings('input').val(currentVal - 1);

        } else {
            // Otherwise put a 0 there
            $(this).siblings('input').val(0);
        }

        var roomsRequired = parseInt($('.rooms-required').val()),
            adults = parseInt($('.guests-adults').val()),
            children = parseInt($('.guests-children').val()),
            guests = adults + children,
            roomSingular = $('.rooms-count').data('textSingular'),
            roomPlural = $('.rooms-count').data('textPlural'),
            guestSingular = $('.guests-count').data('textSingular'),
            guestPlural = $('.guests-count').data('textPlural'),
            roomsCount = '',
            guestsCount = '';
        if (roomsRequired == 1) {
            roomsCount = roomsRequired + ' ' + roomSingular;
        } else {
            roomsCount = roomsRequired + ' ' + roomPlural;
        }
        if (guests == 1) {
            guestsCount = guests + ' ' + guestSingular;
        } else {
            guestsCount = guests + ' ' + guestPlural;
        }
        $('.rooms-count').html(roomsCount);
        $('.guests-count').html(guestsCount);
    });

    $(".tab-populated .nav-tabs .nav-link").click(function() {
        var tabId = $(this).attr('id');
        $(this).addClass('active');
        $(".nav-link.active").not($('.nav-link[id =' + tabId + ']')).removeClass('active');

        $('.nav-content__item[id =' + tabId + ']').addClass('active');
        $('.nav-content__item.active').not($('.nav-content__item[id =' + tabId + ']')).removeClass('active');
    })

    $('.list-deal').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.hotel-slide-img').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,

    });

    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));


    //slide-detail
    $('.detail-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.detail-slide-thumd'
    });
    $('.detail-slide-thumd').slick({
        // loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.detail-slide',
        // dots: true,
        // centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slide-detail-room').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        dots: true
    });


    $('.similar-hotel-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.tour-detail-slide').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        // prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        // nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.about-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $('.reviews-slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,

    });




});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}