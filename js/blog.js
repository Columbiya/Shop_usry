$(document).ready(function(){
    let items = $('.blog__item');
    let all = $('#show-all');
    let filterSort = $('.show-filter');
    let filter = $('#open-filter');


    function sort(element) {
    
        let value = $(element).html().toLowerCase();
        
        for (let i = 0; i < items.length; i++) {
            if (items.eq(i).attr('data-filter') == value) {
                items.eq(i).css('display', 'block');
            }
            else {
                items.eq(i).css('display', 'none');
            }
        }
    }

    filter.on('click', function(e) {
        e.preventDefault();

        $('.filter__nav').slideToggle();
        $('.filter__nav').css('display', 'flex');
    });
    
    all.on('click', function(e) {
        e.preventDefault();
        
        for(let i = 0; i < items.length; i++) {
            items.eq(i).css('display', 'block');
        }
    });
    
    
    filterSort.on('click', function(e) {
        e.preventDefault();

        sort(this);
    });
});