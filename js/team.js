$(function() {
    $('.fouthpage__name').on('click', function(e){
        e.preventDefault();

        var elem = $(e.target),
            item = elem.closest('.fouthpage__item'),
            content = item.find('.fouthpage__hidden'),
            reqHeight = item.find('.hidden__block-team').outerHeight(),
            items = item.siblings(),
            otherItems = items.find('.fouthpage__hidden');
            console.log(reqHeight);

            if (!item.hasClass('show')) {
                items.removeClass('show');
                item.addClass('show');
                otherItems.css({
                    'height': 0
                })
                content.css({
                    'height': reqHeight
                })
            } else {
                item.removeClass('show');
                content.css({
                    'height': 0
                })
            }
            
    })

        
});