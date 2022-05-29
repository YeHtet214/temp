$('document').ready(function() {

	// Mobile Toggler
	$('.mobile-hamburger').on('click', function() {
		$('.nav-items').toggleClass('show-menu');
		if ($('.nav-items').hasClass('show-menu')) {
			$('.show-menu').css('transform', `translateY(${$('.header').height() + 3}px)`);
		}
	})

	// Calculation Hero Section Height 
	const CONTENT_HEIGHT = $('.header').height() + $('.home-description').height();
	const hero_height = $(window).height() - CONTENT_HEIGHT;

	$('.hero').css('height', hero_height + 'px');

	console.log(hero_height);
	console.log('window height: ', $(window).height());
	console.log('content height: ', CONTENT_HEIGHT);

	window.addEventListener('resize', function() {
		// console.log($(window).width());
	})

	// VIDEO BASE 64 SRC
	// const src64 = JSON.parse(data);
	// console.log(src64.src)
	// $('#myvideo').attr('src', standalone_src64);

	$.getJSON('../data.json', function(data) {
		console.log(data);
	})

})

