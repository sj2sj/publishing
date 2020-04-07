
/*------ 탑버튼 스크롤 이벤트 시작 ------*/
$(window).scroll(function() {
    //console.log($(this).scrollTop());
    if ($(this).scrollTop() > 200) {
        $('#top_btn').fadeIn();
    } else {
        $('#top_btn').fadeOut();
    }
});

$("#top_btn").click(function() {
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
});
/*------ 탑버튼 스크롤 이벤트 끝 ------*/



/* --- service_box , notice_box 탭 선택 이벤트 --- */
var service_tabMenu = $('.service_box');
var notice_tabMenu = $('.notice_box');

//컨텐츠 내용 hide & show 처리
service_tabMenu.find('ul > li > ul').hide();
service_tabMenu.find('li.active > ul').show();

notice_tabMenu.find('ul > li > ul').hide();
notice_tabMenu.find('li.active > ul').show();


function tabList(e) {
    e.preventDefault(); //#기능 차단
    var target = $(this);
    target.parent('h4').next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
}

service_tabMenu.find('ul > li > h4 > a').click(tabList).focus(tabList);
notice_tabMenu.find('ul > li > h4 > a').click(tabList).focus(tabList);
/* ---///service_box , notice_box 탭 선택 이벤트 끝 --- */





/* --- info_box 탭 선택 이벤트 --- */
var info_tabMenu = $('.info_box');
//컨텐츠 내용 hide & show 처리
info_tabMenu.find('ul > li > div').hide().find('+ a').hide();
info_tabMenu.find('li.active > div').show().find('+ a').show();

function info_tabList(e) {
    e.preventDefault(); //#기능 차단
    var target = $(this);
    target.parent('h4').next().show().find('+ a').show().parent('li').addClass('active').siblings('li').removeClass('active').find(' > div').hide().find('+ a').hide();
}
info_tabMenu.find('ul > li > h4 > a').click(info_tabList).focus(info_tabList);
/* --- ///info_box 탭 선택 이벤트 끝 --- */





/* --- footer_menu 클릭 이벤트 --- */
var footer_menu = $('.footer_menu');
//메뉴 내용 hide & show 처리
footer_menu.find('> li > div').hide();

function toggleMenu (e) {
	e.preventDefault();
	var target = $(this);
	target.find('> div').slideToggle().parent('li').addClass('active').siblings('li').removeClass('active').find('> div').hide();
}
function toggleMenuDown (e) {
	var target = $(this);
	target.find('> div').hide().parent('li').removeClass('active');
}
footer_menu.find('> li').click(toggleMenu).mouseleave(toggleMenuDown);
/* --- footer_menu 클릭 이벤트 끝 --- */






/* --- gnb menu mosuehover시 height값 변경 --- */
var maxInnerHeight = 0;
var maxHeight = 0;
var depthHeight = 0;
initHeight(); //call initHeight()

/*
    initHeight
    초기 height 설정 load되고 최초 실행
*/
function initHeight() {
    $(".gnb_box .gnb_depth1").each(function () {
        if ($(this).innerHeight() > maxInnerHeight) {
            maxInnerHeight = $(this).innerHeight();
        }
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    //.gnb_depth1 중 Height가 가장 큰 것으로 변경
    $('.gnb_box_area').height(maxInnerHeight+'px');
    $('.gnb_box .gnb_depth1').height(maxHeight+'px');

    console.log(depthHeight);
}


/*
    heightChange
    메뉴 depth height가 변경될 때마다
*/
function heightChange() {
    var sib = 0;
    var changeHeight = 0;
    //menuOn class 형제들 height 다 더해준 후에 열려있는 메뉴 height 더함
    $(this).siblings().each(function () {
        sib += $(this).height();
    })
    changeHeight = sib+depthHeight;

    console.log('change:'+changeHeight);

    if (changeHeight > maxInnerHeight) {
        $('.gnb_box .gnb_depth1').height(changeHeight+'px');
        $('.gnb_box_area').height($('.gnb_box .gnb_depth1').innerHeight()+'px');
    } else {
        $('.gnb_box_area').height(maxInnerHeight+'px');
        $('.gnb_box .gnb_depth1').height(maxHeight+'px');
    }
}



/* --- .gnb_depth1 click event --- */
var gnb_depth1 = $('.gnb_depth1');
function toggleGnbDepth() {
    if ($(this).hasClass('menuOn')) { //클릭한 li가 이미 열려있는 li라면
        $(this).removeClass('menuOn');
        depthHeight = 0;
    } else { //다른 li를 클릭했다면
        gnb_depth1.find('.menuOn').removeClass('menuOn');
        $(this).addClass('menuOn');
        depthHeight = $('.menuOn').height();
    }
    heightChange.call(this); //call heightChange()
}
gnb_depth1.find('> li').click(toggleGnbDepth);

