// banner slider

const swiper = new Swiper('.bannerSwipper', {
    loop: true,
    speed: 1000,
    autoplay: {
        enabled: true,
        delay: 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.banPg',
        clickable: true,
    },

});

// cast slider
var mySwiper = new Swiper(".castSwiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    grabCursor: true,
    speed: 500,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1,
    navigation: {
        nextEl: '.cast-next',
        prevEl: '.cast-prev',
    },
    breakpoints: {
        992: {
            direction: "vertical",
        },
        768: {
            spaceBetween: 30,

            slidesPerView: 3,
        },
        460: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});


// gallery slider
var mySwiper = new Swiper(".gallerySwiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 4,
    grabCursor: true,
    speed: 500,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1,
    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    breakpoints: {
        992: {
            direction: "vertical",
        },
        // 768: {
        //     spaceBetween: 30,

        //     slidesPerView: 3,
        // },
        // 460: {
        //     slidesPerView: 2,
        // },
        // 320: {
        //     slidesPerView: 1,
        // }
    }
});



$(document).ready(function () {

    // cast active content
    var activeId = $('.castSwiper .swiper-slide.active').attr('id');

    // Initially hide all castDetails and fade in the one corresponding to the active swiper-slide
    $('.castDetails').hide();
    var castImg = '.castDetails.' + activeId;
    $(castImg).fadeIn();

    // Click event for swiper-slide elements
    $('.castSwiper .swiper-slide').click(function () {
        // Remove active class from all swiper-slide elements and add it to the clicked one
        $('.castSwiper .swiper-slide').removeClass('active');
        $(this).addClass('active');

        // Get the id of the clicked swiper-slide element
        var imgId = $(this).attr('id');

        // Hide all castDetails elements and fade in the one corresponding to the clicked swiper-slide
        $('.castDetails').fadeOut();
        $('.castDetails.' + imgId).fadeIn();
    });


    $('.seaThumb').click(function () {
        $('.seaThumb').removeClass('active'); // Remove active class from all seaThumb elements
        $('.seaCont').removeClass('active'); // Remove active class from all seaCont elements
        $(this).addClass('active'); // Add active class to the clicked seaThumb element
        var epi = $(this).attr('id'); // Get the id of the clicked seaThumb element
        $('.seaCont.' + epi).addClass('active'); // Add active class to the corresponding seaCont element
    });

    // Change event for selectSea elements
    $('.selectSea').change(function () {
        var selectedValue = $(this).val(); // Get the selected value
        console.log(selectedValue); // Output the selected value to the console (optional)

        $('.seasonSum').hide(); // Hide all seasonSum elements
        $('.' + selectedValue).fadeIn(); // Fade in the element corresponding to the selected value
        $('.seaThumb').removeClass('active'); // Remove active class from all seaThumb elements
        $('.seaCont').removeClass('active'); // Remove active class from all seaCont elements

        // Find the first .seaThumb and .seaCont elements within the selected season and add active class
        var selectedSeason = $('.' + selectedValue);
        selectedSeason.find('.seaThumb:first').addClass('active');
        selectedSeason.find('.seaCont:first').addClass('active');

        // Fade in the selected season and the next two elements
        selectedSeason.fadeIn();
        if (window.matchMedia('(min-width: 768px)').matches) {
            selectedSeason.next().fadeIn();
            selectedSeason.next().next().fadeIn();
        }
    });

    function initializeSelection() {
        var initialSelectedValue = $('.selectSea').val(); // Get the initial selected value
        if (initialSelectedValue) {
            $('.selectSea').change(); // Trigger the change event to handle the initial selected value
        }
    }

    // Call the initializeSelection function on page load
    initializeSelection();





    var activeGallery = $('.gallerySwiper .swiper-slide.active').attr('id');

    // Initially hide all galleryDetails and fade in the one corresponding to the active swiper-slide
    $('.galleryDetails').hide();
    var castImg = '.galleryDetails.' + activeGallery;
    $(castImg).fadeIn();

    function gallery(){
        if ($(this).hasClass('active')) {
            return false;
        } else {
            // Remove active class from all swiper-slide elements and add it to the clicked one
            $('.gallerySwiper .swiper-slide').removeClass('active');
            $(this).addClass('active');

            // Get the id of the clicked swiper-slide element
            var imgId = $(this).attr('id');

            // Hide all galleryDetails elements and fade in the one corresponding to the clicked swiper-slide
            $('.galleryDetails').hide();
            $('.galleryDetails.' + imgId).fadeIn();
        }
    }

    $('.gallerySwiper .swiper-slide').mouseenter(function () {
        if ($(this).hasClass('active')) {
            return false;
        } else {
            // Remove active class from all swiper-slide elements and add it to the clicked one
            $('.gallerySwiper .swiper-slide').removeClass('active');
            $(this).addClass('active');

            // Get the id of the clicked swiper-slide element
            var imgId = $(this).attr('id');

            // Hide all galleryDetails elements and fade in the one corresponding to the clicked swiper-slide
            $('.galleryDetails').hide();
            $('.galleryDetails.' + imgId).fadeIn();
        }
    });
    $('.gallerySwiper .swiper-slide').on('touchstart', function(event) {
        // Prevent default behavior for touchstart only if it's not a touchmove event
        if (event.originalEvent.touches.length === 1) {
            gallery.call(this); // Use call() to set 'this' to the current swiper-slide element
            event.preventDefault();
        }
    });


})
