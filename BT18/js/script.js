var current = null;

// var front = ["<img src='img/front1.png' alt='front1'>", 
// 			"<img src='img/front2.png' alt='front2'>",  
// 			"<img src='img/front3.png' alt='front3'>", 
// 			"<img src='img/front4.png' alt='front4'>", 
// 			"<img src='img/front5.png' alt='front5'>", 
// 			"<img src='img/front6.png' alt='front6'>", 
// 			"<img src='img/front7.png' alt='front7'>", 
// 			"<img src='img/front8.png' alt='front8'>",
// 			"<img src='img/front9.png' alt='front9'>", 
// 			"<img src='img/front10.png' alt='front10'>",
// 			"<img src='img/front11.png' alt='front11'>", 
// 			"<img src='img/front12.png' alt='front12'>", 
// 			"<img src='img/front13.png' alt='front13'>",
// 			"<img src='img/front14.png' alt='front14'>",
// 			"<img src='img/front15.png' alt='front15'>",
// 			"<img src='img/front16.png' alt='front16'>", 
// 			"<img src='img/front17.png' alt='front17'>", 
// 			"<img src='img/front18.png' alt='front18'>", 
// 			"<img src='img/front19.png' alt='front19'>", 
// 			"<img src='img/front20.png' alt='front20'>", 
// 			"<img src='img/front21.png' alt='front21'>",
// 			"<img src='img/front21b.png' alt='front21b'>",
// 			"<img src='img/front22.png' alt='front22'>",
// 			"<img src='img/front12b.png' alt='front12b'>"].sort(function() { return 0.5 - Math.random() });

var front = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
front = front.sort(function() { return 0.5 - Math.random() });

var cards = front.slice(0,6);
// var shufflecards = cards.concat(cards).sort(function() { return 0.5 - Math.random() });

// for (var i = 0; i < $('.front').length; i++) {
// 	$('.front')[i].innerHTML = shufflecards[i];
// 	$('.back')[i].innerHTML = "<img src='img/back.png' alt = 'back'>";
// }

$(function() {
	cards = cards.concat(cards);
	cards = cards.sort(function() { return 0.5 - Math.random() });
	var html = '';
	for (var i = 0; i < cards.length; i++ ) {
		html += '<div class = "card" data-name ="' + cards[i] + '" onclick = "pick(this)">' +
			'<div class = "front hide"><img src="img/front' + cards[i] + '.png" alt="front' + cards[i] + '"></div>' +
			'<div class = "back show"><img src="img/back.png" alt = "back"></div></div>'
	};
	$('.body').html(html);
});

$(".card").mouseenter(function(){
	$("#hoveraudio")[0].play();
});

$(".card").mouseout(function(){
	$("#hoveraudio")[0].pause();
	$("#hoveraudio")[0].currentTime = 0;

});

function pick(x) {
	$(x).find(".back").toggleClass("show").toggleClass("hide");
	$(x).find(".front").toggleClass("show").toggleClass("hide");
	if (!current) {
		current = $(x);
	}
	else {
		if (current.attr("data-name") != $(x).attr("data-name")) {
			console.log("Wrong");
			current.toggleClass("show").toggleClass("hide");
			// $(x).find(".front").toggleClass("hide").toggleClass("show");
			// $(x).find(".back").toggleClass("show").toggleClass("hide");
			current = null;
		}
		else {
			console.log("Correct");
			current = null;
		}
	}
}

// $(".card").click(function() {
// 	$(this).find(".back").addClass("hide");
// 	$(this).find(".back").removeClass("show");
// 	$(this).find(".front").addClass("show");
// 	$(this).find(".front").removeClass("hide");
// 	$("#hoveraudio")[0].pause();
// 	$("#hoveraudio")[0].currentTime = 0;
// 	$("#clickaudio")[0].play();

// 	if ($(this).find("front show")) {
// 		$(this).hover(function(){
// 			$(this).css("filter", "brightness(100%)");
// 			$(this).css("cursor", "default");
// 			$("#hoveraudio")[0].pause();
// 			$("#hoveraudio")[0].currentTime = 0;
// 		})
// 		$(this).click(function(){
// 			$(this).css("filter", "brightness(100%)");
// 			$(this).css("cursor", "default");
// 			$("#clickaudio")[0].pause();
// 			$("#clickaudio")[0].currentTime = 0;
// 		})
// 	}
// });
