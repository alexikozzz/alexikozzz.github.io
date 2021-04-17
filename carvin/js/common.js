document.addEventListener("DOMContentLoaded", () => {

	window.onload = function () {
		document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');
		}, 500);
	}

	$(".phone").mask("+7 (999) 999-9999");

	const swiper = new Swiper('.swiper-bg', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
  speed: 2400,

  // If we need pagination
  pagination: {
  	el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
  	nextEl: '.swiper-button-next',
  	prevEl: '.swiper-button-prev',
  },

});

	swiper.on('slideChange', function () {
		$('.site_header').removeClass('slide' + swiper.previousIndex);
		$('.site_header').addClass('slide' + swiper.activeIndex);

		$('.swiper-button-prev').removeClass('swiper-button-prev' + swiper.previousIndex);
		$('.swiper-button-prev').addClass('swiper-button-prev' + swiper.activeIndex);
		$('.swiper-button-next').removeClass('swiper-button-next' + swiper.previousIndex);
		$('.swiper-button-next').addClass('swiper-button-next' + swiper.activeIndex);

	});

	ymaps.ready(init);
	function init () {
		var myMap = new ymaps.Map('map', {
			center: [56.326944, 44.0075],
			zoom: 17,
			controls: []
		});
		myMap.controls.add('fullscreenControl',{float: 'left'});
  // Создаем геообъект с типом геометрии "Точка".
  myGeoObject = new ymaps.GeoObject();
  myMap.geoObjects
  .add(new ymaps.Placemark([56.326944, 44.0075], {
  	balloonContent: ''
  }, {
     // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/mark.png',
        // Размеры метки.
        iconImageSize: [98, 112],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [200, -200]
      }));
}

});