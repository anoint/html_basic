$(function(){
	$("#gnb > li").hover(function(){
		$("#gnb > li > ul").hide();
		$(this).find("ul").show();
	})
	
	$("#header").mouseleave(function(){
		$("#gnb > li > ul").hide();
	})
})