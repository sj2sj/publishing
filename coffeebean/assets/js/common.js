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




/* --- login 탭 선택 이벤트 --- */
var login_tabMenu = $('.login_area');

//컨텐츠 내용 hide & show 처리
login_tabMenu.find('ul > li > div').hide();
login_tabMenu.find('li.active > div').show();


function tabList(e) {
    e.preventDefault(); //#기능 차단
    var target = $(this);
    target.find('> div').show().parent('li').addClass('active').siblings('li').removeClass('active').find('> div').hide();
}

login_tabMenu.find('> form > ul > li').click(tabList).focus(tabList);
/* ---///login 탭 선택 이벤트 끝 --- */







