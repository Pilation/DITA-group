/*
Author       : theme_ocean
Template Name: Cryptonio - Cryptocurrency Landing Page HTML Template
Version      : 1.0
*/
(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {

		/*PRELOADER JS*/
		$(window).on('load', function () {
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
		});
		/*END PRELOADER JS*/

		/*START MENU JS*/
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})
		/*END MENU JS*/

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
			type: 'iframe'
		});
		/*END VIDEO JS*/

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/*START COUNUDOWN JS*/
		$('[data-countdown]').each(function () {
			var $this = $(this),
				finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Minutes</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Seconds</p></span>'));
			});
		});
		/*END COUNUDOWN JS*/

		/*START TESTIMONIAL JS*/
		$("#testimonial-slider").owlCarousel({
			items: 2,
			itemsDesktop: [1000, 2],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: false
		});
		/*END TESTIMONIAL JS*/

		/*START TESTIMONIAL*/
		$("#roadmap-slider").owlCarousel({
			items: 4,
			itemsDesktop: [1000, 4],
			itemsDesktopSmall: [979, 2],
			itemsTablet: [768, 2],
			itemsMobile: [650, 1],
			pagination: true,
			autoPlay: false
		});
		/*END TESTIMONIAL*/

	});

	/*START WOW ANIMATION JS*/
	new WOW().init();
	/*END WOW ANIMATION JS*/

})(jQuery);




$('a.nav-link').on('click', function () {
	$(`button.navbar-toggler`).addClass('collapsed');
	$(`div.navbar-collapse`).removeClass('show');
});

$('button.navbar-toggler').on('click', function () {
	$(`.clear`).addClass('show');
});

$('.clear').on('click', function () {
	$(`.clear`).removeClass('show');
	$(`button.navbar-toggler`).addClass('collapsed');
	$(`div.navbar-collapse`).removeClass('show');
});

$(window).resize(function () {
	clear();
});
function clear() {
	if ($(window).width() >= 500) {
		$(`.clear`).removeClass('show');
	}
}


// name="select-lang"
// id="select-lang">
// value="ru"
// value="en"
// value="ua"
const langEl = document.querySelector('#select-lang');

langEl.addEventListener('change', (event) => {
	switch (event.target.value) {
		case `ua`:
			document.location.replace('https://dita-group.com/ua.html');
			break;
		case `en`:
			break;
		case 'ru':
			document.location.replace(`https://dita-group.com`)
	}
});