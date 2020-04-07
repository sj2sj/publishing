/*
datepicker 초기화
*/ 
$.datepicker.setDefaults({
    dateFormat: 'yy.mm.dd' //Input Display Format 변경
    ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시           
    ,showOn: "button" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
    ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
    ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    ,buttonText: "달력보기" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
    ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
    ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['월','화','수','목','금','토','일'] //달력의 요일 부분 텍스트
    ,dayNames: ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'] //달력의 요일 부분 Tooltip 텍스트             
});

$('#st_date').datepicker();
$('#ed_date').datepicker();



// 최근 1주일 클릭 이벤트 
$('#lastWeek').click(function(e) {
	e.preventDefault();
	$('#st_date').val(lastWeek());
	$('#ed_date').val(today());
}) 

// 최근 1개월 클릭 이벤트
$('#lastMonth').click(function(e) {
	e.preventDefault();
	$('#st_date').val(lastMonth(1));
	$('#ed_date').val(today());
}) 

// 최근 3개월 클릭 이벤트
$('#last3Month').click(function(e) {
	e.preventDefault();
	$('#st_date').val(lastMonth(3));
	$('#ed_date').val(today());
}) 

/* dateToString
입력받은 날짜를 string으로 변환한다.
*/
function dateToString(iDate) {
	iMonth = (iDate.getMonth() + 1);
	iDay = iDate.getDate();

	(iMonth > 9) ? iMonth = iMonth : iMonth = '0'+iMonth;
	(iDay > 9) ? iDay = iDay : iDay = '0'+iDay;

	return (iDate.getFullYear() + '.' + iMonth + '.' + iDay);
}

/* today 
오늘 날짜를 구한다.
*/
function today() {
	var d = new Date();
	return dateToString(d);
}


/* lastWeek
현재 날짜의 일주일 전을 구한다.
*/
function lastWeek() {
	var d = new Date();
	var day = d.getDate();
	d.setDate(day - 7);
	return dateToString(d);
}

/* lastMonth
현재 날짜의 n개월 전을 구한다.
*/
function lastMonth(n) {
	var d = new Date();
	var month = d.getMonth();
	d.setMonth(month - n);
	return dateToString(d);
}

