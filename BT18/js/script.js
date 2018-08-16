var point = 0;

var front = ["<img src='img/front1.png' alt='front1'>", 
			"<img src='img/front2.png' alt='front2'>",  
			"<img src='img/front3.png' alt='front3'>", 
			"<img src='img/front4.png' alt='front4'>", 
			"<img src='img/front5.png' alt='front5'>", 
			"<img src='img/front6.png' alt='front6'>", 
			"<img src='img/front7.png' alt='front7'>", 
			"<img src='img/front8.png' alt='front8'>",
			"<img src='img/front9.png' alt='front9'>", 
			"<img src='img/front10.png' alt='front10'>",
			"<img src='img/front11.png' alt='front11'>", 
			"<img src='img/front12.png' alt='front12'>", 
			"<img src='img/front13.png' alt='front13'>",
			"<img src='img/front14.png' alt='front14'>",
			"<img src='img/front15.png' alt='front15'>",
			"<img src='img/front16.png' alt='front16'>", 
			"<img src='img/front17.png' alt='front17'>", 
			"<img src='img/front18.png' alt='front18'>", 
			"<img src='img/front19.png' alt='front19'>", 
			"<img src='img/front20.png' alt='front20'>", 
			"<img src='img/front21.png' alt='front21'>",
			"<img src='img/front21b.png' alt='front21b'>",
			"<img src='img/front22.png' alt='front22'>",
			"<img src='img/front12b.png' alt='front12b'>"].sort(function() { return 0.5 - Math.random() });

var slicedfront = front.slice(0,6).concat(front.slice(0,6));
var newslicefront = slicedfront.sort(function() { return 0.5 - Math.random() });

for (var i = 0; i < $('.front').length; i++) {
	$('.front')[i].innerHTML = newslicefront[i];
	$('.back')[i].innerHTML = "<img src='img/back.png' alt = 'back'>"
}

$(".card").mouseenter(function(){
	$("#hoveraudio")[0].play();
});

$(".card").mouseout(function(){
	$("#hoveraudio")[0].pause();
	$("#hoveraudio")[0].currentTime = 0;

});

$(".card").click(function() {
	$(this).find(".back").addClass("hide");
	$(this).find(".back").removeClass("show");
	$(this).find(".front").addClass("show");
	$(this).find(".front").removeClass("hide");
	$("#hoveraudio")[0].pause();
	$("#hoveraudio")[0].currentTime = 0;
	$("#clickaudio")[0].play();

	if ($(this).find("front show")) {
		$(this).hover(function(){
			$(this).css("filter", "brightness(100%)");
			$(this).css("cursor", "default");
			$("#hoveraudio")[0].pause();
			$("#hoveraudio")[0].currentTime = 0;
		})
		$(this).click(function(){
			$(this).css("filter", "brightness(100%)");
			$(this).css("cursor", "default");
			$("#clickaudio")[0].pause();
			$("#clickaudio")[0].currentTime = 0;
		})
	}
});

// function playSound(hoveraudio) {
// 	var hoveraudio=document.getElementById(hoveraudio);
// 	hoveraudio.play();
// }

// function stopSound(hoveraudio) {
// 	var hoveraudio=document.getElementById(hoveraudio);
// 	hoveraudio.pause();
// 	hoveraudio.currentTime = 0;
// }

// // function play(clickaudio) {
// // 	var audio2=document.getElementById(clickaudio);
// // 	audio2.play();
// // }