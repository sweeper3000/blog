$(document).ready(function(){

	// expand all posts
	
	$("#show-all").click(function(){
		$(".post-content").show();
	});

	// expand "Use Signal"

	$("#expand-signal").click(function(){
		$("#signal-01").show();
	});

	// expand "Why You Shouln't Use BBM"

	$("#expand-no-bbm").click(function(){
		$("#bbm-01").show();
	});
});
