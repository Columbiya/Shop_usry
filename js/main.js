$(document).ready(function() {

    $('.nav-scroll').on('click' , function(e) {
        e.preventDefault();
        $('body, html').animate( {
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    

    $('#scrollToFirstElement').on('click', function(event) {
        event.preventDefault();

        $('body, html').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });

    $(window).on('scroll', function(){

        if ($(window).scrollTop() > 50) {
            $('#header').addClass('scrollMenu');
            $('#header__logo-image').attr('src', 'images/header/logo-black.png');
        }
        else {
            $('#header').removeClass('scrollMenu');
            $('#header__logo-image').attr('src', 'images/header/logo.png');
        }
    });

    $('.project__footer').on('mouseleave', function() {

        if ( $('.project__footer').hasClass('curry') ) {
            $('.curry').removeClass('curry');
        }
        $(this).addClass('curry');
        $('.curry > .project__footer-hover').addClass('slideOutLower-content');
        
    });

    $('.logos__item').on('mousedown', function() {
        $(this).css('cursor', 'grabbing');
    });

    $('.logos__item').on('mouseup', function() {
        $(this).css('cursor', 'grab');
    });

    $('.slider__item').on('mousedown', function() {
        $(this).css('cursor', 'grabbing');
    });

    $('.slider__item').on('mouseup', function() {
        $(this).css('cursor', 'grab');
    });

    $('.blog__footer-item').on('mousedown', function() {
        $(this).css('cursor', 'grabbing');
    });

    $('.blog__footer-item').on('mouseup', function() {
        $(this).css('cursor', 'grab');
    });




});