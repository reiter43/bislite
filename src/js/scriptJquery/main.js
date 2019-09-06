$(document).ready(function () {

	//Инициализация слайдера owl-carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		smartSpeed: 500,
		// nav: true,
		// autoHeight: true,               
		center: true,
		// margin: 20,		
	});

	//МОдальное окно с помощью плагина magnefic-popap
	$('.worksItem__hoverLinkMagnefic').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


	// Инициализация Slick-слайдера

	$('.works__content').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		// prevArrow: '.slick-leftArrow',
		// nextArrow: '.slick-rightArrow',
		prevArrow: '<div class="slick-rightArrow"></div>',
		nextArrow: '<div class="slick-leftArrow"></div>',
		responsive: [
			{
			  breakpoint: 750,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true				
			  }
			},
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]

	});


});









