// var base_url = window.location.protocol + '//' + window.location.host;

jQuery(document).ready(function($){
	$('#footer-form-submit').click(function(){
		$("#btn-submit").click();
	});
	// scroll function for header background on scroll //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	});

	// WOW JS
	new WOW().init();


	// menu toggle button
	$('#collapse-btn').click(function () {
		$(".right-sidebar").addClass("activesidebar");
	});
	var hoverDelay;

// Activate tabs on hover
	$('.mega-menu .nav-tabs').on('mouseenter', '.nav-link', function () {
  var $this = $(this);
  clearTimeout(hoverDelay);
  hoverDelay = setTimeout(function () {
    $this.tab('show');
  }, 200);
});

// Show default active tab on page load
	var activeTab = $('.mega-menu .nav-link.active');
activeTab.tab('show');

// Hide inactive tabs on mouseleave
	$('.mega-menu .nav-tabs').on('mouseleave', function () {
  clearTimeout(hoverDelay);
  $('.nav-link').not(activeTab).tab('hide');
});

	$('#sidebar-close-btn').click(function () {
		$(".right-sidebar").removeClass("activesidebar");
	});

	// Close sidebar on click outside
	$(document).click(function (event) {
		if (!$(event.target).closest("#collapse-btn, .right-sidebar").length && !$(event.target).is(".right-sidebar")) {
			$(".right-sidebar").removeClass("activesidebar");
		}
	});

	// technologies Slider
	$('.technologies-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000
	});


	// Industries Work Slider
	$('.industries-work-slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 5,
				}
			  },
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			}
		  ]
	});

	// technologies Slider
	$('.awards-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			}
		]
	});

	// Reviews Slider
	$('.reviews-slider').slick({
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					centerMode: false,
				}
			}
		]
	});

	// Marquee Slider
	$('.marquee-slider').slick({
		speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		// centerMode: true,
		cssEase: 'linear',
		pauseOnHover: false,
      pauseOnFocus: false,
		slidesToShow: 1,
		// slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToScroll: 2,
				}
			}
		]
	});

	// Experties Sync Slider
	$('.experties-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.experties-slider-nav'
	});
	$('.experties-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.experties-slider',
		dots: true,
		arrows: true,
		centerMode: true,
		focusOnSelect: true
	});

	// Experties Mobile Slider
	$('.experties-mobile-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000
	});


	// Checking window size
	function checkWindowSize() {
		if ( $(window).width() < 576) {
			$('body').addClass('handleCards');
			$('.core-value-card').addClass('core-value-card-mobile');
		} else {
			$('body').removeClass('handleCards');
			$('.core-value-card').removeClass('core-value-card-mobile');
		}
	}
	checkWindowSize()

	$('body.handleCards .service-card .service-card-header').click(function(){
		$(this).siblings('.service-card-body').slideToggle()
	});
	$(".core-value-card-mobile .core-value-card-front").click(function () {
		$(this).siblings(".core-value-card-mobile-layer").slideToggle();
		$(this).parents(".core-value-card").toggleClass("changeBgColor");
	})

	
	$('body').on('click', '.load-more', function () {
		var datapaged = $(this).attr('data-paged');
		var keyword = $("input[name='keyword']").val();
		var category = $("select[name='category']").val();
		var location = $("select[name='location']").val();
		get_listing(datapaged, keyword, category, location);
	});

	$("#reset-filters").click( function (e){
		e.preventDefault();
		$("#filters").reset();
	});
	// Show tab on button hover
	
	// On Click On Tabs Changes Page 
	$('.header-center .nav-link').hover(
		function() {
		  var tabId = $(this).data('bs-target');
		  $(tabId).tab('show');
		},
		function() {
		  var tabId = $(this).data('bs-target');
		  if (!$(tabId).hasClass('show')) {
			$(tabId).tab('hide');
		  }
		}
	  );
	
	  // Redirect to tab page on button click
	  $('.header-center .nav-link').click(function() {
		var pageUrl = $(this).data('page-url');
        window.location.href = pageUrl;
	  });

	  $('.target-btn').click( function(e){
		var href = $(this).attr('data-href');
		$('input[name="href"]').val(href);
	  });
});

function changeForm() {
	$('span.file-input-button').text('File Selected');
}