$(function () {

        var moveSlide = function (container, slideNum) {
            
            var items = container.find('.carousel__item'),
                activeSlide = items.filter('.active'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                duration = 500,
                list = container.find('.carousel__list');

            if (reqItem.length) {
                list.animate ({
                    'left': -reqIndex * 100 + '%'
                    }, duration, function() {
                        activeSlide.removeClass('active');
                        reqItem.addClass('active');
                });
            }
        }

        $('.arrow__link').on('click', function(e){
        e.preventDefault();

            var $this = $(this),
                container = $this.closest('.container__third-page');
                items = container.find('.carousel__item'),
                activeItem =items.filter('.active'),
                nextItem = activeItem.next(),
                prevItem = activeItem.prev();
            
            if($this.hasClass('arrow__link--right')) {

                if(nextItem.length) {
                    moveSlide(container, nextItem.index());
                } else {
                    moveSlide(container, items.first().index());
                }

            } else {

                if(prevItem.length) {
                    moveSlide(container, prevItem.index());
                } else {
                    moveSlide(container, items.last().index())
                }

            }
        });
});

$('.not__link').on('click',function(){
    //действия
    return false;
});