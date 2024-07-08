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
    $('.castSwiper .swiper-slide.active').attr('id');

    $('.castDetails').fadeOut();
    var castImg = '.castDetails.' + $('.castSwiper .swiper-slide.active').attr('id');
    $(castImg).fadeIn();

    $('.castSwiper .swiper-slide').click(function () {
        $('.castSwiper .swiper-slide').removeClass('active');
        $(this).addClass('active');
        var imgId = $(this).attr('id');
        $('.castDetails').fadeOut(); // Hide all .castDetails elements
        $('.castDetails.' + imgId).fadeIn(); // Show the .castDetails element with the corresponding class
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

    var initialSelectedValue = $('.selectSea').val(); // Get the initial selected value
    if (initialSelectedValue) {
        $('.selectSea').change(); // Trigger the change event to handle the initial selected value
    }



})
