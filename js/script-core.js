/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).on('ready',function($) {
	"use strict";


	$('.slider-wrapper').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
					dotsClass: "my-dots"

				}
			}
		]
	});

	$('.slider-documents').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
					dotsClass: "my-dots"

				}
			}
		]
	});


	function countup(className) {
		var countBlockTop = $("." + className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;

		$(window).scroll(function () {
			if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
				show = false;

				$('.' + className).spincrement({
					from: 1,
					duration: 3000,
				});
			}
		})
	}

	countup('information-count');


	var topPopularChart = document.getElementById("topPopularChart");
	var topGrantChart = document.getElementById("topGrantChart");


	Chart.defaults.global.defaultFontFamily = "Didact Gothic";
	Chart.defaults.global.defaultFontSize = 14;
	var topPopularChartData = {
		labels: [
			"0105000 — Бастауыш білім беру",
			"1201000 — Автомобиль көлігіне техникалық қызмет көрсету, жөндеу және пайдалану",
			"0101000 — Мектепке дейінгі тәрбие және оқыту",
			"0301000 — Емдеу ісі",
			"1305000 — Ақпараттық жүйелер (қолдану саласы бойынша)"
		],
		datasets: [
			{
				data: [58, 50, 42, 39, 37],
				backgroundColor: [
					"#FE718F",
					"#49AAEC",
					"#FED266",
					"#5CC5C5",
					"#A274FE"
				]
			}]
	};

	var topGrantChartData = {
		labels: [
			"1504000 — Фермер шаруашылығы (бейін бойынша)",
			"1201000 — Автомобиль көлігіне техникалық қызмет көрсету, жөндеу және пайдалану",
			"1114000 — Дәнекерлеу ісі (түрлері бойынша)",
			"0508000 — Тамақтандыруды ұйымдастыру",
			"1211000 — Тігін өндірісі және киімдерді үлгілеу"
		],
		datasets: [
			{
				data: [636, 599, 596, 526, 406],
				backgroundColor: [
					"#FE718F",
					"#49AAEC",
					"#FED266",
					"#5CC5C5",
					"#A274FE"
				]
			}]
	};

	var pieChart1 = new Chart(topPopularChart, {
		type: 'pie',
		data: topPopularChartData
	});
	var pieChart2 = new Chart(topGrantChart, {
		type: 'pie',
		data: topGrantChartData
	});

	pieChart1.canvas.parentNode.style.width = '50%';
	pieChart2.canvas.parentNode.style.width = '50%';


    $('#search .trigger').on('click', function(){
        $('.search-bar').animate({width: 'toggle'},500);
    });

	/*-------------------------------------------------*/
	/* =  Main Nav 
	/*-------------------------------------------------*/

	$(function() {
		$('.scroll').on('click', function(event) {
			var $anchor = $(this);
			var headerH = $('.navbar-collapse').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});


	$('.nav li a').on('click', function(e){

		if (!$(this).parent('li').hasClass('active')){
			var link = $(this).attr('href');

			$(this).parents('ul').children('li').removeClass('active');
			$(this).parent().addClass('active');

			$(link).fadeIn();
		}
	});

	$('.nav a').on('click', function(){
	    $(".navbar-toggle").on('click') //bootstrap 3.x by Richard
	});


	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
	})



	
 	/*-------------------------------------------------*/
	/* =  Isotope
	/*-------------------------------------------------*/
	var winDow = $(window);
			// Needed variables
	var $container=$('.filter-container');
	var $filter=$('.filter');

	try{
		$container.imagesLoaded( function(){
			$container.show();
			$container.isotope({
				filter:'*',
				layoutMode:'masonry',
				animationOptions:{
					duration:750,
					easing:'linear'
				}
			});
		});
	} catch(err) {
	}

	winDow.on('resize', function(){
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {
		}
		return false;
	});
	
	// Isotope Filter 
	$filter.find('a').on('click', function(){
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({ 
				filter	: selector,
				animationOptions: {
					duration: 750,
					easing	: 'linear',
					queue	: false,
				}
			});
		} catch(err) {

		}
		return false;
	});


	var filterItemA	= $('.filter a');

	filterItemA.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});




	/*-------------------------------------------------*/
	/* =  Accordion isotope
	/*-------------------------------------------------*/

	$(document).on('ready',function($) { 
		'use strict';

		//Add Inactive Class To All Accordion Headers
		$('.accordion-header').toggleClass('inactive-header');
		
		//Set The Accordion Content Width
		// var contentwidth = $('.accordion-header').width();
		// $('.accordion-content').css({'width' : contentwidth });
		
		//Open The First Accordion Section When Page Loads
		$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
		$('.accordion-content').first().slideDown().toggleClass('open-content');
		
		// The Accordion Effect
		$('.accordion-header').on('click', function () {
			if($(this).is('.inactive-header')) {
				$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
				$(this).toggleClass('active-header').toggleClass('inactive-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}
			
			else {
				$(this).toggleClass('active-header').toggleClass('inactive-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}
		});
		
		return false;
	});

	/*-------------------------------------------------*/
	/* =  browser detect
	/*-------------------------------------------------*/
	try {
		$.browserSelector();
		// Adds window smooth scroll on chrome.
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}


	


	/*-------------------------------------------------*/
	/* =  Testimonials
	/*-------------------------------------------------*/

	  try {
  		$('.bxslider').bxSlider({
             mode: 'horizontal',
             slideMargin: 0,
             auto:true
         }); 
  	 } catch(err) {

  	 }



 	/*-------------------------------------------------*/
	/* =  Fancybox
	/*-------------------------------------------------*/
	try {
		$("a[data-fancybox-group=group]").fancybox({
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'titlePosition' 	: 'over',
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			}
		});
	} catch(err) {

	}

	

	
	/*-------------------------------------------------*/
	/* =  Animated content
	/*-------------------------------------------------*/

	try {
		/* ================ ANIMATED CONTENT ================ */
        if ($(".animated")[0]) {
            $('.animated').css('opacity', '0');
        }

        $('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );
	} catch(err) {

	}

   /*-------------------------------------------------*/
	/* =  Tabs Widget - { Popular, Recent and Comments }
	/*-------------------------------------------------*/
	$('.tab-links li a').on('click', function(e){
		e.preventDefault();
		if (!$(this).parent('li').hasClass('active')){
			var link = $(this).attr('href');

			$(this).parents('ul').children('li').removeClass('active');
			$(this).parent().addClass('active');

			$('.tabs-widget > div').hide();

			$(link).fadeIn();
		}
	});

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "swing",
			slideshowSpeed: 4000,
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"41.8744661", "lon":"-87.6614312"}; //Change a map coordinate here!

	try {
		var mapContainer = $('.map');
		mapContainer.gmap3({
			infowindow:{
				address:"http://goo.gl/maps/Mt7xc",
				options:{
					content: "Copper!"
				}
			},
			action: 'addMarker',
			marker:{
				options:{
				}
			},
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 15
				},
			},
			{action: 'setOptions', args:[{scrollwheel:false}]}
		);
	} catch(err) {

	}

	try	{
		$(".alert").alert()
	} catch(err) {
		
	}


 	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/
	$('a[href="#top"]').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


	/*-------------------------------------------------*/
	/* =  Easy PieChart
	/*-------------------------------------------------*/
	try {

		var PieChart = $('.skill-item');
		PieChart.appear(function() {

			$(function() {
				$('.chart').easyPieChart({
					easing: 'easeOutBounce',
					onStep: function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
				var chart = window.chart = $('.chart').data('easyPieChart');
				$('.js_update').on('click', function() {
					chart.update(Math.random()*200-100);
				});
			});
		});
		} catch(err) {

	}

    

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	try{
		var skillBar = $('.skills-progress');
		skillBar.appear(function() {

			var animateElement = $(".meter > span");
			animateElement.each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});

		});
	} catch(err) {
	}


	/*-------------------------------------------------*/
	/* =  count increment
	/*-------------------------------------------------*/
	try {
		$('.statistic-post').appear(function() {
			$('.timer').countTo({
				speed: 4000,
				refreshInterval: 60,
				formatter: function (value, options) {
					return value.toFixed(options.decimals);
				}
			});
		});
	} catch(err) {

	}
	

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit_contact'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

	// Header 


	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( 'nav' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 55 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'nav' ).addClass('active');
			}
			else {
				$( 'nav' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();

		
	})();


	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 100;
			document.querySelector( '.top-line' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 55 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( '.top-line' ).addClass('active');
			}
			else {
				$( '.top-line' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();

		
	})();



});