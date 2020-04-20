$(function(){
	$("#gnb > li > ul").show().height(0).css("overflow","hidden");
	
	$("#gnb > li").hover(function(){
		$("#gnb > li > ul").stop().animate({height:0},400)
		$(this).find("ul").stop().animate({height:300},400)
	})
	$("#header").mouseleave(function(){
		$("#gnb > li > ul").stop().animate({height:0},400)
	})
})
/*
$(function(){
	$("#gnb > li").hover(function(){
		$("#gnb > li > ul").hide();
		$(this).find("ul").stop().show();
	})

	$("#header").mouseleave(function(){
		$("#gnb > li > ul").hide();
	})
})
*/