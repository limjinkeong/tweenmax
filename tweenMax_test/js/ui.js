$(function(){
	$("button").on('click',function () {
		TweenMax.to($('.box'), 3, {width:100, height:100, backgroundColor:"#00ff00"})
	})
})
