//Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
	effect : 'fade',

	navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	},

	loop: true,

    autoplay: {
		delay: 5000,
	},
});

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    slidesPerGroup : 4,
    spaceBetween: 24,
    pagination: {
	    el: '.swiper-pagination2',
	    clickable: true,
    },
    autoplay: {
    	delay: 5000
    },
    speed: 2800,

    breakpoints: {
    	1200: {
    		slidesPerView: 3,
		    slidesPerGroup : 3,
		    spaceBetween: 20
    	}
    	, 768: {
    		slidesPerView: 2,
		    slidesPerGroup : 2,
		    spaceBetween: 20
    	}
    }
});


var swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    slidesPerGroup : 3,
    spaceBetween: 24,
    pagination: {
	    el: '.swiper-pagination3',
	    clickable: true,
    },
    autoplay: {
    	delay: 5000
    },
    speed: 2800,
    breakpoints: {
    	1200: {
    		slidesPerView: 2,
		    slidesPerGroup : 2,
		    spaceBetween: 30
    	}
    	, 768: {
    		slidesPerView: 1,
		    slidesPerGroup : 1,
		    spaceBetween: 30
    	}
    }
 });




//swiper stop&start
var control_btn = $('.control-btn');
var control_btn2 = $('.control-btn2');


function changeBtn(e) {
	e.preventDefault();
	var target = $(this);
	var swiper_gbn;

	//배너 슬라이드 구분
	if (target.parent().hasClass('control-btn')) {
		swiper_gbn = swiper2;
	} else if (target.parent().hasClass('control-btn2')) {
		swiper_gbn = swiper3;
	}

	// console.log(target);
 	if (target.attr('class') == 'sw_stop') {
 		swiper_gbn.autoplay.stop();
 		target.removeClass('sw_stop').addClass('sw_start');
 		target.find('img').attr('src', 'assets/img/icons/btn_play.png');
 	} else if (target.attr('class') == 'sw_start') {
 		swiper_gbn.autoplay.start();
 		target.removeClass('sw_start').addClass('sw_stop');
 		target.find('img').attr('src', 'assets/img/icons/btn_pause.png');
 	}
};

control_btn.find('a').click(changeBtn);
control_btn2.find('a').click(changeBtn);