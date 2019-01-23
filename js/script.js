$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	//challenge 2
	$(".card_image").click( function() {
		var para = $(this).next().children("p");
		if (para.css("display") == "none"){
			para.slideDown("slow");
		} else {
			para.slideUp("slow");
		}
	});

	//challenge 3
	$(".card").click(function(){
		$(this).toggleClass("highlight");
	})

}); 
