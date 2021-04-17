document.addEventListener("DOMContentLoaded", () => {

	var carousel = $("#works_carousel").waterwheelCarousel({
		startingItem: 2,
		flankingItems: 1,
		separation: 140 
	});
	$('#prev').bind('click', function () {
		carousel.prev();
		return false;
	});

	$('#next').bind('click', function () {
		carousel.next();
		return false;
	});

	$(".phone").mask("+7 (999) 999-9999");

	$('.callback_header').on('click', function(e){
		e.preventDefault();
		var t = 1000;
		var d = $('.signup');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});

	ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 16
        });

    myMap.geoObjects;
});

});