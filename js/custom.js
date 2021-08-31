function resizeSlider() {
    var windWidth = jQuery(window).width();
    if (windWidth > 1280) {
        var swiper = new Swiper('.banner--slider', {
            direction: 'vertical',
            autoHeight: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    } else {
        var swiper = new Swiper('.banner--slider', {
            direction: 'horizontal',
            autoHeight: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
resizeSlider();
$(window).resize(function() {
    resizeSlider();
});

//hamburger munu
$(document).ready(function() {
    $(".toggle--menu").click(function() {
        $("#menu").toggleClass("sidebar__toggle");
    });
});
// Show the first tab and hide the rest
// tab script
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function() {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});
// second testimonial slider
var swiper = new Swiper('.testimonial--slider', {
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.testimonial--pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.arrow__right--test',
        prevEl: '.arrow__left--test',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});
// fancybox js
$('.card-deck a').fancybox({
    caption: function(instance, item) {
        return $(this).parent().find('.card-text').html();
    }
});

// aos animation
AOS.init({
    duration: 1300,
    once: true,
});
// cursor js
const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-move-inner');
const cursorOuter = document.querySelector('.cursor-move-outer');

const trigger = document.querySelector('button');

let mouseX = 0;
let mouseY = 0;
let mouseA = 0;

let innerX = 0;
let innerY = 0;

let outerX = 0;
let outerY = 0;

let loop = null;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!loop) {
        loop = window.requestAnimationFrame(render);
    }
});

trigger.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor--hover');
});

trigger.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor--hover');
});

function render() {
    // stats.begin();

    loop = null;

    innerX = lerp(innerX, mouseX, 0.15);
    innerY = lerp(innerY, mouseY, 0.15);

    outerX = lerp(outerX, mouseX, 0.13);
    outerY = lerp(outerY, mouseY, 0.13);

    const angle = Math.atan2(mouseY - outerY, mouseX - outerX) * 180 / Math.PI;

    const normalX = Math.min(Math.floor((Math.abs(mouseX - outerX) / outerX) * 1000) / 1000, 1);
    const normalY = Math.min(Math.floor((Math.abs(mouseY - outerY) / outerY) * 1000) / 1000, 1);
    const normal = normalX + normalY * .5;
    const skwish = normal * .7;

    cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
    cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 + skwish}, ${1 - skwish})`;

    // stats.end();

    // Stop loop if interpolation is done.
    if (normal !== 0) {
        loop = window.requestAnimationFrame(render);
    }
}

function lerp(s, e, t) {
    return (1 - t) * s + t * e;
}
//cursor hover action
jQuery(function() {
    jQuery('.cursor-action').mouseover(function() {
        jQuery('.cursor').css({
            'width': 70,
            'height': 70
        });
    }).mouseout(function() {
        jQuery('.cursor').css({
            'width': 50,
            'height': 50
        });
    });
});
// for mode
jQuery(function() {
    jQuery('#mode__change').on('click', function() {
        jQuery('body').toggleClass('light__mode');
    });
});

//for section move on click
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 800);
});
// for sticky header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('.da__header--main').addClass('fixed-header');
    } else {
        $('.da__header--main').removeClass('fixed-header');
    }
});


// jQuery(window).scroll(function() {
//     if (jQuery(window).scrollTop() >= 300) {
//         jQuery('.nav-horizontal').addClass('fixed-header');
//     } else {
//         jQuery('.nav-horizontal').removeClass('fixed-header');
//     }
// });