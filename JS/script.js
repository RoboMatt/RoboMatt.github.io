$(document).ready(function(){
	$("button").mouseenter(function(){
		$("button").stop().animate({"background-color": "#f16272", "width":"125px"}, 500);

	});
	$("button").mouseleave(function(){
		$("button").stop().animate({"background-color": "#28bce1", "width":"200px"}, 500);

	});
});
