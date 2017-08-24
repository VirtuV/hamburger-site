$(function() {
    $('.fifthpage__item').on('click', function(e){
        e.preventDefault();

        var elem = $(e.target),
            item = elem.closest('.fifthpage__item'),
            content = item.find('.fifthpage__hidden'),
            reqWidth = item.find('.fifthpage__hidden-text').outerWidth(),
            items = item.siblings(),
            otherItems = items.find('.fifthpage__hidden');
            console.log(reqWidth);

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');
                otherItems.css({
                    'width': 0
                })
                content.css({
                    'width': reqWidth
                })
            } else {
                item.removeClass('active');
                content.css({
                    'width': 0
                })
            }
            
    })

        
});