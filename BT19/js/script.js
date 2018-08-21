var current = null;
var points = 0;
var time;
var html = '';


// function easy() {
// 	time = 60;
// }

// function medium() {
// 	time = 30;
// }

// function hard() {
// 	time = 15;
// }

var front = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
front = front.sort(function() { return 0.5 - Math.random() });

var cards = front.slice(0,6);
cards = cards.concat(cards);

function easy() {
	time = 60;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;

	$(".black").css("display", "block");
	$(".black").css("visibility", "visible");
	setTimeout(function(){
	$(".black").css("opacity", "1");
	$('.start').css("opacity", "0");
	$('.start').css("transition", "opacity 1s ease-in-out")
	});
	// $('.black').css("transition", "opacity 1s ease-in-out")
	
	setTimeout(function(){
		$(".black").css("display", "none");
		$(".black").css("visibility", "hidden");
	}, 2000);

	setTimeout(function(){
		$('body').css('background', 'url("img/background.png")');
		$(".black").css("opacity", "0");
		$('.start').css("visibility", "hidden");
    	$('.start').css("display", "none");
    	$('.body').css("display", "block");
		$('.body').css("visibility", "visible");
		$('.times').css("display", "block");
		$('.times').css("visibility", "visible");
	}, 1000);

	setTimeout(function(){
	$('.body').css("opacity", "1");
	$('.body').css("transition", "opacity 1s ease-in-out")
	$('.times').css("opacity", "1");
	$('.times').css("transition", "opacity 1s ease-in-out")


	$(function() {
	
		cards = cards.sort(function() { return 0.5 - Math.random() });
	
		for (var i = 0; i < cards.length; i++ ) {
			html += '<div class = "card" data-name ="' + cards[i] + '" onclick = "pick(this)">' +
				'<div class = "front"><img src="img/front' + cards[i] + '.png" alt="front' + cards[i] + '"></div>' +
				'<div class = "back pick"><img src="img/back.png" alt = "back"></div></div>'
		};
		$('.body').html(html);
	
		$(".card").mouseenter(function(){
			$("#hoveraudio")[0].play();
		});

		$(".card").mouseout(function(){
			$("#hoveraudio")[0].pause();
			$("#hoveraudio")[0].currentTime = 0;
		});

		$(".card").click(function(){
			$("#hoveraudio")[0].pause();
		 	$("#hoveraudio")[0].currentTime = 0;
			$("#clickaudio")[0].play();
		});

		var run = setInterval(function() {
			time --;
			console.log(time);
			document.getElementById("time").value = time;
			document.getElementById("remains").innerHTML = time;
			if (time == 10) {
				$('.times').addClass("blink");
			}

			if (time == 5) {
				$('.times').removeClass("blink").addClass("blinkfaster");
			}

			if (time == 0) {
				clearInterval(run);
				$('.card').css('pointer-events', 'none');
				// alert("Loser!");
			}
			if (points == 6) {
						clearInterval(run);
						setTimeout(function() {
						alert("Winner!");
						}, 500);
					}
			}, 1000);
		});
	}, 2000);
}

function medium() {
	time = 30;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;
	$('.start').css("opacity", "0");
	setTimeout(function(){
		$('.start').css("visibility", "hidden");
    	$('.start').css("display", "none");
	}, 1000);
	$('body').css('background', 'url("img/background.png")');
	$('.body').css("opacity", "1");
	$('.body').css("display", "block");
	$('.body').css("visibility", "visible");
	$('.times').css("opacity", "1");
	$('.times').css("display", "block");
	$('.times').css("visibility", "visible");
	
	$(function() {
	
	cards = cards.sort(function() { return 0.5 - Math.random() });
	
	for (var i = 0; i < cards.length; i++ ) {
		html += '<div class = "card" data-name ="' + cards[i] + '" onclick = "pick(this)">' +
			'<div class = "front"><img src="img/front' + cards[i] + '.png" alt="front' + cards[i] + '"></div>' +
			'<div class = "back pick"><img src="img/back.png" alt = "back"></div></div>'
	};
	$('.body').html(html);
	
	$(".card").mouseenter(function(){
		$("#hoveraudio")[0].play();
	});

	$(".card").mouseout(function(){
		$("#hoveraudio")[0].pause();
		$("#hoveraudio")[0].currentTime = 0;
	});

	$(".card").click(function(){
		$("#hoveraudio")[0].pause();
	 	$("#hoveraudio")[0].currentTime = 0;
		$("#clickaudio")[0].play();
	});

	var run = setInterval(function() {
		time --;
		console.log(time);
		document.getElementById("time").value = time;
		document.getElementById("remains").innerHTML = time;
		if (time == 10) {
			$('.times').addClass("blink");
		}

		if (time == 5) {
			$('.times').removeClass("blink").addClass("blinkfaster");
		}

		if (time == 0) {
			clearInterval(run);
			$('.card').css('pointer-events', 'none');
			// alert("Loser!");
		}
		if (points == 6) {
					clearInterval(run);
					setTimeout(function() {
					alert("Winner!");
					}, 500);
				}
	}, 1000);
});
}

