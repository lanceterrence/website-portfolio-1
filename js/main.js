var slideCount = 1;

    function myFunction(x) {

        if (x.matches) { // If media query matches
            return;
        } else {
            slideCount = 3;
        }
    }

    var x = window.matchMedia("(max-width: 600px)")
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: slideCount,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

