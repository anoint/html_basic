$(function(){
	init();
})
function init(){
	//영역 구별하기 위해서 함수로 묶어줌 (지역변수로 쓰기 위해서)
	//이름 설정할때 같은 이름으로 써도 효과가 겹치지 않게하기 위해서
	banner();
	mainVisual();
	gnb();
}

function banner(){
	var arrURL = []
	arrURL[0] = "http://www.naver.com"
	arrURL[1] = "http://www.google.com"
	arrURL[2] = "http://www.nate.com"
	arrURL[3] = "http://www.daum.net"
	arrURL[4] = "http://tjoeun.co.kr"

	var arrTitle=["red","green","blue","aaa","bbb","ccc","ddd","eee"]

	var cnt = 0;
	var timer = 0, delay = 3000, totalImg = arrURL.length;
	$(".banner h3").text(arrTitle[cnt]);
	timer = setInterval(make, delay);
	function make(){
		cnt++;
		//if 롤링 7이상이면 다시 0부터
		if(cnt > totalImg-1){cnt = 0}
		$(".banner h3").text(arrTitle[cnt]);
		//사진바꾸기
		$(".banner img").attr("src","images/img"+cnt+".png")
						.css("opacity","0")
						.animate({opacity:1},400);
		//.banner 호버하면 멈춤/ 아웃 다시 3초단위로 롤링
		}
		$(".banner").hover(function(){
			clearInterval(timer); //timer를 꺼라
		},function(){
			timer = setInterval(make, delay);
		});
		//배너를 누르면 사이트 이동하기, 네이버,네이트, 등 배열처리
		
		$(".banner").click(function(){
			window.open(arrURL[cnt]);
		});
	
}//end banner

function mainVisual(){
	var cnt = 0;
}//end mainVisual

function gnb(){
	var cnt = 0;
}//ed gnb