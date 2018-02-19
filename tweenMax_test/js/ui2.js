$(function(){
  var box = $(".box2");
  $("button").on('click', function(){
  	// 선택자를 변수에 담아 사용할 수 있습니다.
    // .fromTo() 는 시작값과 종료값을 지정할 수 있습니다.
  	TweenLite.fromTo(box, 3, {
    		// 시작값
        scaleX:0.5,
        scaleY:0.5,
        backgroundColor:"#000"
      }, {
      	// 종료값
      	scaleX:1,
        scaleY:1,
        backgroundColor:"#00ff00"
      });
  });
})
