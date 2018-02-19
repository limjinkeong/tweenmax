$(function(){
  // [뭘?어떻게?] 부분에 paused:true 옵션을 추가로 넣어주었습니다.
// paused:true 옵션은 현재 애니메이션 기능을 사용하지 않겠다는 의미입니다. (중지)
var myTween = new TweenLite.to('.box3', 7, {width:100, height:100, paused:true});

$('.btn_start').on('click',function(){
	myTween.resume();
  // resume 은 시작하다 입니다.
})

$('.btn_pause').on('click',function(){
	myTween.pause();
  // pause 은 멈춤
})

$('.btn_reverse').on('click',function(){
	myTween.reverse();
  // reverse 는 반전.
})

$('.btn_restart').on('click',function(){
	myTween.restart();
  // reverse 는 처음부터 다시시작
})
})
