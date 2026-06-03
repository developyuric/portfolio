(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Top to Back button
    $(window).scroll(function () {
        if ($(this).scrollTop() < 11000) {
            $('.top-to-back').fadeIn('slow');
        } else {
            $('.top-to-back').fadeOut('slow');
        }
    });

    $('.top-to-back').click(function () {
        $('html, body').animate({scrollTop: $(document).height()}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 45
                }, 1500, 'easeInOutExpo');
            }
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1 && typeof Typed !== 'undefined') {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    if ($('.skills').length && typeof $.fn.waypoint !== 'undefined') {
        $('.skills').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }


    // Testimonials carousel
    if ($('.testimonials-carousel').length && typeof $.fn.owlCarousel !== 'undefined') {
        $(".testimonials-carousel").owlCarousel({
            center: true,
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {
                0:{
                    items:1
                }
            }
        });
    }
    
    // Scroll to Outworks section
    document.addEventListener('DOMContentLoaded', function() {
        // querySelector로 올바르게 교체하고 안전장치 처리
        document.querySelector('#portfolio-btn .btn[href=""]')?.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Outworks filter
    if ($('.outworks-container').length && typeof $.fn.isotope !== 'undefined') {
        var outworksIsotope = $('.outworks-container').isotope({
            itemSelector: '.outworks-item',
            layoutMode: 'fitRows'
        });

        $('#outworks-filter li').on('click', function () {
            $("#outworks-filter li").removeClass('filter-active');
            $(this).addClass('filter-active');
            outworksIsotope.isotope({filter: $(this).data('filter')});
        });
    }

    // Contact Me 
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.hero-btn .btn[href=""]')?.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Next Team Project Animation
    document.addEventListener('DOMContentLoaded', function() {
        var element = document.querySelector('.teamProject-title-animate');
    
        // 요소가 존재할 때만 감시하도록 완벽한 안전장치 추가!
        if (element && typeof IntersectionObserver !== 'undefined') {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(function() {
                            element.classList.add('animate__animated', 'animate__shakeX');
                        }, 1500);
                        observer.unobserve(element);
                    }
                });
            }, { threshold: 0.1 });
        
            observer.observe(element);
        }
    });

})(jQuery);
