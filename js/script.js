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

	//challenge 2 - when the image is presed coresponding paragraph is displayed
	$(".card_image").click( function() {
		var para = $(this).next().children("p");
		if (para.css("display") == "none"){
			para.slideDown("slow");
		} else {
			para.slideUp("slow");
		}
	});

	//challenge 3 - when card is pressed the card is highlighted
	$(".card").click(function(){
		$(this).toggleClass("highlight");
	})

	//challenge 4

	$("ul").append("<li id=\"all_btn\">ALL</li>");
	$("ul").append("<li id=\"select_btn\">SELECTED</li> ");
	
	$("#all_btn").click(function () {
		console.log("clicked click")
		var par = $(".card_bottom").children("p");
		if (par.css("display") == "none") {
			par.slideDown("slow");
		} else {
			par.slideUp("slow");
		}
	});

	$("#select_btn").click(function() {
		$(".card").each(function(){
			var par = $(this).children(".card_bottom").children("p");
			if($(this).hasClass("highlight")){
				par.slideDown("slow");
			} else {
				par.slideUp("slow");
			}
		});
	});

	//this code is unrelated to the challanges and I added it myself

	$("ul").append("<li id=\"none_btn\">NONE</li> ");

	$("#none_btn").click(function() {
		$(".card_bottom").children("p").slideUp();
		$(".card").removeClass("highlight");
	}) 

}); 
