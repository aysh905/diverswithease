// Empty JS for your own code to be here
$(function(){
	$(".sec-toggle").on("click", function(e){
		e.preventDefault();
		var target = $(this).attr("data-target");
		$("#first-step, #second-step").removeClass("active");
		$(target).addClass("active");
		$(".sec-toggle").toggleClass("active");
	});
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});