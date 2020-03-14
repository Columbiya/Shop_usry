$(document).ready(function() {


    let filter = $('#open-filter');

    filter.on('click', function(e) {
        e.preventDefault();

        $('.filter__nav').slideToggle();
        $('.filter__nav').css('display', 'flex');
    }); 

    let all = $('#show-all');
    let filterSort = $('.show-filter');
    let images = $('.filter__gallery-image');

    all.on('click', function(e) {
        e.preventDefault();
        
        for(let i = 0; i < images.length; i++) {
            images.eq(i).css('display', 'flex');
        }
    });


    filterSort.on('click', function(e) {
        e.preventDefault();

        let value = $(this).html().toLowerCase();

        for (let i = 0; i < images.length; i++) {
            if (images.eq(i).attr('data-filter') == value) {
                images.eq(i).css('display', 'flex');
            }
            else {
                images.eq(i).css('display', 'none');
            }
        }
    });




});