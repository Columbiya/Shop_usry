$(document).ready(function() {
    $('#burger').on('click', function() {
        
        $('.header__nav').toggleClass('nav-menu-scroll');
        $('.substrate').toggleClass('visible');
    });

    $('#substrate').on('click', function() {
        $('.header__nav').toggleClass('nav-menu-scroll');
        $('.substrate').toggleClass('visible');
    });
});