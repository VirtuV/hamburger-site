
$(document).ready(function() {
	$('.wrapper').fullpage({
        menu: '#mainmenu',
		lockAnchors: false,
		anchors:['home', 'about', 'burger', 'team', 'menu', 'feedback', 'order', 'contacts'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
		scrollingSpeed: 1000,
    });
    
    
});