function hard() {
	time = 15;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;
	$('.start').css("opacity", "0");
	setTimeout(function(){
		$('.start').css("visibility", "hidden");
    	$('.start').css("display", "none");
	}, 1000);
	$('body').css('background', 'url("img/background.png")');
	$('.body').css("opacity", "1");
	$('.body').css("display", "block");
	$('.body').css("visibility", "visible");
	$('.times').css("opacity", "1");
	$('.times').css("display", "block");
	$('.times').css("visibility", "visible");
	
	$(function() {
	
	cards = cards.sort(function() { return 0.5 - Math.random() });
	
	for (var i = 0; i < cards.length; i++ ) {
		html += '<div class = "card" data-name ="' + cards[i] + '" onclick = "pick(this)">' +
			'<div class = "front"><img src="img/front' + cards[i] + '.png" alt="front' + cards[i] + '"></div>' +
			'<div class = "back pick"><img src="img/back.png" alt = "back"></div></div>'
	};
	$('.body').html(html);
	
	$(".card").mouseenter(function(){
		$("#hoveraudio")[0].play();
	});

	$(".card").mouseout(function(){
		$("#hoveraudio")[0].pause();
		$("#hoveraudio")[0].currentTime = 0;
	});

	$(".card").click(function(){
		$("#hoveraudio")[0].pause();
	 	$("#hoveraudio")[0].currentTime = 0;
		$("#clickaudio")[0].play();
	});

	var run = setInterval(function() {
		time --;
		console.log(time);
		document.getElementById("time").value = time;
		document.getElementById("remains").innerHTML = time;
		if (time == 10) {
			$('.times').addClass("blink");
		}

		if (time == 5) {
			$('.times').removeClass("blink").addClass("blinkfaster");
		}

		if (time == 0) {
			clearInterval(run);
			$('.card').css('pointer-events', 'none');
			// alert("Loser!");
		}
		if (points == 6) {
					clearInterval(run);
					setTimeout(function() {
					alert("Winner!");
					}, 500);
				}
	}, 1000);
});
}

// $(function() {
	
// 	cards = cards.sort(function() { return 0.5 - Math.random() });
// 	var html = '';
// 	for (var i = 0; i < cards.length; i++ ) {
// 		html += '<div class = "card" data-name ="' + cards[i] + '" onclick = "pick(this)">' +
// 			'<div class = "front"><img src="img/front' + cards[i] + '.png" alt="front' + cards[i] + '"></div>' +
// 			'<div class = "back pick"><img src="img/back.png" alt = "back"></div></div>'
// 	};
// 	$('.body').html(html);
	
// 	$(".card").mouseenter(function(){
// 		$("#hoveraudio")[0].play();
// 	});

// 	$(".card").mouseout(function(){
// 		$("#hoveraudio")[0].pause();
// 		$("#hoveraudio")[0].currentTime = 0;
// 	});

// 	$(".card").click(function(){
// 		$("#hoveraudio")[0].pause();
// 	 	$("#hoveraudio")[0].currentTime = 0;
// 		$("#clickaudio")[0].play();
// 	});

// 	var run = setInterval(function() {
// 		time --;
// 		console.log(time);
// 		document.getElementById("time").value = time;
// 		document.getElementById("remains").innerHTML = time;
// 		if (time == 10) {
// 			$('.times').addClass("blink");
// 		}

// 		if (time == 5) {
// 			$('.times').removeClass("blink").addClass("blinkfaster");
// 		}

// 		if (time == 0) {
// 			clearInterval(run);
// 			$('.card').css('pointer-events', 'none');
// 			// alert("Loser!");
// 		}
// 		if (points == 6) {
// 					clearInterval(run);
// 					setTimeout(function() {
// 					alert("Winner!");
// 					}, 500);
// 				}
// 	}, 1000);
// });


function pick(x) {
	$(x).find(".back").toggleClass("pick");
	$(x).find(".front").toggleClass("pick");

	if (!current) {
		current = $(x);
		current.css('pointer-events', 'none');
	}
	else {
		if (current.attr("data-name") != $(x).attr("data-name")) {
			$('.card').css('pointer-events', 'none');
			console.log("Wrong");
			setTimeout(function() {
				$("#hoveraudio")[0].pause();
				$("#hoveraudio")[0].currentTime = 0;
				$("#clickaudio")[0].pause();
				$("#clickaudio")[0].currentTime = 0;
				$("#wrongaudio")[0].play();
				$(x).find(".front").toggleClass("pick");
				$(x).find(".back").toggleClass("pick");
				current.find(".front").toggleClass("pick");
				current.find(".back").toggleClass("pick");
				$('.card').css('pointer-events', 'auto');
				current = null; 
			}, 500);
		}
		else {
			console.log("Correct");
			setTimeout(function() {
				points += 1;
				$("#hoveraudio")[0].pause();
				$("#hoveraudio")[0].currentTime = 0;
				$("#clickaudio")[0].pause();
				$("#clickaudio")[0].currentTime = 0;
				$("#correctaudio")[0].play();
				$(x).find(".front").css("opacity", "0");
				$(x).find(".back").css("opacity", "0");
				current.find(".front").css("opacity", "0");
				current.find(".back").css("opacity", "0");
				$(x).find(".front").css("visibility", "hidden");
				current.find(".front").css("visibility", "hidden");
				$(x).css("cursor", "default");
				current.css("cursor", "default");
				$(x).removeAttr('onclick');
				current.removeAttr('onclick');
				$(x).unbind("mouseenter mouseout click");
				current.unbind("mouseenter mouseout click");
				current = null;
				
			}, 500);

		}
	}
}
