$(function(){
	$("#gnb > li").hover(function(){
		$("#header").stop().animate({height:355},400);
	})

	$("#header").mouseleave(function(){
		$("#header").stop().animate({height:115},400);
	})
})