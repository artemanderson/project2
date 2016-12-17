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


	var images = ["space1.jpeg", "space2.jpg", "space3.jpg"];

	$("body").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] +")"});


/* home animations*/

	$("#image1").mouseenter(function() {
		$("#plus1").toggleClass("test_1");
		$("#plus1h").toggleClass("test_2");
		$("#plus1v").toggleClass("test_3");
	});

	$("#image1").mouseleave(function() {
		$("#plus1").toggleClass("test_1");
		$("#plus1h").toggleClass("test_2");
		$("#plus1v").toggleClass("test_3");
	});

	$("#image2").mouseenter(function() {
		$("#plus2").toggleClass("test_1");
		$("#plus2h").toggleClass("test_2");
		$("#plus2v").toggleClass("test_3");
	});

	$("#image2").mouseleave(function() {
		$("#plus2").toggleClass("test_1");
		$("#plus2h").toggleClass("test_2");
		$("#plus2v").toggleClass("test_3");
	});
	$("#simg1").mouseenter(function() {
		$("#splus1").toggleClass("stest_1");
		$("#splus1h").toggleClass("stest_2");
		$("#splus1v").toggleClass("stest_3");
	});

	$("#simg1").mouseleave(function() {
		$("#splus1").toggleClass("stest_1");
		$("#splus1h").toggleClass("stest_2");
		$("#splus1v").toggleClass("stest_3");
	});

	$("#simg2").mouseenter(function() {
		$("#splus2").toggleClass("stest_1");
		$("#splus2h").toggleClass("stest_2");
		$("#splus2v").toggleClass("stest_3");
	});

	$("#simg2").mouseleave(function() {
		$("#splus2").toggleClass("stest_1");
		$("#splus2h").toggleClass("stest_2");
		$("#splus2v").toggleClass("stest_3");
	});

	$("#simg3").mouseenter(function() {
		$("#splus3").toggleClass("stest_1");
		$("#splus3h").toggleClass("stest_2");
		$("#splus3v").toggleClass("stest_3");
	});

	$("#simg3").mouseleave(function() {
		$("#splus3").toggleClass("stest_1");
		$("#splus3h").toggleClass("stest_2");
		$("#splus3v").toggleClass("stest_3");
	});

/* Juno animations*/

	$("#image3").mouseenter(function() {
		$("#plus3").toggleClass("test_1");
		$("#plus3h").toggleClass("test_2");
		$("#plus3v").toggleClass("test_3");
	});

	$("#image3").mouseleave(function() {
		$("#plus3").toggleClass("test_1");
		$("#plus3h").toggleClass("test_2");
		$("#plus3v").toggleClass("test_3");
	});
	$("#jimg1").mouseenter(function() {
		$("#jplus1").toggleClass("stest_1");
		$("#jplus1h").toggleClass("stest_2");
		$("#jplus1v").toggleClass("stest_3");
	});

	$("#jimg1").mouseleave(function() {
		$("#jplus1").toggleClass("stest_1");
		$("#jplus1h").toggleClass("stest_2");
		$("#jplus1v").toggleClass("stest_3");
	});

	$("#jimg2").mouseenter(function() {
		$("#jplus2").toggleClass("stest_1");
		$("#jplus2h").toggleClass("stest_2");
		$("#jplus2v").toggleClass("stest_3");
	});

	$("#jimg2").mouseleave(function() {
		$("#jplus2").toggleClass("stest_1");
		$("#jplus2h").toggleClass("stest_2");
		$("#jplus2v").toggleClass("stest_3");
	});
	
	$("#jimg3").mouseenter(function() {
		$("#jplus3").toggleClass("stest_1");
		$("#jplus3h").toggleClass("stest_2");
		$("#jplus3v").toggleClass("stest_3");
	});

	$("#jimg3").mouseleave(function() {
		$("#jplus3").toggleClass("stest_1");
		$("#jplus3h").toggleClass("stest_2");
		$("#jplus3v").toggleClass("stest_3");
	});

});