/* banner_box1 slick .. */
$('.slick-container').on("init", function(event, slick) {
	$('.slick-count .cur_page').text(slick.currentSlide+1);
	$('.slick-count .tot_page').text(slick.slideCount);
});

$('.slick-container').slick({
	autoplay: true,
		autoplaySpeed: 2000,
});

$(".slick-container").on("afterChange", function(event, slick, currentSlide) {
	$('.slick-count .cur_page').text(slick.currentSlide+1);
});

/* banner_box2 slick .. */
$('.slick-container2').on("init", function(event, slick){
	$('.slick-count2 .cur_page').text(slick.currentSlide+1);
	$('.slick-count2 .tot_page').text(slick.slideCount);
});

$('.slick-container2').slick({
	autoplay: true,
		autoplaySpeed: 2000,
		
});

$(".slick-container2").on("afterChange", function(event, slick, currentSlide) {
	$('.slick-count2 .cur_page').text(slick.currentSlide+1);
});

/* info_box slick .. */
$('.slick-container3').slick({
	slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,

		responsive: [
	    {
		    breakpoint: 1420,
		    settings: {
		    	slidesToShow: 5,
		    	slidesToScroll: 1
		    }
		},
	    {
	      	breakpoint: 1200,
	     	settings: {
	      	slidesToShow: 4,
	        slidesToScroll: 1
	      	}
		},
		{
	      	breakpoint: 860,
	     	settings: {
	      	slidesToShow: 3,
	        slidesToScroll: 1
	      	}
		},
		{
	      	breakpoint: 720,
	      	settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
		    }
	    },
	    {
	      	breakpoint: 540,
	      	settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
		    }
	    }
	]
});



var control_btn = $('.control-btn');
var control_btn2 = $('.control-btn2');
var control_btn3 = $('.control-btn3');

/* slick stop & start */
function slChangeBtn(e) {
	e.preventDefault();
	var target = $(this);
	var slick_gbn;
	//배너 슬라이드 구분
	if (target.parents().hasClass('banner_box1')) {
		slick_gbn = 'slick-container';
	} else if (target.parents().hasClass('banner_box2')) {
		slick_gbn = 'slick-container2';
	} else if (target.parents().hasClass('site_box')) {
		slick_gbn = 'slick-container3';
	}

	if (target.attr('class') == 'sl_stop') {
		$('.'+slick_gbn).slick('slickPause');
	} else if (target.attr('class') == 'sl_start') {
		$('.'+slick_gbn).slick('slickPlay');
	}
	target.css('display', 'none');
	target.siblings().css('display', 'block');
	
}
control_btn.find('a').click(slChangeBtn);
control_btn2.find('a').click(slChangeBtn);
control_btn3.find('a').click(slChangeBtn);