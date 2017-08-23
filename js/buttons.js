 $('.menu-top__item, .menu-hidden__link, ."header-button__link, .burger-button__link, .side__item, .arrow-first').find('a').on('click',function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    window.scrollTo($anchor.left,$anchor.top);
    return false;
});