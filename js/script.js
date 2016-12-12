$(document).ready(function() {
	
	$("#one").hover(function() {
		$("#one_sub").fadeIn(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#two").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeIn(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#three").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeIn(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#four").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeIn(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#five").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeIn(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#six").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeIn(200);
		$("#seven_sub").fadeOut(200);
	});

	$("#seven").hover(function() {
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeIn(200);
	});

	$("html").click(function() { // to turn off all submenus, you'll have to click anywhere else on the screen. In reality, "html" will have to be replaced with a different element.
		$("#one_sub").fadeOut(200);
		$("#two_sub").fadeOut(200);
		$("#three_sub").fadeOut(200);
		$("#four_sub").fadeOut(200);
		$("#five_sub").fadeOut(200);
		$("#six_sub").fadeOut(200);
		$("#seven_sub").fadeOut(200);
	});

	$(document).ready(function() {

	var images = ["space1.jpeg", "space2.jpg", "space3.jpg"];

	$("body").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] +")"});
	});


});