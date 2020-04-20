$(function(){
	init();
})
function init(){
	time(); //영역분리위해 함수 생성
	bg();
}
function time(){
	var timer = 0 , delay = 1000;
	timer = setInterval(make,delay);
	make();
	function make(){
		var now = new Date();
		var hr = now.getHours();
		var min = aaa(now.getMinutes());
		var sec = aaa(now.getSeconds());
		
		if(hr > 12){
			hr = hr - 12;
		}else{
			hr = hr;
		}
		hr = aaa(hr);

		$("p span").eq(0).text(hr);
		$("p span").eq(1).text(min);
		$("p span").eq(2).text(sec);
	}
	function aaa(num){
		if(num < 10){
			return "0"+num;
		}else{
			return num;
		}
	}
	var now = new Date();
	var h = now.getHours(); //24시간제

	var arr = ["morning","afternoon","evening","night"];
	function bbb(num){
		$("#wrap").removeClass(); //공란으로 남기면 다 떨어져 나감
		$("#wrap").addClass(arr[num]);
		$("nav li").removeClass("on");
		$("nav li").eq(num).addClass("on");
	}
	//현재 시간이 5시 보다는 같거나 크고, 11시 보다는 작을때
	if(h >= 5 && h < 11){
		bbb(0);
	} else if(h >= 11 && h < 16){
		bbb(1);
	} else if(h >= 16 && h < 20){
		bbb(2);
	} else if(h >= 20 && h < 25){
		bbb(3);
	}
} //end time
function bg(){
	$("nav li").click(function(){
		var txt = $(this).children('a').text(); //nav li의 자식(children)에서 'a'의 텍스트를 갖고와라
		$("nav li").removeClass("on");
		$(this).addClass("on");
		$("#wrap").removeClass();
		$("#wrap").addClass(txt);
	});

} //end bg