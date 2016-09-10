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

	// expand "Encryption Under Threat in Europe

	$("#expand-euro-crypto").click(function(){
		$("#euro-crypto-01").show();
	});

	// expand "The NSA Fight Must be the American People's Fight"

	$("#expand-nsa-stopped-by-people").click(function(){
		$("#nsa-halt-01").show();
	});

	// expand "Don't You Hate it When Something Comes Back Alive When it Should be Dead?"

	$("#expand-dead-bills-come-alive").click(function(){
		$("#dead-bill-alive-01").show();
	});
});
