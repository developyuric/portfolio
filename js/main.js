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
    new WOW().init();
    
    
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
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
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
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
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
    
    // Scroll to Outworks section
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('portfolio-btn .btn[href=""]').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Scroll to the Outworks section
            document.getElementById('portfolio').scrollIntoView({
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    });
    
    // Outworks filter
    var outworksIsotope = $('.outworks-container').isotope({
        itemSelector: '.outworks-item',
        layoutMode: 'fitRows'
    });

    $('#outworks-filter li').on('click', function () {
        $("#outworks-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        outworksIsotope.isotope({filter: $(this).data('filter')});
    });

    // Contact Me 
    document.addEventListener('DOMContentLoaded', function() {
        // Contact Me 버튼 클릭 이벤트 추가
        document.querySelector('.hero-btn .btn[href=""]').addEventListener('click', function(event) {
            event.preventDefault(); // 기본 동작 방지
            
            // Contact 섹션의 위치로 스크롤
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth' // 부드러운 스크롤 효과
            });
        });
    });

    // Next Team Project Animation
    document.addEventListener('DOMContentLoaded', function() {
        var element = document.querySelector('.teamProject-title-animate');
    
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // 요소가 화면에 나타났을 때
                    setTimeout(function() {
                        element.classList.add('animate__animated', 'animate__shakeX');
                    }, 1500); // 1초 뒤 애니메이션 실행
                    observer.unobserve(element); // 애니메이션 실행 후 더 이상 감지하지 않음
                }
            });
        }, { threshold: 0.1 }); // 10%만 화면에 보여도 트리거
    
        observer.observe(element);
    });

    
    
    // // Send Message
    // document.addEventListener('DOMContentLoaded', function() {
    //     const form = document.getElementById('contactForm');
        
    //     form.addEventListener('submit', function(event) {
    //         event.preventDefault(); // 기본 제출 동작 방지
    
    //         const formData = new FormData(form);
    
    //         fetch('send_email.php', {
    //             method: 'POST',
    //             body: formData
    //         })
    //         .then(response => response.text())
    //         .then(result => {
    //             document.getElementById('success').innerText = 'Message sent successfully!';
    //             form.reset(); // 폼 리셋
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //             document.getElementById('success').innerText = 'Failed to send message.';
    //         });
    //     });
    // });
    


})(jQuery);