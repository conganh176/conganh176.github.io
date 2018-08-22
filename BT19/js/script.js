var current = null;
var points = 0;
var time;
var html = '';

var front = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
front = front.sort(function() { return 0.5 - Math.random() });

var cards = front.slice(0,6);
cards = cards.concat(cards);

function easy() {
	time = 3;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;
	setTimeout(function(){
		$(function() {
			var run = setInterval(function() {
				time --;
				console.log(time);
				document.getElementById("time").value = time;
				document.getElementById("remains").innerHTML = time;
				if (time == 10) {
					tenseconds();
				}

				if (time == 5) {
					fiveseconds();
				}

				if (time == 0) {
					clearInterval(run);
					gameover();
					loseeasy();
				}
				if (points == 6) {
							clearInterval(run);
							setTimeout(function() {
							alert("Winner!");
							}, 500);
						}
				}, 1000);
		});
	}, 3500);
};

function medium() {
	time = 2;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;
	setTimeout(function(){
		$(function() {
			var run = setInterval(function() {
				time --;
				console.log(time);
				document.getElementById("time").value = time;
				document.getElementById("remains").innerHTML = time;
				if (time == 10) {
					tenseconds();
				}

				if (time == 5) {
					fiveseconds();
				}

				if (time == 0) {
					clearInterval(run);
					gameover();
					losemedium();
				}
				if (points == 6) {
							clearInterval(run);
							setTimeout(function() {
							alert("Winner!");
							}, 500);
						}
				}, 1000);
		});
	}, 3500);
};

function hard() {
	time = 1;
	document.getElementById("time").max = time;
	document.getElementById("maxs").innerHTML = time;
	document.getElementById("remains").innerHTML = time;
	setTimeout(function(){
		$(function() {
			var run = setInterval(function() {
				time --;
				console.log(time);
				document.getElementById("time").value = time;
				document.getElementById("remains").innerHTML = time;
				if (time == 10) {
					tenseconds();
				}

				if (time == 5) {
					fiveseconds();
				}

				if (time == 0) {
					clearInterval(run);
					gameover();
					losehard();
				}
				if (points == 6) {
							clearInterval(run);
							setTimeout(function() {
							alert("Winner!");
							}, 500);
						}
				}, 1000);
		});
	}, 3500);
};

function tenseconds() {
	$('.times').addClass("blink");
	$('.wrap').css('filter', 'grayscale(25%');
	$('.wrap').css("transition", "filter 0.5s ease-in-out")
}

function fiveseconds() {
	$('.times').removeClass("blink").addClass("blinkfaster");
	$('.wrap').css('filter', 'grayscale(50%');
	$('.wrap').css("transition", "filter 0.5s ease-in-out")
}



function start() {
	

	$(".black").css("display", "block");
	$(".black").css("visibility", "visible");
	setTimeout(function(){
		$(".black").css("opacity", "1");
		$('.start').css("opacity", "0");
		$('video').css("display", "block");
		$('video').css("visibility", "visible")
	});

	setTimeout(function() {
		$('body').css('background', 'url("img/background.png")');
		$(".black").css("opacity", "0");
		$('.start').css("visibility", "hidden");
    	$('.start').css("display", "none");
    	$('.body').css("display", "block");
		$('.body').css("visibility", "visible");
		$('.times').css("display", "block");
		$('.times').css("visibility", "visible");
		$('video').css("opacity", "1")
		$('#openvideo')[0].play();
	}, 1000);

	setTimeout(function() {
		$(".black").css("opacity", "1");
	}, 2000);

	setTimeout(function() {
		$('video').css("display", "none");
		$('video').css("visibility", "hidden")
		$(".black").css("opacity", "0");
	}, 3000);

	setTimeout(function(){
		$('.body').css("opacity", "1");
		$('.times').css("opacity", "1");
		$(".black").css("display", "none");
		$(".black").css("visibility", "hidden");

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

		});
	}, 3500);
}

function gameover() {
		$('.card').css('pointer-events', 'none');
		$('.times').removeClass("blinkfaster");
		$('.wrap').css('filter', 'grayscale(100%');
		$('.wrap').css("transition", "filter 0.5s ease-in-out");
		$(".black").css("display", "block");
		$(".black").css("visibility", "visible");
	setTimeout(function() {	
		$('.black').css("opacity", "1");
		$('.black').css('transition', 'opacity 1s ease-in-out');
		$('.body').css("opacity", "0");
		$('.times').css("opacity", "0");
	});
	setTimeout(function() {
		$('.black').css("opacity", "0");
		$('.body').css("display", "none");
		$('.body').css("visibility", "hidden");
		$('.times').css("display", "none");
		$('.times').css("visibility", "hidden");
	}, 1500);
	setTimeout(function() {
		$('.black').css("display", "none");
		$('.black').css("visibility", "hidden");
	}, 2000);
}

function loseeasy() {
	setTimeout(function() {
		$('body').css('background', 'url("img/gameover1.png") no-repeat center center fixed');
		$('body').css('background-color', 'black');
		$('#easy').css('visibility', 'visible');
		$('#easy').css('display', 'block');
	}, 1000);
	setTimeout(function() {
		$('#easy').css('opacity', "1");
		$('#easy').css('transition', 'opacity 3s ease-in-out');
	}, 3000);
}

function losemedium() {
	setTimeout(function() {
		$('body').css('background', 'url("img/gameover3.png") no-repeat center center fixed');
		$('body').css('background-color', 'black');
		$('#medium').css('visibility', 'visible');
		$('#medium').css('display', 'block');
	}, 1000);
	setTimeout(function() {
		$('#medium').css('opacity', "1");
		$('#medium').css('transition', 'opacity 3s ease-in-out');
	}, 3000);
}

function losehard() {
	setTimeout(function() {
		$('body').css('background', 'url("img/gameover2.jpg") no-repeat center center fixed');
		$('body').css('background-color', 'black');
		$('#hard').css('visibility', 'visible');
		$('#hard').css('display', 'block');
	}, 1000);
	setTimeout(function() {
		$('#hard').css('opacity', "1");
		$('#hard').css('transition', 'opacity 3s ease-in-out');
	}, 3000);
}

function again() {
	points = 0;
	$(".black").css("display", "block");
	$(".black").css("visibility", "visible");
	setTimeout(function() {
		$('.wrap').css('filter', 'grayscale(0');
		$('.black').css("opacity", "1");
		$('#easy').css('opacity', "0");
		$('#easy').css('transition', 'opacity 1s ease-in-out');
		$('#medium').css('opacity', "0");
		$('#medium').css('transition', 'opacity 1s ease-in-out');
		$('#hard').css('opacity', "0");
		$('#hard').css('transition', 'opacity 1s ease-in-out');
	});
	setTimeout(function() {
		$('body').css('background', 'url("img/background2.jpg") no-repeat center center fixed');
		$('body').css('background-color', 'black');
		$('#easy').css("display", "none");
		$('#easy').css("visibility", "hidden");
		$('#medium').css("display", "none");
		$('#medium').css("visibility", "hidden");
		$('#hard').css("display", "none");
		$('#hard').css("visibility", "hidden");
		$('.black').css("opacity", "0");
		$('.start').css("display", "block");
		$('.start').css("visibility", "visible");
	}, 1000);
	setTimeout(function() {
		$('.start').css('opacity', '1');
		$('.start').css('transition', 'opacity 1s ease-in-out');
		$('.start').css
		$('.black').css("display", "none");
		$('.black').css("visibility", "hidden");
	}, 2000);
}

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
