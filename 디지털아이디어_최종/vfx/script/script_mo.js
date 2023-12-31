$( document ).ready(function() {
	let click_num=0;
            $('.toggle').click(function(){
                $(this).toggleClass('active');
                if(click_num == 0){
                    $(".menu_wrap").fadeIn();
                    click_num++;
                }else{
                    $(".menu_wrap").fadeOut();
                    click_num--;
                }
                
            });
	"use strict";
	
	 $('body').removeClass('fade-out');
	

	
	/* Drop down menu
	-------------------------------------------------------*/
	var menu = $('.sliding-menu').sliiide({
		place: 'top', 
		toggle: '#sliiider-toggle',
		exit_selector: ".slider-exit",
		animation_duration: "0.9s",
		animation_curve: "cubic-bezier(0.23, 1, 0.32, 1)",
		body_slide: false,
		no_scroll: true,
		auto_close: true
	});
	 menu.activate();
	 menu.deactivate();

	
	/* Swiper Slides 1
	-------------------------------------------------------*/
    var mySwiper = new Swiper ('.rfa-slide-container--chapter-select', {
		direction: 'horizontal',
		keyboardControl: true,
		paginationType: 'bullets',
		pagination: '.swiper-pagination',
		paginationClickable: true,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 0,
			  centeredSlides: false,
			},
			414: {
			  slidesPerView: 1,
			  spaceBetween: 0,
			  centeredSlides: false,
			},
			1024: {
			  //slidesPerView: 2.2,
			  slidesPerView: 'auto',
			  spaceBetween: 50,
			  centeredSlides: true,
			},
			2560: {
			  //slidesPerView: 2.2,
			  slidesPerView: 'auto',
			  spaceBetween: 50,
			  centeredSlides: true,
			}
		  },
		
		mousewheelControl: true,
		spaceBetween: 0,
		
		hashnav: true,
		hashnavWatchState: true,

		'onInit': function(){
		   console.log('Hey Guys');
		}
		
    });
	
	
	
	
	
	/* Swiper Slides 2
	-------------------------------------------------------*/
    var mySwiperTwo = new Swiper ('.rfa-slide-container--chapter', {
		slidesPerView: 1,
		direction: 'horizontal',
		keyboardControl: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		mousewheelControl: true,
		spaceBetween: 0,
		hashnav: true,
		hashnavWatchState: true,
    });

	/* Swiper Two-way Nav Control
	-------------------------------------------------------*/
	var slideLinks = new Swiper( '.slide-links-container', {
		direction: 'horizontal',
		spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 1,
		effect: 'fade',
		fade: { crossFade: true }
	});
	mySwiperTwo.params.control = slideLinks;
    slideLinks.params.control = mySwiperTwo;
	
	
	
	
	mySwiper.on('onSlideChangeStart', function () {
		
		if (mySwiper.activeIndex > 0) {
			$('#rfaPagePagination')
				.removeClass('hide-swiper-pagination')
				.addClass('add-swiper-pagination');
			
			
		}else {
			$('#rfaPagePagination')
				.addClass('hide-swiper-pagination')
				.removeClass('add-swiper-pagination');
		}
	});
	
	/* Mobile Detect
    -------------------------------------------------------*/
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
		$('html').addClass('mobile');
    }
    else {
        $('html').removeClass('mobile');
		
		mySwiper.on('onSlideChangeStart', function () {
		
			if (mySwiper.activeIndex > 0) {
				$('#rfaCover')
					.removeClass('show-cover')
					.addClass('hide-cover');
			}else {
				$('#rfaCover')
					.addClass('show-cover')
					.removeClass('hide-cover');
			}
		});
    }
});